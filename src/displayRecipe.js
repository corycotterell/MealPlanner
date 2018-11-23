import React,{Component} from "react"

export default class DisplayRecipe extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>{this.props.mealInformation.recipe.label}</h1>

                <h2>Calories {Math.round(this.props.mealInformation.recipe.calories)}</h2>

                <h2> Total Time To Cook: {this.props.mealInformation.recipe.totalTime}</h2>

                <h2>Yeilds: {this.props.mealInformation.recipe.yield}</h2>

                <h2>Click <a href={this.props.mealInformation.recipe.url}>Here</a> to Visit Recipe Source</h2>

                <img src={this.props.mealInformation.recipe.image} alt={this.props.mealInformation.recipe.label}/>
                <ul className="No-Bullets"> Ingredients
                    {this.props.ingredients.map(function(itm,idx){
                    return(<li key={idx}>{itm.text}</li>)
                    })}
                </ul>
            </div>
        
        )
    }
}
// var list = document.getElementById('list').childNodes;
// var theArray = [];
// for(var i=0;i < list.length; i++) {
//     var arrValue = list[i].innerHTML;
//     alert(arrValue);
//     theArray.push(arrValue);
// }