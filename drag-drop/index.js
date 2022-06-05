var p = document.getElementsByTagName('p');
var choice = document.getElementsByClassName('choice');
var dragItem = null;


for (var i of p) {
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);
    i.style.background = i.id;
}

function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0);
}

function dragEnd(ev) {
    setTimeout(() => this.style.display = "block", 0);
    dragItem = null;
}

for (var j of choice) {
    j.addEventListener('dragover', dragOver);
    j.addEventListener('dragenter', dragEnter);
    j.addEventListener('dragleave', dragLeave);
    j.addEventListener('drop', Drop);
}

function Drop() {
    if (this.querySelector('#' + dragItem.id)) {
        return;
    }
    this.append(dragItem)
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() { }
