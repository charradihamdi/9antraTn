//variable declaration
const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");
      emploie=document.querySelector("#emploie"),
      teletravail=document.querySelector("#teletravail"),
      annualsalary=document.querySelector("#annual-salary"),
      compte=document.querySelector("#compte"),

//********nav filter************** */
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

emploie.addEventListener("click", () => {
    emploie.classList.toggle("open");
    console.log(emploie.id)
});
teletravail.addEventListener("click", () => {
    teletravail.classList.toggle("open");
});
annualsalary.addEventListener("click", () => {
    annualsalary.classList.toggle("open");
});
compte.addEventListener("click", () => {
    compte.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0 && selectBtn){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Select categories";
            }
    });
})



      

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.simple-sidebar').addClass('active')
         $('.menu-btn').addClass('disable')
         $('.main-section').removeClass('main-section col-lg-11 col-md-12 col-sm-12')
         $('.main-section').addClass('col-lg-8')
      
    })
    $('.close-btn').click(function(){
        $('.simple-sidebar').removeClass('active')
        $('.menu-btn').removeClass('disable')
    })
})


console.log(window.innerWidth)



