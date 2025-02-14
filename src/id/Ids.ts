import type { ObjectStore } from "../DataConnectionMap";

export const from = (
  type = "",
  namespace = "",
  unique = crypto.randomUUID(),
  timestamp = `${Date.now()}`,
  separator = ":"
) => {
  return `${namespace}${separator}${type}${separator}${timestamp}${separator}${unique}`;
};

export const fromObjectStore = (objectStore: ObjectStore) => {
  const { namespace, store } = objectStore;
  return from(store, namespace);
};

export const parse = (id: string, separator = ":") => {
  const regex = new RegExp(`^(.+)${separator}(\\d+)${separator}(.+)$`);
  const match = id.match(regex);

  if (match) {
    const [_, namespace, type, timestamp, unique] = match;
    return { namespace, type, timestamp, unique };
  } else {
    return undefined;
  }
};

export const toObjectStore = (id: string) => {
  const parsed = parse(id);
  if (!parsed) {
    return undefined;
  }
  const { namespace, type } = parsed;
  return { namespace, store: type };
};

export const Ids = { from, parse, fromObjectStore, toObjectStore };
