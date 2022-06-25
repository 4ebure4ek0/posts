let fs = require("fs");
let get_posts_model = require("./get_posts_model.js");
let save_posts_model = require("./save_posts_model.js");

function add_post_model(user, title, content)
{
    let new_post = { };

    let posts =  get_posts_model();

    let len = posts.length;

    let id;

    if(len===0)
        id=0;
    else
    {
        id = posts[0]["id"];
    }

    new_post["id"] = id+1;
    new_post["user"] = user;
    new_post["title"] = title;
    new_post["content"] = content;
    
    posts.unshift(new_post);
    save_posts_model(posts); 
}

module.exports = add_post_model;