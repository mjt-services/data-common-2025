import type { PartialSubject } from "@mjt-engine/message";

export type UpdateSubject = PartialSubject<"update">;
export type ObjectUpdateSubject = PartialSubject<"object_update">;
export type ChildUpdateSubject = PartialSubject<"child_update">;
