import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader, ModalBody, Row, Label, Col
} from "reactstrap";
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm} from "react-redux-form";
import {addComment} from "../redux/ActionCreators";
import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    function RenderDish({dish}){

        if(dish != null){

            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        <CardText>{dish.price} $</CardText>
                    </CardBody>
                </Card>

            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments, addComment, dishId}){
        if(comments != null) {
            return (
                <div>
                    <h3>Comments</h3>
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))}</p>
                            </div>

                        );
                    })}
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>
            );
        }
        else {
            return (<div></div>)
        }

    }
class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }

    render() {

        return (
            <>
                <Button outline className="m-3" onClick={this.toggleModal} color="secondary">
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <p>Submit Comment</p>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.text type="number" model=".rating" id="rating" name="rating"
                                                  placeholder="Rating"
                                                  className="form-control"
                                                  validators = {{
                                                      minLength: maxLength(1), maxLength: maxLength(1),isNumber
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 0',
                                            maxLength: 'Must be 1 or less',
                                            isNumber: 'Error'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                                  placeholder="Name"
                                                  className="form-control"
                                                  validators = {{
                                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3',
                                            maxLength: 'Must be 15 or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                                      className="form-control"
                                                      validators = {{
                                                          required, minLength: minLength(1), maxLength: maxLength(15)
                                                      }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1',
                                            maxLength: 'Must be 150 or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
    const DishDetail = (props) => {
        if(props.isLoading){
            return (
                <div className="container">
                    <Loading/>
                </div>
                );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m-2">
                        <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col">
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }


    };




export default DishDetail;