function array(){

let array=[10,20,30,40,50];
console.log("DISPLAYING DATA");
console.log(array);

console.log("Increment the first and last elements");
let i = 0
for( i=0 ; i < array.length; i++){

    if(i==0 || i==array.length-1){
        array[i]=array[i]+1;
    }
    }
    console.log(array);
}
array();