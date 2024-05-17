const apiUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  const response = await fetch(`${apiUrl}/posts`);
  return await response.json();
};

export const fetchUsers = async () => {
  const response = await fetch("https://api.github.com/users");
  return await response.json();
  // .then((data) => console.log(data));
};
export const fetchUser = async (id) => {
  const response = await fetch(`https://api.github.com/user/${id}`);
  return await response.json();
  // .then((data) => console.log(data));
};
