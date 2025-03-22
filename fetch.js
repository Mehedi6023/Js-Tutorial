fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
        .then(data => {showData(data)})
        .catch(error => console.log("cant fetch data"+": "+ error))
const showData = async function(data) {
    await data.forEach(element => {
         console.log(element);
        document.getElementById('name').innerHTML += `
        User name: ${element.username} <br />
        `
    });
}