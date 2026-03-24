import { data, createElement } from "./tokimahery.data.mjs";

for (let i = 0; i < data.posts.length; i++) {
  document.querySelector(".blogPostsSection").appendChild(
    createElement("div", `postContentContainer${i}`, "")
  );
  document.querySelector(`.postContentContainer${i}`).appendChild(
    createElement("div", `postImage`, "")
  );
  document.querySelector(`.postContentContainer${i}`).appendChild(
    createElement("div", `postContent${i}`, "")
  );
  document.querySelector(`.postContent${i}`).appendChild(
    createElement("div", `blogTitleDateContainer${i}`, "")
  );
  document.querySelector(`.blogTitleDateContainer${i}`).appendChild(
    createElement("p", `blogPostTitle${i}`, data.posts[i].title)
  );
  document.querySelector(`.blogTitleDateContainer${i}`).appendChild(
    createElement("p", `blogPostDate${i}`, data.posts[i].creationDate)
  );
  document.querySelector(`.postContent${i}`).appendChild(
    createElement("p", `blogPostDescription${i}`, data.posts[i].description)
  );
  document.querySelector(`.postContent${i}`).appendChild(
    createElement("div", `blogPostTagsContainer${i}`, "")
  );
  data.posts[i].tags.forEach((element, index) => {
    document.querySelector(`.blogPostTagsContainer${i}`).appendChild(
      createElement("p", `tag${index}`, element)
    );
  });
}

for (let index = 0; index < data.posts.length; index++) {
  document.querySelector(`.postContentContainer${index}`).classList.add("postContentContainerCommonClass");
  document.querySelector(`.blogPostTagsContainer${index}`).classList.add("commmonTagsClass");
  document.querySelector(`.blogTitleDateContainer${index}`).classList.add("CommonTitleDateContainer");
  document.querySelector(`.postContent${index}`).classList.add("commonPostContent");
}

document.querySelector(".blogPostsSection").appendChild(
  createElement("div", "buttonContainerBlogPosts", "")
);
let buttonValue = ["←prev", "next→"];
for (let index = 0; index < buttonValue.length * 2; index++) {
  if (index === 0) {
    document.querySelector(".buttonContainerBlogPosts").appendChild(
      createElement("button", "prevButtonBlog", buttonValue[index])
    );
  } else if (index === 3) {
    document.querySelector(".buttonContainerBlogPosts").appendChild(
      createElement("button", "nextButtonBlog", buttonValue[buttonValue.length - 1])
    );
  } else {
    document.querySelector(".buttonContainerBlogPosts").appendChild(
      createElement("button", "numberedButtonBlog", index)
    );
  }
}

let prevButtonBlog = document.querySelector('.prevButtonBlog');
let nextButtonBlog = document.querySelector('.nextButtonBlog');

prevButtonBlog.addEventListener('click', () => {
  for (let index = 0; index < data.posts.length - 5; index++) {
    document.querySelector(`.postContentContainer${index}`).classList.remove('displayNothing');
    document.querySelector(`.postContentContainer${index + 4}`).classList.add('displayNothing');
  }
});

nextButtonBlog.addEventListener('click', () => {
  for (let index = 0; index < data.posts.length - 5; index++) {
    document.querySelector(`.postContentContainer${index}`).classList.add('displayNothing');
  }
  for (let index = 0; index < data.posts.length - 5; index++) {
    document.querySelector(`.postContentContainer${index + 4}`).classList.remove('displayNothing');
  }
});

let additifContent = document.querySelector(".blogAdditifContent");
let archiveContainer = createElement("div", "archiveContainerBlog", "");
archiveContainer.style.display = "flex";
archiveContainer.style.flexDirection = "column";
archiveContainer.style.gap = "0.5rem";
additifContent.appendChild(archiveContainer);

let archiveHeader = createElement("div", "archiveHeader", "");
archiveHeader.style.display = "flex";
archiveHeader.style.alignItems = "center";
archiveContainer.appendChild(archiveHeader);

let hrArchive = createElement("hr", "hrArchive", "");
hrArchive.style.flex = "1";
hrArchive.style.marginRight = "1rem";
hrArchive.style.border = "1px solid #ccc";
archiveHeader.appendChild(hrArchive);

let archiveText = createElement("p", "archiveText", "ARCHIVES");
archiveText.style.fontWeight = "bold";
archiveHeader.appendChild(archiveText);

