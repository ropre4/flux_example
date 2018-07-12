import React, { Component } from 'react';
import {AddItem} from "../common/addItem.component";
import {ItemList} from "../common/itemList.component";
import {Container} from 'flux/utils';
import ItemActions from "../common/ItemActions";
import ItemStoreNew from '../newFlux/ItemStoreNew';

class AppViewNew extends Component {
    constructor(props){
        super(props)
    }
    static getStores() {
        return [
            ItemStoreNew,
        ]
    }

    static calculateState(prevState) {
        return {
            items: ItemStoreNew.getState(),
            onRemoveItem: ItemActions.deleteItem,
            onAddItem: ItemActions.addItem,
        };
    }

    render() {
        return (
            <div>
                <h2>New Flux</h2>
                <AddItem {...this.state} />
                <ItemList {...this.state}/>
            </div>
        )};
}
export default Container.create(AppViewNew);