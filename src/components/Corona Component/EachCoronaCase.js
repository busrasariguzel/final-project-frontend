import React, {Component} from 'react'

class EachCoronaCase extends Component {
    constructor(props){
        super()
    }

render(){
    return(
        <div>

                <div key={this.props.idx}>


                    <p style={{color:'blue', textDecoration:'underline'}}>{this.props.item.country}</p>
                    <p>Total Cases: {this.props.item.cases.total}</p>
                    <p>New Cases: {this.props.item.cases.new}</p>
                    <p>Total Deaths: {this.props.item.deaths.total}</p>
                    <p>New Deaths : {this.props.item.deaths.new}</p>
                    <p>Recovered: {this.props.item.cases.recovered}</p>
                    <p>Critical: {this.props.item.cases.critical}</p>

                </div>
        </div>
                )
            }
            } 
            

export default EachCoronaCase