for (let i = 0; i < data.archives.length; i++) {
  let archiveElement = createElement("div", `archiveElement${i}`, "");
  archiveElement.style.display = "flex";
  archiveElement.style.justifyContent = "space-between";
  archiveContainer.appendChild(archiveElement);

  archiveElement.appendChild(createElement("p", `archiveElementLabel${i}`, data.archives[i].label));
  archiveElement.appendChild(createElement("p", `archiveElementCount${i}`, data.archives[i].count));
}

let newsletterContainer = createElement("div", "newsletter", "");
newsletterContainer.style.display = "flex";
newsletterContainer.style.flexDirection = "column";
newsletterContainer.style.gap = "0.5rem";
additifContent.appendChild(newsletterContainer);

let newsletterHeader = createElement("div", "newsletterHeader", "");
newsletterHeader.style.display = "flex";
newsletterHeader.style.alignItems = "center";
newsletterContainer.appendChild(newsletterHeader);

let hrNewsletter = createElement("hr", "hrNewsletter", "");
hrNewsletter.style.flex = "1";
hrNewsletter.style.marginRight = "1rem";
hrNewsletter.style.border = "1px solid #ccc";
newsletterHeader.appendChild(hrNewsletter);

let newsletterText = createElement("p", "newsletterText", "NEWSLETTER");
newsletterText.style.fontWeight = "bold";
newsletterHeader.appendChild(newsletterText);


newsletterContainer.appendChild(
  createElement("p", "newsletterIncitation", "Get new article straight to your inbox. No spam, ever.")
);

let newsletterInput = createElement("input", "newsletterIncitationInput", "");
newsletterInput.type = "email";
newsletterInput.placeholder = "Your email";
newsletterContainer.appendChild(newsletterInput);

let subscribeButton = createElement("button", "subscribeButton", "Subscribe");
subscribeButton.style.padding = "0.5rem 1rem";
subscribeButton.style.border = "none";
subscribeButton.style.borderRadius = "5px";
subscribeButton.style.backgroundColor = "var(--color-red)";
subscribeButton.style.color = "white";
subscribeButton.style.cursor = "pointer";
newsletterContainer.appendChild(subscribeButton);

let subscribeMessage = createElement("p", "subscribeMessage", "");
subscribeMessage.style.color = "green";
subscribeMessage.style.fontWeight = "bold";
newsletterContainer.appendChild(subscribeMessage);

subscribeButton.addEventListener("click", () => {
  if (newsletterInput.value.trim() !== "") {
    subscribeMessage.textContent = `You subscribed with: ${newsletterInput.value}`;
    newsletterInput.value = "";
  } else {
    subscribeMessage.textContent = "Please enter an email first!";
  }
});


let videoContainer = createElement("div", "videoYoutubeContainer", "");
videoContainer.style.display = "flex";
videoContainer.style.flexDirection = "column";
videoContainer.style.gap = "1rem";
additifContent.appendChild(videoContainer);

let videoHeader = createElement("p", "videoYoutubePresent", "Latest videos from the channel");
videoContainer.appendChild(videoHeader);

for (let index = 0; index < data.youtubeVideos.length; index++) {
  let videoInstance = createElement("div", `videoInstance${index}`, "");
  videoInstance.style.display = "flex";
  videoInstance.style.flexDirection = "column";
  videoInstance.style.gap = "0.5rem";
  videoContainer.appendChild(videoInstance);

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${data.youtubeVideos[index].id}`;
  iframe.classList.add("commonClassVideo");
  iframe.allowFullscreen = true;
  videoInstance.appendChild(iframe);

  videoInstance.appendChild(
    createElement("p", `videoTitle${index}`, data.youtubeVideos[index].title)
  );
}
let viewAllContainer = createElement("div", "viewAllContainer", "");
viewAllContainer.style.textAlign = "right";
viewAllContainer.style.margin = "1rem 0";
let viewAllLink = createElement("a", "viewAllYoutubeLink", "View all on YouTube");
viewAllLink.href = "https://www.youtube.com/@YourChannelName";
viewAllLink.target = "_blank";
viewAllLink.style.fontWeight = "bold";
viewAllLink.style.textDecoration = "underline";
viewAllLink.style.color = "var(--color-red)";
viewAllContainer.appendChild(viewAllLink);
additifContent.appendChild(viewAllContainer);