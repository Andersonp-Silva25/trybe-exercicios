// Encontre o valor serviços no array

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices;

for(let index = 0; index < menu.length; index += 1){
    if (menu[index] == 'Serviços'){
        menuServices = menu[index];
    }
}

console.log(menuServices);