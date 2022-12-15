import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getList, searchList } from '../api';
import CocktailCard from '../components/CocktailCard';
import Loading from '../components/Loading';


export default function Main() {
  const {keyword} = useParams()
  const {isLoading,error,data:list} = useQuery(
    ['cocktail',keyword],()=>{
      return keyword ? searchList(keyword) :getList() 
    },{staleTime: 5000}
  )

  if(isLoading) return <Loading></Loading>
  if(error) return <p>Something is wrong</p>
  return (
    <>
      <div className=" flex justify-between flex-wrap">
      {list.map((listItem)=>{
        return <CocktailCard key={listItem.idDrink} drink={listItem}/>
      })}
      </div>
    </>
  );
}

