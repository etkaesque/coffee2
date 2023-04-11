fetch(`https://642f0fbe2b883abc641daa55.mockapi.io/coffees/coffeedb/`)
    .then( res =>{

    return res.json()

    })

    .then(data => {


        initCoffeeCard(data)
        filterCoffee(data)
      
    })





function controlRoast() {

    const roastLabel = document.querySelector("#roastLabel")
    const roastRange = document.querySelector("#roastRange")
    const roastAll = document.querySelector("#all")

    roastAll.addEventListener("change", () => {

        if (roastAll.checked) {

            roastRange.disabled = true
            roastLabel.textContent = ``
        } else {
            roastRange.disabled = false
            writeRoast()

        }




    })

    roastRange.addEventListener("input", (event) => {

        writeRoast()
    })


    function writeRoast() {

        let roastValue = document.querySelector(`#roastRange`).value
        let roastArray = ["Light", "Medium-Light", "Medium", "Medium-Dark", "Dark"]
        let output = roastArray[roastValue - 1]
        roastLabel.textContent = `${output}`
    }



}

controlRoast()


const altitude = document.querySelector(`#altitudeRange`)
let altitudeLabel = document.querySelector(`#altitudeLabel`)

altitude.addEventListener("input", (event) => {

    let altitudeValue = event.target.value
    altitudeLabel.textContent = `${altitudeValue} meters`

})





function initCoffeeCard(array) {

    const cardSection = document.querySelector(".cards-section")

    array.forEach(obj => {

        const card = document.createElement('div')
        card.setAttribute('class', "coffee-card")
        cardSection.append(card)

        card.innerHTML =

            `
     
        
        <div class="card-content">
            <a href="../coffee/coffee.html">

            <h3>${obj.name}</h3>
            
            <img src="${obj.image}" alt="">
           

            <ul class="properties">
                <li class="region">${obj.region}</li>
                <li class="beans">${obj.beans}</li>
                <li class="roast">${obj.roastLevel}</li>
                <li class="altitude">${obj.altitude.minAltitude}-${obj.altitude.maxAltitude}</li>
            </ul>

            </a>

        </div>  
        
        
        `



        card.addEventListener("click", ()=>
        
            localStorage.setItem("id",`${obj.id}`)
        
        )




    });





}






function filterCoffee(coffees) {

    const form = document.querySelector('#filterForm')


    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let cards = document.querySelectorAll('.coffee-card')
        if (cards) {
            cards.forEach(card => {
                card.remove()
            });
        }


        function getCheckedBeans() {
            const checkedBeans = document.querySelectorAll('#filterForm input[name="beans"]:checked');
            const checkedBeanValues = Array.from(checkedBeans).map(input => input.value);
            return checkedBeanValues
        }

        function getCheckedRegions() {
            const checkedRegions = document.querySelectorAll('#filterForm input[name="regions"]:checked');
            const checkedRegionsValues = Array.from(checkedRegions).map(input => input.value);
            return checkedRegionsValues
        }

        let userBeans = getCheckedBeans()
        let userRegions = getCheckedRegions()
        console.log(userRegions)

        let userAltitude = event.target.altitudeRange.value
        let roastValue = event.target.roastRange.value
        let roastArray = ["Light", "Medium-Light", "Medium", "Medium-Dark", "Dark"]
        let userRoast = roastArray[roastValue - 1]

        const roastAll = document.querySelector("#all")
        if (roastAll.checked) {
            userRoast = null;
        }

        let filteredArray = coffees.filter(obj => {

            if (!userRoast) {

                if (obj.altitude.minAltitude >= userAltitude && userBeans.includes(obj.beans) &&
                    userRegions.includes(obj.region)) {
                    return obj;
                }
            }



            if (obj.altitude.minAltitude >= userAltitude && obj.roastLevel == userRoast && userBeans.includes(obj.beans) &&
                userRegions.includes(obj.region)) {
                return obj;
            }

        })


        initCoffeeCard(filteredArray)

    })

}
//labas
