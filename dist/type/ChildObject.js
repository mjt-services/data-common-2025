export const isChildObject = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && straw !== null && "parentId" in straw;
};
//# sourceMappingURL=ChildObject.js.map