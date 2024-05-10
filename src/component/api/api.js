const apiUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => {
  return fetch(`${apiUrl}/posts`).then((response) => response.json());
};

export const fetchUsers = () => {
  return fetch("https://api.github.com/users").then((response) =>
    response.json()
  );
  // .then((data) => console.log(data));
};
