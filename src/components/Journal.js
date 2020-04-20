import React  from 'react';
import JournalEntry from './JournalEntry'



const Journal = (props)=> {
    return (
<div>
        {props.journals.map((journal,idx)=>{
                return (
                <JournalEntry journal={journal} key={journal._id} onUpdate = {props.onUpdate} onDelete={props.onDelete}/>
                )
                
                
            }
            )} 

</div>
    )



}

export default Journal