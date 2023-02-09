const dataUpdate="2023.02.09";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["AFG","Afghanistan",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.08,"+"],26.67],["LVA","Latvia",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.28,"-"],70.57],["HUN","Hungary",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.22,"+"],62.28],["MDG","Madagascar",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.01,"="],7.12],["KIR","Kiribati",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],60.83],["BLR","Belarus",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],67.23],["JOR","Jordan",0.0,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["PSE","Palestine",0.0,[20221231,0,0,0,0,0,0,0,0,1],[],33.85],["BWA","Botswana",0.0,[20221231,0,0,0,0,0,0,0,0,0],[1.62,"="],54.29],["BTN","Bhutan",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.06,"="],86.61],["DJI","Djibouti",2.78,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],26.5],["TZA","Tanzania",2.78,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"+"],44.69],["NAM","Namibia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],20.61],["GAB","Gabon",5.56,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["DOM","Dominican Republic",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.32,"="],54.13],["CHE","Switzerland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[1.52,"="],68.79],["MUS","Mauritius",5.56,[20221231,0,0,0,0,0,0,0,0,2],[3.52,"="],83.74],["THA","Thailand",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.05,"="],74.6],["MDA","Moldova",5.56,[20221231,0,0,0,0,0,0,0,0,1],[3.2,"="],32.86],["CAN","Canada",5.56,[20221231,0,0,0,0,0,0,0,0,2],[3.73,"-"],82.6],["GBR","United Kingdom",5.56,[20221231,0,0,0,0,0,0,0,0,1],[4.1,"="],75.19],["KHM","Cambodia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.01,"+"],87.19],["YEM","Yemen",5.56,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"="],2.26],["GEO","Georgia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[16.76,"+"],34.08],["UZB","Uzbekistan",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.05,"="],51.6],["KAZ","Kazakhstan",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],54.79],["SRB","Serbia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[8.43,"-"],47.71],["ISL","Iceland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[6.32,"="],77.82],["SOM","Somalia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],37.11],["PNG","Papua New Guinea",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],3.07],["SDN","Sudan",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"-"],17.71],["TJK","Tajikistan",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],51.95],["BFA","Burkina Faso",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],14.71],["CAF","Central African Republic",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],37.44],["ZMB","Zambia",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.77,"+"],43.38],["MRT","Mauritania",8.33,[20221231,0,0,0,0,0,0,0,1,1],[0.01,"+"],32.46],["CMR","Cameroon",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],11.91],["POL","Poland",9.26,[20221231,1,0,0,0,0,0,0,0,2],[2.13,"+"],56.8],["EGY","Egypt",10.29,[20221231,0,2,0,0,0,0,0,0,3],[0.0,"="],36.19],["SSD","South Sudan",10.55,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],20.43],["NER","Niger",10.55,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],20.25],["LIE","Liechtenstein",11.11,[20221231,0,0,0,0,0,0,0,0,0],[4.87,"+"],67.24],["TUR","Turkey",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["LSO","Lesotho",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],40.16],["SVK","Slovak Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.45,"+"],45.68],["KWT","Kuwait",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],78.35],["TTO","Trinidad and Tobago",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],46.82],["KGZ","Kyrgyz Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.02,"="],20.64],["LTU","Lithuania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[10.57,"+"],68.37],["KOR","South Korea",11.11,[20221231,0,0,0,0,0,0,0,0,2],[27.32,"-"],85.75],["MCO","Monaco",11.11,[20221231,0,0,0,0,0,0,0,0,2],[10.56,"+"],70.34],["SMR","San Marino",11.11,[20221231,0,0,0,0,0,0,0,0,1],[17.26,"="],70.15],["SWE","Sweden",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.03,"="],72.38],["SWZ","Eswatini",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.12,"="],34.39],["SAU","Saudi Arabia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.14,"="],69.63],["RUS","Russia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[6.23,"+"],54.79],["ROU","Romania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.08,"="],41.28],["QAT","Qatar",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.75,"+"],105.79],["PRY","Paraguay",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.81,"="],52.2],["LUX","Luxembourg",11.11,[20221231,0,0,0,0,0,0,0,0,0],[9.22,"+"],71.44],["PRT","Portugal",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.43,"="],86.57],["SYR","Syria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.2],["OMN","Oman",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221231,0,0,0,0,0,0,0,0,2],[26.31,"-"],79.84],["NOR","Norway",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.81,"+"],74.61],["NLD","Netherlands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.11,"-"],68.08],["NGA","Nigeria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],29.27],["MNG","Mongolia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.05,"+"],64.02],["MLT","Malta",11.11,[20221231,0,0,0,0,0,0,0,0,2],[3.36,"="],88.39],["PER","Peru",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.42,"-"],83.67],["HRV","Croatia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.22,"-"],55.85],["IRL","Ireland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.31,"+"],80.82],["HKG","Hong Kong",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],90.71],["DZA","Algeria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.01,"="],14.43],["DNK","Denmark",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.41,"+"],80.82],["CZE","Czech Republic",11.11,[20221231,0,0,0,0,0,0,0,0,0],[4.35,"+"],65.69],["CYP","Cyprus",11.11,[20221231,0,0,0,0,0,0,0,0,1],[17.71,"="],72.1],["CRI","Costa Rica",11.11,[20221231,0,0,0,0,0,0,0,0,2],[11.78,"="],83.28],["CPV","Cape Verde",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.15,"+"],52.05],["BRN","Brunei",11.11,[20221231,0,0,0,0,0,0,0,0,2],[24.75,"+"],99.4],["BRB","Barbados",11.11,[20221231,0,0,0,0,0,0,0,0,2],[13.77,"="],55.04],["BLZ","Belize",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.33,"="],54.61],["VUT","Vanuatu",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],40.31],["BHR","Bahrain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"-"],83.33],["BGR","Bulgaria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.54,"-"],30.61],["BEN","Benin",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],20.54],["ZAF","South Africa",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.24,"-"],35.13],["AUS","Australia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[9.78,"="],82.72],["AND","Andorra",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.03,"="],66.99],["ALB","Albania",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.22,"="],44.8],["ESP","Spain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.77,"="],85.64],["EST","Estonia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.36,"="],63.99],["SVN","Slovenia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[8.89,"-"],57.66],["GRC","Greece",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],73.61],["GMB","Gambia",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],16.79],["GRL","Greenland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["FRO","Faeroe Islands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["FRA","France",11.11,[20221231,0,0,0,0,0,0,0,0,1],[5.1,"-"],78.39],["MOZ","Mozambique",12.04,[20221231,0,1,0,0,0,0,0,1,2],[0.38,"="],55.97],["URY","Uruguay",13.89,[20221231,0,0,0,0,0,0,0,1,1],[2.28,"="],84.67],["NIC","Nicaragua",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.04,"-"],86.53],["VEN","Venezuela",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.04,"+"],52.88],["CIV","Cote d'Ivoire",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.02,"="],42.49],["MYS","Malaysia",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.72,"-"],81.15],["TCD","Chad",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],34.31],["COG","Congo",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["CUB","Cuba",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.07,"="],89.25],["BGD","Bangladesh",13.89,[20221231,0,0,0,0,0,0,0,1,4],[0.01,"="],79.42],["LBY","Libya",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.01,"="],18.15],["UKR","Ukraine",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.15,"-"],38.17],["ARE","United Arab Emirates",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.78,"+"],103.72],["SYC","Seychelles",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],76.22],["CHL","Chile",13.89,[20221231,0,0,0,0,0,0,0,1,2],[8.33,"-"],90.29],["ARG","Argentina",14.38,[20221231,0,0,0,0,0,0,0,0,1],[1.01,"="],76.52],["ISR","Israel",14.81,[20221231,1,0,0,0,0,0,0,0,2],[5.3,"-"],65.18],["DEU","Germany",14.81,[20221231,0,0,0,0,0,1,0,0,2],[14.14,"+"],76.23],["BEL","Belgium",14.81,[20221231,0,1,0,0,0,0,0,0,2],[4.81,"="],78.65],["ECU","Ecuador",14.81,[20221231,0,0,0,0,0,1,0,0,2],[0.62,"="],79.04],["IDN","Indonesia",14.93,[20221231,0,0,0,0,0,0,0,1,1],[0.09,"="],62.68],["TLS","Timor-Leste",15.03,[20221231,0,0,0,0,0,0,0,1,3],[0.01,"="],59.45],["TON","Tonga",16.18,[20221231,0,0,0,0,0,0,0,1,1],[6.08,"="],72.49],["IRQ","Iraq",16.67,[20221231,0,0,2,1,0,0,0,1,0],[0.0,"="],17.85],["JAM","Jamaica",16.67,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"-"],26.44],["LBN","Lebanon",16.67,[20221231,0,0,0,0,1,0,0,0,2],[1.84,"-"],43.98],["AGO","Angola",17.02,[20221231,0,2,0,0,0,0,0,1,2],[0.0,"="],23.34],["TWN","Taiwan",17.59,[20221231,1,0,0,0,0,0,0,1,2],[98.06,"-"],86.66],["SGP","Singapore",17.59,[20221231,1,0,0,0,0,0,0,1,2],[7.23,"+"],90.85],["MEX","Mexico",17.59,[20221231,1,0,0,0,0,0,0,1,2],[1.5,"-"],64.82],["GUY","Guyana",18.52,[20221231,1,1,0,0,0,0,0,0,1],[0.96,"="],47.0],["FIN","Finland",18.52,[20221231,1,1,0,0,0,0,0,0,1],[1.49,"="],78.47],["COL","Colombia",19.44,[20221231,1,1,0,0,0,0,0,1,1],[0.14,"-"],71.23],["SEN","Senegal",19.44,[20221231,0,0,0,0,1,0,0,1,3],[0.0,"="],8.25],["BDI","Burundi",19.44,[20221231,0,0,1,0,0,0,0,1,3],[0.1,"-"],0.24],["PAN","Panama",20.37,[20221231,1,0,1,0,0,0,0,0,2],[1.7,"="],71.86],["SUR","Suriname",21.3,[20221231,1,1,0,0,0,0,0,1,2],[5.04,"="],38.49],["NPL","Nepal",21.59,[20221231,0,0,0,1,0,0,0,1,4],[0.0,"="],79.09],["ITA","Italy",21.99,[20221231,0,1,0,0,0,1,0,1,2],[8.12,"="],81.26],["BRA","Brazil",22.22,[20221231,0,0,0,0,0,0,2,1,2],[4.02,"-"],81.57],["ETH","Ethiopia",22.22,[20221231,0,0,0,3,0,0,0,1,3],[0.02,"="],29.75],["KEN","Kenya",22.77,[20221231,0,0,2,0,0,0,0,1,3],[0.0,"="],20.11],["HND","Honduras",23.15,[20221231,0,1,1,0,0,0,0,1,3],[0.67,"="],55.44],["VNM","Vietnam",23.15,[20221231,0,1,1,1,0,0,0,0,2],[0.01,"="],87.45],["LKA","Sri Lanka",23.15,[20221231,0,1,1,1,0,0,0,0,1],[0.01,"="],67.57],["MLI","Mali",23.69,[20221231,0,0,2,0,0,0,0,1,1],[0.02,"="],12.6],["BOL","Bolivia",24.07,[20221231,1,1,1,0,0,0,0,1,2],[2.3,"-"],50.4],["DMA","Dominica",24.07,[20221231,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["BMU","Bermuda",24.07,[20221231,1,1,1,0,0,0,0,0,2],[3.21,"+"],74.22],["MAR","Morocco",24.46,[20221231,0,1,0,0,0,0,0,0,3],[0.02,"="],62.79],["COD","Democratic Republic of Congo",25.0,[20221231,0,0,0,0,0,0,2,1,3],[0.01,"="],6.92],["RKS","Kosovo",25.04,[20221231,2,2,2,0,0,0,0,0,1],[0.78,"+"],46.3],["PHL","Philippines",25.41,[20221231,0,1,1,0,1,0,0,1,2],[0.08,"-"],64.0],["GIN","Guinea",25.45,[20221231,0,2,2,0,0,0,2,1,2],[0.0,"="],23.77],["RWA","Rwanda",25.64,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],71.85],["FJI","Fiji",25.74,[20221231,0,1,1,0,0,0,0,1,2],[0.45,"="],68.92],["ABW","Aruba",25.93,[20221231,0,1,1,2,0,0,0,0,2],[0.0,"="],78.98],["BIH","Bosnia and Herzegovina",25.93,[20221231,1,0,1,2,0,0,0,0,2],[0.21,"-"],26.17],["SLV","El Salvador",26.85,[20221231,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["BHS","Bahamas",26.85,[20221231,1,1,0,0,1,0,0,1,2],[0.0,"="],40.4],["LAO","Laos",28.61,[20221231,1,1,1,0,0,0,0,1,3],[0.03,"-"],69.36],["IND","India",28.7,[20221231,0,1,0,0,0,2,2,0,3],[0.01,"="],67.16],["USA","United States",28.72,[20221231,1,1,0,0,0,1,1,1,2],[11.33,"-"],69.19],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],31.07],["LBR","Liberia",29.46,[20221231,0,1,1,0,0,0,0,1,4],[0.01,"+"],70.36],["TGO","Togo",30.1,[20221231,0,0,1,3,0,0,0,1,3],[0.01,"="],17.56],["SLB","Solomon Islands",30.46,[20221231,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["TUN","Tunisia",31.36,[20221231,0,0,2,4,0,0,0,0,3],[0.15,"="],51.79],["HTI","Haiti",31.48,[20221231,0,1,1,3,0,0,0,1,2],[0.0,"="],2.06],["JPN","Japan",33.33,[20221231,1,1,1,1,0,1,1,1,1],[29.17,"-"],83.32],["GHA","Ghana",33.38,[20221231,0,2,2,0,0,0,0,1,1],[0.01,"="],29.3],["AUT","Austria",35.19,[20221231,2,2,1,2,0,0,0,0,2],[43.02,"+"],76.32],["MAC","Macao",36.11,[20221231,2,1,1,2,0,0,0,1,2],[],92.13],["GTM","Guatemala",36.57,[20221231,2,0,1,3,1,0,0,0,2],[1.76,"-"],39.66],["MMR","Myanmar",37.04,[20221231,1,0,0,0,1,2,2,1,3],[0.0,"-"],50.84],["SLE","Sierra Leone",37.96,[20221231,2,2,2,0,1,0,0,1,3],[0.0,"="],42.34],["UGA","Uganda",38.44,[20221231,0,2,2,0,2,0,0,1,1],[0.0,"="],27.43],["PAK","Pakistan",40.54,[20221231,0,0,0,0,0,0,0,1,2],[0.01,"="],59.03],["MWI","Malawi",40.74,[20221231,1,1,1,3,1,0,0,1,3],[0.0,"="],19.25],["AZE","Azerbaijan",45.56,[20221231,0,3,2,0,0,0,2,1,0],[0.22,"-"],46.94],["CHN","China",47.69,[20221231,3,1,2,3,1,0,0,2,3],[0.0,"="],89.53],["ZWE","Zimbabwe",53.7,[20221231,1,1,1,3,1,2,1,1,4],[0.73,"+"],29.11],["IRN","Iran",53.94,[20221231,1,2,2,4,0,0,2,1,2],[0.12,"+"],66.1],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[6.66,"+"],45.43]];