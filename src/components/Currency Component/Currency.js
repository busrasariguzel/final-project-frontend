import React, {Component} from 'react'
import DollarToTurkishLira from './DollarToTurkishLira'
import DollarToEuro from './DollarToEuro'
import DollarToChineseYuan from './DollarToChineseYuan'

class Currency extends Component {
    constructor(props){
        super()
    }
render (){
    return (

<div style={{border:'0.5px solid black'}}>
<DollarToTurkishLira currency={this.props.currency} />
<DollarToEuro currency2 = {this.props.currency2} />
<DollarToChineseYuan currency3 = {this.props.currency3}/>
</div>


    )


}}

export default Currency