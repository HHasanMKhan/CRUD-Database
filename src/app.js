require("./db/connection");
const mongoose = require("mongoose")
const yargs = require("yargs")
const { createMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    try {
        if (yargsObject.create) {
            await createMovie({ title: yargsObject.title, actor: yargsObject.actor })
            console.log("1 entry has been added to the database.")
            console.log(await listMovies())
        } else if (yargsObject.list) {
            console.log(await listMovies())
        } else if (yargsObject.update) {
            await updateMovie({ title: yargsObject.title }, { title: yargsObject.updatedTitle, actor: yargsObject.updatedActor })
            console.log(await listMovies())
        } else if(yargsObject.delete) {
            await deleteMovie({ title: yargsObject.title })
            console.log(await listMovies())
        }
        else {
            console.log("INCORRECT COMMAND")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
}

app(yargs.argv);