import React, { Component } from "react";
import uniqueId from "lodash/uniqueId";
import NewItem from "./NewItem";
import Items from "./Items";

const defaultState = [
  { value: "Pants", id: uniqueId(), packed: false },
  { value: "Jacket", id: uniqueId(), packed: false },
  { value: "iPhone Charger", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Sleeping Pills", id: uniqueId(), packed: true },
  { value: "Underwear", id: uniqueId(), packed: false },
  { value: "Hat", id: uniqueId(), packed: false },
  { value: "T-Shirts", id: uniqueId(), packed: false },
  { value: "Belt", id: uniqueId(), packed: false },
  { value: "Passport", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true }
];

class Application extends Component {
  state = {
    store: defaultState
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  unpackedAllItem = () => {
    const store = this.state.store.map(item => ({ ...item, packed: false }));
    this.setState({ store });
  };
  setPacked = packed => id => {
    const store = this.state.store.map(item => {
      if (item.id === id) return { ...item, packed };
      else return item;
    });
    this.setState({ store });
  };
  removeItem = id => {
    const store = this.state.store.filter(i => i.id !== id);
    this.setState({ store });
  };
  addItem = value => {
    const NewItem = { value, id: uniqueId(), packed: false };
    this.setState(state => ({ store: [NewItem, ...state.store] }));
  };
  render() {
    // Get the items from state
    const { store } = this.state;
    const UnpackedItems = store.filter(i => !i.packed);
    const packedItems = store.filter(i => i.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <Items
          title="Unpacked Items"
          items={UnpackedItems}
          removeItem={this.removeItem}
          setPacked={this.setPacked(true)}
        />
        <Items
          title="Packed Items"
          items={packedItems}
          removeItem={this.removeItem}
          setPacked={this.setPacked(false)}
        />
        <button className="button full-width" onClick={this.unpackedAllItem}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
