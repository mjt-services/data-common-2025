import { isDefined } from "@mjt-engine/object";

export type ChildObject = {
  parentId: string;
};

export const isChildObject = (maybe: unknown): maybe is ChildObject => {
  const straw = maybe as ChildObject;
  return typeof straw === "object" && isDefined(straw.parentId);
};


