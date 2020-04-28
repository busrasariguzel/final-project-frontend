import React  from 'react';
import JournalEntry from './JournalEntry'
import { textAlign } from '@material-ui/system';



const Journal = (props)=> {
    return (
<div style={{
            
            // display: 'flex',
            // flexDirection: 'row',
            justifyContent: 'right',
            margin: '0 right',
            // textAlign:'right'
            alignItems:'center',
            paddingLeft:'20%'
           
            
        }}>
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