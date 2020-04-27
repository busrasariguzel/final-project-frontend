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
            <div>
                <form 
                // onSubmit={this.handleSubmit}
                >
    <div >
    <input onChange={this.handleChange} value={this.state.country} type="text" placeholder="search by country.."/>
            <br />
        {/* <input type="submit" value="Submit" /> */}
    </div>


    </form>

    {this.props.cases
    .map((item,idx)=>{
        
// console.log(this.state.country)
// console.log(item.country)
        if(this.state.country === item.country){
            console.log(item.country)
            console.log(item.cases.total)
            
                    return (
                        <div key={idx}>
                        <h4>{item.country}</h4>
                    
                    <p>Total Cases: {item.cases.total}</p>
                    <p>New Cases: {item.cases.new}</p>
                    <p>Total Deaths: {item.deaths.total}</p>
                    <p>New Deaths : {item.deaths.new}</p>
                    <p>Recovered: {item.cases.recovered}</p>
                    <p>Critical: {item.cases.critical}</p>

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
