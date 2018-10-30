import React from "react"
import Product from "./product"
import "./style.css";

let URL = "http://localhost:8080/products/"

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(URL).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        products: json
      })
    })
  }

  render() {

    return (
      <div className="App">

      <header>
         <h1 id="header">Products</h1>
       </header>

       <div className="product-container">

              {this.state.products.map((item) => {
                return <Product key= {item.id}
                  name={item.name}
                  image={item.image}
                  type={item.type}
                  substance={item.substance}
                  size={item.size}
                  numberInPack={item.numberInPack}
                  price={item.price}
                  deliveryTime={item.deliveryTime}
                  />
              })}
</div>

</div>

    )
  }

}

export default App
