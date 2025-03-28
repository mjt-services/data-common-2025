import { Datas } from "./Datas";
import { Ids } from "../id/Ids";
export const putEntity = (con) => (store) => async (draft) => {
    const { id = Ids.fromObjectStore(store), ...rest } = draft;
    return Datas.put(con)({
        value: {
            id,
            ...rest,
        },
    });
};
//# sourceMappingURL=putEntity.js.map