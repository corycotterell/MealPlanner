import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import DisplayRecipe from "./displayRecipe"
class App extends Component {
  constructor(){
    super()
    this.id = "ca5486c6"
    this.key = "3d0e4deee64fc7f330d9eaddbc587db9"
    this.link = `https://api.edamam.com/search?q=chicken&app_id=${this.id}&app_key=${this.key}`
    this.state = {
      isLoaded:false,
      data:{}
    }
  }
    componentDidMount(){
      axios.get(this.link)
      .then((obj) =>{
        this.setState({
          isLoaded:true,
          ingredients:obj.data.hits[0].recipe.ingredients,
          mealInformation:obj.data.hits[0],
          ingredients2:obj.data.hits[1].recipe.ingredients,
          mealInformation2:obj.data.hits[1]

        })
      })
    }
  render() {
    if (this.state.isLoaded){
      return (
      <div className="App">
      <h1 color="aquamarine">Welcome To The Meal Planner</h1>
      <DisplayRecipe mealInformation = {this.state.mealInformation} ingredients={this.state.ingredients}/>
      <DisplayRecipe mealInformation = {this.state.mealInformation2} ingredients={this.state.ingredients2}/>
      </div>
    );
      } else{
        return "Loading................."
      }
  }
}

export default App;
