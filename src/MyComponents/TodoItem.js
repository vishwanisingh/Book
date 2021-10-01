import React from 'react'
// export default is not used, named export is used so while importing
//importing it in {}
export const TodoItem = ({ekitem, onDelete}) => {
    return (
        <div>
            <h4>{ekitem.title}</h4>
            <p>{ekitem.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(ekitem)}}>Delete</button>
        </div>
    )
}
// func - passing
// func() - calling
// so here we made a function and called it and in which we passed a fucntion
// earlier onClick=onDelete - here we didn't passed our current item so we cannot pass like this const onDelete = (ekitem)=>
// Then onClick=onDelete() - here function was called during rendering- all items will be urunned
