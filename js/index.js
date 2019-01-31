const app = "I don't do much.";


const token = 'af38fde9864da5a30c6fee4357851281b0170145';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
