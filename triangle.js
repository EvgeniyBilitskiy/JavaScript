
//Homework №1 ---------------------------

function triangle (height,symbol) { 
    let row = "";
    for (let i=1; i<=height; i++) {

        row += symbol;
        console.log (row); 
    }
}

triangle ( 6, "*");
//----------------------------------------
const triangle1 = (height,symbol) => {
    let row = "";
    while (row.length <= height) {
        row += symbol;
        console.log (row);
    }
}
triangle1 (9, "%");

//Homework №2 ----------------------------

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
    sum += i;
    }
}
console.log (sum);

//Homework №3 -----------------------------

function pow (number , degree) {
    let result = 1; 
    for (i = 0; i < degree; i++) {
        result *= number;
    }
    console.log (result);
}
pow (4 , 0);