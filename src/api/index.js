import axios from 'axios';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'

async function getList (){
  return await axios.get(`${baseURL}search.php?f=a`).then((res)=> res.data.drinks)
}

async function searchList(keyword){
  return await axios.get(`${baseURL}search.php?s=${keyword}`).then((res)=> res.data.drinks)
}

async function getDetailList(id){
  return await axios.get(`${baseURL}lookup.php?i=${id}`)
}

export {getList,searchList,getDetailList}