import React , {Component} from 'react'

class DollarToEuro extends Component{

    constructor(props, currency){
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
            <p id="euroRate"> {item.EUR.rate}  </p>
            </div>
            )
            }
    })} 
    
    
    
    
    
    </div> 
        )
    }
}

export default DollarToEuro