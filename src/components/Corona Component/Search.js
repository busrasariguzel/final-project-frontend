import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
    return(
        <div>
    
<form >
    <div >
<input onChange={props.handleChange}
type="text" placeholder="Search by country..."
value={props.searchTerm}/>
    </div>


</form>



        </div>
    )
}


Search.propTypes = {
    handleChange : PropTypes.func,
    searchTerm: PropTypes.string,
}

export default Search;