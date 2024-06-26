//your JS code here. If required.
let div=document.getElementById("main");

for (let i=1; i<=800; i++){
	let childDiv=document.createElement('div');
	childDiv.classList.add("square");
	div.append(childDiv);
}

const children=document.querySelectorAll(".square");

children.forEach(child=>{
	child.addEventListener("mouseover", function() {
		 let curentColour=child.style.backgroundColor;
            child.style.backgroundColor = getRandomColor();
		setTimeout(() => {
                child.style.backgroundColor = curentColour;
            }, 1000);
        });
})

function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }