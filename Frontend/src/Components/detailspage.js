import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { homeSelector } from "../Redux/homeredux";
export const  Detailpage=()=>{
    const {list } = useSelector(homeSelector);
    const { movies } = useParams();
    console.log(movies);
    let movieCategory;

list.forEach(category => {
    const foundMovie = category.movies.find(movie => movie.title === movies);
    if (foundMovie) {
        movieCategory = foundMovie;
        return; 
    }
});
if (movieCategory) {
    console.log("testing",movieCategory); 
} else {
    console.log("Movie not found");
}
return(
    <>
    <div class="background" style={{backgroundImage: `url(${movieCategory.backgroundpost})`}}>

    </div>
    <div class="block">
        <div class="cards" style={{backgroundImage: `url(${movieCategory.poster})`}}>

        </div>
        <div>
            <h2>{movieCategory.title}</h2>
            <h3>Rating:{movieCategory.imdb_rating}</h3>
        </div>
    </div>
    <div class="content of movies">
<h2>Director:{movieCategory.director}</h2>
<h2>Duration:{movieCategory.length}</h2>
<h3>{movieCategory.overview}</h3>
    </div>
    </>
)
}