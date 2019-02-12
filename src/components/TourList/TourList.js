import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';
export default class TourList extends Component {
  state = {
    tours: tourData
  }
  removeTour = id =>{
    const tours = this.state.tours;
    const sortedTours = tours.filter(tour=>tour.id !== id);
    this.setState({
      tours: sortedTours
    })
  }
  render() {
      const tours = this.state.tours;
      console.log(this.state.tours);
      
    return (
      <div className = "tourlist">
        {tours.map(tour =>{
          return  <Tour key ={tours.id} tour = {tour} removeTour = {this.removeTour}/>
        })}
         
      </div>
    )
  }
}
