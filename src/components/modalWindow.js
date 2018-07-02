let modal = document.querySelector('#modal');
let overflow = document.createElement('div');
let name = document.getElementById('nameOfWinner')

function openWin(nameOfWinner) {
    console.log("go");
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    name.innerHTML = nameOfWinner;

    let height = modal.offsetHeight;
    modal.style.marginTop = -height / 2 + "px";
    modal.style.top = "50%";
}

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

overflow.onclick = function() {
    modal.style.top = "-100%";
    overflow.remove();
};

export  {openWin}