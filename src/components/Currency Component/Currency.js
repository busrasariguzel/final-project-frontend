import React, {Component} from 'react'
import DollarToTurkishLira from './DollarToTurkishLira'
import DollarToEuro from './DollarToEuro'
import DollarToChineseYuan from './DollarToChineseYuan'
import Dropdown from './Dropdown'

class Currency extends Component {
    constructor(props){
        super()
    }
render (){
    return (

<div style={{border:'0.5px solid black', display:'flex',
flexDirection:'row',
justifyContent:'space-between'}}>

<DollarToTurkishLira handleConvert={this.props.handleConvert} searchTerm={this.props.searchTerm} currency={this.props.currency} />
<DollarToEuro currency2 = {this.props.currency2} />
<DollarToChineseYuan currency3 = {this.props.currency3}/>

{/* <Convert /> */}
<br />
<Dropdown getCurrency2={this.props.getCurrency2}/>
</div>


    )


}}

export default Currency