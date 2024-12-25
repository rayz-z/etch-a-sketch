const container = document.querySelector("div");


for (let i = 0; i < 16; i++){
    const i = document.createElement("div");
    container.appendChild(i);

    i.style.border = "2px solid red";
    i.style.width = "auto";
    i.style.height = "auto";
    i.style.display = "flex";
    
    for (let j = 0; j < 16; j++) {
        const j = document.createElement("div");
        i.appendChild(j);

        j.style.border = "2px solid green";
        j.style.width = "auto";
        j.style.height = "30px";
        j.style.display = "flex";
        j.style.flex = 1;

        j.addEventListener("mouseover", () => {
            j.style.backgroundColor = "gray";
        });
    }
    
}

