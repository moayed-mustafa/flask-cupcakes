
BASE_URL = "/api/cupcakes/"
// api request to query all cupcakes
btn = document.querySelector('.btn')
btn.addEventListener('click', async function (e) {



    cupcakes = await axios.get(BASE_URL)
    showCupcakes = document.querySelector('.show-cupcakes')
    if (showCupcakes.hasChildNodes()) {
            return
    }
    else {

    if (cupcakes.status == 200) {
        cupcake_data = cupcakes.data.cupcakes
        cupcake_data.forEach(cupcake => {

            card = document.createElement('div')
                card.classList.add('card', "m-2")
                card.setAttribute("style","width: 14rem;")

            cardImage = document.createElement('img')
                cardImage.classList.add('card-img-top')
                cardImage.setAttribute('src', cupcake.image)

            cardBody = document.createElement('div')
                cardBody.classList.add('card-body')

            cardTitle = document.createElement('h5')
                cardTitle.classList.add('card-title')
                cardTitle.innerHTML = `${cupcake.flavor} cupcake`

            cardText = document.createElement('p')
            cardText.classList.add('card-text')
                cardText.innerHTML = `this is a ${cupcake.flavor} cupcake that is ${cupcake.size} and has a rating of ${cupcake.rating}`

            cardBody.appendChild(cardTitle)
            cardBody.appendChild( cardText)
            card.appendChild(cardImage)
            card.appendChild(cardBody)
            showCupcakes.appendChild(card)


        })

    }
}
})

// form submisoin to add a cupcake
form = document.querySelector('.form')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    flavor = document.querySelector('.flavor')
    size = document.querySelector('.size')
    rating = document.querySelector('.rating')
    image = document.querySelector('.image')
    // make a request to the api
    cupcake = {
        "flavor": flavor.value,
        "size":   size.value,
        "rating": rating.value,
        "image": image.value
    }
    let res = await axios({
        url: BASE_URL,
        method: "POST",
        data: cupcake
    })
    form.reset()
})
