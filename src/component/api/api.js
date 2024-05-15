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
export const fetchUser = async (id) => {
  const response = await fetch(`https://api.github.com/user/${id}`);
  return await response.json();
  // .then((data) => console.log(data));
};
