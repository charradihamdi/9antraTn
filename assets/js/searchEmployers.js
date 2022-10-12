
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
  let jobOfferElement = document.querySelector('input[name="jobOffer"]:checked');
  let SkillsElement = document.querySelectorAll('input[name="Skills"]:checked');
  let jobTypeElement =document.querySelectorAll('input[name="jobType"]:checked');
  let ExperienceElement =document.querySelectorAll('input[name="experience"]:checked');
  // Build body request
 
  if(jobOfferElement.value){
    document.querySelector('#jobsOffers .btn-text').innerHTML=jobOfferElement.value
   document.querySelector('#jobsOffers .select-btn').style='background: #01B753;'
   document.querySelector('#jobsOffers .btn-text').style='color:white'
  }
  if(SkillsElement.length>0){
    document.querySelector('#Skills .select-btn').style='background: #01B753;'
    document.querySelector('#Skills .btn-text').innerHTML=`Skills(${SkillsElement.length})`
    document.querySelector('#Skills .btn-text').style='color:white'
  }
  if(jobTypeElement.length>0){
    document.querySelector('#typeOfJob .select-btn').style='background: #01B753;'
    document.querySelector('#typeOfJob .btn-text').innerHTML=`Skills(${jobTypeElement.length})`
    document.querySelector('#typeOfJob .btn-text').style='color:white'
  }
  if(ExperienceElement.length>0){
    document.querySelector('#Experience .select-btn').style='background: #01B753;'
    document.querySelector('#Experience .btn-text').innerHTML=`Skills(${ExperienceElement.length})`
    document.querySelector('#Experience .btn-text').style='color:white'
  }
  debugger;
}

selectBtn.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    closeOtherToggleButton(item);
  })
);


//Telétravail filter

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
