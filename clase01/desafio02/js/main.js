        //DECLARACION DE VARIABLES
        

        //CAPTURA DE DATOS DE ENTRADAS
        let test = prompt("TE GUSTA LA MAGIA ");   

        //VISUALIZO RESULTADO

        if((test == 'SI') | (test == 'Si') | (test == 'si'))
        {
            let x = parseInt(prompt("ENTONCES PIENSA E INGRESA UN NUMERO "));
            alert("AHORA SUMALE 5 ");
            let suma = x + 5;
            console.log(parseInt(suma));

            alert("AHORA MULTIPLICALO POR 2 ");
            let producto= suma*2;
            console.log(parseInt(producto));

            alert("GENIAL, AHORA RESTALE 4 ");
            let resta = producto - 4;
            console.log(parseInt(resta));

            alert("PERFECTO, POR ULTIMO DIVIDELO ENTRE 2 ");
            let division = resta/2;
            console.log(parseInt(division));
            alert("GENIAL, TU RESULTADO ES: "+ division);
        }
        else 
        {
            alert("BUUUH, NO TIENES SENTIDO DEL GUSTO ");
        }
