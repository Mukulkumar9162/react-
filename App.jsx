//  import { useReducer, useState } from 'react'
// import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//  const [count, setCount] = useState(0)

//  return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// this.props.

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   //  let  [data,SetData] = useState(0)
//   let  [color,Setcolor] = useState(0)

//    function done(){
//     SetData(data+1)
//    }

//    function change(){
//     SetData(data-1)
//    }
//    function reset(){
//     SetData(0)
//    }
//   return (

//     <div>

//     <p>{data}</p>

//     <button onClick={done}>click</button>
//     <button onClick={change}>-</button>
//     <button onClick={reset}>reset</button>

//     </div>
//   )
// }

// export default App

// <div style={{backgroundColor:color,height:'400px'}}>
// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//   let  [color,setcolor] = useState(false)
//   function done(){
//     if(color===true){
//       setcolor(false)
//     }else{
//       setcolor(true)
//     }
//   }
//   return (
//     <body>
//           <div style={color?{backgroundColor:'green',}:{backgroundColor:"red"}}></div>

//     // <div style={color?{backgroundColor:'green',height:'300vh',width:"400vh"}:{backgroundColor:"red",height:"200vh",width:"200vh"}}>

//       hello

//       <button onClick={done}>Click</button>

//     </div>

//     </body>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   let[time,SeTime]=useState()
//   setInterval(()=>{
//     let date= new Date().toLocaleDateString()
//     console.log(date,"datatat");
//     SeTime(date)

//   })

//   }
//   return (
//     <div>
//       {time} mai smay hu
//     </div>
//   )
// }

// export default App

// input event

// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//   let [data,SetData]=    useState()

//   function done(e){
//     console.log(e.target.value);
//     SetData(e.target.value)
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <input onChange={done} type="text" placeholder='enter your name'/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home  from './Home'
// import About from './About'
// import Login from './Login'
// import NavBar from './NavBar'
// // import React from 'App.css'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         {/* <Route> */}
//           <Route path="/" element={<Home />} />
//           <Route path="./About" element={<About />} />
//           <Route path="" element={<Login />} />
//           <Route path="./NavBar" element={<NavBar />} />
//           <Route path="./ " element={<contact/>} />

//         {/* </Route> */}
//       </Routes>
//     </div>
//   )
// }

// export default App;
// import { Form } from ''
// import React from 'react'
// import Home from './Home'

