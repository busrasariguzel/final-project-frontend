import React, {Component} from 'react';
import DropdownStates from './DropdownStates';
import PropTypes from 'prop-types'


class CoronaByState extends Component {
    constructor(props){
        super()
        this.state ={
            value:'',
            usaState:'',
        }

    }
    handleChange = (event)=> {
        this.setState({usaState: event.target.value});
        console.log(this.state.usaState)
    }

    handleSubmit= (event) => {
        this.props.getCoronaByState2(this.state.usaState);
        // alert('Your currency is: ' + this.state.value);
        event.preventDefault();
    }


render(){
    const rate = this.props.casesByState
    const obj = Object.values(rate)
    console.log('OBJ....', obj)
    return(
        <div>
    
{this.props.casesByState
.map((item,idx)=>{
    
                return (
                    <div key={idx}>
                    
            
                    </div>
                    


                )
            }
            )} 

<form 
// onSubmit={this.handleSubmit}
>


            <label>

            {/* <h3 class="ui orange header ui block header" >Select your state:</h3> */}
            <select 
            class="ui orange header ui fluid multiple search selection dropdown" 
            value={this.state.usaState} 
            onChange={this.handleChange}
            >
            <option value="">Select your state</option>
            <option value="New York">New York</option>
            <option value="Washington">Washington</option>
            <option value="New Jersey">New Jersey</option>
            <option value="South Carolina">South Carolina</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Virginia">Virginia</option>
I           <option value="Idaho">Idaho</option>
            <option value="Iowa">Iowa</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Missouri">Missouri</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Colorado">Colorado</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Ohio">Ohio</option>
            <option value="Pennsylvania">Pennsylvania</option>
<option value="Washington">Washington</option>
<option value="Wisconsin">Wisconsin</option>

<option value="Vermont">Vermont</option>

<option value="Minnesota">Minnesota</option>

<option value="Florida">Florida</option>

<option value="North Carolina">North Carolina</option>

<option value="California">California</option>


<option value="Wyoming">Wyoming</option>

<option value="Michigan">Michigan</option>

<option value="Maryland">Maryland</option>

<option value="Alaska">Alaska</option>

<option value="Kansas">Kansas</option>

<option value="Tennessee">Tennessee</option>

<option value="Texas">Texas</option>

<option value="Maine">Maine</option>

<option value="Arizona">Arizona</option>

<option value="Georgia">Georgia</option>

<option value="Arkansas">Arkansas</option>

<option value="South Dakota">South Dakota</option>

<option value="Alabama">Alabama</option>

<option value="West Virginia">West Virginia</option>

<option value="West Virginia">West Virginia</option>
<option value="North Dakota">North Dakota</option>

<option value="Massachusetts">Massachusetts</option>

<option value="Utah">Utah</option>

<option value="Montana">Montana</option>

<option value="New Hampshire">New Hampshire</option>

<option value="Oregon">Oregon</option>

<option value="New Mexico">New Mexico</option>

<option value="Rhode Island">Rhode Island</option>

<option value="Nevada">Nevada</option>

D<option value="District of Columbia">District of Columbia</option>

<option value="Connecticut">Connecticut</option>

<option value="Hawaii">Hawaii</option>

<option value="Delaware">Delaware</option>

<option value="Diamond Princess">Diamond Princess</option>

<option value="Grand Princess">Grand Princess</option>

<option value="Guam">Guam</option>

<option value="Northern Mariana Islands">Northern Mariana Islands</option>

<option value="Puerto Rico">Puerto Rico</option>

<option value="Virgin Islands">Virgin Islands</option>
            </select>
            </label><br />
            </form>

{obj.map((item, idx)=>{
        if (typeof item === 'object') {
            if(item.state === this.state.usaState ){
                return (
                    <div key={idx}>
                        
                        
            <h1 class=" ui segment ui red header ui top attached header ui red header"> {item.state}
            &nbsp;
  <i class="us flag"></i>
 

            
            
            </h1>
            
            <div class="ui attached segment">
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui blue horizontal label">Total Cases</div>
    : {item.confirmed}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui green horizontal label">Total Deaths</div>
    : {item.deaths}
    </div>
    </div>
    
   
    
   
    </div>
                    </div>
                    )
                    } 
            }

    })}


        </div>
    )
}


}

CoronaByState.propTypes = {
    value: PropTypes.string,
    usaState: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    
}

export default CoronaByState