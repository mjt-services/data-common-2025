import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { DataConnectionMap } from "../DataConnectionMap";
import { putEntity } from "./putEntity";

const get =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async <T = unknown>(
    body: DataConnectionMap["data.get"]["request"]["body"]
  ) => {
    return con.request({ subject: "data.get", request: { body } }) as Promise<
      T | undefined
    >;
  };

const getMany =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async <T = unknown>(
    body: DataConnectionMap["data.getMany"]["request"]["body"]
  ) => {
    return con.request({
      subject: "data.getMany",
      request: { body },
    }) as Promise<T[]>;
  };

const put =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (body: DataConnectionMap["data.put"]["request"]["body"]) => {
    return con.publish({ subject: "data.put", request: { body } });
  };

const search =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (body: DataConnectionMap["data.search"]["request"]["body"]) => {
    return con.request({ subject: "data.search", request: { body } });
  };

const remove =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (body: DataConnectionMap["data.remove"]["request"]["body"]) => {
    return con.request({ subject: "data.remove", request: { body } });
  };

export const Datas = { put, get, getMany, search, remove, putEntity };
