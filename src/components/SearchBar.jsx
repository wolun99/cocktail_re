import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [keyword,setKeyword] = useState('')
  const navigate = useNavigate()
  return (
    <div className='bg-white w-600 h-16 align-middle mx-auto rounded-30px text-center'>
      <form className='leading-4rem' onSubmit={(e)=>{
        e.preventDefault()
        if(keyword === ''){
          alert('검색어를 입력해주세요')
          return
        }
        navigate(`/cocktail/${keyword}`)
      }}>
        <input type="text" className='h-10 w-64 outline-0 rounded-md' placeholder='검색어를 입력해주세요' onChange={(e)=>{
          setKeyword(e.target.value)
        }}/>
        <button className='h-10 align-middle leading-2.5rem search-button w-16 text-white'>검색</button>
      </form>
    </div>
  );
}

