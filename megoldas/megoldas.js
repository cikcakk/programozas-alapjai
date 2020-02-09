import { beSzam, kiIr } from "../utils/utils.js";

// 👇 itt a feladat megoldasa 👇

// Math, a JavaScript beépített objektuma
// 02. Írjunk programot, amely bekéri egy kocka oldalainak a hosszát. Írja ki a kocka alapterületét és a térfogatát!

// uzenunk a felhasznalonak, hogy kerjuk a kocka oldalanak a hosszat, a kiIr fuggveny segitsegevel
kiIr("Kerem a kocka oldalanak a hosszat!");
// letrehozzuk az oldalHossza valtozot es eltaroljuk benne az kocka oldalainak hosszat
let oldalHossza = beSzam();
// megbizonyosodunk arrol, hogy az oldalHossza vlatozonk egy pozitiv szam lesz
oldalHossza = Math.abs(oldalHossza);
// letrehozzuk az alapTerulet valtozot es hozzarendeljuk a kocka alapteruletet
let alapTerulet = Math.pow(oldalHossza, 2);
// letrehozzuk a terfogat valtozot es hozzarendeljuk a kocka terfogatat
let terfogat = Math.pow(oldalHossza, 3);
// uzenunk a felhasznalonak, hogy a kiirjuk a kocka alapteruletet
kiIr("A kocka alapterulete:");
// kiirjuk a kocka alapteruletet
kiIr(alapTerulet);
// uzenunk a felhasznalonak, hogy a kiirjuk a kocka terfogatat
kiIr("A kocka terfogatat:");
// kiirjuk a kocka terfogatat
kiIr(terfogat);
