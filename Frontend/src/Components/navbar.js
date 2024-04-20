import { Outlet,Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { homeSelector } from "../Redux/homeredux";
import { fetchStarts } from "../Redux/homeredux";
import { useState ,useEffect} from "react";
export const Navbar=()=>{
    const {list } = useSelector(homeSelector);
    const [searchinput,setInput]=useState()
    const disptach = useDispatch();
    const handelchange=(event)=>{
setInput(event.target.value)
    }
    useEffect(()=>{
        const filteredList = list.filter(category => {
            return category.movies.filter(movie => {
                return movie.title.toLowerCase().includes(searchinput.toLowerCase());
            }).length > 0;
        });
        disptach(fetchStarts(filteredList))
        console.log("testing");
    },[searchinput])
   
    return(
        <>
         <div className="nav">
        <div><Link to='/'><h2 className="Logo">The Movies</h2></Link></div>
            <div classNameName="wrapper">
                <div classNameName="search-input">
                 
                  <input type="text" value={searchinput} onChange={handelchange} placeholder="Type to search.." />
                  <div className="autocom-box">
                    
                  </div>
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>
              </div>
     </div>
     <div>
        <Outlet/>
     </div>
        </>
    )
} 