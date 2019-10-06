import React from 'react';

class Comments extends React.Component {




    render() {
        const rows = [];
        this.props.products.forEach((product) => {
            this.props.comments.forEach((comment) => {
               if(product.name === comment.name){
                   rows.push(
                       <p>{comment.comment}</p>
                   );
               }
            });
        });
        return (
            <div>
                {rows}
            </div>
        );
    }



}

export default Comments;