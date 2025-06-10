const survivorPerks = 152
const killerPerks = 145

const perkDiv = document.getElementById("perk-divider")

const switchRolesBtn = document.getElementById("switchRolesBtn")
const genPerksBtn = document.getElementById("genPerksBtn")

let isSurvivor = true
let generatedOnce = false

function randNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function switchRole(){
    isSurvivor = !isSurvivor
    if (isSurvivor){
        switchRolesBtn.className = "switch-button killer-button";
        switchRolesBtn.innerText = "Switch to Killer";
        genPerksBtn.className = "gen-button survivor-button";
    }
    else{
        switchRolesBtn.className = "switch-button survivor-button";
        switchRolesBtn.innerText = "Switch to Survivor";
        genPerksBtn.className = "gen-button killer-button";
    }   
    
    if (generatedOnce){
        generatePerks()
    }
    
}

function generatePerks(){
    if (generatedOnce == false){
        generatedOnce = true
    }
    let amountOfPerks = isSurvivor ? survivorPerks: killerPerks
    
    
    let pages = (amountOfPerks - amountOfPerks % 15) / 15
    if(amountOfPerks % 15 < 7.5){
        pages++;
    }
    let maximumRows = Math.ceil(amountOfPerks % 15 / 5);
    let maximumColumns = amountOfPerks % 15 / maximumRows;
    console.log(maximumColumns);

    for (let i = 0; i < 4; i++){
        let page = randNumber(1, pages);
        let row
        let column
        if(page == pages){
            row = randNumber(1, maximumRows);
            column = randNumber(1, maximumColumns);
        }
        else{
            row = randNumber(1, 5);
            column = randNumber(1, 3);
        }
        
        let newPerks = "Page " + page + ", Row " + row + ", Column " + column;
        perkDiv.childNodes[2*i+1].innerText = newPerks;
    }
}

