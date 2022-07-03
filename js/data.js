const dataUpdate="2022.07.03";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",0.0,[20220608,0,0,0,0,0,0,0,0,2],[10.04,"="],65.35],["LBN","Lebanon",2.78,[20220618,0,0,0,0,0,0,0,1,-1],[15.09,"+"],35.08],["NER","Niger",5.56,[20220628,0,0,0,0,0,0,0,2,3],[0.0,"="],6.19],["DOM","Dominican Republic",5.56,[20220628,0,0,0,0,0,0,0,0,0],[10.23,"="],54.78],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[74.51,"="],69.11],["TJK","Tajikistan",8.33,[20220608,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["BFA","Burkina Faso",8.33,[20220701,0,0,0,0,0,0,0,1,3],[0.0,"="],7.23],["TZA","Tanzania",8.33,[20220630,0,0,0,0,0,0,0,1,0],[0.1,"="],6.63],["BLR","Belarus",9.26,[20220701,0,1,0,0,0,0,0,2,-1],[0.0,"="],66.99],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[4.52,"+"],23.89],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[6.62,"-"],50.8],["LTU","Lithuania",11.11,[20220702,0,0,0,0,0,0,0,0,1],[13.69,"+"],69.77],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[0.0,"="],80.62],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[9.15,"+"],47.71],["DNK","Denmark",11.11,[20220623,0,0,0,0,0,0,0,0,0],[30.6,"="],82.46],["KWT","Kuwait",11.11,[20220626,0,0,0,0,0,0,0,0,1],[8.25,"-"],76.75],["ALB","Albania",11.11,[20220531,0,0,0,0,0,0,0,0,2],[16.62,"+"],43.47],["ROU","Romania",11.11,[20220630,0,0,0,0,0,0,0,0,1],[2.95,"="],42.42],["EST","Estonia",11.11,[20220625,0,0,0,0,0,0,0,0,1],[8.59,"="],63.97],["FRO","Faeroe Islands",11.11,[20220621,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[0.74,"="],11.24],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[37.52,"="],58.8],["GBR","United Kingdom",11.11,[20220622,0,0,0,0,0,0,0,0,1],[32.48,"-"],73.49],["NOR","Norway",11.11,[20220622,0,0,0,0,0,0,0,0,1],[10.73,"-"],74.05],["GRL","Greenland",11.11,[20220627,0,0,0,0,0,0,0,0,1],[0.0,"="],67.7],["AFG","Afghanistan",11.11,[20220613,0,2,1,0,1,0,0,0,3],[0.21,"="],12.71],["KAZ","Kazakhstan",11.11,[20220611,0,0,0,0,0,0,0,0,1],[0.49,"-"],49.01],["HUN","Hungary",11.11,[20220627,0,0,0,0,0,0,0,0,2],[4.5,"="],64.34],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[38.27,"="],81.13],["MDA","Moldova",11.11,[20220605,0,0,0,0,0,0,0,0,1],[2.05,"="],26.43],["ISL","Iceland",11.11,[20220620,0,0,0,0,0,0,0,0,0],[94.95,"="],78.69],["LVA","Latvia",11.11,[20220617,0,0,0,0,0,0,0,0,2],[25.56,"="],69.93],["SWE","Sweden",11.11,[20220616,0,0,0,0,0,0,0,0,0],[4.85,"="],75.31],["SAU","Saudi Arabia",11.11,[20220627,0,0,0,0,0,0,0,0,2],[3.27,"+"],70.97],["TTO","Trinidad and Tobago",11.11,[20220701,0,0,0,0,0,0,0,0,3],[7.74,"+"],50.89],["ZAF","South Africa",11.11,[20220627,0,0,0,0,0,0,0,0,0],[0.55,"-"],31.76],["CHE","Switzerland",11.11,[20220629,0,0,0,0,0,0,0,0,0],[54.66,"="],68.87],["BGR","Bulgaria",11.11,[20220702,0,0,0,0,0,0,0,0,0],[6.42,"+"],29.9],["UZB","Uzbekistan",11.11,[20220702,0,0,0,0,0,0,0,0,1],[0.32,"-"],45.89],["ZMB","Zambia",12.04,[20220613,0,1,0,0,0,0,0,1,3],[0.58,"="],23.93],["PRT","Portugal",13.89,[20220613,0,0,0,0,0,0,0,1,2],[70.42,"="],87.38],["TUR","Turkey",13.89,[20220620,0,0,0,0,0,0,0,1,2],[6.37,"="],62.43],["URY","Uruguay",13.89,[20220620,0,0,0,0,0,0,0,1,1],[23.36,"="],82.85],["GEO","Georgia",13.89,[20220530,0,0,0,0,0,0,0,1,2],[3.79,"="],31.93],["GMB","Gambia",13.89,[20220605,0,0,0,0,0,0,0,1,3],[0.0,"="],14.25],["PRY","Paraguay",13.89,[20220624,0,0,0,0,0,0,0,1,1],[0.0,"="],47.96],["BEN","Benin",13.89,[20220610,0,0,0,0,0,0,0,1,2],[0.11,"="],21.61],["BDI","Burundi",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.19,"="],0.12],["VEN","Venezuela",13.89,[20220627,0,0,0,0,0,0,0,1,4],[0.49,"+"],49.77],["AUS","Australia",13.89,[20220617,0,0,0,0,0,0,0,1,2],[125.95,"+"],84.04],["NIC","Nicaragua",13.89,[20220628,0,0,0,0,0,0,0,1,0],[0.15,"="],82.11],["MLT","Malta",13.89,[20220621,0,0,0,0,0,0,0,1,2],[123.75,"+"],91.04],["KOR","South Korea",13.89,[20220627,0,0,0,0,0,0,0,1,3],[17.72,"+"],86.99],["BWA","Botswana",13.89,[20220703,0,0,0,0,0,0,0,1,2],[25.76,"="],63.1],["SMR","San Marino",13.89,[20220627,0,0,0,0,0,0,0,1,3],[157.04,"="],69.49],["SDN","Sudan",13.89,[20220617,0,0,0,0,0,0,0,1,0],[0.02,"="],10.1],["HRV","Croatia",14.81,[20220628,0,1,0,0,0,0,0,0,2],[19.49,"-"],55.01],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[8.51,"+"],64.15],["OMN","Oman",14.81,[20220627,1,0,0,0,0,0,0,0,0],[0.0,"="],58.19],["POL","Poland",14.81,[20220624,1,0,0,0,0,0,0,0,2],[1.23,"+"],59.57],["LIE","Liechtenstein",14.81,[20220530,0,1,0,0,0,0,0,0,1],[45.34,"="],69.09],["ISR","Israel",14.81,[20220627,1,0,0,0,0,0,0,0,2],[124.32,"+"],66.14],["CIV","Cote d'Ivoire",15.74,[20220628,0,1,0,0,0,0,0,1,3],[0.35,"+"],20.48],["TCD","Chad",15.74,[20220629,1,1,0,0,0,0,0,1,3],[0.0,"="],12.38],["KHM","Cambodia",16.67,[20220619,0,0,0,0,0,0,0,2,2],[0.02,"="],84.74],["BRN","Brunei",16.67,[20220626,0,0,0,0,0,0,0,2,2],[167.71,"="],96.66],["SSD","South Sudan",16.67,[20220626,0,0,0,0,0,0,0,2,2],[0.03,"="],9.86],["TLS","Timor-Leste",16.67,[20220613,0,0,0,0,0,0,0,2,3],[0.09,"-"],51.69],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],33.94],["MDG","Madagascar",17.59,[20220620,0,1,0,0,0,0,0,1,3],[0.19,"="],4.22],["DEU","Germany",17.59,[20220620,0,0,0,0,0,1,0,1,2],[105.97,"="],75.51],["MEX","Mexico",17.59,[20220620,1,0,0,0,0,0,0,1,2],[11.3,"-"],61.37],["MCO","Monaco",17.59,[20220606,0,1,0,0,0,0,0,1,2],[106.3,"+"],64.95],["BHR","Bahrain",17.59,[20220627,1,0,0,0,0,0,0,1,2],[102.05,"-"],69.96],["CUB","Cuba",18.52,[20220621,1,1,0,0,0,0,0,0,2],[0.24,"+"],88.14],["CAF","Central African Republic",18.52,[20220627,0,0,0,0,0,2,0,2,3],[0.0,"="],21.72],["CPV","Cape Verde",19.44,[20220627,0,0,0,0,0,0,1,1,2],[43.04,"+"],54.73],["LUX","Luxembourg",19.44,[20220628,0,0,0,0,0,0,0,3,0],[139.3,"="],72.83],["NLD","Netherlands",19.44,[20220622,0,0,0,0,0,0,0,3,0],[31.44,"="],69.76],["JOR","Jordan",20.37,[20220613,0,1,0,2,0,0,0,0,0],[1.23,"="],44.2],["ITA","Italy",22.22,[20220611,1,2,0,0,0,0,0,0,2],[120.75,"+"],79.43],["CMR","Cameroon",22.22,[20220627,0,0,0,3,0,0,0,1,3],[0.04,"="],4.47],["AGO","Angola",22.22,[20220627,0,0,1,0,0,0,0,2,2],[0.68,"="],20.07],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["BTN","Bhutan",22.22,[20220627,0,0,1,0,0,0,0,2,4],[1.02,"="],86.24],["BMU","Bermuda",22.22,[20220606,0,0,0,0,0,0,0,4,2],[47.02,"="],76.75],["NAM","Namibia",23.15,[20220621,0,1,1,2,0,0,0,1,3],[0.71,"-"],16.49],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[152.37,"="],78.47],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[0.76,"="],28.67],["BEL","Belgium",23.15,[20220623,0,1,0,0,0,0,0,3,2],[42.61,"="],78.67],["BOL","Bolivia",23.15,[20220630,2,1,0,0,0,0,0,1,-1],[9.61,"-"],50.74],["GRC","Greece",24.07,[20220620,1,1,1,0,0,0,0,0,2],[137.92,"+"],73.57],["VNM","Vietnam",25.93,[20220615,0,1,1,2,0,0,0,0,3],[0.77,"+"],82.73],["YEM","Yemen",25.93,[20220611,0,1,1,0,0,2,0,2,1],[0.0,"="],1.46],["RUS","Russia",25.93,[20220627,0,1,0,0,1,1,0,3,2],[2.01,"+"],51.18],["ABW","Aruba",25.93,[20220627,0,1,1,2,0,0,0,0,2],[16.46,"-"],77.3],["COL","Colombia",25.93,[20220610,1,1,2,0,0,0,0,1,3],[6.69,"="],70.57],["CAN","Canada",25.93,[20220627,0,0,0,0,0,1,0,4,2],[6.21,"+"],82.61],["BIH","Bosnia and Herzegovina",25.93,[20220615,1,0,1,2,0,0,0,0,2],[1.67,"="],25.93],["SYR","Syria",26.85,[20220620,1,1,1,0,0,0,0,1,2],[0.01,"="],10.02],["NZL","New Zealand",26.85,[20220620,0,2,0,0,0,0,0,3,2],[146.59,"+"],80.27],["CYP","Cyprus",26.85,[20220606,1,1,0,0,1,0,0,1,1],[128.72,"="],72.0],["SEN","Senegal",26.85,[20220627,1,1,1,0,0,0,0,1,3],[0.06,"="],6.11],["FIN","Finland",26.85,[20220623,1,1,0,0,1,0,0,1,1],[30.97,"="],78.12],["TWN","Taiwan",26.85,[20220701,1,1,0,0,0,0,0,3,3],[158.44,"-"],81.65],["CHL","Chile",27.31,[20220701,1,1,1,2,0,0,0,2,3],[49.24,"-"],91.51],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.23,"="],43.83],["LKA","Sri Lanka",28.7,[20220627,0,0,1,1,0,1,0,2,3],[0.06,"="],67.56],["COD","Democratic Republic of Congo",28.7,[20220614,0,1,1,0,0,0,1,1,3],[0.05,"="],2.46],["UGA","Uganda",28.7,[20220624,0,1,0,2,2,0,0,1,3],[0.16,"="],23.27],["TGO","Togo",29.17,[20220626,0,0,1,3,0,2,0,2,3],[0.21,"-"],18.37],["ESP","Spain",29.17,[20220627,0,2,1,3,0,0,0,1,2],[41.67,"="],86.77],["SUR","Suriname",29.63,[20220608,1,1,0,0,0,0,0,4,2],[1.14,"="],40.2],["GUY","Guyana",29.63,[20220619,1,1,0,0,0,0,0,4,1],[9.68,"+"],58.22],["THA","Thailand",30.09,[20220629,0,2,1,2,0,1,0,1,3],[3.26,"-"],75.64],["ETH","Ethiopia",30.56,[20220621,0,0,1,3,0,0,0,2,3],[0.25,"-"],21.97],["PRI","Puerto Rico",30.56,[20220620,0,0,2,0,0,0,-1,3,2],[]],["PAN","Panama",30.56,[20220613,0,0,2,2,-1,0,0,1,2],[29.99,"-"],71.15],["TKM","Turkmenistan",31.48,[20220626,0,1,0,0,0,0,2,4,3],[],47.73],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[13.46,"-"],34.12],["LSO","Lesotho",32.41,[20220627,0,2,2,2,0,0,0,1,4],[0.0,"="],34.07],["COG","Congo",32.41,[20220613,0,2,1,2,0,0,0,1,3],[0.0,"="],11.53],["DMA","Dominica",32.41,[20220613,1,1,1,2,0,0,0,1,3],[6.15,"="],42.22],["KGZ","Kyrgyz Republic",33.33,[20220627,0,0,2,4,0,0,0,0,2],[0.06,"="],19.94],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.38,"-"],1.36],["HND","Honduras",34.26,[20220630,0,2,1,0,0,2,0,1,3],[1.77,"="],53.44],["BGD","Bangladesh",34.26,[20220621,2,1,1,0,0,1,0,1,4],[1.15,"-"],71.85],["ARE","United Arab Emirates",35.19,[20220627,1,1,2,0,0,0,0,2,2],[17.83,"+"],98.01],["IRQ","Iraq",35.19,[20220617,0,2,2,1,0,0,0,1,3],[5.61,"+"],18.48],["AUT","Austria",35.19,[20220627,2,2,1,2,0,0,0,0,2],[111.96,"="],73.26],["KEN","Kenya",35.19,[20220606,0,1,1,3,0,1,0,1,1],[0.61,"-"],16.96],["AZE","Azerbaijan",36.11,[20220701,0,0,2,2,1,0,0,1,0],[0.27,"-"],47.48],["IND","India",37.04,[20220604,0,1,1,0,0,2,2,1,3],[1.16,"+"],65.72],["RKS","Kosovo",37.04,[20220623,2,2,2,0,0,0,0,0,1],[7.2,"+"],46.22],["SYC","Seychelles",37.04,[20220620,1,0,2,3,0,0,0,1,3],[25.86,"="],81.62],["GTM","Guatemala",37.5,[20220611,2,1,1,3,0,0,0,1,4],[18.07,"+"],34.76],["PHL","Philippines",37.96,[20220625,1,2,1,0,1,0,0,4,4],[0.9,"+"],63.52],["MUS","Mauritius",37.96,[20220612,0,2,1,3,0,0,0,2,3],[17.49,"="],74.21],["SLV","El Salvador",37.96,[20220606,1,1,2,1,1,0,0,0,4],[0.0,"="],66.27],["USA","United States",38.89,[20220611,2,2,0,0,1,0,1,4,2],[35.14,"-"],66.95],["ZWE","Zimbabwe",38.89,[20220701,0,1,1,3,0,2,0,1,3],[0.27,"="],30.64],["BRA","Brazil",39.81,[20220625,2,1,1,0,1,1,1,4,2],[30.15,"+"],79.02],["KIR","Kiribati",39.81,[20220613,3,0,0,0,0,2,2,2,4],[0.0,"="],49.98],["JPN","Japan",39.81,[20220627,1,1,1,1,0,1,1,2,1],[15.56,"+"],81.2],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[8.12,"="],82.4],["PNG","Papua New Guinea",39.81,[20220624,0,1,1,3,0,0,0,4,2],[0.04,"="],3.05],["NGA","Nigeria",40.74,[20220628,0,0,1,3,0,2,1,2,3],[0.05,"+"],9.93],["MLI","Mali",40.74,[20220619,0,2,2,3,0,0,0,1,3],[0.01,"="],6.25],["EGY","Egypt",40.74,[20220620,1,1,2,3,0,0,0,1,3],[0.0,"="],35.77],["QAT","Qatar",40.74,[20220620,1,1,2,0,1,0,0,2,2],[22.46,"+"],90.31],["BRB","Barbados",40.74,[20220625,1,1,2,3,0,0,0,1,3],[52.0,"+"],53.36],["SOM","Somalia",40.74,[20220627,0,2,2,1,0,2,0,1,3],[0.05,"="],10.04],["SGP","Singapore",41.67,[20220702,1,1,1,2,0,1,0,3,2],[141.3,"+"],91.63],["SLB","Solomon Islands",42.59,[20220624,2,2,0,0,2,0,0,4,2],[0.0,"="],25.28],["BLZ","Belize",42.59,[20220627,2,2,1,0,1,0,1,1,2],[39.56,"="],52.65],["MRT","Mauritania",43.52,[20220621,1,1,2,4,0,0,0,1,3],[2.15,"+"],27.91],["VIR","United States Virgin Islands",43.52,[20220626,0,1,1,3,0,1,0,4,2],[]],["TON","Tonga",44.44,[20220627,0,1,0,0,0,2,2,4,4],[30.01,"="],91.0],["BHS","Bahamas",44.44,[20220606,1,1,1,3,1,1,0,1,3],[6.54,"+"],39.8],["NPL","Nepal",46.3,[20220627,0,1,2,1,1,1,1,1,4],[0.12,"="],68.3],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[6.62,"="],53.42],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.16,"+"],8.09],["DZA","Algeria",47.22,[20220606,1,2,1,4,1,0,0,1,3],[0.03,"="],15.36],["LBR","Liberia",48.15,[20220620,1,3,2,0,0,0,0,4,4],[0.01,"="],27.76],["SLE","Sierra Leone",48.15,[20220627,2,2,2,0,1,0,0,2,3],[0.02,"+"],20.38],["DJI","Djibouti",49.07,[20220613,1,1,2,4,1,0,0,1,3],[0.0,"="],16.07],["GIN","Guinea",49.07,[20220621,1,1,1,4,0,0,2,1,3],[0.33,"="],19.44],["LBY","Libya",50.0,[20220620,1,2,2,4,0,0,0,2,3],[0.06,"="],17.01],["MYS","Malaysia",50.0,[20220618,1,1,1,1,1,1,2,2,2],[7.37,"+"],83.25],["PER","Peru",50.93,[20220701,1,3,2,0,1,0,1,1,3],[9.3,"+"],82.71],["ERI","Eritrea",50.93,[20220628,1,1,1,3,1,2,0,2,3],[0.05,"="]],["GHA","Ghana",51.85,[20220628,0,2,2,4,0,0,0,4,1],[0.59,"="],22.34],["MMR","Myanmar",51.85,[20220622,1,1,0,0,1,2,2,4,4],[0.02,"="],49.31],["HKG","Hong Kong",52.78,[20220625,1,2,2,4,0,0,0,3,3],[27.41,"+"],85.29],["IDN","Indonesia",52.78,[20220627,1,2,2,1,0,0,2,2,2],[0.71,"="],60.88],["FJI","Fiji",57.41,[20220616,0,2,2,0,2,0,2,3,1],[3.95,"="],70.35],["LAO","Laos",57.87,[20220625,2,2,1,4,1,2,1,1,3],[0.13,"="],68.8],["IRN","Iran",58.33,[20220625,3,2,2,4,0,0,2,1,2],[0.47,"+"],68.05],["MAR","Morocco",58.33,[20220627,1,2,2,4,2,0,0,1,3],[8.18,"+"],62.76],["ECU","Ecuador",65.74,[20220627,0,2,2,4,2,0,2,1,2],[6.59,"-"],78.35],["RWA","Rwanda",66.67,[20220627,0,3,2,4,2,0,2,1,1],[0.4,"+"],64.46],["VUT","Vanuatu",68.06,[20220625,3,3,2,4,1,1,1,4,4],[10.65,"="],40.26],["MAC","Macao",73.15,[20220701,3,2,2,4,0,2,1,3,3],[],89.03],["UKR","Ukraine",75.0,[20220524,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["PAK","Pakistan",77.78,[20220529,3,2,2,1,2,1,2,3,4],[0.29,"+"],56.4],["CHN","China",79.17,[20220630,3,3,2,4,2,3,2,2,4],[0.01,"="],87.28],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[33.03,"+"],45.18]];