import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import DisplayRecipe from "./displayRecipe.js"
import "./displayRecipe.css"

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
        let results = []
        for (var i = 0; i < obj.data.hits.length; i++){
          results.push(obj.data.hits[i])
        }
        this.setState({
          isLoaded:true,
          results:results

        })
      })
    }
  render() {
    if (this.state.isLoaded){
      return (
      <div>
      <h1> Welcome to the Planner broski</h1>
      <div className="grid-container">
      {this.state.results.map((item) => {
        return(<DisplayRecipe mealInformation = {item} ingredients={item.recipe.ingredients}/>)
      })}
      </div>
      </div>
    );
      } else{
        return "Loading................."
      }
  }
}

export default App;
