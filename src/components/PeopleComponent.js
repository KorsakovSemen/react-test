import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media} from "reactstrap";
import {Link} from "react-router-dom";

function RenderLeader({leader}){

    if(leader != null){

        return(

            <div>

                <Media className="r-1 mb-3 my-3">
                    <Media left className="mr-3">
                        <Media object src={leader.image} width="64px"  alt={leader.name}/>
                    </Media>
                    <Media body>
                        <Media className="mb-2">
                            {leader.designation}
                        </Media>
                        {leader.description}
                    </Media>
                </Media>

            </div>

        );
    }
    else {
        return(
            <div></div>
        );
    }
}


const People = (props) => {
    if (props.leader != null) {
        return (
            <RenderLeader leader={props.leader}/>
        );
    } else {
        return (<div></div>);
    }
};

export default People;