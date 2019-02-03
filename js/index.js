

const token = "put token here (find in js_notes.js) ";
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
})
    .then(res => res.json())
    .then(json => console.log(json));
