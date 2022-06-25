let fs = require("fs");

let get_posts_model = require("./get_posts_model.js");
let save_posts_model = require("./save_posts_model.js");

function delete_post_model(id)
{
    let posts = get_posts_model();

    let del_post_index;
    let index = 0;
    for(let post of posts)
    {
        if(id===post["id"])
            del_post_index = index;

        index = index + 1;
    }

    delete posts[del_post_index];
    posts = posts.flat();
    
    save_posts_model(posts);

}
module.exports = delete_post_model;

