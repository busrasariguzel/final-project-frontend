import React, {Component} from 'react'
import PropTypes from 'prop-types'

class EachCoronaCase extends Component {
    constructor(props){
        super()
    }

render(){
    return(
        <div style={{
            width:'40%',
        }}>
<div 
key={this.props.idx}>
<div 
>
<h2 class="ui top attached header ui red header">{this.props.item.country}</h2>
    {/* <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui red horizontal label">{this.props.item.country}</div>
    {this.props.item.country}
    </div>
    </div> */}
    <div class="ui attached segment">
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="label ui blue horizontal label">Total Cases</div>
    : {this.props.item.cases.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui green horizontal label">New Cases</div>
    : {this.props.item.cases.new.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui orange horizontal label">Total Deaths</div>
    : {this.props.item.deaths.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui teal horizontal label">New Deaths</div>
    : {this.props.item.deaths.new.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui violet horizontal label">Recovered</div>
    : {this.props.item.cases.recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    <div role="list" class="ui divided selection list">
    <div role="listitem" class="item">
    <div class="ui yellow horizontal label">Critical</div>
    : {this.props.item.cases.critical.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
    </div>
    </div>
    </div>
    </div>

                </div>
        </div>
                )
            }
            } 

            EachCoronaCase.propTypes = {
                
                
                
            }


export default EachCoronaCase
