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

var mFilas = rows - 1;
    var filas = 0;
    var columnas = cols - 1;
    var mColumnas = 0;
    var ubicacion = 1;
    var signo = 1;
    var resultado = parseInt(tablas.rows[0].cells[0].innerHTML);
    var recorridoH = 1;
    var recorridoV = 0;
    var n=rows*cols;
    var contadorNum=2;
    function calculo() {
        
        console.log(resultado);
        if (cont>n) {
            document.getElementById("result").innerHTML = 'Resultado: ' + resultado;
            var fec = new Date();
            document.getElementById("fecha").innerHTML = 'Fecha actual: ' + fec.getDate() + '/' + (fec.getMonth() + 1) + '/' + fec.getFullYear();
            document.getElementById("hora").innerHTML = 'Hora actual: ' + fec.getHours() + ':' + fec.getMinutes() + ':' + fec.getSeconds();
        } else {
            console.log(" operacion: "+signo);
            if (signo == 1) {
                resultado += parseInt(tablas.rows[recorridoV].cells[recorridoH].innerHTML);
            } else if (signo == 2) {
                resultado -= parseInt(tablas.rows[recorridoV].cells[recorridoH].innerHTML);
            } else if (signo == 3) {
                resultado *= parseInt(tablas.rows[recorridoV].cells[recorridoH].innerHTML);
                signo = 0;
            }
            switch (ubicacion) {
                case 1:
                    if (recorridoH >= columnas) {
                        ubicacion = 2;
                        filas += 1;
                        recorridoV = filas;
                        recorridoH = columnas;
                        signo++;
                        contadorNum++;
                    } else {
                        signo++;
                        recorridoH++;
                        contadorNum++;
                    }
                    calculo();
                    break;
                case 2:
                    if (recorridoV >= mFilas) {
                        ubicacion = 3;
                        columnas -= 1;
                        recorridoV = mFilas;
                        recorridoH = columnas;
                        signo++;
                        contadorNum++;
                    } else {
                        signo++;
                        recorridoV++;
                        contadorNum++;
                    }
                    calculo();
                    break;
                case 3:
                    if (recorridoH <= mColumnas) {
                        ubicacion = 4;
                        mFilas -= 1;
                        recorridoV = mFilas;
                        recorridoH = mColumnas;
                        signo++;
                        contadorNum++;
                    } else {
                        signo++;
                        recorridoH--;
                        contadorNum++;
                    }
                    calculo();
                    break;
                case 4:
                    if (recorridoV <= filas) {
                        ubicacion = 1;
                        mColumnas += 1;
                        recorridoH = mincols;
                        recorridoV = filas;
                        signo++;
                        contadorNum++;
                    } else {
                        signo++;
                        recorridoV--;
                        contadorNum++;
                    }
                    calculo();
                    break;
            }
            
        }
    }
    calculo();
    }
}
 
var resultado;

document.write("El resultado es  :    ")
var fecha=new Date();

document.write('           - Fecha :' + fecha.toLocaleDateString());
var hora=fecha.getHours(); 

var minutos=fecha.getMinutes();
document.write(' - Hora:  '+ hora.toString() +':'+ minutos.toString());
