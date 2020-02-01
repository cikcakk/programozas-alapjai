const beSzam = (szoveg = "Irj be kerlek egy szamot.") => {
    let szam = prompt(szoveg);
    szam = szam.indexOf(".") ? parseFloat(szam) : parseInt(szam, 10);
    console.log(typeof szam);
    return szam;
};

const kiIr = szoveg => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.innerText = szoveg;
    container.appendChild(p);
};

export { beSzam, kiIr };
