import React from 'react';
import FilterableProductTable from "./components/shop"
import CustomTextInput from "./components/access";
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import Comments from "./components/comments";

function App() {

  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/">Ristorante</NavbarBrand>
          </div>
      </Navbar>
        {/*   <FilterableProductTable products={PRODUCTS}/>
      <Comments comments={COMMENTS} products={PRODUCTS}/>
      <CustomTextInput/>*/}
    </div>
  );
}


const COMMENTS = [
    {name: 'Football', comment: "ADSSDS"},
  {name: 'Football', comment: "ADSSDS"},
  {name: 'Football', comment: "ADSSDS"},
  {name: 'Football', comment: "ADSSDS"}
];

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
export default App;
