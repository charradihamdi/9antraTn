//variable declaration
const selectBtn = document.querySelectorAll(".select-btn");
items = document.querySelectorAll(".item");

//********nav filter************** */
const closeOtherToggleButton= (item)=>{
    return selectBtn.forEach(el=>{
        if(el != item){
            el.classList.remove('open')
        }
    })
}


selectBtn.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    closeOtherToggleButton(item)

  })
);


items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");

    // if(checked && checked.length > 0 && selectBtn){
    //     btnText.innerText = `${checked.length} Selected`;
    // }else{
    //     btnText.innerText = "Select categories";
    // }
  });
});

$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".simple-sidebar").addClass("active");
    $(".menu-btn").addClass("disable");
    $(".main-section").removeClass(
      "main-section col-lg-11 col-md-12 col-sm-12"
    );
    $(".main-section").addClass("col-lg-8");
  });
  $(".close-btn").click(function () {
    $(".simple-sidebar").removeClass("active");
    $(".menu-btn").removeClass("disable");
  });
});

console.log(window.innerWidth);
