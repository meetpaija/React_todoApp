import moment from 'moment';
export const updateTodo=(todo)=>{
    let headers=new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'PUT', 'OPTIONS');
    
    let myDate =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    console.log("In UpdateTODO::",todo);

    var details = {
      'title': todo.title,
      'description':todo.description,
      'createdon':todo.createdon,
      'modifiedon':myDate,
    };
    var formBody = [];
    
    todo.modifiedon=myDate;
    let updated_todo=Object.assign({},todo);

    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

      fetch(`http://localhost:8080/api/toDo/${todo.id}?`+formBody, {
        method: "PUT",
        headers: headers,
      }).then((res) => {
        console.log("this is res", res.url)
      }).catch((err) => {
        console.log(err)
      })
    return updated_todo;      
};