import moment from 'moment';
export const addTodo=(todo)=>{

    let headers=new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'POST', 'OPTIONS');
    
    let myDate =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    
    var details = {
      'title': todo.title,
      'description':todo.description,
      'createdon':myDate,
      'modifiedon':myDate,
    };
    var formBody = [];
    
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

      fetch('http://localhost:8080/api/toDo?'+formBody, {
        method: "POST",
        headers: headers,
      }).then((res) => {
        console.log("this is res", res.url)
      }).catch((err) => {
        console.log(err)
      })

};