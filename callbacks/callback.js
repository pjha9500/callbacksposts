const posts=[
    {title:"post one" ,body:"This is post one", createAt:new Date(2022,06,01,22,35)},
    {title:"post two", body:"This is post one",createAt:new Date(2022,06,01,22,34)}
]


function createpost()
{
    setTimeout(() => {
        let output='';
        for(let i=0;i<posts.length;i++)
        {
            output+=`<li>${posts[i].title}- ${posts[i].createAt}</li>`;
        }

        document.body.innerHTML=output;
    }, 0);
}
createpost();

function updatetime()
{
    setInterval(() => {
        let output='';
        for(let i=0;i<posts.length;i++)
        {
            output+=`<li>${posts[i].title}-was posted ${Math.round(new Date().getTime()/1000-posts[i].createAt/1000)} seconds ago</li>`;
        }
        document.body.innerHTML=output;
        

        
    }, 1000);

}
updatetime();
function createpostnew(post)
{
    setTimeout(() => {
        posts.push(post);
        updatetime();

    }, 5000);

}
createpostnew({title:"post 3", body:"This is post three",createAt:new Date(2022,06,01,22,39).getTime()});





