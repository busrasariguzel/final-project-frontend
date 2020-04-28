import React, {Component} from 'react';
import PropTypes from 'prop-types'

class SearchCorona extends Component {
    constructor(props){
        super()
        this.state={
            country:''
        }
        

    }
    
    handleChange = (event)=> {
        this.setState({country: event.target.value});
      }
    
    //   handleSubmit= (event) => {
    //     this.setState({country: event.target.value});
    //       event.preventDefault();
    //     // alert('Your currency is: ' + this.state.value);
    //   }
    
    render(){
        console.log(this.props.cases)
        return(
            <div style={{height:'10%'}}>
                <form >
                <div class="ui placeholder segment" style={{height:'40%', backgroundColor: 'orange' ,}} >
  <div class="ui stackable center aligned two column grid">
  {/* <div class="ui vertical divider">Or</div> */}
    {/* <div class="ui vertical divider"></div> */}
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header">
          <i aria-hidden="true" class="search icon"></i>
          Find Country
        </div>
        <div class="ui search">
          <div class="ui icon input">
            <input
            type="text" onChange={this.handleChange} value={this.state.country}
              type="text"
              placeholder="Search countries..."
              
              tabindex="0"
              class="prompt"
              autocomplete="off"
            />
            <i aria-hidden="true" class="search icon"></i>
          </div>
          <div class="results transition">
            <div class="message empty"><div class="header">No results found.</div></div>
          </div>
        </div>
        {/* <div class="column">
        <div class="ui icon header">
          <i class="world icon"></i>
          Add New Country
        </div>
        <div class="ui primary button">
          Create
        </div>
      </div> */}
      </div>
      </div>
    </div>
  </div>

                

    
{/* <div class="ui large icon input">
    <input type="text" onChange={this.handleChange} value={this.state.country} type="text" placeholder="search by country.."/>
    <i aria-hidden="true" class="search icon"></i>
  </div> */}
    </form>

    {this.props.cases
    .map((item,idx)=>{
        
// console.log(this.state.country)
// console.log(item.country)
        if(this.state.country.toLowerCase() === item.country.toLowerCase()){
          
            
                    return (
                        <div style={{
                            width:'40%',
                        }} key={idx}>
            <h1 class="ui red header ui top attached header ui red header">{item.country}</h1>
            
            <div class="ui attached segment">
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui blue horizontal label">Total Cases</div>
    : {item.cases.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui green horizontal label">New Cases</div>
    : {item.cases.new}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui orange horizontal label">Total Deaths</div>
    : {item.deaths.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui teal horizontal label">New Deaths</div>
    : {item.deaths.new}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui violet horizontal label">Recovered</div>
    : {item.cases.recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui yellow horizontal label">Critical</div>
    : {item.cases.critical.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    
    </div>
    </div>
    </div>
                        {/* <h4></h4>
                    
                    <p>Total Cases: {item.cases.total}</p>
                    <p>New Cases: {item.cases.new}</p>
                    <p>Total Deaths: {item.deaths.total}</p>
                    <p>New Deaths : {item.deaths.new}</p>
                    <p>Recovered: {item.cases.recovered}</p>
                    <p>Critical: {item.cases.critical}</p> */}

                        </div>
                    )
                } 
                
            }
                )} 
    
    
    
    
            </div>
        )
    }
    

            } 
SearchCorona.propTypes = {
        country: PropTypes.string,
        handleChange: PropTypes.func,
        handleSubmit: PropTypes.func, 

    } 

export default SearchCorona
