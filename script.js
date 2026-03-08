const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const skills = ["HTML5", "CSS", "JavaScript"];
function displaySkills() {
    
    const list = document.getElementById("skills-list");
    skills.forEach(function(skill) {
        const li = document.createElement("li");
        li.textContent = skill;
        list.appendChild(li);
   });
}

displaySkills();

function addSkill() {
    const input = document.getElementById("skill-input");
    const newSkill = input.ariaValueMax;

    skills.push(newSkill);

    displaySkills();
}

const button = document.getElementById("add-skill-button");
button.addEventListener("click", addSkill);