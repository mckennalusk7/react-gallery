import React, { Component } from "react";

class GalleryList extends Component {
  render() {
    const galleryArray = this.props.galleryList.map((item, index) => {
      return (
        <div>
          <p> {item.gallery}</p>
        </div>
      );
    });
    return <div>{galleryArray}</div>;
  }
}

export default GalleryList;
