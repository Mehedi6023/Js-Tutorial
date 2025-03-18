document.getElementById("btn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data[0]["name"]));
});
let userEl = document.getElementById("user");
function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showUser(data));
}
let showUser = (data) => {
  for (let i = 0; i < data.length; i++) {
    const user = data[i].name;
    userEl.innerHTML += `
        <li> ${user} </li>
        `;
    // let liEl = document.createElement('li')
    // liEl.innerText = user
    // userEl.appendChild(liEl)
  }
};
function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
        showPost(data)
    });
}
function showPost(data){
    let postEl = document.getElementById('post')
    for(let obj of data){
        let div = document.createElement('div')
        div.innerHTML=`
        <h1>${obj.title}</h1>
        <p>${obj.body}</p>
        <button>details</button>`
        postEl.appendChild(div)
    }
}
