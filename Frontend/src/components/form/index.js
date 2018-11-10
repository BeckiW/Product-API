import React from "react"
import Header from "../Header"
import "./style.css"
import Productpage from "../Productpage"

class Form extends React.Component {

  state = {
    id: "",
    name: "",
    type: "",
    size: "",
    numberInPack: "",
    substance: "",
    price: "",
    deliveryTime: "",
    image: "",
    description: ""
  }


  onClick = () => {
    this.props.addNewProduct(this.state)
  }

  render() {
    return (

    <div>
      <h1> Add a product </h1>
      <form className="form">
      <div className="container">
        <div className="labels">
          <label htmlFor="name">Name</label>
          <input className="input-field" id="name" type="text" onChange={event => this.setState({ name: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="name">Type</label>
          <input className="input-field" id="type" type="text" onChange={event => this.setState({ type: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="size">Size</label>
          <input className="input-field" id="size" type="text" onChange={event => this.setState({ size: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="numberInPack">Number in pack</label>
          <input className="input-field" id="numberInPack" type="text" onChange={event => this.setState({ numberInPack: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="substance">Substance</label>
          <input className="input-field" id="substance" type="text" onChange={event => this.setState({ substance: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="price">Price</label>
          <input className="input-field" id="price" type="text" onChange={event => this.setState({ price: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="deliveryTime">Delivery Time</label>
          <input className="input-field" id="deliveryTime" type="text" onChange={event => this.setState({ deliveryTime: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="image">Image url</label>
          <input className="input-field" id="image" type="text" onChange={event => this.setState({ image: event.target.value }) } />
        </div>
        <div className="labels">
          <label htmlFor="description">Description</label>
          <input  className="input-field" id="description" type="text" onChange={event => this.setState({ description: event.target.value }) } />
        </div>
          <button type="button" onClick={this.onClick}>Submit new product</button>
        </div>
      </form>

      </div>
    )
  }

}

export default Form
