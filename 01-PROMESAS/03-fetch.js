/*const resp = fetch('https://reqres.in/api/users');
resp.then (response => response.json())
.then((json=>{
    console.log(json);
}))*/

const resp = fetch('https://reqres.in/api/users');
resp.then (response => response.json())
.then(console.log)