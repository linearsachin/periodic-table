const elementsName=[    "Hydrogen", "Helium",
                        "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
                        "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", 
                        "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", 
                        "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", 
                        "Cesium", "Barium","Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", 
                        "Francium", "Radium","Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson",
                        "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium","Lutetium", 
                        "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium","Lawrencium",
                ];

const elementsSymbol = [    "H", "He", 
                            "Li", "Be", "B", "C", "N","O", "F", "Ne", 
                            "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", 
                            "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", 
                            "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", 
                            "Cs", "Ba",  "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", 
                            "Fr", "Ra",  "Rf", "Db", "Sg", "Bh", "Hs", "Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og",
                            "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb","Lu",
                            "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No","Lr", 
                ];
const elementBlock = [      "s polyatomic-nonmetal", "p noble", 
                            "s alkali", "s alkali-earth", "p metalloid", "p polyatomic-nonmetal", "p polyatomic-nonmetal","p polyatomic-nonmetal", "p halo","p noble", 
                            "s alkali", "s alkali-earth", "p", "p metalloid", "p polyatomic-nonmetal", "p polyatomic-nonmetal", "p halo", "p noble", 
                            "s alkali", "s alkali-earth", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "p", "p metalloid", "p metalloid", "p polyatomic-nonmetal", "p halo", "p noble", 
                            "s alkali", "s alkali-earth", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "p", "p", "p metalloid", "p metalloid", "p halo", "p noble", 
                            "s alkali", "s alkali-earth", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "p", "p", "p", "p metalloid", "p halo", "p noble", 
                            "s alkali", "s alkali-earth", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "d transition", "p", "p", "p", "p", "p halo", "p noble",
                            "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan",
                            "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", 
                ];
const atomicNumber = [  1, 2, 
                        3, 4, 5, 6, 7, 8, 9, 10, 
                        11, 12, 13, 14, 15, 16, 17, 18, 
                        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 
                        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 
                        55, 56, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 
                        87, 88, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,118,
                        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
                        89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
                ];
new Vue ({
    el:"#app",
    data:{
        name:"sachin",
        last_name:"yadav",
        columns: [1,2,-1,3,4,5,6,7,8,9,10,11,12,-1,13,14,15,16,17,18],
        rows: [4,5,6,7],
        elements: elementsName,
        symbols: elementsSymbol,
        blocks: elementBlock,
        atomicNo: atomicNumber,
        infoTags1:[
            [ "Atomic Number:", "atomic-number" ],
            [ "Atomic Mass:", "atomic-mass" ],
            [ "Atomic Radius:", "atomic-radius" ],
            [ "Boiling Point:", "boiling-point" ],
            [ "Bonding Type:", "bonding-type" ],
            [ "Electronic Configuration:", "electronic-config" ],
            [ "CPK coloring:","cpkHexColor"],
        ],
        infoTags2 : [
            ["Density:","density"],
            ["Electron Affinity:","electronAffinity"],
            ["Electro Negativity:","electronegativity"],
            ["Melting Point:","meltingPoint"],
            ["Group Block:","groupBlock"],
            ["Ionization Energy:","ionizationEnergy"],
            ["Oxidation States:","oxidationStates"],
        ]
    }
    
})

var popup = document.getElementById("popup-info");
var span = document.getElementsByClassName("close")[0];
let showInfo = document.querySelectorAll("#ele");

function check(params) {
    if (params ==="") {
        return "-"
    }else{
        return params
    }
    
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

Array.from(showInfo).forEach(element => {
    element.addEventListener("click", () => {
        var xmlhttp = new XMLHttpRequest();
        const atno = element.getAttribute("data-atomic-target")
        var url = "https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber="+atno;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr)
                
                document.getElementById("popup-name").innerHTML=check(myArr['name']); 
                document.getElementById("read-more").href="https://en.wikipedia.org/wiki/"+check(myArr['name'])
                document.getElementById("popup-symbol").innerHTML=check(myArr['symbol']); 


                document.getElementById("atomic-number").innerHTML=check(myArr['atomicNumber']); 
                document.getElementById("atomic-mass").innerHTML=check(myArr['atomicMass']) +" u"; 
                document.getElementById("atomic-radius").innerHTML=check(myArr['atomicRadius'])+" pm"; 
                document.getElementById("boiling-point").innerHTML=check(myArr['boilingPoint'])+ " °C"; 
                document.getElementById("bonding-type").innerHTML=capitalize(check(myArr['bondingType']));
                document.getElementById("electronic-config").innerHTML=check(myArr['electronicConfiguration']); 
                document.getElementById("cpkHexColor").style.backgroundColor="#"+check(myArr['cpkHexColor']); 
                
                document.getElementById("density").innerHTML=check(myArr['density'])+" g/cm³"; 
                document.getElementById("electronAffinity").innerHTML=check(myArr['electronAffinity'])+" kJ/mol"; 
                document.getElementById("electronegativity").innerHTML=check(myArr['electronegativity']); 
                document.getElementById("meltingPoint").innerHTML=check(myArr['meltingPoint']) +" °C"; 
                document.getElementById("groupBlock").innerHTML=capitalize(check(myArr['groupBlock']));
                document.getElementById("ionizationEnergy").innerHTML=check(myArr['ionizationEnergy'])+" kJ/mol "; 
                document.getElementById("oxidationStates").innerHTML=check(myArr['oxidationStates']); 

                element.style.backgroundColor="#"+check(myArr['cpkHexColor']);
                
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        popup.style.display = "block";
    })
})

span.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

// ele_name = document.getElementsByClassName('ele');
// ele_atno = document.getElementsByClassName('atomic-number')
// for (let index = 0; index < ele_name.length; index++) {
//     ele_name[index].innerHTML=spdelements[index]
//     ele_atno[index].innerHTML=elementsSymbol[index]
// }