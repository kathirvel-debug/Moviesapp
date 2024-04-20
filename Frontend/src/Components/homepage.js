import { moviesApi } from "../Redux/homeredux"
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { homeSelector } from "../Redux/homeredux";
import {Link } from "react-router-dom";
export const Homepage = () => {
    const disptach = useDispatch();
    const {list, search} = useSelector(homeSelector);
    useEffect(() => {
        disptach(moviesApi())
    }, []);
    return (
        
        <>
        {search.length === 0 ? (
            list.map((item) => (
                <div key={item.id}>
                    <div className="title"><h2>{item.category}</h2></div>
                    <div className="section-2">
                        {item.movies.map((x) => (
                            <Link to={`/details/${x.title}`} key={x.title}>
                                <div className="cards-2" style={{ backgroundImage: `url(${x.poster})` }}></div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))
        ) : (
            search.map((item) => (
                <div key={item.id}>
                    <div className="title"><h2>{item.category}</h2></div>
                    <div className="section-2">
                        {item.movies.map((x) => (
                            <Link to={`/details/${x.title}`} key={x.title}>
                                <div className="cards-2" style={{ backgroundImage: `url(${x.poster})` }}></div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))
        )}
    </>
            
        
    )
}