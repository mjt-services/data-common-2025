import { isDefined } from "@mjt-engine/object";
export const isEntity = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && isDefined(straw.id);
};
//# sourceMappingURL=Entity.js.map