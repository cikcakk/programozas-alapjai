import { beSzam, kiIr } from "./utils/utils.js";

// 👇 ide irhatod a kodod 👇

// Math, a JavaScript beépített objektuma
// 02. Írjunk programot, amely bekéri egy kocka oldalainak a hosszát. Írja ki a kocka alapterületét és a térfogatát!

kiIr("kérem a kozka oldalának a hosszát!");

let oldalHossza = beSzam();

oldalHossza = Math.abs(oldalHossza);

let alapTerulet = Math.pow(oldalHossza, 2);
let terfogat = Math.pow(oldalHossza, 3);

kiIr("a kozka alapterülete:");
kiIr(alapTerulet);
kiIr("a kocka terfogata:");
kiIr(terfogat);
