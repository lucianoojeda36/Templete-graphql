import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', { useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false })
        console.log(' >>>>>> DB is conected')
    } catch (e) {
        console.log('something goes wrong!!')
        console.log(e)
    }
}
