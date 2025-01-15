do {
    
    comp = Math.floor(Math.random() * 9000 + 1000)
    comp_str = comp.toString() 
} while(!(comp_str[0] != comp_str[1] && comp_str[0] != comp_str[2] && comp_str[0] != comp_str[3] && comp_str[1] != comp_str[2] && comp_str[1] != comp_str[3] && comp_str[2] != comp_str[3])
)
console.log(comp)

function check(){
    
    player = document.getElementById("player").value
    console.log(player)    
    if (player[0] != player[1] && player[0] != player[2] && player[0] != player[3] && player[1] != player[2] && player[1] != player[3] && player[2] != player[3]) {
        alert("Число верное")
    } else {alert("Число не верное");
        return false 
    }
    //быки
    bull = ""
     if (player[0] == comp_str[0])
        bull += player[0]
     if (player[1] == comp_str[1])
        bull += player[1]
     if (player[2] == comp_str[2])
        bull += player[2]
     if (player[3] == comp_str[3])
        bull += player[3]
    console.log("быки" , bull)
    document.getElementById("bulls").innerHTML = "быки :" + bull
    if (player == comp_str) 
        alert("Число угадал")
    cow = ""
    if (comp_str.includes(player[0]) && (player[0] != comp_str[0]))
        cow += player[0]
    if (comp_str.includes(player[1]) && (player[1] != comp_str[1]))
        cow += player[1]
    if (comp_str.includes(player[2]) && (player[2] != comp_str[2]))
        cow += player[2]
    if (comp_str.includes(player[3]) && (player[3] != comp_str[3]))
        cow += player[3]
    console.log("коровы" , cow)
    document.getElementById("cows").innerHTML = "коровы :" + cow
}