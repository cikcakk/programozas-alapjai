import { beSzam, kiIr } from "../utils/utils.js";

// 👇 itt a feladat megoldasa 👇

// Elágazás, if else
// 03. Írjunk programot, amely kér egy számot a felhasználótól. Írja ki a szám hogy páros-e vagy sem. (Elágazás)

// uzenunk a felhasznalonak, hogy kerunk egy szamot
kiIr("Kerem a szamot!");
// beolvassuk a szamot
let szam = beSzam();
// vizsgalju, hogy a szam paros-e
if (szam % 2 == 0) {
    // a szamunk paros
    kiIr("A beolvasott szam: P A R O S!");
} else {
    // a szamunk paratlan
    kiIr("A beolvasott szam: P A R A T L A N!");
}
// lefutott a program
kiIr("Program vege!");
