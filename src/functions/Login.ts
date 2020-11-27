import fetch from 'node-fetch';


export default (email: string, password: string): Promise<any> => {
  return fetch('https://api.codeofeverand.com/login', {
    body: JSON.stringify({
      email,
      password
    }),
    method: "post"
  }).then(data => {
    return data.json();
  }).then(data => {
    return data.json();
  })
}