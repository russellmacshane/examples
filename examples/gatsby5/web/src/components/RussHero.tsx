import React from "react";
import { registerUniformComponent } from "@uniformdev/canvas-react";
import HeroImage from "../images/hero.jpg";

type RussHeroProps = {
  title: string;
  description: string;
};

export const RussHero = ({ title, description }: RussHeroProps) => (
  <div className="flex flex-col md:flex-row gap-3 py-6">
    <div className="w-full md:w-1/2">
      <h1 className="text-7xl text-orange-700">{title}</h1>
      <div className="text-xs">{description}</div>
    </div>
    <div>
      <img src={HeroImage} alt="hero" />
    </div>
  </div>
);

registerUniformComponent({
  type: "russHero",
  component: RussHero,
});
