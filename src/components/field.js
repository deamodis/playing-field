

export default class Field{ // класс, который создаёт только квадратное поле
    constructor(size){
        this.sizeOfRow = size; // количество ячеек одного ряда по горизонтали/вертикали
        this.size = size * size; // количество ячеек всего поля
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

        return fragment;
    }

}

