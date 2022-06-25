#!C:/Program Files/nodejs/node.exe

let fs = require("fs");
let add_post_model = require("./add_post_model.js");

process.stdin.setEncoding("utf-8");
process.stdin.on("readable", add_post_controller);

function add_post_controller()
{
    let query_string = process.stdin.read();
    if(query_string === null)
        return;

    let reg = /user=(.+)&title=(.+)&content=(.+)/;

    let matches = query_string.match(reg);

    let matches_json = JSON.stringify(matches, null, "    ");
   
    let user = decodeURIComponent(matches[1]);
    let title = decodeURIComponent(matches[2]);
    let content = decodeURIComponent(matches[3]);
    
    user = user.replaceAll("+", " ");
    title = title.replaceAll("+", " ");
    content = content.replaceAll("+", " ");


    add_post_model(user, title, content);

    console.log("Location: http://127.0.0.1:8888/project/get_posts_controller.js\r\n");
   
}
