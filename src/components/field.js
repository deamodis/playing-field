let gameStart;


function onClickHandler(event){
    let target = event.target;

    if(target.closest('.cell') && gameStart){
        let currentTime = new Data.getTime();
    }
}

export default class Field{ // класс, который создаёт только квадратное поле
    constructor(size, placeForTheField){
        this.sizeOfRow = size; // количество ячеек одного ряда по горизонтали/вертикали
        this.size = size * size; // количество ячеек всего поля
        this.placeForTheField = placeForTheField;
        console.log('sad');
    }


    _addHandler(elem){
        elem.addEventListener('click', onClickHandler);
    }


    createField(){
        let fragment = document.createDocumentFragment();

        for ( let i = 0; i < this.size; i++ ){

            let cell = document.createElement('div');
            cell.className = "cell";
            cell.id = i;
            if(i % this.sizeOfRow === 0){
                cell.className+=" clearfix";
            }

            fragment.appendChild(cell);
        }

        this.placeForTheField.appendChild(fragment);
        this._addHandler(this.placeForTheField);
        this.gameStart = false;

        return this.placeForTheField;
    }

}

