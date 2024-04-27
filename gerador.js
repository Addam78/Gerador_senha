function senha(){
    let simbolos=['$','#','&','!']
    let senha_secreta=[]
    let s = window.document.getElementById('senha_gerada')

    for(i=0;i<3;i++){
        senha_secreta.push(Math.floor((Math.random () *100) +1))

        function randomica(items){
            let index = Math.floor(Math.random() * items.length);
            return items[index]
            
        
        }
        senha_secreta.push(randomica(simbolos))
        
    }
    let senha_secretas = senha_secreta.join(' - ')
    s.innerHTML= `${senha_secretas}`
}

senha()