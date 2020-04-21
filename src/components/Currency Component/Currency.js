import React, {Component} from 'react'
import DollarToTurkishLira from './DollarToTurkishLira'
import DollarToEuro from './DollarToEuro'

class Currency extends Component {
    constructor(props){
        super()
    }
render (){
    return (

<div>
<DollarToTurkishLira currency={this.props.currency} />
<DollarToEuro currency2 = {this.props.currency2} />

</div>


    )


}}

export default Currency