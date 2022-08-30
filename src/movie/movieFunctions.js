const Movie = require("./movieModel");

exports.createMovie = async (movieObject) => {
   try {
      await Movie.create(movieObject)
   } catch (error) {
      console.log(error);
   }
}

exports.listMovies = async () => {
   try {
      return await Movie.find({})
   } catch (error) {
      console.log(error);
   }
}

exports.updateMovie = async (movieObject, updatedMovieObject) => {
   try {
      await Movie.updateOne(movieObject, updatedMovieObject)
   } catch (error) {
      console.log(error);
   }
}

exports.deleteMovie = async (movieObject) => {
   try {
      await Movie.deleteOne(movieObject)
   } catch (error) {
      console.log(error)
   }
}