import React, { useState, useEffect } from 'react'; //has component
import ReactDom from 'react-dom'; //has render

//CSS
//import './index.css'; //means that file is in same folder , if two dots then one folder up
//write with extension

import Header from "./MyComponents/Header";
import {AddTodo} from "./MyComponents/AddTodo";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {About} from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



// const books =[
// {
//   id:1,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpldVR5VzPSyaL6JF4DIYfAsG3Xf44W2dWA&usqp=CAU",
//   title : 'Contact',
//   author : 'Carl Sagan'
// }
// ,
// {
//   id:2,
//   img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598993363l/21853621._SY475_.jpg",
//   title : 'The nightingale',
//   author : 'Kristin Hannah'
// },
// {
//   id:3,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60NGNRpoQhlsXXOZyl-hMcyDUZu_DhUUEiQ&usqp=CAU",
//   title : 'Ikigai',
//   author : 'Hector Garcia'
// },
// ];
//setting up variables
// const Title ='The nightingale';
// const names=['vishwani','shivank', 'ravin'];
// const newName = names.map((name)=>{return <h1>{name}</h1>});
// // In React, you cannot render objects but you can render
// // a simple array like above or specific properties as in below example
// console.log(newName)

function Component(){
  let initTodo;
  if(localStorage.getItem("listss") === null){
    initTodo=[]
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("listss"));
  }
  const onDelete = (ekitem)=>
  {
    console.log("I am onDelete of todo!", ekitem);
    //This is how you will delete todo item
    setTodos(listss.filter((i)=>{ //It creates an array filled with all array elements that pass a test
      return i!==ekitem;  //return all listss items except which is matching!!
    }));
    localStorage.setItem("listss", JSON.stringify(listss));
  }

  // setTodos is a function which will update the todos
  //arguments of useState are intial states only
  //lists is a state variable here. React will remember its current value between re-renders, and provide the most recent one to our function.



  const addTodo = (title, desc)=> {
    console.log("I am adding this todo",title, desc)
    let sno;
    if(listss.length==0){
      sno=0;
    }
    else{
      sno=listss[listss.length-1].sno + 1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...listss,myTodo]);
    console.log(myTodo);
  }

  const [listss, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("listss", JSON.stringify(listss)); // this is our effect
  }, [listss])
  // As soon as our todos are changed we want to use the effect

  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={true}/>  {/* here we are passing title from index to Header in form of props. SO write props.title in Header.js*/}

      <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos listss={listss} onDelete={onDelete}/> {/* passing array to Todos.js via props parameter */}
              </>)
          }}>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>


      <Footer/>
    </Router>
    </>
  );
}

// When you write css in jsx, it goes directly inline
ReactDom.render(<Component/>, document.getElementById('root'));

// function BookList(){
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//       //const {img, title, author} = book; //these objects are passed as props
//       return (
//         <Book key={book.id} {...book}></Book>
//       );
//   })}
//   </section>
//   );
// }

// const Book = ({img, title, author, children}) => {  //props is parameters
//   // attribute, eventHandler
//   // onClick, onMouseOver
//   const clickHandler = () => {
//     alert('Hello');
//   };
//   return (
//     <article className='bookimage'>
//       <img src={img} alt='' width="300" height="200"/>
//       <h3>{title}</h3>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>reference example</button>
//       {children}
//     </article>
//   );
// };


//const Author = () => <h4 style={{}}>Kristin Hannah</h4>



// function Greeting() //G caps - it is currently root component 
// {
//   return (
//   <div>
//     <Person/>
//     <Message/>
//   </div>);
// }

// const Person = () => <h2>Vishwani</h2>;
// const Message = () => {
//   return <p>I rendered person component</p>
// }

// const Greeting = () =>{
//   return React.createElement('h1', {}, 'hello world');
// }

// ReactDom.render(<Greeting/>, document.getElementById('root'));

// JSX - javascript xml
// returns single element
// div/section/atile or fragemnt
// use camelCase for html attribute
// className instead of class
// close every element
// formatting use () with return