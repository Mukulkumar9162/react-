import React, { useState } from 'react'

const form = () => {

    let [input,SetInput]=useState({

        name:"",
        pass:""

    })

    function done(e){

        let{ name,vlaue}=    e.target;
        SetInput({...input,[name]:value})
        console.log(input,"kya mil raha ");


    }
  return (
    <div>
        <fieldset>
            <input type='text' name='name' value={input.name} onChange={done}>enter your name</input>  
            <br></br>  
            <br></br> 
            <input type='password' name='pass' value={input.pass} onChange={done}>enetr your pass</input>  

            <br></br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            <br></br>    

               <button>save</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


        </fieldset>
      
    </div>
  )
}

export default form
