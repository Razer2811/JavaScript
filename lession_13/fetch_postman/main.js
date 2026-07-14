

var postApi = 'https://jsonplaceholder.typicode.com/users'

fetch(postApi)
    .then(function(response){
        return response.json();
        // JSON -> JavaScript types of
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                        <h3>${post.id}</h3>
                        <h3>${post.name}</h3>
                    </li>`;
        })
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err){
        alert("Co looix")   
    })