import React from 'react'

const JournalEntry = (
    {onDelete, onUpdate, journal : {date, entry1, entry2,entry3,entry4,entry5, _id:id}}
    ) => {
    return (
<div key={id}>

    <h4 style={{color:'blue'}}> {date} </h4>
    <h5> entry #1: {entry1} </h5>
    <h5> entry #2: {entry2} </h5>
    <h5> entry #3: {entry3} </h5>
    <h5> entry #4: {entry4} </h5>
    <h5> entry #5: {entry5} </h5>






    <button className="ui pink button"
onClick={()=>{
return onDelete(id)
}}
>Delete</button>
<button  className="ui purple button"
onClick={()=>{
return onUpdate(id)
}}>Update</button>
</div>
)
}

export default JournalEntry