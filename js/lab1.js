// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    // added closing bracket
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    // no equal sign after "firstName"
    // no semicolin at end of line 
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    // no semicolin at end of line
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    // no dollar sign before "lastName", "city" and "gpa"
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;
    // single quote ending with double quote doesnt work, has to be same type
    document.getElementById('place1').innerHTML = '<p>' + output + "</p>";
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}