   // Corrected class name for icon
   let icons = document.querySelector('.icon');
   let ul = document.querySelector('ul');

   // Add event listener for click event
   icons.addEventListener("click", () => {
       ul.classList.toggle("showData");
    

       if(ul.className =="showData"){
        document.getElementById('bar').className="	fa fa-undo";
       }
       else{
        document.getElementById('bar').className="fa fa-bars";
       }
   });


// navbar  color change by javascript 

let shops=document.getElementById('shops');
let reviews=document.getElementById('reviews');
let blogs=document.getElementById('blogs');
let contects=document.getElementById('contacts');



shops.addEventListener("click", ()=>{
    shops.style.color="rgb(4,219,219)";
    reviews.style.color="white";
    blogs.style.color="white";
    contects.style.color="white";
})

reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(4,219,219)";
    shops.style.color="white";
    blogs.style.color="white";
    contects.style.color="white";
})

blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(4,219,219)";
    reviews.style.color="white";
    shops.style.color="white";
    contects.style.color="white";
})

contects.addEventListener("click", ()=>{
    contects.style.color="rgb(4,219,219)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})


// shop card image hander 


let crd=document.querySelectorAll('.crd');
let itemPage=document.querySelector(".itemPage");
let container=document.querySelector(".container");
let itemImg=document.getElementById('itemImgs');
let buybtn=document.getElementById("buybtn")


crd.forEach((curValue)=>{
    curValue.addEventListener("click",function (){
        itemPage.style.display="flex";
        container.style.display="none";
        let itemsrc=curValue.firstElementChild.src;
        itemImg.src=itemsrc;

        buybtn.addEventListener("click",function(){
            document.querySelector('.buyPage').style.display="block"
            document.querySelector(".buyText").innerHTML=`
            <h3> Enter Details :</h3>
            <input type="text" placeholder="Enter your name !">  <br>
            <input type="text" placeholder="Enter your Addess!"><br>
            <input type="text" placeholder="Enter your mobile phone !"><br>
            <h3> Payment Option:</h3>
            <select>
                <option  value="Google-Pay">Google-Pay </option>
                <option value="Phone-Pay">Phone-Pay </option>
                <option  value="Bharat-Pay"> Bharat Pay </option>
                <option  value="Cash-on-Delevery"> Cash-On-Delevery</option>
            </select><br>
            <button>submit</button> 
              `

           

          let cross=document.querySelector(".cross");

          cross.addEventListener("click",function(){
            document.querySelector(".buyPage").style.display="none";
          })
          

      })   
    })

})


