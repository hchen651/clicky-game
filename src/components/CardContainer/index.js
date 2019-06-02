import React from "react";
import Card from "../Card"

class CardContainer extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleClick = () => {
        this.setState({ currentScore : this.state.currentScore + 1 });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <p className="col-4">Current Score: {this.state.currentScore}</p>
                    <p className="col-4 correct-text"></p>
                    <p className="col-4">High Score: {this.state.highScore}</p>
                </div>
                <div className="">
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                    <Card onPokeSelect={this.handleClick}/>
                </div>
                
            </div>
        );
    }
}

export default CardContainer;
