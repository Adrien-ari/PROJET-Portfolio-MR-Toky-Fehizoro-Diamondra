import { createElement } from "./tokimahery.data.mjs";
import { data } from "./tokimahery.data.mjs";
let CoursesContent = document.querySelector(".CoursesContent");

for (let index = 0; index < data.courses.length; index++) {
  let courseInstance = createElement("div", `courseInstance${index}`, "");
  let tagsContainer = createElement("div", "tagsContainer", "");
  let level = createElement("p", `level`, data.courses[index].level);
  let AboutCourse = createElement("div", `aboutCourse`, "");
  let courseTitle = createElement(
    "p",
    `courseTitle${index}`,
    data.courses[index].title,
  );
  let coursePrice = createElement(
    "p",
    `coursePrice${index}`,
    data.courses[index].price,
  );
  let courseDescription = createElement(
    "p",
    "courseDescription",
    data.courses[index].description,
  );
  let buttonContainer = createElement("div", `buttonContainer`, "");
  let button1 = createElement("button", "buttonLearnMore", "learn more");
  let button2 = createElement("button", "addCart", "add to cart");

  tagsContainer.append(
    createElement("p", "languageTag", data.courses[index].language),
  );
  if (data.courses[index].technologies.length !== 0) {
    tagsContainer.append(
      createElement(
        "p",
        "technologyTag",
        data.courses[index].technologies.toString(),
      ),
    );
  }

  buttonContainer.append(button1, button2);
  AboutCourse.append(
    courseTitle,
    coursePrice,
    courseDescription,
    buttonContainer,
  );
  courseInstance.append(tagsContainer, level, AboutCourse);
  CoursesContent.appendChild(courseInstance);
  courseInstance.classList.add("commonClassCInstance");
  courseInstance.style.backgroundImage = `url(${data.courses[index].thumbnail})`;
  if (level.textContent === "advanced") {
    level.classList.add("levelRed");
  } else if (level.textContent === "beginner") {
    level.classList.add("levelGreen");
  } else {
    level.classList.add("levelYellow");
  }
  courseTitle.classList.add("commonTitleStyle");
}

/*
Add to cart 

*/

let addCardButtons = document.querySelectorAll(".addCart");

addCardButtons.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (localStorage.contains(data.courses[index].title)) {
      alert("already here");
    } else {
      localStorage.setItem(
        data.courses[index].title,
        data.courses[index].price,
      );
    }
  });
});
let mdFlag = document.querySelector(".mdFlag");
let frsFlag = document.querySelector('.frsFlag');
let amrFlag = document.querySelector('.amrFlag');
mdFlag.addEventListener('click', () => {
  let courseInstanceList = document.querySelectorAll('.commonClassCInstance');
  courseInstanceList.forEach(element => {
    if (element.firstChild.firstChild.textContent !== 'mg') {
      element.classList.toggle('cardFiltered');
    }
  })
});

frsFlag.addEventListener('click', () => {
  let courseInstanceList = document.querySelectorAll('.commonClassCInstance');
  courseInstanceList.forEach(element => {
    if (element.firstChild.firstChild.textContent !== 'fr') {
      element.classList.toggle('cardFiltered');
    }
  })
});

<<<<<<< HEAD
amrFlag.addEventListener('click', () => {
  let courseInstanceList = document.querySelectorAll('.commonClassCInstance');
  courseInstanceList.forEach(element => {
    if (element.firstChild.firstChild.textContent !== 'en') {
      element.classList.toggle('cardFiltered');
    }
  })
})


=======
// ajout par diams : relegler ce filtre de cours là
const lowRange  = document.getElementById('lowRange');
const highRange = document.getElementById('highRange');
const rangeSelected = document.getElementById('rangeSelected');
const rangeDisplay  = document.getElementById('rangeDisplay');
const MAX = 300000;

function updateRange() {
  let lo = +lowRange.value;
  let hi = +highRange.value;
  if (lo > hi) { lowRange.value = hi; lo = hi; }
  if (hi < lo) { highRange.value = lo; hi = lo; }
  rangeSelected.style.left  = (lo / MAX * 100) + '%';
  rangeSelected.style.right = ((MAX - hi) / MAX * 100) + '%';
  rangeDisplay.textContent  = `${lo.toLocaleString('fr-MG')} Ar – ${hi.toLocaleString('fr-MG')} Ar`;
}

lowRange.addEventListener('input', updateRange);
highRange.addEventListener('input', updateRange);
updateRange();
>>>>>>> 45a2c10469a1088b6876850ec1c47a59ba68c48e
