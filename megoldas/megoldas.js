import { beSzam, kiIr } from "../utils/utils.js";

// 👇 itt a feladat megoldasa 👇

// string | Date() | console.log()
// 05. Írjunk programot, amelyik megmondja, hogy épp milyen napszak van!
// hajnal 4-6
// reggel 6-9
// delelott 9-12
// delutan 12-19
// este 19-24 (0)
// ejjel 0 - 4

const ora = new Date().getHours();

kiIr("Jelenleg " + ora + " ora van!");
console.log("Jelenleg " + ora + " ora van!");
const napszakSablon = "Jelenlegi napszak: ";

if (ora < 4) {
    kiIr(napszakSablon + "Ejjel");
} else if (ora < 6) {
    kiIr(napszakSablon + "Hajnal");
} else if (ora < 9) {
    kiIr(napszakSablon + "Reggel");
} else if (ora < 12) {
    kiIr(napszakSablon + "Delelott");
} else if (ora < 19) {
    kiIr(napszakSablon + "Delutan");
} else if (ora < 24) {
    kiIr(napszakSablon + "Este");
} else {
    kiIr(napszakSablon + "Ejjel");
}
