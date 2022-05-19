let header = document.querySelector('#header-container');
header.style.background = '#32CD32';

let emergency = document.querySelector('.emergency-tasks');
emergency.style.background = '#FFB6C1';

let divEmergency = emergency.querySelectorAll('div h3');
for(let i = 0; i < divEmergency.length; i +=1){
    divEmergency[i].style.background = '#8B008B';
}

let noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.background = '#F0E68C';

let divNoEmergency = noEmergency.querySelectorAll('div h3');
for(let i = 0; i < divNoEmergency.length; i +=1){
    divNoEmergency[i].style.background = 'black';
}

let footer = document.querySelector('#footer-container');
footer.style.background = '#2E8B57';