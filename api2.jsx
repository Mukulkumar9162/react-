// /  import React from 'react'
 import axios from 'axios';
 import React, { useEffect, useState } from 'react';
 import './App.css';


const api = () => {

   let [data, setData] = useState([]);
    let [filter, setFilter] = useState("all");
    async function call() {
        try {
          let apiData = await axios('https://dummyjson.com/recipes');
          setData(apiData.data.recipes);
        } catch (error) {
          console.error("Error fetching data", error);
        }
   }
  useEffect(() => {
        call();
      }, []);
    
      const filteredData = data.filter((recipe) => {
        if (filter === "all") return true;
        return recipe.mealType.includes(filter); 
      });
    
  return (
    <div className='button-container'>
        
        <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
        <button onClick={() => setFilter("Lunch")}>Lunch</button>
        <button onClick={() => setFilter("Dinner")}>Dinner</button>
       <button onClick={() => setFilter("all")}>All</button>
      
   </div>
    
   )
}

export default api
