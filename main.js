
document.getElementById("c1").onclick = function() {
    document.getElementById("p1").remove();
    
}

document.getElementById("cr1").onclick = function() {
    document.getElementById("cr1") ;
    
}
function moinsClick(e){
    console.log("clicked")

    let quantity = document.getElementById("q1")
    quantity.innerHTML = parseInt(quantity.innerHTML)-100;
    let somme = document.getElementById("q4")
    somme.innerHTML = parseFloat(quantity.innerHTML)
    if (quantity.innerHTML = 0 ) {
            e.preventDefault();
          }
}
function plusClick(){
    console.log("clicked")

    let quantity = document.getElementById("q1")
    quantity.innerHTML = parseInt(quantity.innerHTML)+100;
    let somme = document.getElementById("q4")
    somme.innerHTML = parseFloat(quantity.innerHTML)
  
}
document.getElementById("c2").onclick = function() {
    document.getElementById("p2").remove();
    
}




///////////////////////////////////////////
function moinsClick2(event){
    console.log("clicked")

    let quantity2 = document.getElementById("q2")
    quantity2.innerHTML = parseInt(quantity2.innerHTML)-200;
    let somme = document.getElementById("q4")
    somme.innerHTML = parseFloat(quantity2.innerHTML)
    if (quantity2.innerHTML = 0 ) {
        e.preventDefault();
      }
}
function plusClick2(){
    console.log("clicked")

    let quantity2 = document.getElementById("q2")
    quantity2.innerHTML = parseInt(quantity2.innerHTML)+200;
    let somme = document.getElementById("q4")
    somme.innerHTML = parseFloat(quantity2.innerHTML)
}
document.getElementById("c3").onclick = function() {
    document.getElementById("p3").remove();
    
}
function moinsClick3(e){
    console.log("clicked")

    let quantity3 = document.getElementById("q3")
    quantity3.innerHTML = parseInt(quantity3.innerHTML)-300;
    let somme = document.getElementById("q4")
somme.innerHTML = parseFloat(quantity3.innerHTML)
    if (quantity3.innerHTML = 0 ) {
        e.preventDefault();
      }
}

function plusClick3(){
    console.log("clicked")

    let quantity3 = document.getElementById("q3")
    quantity3.innerHTML = parseInt(quantity3.innerHTML)+300;
    let somme = document.getElementById("q4")
    somme.innerHTML = parseFloat(quantity3.innerHTML)
}



    

         
    


