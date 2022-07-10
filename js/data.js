const dataUpdate="2022.07.10";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["DOM","Dominican Republic",5.56,[20220628,0,0,0,0,0,0,0,0,0],[10.34,"="],54.82],["NER","Niger",5.56,[20220628,0,0,0,0,0,0,0,2,3],[0.0,"="],10.36],["ZMB","Zambia",6.48,[20220709,0,1,0,0,0,0,0,1,3],[0.73,"="],24.67],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[91.34,"="],69.11],["TJK","Tajikistan",8.33,[20220608,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["TZA","Tanzania",8.33,[20220630,0,0,0,0,0,0,0,1,0],[0.0,"="],6.63],["BFA","Burkina Faso",8.33,[20220701,0,0,0,0,0,0,0,1,3],[0.0,"="],7.23],["PRI","Puerto Rico",11.11,[20220705,0,0,0,0,0,0,0,4,-1],[]],["GRL","Greenland",11.11,[20220627,0,0,0,0,0,0,0,0,1],[0.0,"="],67.7],["CHE","Switzerland",11.11,[20220629,0,0,0,0,0,0,0,0,0],[76.0,"="],68.88],["GEO","Georgia",11.11,[20220705,0,0,0,0,0,0,0,0,2],[6.7,"="],31.93],["GBR","United Kingdom",11.11,[20220622,0,0,0,0,0,0,0,0,1],[30.82,"="],73.57],["SWE","Sweden",11.11,[20220706,0,0,0,0,0,0,0,0,0],[5.95,"="],75.31],["LTU","Lithuania",11.11,[20220702,0,0,0,0,0,0,0,0,1],[15.18,"+"],69.77],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[15.92,"+"],50.8],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[1.4,"+"],11.25],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[0.0,"="],80.62],["FRO","Faeroe Islands",11.11,[20220706,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["ROU","Romania",11.11,[20220630,0,0,0,0,0,0,0,0,1],[5.74,"="],42.42],["EST","Estonia",11.11,[20220625,0,0,0,0,0,0,0,0,1],[15.57,"="],63.98],["SAU","Saudi Arabia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[1.44,"-"],70.97],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[77.18,"="],69.09],["DNK","Denmark",11.11,[20220708,0,0,0,0,0,0,0,0,0],[36.25,"="],82.45],["NOR","Norway",11.11,[20220622,0,0,0,0,0,0,0,0,1],[6.64,"-"],74.07],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[65.85,"+"],58.8],["HUN","Hungary",11.11,[20220627,0,0,0,0,0,0,0,0,2],[6.9,"="],64.34],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[14.81,"+"],47.71],["YEM","Yemen",11.11,[20220709,0,0,1,0,0,2,0,0,0],[0.0,"="],1.46],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[3.05,"="],26.43],["KWT","Kuwait",11.11,[20220626,0,0,0,0,0,0,0,0,1],[5.51,"="],76.75],["KAZ","Kazakhstan",11.11,[20220611,0,0,0,0,0,0,0,0,1],[1.67,"+"],49.04],["TTO","Trinidad and Tobago",11.11,[20220701,0,0,0,0,0,0,0,0,3],[7.31,"+"],50.92],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[3.71,"+"],23.97],["UZB","Uzbekistan",11.11,[20220702,0,0,0,0,0,0,0,0,1],[0.27,"+"],45.89],["BGR","Bulgaria",11.11,[20220702,0,0,0,0,0,0,0,0,0],[9.95,"+"],30.1],["BHR","Bahrain",11.11,[20220627,0,0,0,0,0,0,0,0,2],[82.1,"-"],69.98],["LVA","Latvia",11.11,[20220617,0,0,0,0,0,0,0,0,2],[27.17,"="],69.94],["ISL","Iceland",11.11,[20220620,0,0,0,0,0,0,0,0,0],[102.48,"="],78.69],["MNG","Mongolia",11.11,[20220704,0,0,0,0,0,0,0,0,2],[2.93,"-"],65.35],["AFG","Afghanistan",11.11,[20220705,0,2,1,0,1,0,0,0,3],[0.22,"-"],12.71],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[40.55,"="],81.15],["ZAF","South Africa",11.11,[20220704,0,0,0,0,0,0,0,0,0],[0.73,"-"],31.82],["ALB","Albania",11.11,[20220709,0,0,0,0,0,0,0,0,2],[22.79,"+"],43.47],["SDN","Sudan",13.89,[20220706,0,0,0,0,0,0,0,1,0],[0.04,"="],10.1],["NIC","Nicaragua",13.89,[20220628,0,0,0,0,0,0,0,1,0],[0.07,"="],82.9],["GMB","Gambia",13.89,[20220605,0,0,0,0,0,0,0,1,3],[0.04,"="],14.25],["PRT","Portugal",13.89,[20220613,0,0,0,0,0,0,0,1,2],[99.31,"="],87.38],["PRY","Paraguay",13.89,[20220624,0,0,0,0,0,0,0,1,1],[10.63,"="],47.96],["MLT","Malta",13.89,[20220706,0,0,0,0,0,0,0,1,2],[125.02,"-"],91.06],["KOR","South Korea",13.89,[20220703,0,0,0,0,0,0,0,1,3],[34.06,"+"],87.0],["SMR","San Marino",13.89,[20220627,0,0,0,0,0,0,0,1,3],[260.19,"+"],69.49],["URY","Uruguay",13.89,[20220620,0,0,0,0,0,0,0,1,1],[19.01,"="],82.88],["BWA","Botswana",13.89,[20220703,0,0,0,0,0,0,0,1,2],[8.41,"="],63.1],["BEN","Benin",13.89,[20220610,0,0,0,0,0,0,0,1,2],[0.0,"="],21.61],["VEN","Venezuela",13.89,[20220704,0,0,0,0,0,0,0,1,4],[0.64,"-"],49.77],["BDI","Burundi",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.17,"="],0.12],["TUR","Turkey",13.89,[20220705,0,0,0,0,0,0,0,1,2],[9.67,"="],62.43],["AUS","Australia",13.89,[20220617,0,0,0,0,0,0,0,1,2],[147.45,"+"],84.1],["HRV","Croatia",14.81,[20220628,0,1,0,0,0,0,0,0,2],[27.03,"+"],55.01],["OMN","Oman",14.81,[20220704,1,0,0,0,0,0,0,0,0],[3.91,"="],58.19],["POL","Poland",14.81,[20220624,1,0,0,0,0,0,0,0,2],[2.15,"+"],59.58],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[7.49,"-"],64.16],["CYP","Cyprus",14.81,[20220703,0,1,0,0,0,0,0,0,2],[176.47,"="],72.0],["MCO","Monaco",14.81,[20220707,0,1,0,0,0,0,0,-1,2],[138.34,"+"],64.95],["ISR","Israel",14.81,[20220704,1,0,0,0,0,0,0,0,2],[121.93,"-"],66.15],["TCD","Chad",15.74,[20220629,1,1,0,0,0,0,0,1,3],[0.0,"="],12.38],["CIV","Cote d'Ivoire",15.74,[20220628,0,1,0,0,0,0,0,1,3],[0.22,"="],20.48],["TLS","Timor-Leste",16.67,[20220613,0,0,0,0,0,0,0,2,3],[0.12,"="],51.99],["BLR","Belarus",16.67,[20220701,0,0,0,0,0,0,0,2,0],[16.89,"="],66.99],["BRN","Brunei",16.67,[20220626,0,0,0,0,0,0,0,2,2],[246.64,"="],96.66],["SSD","South Sudan",16.67,[20220706,0,0,0,0,0,0,0,2,-1],[0.01,"="],9.86],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],33.94],["MEX","Mexico",17.59,[20220620,1,0,0,0,0,0,0,1,2],[21.2,"+"],61.37],["DEU","Germany",17.59,[20220620,0,0,0,0,0,1,0,1,2],[107.36,"="],75.52],["MDG","Madagascar",17.59,[20220620,0,1,0,0,0,0,0,1,3],[0.21,"="],4.22],["CUB","Cuba",18.52,[20220621,1,1,0,0,0,0,0,0,2],[0.35,"-"],88.14],["LUX","Luxembourg",19.44,[20220704,0,0,0,0,0,0,0,3,0],[126.86,"="],72.83],["NLD","Netherlands",19.44,[20220622,0,0,0,0,0,0,0,3,0],[34.25,"="],69.76],["CPV","Cape Verde",19.44,[20220706,0,0,0,0,0,0,1,1,2],[16.75,"-"],54.73],["KIR","Kiribati",20.37,[20220704,3,0,0,0,0,0,0,0,4],[0.0,"="],49.98],["KHM","Cambodia",20.37,[20220704,1,0,0,0,0,0,0,2,2],[0.05,"+"],84.84],["CAF","Central African Republic",20.37,[20220704,0,0,0,0,0,1,0,2,3],[0.08,"="],21.72],["JOR","Jordan",20.37,[20220613,0,1,0,2,0,0,0,0,0],[1.86,"="],44.2],["SUR","Suriname",21.3,[20220704,1,1,0,0,0,0,0,1,2],[0.63,"="],40.2],["AGO","Angola",22.22,[20220704,0,0,1,0,0,0,0,2,2],[0.0,"="],21.0],["BMU","Bermuda",22.22,[20220606,0,0,0,0,0,0,0,4,2],[54.82,"="],76.75],["CMR","Cameroon",22.22,[20220704,0,0,0,3,0,0,0,1,3],[0.0,"="],4.47],["ITA","Italy",22.22,[20220704,1,2,0,0,0,0,0,0,2],[156.41,"+"],79.43],["BTN","Bhutan",22.22,[20220627,0,0,1,0,0,0,0,2,4],[1.76,"="],86.24],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.99,"+"],28.67],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[198.79,"="],78.51],["NAM","Namibia",23.15,[20220704,0,1,1,2,0,0,0,1,1],[0.28,"="],16.49],["BEL","Belgium",23.15,[20220708,0,1,0,0,0,0,0,3,2],[60.15,"="],78.68],["BOL","Bolivia",23.15,[20220630,2,1,0,0,0,0,0,1,-1],[16.96,"+"],50.74],["GRC","Greece",24.07,[20220620,1,1,1,0,0,0,0,0,2],[166.7,"+"],73.58],["FIN","Finland",24.07,[20220708,1,1,0,0,1,0,0,0,1],[33.2,"="],78.13],["ETH","Ethiopia",25.0,[20220704,0,0,0,3,0,0,0,2,3],[0.13,"-"],32.16],["VNM","Vietnam",25.93,[20220615,0,1,1,2,0,0,0,0,3],[0.91,"+"],82.88],["RUS","Russia",25.93,[20220627,0,1,0,0,1,1,0,3,2],[2.14,"+"],51.19],["ABW","Aruba",25.93,[20220704,0,1,1,2,0,0,0,0,2],[97.68,"="],77.4],["CAN","Canada",25.93,[20220704,0,0,0,0,0,1,0,4,2],[8.36,"+"],82.65],["COL","Colombia",25.93,[20220610,1,1,2,0,0,0,0,1,3],[6.64,"="],70.57],["BIH","Bosnia and Herzegovina",25.93,[20220704,1,0,1,2,0,0,0,0,2],[3.34,"="],25.93],["SEN","Senegal",26.85,[20220704,1,1,1,0,0,0,0,1,3],[0.11,"+"],6.23],["SYR","Syria",26.85,[20220620,1,1,1,0,0,0,0,1,2],[0.02,"="],10.02],["BRB","Barbados",26.85,[20220704,1,1,1,0,0,0,0,1,3],[58.26,"+"],53.41],["TWN","Taiwan",26.85,[20220707,1,1,0,0,0,0,0,3,3],[129.76,"-"],82.5],["NZL","New Zealand",26.85,[20220704,0,2,0,0,0,0,0,3,2],[213.54,"+"],80.32],["LKA","Sri Lanka",28.7,[20220627,0,0,1,1,0,1,0,2,3],[0.07,"+"],67.62],["PAN","Panama",28.7,[20220701,1,0,2,0,0,0,0,1,2],[32.18,"="],71.19],["UGA","Uganda",28.7,[20220624,0,1,0,2,2,0,0,1,3],[0.13,"="],23.65],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.23,"-"],43.83],["ESP","Spain",29.17,[20220627,0,2,1,3,0,0,0,1,2],[47.49,"="],86.8],["GUY","Guyana",29.63,[20220630,1,1,0,0,0,0,0,4,1],[10.37,"+"],58.25],["THA","Thailand",30.09,[20220629,0,2,1,2,0,1,0,1,3],[3.06,"+"],75.76],["COD","Democratic Republic of Congo",31.48,[20220703,0,1,1,0,0,0,1,2,3],[0.0,"="],2.46],["IND","India",31.48,[20220705,0,1,0,0,0,2,2,1,3],[1.24,"+"],65.97],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[19.68,"="],34.16],["COG","Congo",32.41,[20220613,0,2,1,2,0,0,0,1,3],[0.76,"="],11.53],["DMA","Dominica",32.41,[20220704,1,1,1,2,0,0,0,1,3],[0.0,"="],42.22],["LSO","Lesotho",32.41,[20220627,0,2,2,2,0,0,0,1,4],[0.0,"="],40.19],["IRQ","Iraq",32.41,[20220704,0,2,2,1,0,0,0,4,2],[10.37,"+"],18.48],["KGZ","Kyrgyz Republic",33.33,[20220627,0,0,2,4,0,0,0,0,2],[0.17,"="],19.97],["TKM","Turkmenistan",33.33,[20220709,0,0,0,0,0,0,2,4,3],[],47.73],["PNG","Papua New Guinea",34.26,[20220704,0,1,1,3,0,0,0,4,2],[0.03,"="],3.05],["HND","Honduras",34.26,[20220630,0,2,1,0,0,2,0,1,3],[2.44,"="],53.82],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.21,"="],1.36],["BGD","Bangladesh",34.26,[20220621,2,1,1,0,0,1,0,1,4],[1.06,"-"],71.99],["ARE","United Arab Emirates",35.19,[20220704,1,1,2,0,0,0,0,2,3],[17.28,"-"],98.01],["AUT","Austria",35.19,[20220704,2,2,1,2,0,0,0,0,2],[112.42,"="],73.26],["AZE","Azerbaijan",36.11,[20220701,0,0,2,2,1,0,0,1,0],[0.07,"-"],47.48],["SYC","Seychelles",37.04,[20220620,1,0,2,3,0,0,0,1,3],[22.22,"="],81.62],["RKS","Kosovo",37.04,[20220623,2,2,2,0,0,0,0,0,1],[11.94,"-"],46.23],["GTM","Guatemala",37.5,[20220611,2,1,1,3,0,0,0,1,4],[20.89,"+"],34.85],["TGO","Togo",37.96,[20220704,1,1,1,3,0,2,0,2,3],[0.18,"="],18.37],["SLV","El Salvador",37.96,[20220704,1,1,2,1,1,0,0,0,2],[24.94,"="],66.31],["MUS","Mauritius",37.96,[20220612,0,2,1,3,0,0,0,2,3],[0.0,"="],74.26],["PHL","Philippines",37.96,[20220625,1,2,1,0,1,0,0,4,4],[1.25,"+"],63.8],["USA","United States",38.89,[20220707,2,2,0,0,1,0,1,4,2],[31.39,"+"],67.0],["BRA","Brazil",39.81,[20220625,2,1,1,0,1,1,1,4,2],[27.06,"+"],79.16],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[8.58,"="],82.46],["JPN","Japan",39.81,[20220705,1,1,1,1,0,1,1,2,1],[31.05,"+"],81.23],["SOM","Somalia",40.74,[20220627,0,2,2,1,0,2,0,1,3],[0.06,"="],10.04],["QAT","Qatar",40.74,[20220707,1,1,2,0,1,0,0,2,2],[22.68,"+"],90.31],["EGY","Egypt",40.74,[20220620,1,1,2,3,0,0,0,1,3],[0.0,"="],35.77],["NGA","Nigeria",40.74,[20220628,0,0,1,3,0,2,1,2,3],[0.06,"+"],9.93],["SGP","Singapore",41.67,[20220702,1,1,1,2,0,1,0,3,2],[153.29,"+"],91.65],["BLZ","Belize",42.59,[20220704,2,2,1,0,1,0,1,1,2],[29.1,"="],53.5],["ZWE","Zimbabwe",42.59,[20220708,1,1,1,3,0,2,0,1,3],[0.32,"+"],30.73],["SLB","Solomon Islands",42.59,[20220624,2,2,0,0,2,0,0,4,2],[0.0,"="],25.28],["VIR","United States Virgin Islands",43.52,[20220703,0,1,1,3,0,1,0,4,2],[]],["MRT","Mauritania",43.52,[20220704,1,1,2,4,0,0,0,1,3],[2.76,"-"],27.94],["TON","Tonga",44.44,[20220705,0,1,0,0,0,2,2,4,4],[10.95,"="],91.0],["BHS","Bahamas",44.44,[20220606,1,1,1,3,1,1,0,1,3],[9.12,"+"],39.8],["KEN","Kenya",45.37,[20220704,0,1,2,3,0,0,0,4,1],[0.4,"-"],16.96],["NPL","Nepal",46.3,[20220704,0,1,2,1,1,1,1,1,4],[0.22,"+"],68.61],["DZA","Algeria",47.22,[20220606,1,2,1,4,1,0,0,1,3],[0.04,"="],15.36],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.11,"-"],8.09],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[16.86,"="],53.42],["MYS","Malaysia",47.22,[20220703,1,1,1,1,1,1,1,2,2],[9.43,"+"],83.35],["SLE","Sierra Leone",48.15,[20220704,2,2,2,0,1,0,0,2,3],[0.03,"="],23.26],["LBR","Liberia",48.15,[20220620,1,3,2,0,0,0,0,4,4],[0.01,"="],41.11],["GIN","Guinea",49.07,[20220704,1,1,1,4,0,0,2,1,3],[0.26,"="],19.56],["DJI","Djibouti",49.07,[20220613,1,1,2,4,1,0,0,1,3],[0.0,"="],16.07],["CHL","Chile",49.54,[20220706,1,1,2,2,0,0,2,3,4],[46.06,"-"],91.57],["LBY","Libya",50.0,[20220620,1,2,2,4,0,0,0,2,3],[0.11,"="],17.01],["LBN","Lebanon",50.0,[20220510,2,2,1,1,1,2,0,1,4],[13.06,"-"],35.08],["ERI","Eritrea",50.93,[20220709,1,1,1,3,1,2,0,2,4],[0.09,"+"]],["PER","Peru",50.93,[20220701,1,3,2,0,1,0,1,1,3],[14.79,"+"],82.88],["MMR","Myanmar",51.85,[20220622,1,1,0,0,1,2,2,4,4],[0.02,"="],49.31],["GHA","Ghana",51.85,[20220628,0,2,2,4,0,0,0,4,1],[0.31,"="],22.67],["IDN","Indonesia",52.78,[20220627,1,2,2,1,0,0,2,2,2],[0.86,"+"],60.99],["HKG","Hong Kong",52.78,[20220707,1,2,2,4,0,0,0,3,3],[33.77,"+"],85.51],["IRN","Iran",56.94,[20220705,3,2,2,4,0,0,2,1,2],[1.49,"+"],68.05],["FJI","Fiji",57.41,[20220704,0,2,2,0,2,0,2,3,1],[6.58,"="],70.36],["LAO","Laos",57.87,[20220625,2,2,1,4,1,2,1,1,3],[0.08,"-"],68.8],["MAR","Morocco",58.33,[20220704,1,2,2,4,2,0,0,1,2],[6.68,"-"],62.76],["ECU","Ecuador",65.74,[20220704,0,2,2,4,2,0,2,1,2],[6.96,"="],78.35],["RWA","Rwanda",66.67,[20220627,0,3,2,4,2,0,2,1,1],[0.53,"="],65.21],["VUT","Vanuatu",68.06,[20220625,3,3,2,4,1,1,1,4,4],[16.0,"+"],40.26],["MAC","Macao",73.15,[20220701,3,2,2,4,0,2,1,3,3],[],89.11],["UKR","Ukraine",75.0,[20220704,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["MLI","Mali",76.85,[20220705,3,1,2,3,1,1,2,4,4],[0.01,"="],6.25],["PAK","Pakistan",77.78,[20220529,3,2,2,1,2,1,2,3,4],[0.29,"-"],56.82],["CHN","China",79.17,[20220630,3,3,2,4,2,3,2,2,4],[0.03,"="],87.38],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[53.07,"+"],45.19]];