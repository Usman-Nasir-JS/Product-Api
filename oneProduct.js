console.log("Single Prodoct Api");

let products = document.querySelector("#OneProducts")

let newProducts = localStorage.getItem("id")

console.log(newProducts);

fetch(`https://dummyjson.com/products/${newProducts}`)

.then(res => res.json() )

.then(newData => {
    console.log(newData);
    
    products.innerHTML += `
    
        <div class="result-card">

            <div class="p-right">
                <img src="${newData.thumbnail}" width="100%">    
            </div>
        
            <div>

                <h1 id="b-bottom">Product : ${newData.title}</h1>
                <h2 class="space">Category : ${newData.category}</h2>
                <h4 class="space">Stocks : ${newData.stock}</h4>
                <h4 class="space">Weight : ${newData.weight}</h4>
                <h5 class="space">Description: ${newData.description}</h5>
                <h2 class="bg-red space">${newData.warrantyInformation}</h2>
                <h3 class="bg-green space">Price : $${newData.price}</h3>
        
                <button class="order-btn" onclick="order()">Order Now</button>
    
            </div>
            
        </div>

    `
})

.catch(error => {
    console.log(error);
    
})


function order() {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be order this item ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, order now !"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Thanks For Shopping!",
                text: "Successfully you Ordered your item.",
                icon: "success"
            });
        }
    });
    
}
