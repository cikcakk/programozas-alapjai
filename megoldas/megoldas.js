import { beSzam, kiIr } from "../utils/utils.js";

// 👇 itt a feladat megoldasa 👇

// else if
// 04. Írjunk programot, amely bekér három számot. Írja ki, hogy a harmadik szám az első két szám közt helyezkedik el, valamint nagyobb vagy kisebb náluk.

// Adatok beolvasasa

kiIr("Kérem az első számot!");
let nagyobb = beSzam("Kérem az első számot!");
kiIr("Kérem a második számot!");
let kisebb = beSzam("Kérem a második számot!");
kiIr("Kérem a harmadik számot!");
let szam = beSzam("Kérem a harmadik számot!");

// Csere aloritmus

if (kisebb > nagyobb) {
    let csere = nagyobb;
    nagyobb = kisebb;
    kisebb = csere;
}

// A szam helyzetenek meghatarozasa

if (szam > nagyobb) {
    kiIr("A szám a legnyobb!");
} else if (szam < kisebb) {
    kiIr("A szám a legkisebb!");
} else {
    kiIr("A szám a kettő közt van!");
}

kiIr("Program vége");
