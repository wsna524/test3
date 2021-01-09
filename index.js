var rect=require('./rectangle');
function solveRect(l,b){
    console.log("solving for rectangle with l="+ l +"and b= " + b);
    
    if(l<=0 || b<=0){
        console.log("dimension should less than 0\n");
    }
    else{
        console.log("The area is " + rect.area(l,b));
        console.log("The perimeter is " + rect. perimeter(l,b) +"\n");
    }

}

solveRect(2,4);
solveRect(3,9);
solveRect(10,0);
solveRect(-1,9);
solveRect(-1,90);
