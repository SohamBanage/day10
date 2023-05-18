function arraystr(){
    let arrstr=["Soham","Lalit"];

    //ADD TWO ELEMENTS
    arrstr.push("Bharat");
    arrstr.push("Jyoti");

    console.log("ADDING TWO ELEMENT")
    console.log(arrstr);

   //ADDING ONE ELEMENT AT BEGINING
    console.log("ADDING ElEMENT AT BEGINNING")
    arrstr.unshift("Ritu");
    console.log(arrstr);

}
arraystr();