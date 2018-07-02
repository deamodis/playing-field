function onClickHandler(event){
    let target = event.target;

    if(target.closest('.cell')){
        alert('popal')
    }
}

export default class Field{ // класс, который создаёт только квадратное поле
    constructor(size, placeForTheField){
        this.sizeOfRow = size; // количество ячеек одного ряда по горизонтали/вертикали
        this.size = size * size; // количество ячеек всего поля
        this.placeForTheField = placeForTheField;
    }


    _addHandler(elem){
        elem.addEventListener('click', onClickHandler);
    }


    createField(){
        let fragment = document.createDocumentFragment();

        for ( let i = 0; i < this.size; i++ ){

            let cell = document.createElement('div');
            cell.className = "cell";

            if(i % this.sizeOfRow === 0){
                cell.className+=" clearfix";
            }

            fragment.appendChild(cell);
        }



        this.placeForTheField.appendChild(fragment);
        this._addHandler(this.placeForTheField);

        return this.placeForTheField;
    }

}

