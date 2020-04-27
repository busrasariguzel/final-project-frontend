import React, {Component} from 'react';
import SearchCorona from './Search';


class TotalCases extends Component {
    constructor(props){
        super()
        

    }
    
render(){
    return(
<div style={{border:'0.5px solid grey'}}>
        {this.props.cases.filter(item => item.country === 'All').map((item, idx) => {
            console.log(item)
return(
<div key={idx}>


            <p style={{color:'red'}}> Total Cases Worldwide : {item.cases.total}</p>
            <p>Total Deaths: {item.deaths.total}</p>
            <p>New Cases : {item.cases.new}</p>
            <p>New Deaths : {item.deaths.new}</p>
            <p>Recovered: {item.cases.recovered}</p>
            <p>Critical: {item.cases.critical}</p>
        
</div>
)
        })}
        <SearchCorona />
        
        
        </div>
        
        )
        }





}

export default TotalCases