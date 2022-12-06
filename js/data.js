const dataUpdate="2022.12.06";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["JOR","Jordan",0.0,[20221115,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["BTN","Bhutan",0.0,[20221204,0,0,0,0,0,0,0,0,1],[0.44,"+"],86.61],["BWA","Botswana",0.0,[20221117,0,0,0,0,0,0,0,0,0],[14.5,"+"],53.7],["KIR","Kiribati",0.0,[20221114,0,0,0,0,0,0,0,0,0],[0.0,"="],56.3],["TZA","Tanzania",2.78,[20221128,0,0,0,0,0,0,0,1,0],[0.04,"="],39.39],["ZMB","Zambia",2.78,[20221117,0,0,0,0,0,0,0,1,3],[0.02,"="],40.92],["DJI","Djibouti",2.78,[20221122,0,0,0,0,0,0,0,1,3],[0.0,"="],24.89],["DZA","Algeria",2.78,[20221113,0,0,0,0,0,0,0,1,3],[0.01,"="],14.43],["AFG","Afghanistan",2.78,[20221204,0,0,1,0,0,0,0,0,1],[0.17,"-"],25.74],["SWZ","Eswatini",5.56,[20221121,0,0,0,0,0,0,0,0,1],[1.7,"="],40.83],["BLR","Belarus",5.56,[20221121,0,0,0,0,0,0,0,0,0],[0.0,"="],67.08],["LVA","Latvia",5.56,[20221115,0,0,0,0,0,0,0,0,2],[27.21,"+"],70.57],["CHE","Switzerland",5.56,[20221129,0,0,0,0,0,0,0,0,0],[31.53,"="],68.78],["CAN","Canada",5.56,[20221204,0,0,0,0,0,0,0,0,2],[5.43,"-"],82.42],["DOM","Dominican Republic",5.56,[20221110,0,0,0,0,0,0,0,0,0],[1.52,"="],54.03],["NAM","Namibia",5.56,[20221129,0,0,0,0,0,0,0,0,0],[0.0,"="],20.31],["KAZ","Kazakhstan",5.56,[20221113,0,0,0,0,0,0,0,0,2],[1.17,"="],54.71],["THA","Thailand",5.56,[20221129,0,0,0,0,0,0,0,0,1],[0.88,"="],74.6],["MUS","Mauritius",5.56,[20221122,0,0,0,0,0,0,0,0,2],[104.42,"+"],83.74],["SOM","Somalia",5.56,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],33.74],["YEM","Yemen",5.56,[20221201,0,0,1,0,0,0,0,0,0],[0.0,"="],2.25],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[6.3,"="],62.27],["AND","Andorra",5.56,[20221125,0,0,0,0,0,0,0,0,2],[73.03,"="],66.99],["SDN","Sudan",5.56,[20221115,0,0,0,0,0,0,0,0,0],[0.01,"+"],15.43],["GBR","United Kingdom",5.56,[20221204,0,0,0,0,0,0,0,0,1],[5.72,"+"],75.19],["GIN","Guinea",5.56,[20221204,0,0,0,0,0,0,1,1,2],[0.0,"="],22.92],["BEN","Benin",5.56,[20221128,0,0,0,0,0,0,0,0,2],[0.07,"="],20.17],["UZB","Uzbekistan",5.56,[20221128,0,0,0,0,0,0,0,0,1],[0.45,"+"],50.62],["GEO","Georgia",5.56,[20221122,0,0,0,0,0,0,0,0,2],[4.37,"="],34.08],["MRT","Mauritania",8.33,[20221204,0,0,0,0,0,0,0,1,1],[0.0,"-"],31.54],["BFA","Burkina Faso",8.33,[20221031,0,0,0,0,0,0,0,1,3],[0.0,"="],11.72],["TJK","Tajikistan",8.33,[20221122,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["POL","Poland",9.26,[20221122,1,0,0,0,0,0,0,0,2],[1.17,"="],56.71],["NER","Niger",10.56,[20221114,0,0,0,0,0,0,0,1,2],[0.0,"="],19.75],["SSD","South Sudan",10.57,[20221202,0,0,0,0,0,0,0,1,3],[0.01,"+"],19.35],["KGZ","Kyrgyz Republic",11.11,[20221204,0,0,0,0,0,0,0,-1,1],[0.03,"-"],20.45],["LIE","Liechtenstein",11.11,[20221129,0,0,0,0,0,0,0,0,2],[35.22,"-"],67.23],["SYR","Syria",11.11,[20221128,0,0,0,0,0,0,0,0,3],[0.01,"="],9.51],["SMR","San Marino",11.11,[20221115,0,0,0,0,0,0,0,0,1],[100.62,"+"],70.15],["TUR","Turkey",11.11,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["IRL","Ireland",11.11,[20221204,0,0,0,0,0,0,0,0,1],[4.98,"="],80.75],["TTO","Trinidad and Tobago",11.11,[20221128,0,0,0,0,0,0,0,0,1],[1.43,"="],46.82],["ISL","Iceland",11.11,[20221121,0,0,0,0,0,0,0,0,-1],[0.0,"-"],77.82],["KWT","Kuwait",11.11,[20221121,0,0,0,0,0,0,0,0,1],[0.25,"="],78.29],["TLS","Timor-Leste",11.11,[20221108,0,0,0,0,0,0,0,-1,3],[0.2,"+"],58.11],["MNG","Mongolia",11.11,[20221127,0,0,0,0,0,0,0,0,1],[5.54,"-"],64.02],["LTU","Lithuania",11.11,[20221126,0,0,0,0,0,0,0,0,1],[14.14,"+"],68.35],["SRB","Serbia",11.11,[20221129,0,0,0,0,0,0,0,0,2],[6.53,"+"],47.71],["SAU","Saudi Arabia",11.11,[20221201,0,0,0,0,0,0,0,0,2],[0.15,"+"],69.57],["ROU","Romania",11.11,[20221114,0,0,0,0,0,0,0,0,1],[1.41,"-"],41.28],["QAT","Qatar",11.11,[20221106,0,0,0,0,0,0,0,0,0],[16.11,"+"],105.72],["PSE","Palestine",11.11,[20221204,0,0,0,0,0,0,0,0,4],[],33.85],["PRT","Portugal",11.11,[20221128,0,0,0,0,0,0,0,0,0],[5.64,"="],86.48],["PNG","Papua New Guinea",11.11,[20221121,0,0,0,0,0,0,0,0,2],[0.68,"="],3.0],["PER","Peru",11.11,[20221128,0,0,0,0,0,0,0,0,1],[30.93,"-"],83.3],["SVK","Slovak Republic",11.11,[20221118,0,0,0,0,0,0,0,0,2],[3.9,"-"],45.68],["OMN","Oman",11.11,[20221130,0,0,0,0,0,0,0,0,0],[0.0,"-"],66.62],["NZL","New Zealand",11.11,[20221120,0,0,0,0,0,0,0,0,-1],[102.36,"-"],79.75],["NOR","Norway",11.11,[20221110,0,0,0,0,0,0,0,0,1],[2.94,"+"],74.61],["NLD","Netherlands",11.11,[20221110,0,0,0,0,0,0,0,0,0],[4.93,"="],68.08],["SVN","Slovenia",11.11,[20221114,0,0,0,0,0,0,0,0,2],[63.16,"+"],57.66],["MYS","Malaysia",11.11,[20221203,0,0,0,0,0,0,0,0,1],[5.8,"-"],81.11],["SWE","Sweden",11.11,[20221128,0,0,0,0,0,0,0,0,0],[7.65,"="],72.34],["MLT","Malta",11.11,[20221204,0,0,0,0,0,0,0,0,2],[3.75,"+"],88.36],["MDG","Madagascar",11.11,[20221204,0,0,0,0,0,0,0,0,1],[0.22,"="],6.12],["MDA","Moldova",11.11,[20221118,0,0,0,0,0,0,0,0,1],[1.13,"="],32.79],["MCO","Monaco",11.11,[20221128,0,0,0,0,0,0,0,0,2],[94.29,"+"],70.34],["LUX","Luxembourg",11.11,[20221204,0,0,0,0,0,0,0,0,0],[26.93,"+"],71.43],["LSO","Lesotho",11.11,[20221128,0,0,0,0,0,0,0,0,1],[0.0,"="],40.06],["HRV","Croatia",11.11,[20221120,0,0,0,0,0,0,0,0,2],[6.16,"+"],55.83],["KOR","South Korea",11.11,[20221106,0,0,0,0,0,0,0,0,2],[105.2,"+"],86.27],["AUS","Australia",11.11,[20221122,0,0,0,0,0,0,0,0,0],[59.03,"+"],82.73],["ESP","Spain",11.11,[20221127,0,0,0,0,0,0,0,0,2],[5.9,"="],85.49],["EST","Estonia",11.11,[20221129,0,0,0,0,0,0,0,0,1],[5.4,"="],63.93],["BHR","Bahrain",11.11,[20221107,0,0,0,0,0,0,0,0,2],[6.63,"-"],83.32],["ZAF","South Africa",11.11,[20221113,0,0,0,0,0,0,0,0,0],[0.49,"-"],32.64],["CYP","Cyprus",11.11,[20221107,0,0,0,0,0,0,0,0,3],[47.46,"="],72.07],["FRA","France",11.11,[20221130,0,0,0,0,0,0,0,0,0],[86.09,"+"],78.32],["FRO","Faeroe Islands",11.11,[20221127,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["GAB","Gabon",11.11,[20221127,0,0,0,0,0,0,0,0,3],[0.01,"="],10.77],["ECU","Ecuador",11.11,[20221121,0,0,0,0,0,0,0,0,2],[0.0,"-"],78.87],["BGR","Bulgaria",11.11,[20221108,0,0,0,0,0,0,0,0,0],[2.29,"+"],30.58],["BRB","Barbados",11.11,[20221129,0,0,0,0,0,0,0,0,2],[22.92,"="],55.02],["BLZ","Belize",11.11,[20221118,0,0,0,0,0,0,0,0,0],[2.48,"+"],54.58],["DNK","Denmark",11.11,[20221117,0,0,0,0,0,0,0,0,0],[17.83,"+"],81.04],["CPV","Cape Verde",11.11,[20221204,0,0,0,0,0,0,0,0,2],[2.42,"-"],52.05],["CRI","Costa Rica",11.11,[20221204,0,0,0,0,0,0,0,0,2],[14.91,"="],81.82],["CZE","Czech Republic",11.11,[20221204,0,0,0,0,0,0,0,0,0],[36.69,"+"],65.67],["GRL","Greenland",11.11,[20221127,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["BRN","Brunei",11.11,[20221031,0,0,0,0,0,0,0,0,1],[147.44,"="],99.32],["ALB","Albania",11.11,[20221120,0,0,0,0,0,0,0,0,0],[0.41,"+"],44.62],["VUT","Vanuatu",11.11,[20221202,0,0,0,0,0,0,0,0,0],[0.0,"="],40.31],["ARG","Argentina",13.44,[20221119,0,0,0,0,0,0,0,0,1],[3.99,"="],83.23],["EGY","Egypt",13.48,[20221204,0,1,0,0,0,0,0,0,3],[0.0,"="],36.07],["COG","Congo",13.89,[20221128,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["CMR","Cameroon",13.89,[20221119,0,0,0,0,0,0,0,1,0],[0.0,"="],4.65],["CIV","Cote d'Ivoire",13.89,[20221204,0,0,0,0,0,0,0,1,2],[0.0,"="],37.04],["VEN","Venezuela",13.89,[20221120,0,0,0,0,0,0,0,1,3],[0.27,"+"],52.88],["CHL","Chile",13.89,[20221128,0,0,0,0,0,0,0,1,2],[19.8,"-"],90.25],["CAF","Central African Republic",13.89,[20221201,0,0,0,0,0,0,0,1,3],[0.0,"="],29.72],["BGD","Bangladesh",13.89,[20221204,0,0,0,0,0,0,0,1,4],[0.01,"="],73.41],["SYC","Seychelles",13.89,[20221204,0,0,0,0,0,0,0,1,3],[29.92,"="],76.14],["LBY","Libya",13.89,[20221204,0,0,0,0,0,0,0,1,1],[0.03,"+"],18.05],["NIC","Nicaragua",13.89,[20221204,0,0,0,0,0,0,0,1,0],[0.04,"="],84.6],["UKR","Ukraine",13.89,[20221204,0,0,0,0,0,0,0,1,3],[1.74,"="],38.17],["PRY","Paraguay",13.89,[20221120,0,0,0,0,0,0,0,1,2],[118.89,"="],52.05],["TCD","Chad",13.89,[20221204,0,0,0,0,0,0,0,1,3],[0.0,"="],20.44],["LBN","Lebanon",13.89,[20221120,0,0,0,0,0,0,0,1,2],[0.75,"+"],43.94],["URY","Uruguay",13.89,[20221121,0,0,0,0,0,0,0,1,1],[6.28,"+"],84.57],["GMB","Gambia",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["CUB","Cuba",13.89,[20221204,0,0,0,0,0,0,0,1,2],[0.09,"+"],89.21],["ARE","United Arab Emirates",13.89,[20221203,0,0,0,0,0,0,0,1,2],[1.13,"-"],103.72],["GRC","Greece",14.81,[20221127,1,0,0,0,0,0,0,0,2],[60.56,"="],73.59],["BEL","Belgium",14.81,[20221117,0,1,0,0,0,0,0,0,2],[10.12,"+"],78.64],["PAN","Panama",14.81,[20221125,1,0,1,0,0,0,0,0,2],[44.78,"+"],71.67],["KHM","Cambodia",14.81,[20221204,1,0,0,0,0,0,0,0,2],[0.07,"="],87.02],["DEU","Germany",14.81,[20221121,0,0,0,0,0,1,0,0,2],[31.53,"+"],76.18],["ISR","Israel",14.81,[20221204,1,0,0,0,0,0,0,0,2],[18.55,"+"],65.17],["ITA","Italy",15.51,[20221107,0,1,0,0,0,0,0,0,2],[53.73,"="],81.26],["TON","Tonga",16.18,[20221204,0,0,0,0,0,0,0,1,1],[0.0,"="],72.49],["UGA","Uganda",16.3,[20221201,0,2,0,0,2,0,0,1,4],[0.05,"+"],27.02],["JAM","Jamaica",16.67,[20221128,0,0,1,0,0,0,0,0,1],[0.0,"="],26.22],["AGO","Angola",17.1,[20221204,0,2,0,0,0,0,0,1,2],[0.11,"+"],21.96],["MOZ","Mozambique",17.59,[20221120,0,1,0,0,0,0,0,1,2],[0.02,"="],47.92],["SGP","Singapore",17.59,[20221204,1,0,0,0,0,0,0,1,2],[20.71,"-"],90.71],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[2.24,"+"],64.82],["GUY","Guyana",18.52,[20221129,1,1,0,0,0,0,0,0,1],[1.2,"-"],47.0],["FIN","Finland",18.52,[20221117,1,1,0,0,0,0,0,0,1],[28.36,"="],78.44],["BDI","Burundi",19.44,[20221121,0,0,1,0,0,0,0,1,1],[0.29,"="],0.2],["SEN","Senegal",19.44,[20221204,0,0,0,0,1,0,0,1,3],[0.01,"="],7.75],["COL","Colombia",19.44,[20221202,1,1,0,0,0,0,0,1,1],[0.41,"="],71.04],["ETH","Ethiopia",19.44,[20221204,0,0,0,3,0,0,0,0,3],[0.03,"="],29.75],["SUR","Suriname",21.3,[20221113,1,1,0,0,0,0,0,1,2],[8.6,"="],38.49],["TWN","Taiwan",21.3,[20221204,1,1,0,0,0,0,0,1,2],[60.64,"-"],86.08],["NPL","Nepal",21.82,[20221121,0,0,0,1,0,0,0,1,4],[0.01,"-"],78.1],["BRA","Brazil",22.22,[20221128,0,0,0,0,0,0,2,1,2],[16.58,"+"],80.89],["RUS","Russia",22.69,[20221121,0,1,2,1,0,0,0,0,2],[4.22,"+"],54.03],["HND","Honduras",23.15,[20221201,0,1,1,0,0,0,0,1,3],[1.3,"-"],54.88],["VNM","Vietnam",23.15,[20221203,0,1,1,1,0,0,0,0,2],[0.48,"+"],86.25],["USA","United States",23.2,[20221122,1,1,0,0,0,1,0,1,2],[16.85,"-"],68.78],["BMU","Bermuda",24.07,[20221121,1,1,1,0,0,0,0,0,2],[12.85,"="],74.22],["DMA","Dominica",24.07,[20221204,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["BOL","Bolivia",24.07,[20221107,1,1,1,0,0,0,0,1,2],[2.12,"-"],50.4],["MAR","Morocco",24.46,[20221204,0,1,0,0,0,0,0,0,3],[0.37,"="],62.77],["MLI","Mali",25.0,[20221204,0,0,2,0,0,0,0,1,0],[0.0,"="],9.97],["COD","Democratic Republic of Congo",25.0,[20221124,0,0,0,0,0,0,2,1,3],[0.04,"-"],3.76],["RKS","Kosovo",25.04,[20221204,2,2,2,0,0,0,0,0,1],[0.05,"+"],46.29],["PHL","Philippines",25.41,[20221201,0,1,1,0,1,0,0,1,2],[0.98,"+"],63.81],["RWA","Rwanda",25.64,[20221113,0,0,0,0,0,0,0,0,0],[0.09,"="],67.32],["ABW","Aruba",25.93,[20221204,0,1,1,2,0,0,0,0,2],[9.77,"="],78.83],["BIH","Bosnia and Herzegovina",25.93,[20221128,1,0,1,2,0,0,0,0,2],[0.44,"-"],26.17],["LKA","Sri Lanka",25.93,[20221121,0,1,1,1,0,0,0,1,1],[0.04,"-"],67.57],["KEN","Kenya",26.5,[20221125,0,1,2,0,0,0,0,1,3],[0.11,"="],19.82],["SLV","El Salvador",26.85,[20221204,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[1.9,"="],31.07],["LBR","Liberia",30.0,[20221204,0,1,1,0,0,0,0,1,4],[0.02,"="],67.83],["TGO","Togo",30.1,[20221204,0,0,1,3,0,0,0,1,3],[0.01,"="],16.45],["SLB","Solomon Islands",30.46,[20221128,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["HTI","Haiti",31.48,[20221127,0,1,1,3,0,0,0,1,2],[0.02,"="],2.05],["JPN","Japan",31.48,[20221204,1,1,1,1,0,1,1,1,1],[84.53,"-"],83.11],["IDN","Indonesia",32.18,[20221121,1,1,0,0,0,0,0,1,2],[1.51,"-"],63.2],["BHS","Bahamas",32.41,[20221204,1,1,1,0,1,0,0,1,2],[0.54,"="],40.4],["SLE","Sierra Leone",33.49,[20221204,2,2,2,0,1,0,0,1,3],[0.0,"="],34.12],["GHA","Ghana",33.56,[20221204,0,2,2,0,0,0,0,1,1],[0.01,"="],26.74],["IND","India",34.26,[20221127,0,1,1,0,0,2,2,0,3],[0.02,"="],67.09],["FJI","Fiji",34.76,[20221204,0,1,1,0,1,0,0,1,2],[1.21,"="],68.86],["AUT","Austria",35.19,[20221204,2,2,1,2,0,0,0,0,2],[52.98,"+"],76.32],["GTM","Guatemala",36.57,[20221128,2,0,1,3,1,0,0,0,2],[4.91,"+"],39.36],["MAC","Macao",39.81,[20221204,2,1,1,2,1,0,0,1,3],[],90.29],["PAK","Pakistan",40.32,[20221128,0,0,0,0,0,0,0,1,2],[0.01,"="],56.1],["AZE","Azerbaijan",40.35,[20221204,0,3,2,0,0,0,2,1,0],[0.38,"="],46.94],["MMR","Myanmar",40.74,[20221107,1,1,0,0,1,2,2,1,3],[0.03,"-"],50.84],["MWI","Malawi",40.74,[20221128,1,1,1,3,1,0,0,1,3],[0.0,"-"],15.16],["IRQ","Iraq",41.38,[20221204,0,2,2,1,0,0,0,1,2],[0.23,"-"],17.8],["TUN","Tunisia",41.6,[20221031,0,1,2,4,0,0,0,1,3],[0.1,"="],51.73],["HKG","Hong Kong",42.3,[20221128,2,1,1,3,0,0,0,2,2],[125.0,"+"],90.43],["LAO","Laos",44.2,[20221204,1,1,1,3,1,0,0,1,3],[0.51,"+"],69.36],["ZWE","Zimbabwe",53.7,[20221203,1,1,1,3,1,2,1,1,4],[1.22,"="],29.11],["IRN","Iran",53.94,[20221122,1,2,2,4,0,0,2,1,2],[0.05,"="],66.07],["NGA","Nigeria",57.68,[20221114,0,1,1,3,1,2,2,1,3],[0.0,"="],23.52],["CHN","China",69.91,[20221122,3,3,2,4,1,2,2,2,3],[2.37,"-"],89.27],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[4.12,"+"],45.43]];