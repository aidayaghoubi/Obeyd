import mongoose, { Schema } from "mongoose"


const replySchema = new Schema({
    userName: String,
    userId: String,
    content: String
})

const jokeSchema = new Schema({
    content: String,
    likeCount: Number,
    dislikeCount: Number,
    createdTime: Number,
    replies: [replySchema],
    creator: {
        name: String,
        createdTime: Number,
        id: String,
    },
}, {
    timestamps: true
});




const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;