// const App= () => {
//   return (
//     <div>
//       <Home/>
      
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import const App = () => {
//   function raduser(count,action){
//     if(action.type==='incre'){
//       return count +=1
//     }
//     else if(action.type==='decr'){
//       return count -=1
//     }
//     else{
//       return count
//     }
//   }
//   return (
//     <div>
//     <h2>count</h2>
//     <button onClick={() =>{dispatch:({type : 'incrr'})}}>++</button>
//     <button onClick={() =>{dispatch:({type : 'decr'})}}>--</button
      
//     </div>
//   )
// }

// export default App
// import  React ,{useReducer} from 'react'



// const App = () => {
//   function  reduser (color, action) {
//     // switch (action.type) {
//    } if (action.type === 'red') {
//       return color ="red"
//    }
//    else if (action.type === 'blue') {
//     return color ="blue"
//    }
//    else if(action.type==='yellow'){
//     return color ="yellow"


//    }
//    else if(action.type==='green'){
//    return color ="green"
//    }
   
//    else{
//     return color
//    }
//   }
//   let [color,dispatch]= useReducer(reduser,'white')


//   return (
//     <div style={{background :color ,height:'400px'}}>

//         <button onClick={()=>{dispatch({type:'red'})}}>red</button>
//       <button  onClick={()=>{dispatch({type:'blue'})}}>blue</button>
//       <button  onClick={()=>{dispatch({type:'green'})}}>green </button>

//       <button  onClick={()=>{dispatch({type:'yellow'})}}>yellow</button>



      
//     </div>
//   )



// export default App

// export default App

// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home  from './Home'
// import About from './About'
// import Login from './Login'
// import NavBar from './NavBar'
// import React from './App.css'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         {/* <Route> */}
//           <Route path="/" element={<Home />} />
//           <Route path="./About" element={<About />} />
//           <Route path="" element={<Login />} />
//           <Route path="./NavBar" element={<NavBar />} />
//           <Route path="./ " element={<contact/>} />

//         {/* </Route> */}
//       </Routes>
//     </div>
//   )
// }
// // import React from 'react'

// // import { useRef } from 'react'


// // const App = () => {
// //   // let [state,SetState]=useState('')
// //    let data=   useRef()
  
// //    console.log(data.current,"data");
   
// //   //  console.log(data,"dataaaa");
   
// //   // let [data,SetData]=useState(0)

// // // useEffect(()=>{
// // //   // SetData(data+1)
// // //   // data.current=data.current+1

// // // }
// // // )
// //   return (
// //     <div>
// //       {/* <h3> appp</h3>
// // //       <Home/> */}
// // //       <h1   ref={data}> mujhe select kroo</h1>
// // //       {/* <input type='text' placeholder='Enter your data'  onChange={(e)=>SetState(e.target.value)}/> */}
// // //      {/* <p>{data.current}</p> */}
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // // import React from 'react'
// // // // import { useEffect } from 'react'
// // // // import { useRef } from 'react'
// // // // import { useState } from 'react'

// // // // const App = () => {
// // // //   let [input,SetInput]=useState('')
// // // //  let data=   useRef(1)
// // // //  console.log(data,"heh");
// // // //  useEffect(()=>{
// // // //   data.current=data.current+1
// // // //  })
 
// // // //   return (
// // // //     <div>
// // // //       <input  type='text' placeholder='Enter your name' onChange={(e)=>SetInput(e.target.value)}/>
// // // //       <h2>{data.current}</h2>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App

// // import React from 'react'
// // import Home from './Home'

// // // propsss
// // const App = () => {

// // let user='rahul'
// //   return (

// //     <div>
// //       {/* jsx */}
// //       {/* <h1> hell0  {user}</h1> */}
// //       <Home a={user}  />
// //     </div>
// //   )
// // }


// // export default App


// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   let [color,SetColor]=useState('green')
// //     // let [data,SetData]=   useState(0)
// //   // let count=0
// //   // function done(){
// //     // console.log('hello');
// //     // count=count+1
// //     // console.log(count,'heheh');
// //     // SetData(data+1)
// //   // }
// //   // function a(){
// //   //   SetData(data-1)
// //   // }
// //   // function b(){
// //   //   SetData(0)
// //   // }
// //   function change(){
// //     SetColor('red')
  
// // //   return (
// // //     <div   style={{backgroundColor:color,height:'400px'}} >
  
// // //            {/* <button onClick={done} >  click</button> */}
// // //            <button onClick={change}> red</button>
// // //            {/* <button onClick={a} >  -</button>
// // //            <button onClick={b} >  Reset</button> */}


// // //     </div>
// // //   )
// // // }

// // // export default App


// // import React from 'react'
// // import { useState } from 'react'
// // const App = () => {
// //   let [color,SetColor]=useState(false)
// //   function done(){
// //     if(color===true){
// //       SetColor(false)

// //     }else{
// //       SetColor(true)
// //     }
// //   }
// //   return (
// //     <div style={color?{backgroundColor:'green',height:"300px"}:{backgroundColor:"red"}}>
// //  hello
// //  <button onClick={done}>click</button>
// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import { useState } from 'react';
// // const App = () => {  
// //   let [time,SetTime]=useState()
// //   setInterval(()=>{
// //     let date=   new Date().toLocaleTimeString()
// //     console.log(date,"datatat");
// //     SetTime(date)
// //   })
  
// //   return (
// //     <div>
// //       {time} mai samay hu 
// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import { useState } from 'react';
// // const App = () => {
// //    let [data,SetData]=    useState('')
// //   function done(e){
// //     console.log(e.target.value);
// //     SetData(e.target.value)
    
// //   }
// //   return (
// //     <div>
// //       <h1>{data}</h1>
// //           <input  onChange={done} type='text' placeholder='Enter your nameee'/>
// //     </div>
// //   )
// // }

// // export default App



// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     pass:""

//   })
//   function done(e){
//        let {name,value}=    e.target
//     SetInput({...input,[name]:value})
//     console.log(input,"kya mil rha");
    
//   }
//   return (
//     <div>
//   <fieldset>   
//       <form> 
//         <input  type='text' name='name'  value= {input.name} onChange={done}  placeholder='Enter your name'/>
//         <br></br>
//         <br></br>
//         <input  type='password'  name='pass' value={input.pass} onChange={done} placeholder='Enter your pass'/>
//         <br></br>
//         <br></br>
//        <button> save</button>
//       </form>
//       </fieldset>
//     </div>
//   )
// }

// export default App


// let obj={
//   id:1,
//   name:"raul"
// }
// let {id,name}=obj
// console.log(id);






// import React,{useState} from 'react'
// import NavBar from './NavBar'
// import {Routes,Route}   from 'react-router-dom'
// import Home from './Home'
// import Cart from './Cart'
// const App = () => {
//   let [cartData,SetCartData]=useState([])
//   // console.log(cartData,"mainnnn");
  
//    return (
//     <div>
//       <NavBar/>
//       <Routes>
// <Route   path='/'  element={<Home  cartData={cartData} SetCartData={SetCartData}   />}/>
// <Route   path='/cart'  element={<Cart cartData={cartData} SetCartData={SetCartData} />}/>

//       </Routes>
//     </div>
//   )
// }

// export default App


// useMemo///////////
// import React, { useMemo,useState } from 'react'
// const App = () => {
//   let[data,SetData]=useState(0)
//   let cashedValue= useMemo(()=>{
//     let result=0
//     function call(){
//       for let (i=0;i<10000000;i++)
//       result+=1
//     }
//   return result
    
//   }
//   return call()
// },[])
// return (
//     <div>
//       <h1>{cashedValue}</h1>
//       <button  onClick={(=>SetData(data+1))}>{data}</button>
      
//     </div>
//   )
// }



// export default App
// import { memo } from "react"
// import { useState } from "react"


// topic (use memo)//////////////////////////////
import React,{memo,useState} from 'react'

const App = () => {
  let [data,SetData]=useState(0)
  let [name,SetName]=useState('delhi')

  console.log('appp');
  return (
    <div>
      <h1>appppp</h1>
   <button  onClick={()=>SetData(data+1)}>add</button>
   <button  onClick={()=>SetName('Bhopal')}>name</button>

   <MemoChild data={data} name={name}/>

      
    </div>
  )
}




const child = () => {
  console.log('childddd');
  return (
    <div>
      <h1>
        childd
      </h1>

      
      
    </div>
  )
}
let MemoChild= memo(child)

export default App







