import type { Messages } from "@mjt-engine/message";
import type { DataConnectionMap } from "./DataConnectionMap";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

type DataConnectionInstance = MessageConnectionInstance<DataConnectionMap>;

export const get =
  (con: DataConnectionInstance) =>
  async <T = unknown>(
    body: DataConnectionMap["data.get"]["request"]["body"]
  ) => {
    return con.request({ subject: "data.get", request: { body } }) as Promise<
      T | undefined
    >;
  };

export const getMany =
  (con: DataConnectionInstance) =>
  async <T = unknown>(
    body: DataConnectionMap["data.getMany"]["request"]["body"]
  ) => {
    return con.request({
      subject: "data.getMany",
      request: { body },
    }) as Promise<T[]>;
  };

export const put =
  (con: DataConnectionInstance) =>
  async (body: DataConnectionMap["data.put"]["request"]["body"]) => {
    return con.request({ subject: "data.put", request: { body } });
  };

export const search =
  (con: DataConnectionInstance) =>
  async (body: DataConnectionMap["data.search"]["request"]["body"]) => {
    return con.request({ subject: "data.search", request: { body } });
  };

export const remove =
  (con: DataConnectionInstance) =>
  async (body: DataConnectionMap["data.remove"]["request"]["body"]) => {
    return con.request({ subject: "data.remove", request: { body } });
  };

export const Datas = { put, get, getMany, search, remove };
