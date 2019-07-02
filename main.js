container = document.querySelector("#containerGrid");
clear = document.querySelector("#clear");
resize = document.querySelector("#resize");
black = document.querySelector('#black');
radonm = document.querySelector("#randomColor")

Grid = (num) => {
    
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr )`;

    let cell = num * num;
    for(let i = 1; i <= cell; i++)
    {
      let child = document.createElement("div");
      child.classList.add("box_element");
      container.appendChild(child); 
    }
    defaultColor();

}


defaultColor = () =>{
    let cells = document.querySelectorAll(".box_element");
    cells.forEach(cell =>  {
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "#000";
        })
    })
}


Grid(16)

clear.addEventListener('click', () => {
    let cells = document.querySelectorAll(".box_element");
    cells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    })
})


resize.addEventListener('click', () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let userChoose = prompt('Create a Grid, 1 - 80');
    while(userChoose < 1 || userChoose > 80){
        alert('Wrong input, try again');
        userChoose = prompt('Create a Grid, 1 - 80');
    }

    newGrid = Grid(userChoose);
})

black.addEventListener('click', () => {
    let cells = document.querySelectorAll(".box_element");
    cells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    })
    defaultColor();
})


radonm.addEventListener('click', () => {
    let cells = document.querySelectorAll(".box_element");
    cells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    })

    
    
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            let option = "0123456789ABCDEF";
            let col = ""
            for(let i = 0; i < 6; i++){
                col += option[Math.floor(Math.random() * 16)]
            }
            let color = "#";
            let value = color + col;
            e.target.style.backgroundColor = value;
        })
    })
})


