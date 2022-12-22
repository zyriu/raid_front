import { useEffect, useLayoutEffect } from "react";
import ParallaxJS from "./lib";

interface LayerProps {
  depth: number;
  children: JSX.Element | JSX.Element[] | string;
}

interface ParallaxProps {
  children: JSX.Element | JSX.Element[] | string;
}

const ParallaxLayer = ({ depth, children }: LayerProps) => {
  return <div data-depth={depth}>{children} </div>;
};

const Parallax = ({ children }: ParallaxProps) => {
  useLayoutEffect(() => {
    new ParallaxJS(document.querySelector("#scene"));
  }, []);

  return (
    <div id="scene" className="w-full h-full">
      {children}
    </div>
  );
};

Parallax.Layer = ParallaxLayer;

export { Parallax };
