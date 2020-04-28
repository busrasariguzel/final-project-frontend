import React , {Component} from 'react';
import PropTypes from 'prop-types';

class DollarToTurkishLira extends Component{

    constructor(props){
        super()
        }

    render(){
        const rate = this.props.currency
        const obj = Object.values(rate)
        const conversion = this.props.currency4
        const obj2 = Object.values(conversion)
        return (
            <div>
    {/* <p>{this.props.currency.base_currency_code}</p>/ */}
    {obj.map((item, idx)=>{
        if (typeof item === 'object') {
            return (
            <div  key={idx}>
                <i style={{paddingLeft:'45px',
            }} class="big lira icon"></i><br></br><br></br>
            <p class="ui orange label"> USD / {item.TRY.currency_name} </p> <br></br>
            <div class="ui tag labels"><br></br>
            <p class="ui label"> {item.TRY.rate} &#x20ba;</p>
            </div>
            </div>
            )
            }
            

    })}
{/* <div>
<label>Enter the dollar amount you want to convert to Turkish Lira</label>
<input onChange={this.props.handleConvert} value={this.props.searchTerm} type="text" placeholder="Search.."/>

</div> */}
{obj2.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.TRY){
                return (
                    <div key={idx}>
                    <p style={{paddingLeft:'30px'}}class="ui orange basic label" id="turkishRate"> {item.TRY.rate_for_amount} &#x20ba;  </p>
                    
                    </div>
                    )
                    } 
            }
         
            

    })}

    
    </div> 
        )
    }
}

DollarToTurkishLira.propTypes = {
    // currency4 : PropTypes.objectOf,
    // currency : PropTypes.objectOf,
    

    
}
export default DollarToTurkishLira