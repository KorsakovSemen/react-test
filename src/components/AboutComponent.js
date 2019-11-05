import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem, Button,
    Card,
    CardBody,
    CardHeader,
    Col, Label,
    Media,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, Errors, LocalForm} from "react-redux-form";
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform} from "react-animation-components";


function RenderLeader({leader}){

    if(leader != null){

        return(

            <div>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                <Media className="r-1 mb-3 my-3">
                <Media left className="mr-3">
                    <Media object src={baseUrl + leader.image} width="64px"  alt={leader.name}/>
                </Media>
                <Media body>
                    <Link to={`/aboutus/${leader.id}`}>
                    <Media heading>
                        {leader.name}
                    </Media>
                    </Link>

                    {leader.description}
                </Media>
                </Media>
                </FadeTransform>


            </div>

        );
    }
    else {
        return(
            <div></div>
        );
    }
}


class About extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.postLeaders(this.props.leadersId, values.name, values.abbr, values.description);
    }

    render() {

    const leaders = this.props.leaders.map((leader) => {
            return (
                <div key={leader.id}>
                    <RenderLeader leader={leader} />
                </div>
            );
        });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="name" md={2}>Your Name</Label>
                    <Col md={10}>
                        <Control.text model=".name" id="name" name="name"
                                      placeholder="Name"
                                      className="form-control"

                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="abbr" md={2}>Rating</Label>
                    <Col md={10}>
                        <Control.text  model=".abbr" id="abbr" name="abbr"
                                      placeholder="abbr"
                                      className="form-control"

                        />
                                           </Col>
                </Row>

                <Row className="form-group">
                    <Label htmlFor="description" md={2}>Comment</Label>
                    <Col md={10}>
                        <Control.textarea model=".description" id="description" name="description"
                                          className="form-control"

                        />
                    </Col>
                </Row>
                <Button type="submit" value="submit" color="primary">Submit</Button>
            </LocalForm>
        </div>
    );
    }
}

export default About;