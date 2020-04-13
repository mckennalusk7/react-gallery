import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    return <p>{this.props.item.description}</p>;
  }
  // let buttonElement = <div></div>;
  // console.log("not working", buttonElement);

  // if (this.props.item.complete) {
  //   buttonElement = (
  //     <button
  //       className="gallery-like-btn"
  //       onClick={this.props.updateImageLikes(this.props.item.id)}
  //     >
  //       LIKE!
  //     </button>
  //   );
  // }
  // return (
  //   <div className="galleryitem">
  //     <p> {this.props.item.gallery}</p>
  //   </div>
}

export default GalleryItem;
