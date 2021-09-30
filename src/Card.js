import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    return (
      <div
        className="Card"
        data-id={this.props.id}
        data-status={this.props.status}
      >
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}
