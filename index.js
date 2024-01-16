let nomeDoHeroi = "miguel"
let xp = 7490
let nivelDeXp 

if(xp < 1000){
    nivelDeXp = "ferro"
}else if(xp >1000 && xp <= 2000){
    nivelDeXp = "bronze"
}else if(xp >2000 && xp <=5000){
    nivelDeXp = "prata"
}else if(xp >5000 && xp <=7000){
    nivelDeXp = "ouro"
}else if(xp >7000 && xp <=8000){
    nivelDeXp = "platina"
}else if(xp >8000 && xp <=9000){
    nivelDeXp = "ascendente"
}else if(xp >9000 && xp <=10000){
    nivelDeXp = "imortal"
}else if(xp >=10001){
    nivelDeXp = "radiante"
}

console.log("O Heroi de nome "  + nomeDoHeroi +  " esta no nivel de "+nivelDeXp)

