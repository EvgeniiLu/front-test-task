export const loadUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json());

export const loadPosts = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((r) =>
    r.json()
  );
