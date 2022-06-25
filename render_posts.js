let fs = require("fs");

function render_posts(posts)
{
    let post_pattern = fs.readFileSync("./post_pattern.html", "utf-8");

    let html_posts = "";

    for(let post of posts)
    {
	  let html_post = post_pattern;

	  let user = post["user"];

	  let title = post["title"];

        let content = post["content"];

        let id = post["id"];

	  html_post = html_post.replace("<!--#user-->", user);

	  html_post = html_post.replace("<!--#title-->", title);

	  html_post = html_post.replace("<!--#id-->", id);

	  html_posts = html_posts + html_post + "\r\n";
    }

    return html_posts;
}

module.exports = render_posts;