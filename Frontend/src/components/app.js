import React from "react"
import Product from "../components/Products"
import Form from "../components/form"
import Productpage from "./Productpage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Productpage} />
            <Route path="/form" exact component={Form} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
