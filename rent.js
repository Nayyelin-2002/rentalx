let infos = [
        {       id:1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiYElieWi3Z9s0BBnHMlPIbLM2Yfs3iLnw&usqp=CAU",
                name : "Regent Mansion",
                price : 4000,
                type : "1 bedroom",
                type2 : "1 bathroom"
        },
        {
                id:2,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiYElieWi3Z9s0BBnHMlPIbLM2Yfs3iLnw&usqp=CAU",
                name : "STK Resort",
                price : 3500,
                type : "1 bedroom",
                type2 : "1 bathroom"
        },
        {       
                id:3,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiYElieWi3Z9s0BBnHMlPIbLM2Yfs3iLnw&usqp=CAU",
                name : "Beyond",
                price : 4500,
                type : "1 bedroom",
                type2 : "1 bathroom"
        },
        {       
                id:4,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiYElieWi3Z9s0BBnHMlPIbLM2Yfs3iLnw&usqp=CAU",
                name : "Tangmo dormitory",
                price : 3500,
                type : "1 bedroom",
                type2 : "1 bathroom"
        },
        {       
                id:5,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiYElieWi3Z9s0BBnHMlPIbLM2Yfs3iLnw&usqp=CAU",
                name : "Rattana",
                price : 3500,
                type : "1 bedroom",
                type2 : "1 bathroom"
        },
        { 
                id:6,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiYElieWi3Z9s0BBnHMlPIbLM2Yfs3iLnw&usqp=CAU",
                name : "Panida 2 Dormitory",
                price : 4000,
                type : "1 bedroom",
                type2 : "1 bathroom"
        },
]


    
let productContainer = document.querySelector(".photocard");

infos.forEach((info) => {
   
        productContainer.innerHTML += `
    <div class="product-card">
    <img src="${info.img}" alt="Product Image">
    <div class="title">
    <h3 class="product-title">${info.name}</h3>
    <div class="bb">
    <button class="heart"> <i class="fa-regular fa-heart full_red"></i></button>
    <button class="share">   <i class="fa-solid fa-share"></i></button> 
    </div>
    </div>

    <hr>
    <p class="product-description">Mae Fah Laung, Chiang Rai</p>
    <h3 class="product-price">${info.price} Baht/Month</h3>
    <hr>
    <div class="info">
        <span class="bed"><i class="fa-regular fa-moon"></i>${info.type} </span>
        <span class="bath"><i class="fa-solid fa-shower"></i> ${info.type2} </span>
    </div>
    <div class="btns">
        <button class="product-button">Add to Cart</button>
        <button class="map-button"><i class="fa-solid fa-location-dot"></i> Map</button>
</div>

</div>

    `;  
    changeheart();
});

function changeheart() {
        let hearts = document.querySelectorAll(".heart");
    
        hearts.forEach((heart) => {
            let isLiked = false;
    
            heart.addEventListener("click", () => {
                if (isLiked) {
                    heart.innerHTML = `<button class="heart"><i class="fa-regular fa-heart"></i></button>`;
                    isLiked = false;
                } else {
                    heart.innerHTML = `<button class="hh"><i class="fa-solid fa-heart" id="H_icon"></i></button>`;
                    isLiked = true;
                }
            });
        });
    }
    
  
let changepass   = document.querySelector(".pass");
let infocard = document.querySelector(".infocard")
let userinputs = document.querySelector(".userinput")
changepass.addEventListener("click",function(){
        console.log("leepl")
        infocard.innerHTML  = `<div class="infos">
                     <div class="name">
                                <div> 
                                        <input type="text" class="userinput" placeholder="Current password*"> 
                                </div>
                        </div>
                        <div class="name">
                                <div> 
                                        <input type="text" class="userinput" placeholder="New password*"> 
                                </div>             
                        </div>
                        <div class="name">
                                <div> 
                                        <input type="text" class="userinput" placeholder="Confirm password*"> 
                                </div>
                        </div> 
                </div>
                <div class="infobutt">
              
                <button class="update" type="submit">Update</button>
            </div>
                `
                
})




