import React, { Component } from 'react';
import Track from './components/Track';
import data from './data/openwhyd-hot-tracks-api-response.json';

//const apiEndpoint = 'https://openwhyd.org/hot?format=json';

const apiResponse = [data];

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state={
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   }
  // }

  // fetch the data from the API endpoint
  //componentDidMount() {
    // fetch(apiEndpoint)
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log(result);
    //     this.setState({
    //       isLoaded: true,
    //       items: result[0].tracks
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //       error
    //     });
    //   }
    // )
  //}

  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
        <div className="container">
          {/* {items.map(item => */}
          {apiResponse[0].tracks.map(item =>
            <Track
              key={item._id}
              trackName={item.name}
              userName={item.uNm}
              userId={item.uId}
              trackThumb={item.img}
              trackEId={item.eId}
            />    
          )}
        </div>
      );
    //}
  }
}

export default App;