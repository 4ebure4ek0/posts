#!C:/Program Files/nodejs/node.exe

let fs = require("fs");

let get_posts_model = require("./get_posts_model.js");

let render_posts = require("./render_posts.js");

function get_posts_controller()
{
    console.log("Content-type: text/html\r\n");

    let posts = get_posts_model();

    let posts_html = render_posts(posts);

    let html = fs.readFileSync("./posts.html", "utf-8");

    let menu = fs.readFileSync("./menu.html", "utf-8");

    html = html.replace("<!--#posts-->", posts_html);

    html = html.replace("<!--#menu-->", menu);

    console.log(html);
}

get_posts_controller();