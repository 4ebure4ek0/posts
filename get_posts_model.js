let fs = require("fs");

function get_posts_model()
{
    let posts_json = fs.readFileSync("./posts.json", "utf-8");

    let posts = JSON.parse(posts_json);

    return posts;
}

module.exports = get_posts_model;