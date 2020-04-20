import React from 'react'

const JournalEntry = (
    {onDelete,journal : {date, entry1, entry2,entry3,entry4,entry5, _id:id}}
    ) => {
    return (
<div key={id}>
    <h1> Journal </h1>
    <h4> {date} </h4>
    <h4> entry : {entry1} </h4>
    <h4> entry 2: {entry2} </h4>
</div>
    )
}

export default JournalEntry