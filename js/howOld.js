const AGE = prompt ("Укажите, пожалуйста, Ваш возраст", "");
if (AGE >= 0) { 
    if (AGE == 0) {
    alert ("Детям младше одного года запрещено самостоятельно вставать с кровати! ");

    } else if (AGE != 11 && AGE % 10 == 1) {
    alert ("Вам " + AGE + " год")

    } else if ((AGE != 12 && AGE != 13 && AGE != 14) && (AGE % 10 >= 2 && AGE % 10 <= 4)) { //знаю, выглядит как хрень какая-то, но чет не допер как убрать эти три числа иначе 
    alert ("Вам " + AGE + " года");

    } else  {
    alert ("Вам " + AGE + " лет")
    }

} else {
alert ("Похоже, вы еще не родились :D " + "Встретимся через " + (AGE * (-1)) + " лет");
}
