// projects
const projects = [
    {
        id: 1, 
        img: "./images/beautiful escape stylescape.jpg",
        alt: "beautiful escape resort"
    },
    {
        id: 2, 
        img: "./images/chatisfy mockup.png",
        alt: "chatisfy"
    },
    {
        id: 3, 
        img: "./images/feelthewavessurf.png",
        alt: "feel the waves surf"
    },
    {
        id: 4, 
        img: "./images/html-email.PNG",
        alt: "html email"
    },
    {
        id: 5, 
        img: "./images/cat_steel.PNG",
        alt: "cat steel corp"
    },

]

// load items
window.addEventListener('DOMContentLoaded', function(){
    displayProjects();
    
    });

const cards = document.getElementById('cards');

function displayProjects(){
    let i = 0;
    while (i < projects.length){
            cards.innerHTML += `
            <div class="projects__card" id="card">
            <img src="${projects[i].img}" alt="${projects[i].alt}">
            </div> 
        `;
        i++;
    }
}



