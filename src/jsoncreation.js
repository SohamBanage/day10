function jsonmain(){
    let jsonstr=`{"employId":1,"emp_name":"Soham", "department":"FrontEnd Developer"}`;

    let obj = JSON.parse(jsonstr);
    console.log(obj);

}
jsonmain();