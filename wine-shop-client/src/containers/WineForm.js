import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateWineFormData } from '../actions/wineForm';
import { createWine } from '../actions/wines';

class WineForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentWineFormData = Object.assign({}, this.props.wineFormData, {
      [name]: value
    })
    this.props.updateWineFormData(currentWineFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createWine(this.props.wineFormData)
  }

  render() {
    const { name, year, price, img_url } = this.props.wineFormData;

    return (
      <div>
        Add A Wine To The List
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="year"
              value={year}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="price"
              value={price}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image URL:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>

          <button type="submit">Add Wine</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wineFormData: state.wineFormData
  }
}

export default connect(mapStateToProps, {
  updateWineFormData,
  createWine
})(WineForm);
