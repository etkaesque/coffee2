let form = document.querySelector(".add-coffee")

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    let name = event.target.name.value
    let country = event.target.country.value
    let region = event.target.regions.value
    let image = event.target.image.value
    let beans = event.target.beans.value
    let process = event.target.process.value
    let minAltitude = event.target.minAltitude.value
    let maxAltitude = event.target.maxAltitude.value

    let checkedList = document.querySelectorAll('input[type="checkbox"]:checked')
    const checked = [...checkedList];

    console.log(name,country,region,image,beans,process,minAltitude,maxAltitude,checked)


})


// fetch(`https://642f0fbe2b883abc641daa55.mockapi.io/coffees/coffeedb/`, {
//     method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: name,
//     key2: 'value2'
//   })
// })