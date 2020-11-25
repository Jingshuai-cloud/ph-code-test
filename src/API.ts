export const fetchLogin = async (username: string) => {
  const endpoint = `https://my-json-server.typicode.com/jingshuai-cloud/mockjson/users?userName=${username}`;
  const data = await (await fetch(endpoint)).json();
  return data;
};

export type Question = {
  question: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
};

export const fetchQuestion = async () => {
  const endpoint = `https://my-json-server.typicode.com/jingshuai-cloud/mockjson/questions`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  return data;
};
