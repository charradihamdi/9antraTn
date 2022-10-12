const jobs = {
  categories: [
    {
      All: "All",
      result: 25000,
    },
    {
      emploie: "Emplois",
      result: 10000,
    },
    {
      Entreprise: "Entrepries",
      result: 3000,
    },
    {
      poste: "Poste",
      result: 20,
    },
  ],
  companies: [
    {
      Keyrus: 24000,
    },
    {
      SAGEMCOM: 260,
    },
    {
      goDev: 14000,
    },
  ],
  Experience: ["Internship | alternant", "First Job"],
  AnnualSalary: [15000, 10000, 5000, 3000],
  jobs: [
    {
      position: "Software Engineer",
      title: "Backend Developer",
      description:
        "You will help us build API for our compression infrastructure.",
      url: "http://piedpiper.com/jobs/backend-developer",
      type: "full-time",
      posted: "2015-01-20",
      location: "US",
      skills: ["Python", "Javascript", "Redis", "React js", "HTML / CSS"],
      salaryRange: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      equity: {
        from: 0.005,
        to: 0.01,
      },
      perks: ["free food", "gym membership"],
      apply: "http://piedpiper.com/jobs/backend-developer/apply",
      offers: 22,
    },
    {
      position: "Software Engineer",
      title: "Frontend Developer",
      description:
        "You will help us build dashboard for our compression infrastructure.",
      url: "http://piedpiper.com/jobs/frontend-developer",
      type: "full-time",
      posted: "2015-01-20",
      location: "US",
      skills: ["Javascript", "Angular.js", "CSS"],
      salaryRange: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      equity: {
        from: 0.005,
        to: 0.01,
      },
      offers: 150,
    },
    {
      position: "UI/UX Designer",
      title: "UX Designer",
      type: "full-time",
      posted: "2015-01-20",
      location: "US",
      skills: ["HTML", "CSS", "Photoshop"],
      salaryRange: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      equity: {
        from: 0.005,
        to: 0.01,
      },
      perks: ["free food", "gym membership"],
      apply: "http://piedpiper.com/jobs/ux-designer/apply",
      offers: 1000,
    },
  ],
};
//variable declaration
const selectBtn = document.querySelectorAll(".select-btn");
items = document.querySelectorAll(".item");
listDynamicItems = document.getElementById("listDynamicItems");

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
  let Skills = document.querySelector('input[name="Skills"]:checked').value;
  let jobType=document.querySelector('input[name="jobType"]:checked').value;
  console.log(jobOffer, Skills);
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
    console.log(item.classList.toggle("checked"));
    item.classList.toggle("checked");
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
