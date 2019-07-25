import React from "react"
import "styles/components/MarketingBanner.scss"

const MarketingBanner = () => (
  <div className="marketing_banner">
    <div className="marketing_banner__col __left">
      <div className="content">
        <div class="headline">Are You a Business?</div>
        <div class="text">
          Catalogs.com only features the top rated and most trusted stores &amp;
          catalogs. &nbsp;Apply to have your company listed.
        </div>
        <ul class="bullets">
          <li>
            Nullam cursus tincidunt cursus. Quisque vehicula urna ligula, eu
            pellentesque augue vulputate et.
          </li>
          <li>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </li>
          <li>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </li>
        </ul>
        <button className="btn">Apply Today</button>
      </div>
    </div>
    <div className="marketing_banner__col __middle"></div>
    <div className="marketing_banner__col __right">
      <div class="content">
        <div class="headline">Discover Dynalog</div>
        <div class="text">
          Nullam cursus tincidunt cursus. Quisque vehicula urna ligula, eu
          pellentesque augue vulputate et. Nullam cursus tincidunt cursus.
          Quisque vehicula urna ligula, eu pellentesque augue vulputate et.
        </div>
        <ul class="bullets">
          <li>
            Nullam cursus tincidunt cursus. Quisque vehicula urna ligula, eu
            pellentesque augue vulputate et.
          </li>
          <li>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </li>
        </ul>
        <button className="btn">Get Started</button>
      </div>
    </div>
  </div>
)

export default MarketingBanner
