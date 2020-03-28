import React,{Component} from "react"
import service from "../services/beers"
import BeerInfo from "../components/BeerInfo"
import {Link} from "react-router-dom"

class RandomBeer extends Component{
    constructor(){
        super()
        this.state={Beer:[]}
        this.BeerService=new service()
    }
    componentDidMount(){
        this.BeerService.RandomBeer()
            .then(response=>this.setState({...this.state,Beer:response}))
    }
    render(){
        return(
            <div>
                <BeerInfo {...this.state.Beer}/>
            </div>
        )
    }
}
export default RandomBeer