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
                    <p>Total : {this.props.item.cases.total}</p>
                    <p>New : {this.props.item.cases.new}</p>

                </div>
        </div>
                )
            }
            } 

export default EachCoronaCase
