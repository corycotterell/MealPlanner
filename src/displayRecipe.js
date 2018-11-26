import React,{Component} from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./displayRecipe.css"

export default class DisplayRecipe extends Component{
    render(){
        return(
                <div className="grid-container">
                <Card className="grid-item">
                    <CardImg top width="50%" src={this.props.mealInformation.recipe.image} alt="Card image cap" />
                    <CardBody className="Inner-card-color">
                        <CardTitle>{this.props.mealInformation.recipe.label}</CardTitle>
                        <CardSubtitle>Calories {Math.round(this.props.mealInformation.recipe.calories)}</CardSubtitle>
                        <CardText>
                            Yeilds: {this.props.mealInformation.recipe.yield}<br/>
                            Click <a href={this.props.mealInformation.recipe.url}>Here</a> to Visit Recipe Source<br/>
                        </CardText>
                            <ol className="No-Bullets"> Ingredients
                                {this.props.ingredients.map(function(itm,idx){
                                    return(<li key={idx}>{itm.text}</li>)
                                })}
                            </ol>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
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