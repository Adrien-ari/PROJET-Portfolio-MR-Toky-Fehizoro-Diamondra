import { createElement, data } from "./tokimahery.data.mjs";

let listTestimonialsTag = [];
for (let i = 0; i < 5; i++) {
  listTestimonialsTag.push(
    createElement("div", `testimonialsStudents${i}`, ""),
  );
  document
    .querySelector(`.testimonialsStudentsSection`)
    .appendChild(listTestimonialsTag[i]);
}

for (let i = 0; i < 5; i++) {
  document
    .querySelector(`.testimonialsStudents${i}`)
    .appendChild(createElement("div", `testimonialsStudentsProfile${i}`, ""));

  document
    .querySelector(`.testimonialsStudentsProfile${i}`)
    .appendChild(createElement("div", "profileImage", ""));
  document
    .querySelector(`.testimonialsStudentsProfile${i}`)
    .appendChild(createElement("div", `profileAuthorAndRole${i}`, ""));
  document
    .querySelector(`.testimonialsStudents${i}`)
    .appendChild(
      createElement(
        "p",
        `testimonialsDescriptions`,
        data.testimonials[i].description,
      ),
    );

  document
    .querySelector(`.profileAuthorAndRole${i}`)
    .appendChild(createElement("p", `author${i}`, data.testimonials[i].author));
  document
    .querySelector(`.profileAuthorAndRole${i}`)
    .appendChild(createElement("p", `role${i}`, data.testimonials[i].role));

  document
    .querySelector(`.testimonialsStudents${i}`)
    .appendChild(createElement("p", `rating`, data.testimonials[i].rating));
}

for (let i = 0; i < 5; i++) {
  listTestimonialsTag[i] = createElement(
    "div",
    `testimonialsCollaborators${i}`,
    "",
  );
  document
    .querySelector(`.testimonialsCollaboratorsSection`)
    .appendChild(listTestimonialsTag[i]);
}

let tempAdditifIterator = 0;
for (let i = 5; i <= 9; i++) {
  document
    .querySelector(`.testimonialsCollaborators${tempAdditifIterator}`)
    .appendChild(
      createElement(
        "p",
        `testimonialsDescriptions`,
        data.testimonials[i].description,
      ),
    );
  document
    .querySelector(`.testimonialsCollaborators${tempAdditifIterator}`)
    .appendChild(
      createElement(
        "div",
        `testimonialsCollaboratorsProfile${tempAdditifIterator}`,
        "",
      ),
    );

  document
    .querySelector(`.testimonialsCollaboratorsProfile${tempAdditifIterator}`)
    .appendChild(createElement("div", `profileImage`, ""));
  document
    .querySelector(`.testimonialsCollaboratorsProfile${tempAdditifIterator}`)
    .appendChild(createElement("div", `profileAuthorAndRole${i}`, ""));
  document
    .querySelector(`.profileAuthorAndRole${i}`)
    .appendChild(createElement("p", `author${i}`, data.testimonials[i].author));
  document
    .querySelector(`.profileAuthorAndRole${i}`)
    .appendChild(createElement("p", `role${i}`, data.testimonials[i].role));

  tempAdditifIterator += 1;
}

for (let i = 0; i < 5; i++) {
  listTestimonialsTag[i] = createElement("div", `testimonialsClients${i}`, "");
  document
    .querySelector(`.testimonialsClientsSection`)
    .appendChild(listTestimonialsTag[i]);
  document
    .querySelector(`.testimonialsClients${i}`)
    .appendChild(
      createElement("div", `clientRating${i}`, data.testimonials[i + 10].rating),
    );
  document
    .querySelector(`.testimonialsClients${i}`)
    .appendChild(
      createElement("p", `clientRating${i}`, data.testimonials[i + 10].description),
    );
  document
    .querySelector(`.testimonialsClients${i}`)
    .appendChild(
      createElement("div", `clientProfile${i}`, ''),
    );
  document
    .querySelector(`.clientProfile${i}`)
    .appendChild(
      createElement("div", `profileImage`, ''),
    );
  document
    .querySelector(`.clientProfile${i}`)
    .appendChild(
      createElement("div", `authorAndRole${i}`, ''),
    );
  document
    .querySelector(`.authorAndRole${i}`)
    .appendChild(
      createElement("p", `author${i}`, data.testimonials[i +10].author),
    );
  document
    .querySelector(`.authorAndRole${i}`)
    .appendChild(
      createElement("p", `authorRole${i}`, data.testimonials[i +10].role),
    );

}

let panier = document.querySelector(".fa-solid");
panier.addEventListener("click", () => {
  document.querySelector(".cart").classList.toggle("cardFiltered");
});