//Функция для активации картинки и точки:
function activat (indexItem) {
    sliderItems.at(indexItem).className = "slider__item slider__item_active";
    sliderDot.at(indexItem).className = "slider__dot_active";
}

//Функция для дезактивации картинки и точки:
function deactivat (indexItem) {
    sliderItems.at(indexItem).className = "slider__item";
    sliderDot.at(indexItem).className = "slider__dot";
}

//Функция для изменения id картинки при прокрутке стрелочками:
function ItemChenge (delta) {
    deactivat(indexItem);
    indexItem = (indexItem + delta) % itemsCount;
    activat(indexItem);
}

const sliderArrowPrev = document.querySelector(".slider__arrow_prev");//Стрелочка "Предыдущий"
const sliderArrowNext = document.querySelector(".slider__arrow_next");//Стрелочка "Следующий"
const sliderDot = Array.from(document.querySelectorAll(".slider__dot")); //Объект с точками

const sliderItems = Array.from(document.querySelector(".slider__items").children); //Массив с картинками

//Находим индекс активной картинки:
let indexItem = sliderItems.findIndex(item => item.className === "slider__item slider__item_active");

//Активируем соответственную точку:
sliderDot[indexItem].className = "slider__dot_active";

//Константа: колличество картинок
const itemsCount = sliderItems.length;

//Предыдущий
sliderArrowPrev.onclick = function(event) {ItemChenge(-1)}

//Следующий
sliderArrowNext.onclick = function(event) {ItemChenge(1)}

//Действия для кликов по точкам:
for (let i1 = 0; i1 < sliderDot.length; i1++) {
    sliderDot[i1].onclick = function(event) {
        deactivat(indexItem);
        indexItem = i1;
        activat(indexItem);
    }
}