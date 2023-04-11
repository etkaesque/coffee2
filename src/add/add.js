let form = document.querySelector(".add-coffee")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = event.target.name.value
    let country = event.target.country.value
    let region = event.target.regions.value
    let image = event.target.image.value
    let roast = event.target.roast.value
    let beans = event.target.beans.value
    let process = event.target.process.value
    let minAltitude = event.target.minAltitude.value
    let maxAltitude = event.target.maxAltitude.value
    let description = event.target.description.value

    let checkedList = form.querySelectorAll('input[name="certification"]:checked')
    console.log(checkedList)

    let checked = [];

    checkedList.forEach((element) => {

        
        checked.push(element.value)
    })
  
    console.log(checked)

    fetch(`https://642f0fbe2b883abc641daa55.mockapi.io/coffees/coffeedb/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            country: country,
            region:region,
            roastLevel:roast,
            image:image,
            beans:beans,
            processingMethod:process,
            altitude: {
                minAltitude:minAltitude,
                maxAltitude:maxAltitude,
            },
            certification:checked,
            description:description,

        })
    })

    .then((res) => {
        return res.json()
    })
    .then((data) => {

        console.log(data)

        setTimeout(()=>{

            form.innerHTML = "Thank you for submiting!"
        },1000)

       
    })
}

)


