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
    {obj.map((item)=>{
        if (typeof item === 'object') {
            return (
                <div>
            <p> USD / {item.EUR.currency_name} </p><br></br>
            <bold> {item.EUR.rate}  </bold>
            </div>
            )
            }
    })} 
    
    
    
    
    
    </div> 
        )
    }
}

export default DollarToEuro