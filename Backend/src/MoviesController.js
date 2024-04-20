import MovieRepo from "./MovieRepositary.js";
const movieRepo= new MovieRepo()
export default class moviesController {
    category(req, res) {
        try {
            res.status(200).send({ Blogs: "qwe" })
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Internal Server Error');
        }
    }
    async searchmovies(req,res){
        try{
            const { name } = req.body
            if (name===""){
                return res.status(200).send("Please enter all movie name")
             }
            const data = await movieRepo.movieTitle(name);
            if (data.length > 0) {
                return res.status(200).json({ data })
            }
            else {
                return res.status(200).json({ message: "movies not found" })
                
            }
        }
        catch(err){
            return  res.status(500).send('Internal Server Error');
        }
    }
    async getAllMovies(req, res) {
        try {
            const data = await movieRepo.groupdata();
            res.status(200).send(data)
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Internal Server Error');
        }
    }

}

