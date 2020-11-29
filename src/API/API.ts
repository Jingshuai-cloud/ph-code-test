const url = "https://my-json-server.typicode.com/jingshuai-cloud/mockjson/";

export const fetchLogin = async (username: string) => {
  const endpoint = url + `users?userName=${username}`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  return data;
};

export const fetchQuestion = async () => {
  const endpoint = url + `questions`;
  const data = await (await fetch(endpoint)).json();
  return data;
};

export const fetchMenus = async () => {
  const endpoint = url + `menus`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
