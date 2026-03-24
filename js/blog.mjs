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
    .appendChild(createElement("div", `blogTitleDateContainer${i}`, ""));
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
  document
    .querySelector(`.blogTitleDateContainer${index}`)
    .classList.add("CommonTitleDateContainer");
  document
    .querySelector(`.postContent${index}`)
    .classList.add("commonPostContent");
}

document
  .querySelector(".blogPostsSection")
  .appendChild(createElement("div", "buttonContainerBlogPosts", ""));
let buttonValue = ["←prev", "next→"];

for (let index = 0; index < buttonValue.length * 2; index++) {
  if (index === 0) {
    document
      .querySelector(".buttonContainerBlogPosts")
      .appendChild(
        createElement("button", "prevButtonBlog", buttonValue[index]),
      );
  } else if (index === 3) {
    document
      .querySelector(".buttonContainerBlogPosts")
      .appendChild(
        createElement(
          "button",
          "nextButtonBlog",
          buttonValue[buttonValue.length - 1],
        ),
      );
  } else {
    document
      .querySelector(".buttonContainerBlogPosts")
      .appendChild(createElement("button", "numberedButtonBlog", index));
  }
}

let prevButtonBlog = document.querySelector('.prevButtonBlog');
let nextButtonBlog = document.querySelector('.nextButtonBlog');
prevButtonBlog.addEventListener('click',()=>{
  for(let index = 0; index < data.posts.length - 5; index++) {
      document.querySelector(`.postContentContainer${index}`).classList.remove('displayNothing');
      document.querySelector(`.postContentContainer${index + 4}`)
    .classList.add('displayNothing');
    }
  
})

nextButtonBlog.addEventListener('click',()=>{
  for (let index = 0; index < data.posts.length - 5; index++) {
    document.querySelector(`.postContentContainer${index}`)
    .classList.add('displayNothing');
  }
  for (let index = 0; index < data.posts.length - 5; index++) {
    document.querySelector(`.postContentContainer${index + 4}`)
    .classList.remove('displayNothing');
  }
})

document
  .querySelector(".blogAdditifContent")
  .appendChild(createElement("div", "archiveContainerBlog", ""));

for (let i = 0; i < data.archives.length; i++) {
  document
    .querySelector(".archiveContainerBlog")
    .appendChild(createElement("div", `archiveElement${i}`, ""));
  document
    .querySelector(`.archiveElement${i}`)
    .appendChild(
      createElement("p", `archiveElement${i}`, data.archives[i].label),
    );
  document
    .querySelector(`.archiveElement${i}`)
    .appendChild(
      createElement("p", `archiveElementCount${i}`, data.archives[i].count),
    );
}

document
  .querySelector(".blogAdditifContent")
  .appendChild(createElement("div", `newsletter`, ""));
document
  .querySelector(".newsletter")
  .appendChild(createElement("p", `newsletter`, "NEWSLETTER"));
document
  .querySelector(".newsletter")
  .appendChild(
    createElement(
      "p",
      `newsletterIncitation`,
      "Get new article straight to your inbox. No spam, ever.",
    ),
  );
document
  .querySelector(".newsletter")
  .appendChild(createElement("input", `newsletterIncitationInput`, ""));

document
  .querySelector(".blogAdditifContent")
  .appendChild(createElement("div", "videoYoutubeContainer", ""));
document
  .querySelector(".videoYoutubeContainer")
  .appendChild(
    createElement("p", "videoYoutubePresent", "latest video from the channel"),
  );

for (let index = 0; index < data.youtubeVideos.length; index++) {
  document
    .querySelector(".videoYoutubeContainer")
    .appendChild(createElement("div", `videoInstance${index}`, ""));
  document
    .querySelector(`.videoInstance${index}`)
    .appendChild(createElement("video", `video${index}`, ""));
  document.querySelector(`.video${index}`).src =
    `https://www.youtube.com/${data.youtubeVideos[index].id}`;
  document
    .querySelector(`.videoInstance${index}`)
    .appendChild(
      createElement("p", `videoTitle${index}`, data.youtubeVideos[index].title),
    );
  document.querySelector(`.video${index}`).classList.add("commonClassVideo");
}
