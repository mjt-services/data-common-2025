import type { ObjectStore } from "../DataConnectionMap";

export type Link<T extends Record<string, string> = {}> = {
  id: string;
} & T;

export const LINK_OBJECT_STORE: ObjectStore<Link> = {
  store: "link",
};
