const Post = require("../models/post.model");

//logic to insert post

const insertPost = async (req, res) => {
    try {
       const insertedPosts = await Post.insertMany(5[
            {
                title: "Learn javascript",
                description: "Learning js",
                category: "education",
            },
            {
                title: "learn nodejs",
                description: "learning nodejs",
                category: "education",
            }
        ])
        return res.status(200).json({ message: "data inserted successfully", post: insertedPosts });  
    } catch (err) {
        console.log(err);
    }

};