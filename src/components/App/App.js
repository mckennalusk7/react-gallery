import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryList: [],
  };
  // component has been mounted
  componentDidMount() {
    this.getImages();
  }
  // GET data from server and update data in galleryList
  getImages() {
    axios
      .get("/gallery")
      .then((response) => {
        console.log(response.data);
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => console.warn(err));
  }

  // When button is clicked, number of likes will update
  updateImageLikes = (id) => (event) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        this.getImages({
          galleryList: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        {/* connects to App.js */}
        <GalleryList
          galleryList={this.state.galleryList}
          updateImageLikes={this.updateImageLikes}
        />
        <br />
      </div>
    );
  }
}

export default App;
