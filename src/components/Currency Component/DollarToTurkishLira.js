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
    <wrd>{this.props.currency.base_currency_code}</wrd>/{obj.map((item)=>{
        if (typeof item === 'object') {
            return (
                <div>
            <wrd> USD / {item.TRY.currency_name} </wrd><br></br>
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