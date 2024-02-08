document.getElementById('post').addEventListener('click', async(event)=>{
    // Move this line inside the click event listener
    const post = document.getElementById('paragraphInput').value;
    
    document.getElementById('paragraphInput').value='';
    const data = {
        blog: post
    };

   await fetch('http://localhost:4000/postBlog', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    }).then((result) => console.log(result))
      .catch((err) => console.log(err));

      getBlogsData();
});

  async function getBlogsData(){
    const response = await fetch("http://localhost:4000/getBlogs");
    const dataJSON = await response.json();
    document.getElementById('totalData').innerHTML=dataJSON.map((data)=>{
     return  `<li>
        <div>
        <div>
        <span>${data.first_name} ${data.last_name}</span>
        <span>${data.email}</span>
        </div>
        <br>
        <span>POST:</span>
        <p>${data.blog}</p>
        <span></span>
        </div>
         <li/>`;    
    });
};
getBlogsData();


