import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { buildQueries } from '@testing-library/react';
import PokemonCard from './PokemonCard';



const App = () => {
  const [moves , setMove] = useState(); 
  const[name,setName] = useState();
  const[nameVal,setNameVal] = useState('ditto');
  const [id,setId]= useState();
  const [height,setHeight] = useState();
  const [weight,setWeight] = useState();
  const onChangeHandle =(e)=>{
    setName(e.target.value);
  }

  const onClickHandle=()=>{
    setNameVal(name);
  }

  useEffect(()=>{
    async function getData(){
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameVal}`);

      setMove(res.data.moves.length);
      setId(res.data.id)
      setHeight(res.data.height)
      setWeight(res.data.weight)
      console.log(res)
    }
    getData();
  },[nameVal]);
  
  return (
    <div>
      <h1 className='text-center bg-red-800 text-white py-2 text-lg font-semibold text-gray-200 md:py-3 md:text-xl '>PokeMon Finder</h1>
      
      <div className='flex
       flex-col justify-center items-center mt-2 md:flex-row md:space-x-5 md:mt-4 '>
      
          <input className='w-[70%] border-b-2 text-center text-md py-2 px-2 border-b-red-800 outline-none active:outline-none md:w-[40%] md:text-left lg:text-lg' type="text" value={name} onChange={onChangeHandle}  />
        <button onClick={onClickHandle} className='bg-red-800 text-gray-200 mt-4 px-5 py-1 text-sm rounded-md drop-shadow-md hover:bg-red-900 md:text-md lg:text-lg ' type='submit' >Search</button>
      
      </div>
      <PokemonCard pokemonName={nameVal} pokemonMoves= {moves} imgId={id} pokemonHeight = {height} pokemonWeight = {weight}/>
    </div>
  )
}

export default App
