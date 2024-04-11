/**
 * Description print in DOM 
 * @param {array} array
 */
function print(array) {
    let cardSection = document.getElementById("ms_card_container")
    for (let i = 0; i < array.length; i++) {
        const curElem = array[i];
        cardSection.innerHTML +=
        `
        <div class="col-4 px-2">
            <img src="./img/${curElem.photo}" alt="">
            <h5 class="pt-2 m-0">${curElem.name}</h5>
            <span>${curElem.role}</span>
        </div>
        `;
    }
};