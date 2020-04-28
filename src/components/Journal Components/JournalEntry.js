import React from 'react'

const JournalEntry = (
    {onDelete, journal : {date, entry1, entry2,entry3,entry4,entry5, _id:id}}
    ) => {
    return (
<div  key={id}>
<br></br>
<div >
    <h3 class="ui header pink"> {date} </h3>
    <h5 class="ui segment"> <i aria-hidden="true" class="heart outline pink icon"></i>{entry1} </h5>
    <h5 class="ui segment" ><i aria-hidden="true" class="heart outline pink icon"></i>{entry2} </h5>
    <h5 class="ui segment"> <i aria-hidden="true" class="heart outline pink icon"></i>{entry3} </h5>
    <h5 class="ui segment"><i aria-hidden="true" class="heart outline pink icon"></i>{entry4} </h5>
    <h5 class="ui segment"> <i aria-hidden="true" class="heart outline pink icon"></i>{entry5} </h5>






    <button className="ui pink button"
onClick={()=>{
return onDelete(id)
}}
>Delete</button>
{/* <button  className="ui purple button"
onClick={()=>{
return onUpdate(id)}}>Update</button> */}
</div>
</div>
)
}

export default JournalEntry