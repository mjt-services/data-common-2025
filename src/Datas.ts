import type { Messages } from "@mjt-engine/message";
import type { DataConnectionMap } from "./DataConnectionMap";

type DataConnection = Awaited<
  ReturnType<typeof Messages.createConnection<DataConnectionMap>>
>;

export const get =
  (con: DataConnection) =>
  async <T = unknown>(
    body: DataConnectionMap["data.get"]["request"]["body"]
  ) => {
    return con.request({ subject: "data.get", request: { body } }) as Promise<
      T | undefined
    >;
  };

export const put =
  (con: DataConnection) =>
  async (body: DataConnectionMap["data.put"]["request"]["body"]) => {
    return con.request({ subject: "data.put", request: { body } });
  };

export const search =
  (con: DataConnection) =>
  async (body: DataConnectionMap["data.search"]["request"]["body"]) => {
    return con.request({ subject: "data.search", request: { body } });
  };

export const remove =
  (con: DataConnection) =>
  async (body: DataConnectionMap["data.remove"]["request"]["body"]) => {
    return con.request({ subject: "data.remove", request: { body } });
  };

export const Datas = { put, get, search, remove };
