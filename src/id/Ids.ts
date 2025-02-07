export const from = (
  type: string = "id",
  uuid = crypto.randomUUID(),
  timestamp = `${Date.now()}`
) => {
  return `${type}-${timestamp}-${uuid}`;
};

export const parse = (id: string) => {
  const regex =
    /^(.+)-(\d+)-([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/;
  const match = id.match(regex);

  if (match) {
    const [type, timestamp, uuid] = match;
    return { type, timestamp, uuid };
  } else {
    return undefined;
  }
};

export const Ids = { from, parse };
