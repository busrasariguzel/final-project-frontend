import React, {Component} from 'react'
import DollarToTurkishLira from './DollarToTurkishLira'

class Currency extends Component {
    constructor(props){
        super()
    }
render (){
    return (

<div>
< DollarToTurkishLira currency={this.props.currency} />

</div>


    )


}}

export default Currency