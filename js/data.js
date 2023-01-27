const dataUpdate="2023.01.27";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20221231,0,0,0,0,0,0,0,0,2],[0.93,"="],62.28],["AFG","Afghanistan",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.1,"-"],26.64],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["JOR","Jordan",0.0,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["MDG","Madagascar",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.01,"="],7.12],["VIR","United States Virgin Islands",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["LVA","Latvia",0.0,[20221231,0,0,0,0,0,0,0,0,2],[1.19,"+"],70.57],["BWA","Botswana",0.0,[20221231,0,0,0,0,0,0,0,0,0],[1.86,"="],54.29],["BTN","Bhutan",0.0,[20221231,0,0,0,0,0,0,0,0,1],[0.39,"="],86.61],["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.0,"="]],["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["KIR","Kiribati",0.0,[20221231,0,0,0,0,0,0,0,0,0],[8.37,"="],56.3],["BLR","Belarus",0.0,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],67.2],["PSE","Palestine",0.0,[20221231,0,0,0,0,0,0,0,0,1],[],33.85],["TZA","Tanzania",2.78,[20221231,0,0,0,0,0,0,0,1,0],[0.02,"="],44.69],["DJI","Djibouti",2.78,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],26.5],["GEO","Georgia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[11.33,"="],34.08],["MUS","Mauritius",5.56,[20221231,0,0,0,0,0,0,0,0,2],[7.9,"="],83.74],["NAM","Namibia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],20.61],["ISL","Iceland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[2.76,"="],77.82],["SRB","Serbia",5.56,[20221231,0,0,0,0,0,0,0,0,0],[7.84,"+"],47.71],["MDA","Moldova",5.56,[20221231,0,0,0,0,0,0,0,0,1],[1.68,"="],32.85],["DOM","Dominican Republic",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.29,"="],54.12],["SOM","Somalia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.01,"="],37.11],["UZB","Uzbekistan",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.06,"-"],51.6],["CHE","Switzerland",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],68.78],["GBR","United Kingdom",5.56,[20221231,0,0,0,0,0,0,0,0,1],[3.21,"-"],75.19],["CAN","Canada",5.56,[20221231,0,0,0,0,0,0,0,0,2],[4.09,"-"],82.59],["YEM","Yemen",5.56,[20221231,0,0,1,0,0,0,0,0,0],[0.0,"="],2.26],["EGY","Egypt",5.56,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],36.19],["THA","Thailand",5.56,[20221231,0,0,0,0,0,0,0,0,1],[0.13,"="],74.6],["SDN","Sudan",5.56,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],17.71],["PNG","Papua New Guinea",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],3.06],["KHM","Cambodia",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.01,"="],87.15],["GAB","Gabon",5.56,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],10.77],["KAZ","Kazakhstan",5.56,[20221231,0,0,0,0,0,0,0,0,2],[0.23,"-"],54.79],["CAF","Central African Republic",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],37.44],["CMR","Cameroon",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],11.91],["MRT","Mauritania",8.33,[20221231,0,0,0,0,0,0,0,1,1],[0.0,"="],32.46],["BFA","Burkina Faso",8.33,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],14.71],["ZMB","Zambia",8.33,[20221231,0,0,0,0,0,0,0,1,3],[1.2,"-"],43.15],["TJK","Tajikistan",8.33,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],51.95],["POL","Poland",9.26,[20221231,1,0,0,0,0,0,0,0,2],[0.98,"+"],56.8],["NER","Niger",10.55,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],20.25],["SSD","South Sudan",10.55,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],20.43],["MNG","Mongolia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.06,"-"],64.02],["IRL","Ireland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.62,"="],80.81],["SWE","Sweden",11.11,[20221231,0,0,0,0,0,0,0,0,0],[4.22,"+"],72.37],["SVN","Slovenia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[11.54,"-"],57.66],["SVK","Slovak Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.64,"-"],45.68],["TUR","Turkey",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["SMR","San Marino",11.11,[20221231,0,0,0,0,0,0,0,0,1],[13.89,"="],70.15],["SYR","Syria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.01,"="],10.2],["KGZ","Kyrgyz Republic",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.01,"="],20.62],["SAU","Saudi Arabia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.1,"="],69.63],["RUS","Russia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[3.96,"+"],54.63],["ROU","Romania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[2.2,"="],41.28],["QAT","Qatar",11.11,[20221231,0,0,0,0,0,0,0,0,2],[2.07,"-"],105.78],["MLT","Malta",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.91,"-"],88.39],["PRY","Paraguay",11.11,[20221231,0,0,0,0,0,0,0,0,2],[10.66,"="],52.16],["KWT","Kuwait",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],78.34],["TTO","Trinidad and Tobago",11.11,[20221231,0,0,0,0,0,0,0,0,3],[3.89,"="],46.82],["LIE","Liechtenstein",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"-"],67.23],["LSO","Lesotho",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],40.16],["LTU","Lithuania",11.11,[20221231,0,0,0,0,0,0,0,0,1],[8.78,"-"],68.36],["LUX","Luxembourg",11.11,[20221231,0,0,0,0,0,0,0,0,0],[6.73,"-"],71.43],["PER","Peru",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"-"],83.61],["OMN","Oman",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],66.62],["NZL","New Zealand",11.11,[20221231,0,0,0,0,0,0,0,0,2],[41.2,"="],79.82],["MCO","Monaco",11.11,[20221231,0,0,0,0,0,0,0,0,2],[4.0,"+"],70.34],["NOR","Norway",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.91,"-"],74.61],["NLD","Netherlands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.45,"="],68.08],["NGA","Nigeria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],29.27],["PRT","Portugal",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.95,"-"],86.56],["KOR","South Korea",11.11,[20221231,0,0,0,0,0,0,0,0,2],[42.35,"+"],85.78],["SWZ","Eswatini",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.34,"="],34.39],["CRI","Costa Rica",11.11,[20221231,0,0,0,0,0,0,0,0,2],[13.62,"="],83.28],["CPV","Cape Verde",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.08,"-"],52.05],["CYP","Cyprus",11.11,[20221231,0,0,0,0,0,0,0,0,1],[31.56,"="],72.1],["CZE","Czech Republic",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.67,"+"],65.69],["BRN","Brunei",11.11,[20221231,0,0,0,0,0,0,0,0,2],[32.75,"="],99.32],["BRB","Barbados",11.11,[20221231,0,0,0,0,0,0,0,0,2],[12.53,"="],55.04],["DNK","Denmark",11.11,[20221231,0,0,0,0,0,0,0,0,0],[2.68,"-"],80.86],["DZA","Algeria",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.02,"="],14.43],["BLZ","Belize",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.98,"="],54.6],["VUT","Vanuatu",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],40.31],["ESP","Spain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[3.49,"="],85.63],["EST","Estonia",11.11,[20221231,0,0,0,0,0,0,0,0,1],[3.37,"="],63.98],["BHR","Bahrain",11.11,[20221231,0,0,0,0,0,0,0,0,2],[4.08,"+"],83.33],["BEN","Benin",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],20.54],["FRA","France",11.11,[20221231,0,0,0,0,0,0,0,0,1],[6.84,"+"],78.38],["FRO","Faeroe Islands",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["BGR","Bulgaria",11.11,[20221231,0,0,0,0,0,0,0,0,0],[1.0,"-"],30.6],["ZAF","South Africa",11.11,[20221231,0,0,0,0,0,0,0,0,0],[0.37,"-"],35.13],["HRV","Croatia",11.11,[20221231,0,0,0,0,0,0,0,0,2],[1.73,"-"],55.85],["GMB","Gambia",11.11,[20221231,0,0,0,0,0,0,0,0,3],[0.0,"="],16.79],["ALB","Albania",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.25,"+"],44.76],["GRC","Greece",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"="],73.6],["GRL","Greenland",11.11,[20221231,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["HKG","Hong Kong",11.11,[20221231,0,0,0,0,0,0,0,0,2],[36.18,"-"],90.69],["AUS","Australia",11.11,[20221231,0,0,0,0,0,0,0,0,0],[15.28,"+"],82.73],["AND","Andorra",11.11,[20221231,0,0,0,0,0,0,0,0,2],[0.0,"-"],66.99],["MOZ","Mozambique",12.04,[20221231,0,1,0,0,0,0,0,1,2],[0.27,"="],55.97],["CIV","Cote d'Ivoire",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.0,"="],42.49],["MYS","Malaysia",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.63,"-"],81.14],["UKR","Ukraine",13.89,[20221231,0,0,0,0,0,0,0,1,1],[0.99,"="],38.17],["CUB","Cuba",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.1,"="],89.25],["TKM","Turkmenistan",13.89,[20221231,0,0,0,0,0,0,0,1,3],[],57.37],["CHL","Chile",13.89,[20221231,0,0,0,0,0,0,0,1,2],[10.66,"-"],90.28],["NIC","Nicaragua",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],85.79],["VEN","Venezuela",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.1,"-"],52.88],["URY","Uruguay",13.89,[20221231,0,0,0,0,0,0,0,1,1],[8.29,"="],84.66],["SYC","Seychelles",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],76.22],["COG","Congo",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["BGD","Bangladesh",13.89,[20221231,0,0,0,0,0,0,0,1,4],[0.01,"="],77.87],["LBY","Libya",13.89,[20221231,0,0,0,0,0,0,0,1,0],[0.0,"="],18.15],["TCD","Chad",13.89,[20221231,0,0,0,0,0,0,0,1,3],[0.0,"="],34.31],["ARE","United Arab Emirates",13.89,[20221231,0,0,0,0,0,0,0,1,2],[0.93,"+"],103.72],["ARG","Argentina",14.38,[20221231,0,0,0,0,0,0,0,0,1],[2.72,"="],76.49],["DEU","Germany",14.81,[20221231,0,0,0,0,0,1,0,0,2],[11.7,"+"],76.23],["ECU","Ecuador",14.81,[20221231,0,0,0,0,0,1,0,0,2],[2.93,"="],79.02],["BEL","Belgium",14.81,[20221231,0,1,0,0,0,0,0,0,2],[3.17,"-"],78.65],["ISR","Israel",14.81,[20221231,1,0,0,0,0,0,0,0,2],[6.82,"-"],65.17],["IDN","Indonesia",14.93,[20221231,0,0,0,0,0,0,0,1,1],[0.09,"="],62.68],["TLS","Timor-Leste",15.03,[20221231,0,0,0,0,0,0,0,1,3],[0.04,"-"],59.41],["TON","Tonga",16.18,[20221231,0,0,0,0,0,0,0,1,1],[11.08,"="],72.49],["IRQ","Iraq",16.67,[20221231,0,0,2,1,0,0,0,1,0],[0.0,"="],17.85],["JAM","Jamaica",16.67,[20221231,0,0,1,0,0,0,0,0,0],[1.27,"="],26.4],["LBN","Lebanon",16.67,[20221231,0,0,0,0,1,0,0,0,2],[3.63,"-"],43.98],["AGO","Angola",17.02,[20221231,0,2,0,0,0,0,0,1,2],[0.04,"="],23.34],["SGP","Singapore",17.59,[20221231,1,0,0,0,0,0,0,1,2],[4.09,"+"],90.83],["TWN","Taiwan",17.59,[20221231,1,0,0,0,0,0,0,1,2],[71.76,"+"],86.33],["MEX","Mexico",17.59,[20221231,1,0,0,0,0,0,0,1,2],[4.23,"+"],64.82],["GUY","Guyana",18.52,[20221231,1,1,0,0,0,0,0,0,1],[2.87,"="],47.0],["FIN","Finland",18.52,[20221231,1,1,0,0,0,0,0,0,1],[22.66,"+"],78.47],["SEN","Senegal",19.44,[20221231,0,0,0,0,1,0,0,1,3],[0.0,"="],8.25],["BDI","Burundi",19.44,[20221231,0,0,1,0,0,0,0,1,3],[0.0,"="],0.24],["COL","Colombia",19.44,[20221231,1,1,0,0,0,0,0,1,1],[1.28,"+"],71.19],["PAN","Panama",20.37,[20221231,1,0,1,0,0,0,0,0,2],[2.61,"="],71.81],["SUR","Suriname",21.3,[20221231,1,1,0,0,0,0,0,1,2],[0.0,"="],38.49],["NPL","Nepal",21.59,[20221231,0,0,0,1,0,0,0,1,4],[0.01,"="],79.09],["ITA","Italy",21.99,[20221231,0,1,0,0,0,1,0,1,2],[12.26,"="],81.26],["BRA","Brazil",22.22,[20221231,0,0,0,0,0,0,2,1,2],[6.1,"="],81.51],["ETH","Ethiopia",22.22,[20221231,0,0,0,3,0,0,0,1,3],[0.02,"="],29.75],["KEN","Kenya",22.77,[20221231,0,0,2,0,0,0,0,1,3],[0.01,"-"],20.11],["LKA","Sri Lanka",23.15,[20221231,0,1,1,1,0,0,0,0,1],[0.01,"="],67.57],["HND","Honduras",23.15,[20221231,0,1,1,0,0,0,0,1,3],[0.88,"="],55.33],["VNM","Vietnam",23.15,[20221231,0,1,1,1,0,0,0,0,2],[0.01,"="],87.45],["MLI","Mali",23.69,[20221231,0,0,2,0,0,0,0,1,1],[0.0,"="],12.6],["BMU","Bermuda",24.07,[20221231,1,1,1,0,0,0,0,0,2],[3.44,"="],74.22],["BOL","Bolivia",24.07,[20221231,1,1,1,0,0,0,0,1,2],[3.39,"-"],50.4],["DMA","Dominica",24.07,[20221231,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["MAR","Morocco",24.46,[20221231,0,1,0,0,0,0,0,0,3],[0.03,"="],62.79],["COD","Democratic Republic of Congo",25.0,[20221231,0,0,0,0,0,0,2,1,3],[0.02,"="],6.92],["RKS","Kosovo",25.04,[20221231,2,2,2,0,0,0,0,0,1],[0.59,"-"],46.29],["PHL","Philippines",25.41,[20221231,0,1,1,0,1,0,0,1,2],[0.17,"+"],63.99],["GIN","Guinea",25.45,[20221231,0,2,2,0,0,0,2,1,2],[0.02,"="],23.77],["RWA","Rwanda",25.64,[20221231,0,0,0,0,0,0,0,0,0],[0.01,"="],71.85],["FJI","Fiji",25.74,[20221231,0,1,1,0,0,0,0,1,2],[0.19,"-"],68.91],["ABW","Aruba",25.93,[20221231,0,1,1,2,0,0,0,0,2],[3.75,"="],78.95],["BIH","Bosnia and Herzegovina",25.93,[20221231,1,0,1,2,0,0,0,0,2],[0.27,"-"],26.17],["SLV","El Salvador",26.85,[20221231,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["BHS","Bahamas",26.85,[20221231,1,1,0,0,1,0,0,1,2],[0.0,"="],40.4],["LAO","Laos",28.61,[20221231,1,1,1,0,0,0,0,1,3],[0.04,"+"],69.36],["IND","India",28.7,[20221231,0,1,0,0,0,2,2,0,3],[0.01,"="],67.14],["USA","United States",28.73,[20221231,1,1,0,0,0,1,1,1,2],[12.53,"-"],69.13],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[0.0,"="],31.07],["LBR","Liberia",29.46,[20221231,0,1,1,0,0,0,0,1,4],[0.03,"="],70.36],["TGO","Togo",30.1,[20221231,0,0,1,3,0,0,0,1,3],[0.0,"="],17.56],["SLB","Solomon Islands",30.46,[20221231,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["TUN","Tunisia",31.36,[20221231,0,0,2,4,0,0,0,0,3],[0.07,"="],51.78],["HTI","Haiti",31.48,[20221231,0,1,1,3,0,0,0,1,2],[0.05,"="],2.06],["JPN","Japan",33.33,[20221231,1,1,1,1,0,1,1,1,1],[55.53,"-"],83.28],["GHA","Ghana",33.38,[20221231,0,2,2,0,0,0,0,1,1],[0.01,"="],29.3],["AUT","Austria",35.19,[20221231,2,2,1,2,0,0,0,0,2],[25.96,"+"],76.32],["MAC","Macao",36.11,[20221231,2,1,1,2,0,0,0,1,2],[],92.1],["GTM","Guatemala",36.57,[20221231,2,0,1,3,1,0,0,0,2],[3.63,"-"],39.55],["MMR","Myanmar",37.04,[20221231,1,0,0,0,1,2,2,1,3],[0.01,"="],50.84],["SLE","Sierra Leone",37.96,[20221231,2,2,2,0,1,0,0,1,3],[0.0,"="],42.34],["UGA","Uganda",38.44,[20221231,0,2,2,0,2,0,0,1,1],[0.02,"="],27.43],["PAK","Pakistan",40.54,[20221231,0,0,0,0,0,0,0,1,2],[0.01,"+"],59.03],["MWI","Malawi",40.74,[20221231,1,1,1,3,1,0,0,1,3],[0.04,"="],19.25],["AZE","Azerbaijan",45.56,[20221231,0,3,2,0,0,0,2,1,0],[0.36,"="],46.94],["ZWE","Zimbabwe",53.7,[20221231,1,1,1,3,1,2,1,1,4],[1.56,"="],29.11],["IRN","Iran",53.94,[20221231,1,2,2,4,0,0,2,1,2],[0.12,"="],66.1],["CHN","China",57.87,[20221231,3,3,2,4,1,0,0,2,3],[0.0,"="],89.52],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[7.19,"-"],45.43]];