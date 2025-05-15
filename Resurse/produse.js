window.addEventListener("load", function(){

    this.document.getElementById("inp-pret").onchange= function(){
        document.getElementById("infoRange").innerHTML=`${this.value}`;        
    }
    
    
    this.document.getElementById("filtrare").onclick= function(){
        var inpNume= document.getElementById("inp-nume").value.toLowerCase().trim();
        var radioCalorii=document.getElementsByName("gr_rad")
        let inpCalorii;
        for (let radio of radioCalorii){
            if(rad.checked){
                inpCalorii=radio.value;
                break;
            }
        }
        let minCalorri, maxCalorii;
        if(inpCalorii!="toate"){
            vCal=inpCalorii.split(":");
            minCalorii=parseInt(vCal[0]);
            maxCalorii=parseInt(vCal[1]);
        }
        var produse= document.getElementsByClassName("produs");
        for (let produs of produse){

            let valNume = document.getElementsByClassName("val-nume")[0].innerHTML.toLowerCase().trim();

            let cond1= valNume.startsWith(inpNume)

            let valCalorii=parseInt(document.getElementsByClassName("val-calorii")[0].innerHTML);

            let cond2=(inpCalorii=="toate") || (valCalorii>=minCalorii && valCalorii<maxCalorii);

            let valPret = produs.getElementsByClassName("val-pret")[0].innerHTML.toLowerCase().trim();
            let cond3=(valPret>inpPret);

            let valCategorie = produs.getElementsByClassName("val-categorie")[0].innerHTML.toLowerCase().trim();
            let cond4=(valCategorie==inpCategorie || valCategorie=="toate");

            if(cond1 && cond2 && cond3 && cond4){
            produs.computedStyleMap.display="block";
        }
        else{
            produs.computedStyleMap.display="none";
        }
    }
}

document.getElementById("resetare").onclick= function(){
         document.getElementById("inp-nume").value="";
          document.getElementById("inp-pret").value=document.getElementById("inp-pret").min;
          document.getElementById("inp-categorie").value="toate";
          document.getElementById("i_rad4").checked=true;
           var produse=document.getElementsByClassName("produs");
       document.getElementById("infoRange").innerHTML="(0)";
        for (let prod of produse){
                    prod.style.display="block";        
                }    
            }

function sorteaza (semn){
        var produse=document.getElementsByClassName("produs");
         var v_produse=Array.from(produse);
         console.log("Inainte de sortare")
         console.log(v_produse);
         v_produse.sort(function(a,b){
              let pret_a=parseInt(a.getElementsByClassName("val-pret")[0].innerHTML);
             let pret_b=parseInt(b.getElementsByClassName("val-pret")[0].innerHTML);
             if(pret_a==pret_b){
                  let nume_a=a.getElementsByClassName("val-nume")[0].innerHTML;
                   let nume_b=b.getElementsByClassName("val-nume")[0].innerHTML;
                return semn*nume_a.localeCompare(nume_b);
             }
             return semn*(pret_a-pret_b);
                });
                console.log("Dupa sortare")
                console.log(v_produse);
                for(let prod of v_produse){
                    prod.parentNode.appendChild(prod);
                }

}
this.document.getElementById("sortCrescNume").onclick= function(){
    sorteaza(1);

}
this.document.getElementById("sortDescrescNume").onclick= function(){
    sorteaza(-1);

}

this.window.onkeydown=function(e){
    if (e.key=="c" && e.altKey){
        var produse=document.getElementsByClassName("produs");
        for (let prod of produse){
            var stil=getComputedStyle(prod);
            if(stil.display!="none"){
                suma += parseFloat(produs.getElementsByClassName("val-pret")[0].innerHTML);
            }
            }
            if(!document.getElementById("par_suma")){
                let p=document.createElement("p");
                p.innerHTML=suma;
                p.id="par_suma";
                container=document.getElementById("produse")
                container.insertBefore(p, container.children[0]);
                setTimeout(function(){
                    var pgf=document.getElementById("par_suma");
                    if(pgf)
                        pgf.remove();
                    
                }, 2000)
            }
}

}
})