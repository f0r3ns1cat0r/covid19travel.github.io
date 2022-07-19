const dataUpdate="2022.07.19";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20220715,0,0,0,0,0,0,0,0,2],[11.88,"="],63.85],["DOM","Dominican Republic",5.56,[20220713,0,0,0,0,0,0,0,0,0],[4.69,"-"],54.05],["NER","Niger",5.56,[20220628,0,0,0,0,0,0,0,2,3],[0.0,"-"],11.33],["MUS","Mauritius",5.56,[20220716,0,0,0,0,0,0,0,0,2],[40.09,"+"],75.27],["ZMB","Zambia",6.48,[20220709,0,1,0,0,0,0,0,1,3],[0.69,"-"],24.71],["CUB","Cuba",7.41,[20220711,1,1,0,0,0,0,0,0,-1],[0.53,"+"],88.63],["TZA","Tanzania",8.33,[20220630,0,0,0,0,0,0,0,1,0],[0.32,"-"],11.79],["BFA","Burkina Faso",8.33,[20220701,0,0,0,0,0,0,0,1,3],[0.06,"="],7.04],["TJK","Tajikistan",8.33,[20220716,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[72.11,"+"],67.64],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[0.0,"="],80.39],["FRO","Faeroe Islands",11.11,[20220706,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[0.85,"="],10.97],["ROU","Romania",11.11,[20220630,0,0,0,0,0,0,0,0,1],[18.63,"-"],41.98],["GEO","Georgia",11.11,[20220705,0,0,0,0,0,0,0,0,2],[18.46,"="],33.86],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[17.78,"+"],50.82],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[73.07,"+"],57.67],["SRB","Serbia",11.11,[20220711,0,0,0,0,0,0,0,0,2],[27.68,"+"],47.71],["SWE","Sweden",11.11,[20220717,0,0,0,0,0,0,0,0,0],[6.74,"="],73.11],["CHE","Switzerland",11.11,[20220629,0,0,0,0,0,0,0,0,0],[92.41,"="],69.09],["GRL","Greenland",11.11,[20220718,0,0,0,0,0,0,0,0,0],[0.0,"="],68.46],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[5.18,"-"],74.94],["DNK","Denmark",11.11,[20220708,0,0,0,0,0,0,0,0,0],[38.15,"-"],81.86],["EST","Estonia",11.11,[20220718,0,0,0,0,0,0,0,0,1],[38.59,"="],63.83],["GBR","United Kingdom",11.11,[20220622,0,0,0,0,0,0,0,0,1],[40.9,"="],74.69],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[72.69,"="],67.71],["MNG","Mongolia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[4.46,"="],64.99],["AFG","Afghanistan",11.11,[20220716,0,2,1,0,1,0,0,0,3],[0.15,"+"],12.63],["ZAF","South Africa",11.11,[20220704,0,0,0,0,0,0,0,0,0],[0.43,"-"],32.22],["ALB","Albania",11.11,[20220709,0,0,0,0,0,0,0,0,2],[28.5,"-"],43.74],["YEM","Yemen",11.11,[20220709,0,0,1,0,0,2,0,0,0],[0.01,"="],1.35],["KWT","Kuwait",11.11,[20220626,0,0,0,0,0,0,0,0,1],[0.0,"="],78.16],["LVA","Latvia",11.11,[20220617,0,0,0,0,0,0,0,0,2],[40.88,"+"],69.69],["UZB","Uzbekistan",11.11,[20220715,0,0,0,0,0,0,0,0,1],[0.24,"+"],45.69],["KAZ","Kazakhstan",11.11,[20220711,0,0,0,0,0,0,0,0,1],[6.25,"-"],48.56],["LTU","Lithuania",11.11,[20220719,0,0,0,0,0,0,0,0,1],[23.97,"+"],67.36],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[6.56,"="],34.74],["JAM","Jamaica",11.11,[20220712,0,0,0,0,0,0,0,0,1],[3.81,"+"],25.3],["BGR","Bulgaria",11.11,[20220717,0,0,0,0,0,0,0,0,0],[15.71,"+"],29.96],["BHR","Bahrain",11.11,[20220627,0,0,0,0,0,0,0,0,2],[83.7,"+"],83.64],["ISL","Iceland",11.11,[20220708,0,0,0,0,0,0,0,0,0],[79.71,"="],78.36],["TTO","Trinidad and Tobago",11.11,[20220712,0,0,0,0,0,0,0,0,2],[9.24,"-"],46.86],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[40.83,"="],81.12],["BEN","Benin",11.11,[20220715,0,0,0,0,0,0,0,0,2],[0.0,"="],20.7],["SAU","Saudi Arabia",11.11,[20220718,0,0,0,0,0,0,0,0,2],[1.69,"+"],69.77],["GMB","Gambia",13.89,[20220711,0,0,0,0,0,0,0,1,3],[0.0,"="],13.42],["PRT","Portugal",13.89,[20220718,0,0,0,0,0,0,0,1,2],[51.53,"+"],86.42],["PRY","Paraguay",13.89,[20220714,0,0,0,0,0,0,0,1,1],[30.03,"="],52.03],["MLT","Malta",13.89,[20220719,0,0,0,0,0,0,0,1,2],[68.14,"-"],89.24],["NIC","Nicaragua",13.89,[20220718,0,0,0,0,0,0,0,1,0],[0.06,"="],81.46],["KOR","South Korea",13.89,[20220703,0,0,0,0,0,0,0,1,3],[83.52,"+"],86.13],["SMR","San Marino",13.89,[20220716,0,0,0,0,0,0,0,1,1],[218.51,"+"],70.03],["AUS","Australia",13.89,[20220718,0,0,0,0,0,0,0,1,2],[169.01,"+"],83.75],["VEN","Venezuela",13.89,[20220711,0,0,0,0,0,0,0,1,4],[1.12,"+"],50.66],["BDI","Burundi",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.54,"+"],0.12],["URY","Uruguay",13.89,[20220718,0,0,0,0,0,0,0,1,1],[0.0,"-"],84.32],["TUR","Turkey",13.89,[20220717,0,0,0,0,0,0,0,1,2],[19.83,"="],62.63],["SDN","Sudan",13.89,[20220706,0,0,0,0,0,0,0,1,0],[0.04,"+"],9.94],["BWA","Botswana",13.89,[20220703,0,0,0,0,0,0,0,1,2],[4.17,"="],58.44],["MCO","Monaco",14.81,[20220707,0,1,0,0,0,0,0,-1,2],[108.85,"+"],69.96],["JOR","Jordan",14.81,[20220718,0,1,0,0,0,0,0,0,0],[6.43,"+"],40.71],["ISR","Israel",14.81,[20220718,1,0,0,0,0,0,0,0,2],[92.78,"-"],66.17],["OMN","Oman",14.81,[20220715,1,0,0,0,0,0,0,0,0],[3.81,"+"],67.24],["HRV","Croatia",14.81,[20220716,0,1,0,0,0,0,0,0,2],[31.14,"+"],55.31],["DEU","Germany",14.81,[20220718,0,0,0,0,0,1,0,0,2],[114.78,"+"],75.98],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[15.69,"+"],65.45],["CYP","Cyprus",14.81,[20220711,0,1,0,0,0,0,0,0,2],[182.05,"="],72.0],["POL","Poland",14.81,[20220718,1,0,0,0,0,0,0,0,2],[3.9,"+"],58.79],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.29,"+"],24.78],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],34.53],["BLR","Belarus",16.67,[20220719,0,0,0,0,0,0,0,2,1],[0.0,"="],66.04],["TLS","Timor-Leste",16.67,[20220716,0,0,0,0,0,0,0,2,3],[0.07,"-"],54.62],["BRN","Brunei",16.67,[20220626,0,0,0,0,0,0,0,2,2],[376.74,"+"],95.82],["SSD","South Sudan",16.67,[20220706,0,0,0,0,0,0,0,2,2],[0.0,"="],11.46],["KHM","Cambodia",17.59,[20220716,1,0,0,0,0,0,0,1,2],[0.1,"+"],86.81],["CPV","Cape Verde",19.44,[20220706,0,0,0,0,0,0,1,1,2],[6.5,"-"],52.33],["PRI","Puerto Rico",19.44,[20220717,0,0,0,0,0,0,0,3,2],[]],["LUX","Luxembourg",19.44,[20220718,0,0,0,0,0,0,0,3,0],[116.05,"-"],72.32],["NLD","Netherlands",19.44,[20220717,0,0,0,0,0,0,0,3,0],[34.3,"-"],69.2],["COL","Colombia",20.37,[20220710,1,1,1,0,0,0,0,1,3],[6.92,"="],70.37],["KIR","Kiribati",20.37,[20220704,3,0,0,0,0,0,0,0,4],[0.0,"="],47.08],["SUR","Suriname",21.3,[20220717,1,1,0,0,0,0,0,1,2],[0.71,"="],38.81],["BMU","Bermuda",22.22,[20220711,0,0,0,0,0,0,0,4,2],[73.63,"="],74.25],["ITA","Italy",22.22,[20220719,1,2,0,0,0,0,0,0,2],[154.68,"-"],80.95],["BTN","Bhutan",22.22,[20220627,0,0,1,0,0,0,0,2,4],[3.13,"+"],86.53],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["BOL","Bolivia",23.15,[20220718,2,1,0,0,0,0,0,1,3],[25.7,"-"],49.99],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[146.53,"+"],78.55],["BEL","Belgium",23.15,[20220708,0,1,0,0,0,0,0,3,2],[59.79,"-"],78.83],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.3,"-"],28.69],["NAM","Namibia",23.15,[20220704,0,1,1,2,0,0,0,1,1],[0.0,"="],17.53],["GRC","Greece",24.07,[20220718,1,1,1,0,0,0,0,0,2],[0.0,"="],73.06],["THA","Thailand",24.07,[20220715,1,1,0,1,0,0,0,1,1],[2.95,"-"],74.07],["FIN","Finland",24.07,[20220708,1,1,0,0,1,0,0,0,1],[32.36,"="],78.33],["COG","Congo",25.0,[20220713,0,0,1,0,1,0,0,1,3],[0.47,"="],11.18],["MEX","Mexico",25.0,[20220711,3,1,0,0,0,0,0,1,2],[20.29,"-"],63.1],["VNM","Vietnam",25.93,[20220710,0,1,1,2,0,0,0,0,3],[0.89,"+"],82.27],["ABW","Aruba",25.93,[20220711,0,1,1,2,0,0,0,0,2],[45.36,"="],77.98],["COD","Democratic Republic of Congo",25.93,[20220718,0,1,1,0,0,0,0,2,3],[0.0,"-"],2.37],["BIH","Bosnia and Herzegovina",25.93,[20220704,1,0,1,2,0,0,0,0,2],[5.8,"+"],25.87],["SYR","Syria",26.85,[20220711,1,1,1,0,0,0,0,1,2],[0.04,"+"],8.59],["NZL","New Zealand",26.85,[20220716,0,2,0,0,0,0,0,3,2],[204.64,"-"],80.37],["TWN","Taiwan",26.85,[20220707,1,1,0,0,0,0,0,3,3],[108.94,"-"],83.13],["IRQ","Iraq",26.85,[20220711,0,2,2,1,0,0,0,0,2],[7.54,"+"],17.48],["BRB","Barbados",26.85,[20220704,1,1,1,0,0,0,0,1,3],[79.54,"+"],54.7],["CMR","Cameroon",27.78,[20220711,0,0,1,3,0,0,0,1,3],[0.0,"="],4.5],["RUS","Russia",28.24,[20220712,0,1,2,1,0,0,0,2,2],[2.86,"+"],51.54],["LKA","Sri Lanka",28.7,[20220627,0,0,1,1,0,1,0,2,3],[0.15,"+"],66.83],["PAN","Panama",28.7,[20220701,1,0,2,0,0,0,0,1,2],[31.03,"+"],71.69],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.18,"+"],43.95],["UGA","Uganda",28.7,[20220624,0,1,0,2,2,0,0,1,3],[0.12,"-"],25.4],["ESP","Spain",29.17,[20220712,0,2,1,3,0,0,0,1,2],[35.71,"="],85.47],["CAN","Canada",29.63,[20220718,0,2,0,0,0,0,0,4,2],[12.9,"-"],82.49],["AGO","Angola",29.63,[20220704,0,2,1,0,0,0,0,2,3],[0.39,"+"],20.94],["GUY","Guyana",29.63,[20220712,1,1,0,0,0,0,0,4,1],[13.57,"+"],57.23],["IND","India",31.48,[20220719,0,1,0,0,0,2,2,1,3],[1.35,"+"],65.81],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[12.06,"="],31.0],["DMA","Dominica",32.41,[20220711,1,1,1,2,0,0,0,1,3],[0.0,"="],42.08],["SLB","Solomon Islands",32.41,[20220711,1,1,1,0,0,0,1,3,2],[0.0,"="],25.72],["SEN","Senegal",32.41,[20220718,1,1,1,0,1,0,0,1,3],[0.24,"="],6.34],["LSO","Lesotho",32.41,[20220627,0,2,2,2,0,0,0,1,4],[0.0,"-"],38.03],["KGZ","Kyrgyz Republic",33.33,[20220711,0,0,2,4,0,0,0,0,2],[1.07,"+"],20.32],["TKM","Turkmenistan",33.33,[20220719,0,0,0,0,0,0,2,4,3],[],46.04],["SLV","El Salvador",34.26,[20220715,0,1,2,1,1,0,0,0,3],[0.0,"="],68.46],["PNG","Papua New Guinea",34.26,[20220704,0,1,1,3,0,0,0,4,2],[0.02,"-"],2.82],["TGO","Togo",34.26,[20220711,0,1,1,3,0,2,0,2,3],[0.34,"+"],18.02],["HND","Honduras",34.26,[20220711,0,2,1,0,0,2,0,1,3],[3.3,"+"],52.85],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.24,"-"],1.39],["MWI","Malawi",34.26,[20220716,0,1,1,3,0,0,0,2,3],[0.16,"+"],7.63],["BGD","Bangladesh",34.26,[20220712,2,1,1,0,0,1,0,1,4],[0.61,"+"],70.77],["CAF","Central African Republic",35.19,[20220718,0,0,0,0,0,2,2,2,3],[0.11,"="],22.07],["MRT","Mauritania",35.19,[20220718,1,1,1,3,0,0,0,1,2],[2.07,"-"],28.92],["GIN","Guinea",35.19,[20220718,1,1,1,3,0,0,0,1,2],[0.0,"="],19.52],["AUT","Austria",35.19,[20220718,2,2,1,2,0,0,0,0,2],[130.79,"+"],74.26],["ARE","United Arab Emirates",35.19,[20220718,1,1,2,0,0,0,0,2,3],[14.85,"-"],104.56],["TCD","Chad",35.19,[20220717,1,1,1,3,0,0,0,1,3],[0.0,"="],12.19],["AZE","Azerbaijan",36.11,[20220701,0,0,2,2,1,0,0,1,0],[1.79,"+"],47.09],["RKS","Kosovo",37.04,[20220711,2,2,2,0,0,0,0,0,1],[44.72,"+"],46.24],["EGY","Egypt",37.96,[20220711,1,1,2,3,0,0,0,0,3],[0.0,"="],34.13],["LBR","Liberia",37.96,[20220718,1,1,1,0,1,0,1,1,4],[0.01,"="],44.83],["PHL","Philippines",37.96,[20220711,1,2,1,0,1,0,0,4,4],[2.0,"+"],62.84],["USA","United States",38.89,[20220707,2,2,0,0,1,0,1,4,2],[38.03,"-"],67.07],["NGA","Nigeria",39.81,[20220710,0,1,1,3,1,0,0,2,3],[0.03,"="],11.38],["ARG","Argentina",39.81,[20220712,0,1,2,4,0,0,0,1,2],[12.53,"="],83.11],["BRA","Brazil",39.81,[20220625,2,1,1,0,1,1,1,4,2],[26.84,"-"],79.17],["JPN","Japan",39.81,[20220718,1,1,1,1,0,1,1,2,1],[74.98,"+"],82.2],["MLI","Mali",40.74,[20220719,0,2,2,3,0,0,0,1,3],[0.01,"="],6.28],["QAT","Qatar",40.74,[20220717,1,1,2,0,1,0,0,2,2],[34.36,"+"],98.45],["SOM","Somalia",40.74,[20220627,0,2,2,1,0,2,0,1,3],[0.01,"-"],9.62],["IDN","Indonesia",41.67,[20220711,1,2,1,1,0,0,1,2,2],[1.32,"+"],61.88],["SGP","Singapore",41.67,[20220715,1,1,1,2,0,1,0,3,2],[164.76,"+"],91.66],["BLZ","Belize",42.59,[20220718,2,2,1,0,1,0,1,1,0],[44.23,"+"],54.38],["ZWE","Zimbabwe",42.59,[20220708,1,1,1,3,0,2,0,1,3],[0.12,"-"],29.0],["VIR","United States Virgin Islands",43.52,[20220718,0,1,1,3,0,1,0,4,2],[]],["ETH","Ethiopia",43.52,[20220718,1,1,1,3,1,0,0,2,3],[0.07,"-"],31.84],["TON","Tonga",44.44,[20220705,0,1,0,0,0,2,2,4,4],[7.7,"="],91.64],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[33.85,"+"],75.95],["KEN","Kenya",45.37,[20220704,0,1,2,3,0,0,0,4,1],[0.23,"="],17.6],["LBN","Lebanon",46.3,[20220704,1,2,1,1,1,2,0,1,1],[35.42,"+"],42.46],["BHS","Bahamas",46.3,[20220718,1,1,1,3,1,0,1,1,-1],[5.38,"-"],39.11],["GTM","Guatemala",46.76,[20220711,2,1,1,3,1,1,0,1,4],[29.1,"-"],36.25],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[25.27,"="],51.99],["MYS","Malaysia",47.22,[20220714,1,1,1,1,1,1,1,2,2],[12.21,"+"],81.56],["LBY","Libya",47.22,[20220716,1,2,2,4,0,0,0,1,3],[0.94,"+"],17.58],["DZA","Algeria",47.22,[20220718,1,2,1,4,1,0,0,1,3],[0.07,"+"],15.51],["SLE","Sierra Leone",48.15,[20220718,2,2,2,0,1,0,0,2,3],[0.01,"="],22.76],["DJI","Djibouti",49.07,[20220613,1,1,2,4,1,0,0,1,3],[0.0,"="],14.56],["CHL","Chile",49.54,[20220717,1,1,2,2,0,0,2,3,4],[38.3,"-"],90.32],["PER","Peru",50.93,[20220701,1,3,2,0,1,0,1,1,3],[28.78,"+"],82.4],["ERI","Eritrea",50.93,[20220709,1,1,1,3,1,2,0,2,4],[0.22,"="]],["NPL","Nepal",51.85,[20220718,2,1,2,1,1,1,1,1,4],[0.66,"+"],67.94],["GHA","Ghana",51.85,[20220718,0,2,2,4,0,0,0,4,1],[0.18,"="],23.43],["HKG","Hong Kong",52.78,[20220717,1,2,2,4,0,0,0,3,3],[45.46,"+"],86.61],["IRN","Iran",56.94,[20220705,3,2,2,4,0,0,2,1,2],[5.57,"+"],66.03],["FJI","Fiji",57.41,[20220704,0,2,2,0,2,0,2,3,2],[9.08,"-"],68.73],["LAO","Laos",57.87,[20220625,2,2,1,4,1,2,1,1,3],[0.34,"+"],68.37],["MAR","Morocco",58.33,[20220704,1,2,2,4,2,0,0,1,2],[3.69,"+"],63.22],["RWA","Rwanda",58.33,[20220711,0,3,2,4,2,0,0,1,1],[0.24,"+"],64.88],["VUT","Vanuatu",59.72,[20220711,3,3,2,4,1,1,1,1,4],[4.09,"-"],39.67],["MMR","Myanmar",62.96,[20220717,1,1,1,2,1,2,2,4,4],[0.02,"="],51.2],["ECU","Ecuador",65.74,[20220718,0,2,2,4,2,0,2,1,2],[10.56,"+"],78.83],["MAC","Macao",73.15,[20220711,3,2,2,4,0,2,1,3,3],[],85.5],["UKR","Ukraine",75.0,[20220704,3,1,2,3,2,1,2,3,3],[0.46,"+"],34.81],["PAK","Pakistan",77.78,[20220711,3,2,2,1,2,1,2,3,4],[0.24,"+"],55.48],["CHN","China",79.17,[20220630,3,3,2,4,2,3,2,2,4],[0.04,"+"],88.5],["MDG","Madagascar",93.52,[20220714,3,3,2,3,2,2,2,4,4],[0.1,"="],4.42],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[87.37,"+"],45.22]];