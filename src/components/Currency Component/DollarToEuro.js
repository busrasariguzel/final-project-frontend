import React , {Component} from 'react'

class DollarToEuro extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency2
        const obj = Object.values(rate)
        return (
            <div>
    {/* <p>{this.props.currency2.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
            <div key={idx}>
            <p> USD / {item.EUR.currency_name} </p>
            <p> {item.EUR.rate}  </p>
            <label>Enter the dollar amount you want to convert to Euro </label>< br />
            <input onChange={this.props.handleConvert} value={this.props.searchTerm} type="text" placeholder="Search.."/>
            <br />
            <label>{this.props.searchTerm * item.EUR.rate} </label>
            </div>
            )
            }
    })} 
    
    
    
    
    
    </div> 
        )
    }
}

export default DollarToEuro