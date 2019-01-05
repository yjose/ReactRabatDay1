import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class Items extends Component {
  state = {
    searchTerm: ""
    // What state does this component have?
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { title, items, removeItem, setPacked } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter
          searchTerm={this.state.searchTerm}
          onChange={this.updateSearchTerm}
        />
        {items
          .filter(item =>
            // Hmm… this needs some work.
            item.value
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase())
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={() => {}}
              onRemove={removeItem}
              item={item}
              setPacked={setPacked}
            />
          ))}
      </section>
    );
  }
}

export default Items;
