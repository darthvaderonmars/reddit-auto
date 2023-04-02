// please use old version of Reddit
// open the comment section of a user profile
// run this code
// if there are many pages, run this code for each page
var posts = document.querySelectorAll("form.del-button"); 
var i = 0;  
function myLoop() {   
    setTimeout(function() {   
            posts[i].querySelector("a.yes").click();
            console.count("deleted");
        i++;  
        if (i < posts.length) {   
          myLoop();   
        }   
    }, 500) 
}
myLoop();
