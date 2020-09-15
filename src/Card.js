import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props.tags);
    return (
      <div className="Card">
        <div className="top-card" style={{'background': this.props.backgroundColor}}>
          <img src={this.props.img} />
        </div>
      </div>
    );
  }
}

export default Card;
