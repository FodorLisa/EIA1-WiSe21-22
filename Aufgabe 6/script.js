var Aufgabe6;
(function (Aufgabe6) {
    /*Africa*/
    var countryAfrica = "Africa";
    var africa2008 = 1028;
    var africa2018 = 1235.5;
    /*Süd Amerika*/
    var countrySouthamerica = "Southamerica";
    var southAmerica2008 = 1132.6;
    var southAmerica2018 = 1261.5;
    /*Europa*/
    var countryEurope = "Europe";
    var europe2008 = 4965.7;
    var europe2018 = 4209.3;
    /*Nord Amerika*/
    var countryNorthamerica = "Northamerica";
    var northAmerica2008 = 6600.4;
    var northAmerica2018 = 6035.6;
    /*Asien*/
    var countryAsia = "Asia";
    var asia2008 = 12954.7;
    var asia2018 = 16274.2;
    /*Australien*/
    var countryAustralia = "Australia";
    var australia2008 = 1993;
    var australia2018 = 2100.5;
    /*Gesamte Welt*/
    var all = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;
    /*Berechnung Emissionen*/
    function emission(countryName, emissionen2018, emission2008) {
        document.querySelector(".countryName").innerHTML = countryName;
        document.querySelector(".countryName1").innerHTML = countryName;
        document.querySelector(".emissionen2018").innerHTML = emissionen2018.toString();
        document.querySelector(".relativeToWorld").innerHTML = Math.round(emissionen2018 / all * 100 * 100) / 100 + "%";
        document.querySelector(".growthRate").innerHTML = Math.round((emissionen2018 - emission2008) / emission2008 * 100 * 100 / 100) + "%";
        document.querySelector(".growthRateAbsolute").innerHTML = `${Math.round((emissionen2018 - emission2008) * 100) / 100}`;
        document.querySelector(".chart").style.height = `${Math.round((emissionen2018 / all * 100 * 100) / 100)}%`;
    }
    ;
    /*Funktion*/
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () { emission(countryEurope, europe2018, europe2008); });
        document.querySelector(".northamerica").addEventListener("click", function () { emission(countryNorthamerica, northAmerica2018, northAmerica2008); });
        document.querySelector(".southamerica").addEventListener("click", function () { emission(countrySouthamerica, southAmerica2018, southAmerica2008); });
        document.querySelector(".africa").addEventListener("click", function () { emission(countryAfrica, africa2018, africa2008); });
        document.querySelector(".asia").addEventListener("click", function () { emission(countryAsia, asia2018, asia2008); });
        document.querySelector(".australia").addEventListener("click", function () { emission(countryAustralia, africa2018, africa2008); });
    });
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=script.js.map