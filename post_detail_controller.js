#!C:/Program Files/nodejs/node.exe

let fs = require("fs");

let get_post_model = require("./get_post_model.js");

function post_detail_controller()
{
    console.log("Content-type: text/html\r\n");

    let query_string = process.env["QUERY_STRING"];

    let reg = /id=(\d+)/;

    let matches = query_string.match(reg);

    let id = Number(matches[1]);

    let post = get_post_model(id);

    let html = fs.readFileSync("./post_detail.html", "utf-8");

    let menu = fs.readFileSync("./menu.html", "utf-8");

    html = html.replace("<!--#user-->", post["user"]);

    html = html.replace("<!--#title-->", post["title"]);

    html = html.replace("<!--#content-->", post["content"]);

    html = html.replace("<!--#menu-->", menu);

    console.log(html);
}

post_detail_controller();