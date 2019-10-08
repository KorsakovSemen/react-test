import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }


    renderDish(dish){
        if(dish != null){

            const menu = dish.comments.map((comment) => {
                    return (
                        <div key={comment.id} className="col-xs-12 col-sm-12 col-md-5 col-xl-5 m-1">
                            <p>{comment.comment}</p>
                        </div>
                    );
            });

            return(
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {menu}
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                </div>
            </div>
        );
    }

}


export default Dishdetail;