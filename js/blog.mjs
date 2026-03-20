import { data,createElement } from "./tokimahery.data.mjs";

for (let i = 0; i < data.posts.length; i++) {
    document.querySelector('.blogPostsSection')
    .appendChild(createElement('div', `postContentContainer${i}`,''));
    document.querySelector(`.postContentContainer${i}`)
    .appendChild(createElement('div',`postImage${i}`,''));
    document.querySelector(`.postContentContainer${i}`)
    .appendChild(createElement('div',`postContent${i}`,''));
}