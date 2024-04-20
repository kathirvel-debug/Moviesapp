import mongoose from "mongoose";
const datas = mongoose.connection.collection('movielist');

export default class MovieRepo {

    async getallblog() {
        try {
            const data = await datas.find().toArray();
            return data
        }
        catch (err) {
            console.log(err);
        }
    }
    async movieTitle(movieName=''){
        try {
            const pipeline = [
                {
                    $match: {
                        title: { $regex: movieName, $options: 'i' } 
                    }
                }
            ];
            const data = await datas.aggregate(pipeline).toArray();
            return data;
        } catch (err) {
            console.log(err);
           
        }
    }
    async groupdata() {
        const pipeline = [
            {
                $unwind: "$genres"
            },
            {
                $group: {
                    _id:"$genres",
                    movies: {
                        $push: {
                            director: "$director",
                            imdb_rating: "$imdb_rating",
                            length: "$length",
                            poster: "$poster",
                            title: "$title",
                            overview:"$overview",
                            slug: "$slug",
                            backgroundpost:"$backdrop"

                        }
                    },

                }
            },{
                $project: {
                    _id: 0, 
                    category: "$_id", 
                    movies: 1 
                }
            },
        ]
        try {
            const data = await datas.aggregate(pipeline).toArray()
            return data
        }
        catch (err) {
            console.log(err);
        }
    }

}