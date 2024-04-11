//* array di oggetti con tutte le informazioni
let teamComponents = [
    {
        photo: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        photo: "angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        photo: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        photo: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        photo: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        role: "Developer"
    },
    {
        photo: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        role: "Graphic Designer"
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