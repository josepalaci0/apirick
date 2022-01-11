import axios from 'axios';
import './App.css';
import { useEffect, useState  } from 'react';
import ReactPaginate from 'react-paginate';



import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  let [axiosData,setAxiosData]=useState([])
  let {info,results}= axiosData
  let [pageNumber,setPageNumber]=useState(1)
  let [search,setSearch]= useState("")

   console.log(pageNumber)





  
useEffect(()=>{
  axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
  .then(res=>{setAxiosData(res.data)
    
   
  })
  


}, [pageNumber, search])

  return (
    <div className="App">
      
     <h1 className="text-center  my-4">
       Rick & Morty Aplicasion </h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
        <div className="container">
          <div className="row">
            
                 <div className="col-12">
                   <div className="row CardsBig">
                      <Cards results={results}/>
                   </div>
                 </div>
             </div>
         </div>
         <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
