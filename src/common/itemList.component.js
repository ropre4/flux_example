import React, { Component } from 'react';

export class ItemList extends Component {
    render(){
        return (
            <section id="main">
                <ul id="item-list">
                    {this.props.items.valueSeq().map((item, index) =>
                        <li key={index}>
                            <div className="view">
                                <label>{item.text} </label>
                                <button className="destroy" onClick={() => this.props.onRemoveItem(item.id)}>remove
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        )};
}