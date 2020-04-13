import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    //   storing the gallery items in the array
    const galleryArray = this.props.galleryList.map((item, index) => {
      return (
        <GalleryItem
          key={index}
          item={item}
          updateImageLikes={this.props.updateImageLikes}
        />
      );
    });

    return <div>{galleryArray}</div>;
  }
}

export default GalleryList;
