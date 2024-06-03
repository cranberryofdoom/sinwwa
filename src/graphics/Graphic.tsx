import * as Graphics from "./assets";

type GraphicKeys = keyof typeof Graphics;

/**
 * This plucks out all of the keys that end in "Mobile" and just returns
 * the base name of any graphic that has a mobile version.
 */
export type GraphicNames = {
  [K in GraphicKeys]: K extends `${infer GraphicName}Mobile`
    ? GraphicName
    : never;
}[GraphicKeys];

type GraphicProps = {
  name: GraphicNames;
  mobile?: boolean;
};

export const Graphic = ({ mobile, name }: GraphicProps) => {
  const GraphicComponent = mobile ? Graphics[`${name}Mobile`] : Graphics[name];

  if (GraphicComponent === undefined) {
    throw new Error(`Graphic with name: ${name} not found.`);
  }
  return <GraphicComponent />;
};
