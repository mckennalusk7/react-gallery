import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryList: [],
  };
  componentDidMount() {
    this.getImages();
  }

  getImages() {
    axios
      .get("gallery")
      .then((response) => {
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => console.warn(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <GalleryList galleryList={this.state.galleryList} />
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
