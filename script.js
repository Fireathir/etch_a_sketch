const gridSize = 16*16;
const gridContainer = document.querySelector('#gameGrid');
const resetButton = document.querySelector('#resetButton');

for (let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    row.classList.add('row');
    gridContainer.append(row);
}

let rows = document.querySelectorAll('.row');

resetButton.addEventListener("click", clickFunction);

function clickFunction(){
    rows.forEach(row => {
        row.style.backgroundColor = 'white';
    });
}