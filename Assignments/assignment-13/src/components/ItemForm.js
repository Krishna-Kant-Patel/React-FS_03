import React, { Component } from 'react';

class ItemForm extends Component {
  state = {
    itemName: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.setState({ itemName: this.props.item.name });
    }
  }

  handleInputChange = event => {
    this.setState({ itemName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Handle form submission
    // Add the new item using the entered name: this.state.itemName
  };

  render() {
    return (
      <div>
        <h2>Add a New Item</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item Name:
            <input
              type="text"
              value={this.state.itemName}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add Item</button>
        </form>
        
      </div>
      
    );
  }
}

export default ItemForm;