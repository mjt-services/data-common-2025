export const from = (type = "id", unique = crypto.randomUUID(), timestamp = `${Date.now()}`, separator = ":") => {
    return `${type}${separator}${timestamp}${separator}${unique}`;
};
export const parse = (id, separator = ":") => {
    const regex = new RegExp(`^(.+)${separator}(\\d+)${separator}(.+)$`);
    const match = id.match(regex);
    if (match) {
        const [_, type, timestamp, unique] = match;
        return { type, timestamp, unique };
    }
    else {
        return undefined;
    }
};
export const Ids = { from, parse };
//# sourceMappingURL=Ids.js.map