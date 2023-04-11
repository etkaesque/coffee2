let item = localStorage.getItem("id")
let info = document.querySelector(`.coffee-info`)
let visual = document.querySelector(`.coffee-visual`)
let certificationsWrapper = document.querySelector(`.certifications`)
console.log(item)

fetch(`https://642f0fbe2b883abc641daa55.mockapi.io/coffees/coffeedb/` + item)
.then((res) => {
    return res.json()
})
.then((data) => {
   console.log(data)


   
info.innerHTML = `

<div>

<h1>${data.name}</h1>
<span class="country">Made in ${data.country}, ${data.region}</span>
<p>${data.description}</p>

</div>

<div>

<ul class="properties">
<li>
<h3 class="proccesing">Proccesing</h3>
${data.processingMethod}
</li>
<li >
<h3 class="beans" >Beans</h3>
${data.beans}</li>
<li >
<h3 class="roast">Roast</h3>
${data.roastLevel}</li>
<li >
<h3 class="altitude">Altitude</h3>
${data.altitude.minAltitude}-${data.altitude.maxAltitude}</li>
</ul>

</div>


`


// visual 

let imgProduct = document.createElement('img')
imgProduct.setAttribute("src",`${data.image}`)
imgProduct.setAttribute("class",`image`)

visual.append(imgProduct)



let certifications = data.certification

certifications.forEach(certification => {

 
    


    if (certification == "Organic"){

        certImage = document.createElement("img")
        certImage.setAttribute("src",`/assets/svgs/usda.svg`)
        certImage.setAttribute("class",`cert`)
        certificationsWrapper.append(certImage)

    }

    if (certification == "Rainforest Alliance") {

        certImage = document.createElement("img")
        certImage.setAttribute("src",`/assets/svgs/rainforest.svg`)
        certImage.setAttribute("class",`cert`)
        certificationsWrapper.append(certImage)

    }
    if (certification == "Fair Trade") {

        certImage = document.createElement("img")
        certImage.setAttribute("src",`/assets/svgs/fairtrade.svg`)
        certImage.setAttribute("class",`cert`)
        certificationsWrapper.append(certImage)

    }

    
});




})


