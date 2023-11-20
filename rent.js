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
let infocard = document.querySelector(".infocard");
function submitForm() {
        document.getElementById('optionsForm').submit();
    }
    
let productContainer = document.querySelector(".photosession")

infos.forEach((info) => {
   
        productContainer.innerHTML += `
        
    <div class="product-card">
    <img src="${info.img}" alt="Product Image" class="homeimg">
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
    
  
   
   
    
   function changepassword() {
      
        infocard.innerHTML = `<div class="infos">
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
                        <button class="updateinfo" type="submit" onclick="toupdate()">Update</button>
                    </div>`;
    
        // Now that the button exists in the DOM, add the class
        let updatebutt = document.getElementById('update');
        // updatebutt.classList.add('move');
    };

   
   function editprofile(){
        infocard.innerHTML = `<div class="infos">
        <div class="name">
          <div>
            Name
            <input
              placeholder="Ethan*"
              type="text"
              name="name"
              class="userinput"
            />
          </div>
        </div>
        <div class="name">
          <div>
            Email
            <input
              placeholder="ethan.kisu@gmail.com*"
              type="text"
              name="email"
              class="userinput"
            />
          </div>
        </div>
        <div class="name">
          <div>
            PhNo
            <input
              placeholder="+66655293007*"
              type="text"
              name="phno"
              class="userinput"
              
            />
          </div>
        </div>
      </div>
      <div class="infobutts">
      <button class="chgpsw" onclick="changepassword()" type="button">Change password</button>
      <button  class="updatebutton" type="submit">Update</button>
    </div>
      `;

        
    }



    function toupdate(){
        Swal.fire({
          title: "Profile info will be updated",
          showDenyButton: true,
          showCancelButton: false,
          denyButtonText: `Cancel`,
          confirmButtonText: "confirm",
          reverseButtons: true, 
        })
    }
   