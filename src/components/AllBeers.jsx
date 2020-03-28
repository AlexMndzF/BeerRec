import React,{Component} from "react"
import {Link} from "react-router-dom"
import service from "../services/beers"
import BeerCard from "./BeerCard"

class AllBeers extends Component{ 
    constructor(){
        super()
        this.state={AllBeers:[]}
        this.BeerService=new service()
    }

    componentDidMount(){
        this.BeerService.GetAllBeers()
            .then(response=>this.setState({...this.state,AllBeers:response}))
    }



    

    render(){
        return(
            <div className='cardAlign'>
            {this.state.AllBeers.length ?
                this.state.AllBeers.map((x, idx)=>{
                    return <BeerCard key={idx} {...x}/>
                })
                :null
            }
            </div>
        )
    }
}

export default AllBeers