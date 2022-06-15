const dataUpdate="2022.06.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",0.0,[20220608,0,0,0,0,0,0,0,0,2],[4.6,"="],65.35],["DOM","Dominican Republic",5.56,[20220601,0,0,0,0,0,0,0,0,0],[6.47,"-"],54.67],["AND","Andorra",8.33,[20220523,0,0,0,0,0,0,0,0,2],[29.03,"="],69.1],["TJK","Tajikistan",8.33,[20220608,0,0,0,0,0,0,0,1,0],[0.0,"="],51.05],["ISL","Iceland",11.11,[20220517,0,0,0,0,0,0,0,0,0],[55.43,"+"],78.69],["CRI","Costa Rica",11.11,[20220516,0,0,0,0,0,0,0,0,1],[0.0,"="],80.62],["NOR","Norway",11.11,[20220525,0,0,0,0,0,0,0,0,1],[6.54,"+"],73.97],["CHE","Switzerland",11.11,[20220613,0,0,0,0,0,0,0,0,0],[27.42,"+"],68.85],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[2.91,"+"],47.7],["DNK","Denmark",11.11,[20220604,0,0,0,0,0,0,0,0,0],[15.57,"-"],82.5],["SVK","Slovak Republic",11.11,[20220516,0,0,0,0,0,0,0,0,0],[3.6,"+"],50.79],["SVN","Slovenia",11.11,[20220523,0,0,0,0,0,0,0,0,2],[14.49,"+"],58.78],["SWE","Sweden",11.11,[20220524,0,0,0,0,0,0,0,0,0],[2.21,"="],75.27],["MDA","Moldova",11.11,[20220605,0,0,0,0,0,0,0,0,1],[0.83,"="],26.43],["FRO","Faeroe Islands",11.11,[20220527,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["GBR","United Kingdom",11.11,[20220606,0,0,0,0,0,0,0,0,1],[15.71,"+"],73.34],["GAB","Gabon",11.11,[20220523,0,0,0,0,0,0,0,0,2],[0.22,"="],11.24],["KAZ","Kazakhstan",11.11,[20220611,0,0,0,0,0,0,0,0,1],[0.05,"-"],48.92],["AFG","Afghanistan",11.11,[20220613,0,2,1,0,1,0,0,0,3],[0.16,"="],12.07],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[13.16,"="],81.04],["ALB","Albania",11.11,[20220531,0,0,0,0,0,0,0,0,2],[1.75,"+"],43.22],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[7.48,"-"],23.7],["HUN","Hungary",11.11,[20220523,0,0,0,0,0,0,0,0,2],[2.43,"="],64.33],["HRV","Croatia",11.11,[20220613,0,0,0,0,0,0,0,0,4],[6.26,"+"],54.99],["BGR","Bulgaria",11.11,[20220520,0,0,0,0,0,0,0,0,0],[2.05,"="],29.88],["ROU","Romania",11.11,[20220606,0,0,0,0,0,0,0,0,1],[1.14,"-"],42.42],["KWT","Kuwait",11.11,[20220606,0,0,0,0,0,0,0,0,1],[8.44,"+"],76.49],["LTU","Lithuania",11.11,[20220531,0,0,0,0,0,0,0,0,1],[5.31,"+"],69.76],["LVA","Latvia",11.11,[20220531,0,0,0,0,0,0,0,0,2],[10.13,"+"],69.92],["ZMB","Zambia",12.04,[20220613,0,1,0,0,0,0,0,1,3],[0.6,"-"],20.5],["NIC","Nicaragua",13.89,[20220523,0,0,0,0,0,0,0,1,0],[0.08,"="],76.63],["MLT","Malta",13.89,[20220606,0,0,0,0,0,0,0,1,2],[36.4,"+"],90.97],["GMB","Gambia",13.89,[20220605,0,0,0,0,0,0,0,1,3],[0.0,"="],14.25],["GEO","Georgia",13.89,[20220530,0,0,0,0,0,0,0,1,2],[0.0,"="],31.89],["PRT","Portugal",13.89,[20220613,0,0,0,0,0,0,0,1,2],[195.46,"-"],87.2],["KOR","South Korea",13.89,[20220613,0,0,0,0,0,0,0,1,3],[16.8,"-"],86.95],["SDN","Sudan",13.89,[20220530,0,0,0,0,0,0,0,1,0],[0.02,"-"],8.33],["URY","Uruguay",13.89,[20220517,0,0,0,0,0,0,0,1,1],[36.67,"-"],82.71],["BDI","Burundi",13.89,[20220523,0,0,0,0,0,0,0,1,2],[0.1,"+"],0.11],["BEN","Benin",13.89,[20220610,0,0,0,0,0,0,0,1,2],[0.0,"="],21.61],["BFA","Burkina Faso",13.89,[20220606,0,0,0,0,0,0,0,1,3],[0.0,"="],7.23],["BWA","Botswana",13.89,[20220531,0,0,0,0,0,0,0,1,2],[23.15,"+"],82.84],["TZA","Tanzania",13.89,[20220609,0,0,0,0,0,0,0,1,0],[0.0,"="],6.37],["POL","Poland",14.81,[20220604,1,0,0,0,0,0,0,0,2],[0.53,"-"],59.55],["KHM","Cambodia",14.81,[20220605,1,0,0,0,0,0,0,2,2],[0.0,"="],84.55],["ISR","Israel",14.81,[20220613,1,0,0,0,0,0,0,0,2],[63.72,"+"],66.11],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[2.8,"+"],64.13],["LIE","Liechtenstein",14.81,[20220530,0,1,0,0,0,0,0,0,1],[22.48,"-"],69.08],["TLS","Timor-Leste",16.67,[20220613,0,0,0,0,0,0,0,2,3],[0.13,"+"],50.82],["BLR","Belarus",16.67,[20220524,0,0,0,0,0,0,0,2,1],[0.0,"="],66.06],["PSE","Palestine",16.67,[20220520,0,0,0,0,0,0,0,2,4],[],33.88],["BTN","Bhutan",16.67,[20220611,0,0,1,0,0,0,0,0,4],[0.15,"="],86.23],["BHR","Bahrain",17.59,[20220607,1,0,0,0,0,0,0,1,2],[65.03,"+"],69.89],["MCO","Monaco",17.59,[20220606,0,1,0,0,0,0,0,1,2],[0.0,"+"],64.95],["CIV","Cote d'Ivoire",17.59,[20220608,0,1,0,0,0,0,0,1,3],[0.1,"="],26.0],["MEX","Mexico",17.59,[20220606,1,0,0,0,0,0,0,1,1],[4.02,"+"],61.37],["OMN","Oman",17.59,[20220613,1,0,0,0,0,0,0,1,0],[0.8,"="],58.83],["MDG","Madagascar",17.59,[20220612,0,1,0,0,0,0,0,1,3],[0.11,"="],7.74],["DEU","Germany",17.59,[20220522,0,0,0,0,0,1,0,1,2],[72.37,"+"],76.91],["CUB","Cuba",18.52,[20220527,1,1,0,0,0,0,0,0,2],[0.19,"="],88.08],["CAF","Central African Republic",18.52,[20220613,0,0,0,0,0,2,0,2,3],[0.0,"="],21.23],["CPV","Cape Verde",19.44,[20220613,0,0,0,0,0,0,1,1,2],[16.11,"+"],54.71],["NLD","Netherlands",19.44,[20220525,0,0,0,0,0,0,0,3,0],[12.96,"+"],69.78],["JOR","Jordan",20.37,[20220613,0,1,0,2,0,0,0,0,0],[0.56,"+"],43.91],["ITA","Italy",22.22,[20220611,1,2,0,0,0,0,0,0,2],[37.98,"+"],79.42],["GUM","Guam",22.22,[20220523,0,0,0,0,0,0,0,4,1],[]],["GRL","Greenland",22.22,[20220530,0,0,0,0,0,0,0,4,1],[0.0,"="],67.7],["BMU","Bermuda",22.22,[20220606,0,0,0,0,0,0,0,4,2],[78.68,"="],76.75],["NAM","Namibia",23.15,[20220605,0,1,1,2,0,0,0,1,1],[4.96,"="],22.41],["BOL","Bolivia",23.15,[20220530,2,1,0,0,0,0,0,1,2],[3.1,"+"],50.55],["UGA","Uganda",23.15,[20220606,0,1,0,2,1,0,0,1,1],[0.2,"+"],22.9],["RUS","Russia",23.15,[20220613,0,1,0,0,0,1,0,3,2],[2.3,"-"],50.72],["FRA","France",23.15,[20220518,0,1,0,0,0,0,0,3,2],[59.3,"+"],78.4],["BEL","Belgium",23.15,[20220604,0,1,0,0,0,0,0,3,2],[15.71,"-"],78.64],["SWZ","Eswatini",23.15,[20220526,0,1,1,0,0,0,0,1,4],[2.29,"-"],28.67],["EST","Estonia",24.07,[20220610,1,1,0,0,0,0,0,2,1],[9.04,"+"],63.94],["LUX","Luxembourg",25.0,[20220613,0,0,0,0,1,0,0,3,2],[77.0,"+"],72.78],["UZB","Uzbekistan",25.0,[20220606,0,0,2,0,0,0,0,1,1],[0.06,"="],44.89],["VEN","Venezuela",25.0,[20220524,0,0,0,0,1,0,0,3,3],[0.18,"-"],49.77],["VNM","Vietnam",25.93,[20220603,0,1,1,2,0,0,0,0,3],[0.92,"-"],81.03],["YEM","Yemen",25.93,[20220611,0,1,1,0,0,2,0,2,1],[0.0,"="],1.41],["ABW","Aruba",25.93,[20220607,0,1,1,2,0,0,0,0,2],[144.78,"="],77.09],["COL","Colombia",25.93,[20220610,1,1,2,0,0,0,0,1,3],[2.45,"="],70.14],["BIH","Bosnia and Herzegovina",25.93,[20220606,1,0,1,2,0,0,0,0,2],[0.39,"-"],25.93],["SSD","South Sudan",26.85,[20220614,0,0,0,0,0,2,1,1,3],[0.04,"+"],8.5],["SYR","Syria",26.85,[20220531,1,1,1,0,0,0,0,1,2],[0.01,"="],8.94],["PRY","Paraguay",26.85,[20220607,1,1,1,0,0,0,0,1,1],[1.55,"="],47.68],["SEN","Senegal",26.85,[20220613,1,1,1,0,0,0,0,1,3],[0.03,"="],8.54],["TGO","Togo",26.85,[20220603,0,0,0,4,0,2,0,1,4],[0.12,"="],23.46],["FIN","Finland",26.85,[20220604,1,1,0,0,1,0,0,1,1],[24.14,"="],78.05],["CYP","Cyprus",26.85,[20220606,1,1,0,0,1,0,0,1,1],[26.11,"="],71.92],["TTO","Trinidad and Tobago",26.85,[20220612,1,1,1,0,0,0,0,1,3],[18.09,"-"],50.82],["TWN","Taiwan",26.85,[20220607,1,1,0,0,0,0,0,3,3],[277.49,"-"],80.18],["CHL","Chile",27.31,[20220611,1,1,1,2,0,0,0,2,3],[54.65,"+"],91.32],["CMR","Cameroon",27.78,[20220530,0,0,1,3,0,0,0,1,3],[0.0,"="],4.46],["GRC","Greece",27.78,[20220530,1,2,1,0,0,0,0,0,2],[40.89,"+"],73.54],["MOZ","Mozambique",28.7,[20220606,0,1,1,2,0,0,0,1,2],[0.26,"+"],66.24],["LKA","Sri Lanka",28.7,[20220612,0,0,1,1,0,1,0,2,3],[0.05,"="],67.53],["COD","Democratic Republic of Congo",28.7,[20220614,0,1,1,0,0,0,1,1,3],[0.12,"="],1.85],["ESP","Spain",29.17,[20220605,0,2,1,3,0,0,0,1,2],[24.01,"+"],86.7],["NER","Niger",29.63,[20220531,0,0,0,3,0,2,0,1,3],[0.0,"="],6.19],["SUR","Suriname",29.63,[20220608,1,1,0,0,0,0,0,4,2],[2.26,"-"],40.2],["GUY","Guyana",29.63,[20220606,1,1,0,0,0,0,0,4,1],[10.66,"-"],46.54],["NZL","New Zealand",29.63,[20220530,0,2,0,0,0,0,0,4,2],[121.53,"-"],80.15],["THA","Thailand",30.09,[20220614,0,2,1,2,0,1,0,1,3],[3.46,"-"],75.31],["PRI","Puerto Rico",30.56,[20220601,0,0,2,0,0,0,0,3,2],[]],["TUR","Turkey",30.56,[20220529,0,0,0,0,1,0,2,1,2],[1.28,"+"],62.41],["PAN","Panama",30.56,[20220527,0,0,2,2,0,0,0,1,2],[52.43,"-"],70.92],["NGA","Nigeria",30.56,[20220523,0,0,1,3,0,0,0,2,3],[0.01,"="],9.51],["HTI","Haiti",31.48,[20220523,0,1,1,3,0,0,0,1,2],[0.12,"-"],1.15],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[21.2,"-"],34.03],["DMA","Dominica",32.41,[20220613,1,1,1,2,0,0,0,1,3],[83.75,"+"],42.08],["LSO","Lesotho",32.41,[20220613,0,2,2,2,0,0,0,1,4],[1.23,"="],34.07],["MAC","Macao",32.41,[20220605,1,1,1,0,0,0,0,3,2],[],88.59],["BGD","Bangladesh",34.26,[20220530,2,1,1,0,0,1,0,1,4],[0.06,"+"],71.22],["HND","Honduras",34.26,[20220608,0,2,1,0,0,2,0,1,3],[0.27,"="],52.81],["ZAF","South Africa",34.26,[20220522,0,1,1,2,1,0,0,1,2],[2.13,"-"],31.52],["IRQ","Iraq",35.19,[20220605,0,2,2,1,0,0,0,1,3],[0.51,"+"],18.21],["COG","Congo",35.19,[20220613,0,2,1,3,0,0,0,1,3],[0.0,"="],11.55],["VIR","United States Virgin Islands",35.19,[20220613,0,1,1,3,0,1,0,1,2],[]],["KEN","Kenya",35.19,[20220606,0,1,1,3,0,1,0,1,1],[0.43,"+"],22.98],["AUT","Austria",35.19,[20220613,2,2,1,2,0,0,0,0,2],[38.32,"+"],73.2],["KGZ","Kyrgyz Republic",36.11,[20220613,0,0,2,4,0,0,0,1,2],[0.0,"="],19.81],["IND","India",37.04,[20220604,0,1,1,0,0,2,2,1,3],[0.57,"+"],64.66],["RKS","Kosovo",37.04,[20220610,2,2,2,0,0,0,0,0,1],[0.42,"+"],46.21],["SOM","Somalia",37.04,[20220613,1,1,1,1,0,2,0,1,3],[0.1,"="],8.72],["ETH","Ethiopia",37.04,[20220531,0,1,1,3,1,0,0,1,3],[0.58,"+"],18.06],["CAN","Canada",37.04,[20220613,0,0,0,0,0,1,2,4,2],[6.06,"-"],82.54],["GTM","Guatemala",37.5,[20220611,2,1,1,3,0,0,0,1,4],[5.49,"+"],34.39],["TCD","Chad",37.96,[20220610,1,1,1,2,1,0,0,1,3],[0.0,"="],12.36],["MUS","Mauritius",37.96,[20220612,0,2,1,3,0,0,0,2,3],[6.64,"="],75.66],["PHL","Philippines",37.96,[20220609,1,2,1,0,1,0,0,4,4],[0.26,"+"],63.04],["ARE","United Arab Emirates",37.96,[20220613,1,1,2,1,0,0,0,2,2],[11.68,"+"],97.11],["SLV","El Salvador",37.96,[20220606,1,1,2,1,1,0,0,0,4],[0.0,"-"],66.15],["TON","Tonga",38.89,[20220606,0,1,0,0,0,2,1,4,4],[2.57,"-"],91.0],["USA","United States",38.89,[20220611,2,2,0,0,1,0,1,4,2],[32.29,"+"],66.8],["ZWE","Zimbabwe",38.89,[20220613,0,1,1,3,0,2,0,1,3],[0.5,"-"],30.21],["ERI","Eritrea",38.89,[20220607,1,1,1,3,1,1,1,1,3],[0.02,"+"]],["JPN","Japan",39.81,[20220614,1,1,1,1,0,1,1,2,1],[11.6,"-"],81.1],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[11.64,"+"],82.25],["PNG","Papua New Guinea",39.81,[20220605,0,1,1,3,0,0,0,4,2],[0.06,"+"],2.98],["KIR","Kiribati",39.81,[20220613,3,0,0,0,0,2,2,2,4],[3.83,"-"],49.98],["QAT","Qatar",40.74,[20220607,1,1,2,0,1,0,0,2,2],[13.03,"+"],89.83],["AGO","Angola",40.74,[20220530,0,2,1,0,1,0,1,2,2],[0.0,"="],20.79],["MLI","Mali",40.74,[20220510,0,2,2,3,0,0,0,1,3],[0.01,"="],8.43],["BRB","Barbados",40.74,[20220607,1,1,2,3,0,0,0,1,3],[41.11,"+"],53.2],["EGY","Egypt",40.74,[20220613,1,1,2,3,0,0,0,1,3],[0.0,"="],33.89],["SGP","Singapore",41.67,[20220607,1,1,1,2,0,1,0,3,2],[56.53,"+"],91.56],["LBY","Libya",42.13,[20220523,1,1,2,4,0,0,0,2,3],[0.07,"="],16.78],["SLB","Solomon Islands",42.59,[20220613,2,2,0,0,2,0,0,4,2],[0.0,"="],24.55],["BLZ","Belize",42.59,[20220605,2,2,1,0,1,0,1,1,2],[31.01,"-"],52.39],["PAK","Pakistan",43.06,[20220529,1,1,1,1,1,1,2,3,4],[0.04,"+"],55.17],["AUS","Australia",43.06,[20220602,0,2,2,2,1,0,2,1,2],[102.0,"-"],83.9],["MRT","Mauritania",43.52,[20220614,1,1,2,4,0,0,0,1,3],[0.15,"+"],40.86],["SMR","San Marino",43.52,[20220611,1,1,2,4,0,0,0,1,1],[0.0,"="],69.49],["MYS","Malaysia",44.44,[20220602,1,1,1,1,0,1,2,2,2],[5.68,"+"],82.85],["BHS","Bahamas",44.44,[20220606,1,1,1,3,1,1,0,1,3],[9.15,"-"],39.8],["BRN","Brunei",46.3,[20220530,0,1,1,2,1,1,0,4,4],[97.05,"+"],96.66],["SYC","Seychelles",46.3,[20220531,1,1,2,3,1,0,0,1,3],[28.76,"+"],81.59],["LBN","Lebanon",46.3,[20220510,2,1,1,1,1,2,0,1,4],[3.37,"+"],34.91],["NPL","Nepal",46.3,[20220613,0,1,2,1,1,1,1,1,4],[0.03,"="],67.39],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.07,"+"],8.09],["DZA","Algeria",47.22,[20220606,1,2,1,4,1,0,0,1,3],[0.01,"="],15.36],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[1.07,"+"],53.39],["SLE","Sierra Leone",48.15,[20220613,2,2,2,0,1,0,0,2,3],[0.01,"="],20.38],["LBR","Liberia",48.15,[20220606,1,3,2,0,0,0,0,4,4],[0.01,"="],27.76],["AZE","Azerbaijan",49.07,[20220605,2,3,1,2,1,0,0,1,0],[0.0,"="],47.43],["DJI","Djibouti",49.07,[20220613,1,1,2,4,1,0,0,1,3],[0.22,"="],13.56],["GIN","Guinea",49.07,[20220614,1,1,1,4,0,0,2,1,3],[0.06,"="],24.98],["GHA","Ghana",51.85,[20220422,0,2,2,4,0,0,0,4,0],[0.37,"+"],20.2],["PER","Peru",54.63,[20220605,1,3,2,0,1,1,1,1,3],[2.83,"+"],82.33],["LAO","Laos",55.09,[20220609,2,2,1,4,1,2,1,0,3],[0.13,"-"],68.8],["IDN","Indonesia",55.56,[20220605,1,1,1,0,1,1,2,4,3],[0.0,"="],60.73],["HKG","Hong Kong",56.48,[20220523,2,2,2,4,0,0,0,3,3],[9.2,"+"],84.56],["FJI","Fiji",57.41,[20220530,0,2,2,0,2,0,2,3,1],[1.82,"="],70.29],["MMR","Myanmar",57.41,[20220612,1,1,0,2,1,2,2,4,3],[0.02,"="],47.64],["TKM","Turkmenistan",57.41,[20220613,0,2,2,4,0,0,2,4,3],[],47.73],["MAR","Morocco",58.33,[20220606,1,2,2,4,2,0,0,1,3],[2.63,"+"],62.69],["BRA","Brazil",60.65,[20220606,2,2,2,4,1,1,1,4,2],[18.5,"-"],78.56],["ECU","Ecuador",65.74,[20220613,0,2,2,4,2,0,2,1,2],[4.48,"="],78.23],["RWA","Rwanda",66.67,[20220607,0,3,2,4,2,0,2,1,1],[0.22,"+"],64.23],["SAU","Saudi Arabia",67.59,[20220613,2,2,2,3,2,0,2,0,2],[2.84,"+"],70.63],["IRN","Iran",67.59,[20220612,3,3,2,4,0,0,2,3,2],[0.19,"="],68.05],["VUT","Vanuatu",73.61,[20220614,3,3,2,4,2,1,1,4,4],[21.21,"-"],37.57],["UKR","Ukraine",75.0,[20220524,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["CHN","China",79.17,[20220612,3,3,2,4,2,3,2,2,4],[0.01,"="],87.05],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9.3,"+"],45.14]];