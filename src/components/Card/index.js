import React from "react";

class Card extends React.Component {
    state = {
        pokeID: Math.floor(Math.random() * 300) + 1
    };

    passPokeID = () => {
        this.props.onPokeSelect(this.state.pokeID);
        this.setState({ pokeID : Math.floor(Math.random() * 300) + 1 });
    };

    render() {
        return (
            <div className="card text-center" style={{ width:"25%", float:"left"}}>
                <div className="card-body">
                    <img style={{ width:"100%"}} 
                        src={"./images/"+this.state.pokeID+".png"} 
                        data-pokeid={this.state.pokeID}
                        onClick = {this.passPokeID}
                    >                   
                    </img>
                </div>
            </div>
        );
    }
}

export default Card;


