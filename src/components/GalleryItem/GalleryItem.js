import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    return (
      <div className="galleryitem">
        <p> {this.props.item.gallery}</p>
        <button className="gallerybutton"> LIKE </button>
      </div>
    );
  }
}

export default GalleryItem;
