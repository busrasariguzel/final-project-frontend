import React , {Component} from 'react'

class DollarToTurkishLira extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency
        const obj = Object.values(rate)
        return (
            <div>
    {/* <p>{this.props.currency.base_currency_code}</p>/ */}
    {obj.map((item)=>{
        if (typeof item === 'object') {
            return (
                <div>
            <p> USD / {item.TRY.currency_name} </p><br></br>
            <bold> {item.TRY.rate}  </bold>
            </div>
            )
            }
    })} 
    
    
    
    
    
    </div> 
        )
    }
}


export default DollarToTurkishLira