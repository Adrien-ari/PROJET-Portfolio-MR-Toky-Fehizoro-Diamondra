import { createElement } from "./tokimahery.data.mjs";
import { data } from "./tokimahery.data.mjs";
let CoursesContent = document.querySelector(".CoursesContent");

for (let index = 0; index < data.courses.length; index++) {
  let courseInstance = createElement("div", `courseInstance${index}`, "");
  let tagsContainer = createElement("div", "tagsContainer", "");
  let level = createElement("p", `level${index}`,data.courses[index].level);
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
  let button2 = createElement("button", "buttonLearnMore", "add to cart");

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
}
