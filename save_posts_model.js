let fs = require("fs");

function save_posts_model(posts)
{
    let posts_json = JSON.stringify(posts, null, '    ');

    fs.writeFileSync("./posts.json", posts_json);
}

module.exports = save_posts_model;