import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    //   storing the gallery items in the array
    const galleryArray = this.props.galleryList.map((item, index) => {
      return (
        <div key={index}>
          <GalleryItem
            item={item}
            updateImageLikes={this.props.updateImageLikes}
          />
        </div>
      );
    });

    return <div>{galleryArray}</div>;
  }
}

export default GalleryList;
