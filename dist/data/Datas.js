import { putEntity } from "./putEntity";
const get = (con) => async (body) => {
    return con.request({ subject: "data.get", request: { body } });
};
const getMany = (con) => async (body) => {
    return con.request({
        subject: "data.getMany",
        request: { body },
    });
};
const put = (con) => async (body) => {
    return con.publish({ subject: "data.put", request: { body } });
};
const search = (con) => async (body) => {
    return con.request({ subject: "data.search", request: { body } });
};
const remove = (con) => async (body) => {
    return con.request({ subject: "data.remove", request: { body } });
};
export const Datas = { put, get, getMany, search, remove, putEntity };
//# sourceMappingURL=Datas.js.map