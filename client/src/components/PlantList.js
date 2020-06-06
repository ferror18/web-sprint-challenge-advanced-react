import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(props){
    super()
    this.state = {
      plants: [],
      searchTerm: ''
    }
  }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  myOnChange = event => {
    this.setState({ ...this.state, searchTerm: event.target.value})
  }
  componentDidMount(){
    axios.get('http://localhost:3333/plants')
    .then(res=>{
      console.log(res);
      this.setState({plants: res.data.plantsData})
      
    })
    .catch(res=>{
      console.log('error --->:', res);
      
    })
  }
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        <input onChange={this.myOnChange} value={this.state.searchTerm} type='text' className='search' placeholder='search for a plant...' ></input>
        {this.state?.plants?.filter(plant=>{if (this.state.searchTerm!='') {
          debugger
          return  plant.name.includes(this.state.searchTerm)
        }
          return true
      }).map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}


// .map((plant) => (
//   <div className="plant-card" key={plant.id}>
//     <img className="plant-image" src={plant.img} alt={plant.name} />
//     <div className="plant-details">
//       <h2 className="plant-name">{plant.name}</h2>
//       <p className="plant-scientific-name">{plant.scientificName}</p>
//       <p>{plant.description}</p>
//       <div className="plant-bottom-row">
//         <p>${plant.price}</p>
//         <p>☀️ {plant.light}</p>
//         <p>💦 {plant.watering}x/month</p>
//       </div>
//       <button
//         className="plant-button"
//         onClick={() => this.props.addToCart(plant)}
//       >
//         Add to cart
//       </button>
//     </div>
//   </div>
// ))}