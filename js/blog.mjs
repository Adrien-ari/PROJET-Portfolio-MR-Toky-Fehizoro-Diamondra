import { data, createElement } from "./tokimahery.data.mjs";

for (let i = 0; i < data.posts.length; i++) {
  document
    .querySelector(".blogPostsSection")
    .appendChild(createElement("div", `postContentContainer${i}`, ""));
  document
    .querySelector(`.postContentContainer${i}`)
    .appendChild(createElement("div", `postImage`, ""));
  document
    .querySelector(`.postContentContainer${i}`)
    .appendChild(createElement("div", `postContent${i}`, ""));

  document
    .querySelector(`.postContent${i}`)
    .appendChild(
      createElement("div", `blogTitleDateContainer${i}`,''),
    );
  document
    .querySelector(`.blogTitleDateContainer${i}`)
    .appendChild(createElement("p", `blogPostTitle${i}`, data.posts[i].title));
  document
    .querySelector(`.blogTitleDateContainer${i}`)
    .appendChild(
      createElement("p", `blogPostDate${i}`, data.posts[i].creationDate),
    );
  document
    .querySelector(`.postContent${i}`)
    .appendChild(
      createElement("p", `blogPostDescription${i}`, data.posts[i].description),
    );
  document
    .querySelector(`.postContent${i}`)
    .appendChild(createElement("div", `blogPostTagsContainer${i}`, ""));

  data.posts[i].tags.forEach((element, index) => {
    document
      .querySelector(`.blogPostTagsContainer${i}`)
      .appendChild(createElement("p", `tag${index}`, element));
  });

}

for (let index = 0; index < data.posts.length; index++) {
  document
    .querySelector(`.postContentContainer${index}`)
    .classList.add("postContentContainerCommonClass");
  document
    .querySelector(`.blogPostTagsContainer${index}`)
    .classList.add("commmonTagsClass");
  document.querySelector(`.blogTitleDateContainer${index}`)
  .classList.add('CommonTitleDateContainer');
  document
    .querySelector(`.postContent${index}`).classList.add('commonPostContent');
}
