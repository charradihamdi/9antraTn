//variable declaration
const selectBtn = document.querySelectorAll(".select-btn");
items = document.querySelectorAll(".item");
listDynamicItems = document.getElementById("listDynamicItems");
let Skills = document.querySelectorAll('input[name="Skills"]:checked');

itemtext = document.querySelectorAll(".item-text");
//********nav filter************** */
const closeOtherToggleButton = (item) => {
  return selectBtn.forEach((el) => {
    if (el != item) {
      el.classList.remove("open");
    }
  });
};

const FilterTopjobs = {
  jobs: [
    {
      position: "Financial Service",
      title: "Financial Service",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["Account Manager"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: "First Job",
      src: "./assets/img/amazon.png",
      offers: 30,
      country: "us",
      location: "english-english",
    },
    {
      position: "Apps Developpements",
      title: "Apps Developpements",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "OnSite",
      skills: ["java & ajax"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: "internship alternant",
      src: "./assets/img/lenovo.png",
      offers: 150,
      country: "FR",
      location: "french-paris",
    },
    {
      position: "Art,DesignnMedia",
      title: "Art,DesignnMedia",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["Iphone & Android"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: "first job",
      src: "./assets/img/canada.svg",
      offers: 22,
      location: "tunis-tunis",
    },
    {
      position: "designer",
      title: "designer",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["react native",'js'],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: "first job",
      src: "./assets/img/canada.svg",
      offers: 500,
      location: "br",
    },
    {
      position: "manager",
      title: "manager",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["react native"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: "first job",
      src: "./assets/img/canada.svg",
      offers: 500,
      location: "br",
    },  {
      position: "OS admistrator",
      title: "OS admistrator",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["react native",'js'],
      TypeOfJob: ["windows10", "linux"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: "first job",
      src: "./assets/img/visa.png",
      offers: 350,
      location: "br",
    },
  ],
};

const getFilters = (id, item) => {
  filters[id].items.push(item);
  // manupulation DOM

  // get ID
  // change innerHTML
};

FilterTopjobs.jobs.forEach((job) => {
  const jobSection = document.getElementById("jobSection");
  let mainItems = document.createElement("div");
  mainItems.classList.add("col-lg-12");
  let companyTitle = document.createElement("div");
  companyTitle.classList.add("company-Title");
  let row = document.createElement("div");
  row.classList.add("row");
  let logoCompany = document.createElement("div");
  logoCompany.classList.add("col-2", "logoCompany");
  let logoCompanysrc = document.createElement("img");
  logoCompanysrc.src = job.src;
  //*title and position
  let jobDesc = document.createElement("div");
  jobDesc.classList.add("col-8");
  let div = document.createElement("div");
  let titleJob = document.createElement("div");
  titleJob.classList.add("title-job");
  titleJob.innerHTML = job.title;
  let contryJob = document.createElement("div");
  contryJob.classList.add("contry-job");
  contryJob.innerHTML = job.country;
  let positionjob = document.createElement("div");
  positionjob.classList.add("position-job");
  positionjob.innerHTML = job.location;
  //append
  logoCompany.appendChild(logoCompanysrc);
  row.appendChild(logoCompany);
  div.appendChild(titleJob);
  div.appendChild(contryJob);
  div.appendChild(positionjob);
  jobDesc.appendChild(div);
  row.appendChild(jobDesc);
  companyTitle.appendChild(row);
  mainItems.appendChild(companyTitle);
  jobSection.appendChild(mainItems);
  console.log("attr");
});
const attr = document.querySelectorAll(".company-Title");

attr.forEach((job) => {
  let span = document.createElement('span')
  
  job.addEventListener("click", () => {
    span.innerHTML=''
    //dom
    FilterTopjobs.jobs.forEach((findjob) => {
      if (findjob.title === job.querySelector(".title-job").innerHTML) {
        document.querySelector('.jb_types').innerHTML=`${findjob.offers} poste`
        document.querySelector('._jb_title a').innerHTML=`${findjob.title}`
        document.querySelector('._emp_jb').innerHTML=`location ${findjob.location}`
        document.querySelector('.description').innerHTML=`description: ${findjob.description}`
        document.querySelector('.job-img').src=findjob.src
        findjob.skills.forEach(skill=>{
          
          span.innerHTML=skill
          span.style='color:#6671B0;margin-left:8px;'
          document.querySelector('.skills-job').appendChild(span)
        })
       
      }
    });
  });
});

function submitHandler(event) {
  event.preventDefault();

  // get Inputs values
  let jobOfferElement = document.querySelector(
    'input[name="jobOffer"]:checked'
  );
  let SkillsElement = document.querySelectorAll('input[name="Skills"]:checked');
  let jobTypeElement = document.querySelectorAll(
    'input[name="jobType"]:checked'
  );
  let ExperienceElement = document.querySelectorAll(
    'input[name="experience"]:checked'
  );
  // Build body request

  if (jobOfferElement) {
    document.querySelector("#jobsOffers .btn-text").innerHTML =
      jobOfferElement.value;
    document.querySelector("#jobsOffers .select-btn").style =
      "background: #01B753;";
    document.querySelector("#jobsOffers .btn-text").style = "color:white";
  } else {
    document.querySelector("#jobsOffers .btn-text").innerHTML = "Jobs Offers";
  }
  if (SkillsElement.length > 0) {
    document.querySelector("#Skills .select-btn").style =
      "background: #01B753;";
    document.querySelector(
      "#Skills .btn-text"
    ).innerHTML = `Skills(${SkillsElement.length})`;
    document.querySelector("#Skills .btn-text").style = "color:white";
  } else {
    document.querySelector("#Skills .btn-text").innerHTML = `Skills`;
    document.querySelector("#Skills .select-btn").style = "background: #fffff;";
    document.querySelector("#Skills .btn-text").style = "color:black";
  }
  if (jobTypeElement.length > 0) {
    document.querySelector("#typeOfJob .select-btn").style =
      "background: #01B753;";
    document.querySelector(
      "#typeOfJob .btn-text"
    ).innerHTML = `typeOfJob(${jobTypeElement.length})`;
    document.querySelector("#typeOfJob .btn-text").style = "color:white";
  } else {
    document.querySelector("#typeOfJob .btn-text").innerHTML = `Job Type`;
    document.querySelector("#typeOfJob .select-btn").style =
      "background: #ffffff;";
    document.querySelector("#typeOfJob .btn-text").style = "color:black";
  }
  if (ExperienceElement.length > 0) {
    document.querySelector("#Experience .select-btn").style =
      "background: #01B753;";
    document.querySelector(
      "#Experience .btn-text"
    ).innerHTML = `Experience(${ExperienceElement.length})`;
    document.querySelector("#Experience .btn-text").style = "color:white";
  } else {
    document.querySelector("#Experience .btn-text").innerHTML = `Experience`;
    document.querySelector("#Experience .select-btn").style =
      "background: #ffffff;";
    document.querySelector("#Experience .btn-text").style = "color:black";
  }
  // debugger;
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

const skill = document.getElementById("search-skills");
skill.addEventListener("input", filtersSkills2);

function filtersSkills2() {
  const searchInput = document.getElementById("search-skills");

  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll("#Skills .item .checkbox-custom");
  const list = document.querySelectorAll("#Skills .item ");

  listItems.forEach((item, i) => {
    let text = item.value;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
      // item.checked=false
    }
  });
}

//***Experience-input */
const Experience = document.getElementById("input-experience");
Experience.addEventListener("input", filtersSkills4);

function filtersSkills4() {
  const searchInput = document.getElementById("input-experience");
  console.log(searchInput);
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(
    "#Experience .item .checkbox-custom"
  );
  const list = document.querySelectorAll("#Experience .item ");

  listItems.forEach((item, i) => {
    let text = item.value;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  });
}

//***jobs-offer */
const jobInput = document.getElementById("jobInput");
jobInput.addEventListener("input", filtersSkills);

function filtersSkills() {
  const searchInput = document.getElementById("jobInput");

  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(
    "#jobsOffers .item .radio-custom"
  );
  const list = document.querySelectorAll("#jobsOffers .item ");

  listItems.forEach((item, i) => {
    let text = item.value;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  });
}
