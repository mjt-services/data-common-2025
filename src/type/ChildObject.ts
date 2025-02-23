
export type ChildObject = {
  parentId: string;
};

export const isChildObject = (maybe: unknown): maybe is ChildObject => {
  const straw = maybe as ChildObject;
  return typeof straw === "object" && straw !== null && "parentId" in straw;
};
