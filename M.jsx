// import React from 'react'

// const m = () => {
//   return (
//     <div>
//         <h1>hello</h1>
      
//     </div>
//   )
// }

// export default m

import { useContext } from 'react'
import  Context from './Context'

const M= () => {
  let a= useContext(Context)
  console.log(a,hehe);
  return (
    <div>
        <h1>
            {a}
        </h1>
      
    </div>
  )
}

export default M


