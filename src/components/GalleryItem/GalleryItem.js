import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    let buttonElement = <div></div>;

    if (!this.props.item.complete) {
      buttonElement = (
        <button onClick={this.props.updateImageLikes(this.props.item.id)}>
          LIKE!
        </button>
      );
    }
    return (
      <div className="galleryitem">
        <p> {this.props.item.gallery}</p>
      </div>
    );
  }
}

export default GalleryItem;
