export const get = (con) => async (body) => {
    return con.request({ subject: "data.get", request: { body } });
};
export const getMany = (con) => async (body) => {
    return con.request({
        subject: "data.getMany",
        request: { body },
    });
};
export const put = (con) => async (body) => {
    return con.request({ subject: "data.put", request: { body } });
};
export const search = (con) => async (body) => {
    return con.request({ subject: "data.search", request: { body } });
};
export const remove = (con) => async (body) => {
    return con.request({ subject: "data.remove", request: { body } });
};
export const Datas = { put, get, getMany, search, remove };
//# sourceMappingURL=Datas.js.map