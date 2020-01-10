//GENERA LA TABLA CON LOS VALORES INTRODUCIDOS-------------------
var a = Math.round(Math.random()*100 );
var m = [];
    function generarMatriz() {
        var n = parseInt(document.getElementById("filas").value);
        var m = parseInt(document.getElementById("columnas").value);

        if ((n > 2 && n < 50) && (m > 2 && m < 50)) {
            console.log("cumple las filas y columnas")
            n * m;
             var codigoHTML = "<table border=\"1\"></tbody>";

        for (i = 0; i < n; i++) {
            codigoHTML += "<tr>";
                   
            for (j = 0; j < m; j++) {
                codigoHTML += "<td>" +  Math.round(Math.random()*100 ) + "</td>";
                
            }
            codigoHTML += "</tr>"
        }
        codigoHTML += "</tobdy></table>";
        document.getElementById("centrar").innerHTML = codigoHTML;
        m.push(Math.round(Math.random()*100  ) )  ;

        } else {
            alert("Los Numeros deben cumplir la CONDICION");
        }  

    }
    
//Recorre toda la Matriz ---------------------------------------
var maxrows = rows - 1;
    var minrows = 0;
    var maxcols = cols - 1;
    var mincols = 0;
    var direccion = 1;
    var operacion = 1;
    var resultado = parseInt(tablas.rows[0].cells[0].innerHTML);
    var horizontal = 1;
    var vertical = 0;
    var n=rows*cols;
    var cont=2;
    function operar() {
        
        console.log(resultado);
        
        if (cont>n) {
            document.getElementById("result").innerHTML = 'Resultado: ' + resultado;
            var fec = new Date();
            document.getElementById("fecha").innerHTML = 'Fecha actual: ' + fec.getDate() + '/' + (fec.getMonth() + 1) + '/' + fec.getFullYear();
            document.getElementById("hora").innerHTML = 'Hora actual: ' + fec.getHours() + ':' + fec.getMinutes() + ':' + fec.getSeconds();
        
        } else {
            
            console.log(" operacion: "+operacion);
            
            if (operacion == 1) {
                resultado += parseInt(tablas.rows[vertical].cells[horizontal].innerHTML);
            } else if (operacion == 2) {
                resultado -= parseInt(tablas.rows[vertical].cells[horizontal].innerHTML);
            } else if (operacion == 3) {
                resultado *= parseInt(tablas.rows[vertical].cells[horizontal].innerHTML);
                operacion = 0;
            }
            switch (direccion) {
                case 1:
                    if (horizontal >= maxcols) {
                        direccion = 2;
                        minrows += 1;
                        vertical = minrows;
                        horizontal = maxcols;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        horizontal++;
                        cont++;
                    }
                    operar();
                    break;
                case 2:
                    if (vertical >= maxrows) {
                        direccion = 3;
                        maxcols -= 1;
                        vertical = maxrows;
                        horizontal = maxcols;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        vertical++;
                        cont++;
                    }
                    operar();
                    break;
                case 3:
                    if (horizontal <= mincols) {
                        direccion = 4;
                        maxrows -= 1;
                        vertical = maxrows;
                        horizontal = mincols;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        horizontal--;
                        cont++;
                    }
                    operar();
                    break;
                case 4:
                    if (vertical <= minrows) {
                        direccion = 1;
                        mincols += 1;
                        horizontal = mincols;
                        vertical = minrows;
                        operacion++;
                        cont++;
                    } else {
                        operacion++;
                        vertical--;
                        cont++;
                    }
                    operar();
                    break;
            }
            
        }
    }
  operar()
}
 /
var resultado;
document.write("Resultado :    ")
var fecha=new Date();
document.write('           - Fecha :' + fecha.toLocaleDateString());
var hora=fecha.getHours(); 
var minutos=fecha.getMinutes();
document.write(' - Hora:  '+ hora.toString() +':'+ minutos.toString());
