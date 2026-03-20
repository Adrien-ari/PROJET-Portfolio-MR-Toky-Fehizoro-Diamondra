import { createElement } from "./tokimahery.data.mjs";
import { data } from "./tokimahery.data.mjs";

let aboutMe_part1 = createElement("p", "aboutMe_part1", data.aboutMe_part1);
let aboutMe_part2 = createElement("p", "aboutMe_part2", data.aboutMe_part2);

document.querySelector(".AboutContent").appendChild(aboutMe_part1);
document.querySelector(".AboutContent").appendChild(aboutMe_part2);
document
  .querySelector(".AboutContent")
  .appendChild(createElement("div", "overviewContainer", ""));

for (let i = 0; i < data.overview.length; i++) {
  document
    .querySelector(".overviewContainer")
    .appendChild(createElement("div", `overview${i}`, ""));
}

for (let i = 0; i < data.overview.length; i++) {
  document
    .querySelector(`.overview${i}`)
    .appendChild(
      createElement("p", `overviewNumber${i}`, data.overview[i].number),
    );
  document
    .querySelector(`.overview${i}`)
    .appendChild(
      createElement(
        "p",
        `overviewLabel${i}`,
        data.overview[i].label.toUpperCase(),
      ),
    );
}

let homeCourseSectionCourseClass = [
  "developmentHomeCourse",
  "translationHomeCourse",
  "researchHomeCourse",
];

homeCourseSectionCourseClass.forEach((element) => {
  document
    .querySelector(`.homeCourseSectionContent`)
    .appendChild(createElement("div", element, ""));
});

let coursesElementsClass = [
    {
        tag:"developmentTag",
        title:"developmentTitle",
        durationMode:"developmentDurationAndMode"
    },
    {
        tag:"translationTag",
        title:"translationTitle",
        durationMode:"translationDurationAndMode"
    },
    {
        tag:"researchTag",
        title:"researchTitle",
        durationMode:"researchDurationAndMode"
    },
];

let coursesElements = [];
for (let i = 0; i < coursesElementsClass.length; i++) {
   coursesElements.push(createElement('p', coursesElementsClass[i].tag,data.homeCourses[i].tag));
   coursesElements.push(createElement('p', coursesElementsClass[i].title,data.homeCourses[i].title));
   coursesElements.push(createElement('div', coursesElementsClass[i].durationMode,""));
}


let compteur = 0;
for (let i = 0; i < coursesElements.length; i += 3) {
    console.log(homeCourseSectionCourseClass[compteur]);
    document.querySelector(`.${homeCourseSectionCourseClass[compteur]}`).appendChild(
        coursesElements[i]
    );
    document.querySelector(`.${homeCourseSectionCourseClass[compteur]}`).appendChild(
        coursesElements[i + 1]
    );
    document.querySelector(`.${homeCourseSectionCourseClass[compteur]}`).appendChild(
        coursesElements[i + 2]
    );
    compteur += 1;
}

for (let i = 0; i < 3; i++) {
    
    document.querySelector(`.${coursesElementsClass[i].durationMode}`).appendChild(
        createElement('p','mode',data.homeCourses[i].mode)
    )
    document.querySelector(`.${coursesElementsClass[i].durationMode}`).appendChild(
        createElement('p','duration',data.homeCourses[i].duration)
    )
}