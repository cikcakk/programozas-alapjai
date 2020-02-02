import { beSzam, kiIr } from "../utils/utils.js";

// 👇 itt a feladat megoldasa 👇

// Szekvencia: egymás utáni lépések
//01. Írjunk programot, amely kér egy számot a felhasználótól. Írja ki a szám négyzetét.

// Uzenunk a felhasznalonak, hogy kerunk egy szamot, a kiIr fuggveny segitsegevel
kiIr("Kerem a szamot!");
// letrehozzuk az x valtozot es kezdoertekkel latjuk el
let x = 0;
// beolvassuk az x szamot, a beSzam fuggveny segitsegevel
x = beSzam();
// letrehozzuk az eredmeny nevu valtozot
let eredmeny = 0;
// eltaroljuk az eredmeny valtozban az x negyzet erteket
eredmeny = x * x;
// Szolunk a felhasznalonak, hogy megjelnitjuk az eredmeny
kiIr("A szam negyzete:");
// Vegul kiirjuk az eredmenyt
kiIr(eredmeny);
