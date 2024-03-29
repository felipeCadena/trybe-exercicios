import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener('change', () => {
  clearPageData();

  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
  .then((response) => response.json())
  .then((data) => {
    fillPosts(data.posts)

    fetch(`https://dummyjson.com/posts/${data.posts[0].id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        fillFeaturedPostComments(comments.comments);
    });
  })
  .catch((errorMessage) => {
    fillErrorMessage('Erro ao recuperar informações')
    console.log(errorMessage.message);
  }) 
});

