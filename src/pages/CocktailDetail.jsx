import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailList } from '../api';
import Loading from '../components/Loading'

export default function CocktailDetail() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [list,setList] = useState(null)
  useEffect(()=>{
    getDetailList(id).then((res)=>{setList(...res.data.drinks)})
  },[id])

  return (
    <>
      <button className='bg-white py-4 px-14 rounded-30px my-12 block text-center mx-auto hover:bg-btnhover' onClick={()=>{navigate(`/`)}}>BACK</button>
      {list ? <div className='w-1200 flex justify-around'>
        <div className='w-400 h-500 bg-white p-8 shadow-2xl'>
          <img src={list.strDrinkThumb} alt="" />
        </div>
        <div className='w-400 h-500 py-16'>
          <h4 className='text-3xl font-bold'>Drink : { list.strDrink }</h4>
          <h6 className='text-xl font-medium my-8'>Category : { list.strCategory }</h6>
          <p className='my-8'>Alcoholic : {list.strAlcoholic }</p>
          <p className='my-8'>Glass : { list.strGlass }</p>
          <p className='my-8'>Instructions : { list.strInstructions }</p>
        </div>
      </div> :<Loading/> }
      
    </>
  );
}

