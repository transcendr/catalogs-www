import { isArray } from "util"
import { InMemoryCache } from "apollo-cache-inmemory"
import { persistCache } from "apollo-cache-persist"

export const cache = new InMemoryCache({
  addTypename: true,
  dataIdFromObject: object => object.key || null,
})

if (typeof window !== "undefined") {
  persistCache({
    cache,
    storage: window.localStorage,
  })
}

export const cached = client => {
  const cache = !!client.cache ? client.cache : client
  return {
    read: (key, query) => {
      try {
        let results = client.readQuery({ query })
        if (results && results[key]) {
          return results[key]
        }
        return null
      } catch (e) {
        console.warn("cacheRequest (Read) Failed on client:", client)
        return null
      }
    },
    updateDeleted: (data, target, query) => {
      let cached,
        updated = {}
      try {
        // Query cache for data
        cached = cache.readQuery({ query })
        console.log("(updateDeleted) Existing cached data:", { cached, data })
        // Add newest document to the beginning of array
        if (
          cached &&
          typeof cached === "object" &&
          cached[target] &&
          isArray(cached[target])
        ) {
          updated[target] = cached[target].filter(x => x.key !== data.key)
          console.log("(updateDeleted) Existing cached updated:", updated)
        } else {
          updated[target] = []
          console.log("Empty cached updated", updated)
        }
        // Write new data to cache
        cache.writeQuery({
          query,
          data: updated,
        })
      } catch (e) {
        console.warn(`Cache Update Failed (cacheRequest):`, e)
      }
    },
    updateCreated: (data, key, query) => {
      let cached,
        updated = {}
      console.log("cacheRequest.update()", { cache, client, data, key, query })
      try {
        // Query cache for data
        cached = cache.readQuery({ query })
        console.log("Existing cached data:", cached)
        // Add newest document to the beginning of array
        if (
          cached &&
          typeof cached === "object" &&
          cached[key] &&
          isArray(cached[key])
        ) {
          cached[key].unshift(data.document)
          updated[key] = cached[key]
          console.log("Existing cached updated:", updated)
        } else {
          updated[key] = [data.document]
          console.log("Empty cached updated", updated)
        }
        // Write new data to cache
        cache.writeQuery({
          query,
          data: updated,
        })
      } catch (e) {
        console.warn(`Cache Update Failed (cacheRequest):`, e)
      }
    },
    updateEdited: (data, key, query, index) => {
      let cached,
        updated = {}
      console.log("cacheRequest.updateEdited()", {
        cache,
        client,
        data,
        key,
        query,
        index,
      })
      try {
        // Query cache for data
        cached = cache.readQuery({ query })
        console.log("Existing cached data:", cached)
        // Add newest document to the beginning of array
        if (
          cached &&
          typeof cached === "object" &&
          cached[key] &&
          isArray(cached[key])
        ) {
          cached[key][index] = data.document
          updated[key] = cached[key]
          console.log("Existing cached updated:", updated)
        } else {
          updated[key] = [data.document]
          console.log("Empty cached updated", updated)
        }
        // Write new data to cache
        cache.writeQuery({
          query,
          data: updated,
        })
      } catch (e) {
        console.warn(`Cache Update Failed (cacheRequest):`, e)
      }
    },
  }
}
