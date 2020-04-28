import React, {Component} from 'react';
import SearchCorona from './Search';
import PropTypes from 'prop-types';


class TotalCases extends Component {
    constructor(props){
        super()
        

    }
    
render(){
    return(
<div style={{textAlign:'center'}}>
        {this.props.cases.filter(item => item.country === 'All').map((item, idx) => {
            console.log('total cases...', item)
return(
<div key={idx} style={{ textAlign:'center' }}  >

             <h1 class="ui red big header ui top attached header ui red header" style={{fontSize:'3em'}}> Worldwide</h1>
            <div style={{ textAlign:'center' , paddingLeft:'210px'}}  >
                
  <div style={{textAlign:'center'}} class="ui  statistics">
    <div class="ui statistic" style={{ textAlign:'center' }} >
      <div class="value">{item.cases.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
      <div class="label">Total Cases</div>
    </div>
    <div class="ui statistic">
      <div class="value">{item.deaths.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
      <div class="label">Total Deaths</div>
    </div>
    <div class="ui statistic">
      <div class="value">{item.cases.new.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
      <div class="label">New Cases</div>
    </div>
  </div>
</div> 
            
             {/* <div class="ui attached segment">
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui big  ui blue horizontal label">Total Cases</div>
    : {item.cases.total}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui big ui green horizontal label">New Cases</div>
    : {item.cases.new}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui big ui orange horizontal label">Total Deaths</div>
    : {item.deaths.total}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui big ui teal horizontal label">New Deaths</div>
    : {item.deaths.new}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui big ui violet horizontal label">Recovered</div>
    : {item.cases.recovered}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui big ui yellow horizontal label">Critical</div>
    : {item.cases.critical}
    </div>
    </div>
    </div>  */}
            {/* <p>Total Cases : {item.cases.total}</p>
            <p>Total Deaths: {item.deaths.total}</p>
            <p>New Cases : {item.cases.new}</p>
            <p>New Deaths : {item.deaths.new}</p>
            <p>Recovered: {item.cases.recovered}</p>
            <p>Critical: {item.cases.critical}</p> */}
        {/* <div class="ui red segment"></div> */}
</div>
)
        })}

        
        
        </div>
        
        )
    }


}
TotalCases.propTypes = {
    cases: PropTypes.array,

    
}

export default TotalCases