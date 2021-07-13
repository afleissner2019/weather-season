import React from "react";
import WeatherShow from "./WeatherShow";
import Loader from "./Loader"

class App extends React.Component {
  state = {latitude: null, errorMessage:""}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> this.setState({latitude:position.coords.latitude}),
      (error)=> this.setState({errorMessage:error.message})
    )
  }

  render() {
    if(this.state.errorMessage && !this.state.latitude){
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <WeatherShow latitude= {this.state.latitude}/> 
    }
    return <Loader text= "Please accept the location request"/>

  }
  
}

export default App;
