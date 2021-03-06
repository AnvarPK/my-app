export const GET_READ_LIST = "get-list";
export const SAVE_READ_LATER_ITEM = "save-readlater-item";

const readList = [];

const completeTodoReducer = (state = readList, action) => {
    switch (action.type) {
        case GET_READ_LIST:
            return state;
        case SAVE_READ_LATER_ITEM:
            console.log(action)
            return [...state, action.payload];
        default:
            return state;
    }
};
export default completeTodoReducer;