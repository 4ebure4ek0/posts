let fs = require("fs");

function get_post_model(id)
{
    let posts_json = fs.readFileSync("./posts.json", "utf-8");

    let posts = JSON.parse(posts_json);

    for(let post of posts)
    {
        if(post["id"] === id)
            return post;
    }
}

module.exports = get_post_model;