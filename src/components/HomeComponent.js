import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';
import { Loading } from "./LoadingComponent";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                {item.abbr ? <CardSubtitle>{item.abbr}</CardSubtitle> : null }
                {item.price ? <h5>{item.price}</h5> : null}
            </CardBody>
        </Card>
    );
}


function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;