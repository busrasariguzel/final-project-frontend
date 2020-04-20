import React from 'react'

const JournalEntry = (
    {onDelete,journal : {date, entry1, entry2,entry3,entry4,entry5, _id:id}}
    ) => {
    return (
<div>
    <h1> {date} </h1>
    <h1> entry : {entry1} </h1>
    <h1> entry 2: {entry2} </h1>
</div>
    )
}

export default JournalEntry