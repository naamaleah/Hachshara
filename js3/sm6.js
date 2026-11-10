function getUser(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    return fetch(url)
        .then(res => res.json())
        .then(info => info.name);
}

getUser(1).then(name => {
    console.log(`User's name: ${name}`);
});




function getPost(postId){
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return  fetch(url).then(res=> res.json()).then(info=> info.title);
}

getPost(1).then(val => console.log(`Post title: ${val}`));



function getUserEmail(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json())
    .then(val=>val.email);
}
getUserEmail(1).then(email=> console.log(`User's email: ${email}`))



function listUserTodos(userId) {
    const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    return fetch(url)
        .then(res => res.json())
        .then(todos => todos.length);
}

listUserTodos(3)
    .then(count => {
        console.log(`User 3 has ${count} todos`);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });





function checkPostExists(postId){
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
     return fetch(url).then(res => {
        if(!res.ok){
            throw new Error("Post not found");
        }
        return true;

    })
}

checkPostExists(1)
    .then(val => {
        console.log("Post exists");
    })
    .catch(err => {
        console.log("Post not found");
    });




function fetchWithDelay(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    })
    .then(() => {
        return fetch(url);
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.text();
    });
}

fetchWithDelay("https://jsonplaceholder.typicode.com/todos/1", 2000)
    .then(data => {
        console.log("First 50 chars:", data.slice(0, 50));
    })
    .catch(err => {
        console.log("Error:", err.message);
    });


    
function showKeys(url) {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`);
            }

            return res.json();
        })
        .then(data => {
            return Object.keys(data);
        });
}

showKeys("https://jsonplaceholder.typicode.com/todos/1")
    .then(keys => {
        console.log("Keys:", keys);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });



function getUserFirstPost(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("User not found");
            }
            return res.json();
        })
        .then(user => {
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }
            return res.json();
        })
        .then(posts => {
            if (posts.length === 0) {
                throw new Error("No posts found");
            }

            return posts[0].title;
        });
}

getUserFirstPost(1)
    .then(title => {
        console.log("First post title:", title);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });



function getPostCommentsCount(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Post not found");
            }
            return res.json();
        })
        .then(post => {
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Comments not found");
            }
            return res.json();
        })
        .then(comments => {
            return comments.length;
        });
}

getPostCommentsCount(1)
    .then(count => {
        console.log(`Post has ${count} comments`);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });





function todoAndUser(todoId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Todo not found");
            }
            return res.json();
        })
        .then(todo => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("User not found");
                    }
                    return res.json();
                })
                .then(user => {
                    return {
                        todoTitle: todo.title,
                        userName: user.name
                    };
                });
        });
}

todoAndUser(1)
    .then(result => {
        console.log(`Todo title: ${result.todoTitle}`);
        console.log(`User name: ${result.userName}`);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });
