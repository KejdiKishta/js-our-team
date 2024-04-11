//* array di oggetti con tutte le informazioni
let teamComponents = [
    {
        photo: "gigi.png",
        name: "Gianluigi buffon",
        role: "Superman"
    },
    {
        photo: "giorgio.png",
        name: "Giorgio Chiellini",
        role: "King Kong"
    },
    {
        photo: "pirlo.png",
        name: "Andrea Pirlo",
        role: "Il Maestro"
    },
    {
        photo: "claudio.png",
        name: "Claudio Marchisio",
        role: "Il Principino"
    },
    {
        photo: "paulo.png",
        name: "Paulo Dybala",
        role: "La Joya"
    },
    {
        photo: "del_piero.png",
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