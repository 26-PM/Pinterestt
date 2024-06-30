var arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "The crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { name: "Cat", image: "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { name: "Cookie", image: "https://images.unsplash.com/photo-1719384980086-ba6233425fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" },
    { name: "Dining Table", image: "https://plus.unsplash.com/premium_photo-1680546330986-7efea975e7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" },
];


function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
        .innerHTML = clutter;
}

function handleSearchFunctionality() {
    var input = document.querySelector("#searchinput");
    input
        .addEventListener("focus", function () {
            document.querySelector(".overlay").style.display = "block";
        })
    input
        .addEventListener("input", function () {
            const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
            var clutter = "";
            filteredArray.forEach(function (obj) {
                clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
                </div>`
            })
            document.querySelector(".searchdata").style.display = "block";
            document.querySelector(".searchdata").innerHTML = clutter;
        })
        
    // When user clicks outside search box    
    input
        .addEventListener("blur", function () {
            document.querySelector(".overlay").style.display = "none";
        })
    input
        .addEventListener("blur", function () {
            document.querySelector(".searchdata").style.display = "none";
            document.querySelector(".searchdata").innerHTML = "none";
        })
}

handleSearchFunctionality();
showTheCards();