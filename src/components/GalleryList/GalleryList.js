import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    const galleryArray = this.props.galleryList.map((item, index) => {
      return <GalleryItem key={index} item={item} />;
    });

    return <div>{galleryArray}</div>;
  }
}

export default GalleryList;
