import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "1650px",
      height: "654px",
      marginLeft: "119px",
      latitude: -1.9361,
      longitude: 29.8723,
      zoom: 15,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoianVsaWVuaGlyd2EiLCJhIjoiY2tlMmpsZTBxMDl5ZjJ0cGRyNG0zeXQzciJ9.NN6PdI3a9JdkfUC5ulpUlg"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;
