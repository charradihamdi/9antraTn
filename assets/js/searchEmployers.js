const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");
      selectBtn1 = document.querySelector(".select-btn-1"),
      items1 = document.querySelectorAll(".item-1");
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Select Language";
            }
    });
})


      

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.simple-sidebar').addClass('active')
        $('.menu-btn').addClass('disable')
     
    })
    $('.close-btn').click(function(){
        $('.simple-sidebar').removeClass('active')
        $('.menu-btn').removeClass('disable')
    })
})