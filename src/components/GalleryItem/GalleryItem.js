import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  state = {
    imageToggle: true,
  };
  toggleImage = (event) => {
    this.setState({
      imageToggle: !this.state.imageToggle,
    });
  };

  render() {
    let imageElement = (
      <img src={this.props.item.path} alt={this.props.item.description} />
    );

    if (!this.state.imageToggle) {
      imageElement = <p>{this.props.item.description}</p>;
    }
    return (
      <div>
        <div onClick={this.toggleImage}>{imageElement}</div>
        <button onClick={this.props.updateImageLikes(this.props.item.id)}>
          {" "}
          LIKE
        </button>
        <p>{this.props.item.likes} Love this photo</p>
        <p>{this.props.item.description} </p>
      </div>
    );
  }
}

export default GalleryItem;
