const saveData = () => {
    const person = {
        name: "ovi",
        age : 20
    }
    localStorage.setItem("person", JSON.stringify(person))
    console.log(localStorage.getItem("person"));
}