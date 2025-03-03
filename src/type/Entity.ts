import { isDefined } from "@mjt-engine/object";


export type Entity = {
  id: string;
};

export const isEntity = (maybe: unknown): maybe is Entity => {
  const straw = maybe as Entity;
  return typeof straw === "object" && isDefined(straw.id);
};
