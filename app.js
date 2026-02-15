console.log("Prodocts Api");


const div = document.querySelector(".container")

fetch(`https://dummyjson.com/products`)

.then(res => res.json())

.then(res => {
    console.log(res.products);

    res.products.map((item) => {

        div.innerHTML += `

            <div class="alone-card">

                <img src="${item.thumbnail}" width="60%">
                <h1>Title : ${item.title}</h1>
                <h3 class="bg-green">Price : $${item.price}</h3>
                <p>${item.description.slice(0, 30)}<b>......</b></p>

                <button class="seeMore" onclick="showMore(${item.id})">See More...<button>
 
            </div>

        `

    })
})

.catch(err => {
    console.error(err);
})

const showMore = id => {
    console.log(id);
    localStorage.setItem("id", id);   
    window.location = "OneProduct.html";
}
