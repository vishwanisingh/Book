import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
    let myStyle={
        minHeight : "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">Todos heading</h3>
            {/* for loop */}
            {/* {props.listss} Error: Objects are not valid as a React child (found: object with keys {sno, title}). If you meant to render a collection of children, use an array instead. */}

            {/* For loop using map - calls callback one time for each element in the array and returns result array*/}
            {props.listss.length==0?"No todos to display!":
            props.listss.map((ekitem)=>{
               return (
               <>
               <TodoItem ekitem={ekitem} key={ekitem.sno} onDelete={props.onDelete}/><hr/>
               </>
               )
            })}
            
        </div>
    )
}
