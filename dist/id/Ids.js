export const from = (type = "", namespace = "", unique = crypto.randomUUID(), timestamp = `${Date.now()}`, separator = ":") => {
    return `${namespace}${separator}${type}${separator}${timestamp}${separator}${unique}`;
};
export const fromObjectStore = (objectStore) => {
    const { namespace, store } = objectStore;
    return from(store, namespace);
};
export const parse = (id, separator = ":") => {
    const parts = id.split(separator);
    if (parts.length < 4) {
        return undefined; // Ensure we have at least 4 parts
    }
    const [namespace, type, timestamp, ...uniqueParts] = parts;
    const unique = uniqueParts.join(separator); // Reconstruct the unique part
    return { namespace, type, timestamp, unique };
};
export const toObjectStore = (id) => {
    const parsed = parse(id);
    if (!parsed) {
        return undefined;
    }
    const { namespace, type } = parsed;
    return { namespace, store: type };
};
export const Ids = { from, parse, fromObjectStore, toObjectStore };
//# sourceMappingURL=Ids.js.map