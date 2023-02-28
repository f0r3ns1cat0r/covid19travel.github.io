const dataUpdate="2023.02.28";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["AFG","Afghanistan",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.06,"="],28.9],["LVA","Latvia",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.17,"-"],70.57],["HUN","Hungary",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.28,"="],62.28],["MDG","Madagascar",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.01,"="],7.55],["KIR","Kiribati",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.12,"="],62.08],["BLR","Belarus",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],67.23],["JOR","Jordan",0.0,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["PSE","Palestine",0.0,[20221231,0,0,0,0,0,0,0,0,1],[],33.85],["BWA","Botswana",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.39,"-"],61.89],["BTN","Bhutan",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.07,"="],86.61],["DJI","Djibouti",2.78,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],30.75],["TZA","Tanzania",2.78,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"="],48.48],["NAM","Namibia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.35,"="],20.73],["GAB","Gabon",5.56,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.78],["DOM","Dominican Republic",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.05,"="],54.17],["CHE","Switzerland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[2.03,"="],68.79],["MUS","Mauritius",5.56,[20221231,0,0,0,0,0,0,0,0,2],[3.13,"="],83.74],["THA","Thailand",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.04,"="],74.6],["MDA","Moldova",5.56,[20221231,0,0,0,0,0,0,0,0,1],[10.04,"="],32.87],["CAN","Canada",5.56,[20221231,0,0,0,0,0,0,0,0,2],[3.37,"-"],82.6],["GBR","United Kingdom",5.56,[20221231,0,0,0,0,0,0,0,0,1],[6.01,"="],75.19],["KHM","Cambodia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.01,"="],87.3],["YEM","Yemen",5.56,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"="],2.29],["GEO","Georgia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[12.72,"="],34.08],["UZB","Uzbekistan",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.03,"="],52.27],["KAZ","Kazakhstan",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.93,"+"],54.79],["SRB","Serbia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[9.61,"-"],47.71],["ISL","Iceland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[3.27,"="],77.82],["SOM","Somalia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],37.11],["PNG","Papua New Guinea",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],3.09],["SDN","Sudan",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],22.49],["TJK","Tajikistan",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],51.95],["BFA","Burkina Faso",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],15.45],["CAF","Central African Republic",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],39.01],["ZMB","Zambia",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.08,"-"],43.38],["MRT","Mauritania",8.33,[20221231,0,0,0,0,0,0,0,1,1],[0.0,"="],32.47],["CMR","Cameroon",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.03,"-"],12.1],["POL","Poland",9.26,[20221231,1,0,0,0,0,0,0,0,2],[5.7,"+"],56.81],["EGY","Egypt",10.29,[20221231,0,2,0,0,0,0,0,0,3],[0.0,"="],36.82],["SSD","South Sudan",10.55,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],27.21],["NER","Niger",10.55,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],20.45],["LIE","Liechtenstein",11.11,[20221231,0,0,0,0,0,0,0,0,0],[9.74,"+"],67.24],["TUR","Turkey",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["LSO","Lesotho",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],40.45],["SVK","Slovak Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[3.54,"+"],45.68],["KWT","Kuwait",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.0,"="],78.35],["TTO","Trinidad and Tobago",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.31,"="],46.82],["KGZ","Kyrgyz Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.05,"="],20.69],["LTU","Lithuania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[11.6,"+"],68.37],["KOR","South Korea",11.11,[20221231,0,0,0,0,0,0,0,0,2],[18.93,"-"],85.75],["MCO","Monaco",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"-"],70.34],["SMR","San Marino",11.11,[20221231,0,0,0,0,0,0,0,0,1],[6.32,"="],70.15],["SWE","Sweden",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.94,"="],72.39],["SWZ","Eswatini",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],34.74],["SAU","Saudi Arabia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.17,"+"],69.63],["RUS","Russia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[8.16,"-"],54.96],["ROU","Romania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.87,"+"],41.28],["QAT","Qatar",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.81,"+"],105.81],["PRY","Paraguay",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.75,"="],52.23],["LUX","Luxembourg",11.11,[20221231,0,0,0,0,0,0,0,0,0],[3.81,"="],71.44],["PRT","Portugal",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],86.59],["SYR","Syria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.2],["OMN","Oman",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221231,0,0,0,0,0,0,0,0,2],[26.93,"-"],79.84],["NOR","Norway",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.81,"+"],74.61],["NLD","Netherlands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[3.69,"="],68.08],["NGA","Nigeria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.01,"+"],30.53],["MNG","Mongolia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],64.02],["MLT","Malta",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.91,"="],88.4],["PER","Peru",11.11,[20221231,0,0,0,0,0,0,0,0,1],[-0.02,"-"],83.76],["HRV","Croatia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.35,"+"],55.85],["IRL","Ireland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.09,"="],80.84],["HKG","Hong Kong",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],90.74],["DZA","Algeria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],14.43],["DNK","Denmark",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.97,"-"],80.78],["CZE","Czech Republic",11.11,[20221231,0,0,0,0,0,0,0,0,0],[9.26,"-"],65.68],["CYP","Cyprus",11.11,[20221231,0,0,0,0,0,0,0,0,1],[24.4,"="],72.1],["CRI","Costa Rica",11.11,[20221231,0,0,0,0,0,0,0,0,2],[12.54,"="],83.28],["CPV","Cape Verde",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.1,"+"],52.05],["BRN","Brunei",11.11,[20221231,0,0,0,0,0,0,0,0,2],[17.99,"="],99.44],["BRB","Barbados",11.11,[20221231,0,0,0,0,0,0,0,0,2],[10.49,"="],55.04],["BLZ","Belize",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.61,"-"],54.62],["VUT","Vanuatu",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],49.66],["BHR","Bahrain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[19.87,"+"],83.33],["BGR","Bulgaria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.97,"+"],30.61],["BEN","Benin",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],20.54],["ZAF","South Africa",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.52,"+"],35.13],["AUS","Australia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[10.46,"="],82.72],["AND","Andorra",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],67.0],["ALB","Albania",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.32,"="],44.85],["ESP","Spain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.25,"="],85.64],["EST","Estonia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.27,"="],64.0],["SVN","Slovenia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[13.79,"-"],57.66],["GRC","Greece",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],73.61],["GMB","Gambia",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],16.8],["GRL","Greenland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["FRO","Faeroe Islands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["FRA","France",11.11,[20221231,0,0,0,0,0,0,0,0,1],[5.78,"-"],78.4],["MOZ","Mozambique",12.04,[20221231,0,1,0,0,0,0,0,1,2],[0.0,"-"],56.01],["URY","Uruguay",13.89,[20221231,0,0,0,0,0,0,0,1,1],[1.06,"-"],84.69],["NIC","Nicaragua",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],86.67],["VEN","Venezuela",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.03,"="],52.88],["CIV","Cote d'Ivoire",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.04,"="],43.2],["MYS","Malaysia",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.62,"+"],81.15],["TCD","Chad",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"-"],34.43],["COG","Congo",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"="],10.96],["CUB","Cuba",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.05,"+"],89.26],["BGD","Bangladesh",13.89,[20221231,0,0,0,0,0,0,0,1,4],[0.0,"="],80.03],["LBY","Libya",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"+"],18.15],["UKR","Ukraine",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.21,"="],38.17],["ARE","United Arab Emirates",13.89,[20221231,0,0,0,0,0,0,0,1,2],[1.11,"-"],103.72],["SYC","Seychelles",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],76.29],["CHL","Chile",13.89,[20221231,0,0,0,0,0,0,0,1,2],[10.68,"+"],90.29],["ARG","Argentina",14.38,[20221231,0,0,0,0,0,0,0,0,1],[0.26,"-"],76.56],["ISR","Israel",14.81,[20221231,1,0,0,0,0,0,0,0,2],[7.19,"+"],65.18],["DEU","Germany",14.81,[20221231,0,0,0,0,0,1,0,0,2],[21.47,"+"],76.24],["BEL","Belgium",14.81,[20221231,0,1,0,0,0,0,0,0,2],[11.56,"="],78.65],["ECU","Ecuador",14.81,[20221231,0,0,0,0,0,1,0,0,2],[0.0,"="],79.07],["IDN","Indonesia",14.93,[20221231,0,0,0,0,0,0,0,1,1],[0.08,"+"],62.68],["TLS","Timor-Leste",15.03,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],59.5],["TON","Tonga",16.22,[20221231,0,0,0,0,0,0,0,1,1],[0.0,"="],72.06],["IRQ","Iraq",16.67,[20221231,0,0,2,1,0,0,0,1,0],[0.0,"="],17.85],["JAM","Jamaica",16.67,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"="],26.55],["LBN","Lebanon",16.67,[20221231,0,0,0,0,1,0,0,0,2],[1.67,"-"],43.98],["AGO","Angola",17.02,[20221231,0,2,0,0,0,0,0,1,2],[0.03,"+"],23.61],["TWN","Taiwan",17.59,[20221231,1,0,0,0,0,0,0,1,2],[20.23,"-"],86.75],["SGP","Singapore",17.59,[20221231,1,0,0,0,0,0,0,1,2],[10.72,"+"],90.85],["MEX","Mexico",17.59,[20221231,1,0,0,0,0,0,0,1,2],[2.35,"="],64.82],["GUY","Guyana",18.52,[20221231,1,1,0,0,0,0,0,0,1],[0.25,"="],47.23],["FIN","Finland",18.52,[20221231,1,1,0,0,0,0,0,0,1],[1.51,"="],78.47],["COL","Colombia",19.44,[20221231,1,1,0,0,0,0,0,1,1],[0.2,"="],71.23],["SEN","Senegal",19.44,[20221231,0,0,0,0,1,0,0,1,3],[0.01,"="],8.31],["BDI","Burundi",19.44,[20221231,0,0,1,0,0,0,0,1,3],[0.0,"="],0.25],["PAN","Panama",20.37,[20221231,1,0,1,0,0,0,0,0,2],[2.04,"+"],71.88],["SUR","Suriname",21.3,[20221231,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["NPL","Nepal",21.59,[20221231,0,0,0,1,0,0,0,1,4],[0.0,"="],79.33],["ITA","Italy",21.99,[20221231,0,1,0,0,0,1,0,1,2],[6.96,"="],81.24],["BRA","Brazil",22.22,[20221231,0,0,0,0,0,0,2,1,2],[3.4,"+"],81.66],["ETH","Ethiopia",22.22,[20221231,0,0,0,3,0,0,0,1,3],[0.01,"="],30.26],["KEN","Kenya",22.77,[20221231,0,0,2,0,0,0,0,1,3],[0.01,"="],20.26],["HND","Honduras",23.15,[20221231,0,1,1,0,0,0,0,1,3],[0.81,"="],55.71],["VNM","Vietnam",23.15,[20221231,0,1,1,1,0,0,0,0,2],[0.01,"="],87.49],["LKA","Sri Lanka",23.15,[20221231,0,1,1,1,0,0,0,0,1],[0.0,"="],67.57],["MLI","Mali",23.69,[20221231,0,0,2,0,0,0,0,1,1],[0.06,"="],12.82],["BOL","Bolivia",24.07,[20221231,1,1,1,0,0,0,0,1,2],[0.89,"-"],50.4],["DMA","Dominica",24.07,[20221231,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["BMU","Bermuda",24.07,[20221231,1,1,1,0,0,0,0,0,2],[1.84,"="],74.22],["MAR","Morocco",24.46,[20221231,0,1,0,0,0,0,0,0,3],[0.02,"="],62.79],["COD","Democratic Republic of Congo",25.0,[20221231,0,0,0,0,0,0,2,1,3],[0.0,"="],9.23],["RKS","Kosovo",25.04,[20221231,2,2,2,0,0,0,0,0,1],[1.56,"-"],46.3],["PHL","Philippines",25.41,[20221231,0,1,1,0,1,0,0,1,2],[0.09,"="],64.05],["GIN","Guinea",25.45,[20221231,0,2,2,0,0,0,2,1,2],[0.0,"="],31.04],["RWA","Rwanda",25.64,[20221231,0,0,0,0,0,0,0,0,0],[0.01,"+"],71.85],["FJI","Fiji",25.74,[20221231,0,1,1,0,0,0,0,1,2],[0.21,"="],68.93],["ABW","Aruba",25.93,[20221231,0,1,1,2,0,0,0,0,2],[0.0,"="],79.02],["BIH","Bosnia and Herzegovina",25.93,[20221231,1,0,1,2,0,0,0,0,2],[0.21,"="],26.17],["SLV","El Salvador",26.85,[20221231,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["BHS","Bahamas",26.85,[20221231,1,1,0,0,1,0,0,1,2],[0.0,"="],40.4],["LAO","Laos",28.61,[20221231,1,1,1,0,0,0,0,1,3],[0.01,"="],69.36],["IND","India",28.7,[20221231,0,1,0,0,0,2,2,0,3],[0.01,"="],67.17],["USA","United States",28.72,[20221231,1,1,0,0,0,1,1,1,2],[11.13,"+"],69.27],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],31.07],["LBR","Liberia",29.46,[20221231,0,1,1,0,0,0,0,1,4],[0.03,"+"],70.36],["TGO","Togo",30.1,[20221231,0,0,1,3,0,0,0,1,3],[0.02,"="],17.56],["SLB","Solomon Islands",30.46,[20221231,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["TUN","Tunisia",31.36,[20221231,0,0,2,4,0,0,0,0,3],[0.23,"="],51.79],["HTI","Haiti",31.48,[20221231,0,1,1,3,0,0,0,1,2],[0.0,"="],2.06],["JPN","Japan",33.33,[20221231,1,1,1,1,0,1,1,1,1],[10.43,"-"],83.35],["GHA","Ghana",33.38,[20221231,0,2,2,0,0,0,0,1,1],[0.01,"="],29.3],["AUT","Austria",35.19,[20221231,2,2,1,2,0,0,0,0,2],[61.84,"+"],76.32],["MAC","Macao",36.11,[20221231,2,1,1,2,0,0,0,1,2],[],92.23],["GTM","Guatemala",36.57,[20221231,2,0,1,3,1,0,0,0,2],[1.54,"+"],39.75],["MMR","Myanmar",37.04,[20221231,1,0,0,0,1,2,2,1,3],[0.0,"="],50.84],["SLE","Sierra Leone",37.96,[20221231,2,2,2,0,1,0,0,1,3],[0.0,"="],44.7],["UGA","Uganda",38.44,[20221231,0,2,2,0,2,0,0,1,1],[0.01,"+"],27.56],["PAK","Pakistan",40.54,[20221231,0,0,0,0,0,0,0,1,2],[0.01,"-"],59.04],["MWI","Malawi",40.74,[20221231,1,1,1,3,1,0,0,1,3],[0.03,"="],19.33],["AZE","Azerbaijan",45.56,[20221231,0,3,2,0,0,0,2,1,0],[0.22,"-"],46.94],["CHN","China",47.69,[20221231,3,1,2,3,1,0,0,2,3],[0.0,"="],89.54],["ZWE","Zimbabwe",53.7,[20221231,1,1,1,3,1,2,1,1,4],[0.27,"="],29.11],["IRN","Iran",53.94,[20221231,1,2,2,4,0,0,2,1,2],[0.17,"-"],66.11],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[14.51,"-"],45.43]];