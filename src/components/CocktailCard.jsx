import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function CocktailCard({drink}) {
  const navigate = useNavigate()
  return (
    <>
    <div className='w-1/5 h-96 m-3 mt-9 bg-white p-5 shadow-lg hover:shadow-2xl hover:cursor-pointer' onClick={()=>{
      navigate(`/detail/${drink.idDrink}`)
    }}>
      <img src={drink.strDrinkThumb} alt="" />
      <p className='font-bold text-2xl text-center mt-4'>{drink.strDrink}</p>
      <p className='text-center text-sm font-semibold'>{drink.strCategory}</p>
    </div>
    </>
  );
}
