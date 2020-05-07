import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    //Getting the location of the user
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    /*return (
      <div>
        Latitude: {this.state.errorMessage || this.state.lat || "Loading..."}
      </div>
    );*/
    return <SeasonDisplay lat={this.state.lat} />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
