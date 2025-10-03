const mongoose = require('mongoose');

const m = new mongoose.Schema(
{
    username: { 
        type: String
    },
    email: { 
        type: String
    },
    password: { 
        type: String
    },
},
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;