const dataUpdate="2022.09.25";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["SWE","Sweden",0.0,[20220919,0,0,0,0,0,0,0,0,0],[6.86,"="],73.21],["GEO","Georgia",0.0,[20220912,0,0,0,0,0,0,0,0,2],[66.2,"="],33.96],["HUN","Hungary",0.0,[20220812,0,0,0,0,0,0,0,0,2],[18.2,"="],63.89],["BWA","Botswana",2.78,[20220815,0,0,0,0,0,0,0,1,2],[0.0,"="],53.1],["ZMB","Zambia",2.78,[20220829,0,0,0,0,0,0,0,1,3],[0.05,"-"],30.44],["NAM","Namibia",5.56,[20220916,0,0,0,0,0,0,0,0,0],[0.0,"="],20.33],["CHE","Switzerland",5.56,[20220831,0,0,0,0,0,0,0,0,0],[22.68,"="],69.13],["KAZ","Kazakhstan",5.56,[20220815,0,0,0,0,0,0,0,0,1],[0.59,"="],55.14],["BLR","Belarus",5.56,[20220901,0,0,0,0,0,0,0,0,0],[0.0,"="],66.68],["UZB","Uzbekistan",5.56,[20220903,0,0,0,0,0,0,0,0,1],[0.04,"="],48.4],["KWT","Kuwait",5.56,[20220913,0,0,0,0,0,0,0,0,1],[2.59,"="],78.49],["DOM","Dominican Republic",5.56,[20220815,0,0,0,0,0,0,0,0,0],[3.53,"="],54.36],["AND","Andorra",5.56,[20220823,0,0,0,0,0,0,0,0,2],[0.0,"="],67.66],["YEM","Yemen",5.56,[20220919,0,0,1,0,0,0,0,0,0],[0.0,"="],1.43],["MUS","Mauritius",5.56,[20220923,0,0,0,0,0,0,0,0,2],[0.0,"="],75.27],["CAF","Central African Republic",6.48,[20220923,0,0,0,0,0,1,0,1,-1],[0.0,"="],25.6],["BEN","Benin",8.33,[20220812,0,0,0,0,0,0,0,1,2],[0.0,"="],21.01],["TJK","Tajikistan",8.33,[20220815,0,0,0,0,0,0,0,1,0],[0.0,"="],52.52],["TZA","Tanzania",8.33,[20220822,0,0,0,0,0,0,0,1,0],[0.02,"="],28.81],["SDN","Sudan",8.33,[20220916,0,0,0,0,0,0,0,1,0],[0.0,"="],9.94],["LSO","Lesotho",8.33,[20220912,0,0,0,0,0,0,0,1,1],[0.0,"="],38.25],["BFA","Burkina Faso",8.33,[20220822,0,0,0,0,0,0,0,1,3],[0.0,"="],10.98],["POL","Poland",9.26,[20220914,1,0,0,0,0,0,0,0,2],[10.8,"-"],58.89],["NER","Niger",10.79,[20220808,0,0,0,0,0,0,0,1,2],[0.0,"="],11.8],["GBR","United Kingdom",11.11,[20220817,0,0,0,0,0,0,0,0,1],[7.82,"="],75.42],["FRA","France",11.11,[20220822,0,0,0,0,0,0,0,0,1],[49.82,"="],78.69],["SVN","Slovenia",11.11,[20220904,0,0,0,0,0,0,0,0,1],[95.48,"-"],57.67],["SVK","Slovak Republic",11.11,[20220919,0,0,0,0,0,0,0,0,2],[12.71,"-"],50.73],["GRL","Greenland",11.11,[20220908,0,0,0,0,0,0,0,0,1],[0.0,"="],68.46],["EST","Estonia",11.11,[20220817,0,0,0,0,0,0,0,0,1],[12.92,"="],63.68],["SRB","Serbia",11.11,[20220915,0,0,0,0,0,0,0,0,2],[24.52,"-"],47.71],["FRO","Faeroe Islands",11.11,[20220912,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["MNG","Mongolia",11.11,[20220812,0,0,0,0,0,0,0,0,2],[2.56,"="],64.99],["IRL","Ireland",11.11,[20220829,0,0,0,0,0,0,0,0,1],[3.97,"="],81.25],["LTU","Lithuania",11.11,[20220904,0,0,0,0,0,0,0,0,1],[45.67,"-"],67.42],["SAU","Saudi Arabia",11.11,[20220921,0,0,0,0,0,0,0,0,2],[0.27,"="],70.27],["ROU","Romania",11.11,[20220824,0,0,0,0,0,0,0,0,1],[6.87,"-"],41.98],["ISL","Iceland",11.11,[20220918,0,0,0,0,0,0,0,0,0],[7.12,"="],78.36],["MLT","Malta",11.11,[20220920,0,0,0,0,0,0,0,0,2],[5.11,"-"],89.37],["KIR","Kiribati",11.11,[20220919,0,0,0,0,0,0,0,0,0],[0.0,"="],48.79],["MDG","Madagascar",11.11,[20220819,0,0,0,0,0,0,0,0,1],[0.0,"="],5.05],["MDA","Moldova",11.11,[20220818,0,0,0,0,0,0,0,0,1],[13.6,"="],34.74],["NZL","New Zealand",11.11,[20220923,0,0,0,0,0,0,0,0,2],[22.43,"="],80.55],["LVA","Latvia",11.11,[20220914,0,0,0,0,0,0,0,0,2],[65.16,"="],69.69],["LIE","Liechtenstein",11.11,[20220820,0,0,0,0,0,0,0,0,1],[26.6,"="],67.75],["NOR","Norway",11.11,[20220822,0,0,0,0,0,0,0,0,1],[1.12,"+"],75.01],["JAM","Jamaica",11.11,[20220818,0,0,0,0,0,0,0,0,1],[1.8,"-"],25.88],["GAB","Gabon",11.11,[20220821,0,0,0,0,0,0,0,0,2],[0.15,"="],10.98],["CRI","Costa Rica",11.11,[20220901,0,0,0,0,0,0,0,0,2],[17.32,"="],81.55],["AFG","Afghanistan",11.11,[20220920,0,2,1,0,1,0,0,0,3],[0.43,"="],25.41],["ZAF","South Africa",11.11,[20220923,0,0,0,0,0,0,0,0,0],[0.31,"-"],32.64],["ALB","Albania",11.11,[20220823,0,0,0,0,0,0,0,0,2],[2.05,"-"],44.18],["AUS","Australia",11.11,[20220920,0,0,0,0,0,0,0,0,0],[24.28,"-"],84.02],["DNK","Denmark",11.11,[20220916,0,0,0,0,0,0,0,0,2],[14.78,"="],81.64],["CUB","Cuba",11.11,[20220817,0,0,0,0,0,0,0,0,2],[0.15,"="],88.77],["BTN","Bhutan",11.11,[20220914,0,0,0,0,0,0,0,2,4],[5.76,"="],86.81],["BGR","Bulgaria",11.11,[20220920,0,0,0,0,0,0,0,0,0],[7.04,"+"],30.08],["BHR","Bahrain",11.11,[20220918,0,0,0,0,0,0,0,0,2],[21.32,"+"],83.78],["TTO","Trinidad and Tobago",11.11,[20220919,0,0,0,0,0,0,0,0,1],[4.62,"-"],46.99],["ARG","Argentina",13.41,[20220919,0,0,0,0,0,0,0,0,1],[1.95,"="],83.47],["UGA","Uganda",13.89,[20220908,0,0,0,0,0,0,0,1,3],[0.0,"="],27.39],["BMU","Bermuda",13.89,[20220911,0,0,0,0,0,0,0,1,2],[10.32,"="],74.25],["URY","Uruguay",13.89,[20220911,0,0,0,0,0,0,0,1,1],[5.37,"="],84.44],["VEN","Venezuela",13.89,[20220919,0,0,0,0,0,0,0,1,3],[0.18,"+"],50.66],["TCD","Chad",13.89,[20220922,0,0,0,0,0,0,0,1,3],[0.01,"="],21.02],["PRT","Portugal",13.89,[20220919,0,0,0,0,0,0,0,1,2],[27.01,"="],86.67],["BGD","Bangladesh",13.89,[20220923,0,0,0,0,0,0,0,1,4],[0.35,"+"],71.86],["BDI","Burundi",13.89,[20220812,0,0,0,0,0,0,0,1,0],[0.22,"="],0.15],["VUT","Vanuatu",13.89,[20220822,0,0,0,0,0,0,0,1,2],[0.6,"="],40.93],["NIC","Nicaragua",13.89,[20220905,0,0,0,0,0,0,0,1,0],[0.12,"="],83.6],["PRY","Paraguay",13.89,[20220905,0,0,0,0,0,0,0,1,1],[0.1,"="],52.46],["SMR","San Marino",13.89,[20220821,0,0,0,0,0,0,0,1,1],[39.58,"="],70.03],["KOR","South Korea",13.89,[20220918,0,0,0,0,0,0,0,1,3],[62.88,"-"],86.2],["TLS","Timor-Leste",13.89,[20220920,0,0,0,0,0,0,0,1,3],[0.1,"="],56.43],["ECU","Ecuador",13.89,[20220919,0,0,0,0,0,0,0,1,2],[1.49,"="],79.16],["GMB","Gambia",13.89,[20220918,0,0,0,0,0,0,0,1,3],[0.0,"="],13.54],["SOM","Somalia",13.89,[20220826,0,0,0,0,0,0,0,1,2],[0.01,"="],17.14],["CMR","Cameroon",13.89,[20220905,0,0,0,0,0,0,0,1,2],[0.0,"="],4.62],["ESP","Spain",13.89,[20220916,0,0,0,0,0,0,0,1,2],[5.69,"="],85.6],["TUR","Turkey",13.89,[20220920,0,0,0,0,0,0,0,1,2],[3.63,"+"],62.71],["BRN","Brunei",13.9,[20220905,0,0,0,0,0,0,0,1,2],[53.13,"="],99.86],["CYP","Cyprus",14.81,[20220919,0,1,0,0,0,0,0,0,3],[34.69,"="],72.05],["GRC","Greece",14.81,[20220920,1,0,0,0,0,0,0,0,2],[49.89,"="],73.12],["BEL","Belgium",14.81,[20220819,0,1,0,0,0,0,0,0,2],[17.68,"="],78.88],["DEU","Germany",14.81,[20220918,0,0,0,0,0,1,0,0,2],[46.33,"="],76.08],["OMN","Oman",14.81,[20220916,1,0,0,0,0,0,0,0,0],[0.0,"="],67.41],["JOR","Jordan",14.81,[20220911,0,1,0,0,0,0,0,0,2],[3.89,"="],40.89],["ISR","Israel",14.81,[20220919,1,0,0,0,0,0,0,0,2],[9.96,"-"],66.23],["LUX","Luxembourg",15.42,[20220919,0,0,0,0,0,0,0,1,0],[25.33,"="],72.41],["ITA","Italy",15.52,[20220920,0,1,0,0,0,0,0,0,2],[32.1,"+"],80.97],["NLD","Netherlands",15.65,[20220822,0,0,0,0,0,0,0,1,0],[8.26,"="],68.32],["CIV","Cote d'Ivoire",15.74,[20220829,0,1,0,0,0,0,0,1,3],[0.06,"="],32.09],["SSD","South Sudan",16.18,[20220920,0,0,0,0,0,0,0,1,1],[0.0,"="],17.67],["CZE","Czech Republic",16.67,[20220916,0,0,-1,0,1,0,0,0,1],[21.99,"+"],65.54],["HRV","Croatia",16.67,[20220914,0,0,1,0,0,0,0,0,2],[14.64,"-"],55.38],["MCO","Monaco",17.59,[20220815,0,1,0,0,0,0,0,1,2],[19.29,"+"],69.96],["MOZ","Mozambique",17.59,[20220918,0,1,0,0,0,0,0,1,2],[0.0,"-"],41.38],["PAN","Panama",17.59,[20220919,1,0,0,0,0,0,0,1,2],[5.23,"="],72.32],["SGP","Singapore",17.59,[20220921,1,0,0,0,0,0,0,1,2],[38.57,"+"],91.77],["CAN","Canada",19.39,[20220919,0,0,0,0,1,0,0,1,2],[7.02,"+"],82.74],["COL","Colombia",19.44,[20220912,1,1,0,0,0,0,0,1,3],[0.28,"="],70.81],["CPV","Cape Verde",19.44,[20220910,0,0,0,0,0,0,1,1,2],[0.18,"+"],52.45],["KHM","Cambodia",20.37,[20220923,1,0,0,0,0,0,1,1,2],[0.07,"+"],87.56],["QAT","Qatar",20.47,[20220904,1,1,0,0,0,0,0,1,3],[28.25,"+"],103.99],["SUR","Suriname",21.3,[20220912,1,1,0,0,0,0,0,1,2],[0.51,"="],38.81],["TWN","Taiwan",21.3,[20220923,1,1,0,0,0,0,0,1,2],[168.05,"-"],85.03],["SYC","Seychelles",22.22,[20220829,0,0,0,3,0,0,0,1,2],[0.0,"="],76.27],["BRA","Brazil",22.22,[20220919,0,0,0,0,0,0,2,1,2],[3.74,"="],80.35],["BOL","Bolivia",22.22,[20220906,1,1,1,0,0,0,0,1,2],[0.9,"-"],50.64],["PSE","Palestine",22.22,[20220810,0,0,0,0,0,0,0,4,4],[],34.56],["NPL","Nepal",22.61,[20220919,0,0,0,1,0,0,0,1,4],[0.16,"="],74.33],["SWZ","Eswatini",23.15,[20220923,1,0,1,0,0,0,0,1,1],[0.06,"="],41.15],["GUY","Guyana",23.67,[20220919,1,1,0,0,0,0,0,1,1],[1.11,"-"],57.37],["FIN","Finland",24.07,[20220916,1,1,0,0,1,0,0,0,1],[24.68,"="],78.45],["MEX","Mexico",24.07,[20220829,0,1,1,0,0,0,1,1,3],[1.33,"-"],63.1],["MLI","Mali",24.16,[20220921,0,0,2,0,0,0,0,1,0],[0.07,"-"],7.54],["RKS","Kosovo",25.04,[20220915,2,2,2,0,0,0,0,0,1],[0.42,"+"],46.27],["VNM","Vietnam",25.93,[20220915,0,1,1,2,0,0,0,0,3],[2.17,"-"],86.03],["ABW","Aruba",25.93,[20220919,0,1,1,2,0,0,0,0,1],[0.0,"="],78.46],["BIH","Bosnia and Herzegovina",25.93,[20220910,1,0,1,2,0,0,0,0,2],[1.74,"="],25.87],["BRB","Barbados",26.85,[20220912,1,1,0,2,0,0,0,1,2],[13.12,"="],54.99],["MRT","Mauritania",26.85,[20220828,1,1,1,0,0,0,0,1,2],[0.03,"="],30.85],["SYR","Syria",26.85,[20220822,1,1,1,0,0,0,0,1,2],[0.04,"="],9.69],["USA","United States",27.0,[20220920,1,1,0,0,1,1,0,1,2],[17.28,"+"],67.76],["MAR","Morocco",27.09,[20220920,0,1,0,0,0,0,0,1,3],[0.04,"="],63.36],["COD","Democratic Republic of Congo",27.78,[20220905,0,0,1,1,0,0,1,1,3],[0.02,"="],3.0],["AGO","Angola",28.16,[20220912,0,2,1,0,0,0,0,1,3],[0.0,"="],22.65],["CHL","Chile",28.79,[20220822,1,1,0,2,0,0,0,1,2],[26.17,"+"],90.67],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[8.0,"+"],31.19],["THA","Thailand",29.63,[20220917,1,1,1,1,0,0,0,1,1],[1.02,"+"],74.67],["SLV","El Salvador",29.63,[20220919,1,1,0,2,1,0,0,0,0],[0.0,"="],68.59],["RWA","Rwanda",29.71,[20220919,0,0,0,0,2,0,0,0,1],[0.04,"="],66.27],["IDN","Indonesia",29.83,[20220903,0,1,0,0,0,0,0,1,2],[0.73,"-"],62.32],["HND","Honduras",30.22,[20220919,0,2,1,0,0,0,0,1,3],[0.39,"="],54.63],["PHL","Philippines",30.28,[20220919,1,1,1,0,1,0,0,1,2],[2.14,"+"],63.88],["LBN","Lebanon",30.42,[20220920,1,2,1,1,1,2,0,1,-1],[2.35,"+"],42.94],["SLB","Solomon Islands",30.85,[20220906,1,1,1,0,0,0,1,1,3],[0.0,"="],28.42],["ARE","United Arab Emirates",32.16,[20220918,1,1,1,0,1,0,0,1,2],[3.86,"-"],104.56],["LBR","Liberia",32.35,[20220904,0,1,1,0,0,0,0,1,4],[0.09,"="],56.84],["DMA","Dominica",32.41,[20220919,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["SEN","Senegal",32.41,[20220919,1,1,1,0,1,0,0,1,3],[0.08,"="],6.49],["GIN","Guinea",32.41,[20220912,1,1,0,0,0,0,2,1,2],[0.0,"="],21.36],["LBY","Libya",32.73,[20220912,1,2,2,0,0,0,0,1,3],[0.07,"="],18.24],["BLZ","Belize",32.97,[20220912,1,1,1,0,0,0,1,0,2],[2.87,"="],55.0],["KGZ","Kyrgyz Republic",33.33,[20220919,0,0,2,4,0,0,0,0,2],[0.17,"="],20.5],["GHA","Ghana",33.92,[20220918,0,2,2,0,0,0,0,1,1],[0.09,"="],25.41],["AUT","Austria",35.19,[20220919,2,2,1,2,0,0,0,0,2],[83.89,"+"],76.45],["EGY","Egypt",35.19,[20220910,1,1,2,3,0,0,0,0,3],[0.0,"="],36.04],["COG","Congo",35.26,[20220922,0,2,2,2,0,0,0,1,3],[0.0,"="],11.21],["PNG","Papua New Guinea",35.49,[20220917,0,1,1,3,0,0,0,1,2],[0.04,"="],2.91],["MYS","Malaysia",35.69,[20220904,1,1,1,0,1,0,1,0,2],[5.72,"+"],81.93],["KEN","Kenya",35.99,[20220915,0,1,2,3,0,0,0,1,2],[0.02,"+"],18.84],["LKA","Sri Lanka",36.1,[20220829,0,1,1,1,1,1,0,1,3],[0.07,"-"],67.42],["IND","India",37.04,[20220913,0,1,1,0,0,2,2,1,3],[0.35,"-"],67.31],["TGO","Togo",37.04,[20220918,0,1,1,3,0,2,0,1,3],[0.32,"-"],16.61],["JPN","Japan",37.04,[20220920,1,1,1,1,0,1,1,1,1],[43.37,"-"],82.49],["FJI","Fiji",37.78,[20220919,0,1,0,0,1,0,2,0,2],[0.18,"="],69.05],["MAC","Macao",37.96,[20220923,1,1,1,2,0,0,0,3,3],[],87.3],["RUS","Russia",38.43,[20220919,0,2,1,1,1,1,0,3,2],[35.29,"-"],52.9],["HTI","Haiti",39.81,[20220918,0,1,2,4,0,0,0,1,2],[0.02,"="],1.94],["PAK","Pakistan",39.87,[20220919,0,0,0,0,0,0,0,1,4],[0.03,"="],56.88],["PER","Peru",40.09,[20220912,1,1,1,0,1,0,1,1,3],[3.52,"-"],83.63],["ETH","Ethiopia",40.74,[20220822,1,1,1,3,1,0,0,1,3],[0.01,"="],30.52],["MMR","Myanmar",40.74,[20220918,1,1,0,0,1,2,2,1,4],[0.65,"+"],51.2],["MWI","Malawi",40.74,[20220923,1,1,1,3,1,0,0,1,3],[0.02,"-"],11.3],["BHS","Bahamas",40.74,[20220918,1,1,1,3,1,0,0,1,4],[2.91,"+"],40.33],["GTM","Guatemala",41.2,[20220912,2,1,1,3,1,1,0,0,4],[4.04,"+"],39.08],["IRQ","Iraq",41.37,[20220830,0,2,2,1,0,0,0,1,2],[0.26,"="],17.96],["TUN","Tunisia",41.59,[20220920,0,1,2,4,0,0,0,1,3],[0.22,"="],52.05],["SLE","Sierra Leone",42.61,[20220919,2,2,2,0,1,0,0,1,3],[0.0,"="],26.0],["AZE","Azerbaijan",44.68,[20220919,0,3,2,0,2,0,2,1,0],[1.87,"-"],47.15],["DZA","Algeria",45.32,[20220916,1,2,1,4,1,0,0,1,3],[0.01,"="],14.67],["NGA","Nigeria",46.81,[20220918,0,0,1,3,1,0,2,1,3],[0.02,"="],14.59],["TON","Tonga",48.61,[20220911,1,2,1,0,0,2,2,1,4],[0.0,"="],72.26],["HKG","Hong Kong",48.87,[20220919,2,1,2,4,0,0,0,2,2],[78.95,"-"],88.93],["ZWE","Zimbabwe",52.61,[20220910,1,1,1,3,1,2,1,1,4],[0.32,"-"],29.58],["LAO","Laos",53.01,[20220919,2,1,1,4,1,2,0,1,3],[0.63,"-"],70.34],["IRN","Iran",53.9,[20220912,1,2,2,4,0,0,2,1,3],[0.7,"+"],66.44],["DJI","Djibouti",54.63,[20220919,1,1,2,4,1,0,0,3,3],[0.0,"="],19.2],["UKR","Ukraine",65.33,[20220819,3,1,2,3,2,1,2,3,3],[13.06,"="],34.81],["CHN","China",73.61,[20220822,3,3,2,4,2,3,1,2,4],[0.06,"="],89.11],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[23.41,"+"],45.37]];