
BASE_URL = "/api/cupcakes/"
// api request to query all cupcakes
btn = document.querySelector('.btn')
btn.addEventListener('click', async function (e) {
    ul = document.querySelector('.cupcakes')
    cupcakes = await axios.get(BASE_URL)

    if (cupcakes.status == 200) {
        // todo:use bootstrap and make those guys cards
        cupcake_data = cupcakes.data.cupcakes
        cupcake_data.forEach(cupcake => {
            li = document.createElement('li')
            li.innerHTML = `${cupcake.flavor} ${cupcake.rating}   `
            ul.appendChild(li)

        })

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
    console.log(res)
})
