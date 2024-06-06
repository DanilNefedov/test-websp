
let lastRemovedItem = null;

function handleClass(action) {
    const ulElement = document.getElementById('main-block');
    const btnSort = document.getElementsByClassName('btn-sort-click');
    const liElements = ulElement.getElementsByClassName('section-list__item');


    if (action === 'wrap') {
        ulElement.classList.add('wrap');

        btnSort[1].classList.add('active');
        btnSort[0].classList.remove('active');


        if (liElements.length > 8) {
            lastRemovedItem = liElements[liElements.length - 1];
            ulElement.removeChild(lastRemovedItem);
        }

    } else {
        ulElement.classList.remove('wrap');

        btnSort[1].classList.remove('active');
        btnSort[0].classList.add('active');


        if (lastRemovedItem) {
            const ulElement = document.getElementById('main-block');
            ulElement.appendChild(lastRemovedItem);
            lastRemovedItem = null;
        }

    }
}






