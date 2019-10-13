import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import Contact from "./ContactComponent";


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                 leader={this.state.leaders.filter((leaders) => leaders.featured)[0]}
                 promotion={this.state.promotions.filter((promotions) => promotions.featured)[0]} />
            );
        };
        return (
            <>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </>
        );
    }

}

export default Main;
