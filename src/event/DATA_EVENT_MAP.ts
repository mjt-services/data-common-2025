import type { EventMap } from "@mjt-engine/message";
import {
  type ChildUpdateSubject,
  type ObjectUpdateSubject,
  type UpdateSubject,
} from "./UpdateSubject";

export const DATA_EVENT_MAP: EventMap<
  UpdateSubject | ObjectUpdateSubject | ChildUpdateSubject
> = {
  update: undefined,
  object_update: undefined,
  child_update: undefined,
};
