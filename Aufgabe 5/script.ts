/* Gesamt Welt Rechnung */
var gesamt:number=1028+1041.9+1072.1+1073.7+1107.1+1134.4+1167.1+1174.5+1192.1+1207+1235.5+1132.6+1093.1+1164.2+1215.5+126+1308.9+1331.3+1321.7+1294.7+1279.2+1261.5;+
4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4279.3+6600.4+6139.9+6375.8+6262.8+5998.9+6167+6268.9+6048.7+5938.3+5920.5+6035.6+
12954.7+13246.6+13896.8+14860.1+15308.8+15660.2+15787.7+15877+15984+16274.3+16274.1+1993+1875.7+1939.1+2035.2+2063.2+2014.7+2027.6+1986.8+1997.4+2011.3+2100.5;

/* Afrika Rechnung */
var africaGs: number = 1028+1041.9+1072.1+1073.7+1107.1+1134.4+1167.1+1174.5+1192.1+1207+1235.5;
var africa2008: number = 1028;
var africa2018: number = 1235.5;
var africa0818: number = africa2008 - africa2018;
var africaPr : Number = (africa2018/africa2008-1)*100;
var AfrikaAntWelt: Number= africaGs / gesamt *100; 

/* Konsole Afrika */
console.log ("Die Emission von Afrika ist "+ africaGs + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit "+ AfrikaAntWelt.toFixed(1) +" %");
console.log ("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+ africaPr.toFixed(1) + " % verändert");
console.log ("2018 im Vergleich zu 2008 sind das "+ africa0818.toFixed(1) + " kg CO2");

/* Süd Amerika Rechnung */
var southAmerica2008: number = 1028; 
var southAmerica2018: number = 1261.5;
var southAmericaGesamt: number = 1132.6+1093.1+1164.2+1215.5+126+1308.9+1331.3+1321.7+1294.7+1279.2+1261.5;
var southAmerica0818: number = southAmerica2008 - southAmerica2018 ;
var southAmericaPr: number = (southAmerica2018 / southAmerica2008-1)* 100;
var southAmericaAntWelt: number = southAmericaGesamt/ gesamt * 100;              

/* Konsole Süd Amerika */
console.log("Die Emission von Süd Amerika ist "+ southAmericaGesamt + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit "+ southAmericaAntWelt.toFixed(1) +" %");
console.log("Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um "+ southAmericaPr.toFixed(1) + " % verändert" );
console.log("2018 im Vergleich zu 2008 sind das "+ southAmerica0818.toFixed(1) + " kg CO2");

/* Europa Rechnung */
var europaGs: number = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4279.3;
var europa2018: number = 4209.3;
var europa08:number=4965.7;
var europa0818:number=europa08-europa2018;
var europapr:number = (europa2018/ europa08-1) *100 ;
var europaAnteilWelt: number =  europaGs / gesamt*100 ;

/* Konsole Europa */
console.log("Die Emission von Europa ist "+ europaGs + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit "+ europaAnteilWelt.toFixed(1) +" %");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+ europapr.toFixed(1) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ europa0818.toFixed(1) + " kg CO2");

/* Nord Amerika Rechnung */
var northAmericaGs: number = 6600.4+6139.9+6375.8+6262.8+5998.9+6167+6268.9+6048.7+5938.3+5920.5+6035.6;
var northAmerica2018: number = 6035.6;
var northAmerica08:number=6600.4;
var northAmerica0818:number= northAmerica08-northAmerica2018;
var northAmericapr:number = (northAmerica08 / northAmerica2018-1)*100 ;
var northAmericaAnteilWelt: number = northAmericaGs/ gesamt *100 ;

/* Konsole Nord Amerika */
console.log("Die Emission von Nord Amerika ist "+ northAmericaGs + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit "+ northAmericaAnteilWelt.toFixed(1) +" %");
console.log("Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um "+ northAmericapr.toFixed(1) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ northAmerica0818.toFixed(1) + " kg CO2" );

/* Asien Rechnung */
var asiaGs: number = 12954.7+13246.6+13896.8+14860.1+15308.8+15660.2+15787.7+15877+15984+16274.3+16274.1;
var asia2018: number = 16274.1;
var asia08:number=12954.7;
var asia0818:number= asia08-asia2018;
var asiapr:number = (asia08 / asia2018-1)*100 ;
var asiaAnteilWelt: number = asiaGs/ gesamt *100 ;

/* Konsole Asien */
console.log("Die Emission von Asien ist "+ asiaGs + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit "+ asiaAnteilWelt.toFixed(1) +" %");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+ asiapr.toFixed(1) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ asia0818.toFixed(1) + " kg CO2");

/* Australien Rechnung */
var australiaGs: number = 1993+1875.7+1939.1+2035.2+2063.2+2014.7+2027.6+1986.8+1997.4+2011.3+2100.5;
var australia2018: number = 2100.5;
var australia08:number=1993;
var australia0818:number= australia08 - australia2018;
var australiapr:number = (australia08 / australia2018-1)*100 ;
var australiaAnteilWelt: number = australiaGs/ gesamt *100 ;

/* Konsole Australien */
console.log("Die Emission von Australien ist "+ australiaGs + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit "+ australiaAnteilWelt.toFixed(1) +" %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+ australiapr.toFixed(1) + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ australia0818.toFixed(1) + " kg CO2");






