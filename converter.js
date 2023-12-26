let units = "часы";
let quantity = 10;

if (units == "километры" || units == "часы" || units == "килограммы") {
    switch (units) {
        case "километры":
        console.log (quantity + " км. это " + (quantity * 1000) + " м.") 
        break;

        case "часы":
        console.log (quantity + " ч. это " + ( quantity * 60 ) + " мин.")
        break;

        case "килограммы":
        console.log (quantity + " кг. это " + (quantity * 1000) + " грм.")
        break;
}
} else {
     console.log ("Пожаулуйста, используйте только часы, километры или килограммы");
}