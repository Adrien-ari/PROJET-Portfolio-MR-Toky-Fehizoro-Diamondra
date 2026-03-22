import { createElement } from "./tokimahery.data.mjs";
import { data } from "./tokimahery.data.mjs";
let CoursesContent = document.querySelector(".CoursesContent");

for (let index = 0; index < data.courses.length; index++) {
  let courseInstance = createElement("div", `courseInstance${index}`, "");
  let tagsContainer = createElement("div", "tagsContainer", "");
  let level = createElement("p", `level`,data.courses[index].level);
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
  courseInstance.classList.add('commonClassCInstance');
  courseInstance.style.backgroundImage = `url(${data.courses[index].thumbnail})`;
  if (level.textContent ==='advanced') {
    level.classList.add('levelRed');
  }else if (level.textContent ==='beginner') {
    level.classList.add('levelGreen');
  }else{
    level.classList.add('levelGreen');
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

document.querySelector('.mdFlag').addEventListener('click',()=>{
  let language = document.querySelectorAll('.languageTag');
  language.forEach((element,index)=>{
    if (element.textContent !== 'mg') {
      document.querySelector(`.courseInstance${index}`).style.display = 'none';
    }
  })
});
document.querySelector('.frsFlag').addEventListener('click',()=>{
  let language = document.querySelectorAll('.languageTag');
  language.forEach((element,index)=>{
    if (element.textContent !== 'fr') {
      document.querySelector(`.courseInstance${index}`).classList.toggle('displayCart');
    }
  })
});