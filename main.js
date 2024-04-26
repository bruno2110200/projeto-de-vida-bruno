const butoes "" document.querySelectorAll(",botao");

for(let i=0;1<botoes.lenghth;1++){
    butoes{i}.onclick= function(){

        for(let j=0;j<botoes.lenghth;j++){
            butoes[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add ("ativo");
    }
    console.log();
}