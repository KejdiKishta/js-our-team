//* array di oggetti con tutte le informazioni
let teamComponents = [
    {
        photo: "gigi.jpeg",
        name: "Gianluigi buffon",
        role: "Superman"
    },
    {
        photo: "giorgio.png",
        name: "Giorgio Chiellini",
        role: "King Kong"
    },
    {
        photo: "pirlo2.jpg",
        name: "Andrea Pirlo",
        role: "Il Maestro"
    },
    {
        photo: "claudio.jpg",
        name: "Claudio Marchisio",
        role: "Il Principino"
    },
    {
        photo: "tevez.jpg",
        name: "Carlos Tevez",
        role: "L'apache"
    },
    {
        photo: "del_piero.jpg",
        name: "Alessandro Del Piero",
        role: "Pinturicchio"
    }
];

//* stampa in console
for (let i = 0; i < teamComponents.length; i++) {
    const curElement = teamComponents[i];

    // console.log(curElement.name);
    // console.log(curElement["role"]);
    for (let key in curElement) {
        console.log(curElement[key]);
    }
    console.log("------------------");
};

//* stampa nel DOM
print(teamComponents);