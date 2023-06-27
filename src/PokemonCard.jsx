import React from 'react'

const PokemonCard = (props) => {
  let id = props.imgId
  if(id < 9)
  {
    id = `00${id}`; 
  }
  else if(id > 10 && id < 99)
  {
    id = `0${id}`
  }
  else{
    id = id;
  }
  return (
    <div >
        <div className='w-[50%] mx-auto mt-10 shadow-md bg-gray-800 shadow-red-800 rounded-full md:max-w-[20%]'>
        <img className='w-full' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="" />
      </div>
    
      <table className='border-2
       w-[90%] mx-auto my-10 shadow-md  md:max-w-[50%] sm:text-md md:text-lg lg:text-xl '>
        <caption className='text-center bg-gray-200 text-lg font-semibold py-1 mx-auto font-semibold lg:text-2xl  text-red-800 border-2 border-red-800 border-b-transparent '>Details</caption>
        
        <tr className='border-2 border-red-800'>
          <th className='border-2 border-red-800 text-left pl-2'>Id</th>
          <td className='pl-2'>{id}</td>
        </tr>
        <tr className='border-2 border-red-800'>
          <th className='border-2 border-red-800 text-left pl-2'>Name</th>
          <td className='pl-2'>{props.pokemonName}</td>
        </tr>
        <tr className='border-2 border-red-800'>
          <th className='border-2 border-red-800  text-left pl-2'>Moves</th>
          <td className='pl-2'>{props.pokemonMoves}</td>
        </tr>
        <tr className='border-2 border-red-800'>
          <th className='border-2 border-red-800  text-left pl-2'>Height</th>
          <td className='pl-2'>{props.pokemonHeight}</td>
        </tr>
        <tr className='border-2 border-red-800'>
          <th className='border-2 border-red-800  text-left pl-2'>Weight</th>
          <td className='pl-2'>{props.pokemonWeight}</td>
        </tr>
      </table>
      
      
    </div>
  )
}

export default PokemonCard
