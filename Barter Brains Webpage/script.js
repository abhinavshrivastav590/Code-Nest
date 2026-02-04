//  Live Skill Filtering Logic
function filterSkills() {
    
    let input = document.getElementById('skillSearch').value.toLowerCase();
    
    
    let tags = document.getElementsByClassName('tag');

    for (let i = 0; i < tags.length; i++) {
        
        if (tags[i].innerHTML.toLowerCase().includes(input)) {
            tags[i].classList.remove("hidden");
        } else {
            tags[i].classList.add("hidden");
        }
    }
}


window.onload = function() {
    console.log("Skill-Swap Concept Page Loaded!");
    
};


document.querySelectorAll('.tag').forEach(item => {
    item.addEventListener('click', event => {
        alert("You clicked on: " + item.innerText + "\nIn the real project, this will show experts for this skill!");
    });
});
function toggleSkills() {
    let container = document.getElementById('skillsContainer');
    let btn = document.getElementById('showSkillsBtn');


    if (container.style.display === "none") {
        container.style.display = "block"; 
        btn.innerText = "Hide Skills List";
    } else {
        container.style.display = "none";
        btn.innerText = "View List of Skills";
    }
}

