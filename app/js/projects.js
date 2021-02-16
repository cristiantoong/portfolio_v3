// projects
const projects = [
    {
        id: 1, 
        img: "./images/beautiful escape stylescape.jpg",
        alt: "beautiful escape resort",
        category: "backend",
    },
    {
        id: 2, 
        img: "./images/chatisfy mockup.png",
        alt: "chatisfy",
        category: "design",
    },
    {
        id: 3, 
        img: "./images/feelthewavessurf.png",
        alt: "feel the waves surf",
        category: "frontend",
    },
    {
        id: 4, 
        img: "./images/html-email.PNG",
        alt: "html email",
        category: "frontend",
    },
    {
        id: 5, 
        img: "./images/cat_steel.PNG",
        alt: "cat steel corp",
        category: "frontend",
    },

]

const cards = document.getElementById('cards');
const btnContainer = document.querySelector("#filter-btns");
// console.log(filterBtns);

// load items
window.addEventListener('DOMContentLoaded', function(){

    //displayProjects(projects);

    displayProjects2(projects);

    // const categories = projects.map(function(project){
    //     return project.category
    // });
    // console.log(categories);

    displayMenuButtons();
    

});



function displayProjects(menuItems){
    let i = 0;
    while (i < menuItems.length){
            cards.innerHTML += `
            <div class="projects__card" id="card">
            <img src="${projects[i].img}" alt="${projects[i].alt}">
            </div> 
        `;
        i++;
    }
}

//another way to display objects in html
function displayProjects2(menuItems){
    let displayProject = menuItems.map(function(project){
        return `
        <div class="projects__card" id="card">
        <img src="${project.img}" alt="${project.alt}">
        </div> 
    `;
    });

    displayProject = displayProject.join("");
    cards.innerHTML = displayProject;
}



function displayMenuButtons(){
    //Unique categories
    const categories = projects.reduce(function(values,project){
        //console.log(values, item)

        //if values/["all"] does not equal to project category
        if(!values.includes(project.category)){
            values.push(project.category);
        }
        return values

    }, ["all"]);
    
    console.log(categories);

    //Dynamic filter Buttons
    const categoryBtns = categories.map(function(category){
        return `<button class="projects__filter-btn" id="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");
    console.log(categoryBtns);
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('#filter-btn');

    // Filter Items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            // cards.style.transition = "transform 0.3s ease-in";

            //displays the value of data-id attribute
            console.log(e.currentTarget.dataset.id);

            //triggers dataset id of a button when click
            const category = e.currentTarget.dataset.id;

            const projectCategory = projects.filter(function(project){

                //console.log(project.category)
                if(project.category === category){
                    return project;
                }
                
            });

            //console.log(projectCategory);
            if(category === "all") {
                displayProjects2(projects);
            } else {
                displayProjects2(projectCategory);
            }
        });
    });
}