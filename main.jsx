//  import { StrictMode } from 'react'
//  import { createRoot } from 'react-dom/client'
//  import App from './App.jsx'
//  import './index.css'
// import {BrowserRouter} from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
  
//     <App />
//     </BrowserRouter>
//   </StrictMode>
// )
// import { createRoot } from "react-dom/client";
// import Context from "./Context.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById{}
// <BrowserRouter>
// import { StrictMode } from 'react' 
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {BrowserRouter} from 'react-router-dom'
// import Context from './Context.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <Context.Provider value={'hello'}>

//     <App />
//     </Context.Provider>

  
// //     </BrowserRouter>
// //   </StrictMode>
//  )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter}  from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>

<App/>
</BrowserRouter>
,
)
