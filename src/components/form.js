import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.nameChange = this.nameChange.bind(this);
        this.DeleteUserLink = this.DeleteUserLink.bind(this);

    }

    nameChange(e){
        this.setState({name: e.target.value});
    }


    DeleteUserLink(){
        function onClick(e) {
            e.preventDefault();
        }

        return (
            <a href="#" onClick={onClick}>Удалить пользователя</a>
        );
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.nameChange.bind(this)} />
                <input type="text" onChange={this.nameChange.bind(this)} />
                <p>{this.DeleteUserLink()}</p>
                <button>Get API</button>
            </div>
        );
    }

}

export default Form;

