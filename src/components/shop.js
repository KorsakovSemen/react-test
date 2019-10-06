import React from 'react';
import Comments from "./comments";

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
        {product.name}
      </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}



class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.props.onChangeSearch(e.target.value);
    }

    render() {
        const search = this.props.search;
        const check = this.props.check;
        return (
            <form>
                <input type="text" placeholder="Search..." onChange={this.onChangeSearch.bind(this)} value={this.props.onChangeSearch}/>
                <p>
                    <input type="checkbox" checked={check}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const search = this.props.search;
        const check = this.props.check;
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(search) === -1) {
                return;
            }
            if (check && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {search: "", check: false};
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(search){
        this.setState({search: search});
    }

    render() {
        return (
            <div>
                <SearchBar search = {this.state.search} check = {this.state.check} onChangeSearch = {this.onChangeSearch}/>
                <ProductTable products={this.props.products} search = {this.state.search} check = {this.state.check}/>

            </div>
        );
    }
}


export default FilterableProductTable;