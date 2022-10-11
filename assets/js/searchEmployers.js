const jobs = {
  company: "Pied Piper",
  url: "http://piedpiper.com/",
  remoteFriendly: true,
  market: "SaaS",
  size: "10-50",
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
      skills: ["HTML / CSS", "Python", "Javascript", "Redis"],
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
      perks: ["free food", "gym membership"],
      apply: "http://piedpiper.com/jobs/frontend-developer/apply",
    },
    {
      position: "UI/UX Designer",
      title: "UX Designer",
      description:
        "You will help us design dashboard for our compression infrastructure.",
      url: "http://piedpiper.com/jobs/ux-designer",
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

selectBtn.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    closeOtherToggleButton(item);
  })
);

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");
    checkbox = document.querySelectorAll(".checkbox li");

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

jobs.jobs.forEach((job) => {
  var li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(job.title));
  listDynamicItems.appendChild(li);
});
jobsTitle = document.querySelectorAll("#listDynamicItems .item");
jobsTitle.forEach((item) => {
  item.addEventListener("click", () => {
    jobs.jobs.forEach((job) => {
      for (let i = 0; i < itemtext.length; i++) {
        for(let j=0;j<job.skills.length;i++){
          if (itemtext[i].innerText == job.skills[j]) {
            console.log('first')
            itemtext[i].style='padding-left: 1rem;background:#C2E7FF;border:0px solid black;width:100%;border-radius: 20px;'
          }
        }
      
      }
    });
  });
});
