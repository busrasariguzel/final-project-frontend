import React, {Component} from 'react';
import EachCoronaCase from './EachCoronaCase';
import SearchCorona from './Search'
import PropTypes from 'prop-types'


class CoronaCases extends Component {
    constructor(props){
        super()
        

    }
render(){
    return(
        <div style={{
            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'spaceBetween',
            alignItems:'baseline'
        }}>
{this.props.cases.filter(item => item.cases.total > 90000 && item.country !== 'All' && item.country !== 'North-America' && item.country !== 'Europe' && item.country !== 'Asia' &&item.country !== 'South-America').sort((a, b) => b.cases.total - a.cases.total)
.map((item,idx)=>{
    
                return (
                    <div key={idx}>
                    {/* <SearchCorona item={item} idx={idx}/> */}
                    <EachCoronaCase  
                    item={item} idx={idx}/>
                    
                    </div>
                )
            }
            )} 




        </div>
    )
}


}
CoronaCases.propTypes = {
    cases: PropTypes.array,
    
    
}

export default CoronaCases
