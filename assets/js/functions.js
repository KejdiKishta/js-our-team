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
        <div class="col-4 p-3">
            <img src="./img/${curElem.photo}" alt="">
            <h4 class="pt-3 m-0">${curElem.name}</h4>
            <span>${curElem.role}</span>
        </div>
        `;
    }
};