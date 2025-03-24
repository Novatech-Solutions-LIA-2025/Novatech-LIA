import React from "react";
import "./services.css";
import LargeCard from "../cards/largeCard/LargeCard";

function Services() {
  return (
    <>
      <div className="services-container">
        <div className="services-title-container">
          <h6 className="services-small-title">
            <li className="services-list-highlight"></li>
            Tjänster
          </h6>
          <h3 className="services-big-title">
            Framtidens{" "}
            <span className="services-title-highlight">lösningar</span> -
            tillgängliga idag{" "}
          </h3>
        </div>
        <ul>
          <li>Teknik och design i harmoni</li>
          <li>Digital expertis som omvandlar affärer</li>
          <li>Skräddarsydda lösningar för tillväxt</li>
        </ul>
        <div className="large-card-container">
          <div className="large-card">
            <LargeCard
          title="Utveckling och design"
          text="Utveckla intuitiva och användarvänliga digitala upplevelser för mobil och webb"
          lgBackgroundClass="lgbg1"
          width="100%"
          />
          </div>
        <div className="large-card">
          <LargeCard
          title="Integration och optimering"
          text="Effektivisera med precision och smart automatisering"
          
          width="100%"
          isSplitLayout={true}
          lgIconClass={<div className="lgicon"></div>} 
          imageUrl="/images/integration-optimering.jpg" 
          />
          </div>
        <div className="small-card">
        <LargeCard
          title="Digital marknadsföring"
          text="Maxa din digitala närvaro och träffsäkerhet"
          lgBackgroundClass="lgbg3"
          width="100%"
          />
        </div>
        <div className="medium-card">
        <LargeCard
          title="AI-drivna innovationer"
          text="Skarp AI som förvandlar data till handling"
          lgBackgroundClass="lgbg4"
          width="100%"
          />
          </div>
          </div>
      </div>
    </>
  );
}

export default Services;
