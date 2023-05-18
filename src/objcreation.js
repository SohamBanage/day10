
function main(){

let obj = {Name:"Soham",Email:"sohambanage1234@gmail.com",PhoneNo:"9824767787" };

//ADD MEMBERS COURSE AND BATCH
obj.Course="PG-DAC";
obj.Batch="23";

console.log("Before deleting");
console.log(obj);

//DELETING
delete obj.PhoneNo;
delete obj.Batch;

console.log("Aefore deleting");
console.log(obj);

//OBJECT LITERAL TO JSON STRING
console.log("OBJECT LITERAL TO JSON STRING")
let str = JSON.stringify(obj);
console.log(str);

}
main();

