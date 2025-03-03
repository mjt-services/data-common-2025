import type { EventMap } from "@mjt-engine/message";
import { type ChildUpdateSubject, type ObjectUpdateSubject, type UpdateSubject } from "./UpdateSubject";
export declare const DATA_EVENT_MAP: EventMap<UpdateSubject | ObjectUpdateSubject | ChildUpdateSubject>;
