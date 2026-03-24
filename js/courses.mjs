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
    `coursePrice`,
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
}


/*
Add to cart 

*/

let addCardButtons = document.querySelectorAll('.addCart');

addCardButtons.forEach((element,index) => {
  element.addEventListener('click',() => {
    
    if (localStorage.contains(data.courses[index].title)) {
      alert('already here');
    }else{
      localStorage.setItem(data.courses[index].title, data.courses[index].price);
    }
  });
});

frsFlag.addEventListener("click", () => {
  let courseInstanceList = document.querySelectorAll(".commonClassCInstance");
  courseInstanceList.forEach((element) => {
    element.classList.remove("cardFiltered");
  });

  courseInstanceList.forEach((element) => {
    if (element.firstChild.firstChild.textContent !== "fr") {
      element.classList.toggle("cardFiltered");
    }
  });
});

amrFlag.addEventListener("click", () => {
  let courseInstanceList = document.querySelectorAll(".commonClassCInstance");
  courseInstanceList.forEach((element) => {
    element.classList.remove("cardFiltered");
  });

  courseInstanceList.forEach((element) => {
    if (element.firstChild.firstChild.textContent !== "en") {
      element.classList.toggle("cardFiltered");
    }
  });
});

let filterCourse = document.getElementById("technologiesSelect");

filterCourse.addEventListener("change", (event) => {
  let courseInstanceList = document.querySelectorAll(".commonClassCInstance");

  if (event.target.value === "All technologies") {
    courseInstanceList.forEach((element) => {
      element.classList.remove("cardFiltered");
    });
  } else {
    courseInstanceList.forEach((element) => {
      element.classList.remove("cardFiltered");
      if (event.target.value !== element.firstChild.lastChild.textContent) {
        element.classList.add("cardFiltered");
      }
    });
  }
});

let levelFilter = document.getElementById("levelsSelect");

levelFilter.addEventListener("change", (event) => {
  let level = document.querySelectorAll(".level");
  let courseInstanceList = document.querySelectorAll(".commonClassCInstance");

  courseInstanceList.forEach((element) => {
    element.classList.remove("cardFiltered");
  });

  if (event.target.value === "All levels") {
    courseInstanceList.forEach((element) => {
      element.classList.remove("cardFiltered");
    });
  } else {
    level.forEach((element, index) => {
      if (event.target.value !== element.textContent) {
        courseInstanceList[index].classList.add("cardFiltered");
      }
    });
  }
});
// ajout par diams : relegler ce filtre de cours là
const lowRange = document.getElementById("lowRange");
const highRange = document.getElementById("highRange");
const rangeSelected = document.getElementById("rangeSelected");
const rangeDisplay = document.getElementById("rangeDisplay");
const MAX = 300000;
const price = document.querySelectorAll(".coursePrice");
let courseInstanceList = document.querySelectorAll(".commonClassCInstance");

function updateRange() {
  let low = +lowRange.value;
  let high = +highRange.value;
  if (low > high) {
    lowRange.value = high;
    low = high;
  }
  if (high < low) {
    highRange.value = low;
    hiw = low;
  }
  rangeSelected.style.left = (low / MAX) * 100 + "%";
  rangeSelected.style.right = ((MAX - high) / MAX) * 100 + "%";
  rangeDisplay.textContent = `${low.toLocaleString("fr-MG")} Ar – ${high.toLocaleString("fr-MG")} Ar`;

  price.forEach((element, index) => {
    if (
      parseInt(element.textContent) < low ||
      parseInt(element.textContent) > high
    ) {
      courseInstanceList[index].classList.add("cardFiltered");
    } else {
      courseInstanceList[index].classList.remove("cardFiltered");
    }
  });
}

lowRange.addEventListener("input", updateRange);
highRange.addEventListener("input", updateRange);
updateRange();

let addCart = document.querySelectorAll(".addCart");
let commandContainer = document.querySelector(".commandContainer");

addCart.forEach((element, index) => {
  element.addEventListener("click", function () {
    let AboutCourseList = document.querySelectorAll(".aboutCourse");

    if (
      commandContainer.children.length !== 0 &&
      document.querySelector(`.commandNumber${index}`) !== null
    ) {
      alert("this course is already in your cart");
    } else {
      commandContainer.appendChild(
        createElement("div", `commandNumber${index}`, ""),
      );
      document
        .querySelector(`.commandNumber${index}`)
        .append(
          createElement(
            "p",
            "commandTitle",
            AboutCourseList[index].firstChild.textContent,
          ),
          createElement(
            "p",
            "commandPrice",
            AboutCourseList[index].children[1].textContent,
          ),
        );
      let commandPrice = document.querySelectorAll(".commandPrice");
      let count = 0;
      console.log(commandPrice);
      commandPrice.forEach((element) => {
        count += parseInt(element.textContent);
        document.querySelector(".sumOrder").lastChild.textContent = count;
      });
    }
  });
});

let panier = document.querySelector(".fa-solid");
panier.addEventListener("click", () => {
  document.querySelector(".cart").classList.toggle("cardFiltered");
});

document.querySelector(".confirmOrderButton").addEventListener("click", () => {
  document
    .querySelector('main')
    .appendChild(createElement("div", "confirmationMessage", ""));
  document
    .querySelector(".confirmationMessage")
    .append(
      createElement(
        "h2",
        "confirmation",
        "🎉 Thank you so much for buying our course!",
      ),
      createElement(
        "p",
        "textConfirmation",
        "We'll be in touch shortly with all the details. welcome abroad",
      ),
      setTimeout(() => {
        document.querySelector('.confirmationMessage').style.display = 'none';
      },10000)
    );

});
