import { isDefined } from "@mjt-engine/object";
export const isChildObject = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && isDefined(straw.parentId);
};
//# sourceMappingURL=ChildObject.js.map