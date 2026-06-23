import SearchForm from "../components/SearchForm"
 import {Outlet} from "react-router-dom"

export default function Layout (){
    return (

        <>
        <SearchForm/> 

        
        <Outlet />


         </>
  
)
}