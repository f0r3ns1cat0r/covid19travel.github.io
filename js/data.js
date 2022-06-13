const dataUpdate="2022.06.13";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",0.0,[20220608,0,0,0,0,0,0,0,0,2],[0.0,"="],65.35],["OMN","Oman",3.7,[20220605,1,0,0,0,0,0,0,0,0],[0.8,"="],58.83],["DOM","Dominican Republic",5.56,[20220601,0,0,0,0,0,0,0,0,0],[5.05,"-"],54.67],["AND","Andorra",8.33,[20220523,0,0,0,0,0,0,0,0,2],[29.03,"="],69.1],["TJK","Tajikistan",8.33,[20220608,0,0,0,0,0,0,0,1,0],[0.0,"="],51.05],["CRI","Costa Rica",11.11,[20220516,0,0,0,0,0,0,0,0,1],[0.0,"="],80.62],["CHE","Switzerland",11.11,[20220608,0,0,0,0,0,0,0,0,0],[16.99,"="],68.84],["ROU","Romania",11.11,[20220606,0,0,0,0,0,0,0,0,1],[1.6,"+"],42.42],["IRL","Ireland",11.11,[20220524,0,0,0,0,0,0,0,0,1],[13.16,"="],81.02],["NOR","Norway",11.11,[20220525,0,0,0,0,0,0,0,0,1],[5.42,"+"],73.96],["DNK","Denmark",11.11,[20220604,0,0,0,0,0,0,0,0,0],[11.63,"="],82.49],["MDA","Moldova",11.11,[20220605,0,0,0,0,0,0,0,0,1],[0.92,"="],26.43],["FRO","Faeroe Islands",11.11,[20220527,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["GAB","Gabon",11.11,[20220523,0,0,0,0,0,0,0,0,2],[0.22,"="],11.23],["GBR","United Kingdom",11.11,[20220606,0,0,0,0,0,0,0,0,1],[16.46,"="],73.31],["LVA","Latvia",11.11,[20220531,0,0,0,0,0,0,0,0,2],[8.62,"="],69.91],["LTU","Lithuania",11.11,[20220531,0,0,0,0,0,0,0,0,1],[4.8,"+"],69.75],["KWT","Kuwait",11.11,[20220606,0,0,0,0,0,0,0,0,1],[7.27,"-"],76.49],["KAZ","Kazakhstan",11.11,[20220611,0,0,0,0,0,0,0,0,1],[0.08,"+"],48.91],["HRV","Croatia",11.11,[20220606,0,0,0,-1,0,0,0,0,4],[6.16,"+"],54.99],["HUN","Hungary",11.11,[20220523,0,0,0,0,0,0,0,0,2],[2.43,"="],64.32],["JAM","Jamaica",11.11,[20220601,0,0,0,0,0,0,0,0,1],[11.35,"+"],23.66],["SRB","Serbia",11.11,[20220530,0,0,0,0,0,0,0,0,2],[2.83,"-"],47.7],["SVK","Slovak Republic",11.11,[20220516,0,0,0,0,0,0,0,0,0],[3.24,"-"],50.79],["ISL","Iceland",11.11,[20220517,0,0,0,0,0,0,0,0,0],[45.63,"="],78.69],["SWE","Sweden",11.11,[20220524,0,0,0,0,0,0,0,0,0],[2.21,"="],75.27],["SVN","Slovenia",11.11,[20220523,0,0,0,0,0,0,0,0,2],[10.51,"-"],58.78],["ALB","Albania",11.11,[20220531,0,0,0,0,0,0,0,0,2],[1.64,"-"],43.22],["BGR","Bulgaria",11.11,[20220520,0,0,0,0,0,0,0,0,0],[2.15,"-"],29.88],["AFG","Afghanistan",11.11,[20220522,0,2,1,0,1,0,0,0,3],[0.09,"="],12.07],["BWA","Botswana",13.89,[20220531,0,0,0,0,0,0,0,1,2],[14.0,"="],82.84],["NIC","Nicaragua",13.89,[20220523,0,0,0,0,0,0,0,1,0],[0.08,"="],76.63],["BFA","Burkina Faso",13.89,[20220606,0,0,0,0,0,0,0,1,3],[0.0,"="],7.19],["MLT","Malta",13.89,[20220606,0,0,0,0,0,0,0,1,2],[30.35,"+"],90.97],["BEN","Benin",13.89,[20220610,0,0,0,0,0,0,0,1,2],[0.0,"="],21.11],["BDI","Burundi",13.89,[20220523,0,0,0,0,0,0,0,1,2],[0.14,"="],0.11],["GEO","Georgia",13.89,[20220530,0,0,0,0,0,0,0,1,2],[0.0,"="],31.87],["TZA","Tanzania",13.89,[20220609,0,0,0,0,0,0,0,1,0],[0.0,"="],6.37],["URY","Uruguay",13.89,[20220517,0,0,0,0,0,0,0,1,1],[37.77,"="],82.7],["GMB","Gambia",13.89,[20220605,0,0,0,0,0,0,0,1,3],[0.0,"="],14.25],["SDN","Sudan",13.89,[20220530,0,0,0,0,0,0,0,1,0],[0.02,"="],8.09],["PRT","Portugal",13.89,[20220531,0,0,0,0,0,0,0,1,2],[198.38,"="],87.2],["ISR","Israel",14.81,[20220606,1,0,0,0,0,0,0,0,2],[51.99,"-"],66.11],["LIE","Liechtenstein",14.81,[20220530,0,1,0,0,0,0,0,0,1],[27.35,"="],69.06],["CZE","Czech Republic",14.81,[20220530,0,1,0,0,0,0,0,0,2],[2.54,"+"],64.13],["KHM","Cambodia",14.81,[20220605,1,0,0,0,0,0,0,2,2],[0.0,"="],84.55],["POL","Poland",14.81,[20220604,1,0,0,0,0,0,0,0,2],[0.54,"="],59.54],["KOR","South Korea",16.67,[20220606,0,0,0,0,0,0,0,2,3],[16.88,"-"],86.95],["BTN","Bhutan",16.67,[20220611,0,0,1,0,0,0,0,0,4],[0.15,"="],86.23],["PSE","Palestine",16.67,[20220520,0,0,0,0,0,0,0,2,4],[],33.88],["BLR","Belarus",16.67,[20220524,0,0,0,0,0,0,0,2,1],[0.0,"="],66.06],["BHR","Bahrain",17.59,[20220607,1,0,0,0,0,0,0,1,2],[58.65,"+"],69.88],["CIV","Cote d'Ivoire",17.59,[20220608,0,1,0,0,0,0,0,1,3],[0.1,"="],26.0],["MCO","Monaco",17.59,[20220606,0,1,0,0,0,0,0,1,2],[-43.68,"-"],64.95],["MEX","Mexico",17.59,[20220606,1,0,0,0,0,0,0,1,1],[3.61,"+"],61.37],["MDG","Madagascar",17.59,[20220612,0,1,0,0,0,0,0,1,3],[0.16,"+"],7.74],["DEU","Germany",17.59,[20220530,0,0,0,0,0,1,-1,1,2],[53.31,"+"],76.91],["CUB","Cuba",18.52,[20220527,1,1,0,0,0,0,0,0,2],[0.19,"="],88.08],["CAF","Central African Republic",18.52,[20220522,0,0,0,0,0,2,0,2,3],[0.0,"="],21.07],["NLD","Netherlands",19.44,[20220525,0,0,0,0,0,0,0,3,0],[7.5,"-"],69.78],["TLS","Timor-Leste",19.44,[20220530,0,0,0,1,0,0,0,2,3],[0.07,"-"],50.82],["JOR","Jordan",20.37,[20220522,0,1,0,2,0,0,0,0,2],[0.47,"="],43.91],["GUM","Guam",22.22,[20220523,0,0,0,0,0,0,0,4,1],[]],["GRL","Greenland",22.22,[20220530,0,0,0,0,0,0,0,4,1],[0.0,"="],67.7],["BMU","Bermuda",22.22,[20220606,0,0,0,0,0,0,0,4,2],[78.68,"="],76.75],["SWZ","Eswatini",23.15,[20220526,0,1,1,0,0,0,0,1,4],[2.5,"+"],28.67],["UGA","Uganda",23.15,[20220606,0,1,0,2,1,0,0,1,1],[0.58,"+"],22.63],["RUS","Russia",23.15,[20220604,0,1,0,0,0,1,0,3,2],[2.38,"-"],50.72],["NAM","Namibia",23.15,[20220605,0,1,1,2,0,0,0,1,1],[5.09,"-"],22.41],["BEL","Belgium",23.15,[20220604,0,1,0,0,0,0,0,3,2],[14.17,"="],78.63],["FRA","France",23.15,[20220518,0,1,0,0,0,0,0,3,2],[24.56,"-"],78.38],["ZMB","Zambia",23.15,[20220523,0,1,1,-1,0,0,0,1,3],[0.66,"="],20.5],["BOL","Bolivia",23.15,[20220530,2,1,0,0,0,0,0,1,2],[2.86,"-"],50.55],["EST","Estonia",24.07,[20220610,1,1,0,0,0,0,0,2,1],[8.45,"="],63.91],["VEN","Venezuela",25.0,[20220524,0,0,0,0,1,0,0,3,3],[0.2,"+"],49.77],["UZB","Uzbekistan",25.0,[20220606,0,0,2,0,0,0,0,1,1],[0.06,"="],44.89],["CPV","Cape Verde",25.0,[20220606,0,0,1,0,0,0,1,1,2],[13.87,"+"],54.71],["LUX","Luxembourg",25.0,[20220605,0,0,0,0,1,0,0,3,2],[66.2,"="],72.78],["YEM","Yemen",25.93,[20220611,0,1,1,0,0,2,0,2,1],[0.0,"="],1.41],["VNM","Vietnam",25.93,[20220603,0,1,1,2,0,0,0,0,3],[0.96,"-"],81.01],["ABW","Aruba",25.93,[20220607,0,1,1,2,0,0,0,0,2],[144.78,"="],77.04],["COL","Colombia",25.93,[20220610,1,1,2,0,0,0,0,1,3],[2.45,"="],70.14],["BIH","Bosnia and Herzegovina",25.93,[20220606,1,0,1,2,0,0,0,0,2],[0.53,"="],25.93],["TWN","Taiwan",26.85,[20220607,1,1,0,0,0,0,0,3,3],[292.35,"-"],80.11],["TTO","Trinidad and Tobago",26.85,[20220612,1,1,1,0,0,0,0,1,3],[19.13,"+"],50.82],["TGO","Togo",26.85,[20220603,0,0,0,4,0,2,0,1,4],[0.11,"+"],23.46],["SYR","Syria",26.85,[20220531,1,1,1,0,0,0,0,1,2],[0.01,"="],8.94],["SEN","Senegal",26.85,[20220606,1,1,1,0,0,0,0,1,3],[0.01,"="],8.54],["PRY","Paraguay",26.85,[20220607,1,1,1,0,0,0,0,1,1],[1.55,"="],47.68],["CYP","Cyprus",26.85,[20220606,1,1,0,0,1,0,0,1,1],[26.11,"="],71.92],["MUS","Mauritius",26.85,[20220612,0,2,1,3,0,0,0,2,-1],[0.0,"="],75.66],["FIN","Finland",26.85,[20220604,1,1,0,0,1,0,0,1,1],[24.14,"="],78.05],["CHL","Chile",27.31,[20220611,1,1,1,2,0,0,0,2,3],[53.35,"+"],91.32],["CMR","Cameroon",27.78,[20220530,0,0,1,3,0,0,0,1,3],[0.0,"="],4.46],["GRC","Greece",27.78,[20220530,1,2,1,0,0,0,0,0,2],[40.91,"+"],73.54],["ZWE","Zimbabwe",27.78,[20220613,0,1,1,3,0,2,0,1,-1],[0.73,"-"],30.21],["LKA","Sri Lanka",28.7,[20220612,0,0,1,1,0,1,0,2,3],[0.05,"="],67.53],["MOZ","Mozambique",28.7,[20220606,0,1,1,2,0,0,0,1,2],[0.24,"+"],66.24],["COG","Congo",28.7,[20220523,0,1,1,2,0,0,0,1,3],[0.0,"="],11.55],["COD","Democratic Republic of Congo",28.7,[20220509,0,1,1,0,0,0,1,1,4],[0.12,"="],1.29],["ESP","Spain",29.17,[20220605,0,2,1,3,0,0,0,1,2],[23.14,"="],86.7],["SUR","Suriname",29.63,[20220608,1,1,0,0,0,0,0,4,2],[3.07,"="],40.2],["NER","Niger",29.63,[20220531,0,0,0,3,0,2,0,1,3],[0.0,"="],6.17],["NZL","New Zealand",29.63,[20220530,0,2,0,0,0,0,0,4,2],[137.71,"+"],80.13],["GUY","Guyana",29.63,[20220606,1,1,0,0,0,0,0,4,1],[11.26,"+"],46.54],["PRI","Puerto Rico",30.56,[20220601,0,0,2,0,0,0,0,3,2],[]],["NGA","Nigeria",30.56,[20220523,0,0,1,3,0,0,0,2,3],[0.01,"="],9.51],["TUR","Turkey",30.56,[20220529,0,0,0,0,1,0,2,1,2],[0.0,"="],62.4],["PAN","Panama",30.56,[20220527,0,0,2,2,0,0,0,1,2],[58.12,"-"],70.92],["HTI","Haiti",31.48,[20220523,0,1,1,3,0,0,0,1,2],[0.14,"="],1.15],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[21.46,"="],34.03],["MAC","Macao",32.41,[20220605,1,1,1,0,0,0,0,3,2],[],88.5],["SSD","South Sudan",32.41,[20220509,0,0,1,0,0,2,1,1,2],[0.02,"="],5.6],["LSO","Lesotho",32.41,[20220526,0,2,2,2,0,0,0,1,4],[1.23,"="],34.07],["DMA","Dominica",32.41,[20220530,1,1,1,2,0,0,0,1,3],[68.07,"="],42.08],["ITA","Italy",33.33,[20220611,1,2,1,0,1,0,0,0,2],[34.83,"+"],79.41],["HND","Honduras",34.26,[20220608,0,2,1,0,0,2,0,1,3],[0.27,"+"],54.01],["BGD","Bangladesh",34.26,[20220530,2,1,1,0,0,1,0,1,4],[0.04,"+"],71.19],["ZAF","South Africa",34.26,[20220522,0,1,1,2,1,0,0,1,2],[2.5,"-"],31.5],["KEN","Kenya",35.19,[20220606,0,1,1,3,0,1,0,1,1],[0.37,"+"],22.98],["VIR","United States Virgin Islands",35.19,[20220613,0,1,1,3,0,1,0,1,2],[]],["IRQ","Iraq",35.19,[20220605,0,2,2,1,0,0,0,1,3],[0.41,"+"],18.21],["AUT","Austria",35.19,[20220606,2,2,1,2,0,0,0,0,2],[32.7,"="],73.2],["KGZ","Kyrgyz Republic",36.11,[20220612,0,0,2,4,0,0,0,1,2],[0.0,"="],19.79],["CAN","Canada",37.04,[20220612,0,0,0,0,0,1,2,4,2],[6.27,"+"],82.53],["SOM","Somalia",37.04,[20220524,1,1,1,1,0,2,0,1,3],[0.0,"="],8.72],["ETH","Ethiopia",37.04,[20220531,0,1,1,3,1,0,0,1,3],[0.49,"+"],18.06],["RKS","Kosovo",37.04,[20220610,2,2,2,0,0,0,0,0,1],[0.33,"+"],46.2],["IND","India",37.04,[20220604,0,1,1,0,0,2,2,1,3],[0.5,"+"],64.53],["GTM","Guatemala",37.5,[20220611,2,1,1,3,0,0,0,1,4],[5.14,"+"],34.39],["TCD","Chad",37.96,[20220610,1,1,1,2,1,0,0,1,3],[0.0,"="],12.35],["SLV","El Salvador",37.96,[20220606,1,1,2,1,1,0,0,0,4],[0.88,"-"],66.15],["ARE","United Arab Emirates",37.96,[20220509,1,1,2,1,0,0,0,2,2],[9.48,"+"],97.11],["PHL","Philippines",37.96,[20220609,1,2,1,0,1,0,0,4,4],[0.22,"+"],63.04],["TON","Tonga",38.89,[20220606,0,1,0,0,0,2,1,4,4],[18.92,"="],67.9],["USA","United States",38.89,[20220611,2,2,0,0,1,0,1,4,2],[32.53,"+"],66.78],["ERI","Eritrea",38.89,[20220607,1,1,1,3,1,1,1,1,3],[0.02,"+"]],["PNG","Papua New Guinea",39.81,[20220605,0,1,1,3,0,0,0,4,2],[0.03,"="],2.98],["ARG","Argentina",39.81,[20220523,0,1,2,4,0,0,0,1,2],[0.0,"-"],82.25],["KIR","Kiribati",39.81,[20220523,3,0,0,0,0,2,2,2,4],[5.14,"-"],49.98],["MLI","Mali",40.74,[20220510,0,2,2,3,0,0,0,1,3],[0.01,"="],8.43],["QAT","Qatar",40.74,[20220607,1,1,2,0,1,0,0,2,2],[11.56,"+"],89.83],["EGY","Egypt",40.74,[20220516,1,1,2,3,0,0,0,1,4],[0.0,"="],33.89],["BRB","Barbados",40.74,[20220607,1,1,2,3,0,0,0,1,3],[41.16,"-"],53.19],["AGO","Angola",40.74,[20220530,0,2,1,0,1,0,1,2,2],[0.0,"="],20.79],["MYS","Malaysia",40.74,[20220603,-1,1,1,1,0,1,2,2,2],[4.99,"+"],82.81],["SGP","Singapore",41.67,[20220607,1,1,1,2,0,1,0,3,2],[54.39,"+"],91.53],["LBY","Libya",42.13,[20220523,1,1,2,4,0,0,0,2,3],[0.05,"="],16.78],["BLZ","Belize",42.59,[20220605,2,2,1,0,1,0,1,1,2],[38.62,"="],52.39],["AUS","Australia",43.06,[20220602,0,2,2,2,1,0,2,1,2],[104.24,"-"],83.9],["PAK","Pakistan",43.06,[20220529,1,1,1,1,1,1,2,3,4],[0.03,"-"],55.08],["MRT","Mauritania",43.52,[20220531,1,1,2,4,0,0,0,1,3],[0.15,"-"],40.86],["SMR","San Marino",43.52,[20220611,1,1,2,4,0,0,0,1,1],[0.0,"="],69.49],["BHS","Bahamas",44.44,[20220606,1,1,1,3,1,1,0,1,3],[9.52,"-"],39.8],["SLE","Sierra Leone",45.37,[20220606,2,2,2,0,1,0,0,1,3],[0.0,"="],18.05],["JPN","Japan",45.37,[20220530,1,1,1,1,0,1,1,4,1],[11.93,"-"],81.08],["THA","Thailand",45.83,[20220522,0,2,2,2,1,2,1,1,3],[3.62,"-"],75.28],["BRN","Brunei",46.3,[20220530,0,1,1,2,1,1,0,4,4],[87.87,"+"],96.66],["LBN","Lebanon",46.3,[20220510,2,1,1,1,1,2,0,1,4],[2.85,"+"],34.91],["SYC","Seychelles",46.3,[20220531,1,1,2,3,1,0,0,1,3],[31.67,"="],81.53],["NPL","Nepal",46.3,[20220606,0,1,2,1,1,1,1,1,4],[0.03,"="],67.34],["MWI","Malawi",47.22,[20220530,0,1,1,3,1,2,0,2,3],[0.07,"+"],8.09],["DZA","Algeria",47.22,[20220606,1,2,1,4,1,0,0,1,3],[0.01,"="],15.36],["TUN","Tunisia",47.22,[20220517,1,2,2,4,0,0,0,1,3],[0.81,"="],53.39],["LBR","Liberia",48.15,[20220606,1,3,2,0,0,0,0,4,4],[0.01,"="],27.76],["GIN","Guinea",49.07,[20220606,1,1,1,4,0,0,2,1,3],[0.06,"="],24.98],["AZE","Azerbaijan",49.07,[20220605,2,3,1,2,1,0,0,1,0],[0.0,"="],47.43],["GHA","Ghana",51.85,[20220422,0,2,2,4,0,0,0,4,0],[0.06,"-"],20.2],["PER","Peru",54.63,[20220605,1,3,2,0,1,1,1,1,3],[1.91,"-"],82.03],["LAO","Laos",55.09,[20220609,2,2,1,4,1,2,1,0,3],[0.13,"="],68.8],["IDN","Indonesia",55.56,[20220605,1,1,1,0,1,1,2,4,3],[0.0,"="],60.73],["HKG","Hong Kong",56.48,[20220523,2,2,2,4,0,0,0,3,3],[7.66,"+"],84.19],["TKM","Turkmenistan",57.41,[20220530,0,2,2,4,0,0,2,4,3],[],47.73],["FJI","Fiji",57.41,[20220530,0,2,2,0,2,0,2,3,1],[1.53,"="],70.27],["MMR","Myanmar",57.41,[20220612,1,1,0,2,1,2,2,4,3],[0.02,"="],47.64],["MAR","Morocco",58.33,[20220606,1,2,2,4,2,0,0,1,3],[2.09,"+"],62.69],["DJI","Djibouti",58.33,[20220530,1,1,2,4,1,1,1,1,3],[0.16,"="],13.07],["BRA","Brazil",60.65,[20220606,2,2,2,4,1,1,1,4,2],[21.47,"+"],78.52],["SAU","Saudi Arabia",65.74,[20220523,2,2,1,3,2,1,2,0,2],[2.66,"+"],70.63],["ECU","Ecuador",65.74,[20220606,0,2,2,4,2,0,2,1,2],[7.52,"="],78.21],["RWA","Rwanda",66.67,[20220607,0,3,2,4,2,0,2,1,1],[0.18,"="],64.23],["IRN","Iran",67.59,[20220612,3,3,2,4,0,0,2,3,2],[0.16,"+"],68.05],["UKR","Ukraine",75.0,[20220524,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["VUT","Vanuatu",75.46,[20220528,3,3,2,4,2,2,1,4,4],[48.93,"+"],37.57],["CHN","China",79.17,[20220612,3,3,2,4,2,3,2,2,4],[0.01,"-"],87.05],["SLB","Solomon Islands",82.87,[20220528,3,2,2,4,2,1,2,4,3],[0.0,"="],23.63],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[8.35,"+"],45.14]];