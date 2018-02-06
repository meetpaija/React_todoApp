
export const delTodoApi=(todo)=>{
    let headers=new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('GET', 'POST','DELETE', 'OPTIONS');

        fetch(`http://localhost:8080/api/toDo/${todo.id}`, {
                  method: "DELETE",
                  headers: headers,
                }).then((res) => {
                  console.log("this is res", res.url)
                }).catch((err) => {
                  console.log(err)
                })
};