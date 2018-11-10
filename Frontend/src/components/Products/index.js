import React from "react"
import "./style.css"


class Product extends React.Component {
  render() {
    return (
      <div className="product-item">
        <div className="product-image">
          <img src={this.props.image} alt = "productImage"></img>
        </div>
        <h2 className="product-title">{this.props.name} </h2>
        <ul className="product-description">
          <li>{this.props.type}</li>
          <li>{this.props.substance}</li>
          <li>{this.props.size}</li>
          <li>{this.props.numberInPack}</li>
        </ul>

        <div className="price-buy">
          <div className="price">
            <span>Price: </span>{this.props.price}<span>kr</span>
          </div>
          <div className="buy">
            <a href=""><p>BUY</p></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
