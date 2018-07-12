import EventEmitter from "events";
import Dispatcher from "../common/Dispatcher";
import Item from '../common/Item';
import * as Actions from '../common/ItemActions';
import Immutable from 'immutable';


class ItemStoreOld extends EventEmitter {

    constructor(){
        super();
        this.items = Immutable.OrderedMap();
    }

    handleActions(action) {
        switch (action.type) {
            case Actions.ADD_ITEM_OLD:
                const id = Date.now();
                this.items = this.items.set(id, new Item({
                    id,
                    text: action.text
                }));
                this.emit(Actions.ITEM_ADDED_OLD, this.items);
                break;
            case Actions.REMOVE_ITEM_OLD:
                this.items = this.items.delete(action.id);
                this.emit(Actions.ITEM_REMOVED_OLD, this.items);
                break;
        }
    }


}

const itemStoreOld = new ItemStoreOld();

Dispatcher.register(itemStoreOld.handleActions.bind(itemStoreOld));

export default itemStoreOld;