import { createElement, data } from "./tokimahery.data.mjs";

let temporaryCounter = 0;

for (let index = 0; index < data.papers.length; index++) {
  document
    .querySelector(".academicResearchSection")
    .appendChild(createElement("div", `academicPaper${index}`, ""));
}

for (let index = 0; index < data.papers.length; index++) {
  document
    .querySelector(`.academicPaper${index}`)
    .appendChild(createElement("div", `tagsAndPublished${index}`, ""));
  document
    .querySelector(`.tagsAndPublished${index}`)
    .appendChild(createElement("div", `tagsContainer${index}`, ``));
  document
    .querySelector(`.tagsContainer${index}`)
    .appendChild(
      createElement(
        "p",
        `tags${index}`,
        data.papers[index].tags[temporaryCounter],
      ),
    );
  document
    .querySelector(`.tagsContainer${index}`)
    .appendChild(
      createElement(
        "p",
        `tags${index}`,
        data.papers[index].tags[temporaryCounter + 1],
      ),
    );
  document
    .querySelector(`.tagsContainer${index}`)
    .appendChild(
      createElement(
        "p",
        `tags${index}`,
        data.papers[index].tags[temporaryCounter + 2],
      ),
    );
  document
    .querySelector(`.tagsAndPublished${index}`)
    .appendChild(
      createElement(
        "p",
        `PublishedContainer${index}`,
        data.papers[index].publishedDate,
      ),
    );
  document
    .querySelector(`.academicPaper${index}`)
    .appendChild(createElement("p", `researchTitle`, data.papers[index].title));
  document
    .querySelector(`.academicPaper${index}`)
    .appendChild(
      createElement("div", `researchAuthorJournalContainer${index}`, ""),
    );
  document
    .querySelector(`.researchAuthorJournalContainer${index}`)
    .appendChild(
      createElement(
        "p",
        `researchAuthor${index}`,
        data.papers[index].authors.join(" "),
      ),
    );

  document
    .querySelector(`.researchAuthorJournalContainer${index}`)
    .appendChild(
      createElement("p", `researchJournal${index}`, data.papers[index].journal),
    );
  document
    .querySelector(`.academicPaper${index}`)
    .appendChild(
      createElement(
        "p",
        `researchAbstractContainer${index}`,
        data.papers[index].abstract,
      ),
    );
  document
    .querySelector(`.academicPaper${index}`)
    .appendChild(createElement("a", `researchPDF${index}`, "readPDF"));
  document
    .querySelector(`.researchPDF${index}`)
    .setAttribute("href", data.papers[index].pdfUrl);
}

let panier = document.querySelector(".fa-solid");
panier.addEventListener("click", () => {
  document.querySelector(".cart").classList.toggle("cardFiltered");
});