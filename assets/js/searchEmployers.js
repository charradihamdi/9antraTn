
//variable declaration
const selectBtn = document.querySelectorAll(".select-btn");
items = document.querySelectorAll(".item");
listDynamicItems = document.getElementById("listDynamicItems");
let Skills = document.querySelectorAll('input[name="Skills"]:checked');

  console.log(Skills)

itemtext = document.querySelectorAll(".item-text");
//********nav filter************** */
const closeOtherToggleButton = (item) => {
  return selectBtn.forEach((el) => {
    if (el != item) {
      el.classList.remove("open");
    }
  });
};

const filters = {
  SKILLS: {
    items: ["java", "css"],
  },
  EXPERIENCE: {
    items: ["junior"],
  },
};

const getFilters = (id, item) => {
  filters[id].items.push(item);

  // manupulation DOM
  // get ID
  // change innerHTML
};

function submitHandler(event) {
  event.preventDefault();

  // get Inputs values
  let jobOffer = document.querySelector('input[name="jobOffer"]:checked').value;
  let Skills = document.querySelector('input[name="Skills"]:checked');
  let jobType=document.querySelector('input[name="jobType"]:checked').value;
  skill = ['Iphone & Android','Java & Ajax']    
      const btnspan = document.querySelector('#jobsOffers .btn-text')
      btnspan.innerHTML=""
      const span = document.createElement('span')
      span.style=" font-size: 14px;background: #C4C4C4;width: max-content;border:1px solid #C4C4C4 ;border-radius: 14px;margin-left:6px"
      span.innerHTML=jobOffer ;
      btnspan.appendChild(span)
  // Build body request
  debugger;
}

selectBtn.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    closeOtherToggleButton(item);
  })
);

//skills filter
Skills = document.querySelectorAll("#Skills .item");

Skills.forEach((item) => {
  item.addEventListener("click", (event) => {
    let checked = document.querySelectorAll("#SkillsList .item .checked"),
      btnText = document.querySelector("#Skills .btn-text");
 
  });
});
//Telétravail filter
typeOfJob = document.querySelectorAll("#typeOfJob .item");

typeOfJob.forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".item .checked"),
      btnText = document.querySelector("#typeOfJob .btn-text");
   
  
  });
});
//Telétravail filter
typeOfJob = document.querySelectorAll("#typeOfJob .item");

typeOfJob.forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".item .checked"),
      btnText = document.querySelector("#typeOfJob .btn-text");

  });
});

//********************************** */
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
