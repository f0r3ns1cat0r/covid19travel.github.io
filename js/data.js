const dataUpdate="2022.06.21";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",0.0,[20220608,0,0,0,0,0,0,0,0,2],[0.0,"-"],65.35],["LBN","Lebanon",2.78,[20220618,0,0,0,0,0,0,0,1,-1],[5.16,"+"],35.01],["DOM","Dominican Republic",5.56,[20220601,0,0,0,0,0,0,0,0,0],[7.24,"+"],54.7],["AND","Andorra",8.33,[20220619,0,0,0,0,0,0,0,0,0],[41.6,"="],69.1],["TJK","Tajikistan",8.33,[20220608,0,0,0,0,0,0,0,1,0],[0.0,"="],51.05],["KAZ","Kazakhstan",11.11,[20220611,0,0,0,0,0,0,0,0,1],[0.11,"+"],48.95],["DNK","Denmark",11.11,[20220604,0,0,0,0,0,0,0,0,0],[19.76,"+"],82.49],["SVN","Slovenia",11.11,[20220619,0,0,0,0,0,0,0,0,2],[19.52,"+"],58.79],["NOR","Norway",11.11,[20220525,0,0,0,0,0,0,0,0,1],[8.36,"+"],74.0],["SVK","Slovak Republic",11.11,[20220619,0,0,0,0,0,0,0,0,0],[3.99,"+"],50.8],["FRO","Faeroe Islands",11.11,[20220527,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["GAB","Gabon",11.11,[20220616,0,0,0,0,0,0,0,0,2],[0.2,"="],11.24],["GBR","United Kingdom",11.11,[20220606,0,0,0,0,0,0,0,0,1],[21.27,"+"],73.41],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[3.77,"+"],47.7],["ROU","Romania",11.11,[20220620,0,0,0,0,0,0,0,0,1],[1.94,"+"],42.42],["CRI","Costa Rica",11.11,[20220620,0,0,0,0,0,0,0,0,1],[0.0,"="],80.62],["BGR","Bulgaria",11.11,[20220620,0,0,0,0,0,0,0,0,0],[2.8,"+"],29.88],["MDA","Moldova",11.11,[20220605,0,0,0,0,0,0,0,0,1],[0.77,"-"],26.43],["LVA","Latvia",11.11,[20220617,0,0,0,0,0,0,0,0,2],[11.13,"+"],69.92],["HRV","Croatia",11.11,[20220613,0,0,0,0,0,0,0,0,4],[7.35,"+"],54.99],["LTU","Lithuania",11.11,[20220531,0,0,0,0,0,0,0,0,1],[5.89,"-"],69.76],["HUN","Hungary",11.11,[20220523,0,0,0,0,0,0,0,0,2],[2.42,"="],64.33],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[22.47,"="],81.07],["KWT","Kuwait",11.11,[20220606,0,0,0,0,0,0,0,0,1],[10.2,"+"],76.62],["ISL","Iceland",11.11,[20220620,0,0,0,0,0,0,0,0,0],[44.58,"="],78.69],["ALB","Albania",11.11,[20220531,0,0,0,0,0,0,0,0,2],[3.54,"+"],43.31],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[5.07,"+"],23.72],["AFG","Afghanistan",11.11,[20220613,0,2,1,0,1,0,0,0,3],[0.22,"-"],12.36],["SWE","Sweden",11.11,[20220616,0,0,0,0,0,0,0,0,0],[2.72,"="],75.29],["CHE","Switzerland",11.11,[20220613,0,0,0,0,0,0,0,0,0],[27.42,"="],68.85],["ZMB","Zambia",12.04,[20220613,0,1,0,0,0,0,0,1,3],[0.82,"-"],22.01],["GEO","Georgia",13.89,[20220530,0,0,0,0,0,0,0,1,2],[1.84,"="],31.89],["NIC","Nicaragua",13.89,[20220523,0,0,0,0,0,0,0,1,0],[0.09,"="],78.67],["MLT","Malta",13.89,[20220621,0,0,0,0,0,0,0,1,2],[58.72,"+"],90.99],["GMB","Gambia",13.89,[20220605,0,0,0,0,0,0,0,1,3],[0.0,"="],14.25],["PRT","Portugal",13.89,[20220613,0,0,0,0,0,0,0,1,2],[203.74,"+"],87.28],["SDN","Sudan",13.89,[20220617,0,0,0,0,0,0,0,1,0],[0.01,"="],8.33],["KOR","South Korea",13.89,[20220619,0,0,0,0,0,0,0,1,3],[14.02,"-"],86.97],["TZA","Tanzania",13.89,[20220609,0,0,0,0,0,0,0,1,0],[0.0,"="],6.37],["BFA","Burkina Faso",13.89,[20220606,0,0,0,0,0,0,0,1,3],[0.1,"="],7.23],["BEN","Benin",13.89,[20220610,0,0,0,0,0,0,0,1,2],[0.2,"="],21.61],["BDI","Burundi",13.89,[20220620,0,0,0,0,0,0,0,1,2],[0.21,"+"],0.11],["TUR","Turkey",13.89,[20220620,0,0,0,0,0,0,0,1,2],[1.28,"="],62.42],["BWA","Botswana",13.89,[20220531,0,0,0,0,0,0,0,1,2],[23.15,"="],63.03],["URY","Uruguay",13.89,[20220620,0,0,0,0,0,0,0,1,1],[33.19,"-"],82.78],["AUS","Australia",13.89,[20220617,0,0,0,0,0,0,0,1,2],[108.78,"+"],83.95],["VEN","Venezuela",13.89,[20220620,0,0,0,0,0,0,0,1,4],[0.33,"+"],49.77],["UZB","Uzbekistan",13.89,[20220619,0,0,0,0,0,0,0,1,1],[0.19,"+"],45.14],["SMR","San Marino",13.89,[20220618,0,0,0,0,0,0,0,1,1],[159.15,"+"],69.49],["POL","Poland",14.81,[20220604,1,0,0,0,0,0,0,0,2],[0.45,"="],59.55],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[3.31,"+"],64.14],["LIE","Liechtenstein",14.81,[20220530,0,1,0,0,0,0,0,0,1],[29.22,"+"],69.08],["ISR","Israel",14.81,[20220620,1,0,0,0,0,0,0,0,2],[90.12,"+"],66.12],["BRN","Brunei",16.67,[20220620,0,0,0,0,0,0,0,2,2],[135.88,"+"],96.66],["KHM","Cambodia",16.67,[20220619,0,0,0,0,0,0,0,2,2],[0.0,"="],84.63],["CAF","Central African Republic",16.67,[20220620,0,0,1,0,0,0,0,2,3],[0.0,"="],21.23],["TLS","Timor-Leste",16.67,[20220613,0,0,0,0,0,0,0,2,3],[0.12,"-"],51.69],["BLR","Belarus",16.67,[20220524,0,0,0,0,0,0,0,2,1],[0.0,"="],66.42],["BTN","Bhutan",16.67,[20220611,0,0,1,0,0,0,0,0,4],[0.56,"+"],86.24],["PSE","Palestine",16.67,[20220616,0,0,0,0,0,0,0,2,4],[],33.91],["MCO","Monaco",17.59,[20220606,0,1,0,0,0,0,0,1,2],[37.13,"-"],64.95],["MDG","Madagascar",17.59,[20220620,0,1,0,0,0,0,0,1,3],[0.17,"="],4.22],["BHR","Bahrain",17.59,[20220607,1,0,0,0,0,0,0,1,2],[86.4,"+"],69.92],["DEU","Germany",17.59,[20220620,0,0,0,0,0,1,0,1,2],[71.6,"+"],76.92],["CIV","Cote d'Ivoire",17.59,[20220608,0,1,0,0,0,0,0,1,3],[0.14,"+"],20.48],["OMN","Oman",17.59,[20220613,1,0,0,0,0,0,0,1,0],[1.36,"+"],58.17],["MEX","Mexico",17.59,[20220620,1,0,0,0,0,0,0,1,2],[5.98,"+"],61.37],["CUB","Cuba",18.52,[20220527,1,1,0,0,0,0,0,0,2],[0.19,"+"],88.1],["CPV","Cape Verde",19.44,[20220613,0,0,0,0,0,0,1,1,2],[30.19,"+"],54.71],["NLD","Netherlands",19.44,[20220525,0,0,0,0,0,0,0,3,0],[20.66,"+"],69.76],["LUX","Luxembourg",19.44,[20220620,0,0,0,0,0,0,0,3,0],[82.07,"+"],72.8],["JOR","Jordan",20.37,[20220613,0,1,0,2,0,0,0,0,0],[1.46,"+"],44.09],["ITA","Italy",22.22,[20220611,1,2,0,0,0,0,0,0,2],[54.82,"+"],79.42],["CMR","Cameroon",22.22,[20220619,0,0,0,0,0,0,0,4,4],[0.0,"="],4.46],["BMU","Bermuda",22.22,[20220606,0,0,0,0,0,0,0,4,2],[76.61,"="],76.75],["GUM","Guam",22.22,[20220617,0,0,0,0,0,0,0,4,1],[]],["GRL","Greenland",22.22,[20220530,0,0,0,0,0,0,0,4,1],[0.0,"="],67.7],["SWZ","Eswatini",23.15,[20220620,0,1,1,0,0,0,0,1,4],[1.34,"-"],28.67],["NAM","Namibia",23.15,[20220605,0,1,1,2,0,0,0,1,1],[2.56,"-"],16.49],["BOL","Bolivia",23.15,[20220620,2,1,0,0,0,0,0,1,3],[3.94,"+"],50.55],["RUS","Russia",23.15,[20220613,0,1,0,0,0,1,0,3,2],[2.06,"-"],50.91],["UGA","Uganda",23.15,[20220606,0,1,0,2,1,0,0,1,1],[0.2,"-"],22.9],["FRA","France",23.15,[20220619,0,1,0,0,0,0,0,3,2],[95.11,"+"],78.42],["BEL","Belgium",23.15,[20220604,0,1,0,0,0,0,0,3,2],[24.54,"+"],78.65],["GRC","Greece",24.07,[20220620,1,1,1,0,0,0,0,0,2],[67.78,"+"],73.55],["EST","Estonia",24.07,[20220610,1,1,0,0,0,0,0,2,1],[9.04,"="],63.94],["VNM","Vietnam",25.93,[20220615,0,1,1,2,0,0,0,0,3],[0.84,"-"],81.27],["YEM","Yemen",25.93,[20220611,0,1,1,0,0,2,0,2,1],[0.0,"="],1.45],["ABW","Aruba",25.93,[20220620,0,1,1,2,0,0,0,0,2],[123.5,"="],77.16],["CAN","Canada",25.93,[20220620,0,0,0,0,0,1,0,4,2],[4.29,"+"],82.55],["BIH","Bosnia and Herzegovina",25.93,[20220615,1,0,1,2,0,0,0,0,2],[0.8,"+"],25.93],["COL","Colombia",25.93,[20220610,1,1,2,0,0,0,0,1,3],[3.88,"="],70.38],["CYP","Cyprus",26.85,[20220606,1,1,0,0,1,0,0,1,1],[41.06,"="],71.98],["SSD","South Sudan",26.85,[20220614,0,0,0,0,0,2,1,1,3],[0.07,"="],8.5],["PRY","Paraguay",26.85,[20220607,1,1,1,0,0,0,0,1,1],[2.77,"="],47.68],["NZL","New Zealand",26.85,[20220620,0,2,0,0,0,0,0,3,2],[102.6,"-"],80.19],["TWN","Taiwan",26.85,[20220619,1,1,0,0,0,0,0,3,3],[235.93,"-"],80.45],["TTO","Trinidad and Tobago",26.85,[20220612,1,1,1,0,0,0,0,1,3],[11.01,"-"],50.83],["SYR","Syria",26.85,[20220620,1,1,1,0,0,0,0,1,2],[0.01,"="],9.64],["SEN","Senegal",26.85,[20220613,1,1,1,0,0,0,0,1,3],[0.05,"+"],8.54],["FIN","Finland",26.85,[20220604,1,1,0,0,1,0,0,1,1],[27.77,"="],78.08],["CHL","Chile",27.31,[20220619,1,1,1,2,0,0,0,2,3],[53.88,"-"],91.42],["MOZ","Mozambique",28.7,[20220620,0,1,1,2,0,0,0,1,2],[0.31,"+"],66.24],["LKA","Sri Lanka",28.7,[20220612,0,0,1,1,0,1,0,2,3],[0.03,"="],67.56],["COD","Democratic Republic of Congo",28.7,[20220614,0,1,1,0,0,0,1,1,3],[0.1,"+"],1.85],["ESP","Spain",29.17,[20220605,0,2,1,3,0,0,0,1,2],[25.79,"="],86.72],["GUY","Guyana",29.63,[20220619,1,1,0,0,0,0,0,4,1],[10.53,"-"],46.61],["NER","Niger",29.63,[20220531,0,0,0,3,0,2,0,1,3],[0.0,"="],6.19],["MLI","Mali",29.63,[20220619,0,2,2,3,0,0,0,1,-1],[0.01,"="],5.97],["SUR","Suriname",29.63,[20220608,1,1,0,0,0,0,0,4,2],[2.26,"="],40.2],["THA","Thailand",30.09,[20220614,0,2,1,2,0,1,0,1,3],[2.87,"-"],75.43],["NGA","Nigeria",30.56,[20220523,0,0,1,3,0,0,0,2,3],[0.02,"="],7.96],["PRI","Puerto Rico",30.56,[20220601,0,0,2,0,0,0,0,3,2],[]],["PAN","Panama",30.56,[20220527,0,0,2,2,0,0,0,1,2],[39.4,"-"],71.02],["TGO","Togo",31.02,[20220619,0,0,1,3,0,2,0,2,3],[0.11,"+"],18.37],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[10.16,"="],34.06],["MAC","Macao",32.41,[20220605,1,1,1,0,0,0,0,3,2],[],88.81],["LSO","Lesotho",32.41,[20220613,0,2,2,2,0,0,0,1,4],[1.28,"+"],34.07],["DMA","Dominica",32.41,[20220613,1,1,1,2,0,0,0,1,3],[28.38,"="],42.12],["HND","Honduras",34.26,[20220608,0,2,1,0,0,2,0,1,3],[0.63,"="],53.21],["HTI","Haiti",34.26,[20220620,0,1,1,4,0,0,0,1,2],[0.14,"+"],1.17],["BGD","Bangladesh",34.26,[20220621,2,1,1,0,0,1,0,1,4],[0.26,"+"],71.33],["KEN","Kenya",35.19,[20220606,0,1,1,3,0,1,0,1,1],[0.65,"+"],16.77],["IRQ","Iraq",35.19,[20220617,0,2,2,1,0,0,0,1,3],[0.94,"+"],18.37],["AUT","Austria",35.19,[20220620,2,2,1,2,0,0,0,0,2],[62.42,"+"],73.24],["VIR","United States Virgin Islands",35.19,[20220613,0,1,1,3,0,1,0,1,2],[]],["COG","Congo",35.19,[20220613,0,2,1,3,0,0,0,1,3],[0.0,"="],11.53],["AZE","Azerbaijan",36.11,[20220620,0,0,2,2,1,0,0,1,0],[0.32,"="],47.46],["KGZ","Kyrgyz Republic",36.11,[20220613,0,0,2,4,0,0,0,1,2],[0.05,"="],19.86],["IND","India",37.04,[20220604,0,1,1,0,0,2,2,1,3],[0.86,"+"],65.02],["ETH","Ethiopia",37.04,[20220531,0,1,1,3,1,0,0,1,3],[0.63,"-"],18.06],["RKS","Kosovo",37.04,[20220610,2,2,2,0,0,0,0,0,1],[0.87,"+"],46.21],["SYC","Seychelles",37.04,[20220620,1,0,2,3,0,0,0,1,3],[22.95,"="],81.59],["SOM","Somalia",37.04,[20220613,1,1,1,1,0,2,0,1,3],[0.07,"-"],9.33],["GTM","Guatemala",37.5,[20220611,2,1,1,3,0,0,0,1,4],[7.54,"+"],34.52],["ZAF","South Africa",37.96,[20220522,0,2,1,2,1,0,0,1,2],[1.87,"-"],31.6],["PHL","Philippines",37.96,[20220609,1,2,1,0,1,0,0,4,4],[0.42,"+"],63.26],["ARE","United Arab Emirates",37.96,[20220613,1,1,2,1,0,0,0,2,2],[14.59,"+"],97.11],["ERI","Eritrea",37.96,[20220620,0,0,0,3,1,2,0,2,3],[0.02,"="]],["TCD","Chad",37.96,[20220610,1,1,1,2,1,0,0,1,3],[0.0,"="],12.36],["SLV","El Salvador",37.96,[20220606,1,1,2,1,1,0,0,0,4],[0.0,"="],66.19],["MUS","Mauritius",37.96,[20220612,0,2,1,3,0,0,0,2,3],[0.0,"-"],74.18],["USA","United States",38.89,[20220611,2,2,0,0,1,0,1,4,2],[27.19,"-"],66.84],["TON","Tonga",38.89,[20220606,0,1,0,0,0,2,1,4,4],[22.98,"="],91.0],["ZWE","Zimbabwe",38.89,[20220613,0,1,1,3,0,2,0,1,3],[0.65,"-"],30.31],["KIR","Kiribati",39.81,[20220613,3,0,0,0,0,2,2,2,4],[0.72,"-"],49.98],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[20.51,"="],82.3],["JPN","Japan",39.81,[20220614,1,1,1,1,0,1,1,2,1],[11.04,"-"],81.14],["PNG","Papua New Guinea",39.81,[20220605,0,1,1,3,0,0,0,4,2],[0.05,"+"],2.98],["QAT","Qatar",40.74,[20220620,1,1,2,0,1,0,0,2,2],[17.08,"+"],90.07],["BRB","Barbados",40.74,[20220607,1,1,2,3,0,0,0,1,3],[31.42,"-"],53.24],["AGO","Angola",40.74,[20220530,0,2,1,0,1,0,1,2,2],[0.0,"="],20.07],["EGY","Egypt",40.74,[20220620,1,1,2,3,0,0,0,1,3],[0.0,"="],34.56],["SGP","Singapore",41.67,[20220617,1,1,1,2,0,1,0,3,2],[66.75,"+"],91.56],["SLB","Solomon Islands",42.59,[20220613,2,2,0,0,2,0,0,4,2],[6.38,"="],25.28],["BLZ","Belize",42.59,[20220618,2,2,1,0,1,0,1,1,2],[37.29,"-"],52.41],["PAK","Pakistan",43.06,[20220529,1,1,1,1,1,1,2,3,4],[0.06,"="],55.45],["MRT","Mauritania",43.52,[20220614,1,1,2,4,0,0,0,1,3],[0.18,"="],27.89],["BHS","Bahamas",44.44,[20220606,1,1,1,3,1,1,0,1,3],[10.64,"-"],39.8],["SLE","Sierra Leone",45.37,[20220613,2,2,2,0,1,0,0,1,3],[0.01,"="],20.38],["NPL","Nepal",46.3,[20220620,0,1,2,1,1,1,1,1,4],[0.05,"="],67.81],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.09,"+"],8.09],["DZA","Algeria",47.22,[20220606,1,2,1,4,1,0,0,1,3],[0.02,"="],15.36],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[1.07,"="],53.4],["LBR","Liberia",48.15,[20220620,1,3,2,0,0,0,0,4,4],[0.1,"+"],27.76],["DJI","Djibouti",49.07,[20220613,1,1,2,4,1,0,0,1,3],[0.0,"-"],14.85],["GIN","Guinea",49.07,[20220621,1,1,1,4,0,0,2,1,3],[0.0,"="],24.98],["LBY","Libya",50.0,[20220620,1,2,2,4,0,0,0,2,3],[0.07,"="],16.92],["MYS","Malaysia",50.0,[20220618,1,1,1,1,1,1,2,2,2],[6.32,"="],83.03],["GHA","Ghana",51.85,[20220422,0,2,2,4,0,0,0,4,0],[1.02,"+"],20.2],["HKG","Hong Kong",52.78,[20220616,1,2,2,4,0,0,0,3,3],[15.43,"+"],84.56],["PER","Peru",54.63,[20220605,1,3,2,0,1,1,1,1,3],[3.98,"-"],82.53],["LAO","Laos",55.09,[20220609,2,2,1,4,1,2,1,0,3],[0.1,"+"],68.8],["IDN","Indonesia",55.56,[20220605,1,1,1,0,1,1,2,4,3],[0.43,"+"],60.88],["TKM","Turkmenistan",57.41,[20220613,0,2,2,4,0,0,2,4,3],[],47.73],["MMR","Myanmar",57.41,[20220612,1,1,0,2,1,2,2,4,3],[0.01,"="],49.31],["FJI","Fiji",57.41,[20220616,0,2,2,0,2,0,2,3,1],[2.29,"+"],70.29],["MAR","Morocco",58.33,[20220606,1,2,2,4,2,0,0,1,3],[4.04,"+"],62.73],["BRA","Brazil",60.65,[20220606,2,2,2,4,1,1,1,4,2],[17.3,"+"],78.68],["ECU","Ecuador",65.74,[20220620,0,2,2,4,2,0,2,1,2],[4.56,"-"],78.29],["RWA","Rwanda",66.67,[20220607,0,3,2,4,2,0,2,1,1],[0.26,"+"],64.23],["IRN","Iran",67.59,[20220612,3,3,2,4,0,0,2,3,2],[0.19,"+"],68.05],["SAU","Saudi Arabia",67.59,[20220613,2,2,2,3,2,0,2,0,2],[2.91,"+"],70.9],["VUT","Vanuatu",73.61,[20220614,3,3,2,4,2,1,1,4,4],[16.23,"-"],40.26],["UKR","Ukraine",75.0,[20220524,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["CHN","China",79.17,[20220615,3,3,2,4,2,3,2,2,4],[0.01,"="],87.05],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[13.74,"+"],45.15]];