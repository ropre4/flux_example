import React, { Component } from 'react';
import {AddItem} from "../common/addItem.component";
import {ItemList} from "../common/itemList.component";
import ItemStoreOld from './ItemStoreOld';
import * as ItemActions from '../common/ItemActions';
import Immutable from 'immutable';

export class AppViewOld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: Immutable.OrderedMap()
        }
    }
    componentDidMount() {
        ItemStoreOld.on(ItemActions.ITEM_ADDED_OLD, this.refreshItems);
        ItemStoreOld.on(ItemActions.ITEM_REMOVED_OLD, this.refreshItems);
    }
    componentWillUnmount() {
        ItemStoreOld.removeListener(ItemActions.ITEM_ADDED_OLD, this.refreshItems);
        ItemStoreOld.removeListener(ItemActions.ITEM_REMOVED_OLD, this.refreshItems);
    }
    refreshItems = (data) => {
        this.setState({items: data});
    };
    onAddItem = (text) => {
        ItemActions.Actions.addItemOld(text);
    };
    onRemoveItem = (id) => {
        ItemActions.Actions.deleteItemOld(id);

    };
    render() {
        return(
            <div>
                <h2>Old Flux</h2>
                <AddItem items={this.state.items} onAddItem={this.onAddItem.bind(this)} />
                <ItemList items={this.state.items} onRemoveItem={this.onRemoveItem.bind(this)}/>
            </div>
        )
    }
}
