import Dispatcher from './Dispatcher';

export const ADD_ITEM_NEW = "ADD_ITEM_NEW";
export const ADD_ITEM_OLD = "ADD_ITEM_OLD";
export const ITEM_ADDED_OLD = "ITEM_ADDED_OLD";
export const REMOVE_ITEM_NEW = "REMOVE_ITEM_NEW";
export const REMOVE_ITEM_OLD = "REMOVE_ITEM_OLD";
export const ITEM_REMOVED_OLD = "ITEM_REMOVED_OLD";

export const Actions = {
    addItem(text) {
        Dispatcher.dispatch({
            type: ADD_ITEM_NEW,
            text,
        });
    },
    deleteItem(id) {
        Dispatcher.dispatch({
            type: REMOVE_ITEM_NEW,
            id,
        });
    },
    addItemOld(text) {
        Dispatcher.dispatch({
            type: ADD_ITEM_OLD,
            text,
        });
    },
    deleteItemOld(id) {
        Dispatcher.dispatch({
            type: REMOVE_ITEM_OLD,
            id,
        });
    }
};

export default Actions;