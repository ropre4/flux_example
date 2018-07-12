import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Dispatcher from '../common/Dispatcher';
import Item from '../common/Item';
import * as Actions from '../common/ItemActions';

class ItemStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case Actions.ADD_ITEM_NEW:
                const id = Date.now();
                return state.set(id, new Item({
                    id,
                    text: action.text
                }));

            case Actions.REMOVE_ITEM_NEW:
                return state.delete(action.id);

            default:
                return state;
        }
    }
}

export default new ItemStore();


