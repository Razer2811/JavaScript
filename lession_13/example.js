var users = [
    {
        id : 1,
        name : 'minh khanh'
    },
    {
        id : 2,
        name : 'son dang'
    },
    {
        id : 3,
        name : 'hung nguyen'
    }
];


var comments = [
    {
        id : 1,
        users_id : 1,
        content : 'anh khanh chua ra video'
    },
    {
        id : 2,
        users_id : 2,
        content : 'vua ra xong em oi'
    }
]

// lay comment 
// tu comment lay user_id
// tu user_id lay user tuong ung


// FAKE API

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    })
}


function getUserById(usersId){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return usersId.includes(user.id);
        })
        setTimeout(function(){
            resolve(result);
        }, 1000);
    });
}

// getComments()
//     .then(function(comments){
//         var usersId = comments.map(function(comment){
//             return comment.users_id;
//         });
//         console.log(usersId)
//     });
    

getUserById([1, 2])
    .then(function(users){
        console.log(users)
    })