import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {name : "Prince",
        title : "Title"};
    }

    changeTitle(title){
        this.setState({title});
    }
    render(){
        setTimeout(() => {
            this.setState({name : "Jyoti"});
        }, 3000);
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <h1>It Working {this.state.name}!</h1>
                <Footer/>
            </div>
        );
    }
}