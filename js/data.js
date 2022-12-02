const dataUpdate="2022.12.02";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.0,"="]],["BWA","Botswana",0.0,[20221117,0,0,0,0,0,0,0,0,0],[1.76,"="],53.7],["JOR","Jordan",0.0,[20221115,0,0,0,0,0,0,0,0,2],[0.0,"="],40.39],["VUT","Vanuatu",0.0,[20221130,0,0,0,0,0,0,0,0,-1],[0.0,"="],40.31],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["SAU","Saudi Arabia",0.0,[20221201,0,0,0,0,0,0,0,0,-1],[0.13,"="],69.57],["VIR","United States Virgin Islands",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["BTN","Bhutan",0.0,[20221115,0,0,0,0,0,0,0,0,1],[0.28,"="],86.61],["KIR","Kiribati",0.0,[20221114,0,0,0,0,0,0,0,0,0],[0.0,"="],56.3],["GIN","Guinea",2.78,[20221121,0,0,0,0,0,0,0,1,2],[0.0,"="],22.92],["TZA","Tanzania",2.78,[20221128,0,0,0,0,0,0,0,1,0],[0.04,"="],39.39],["ZMB","Zambia",2.78,[20221117,0,0,0,0,0,0,0,1,3],[0.02,"="],40.92],["DJI","Djibouti",2.78,[20221122,0,0,0,0,0,0,0,1,3],[0.0,"="],24.89],["DZA","Algeria",2.78,[20221113,0,0,0,0,0,0,0,1,3],[0.01,"-"],14.43],["AFG","Afghanistan",2.78,[20221120,0,0,1,0,0,0,0,0,1],[0.21,"+"],25.74],["MDG","Madagascar",5.56,[20221017,0,0,0,0,0,2,0,0,-1],[0.11,"="],6.12],["NAM","Namibia",5.56,[20221129,0,0,0,0,0,0,0,0,0],[0.0,"="],20.31],["LVA","Latvia",5.56,[20221115,0,0,0,0,0,0,0,0,2],[22.3,"+"],70.57],["CHE","Switzerland",5.56,[20221129,0,0,0,0,0,0,0,0,0],[31.53,"="],68.78],["DOM","Dominican Republic",5.56,[20221110,0,0,0,0,0,0,0,0,0],[2.54,"="],54.02],["CAN","Canada",5.56,[20221128,0,0,0,0,0,0,0,0,2],[6.66,"+"],82.4],["SWZ","Eswatini",5.56,[20221121,0,0,0,0,0,0,0,0,1],[0.0,"="],40.83],["HUN","Hungary",5.56,[20221107,0,0,0,0,0,0,0,0,2],[6.3,"="],62.27],["MUS","Mauritius",5.56,[20221122,0,0,0,0,0,0,0,0,2],[51.55,"="],83.74],["THA","Thailand",5.56,[20221129,0,0,0,0,0,0,0,0,1],[1.01,"="],74.6],["GBR","United Kingdom",5.56,[20221115,0,0,0,0,0,0,0,0,1],[5.7,"+"],75.19],["YEM","Yemen",5.56,[20221201,0,0,1,0,0,0,0,0,0],[0.0,"="],2.25],["KAZ","Kazakhstan",5.56,[20221113,0,0,0,0,0,0,0,0,2],[1.17,"+"],54.67],["AND","Andorra",5.56,[20221125,0,0,0,0,0,0,0,0,2],[73.03,"="],66.99],["SOM","Somalia",5.56,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"-"],33.74],["BEN","Benin",5.56,[20221128,0,0,0,0,0,0,0,0,2],[0.07,"="],20.17],["BLR","Belarus",5.56,[20221121,0,0,0,0,0,0,0,0,0],[0.0,"="],67.08],["UZB","Uzbekistan",5.56,[20221128,0,0,0,0,0,0,0,0,1],[0.39,"+"],50.62],["GEO","Georgia",5.56,[20221122,0,0,0,0,0,0,0,0,2],[4.37,"+"],34.08],["SDN","Sudan",5.56,[20221115,0,0,0,0,0,0,0,0,0],[0.0,"="],15.43],["BFA","Burkina Faso",8.33,[20221031,0,0,0,0,0,0,0,1,3],[0.0,"="],11.72],["MRT","Mauritania",8.33,[20221121,0,0,0,0,0,0,0,1,1],[0.0,"="],31.54],["COL","Colombia",8.33,[20221024,1,1,0,0,0,0,0,1,1],[0.0,"="],71.04],["TJK","Tajikistan",8.33,[20221122,0,0,0,0,0,0,0,1,0],[0.0,"="],51.45],["POL","Poland",9.26,[20221122,1,0,0,0,0,0,0,0,2],[1.09,"+"],56.7],["NER","Niger",10.56,[20221114,0,0,0,0,0,0,0,1,2],[0.0,"="],19.75],["SSD","South Sudan",10.57,[20221130,0,0,0,0,0,0,0,1,3],[0.0,"="],19.35],["LIE","Liechtenstein",11.11,[20221129,0,0,0,0,0,0,0,0,2],[28.48,"="],67.23],["KGZ","Kyrgyz Republic",11.11,[20221110,0,0,0,0,0,0,0,-1,2],[0.04,"="],20.44],["IRL","Ireland",11.11,[20221112,0,0,0,0,0,0,0,0,1],[4.98,"="],80.74],["TUR","Turkey",11.11,[20221128,0,0,0,0,0,0,0,0,2],[0.0,"="],62.31],["TTO","Trinidad and Tobago",11.11,[20221128,0,0,0,0,0,0,0,0,1],[1.43,"="],46.82],["ISL","Iceland",11.11,[20221121,0,0,0,0,0,0,0,0,-1],[12.48,"="],77.82],["KWT","Kuwait",11.11,[20221121,0,0,0,0,0,0,0,0,1],[0.18,"="],78.29],["TLS","Timor-Leste",11.11,[20221108,0,0,0,0,0,0,0,-1,3],[0.2,"+"],58.11],["MNG","Mongolia",11.11,[20221127,0,0,0,0,0,0,0,0,1],[6.87,"-"],64.02],["LTU","Lithuania",11.11,[20221126,0,0,0,0,0,0,0,0,1],[12.67,"+"],68.35],["SMR","San Marino",11.11,[20221115,0,0,0,0,0,0,0,0,1],[32.0,"-"],70.15],["SVK","Slovak Republic",11.11,[20221118,0,0,0,0,0,0,0,0,2],[4.04,"-"],45.68],["ROU","Romania",11.11,[20221114,0,0,0,0,0,0,0,0,1],[1.77,"="],41.28],["QAT","Qatar",11.11,[20221106,0,0,0,0,0,0,0,0,0],[9.28,"-"],105.72],["PSE","Palestine",11.11,[20221105,0,0,0,0,0,0,0,0,1],[],33.85],["PRT","Portugal",11.11,[20221128,0,0,0,0,0,0,0,0,0],[7.23,"="],86.46],["PNG","Papua New Guinea",11.11,[20221121,0,0,0,0,0,0,0,0,2],[0.58,"+"],3.0],["SVN","Slovenia",11.11,[20221114,0,0,0,0,0,0,0,0,2],[56.37,"+"],57.66],["LSO","Lesotho",11.11,[20221128,0,0,0,0,0,0,0,0,1],[0.0,"="],40.06],["SWE","Sweden",11.11,[20221128,0,0,0,0,0,0,0,0,0],[7.65,"+"],72.33],["NZL","New Zealand",11.11,[20221120,0,0,0,0,0,0,0,0,-1],[80.25,"+"],79.75],["NOR","Norway",11.11,[20221110,0,0,0,0,0,0,0,0,1],[2.89,"-"],74.61],["NLD","Netherlands",11.11,[20221110,0,0,0,0,0,0,0,0,0],[4.66,"="],68.08],["SYR","Syria",11.11,[20221128,0,0,0,0,0,0,0,0,3],[0.01,"="],9.51],["MLT","Malta",11.11,[20221130,0,0,0,0,0,0,0,0,2],[2.88,"+"],88.36],["MDA","Moldova",11.11,[20221118,0,0,0,0,0,0,0,0,1],[1.13,"="],32.79],["MCO","Monaco",11.11,[20221128,0,0,0,0,0,0,0,0,2],[68.08,"+"],70.34],["LUX","Luxembourg",11.11,[20221128,0,0,0,0,0,0,0,0,0],[26.47,"+"],71.43],["OMN","Oman",11.11,[20221130,0,0,0,0,0,0,0,0,0],[0.26,"="],66.62],["HRV","Croatia",11.11,[20221120,0,0,0,0,0,0,0,0,2],[5.97,"-"],55.83],["KOR","South Korea",11.11,[20221106,0,0,0,0,0,0,0,0,2],[103.36,"-"],86.27],["SRB","Serbia",11.11,[20221129,0,0,0,0,0,0,0,0,2],[6.31,"+"],47.71],["CRI","Costa Rica",11.11,[20221031,0,0,0,0,0,0,0,0,2],[7.12,"="],81.82],["CPV","Cape Verde",11.11,[20221128,0,0,0,0,0,0,0,0,2],[4.09,"-"],52.05],["DNK","Denmark",11.11,[20221117,0,0,0,0,0,0,0,0,0],[14.64,"+"],81.05],["ECU","Ecuador",11.11,[20221121,0,0,0,0,0,0,0,0,2],[0.95,"="],78.79],["EGY","Egypt",11.11,[20221110,0,0,0,0,0,0,0,0,3],[0.0,"="],36.07],["ESP","Spain",11.11,[20221127,0,0,0,0,0,0,0,0,2],[6.66,"="],85.49],["EST","Estonia",11.11,[20221129,0,0,0,0,0,0,0,0,1],[5.4,"="],63.93],["CYP","Cyprus",11.11,[20221107,0,0,0,0,0,0,0,0,3],[49.86,"="],72.07],["FRA","France",11.11,[20221130,0,0,0,0,0,0,0,0,0],[82.01,"+"],78.32],["FRO","Faeroe Islands",11.11,[20221127,0,0,0,0,0,0,0,0,0],[0.0,"="],76.99],["GAB","Gabon",11.11,[20221127,0,0,0,0,0,0,0,0,3],[0.01,"="],10.77],["BRN","Brunei",11.11,[20221031,0,0,0,0,0,0,0,0,1],[147.44,"="],99.32],["BLZ","Belize",11.11,[20221118,0,0,0,0,0,0,0,0,0],[1.29,"="],54.58],["ALB","Albania",11.11,[20221120,0,0,0,0,0,0,0,0,0],[0.27,"+"],44.62],["ARE","United Arab Emirates",11.11,[20221122,0,0,0,0,0,0,0,0,2],[1.56,"-"],103.72],["AUS","Australia",11.11,[20221122,0,0,0,0,0,0,0,0,0],[64.29,"+"],82.73],["GRL","Greenland",11.11,[20221127,0,0,0,0,0,0,0,0,1],[0.0,"="],68.17],["ZAF","South Africa",11.11,[20221113,0,0,0,0,0,0,0,0,0],[0.57,"-"],32.62],["BRB","Barbados",11.11,[20221129,0,0,0,0,0,0,0,0,2],[22.92,"="],55.02],["CZE","Czech Republic",11.11,[20221111,0,0,0,0,0,0,0,0,1],[36.47,"+"],65.67],["BGR","Bulgaria",11.11,[20221108,0,0,0,0,0,0,0,0,0],[2.27,"-"],30.58],["BHR","Bahrain",11.11,[20221107,0,0,0,0,0,0,0,0,2],[7.28,"-"],83.32],["ARG","Argentina",13.44,[20221119,0,0,0,0,0,0,0,0,1],[1.05,"="],83.22],["SYC","Seychelles",13.89,[20221127,0,0,0,0,0,0,0,1,4],[29.92,"="],76.14],["CHL","Chile",13.89,[20221128,0,0,0,0,0,0,0,1,2],[22.24,"-"],90.25],["CMR","Cameroon",13.89,[20221119,0,0,0,0,0,0,0,1,0],[0.0,"="],4.65],["CAF","Central African Republic",13.89,[20221201,0,0,0,0,0,0,0,1,3],[0.0,"="],29.72],["NIC","Nicaragua",13.89,[20221106,0,0,0,0,0,0,0,1,0],[0.04,"="],84.34],["BGD","Bangladesh",13.89,[20221113,0,0,0,0,0,0,0,1,4],[0.01,"="],73.08],["CUB","Cuba",13.89,[20221108,0,0,0,0,0,0,0,1,2],[0.05,"="],89.2],["CIV","Cote d'Ivoire",13.89,[20221118,0,0,0,0,0,0,0,1,3],[0.0,"="],37.04],["PRY","Paraguay",13.89,[20221120,0,0,0,0,0,0,0,1,2],[0.19,"="],52.01],["UGA","Uganda",13.89,[20221028,0,0,0,0,0,0,0,1,3],[0.02,"="],27.02],["TCD","Chad",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"="],20.44],["UKR","Ukraine",13.89,[20221112,0,0,0,0,0,0,0,1,3],[0.12,"="],38.17],["URY","Uruguay",13.89,[20221121,0,0,0,0,0,0,0,1,1],[4.06,"="],84.57],["GMB","Gambia",13.89,[20221111,0,0,0,0,0,0,0,1,3],[0.0,"="],16.79],["VEN","Venezuela",13.89,[20221120,0,0,0,0,0,0,0,1,3],[0.29,"+"],50.48],["TKM","Turkmenistan",13.89,[20221128,0,0,0,0,0,0,0,1,3],[],57.36],["LBN","Lebanon",13.89,[20221120,0,0,0,0,0,0,0,1,2],[0.69,"-"],43.94],["LBY","Libya",13.89,[20221120,0,0,0,0,0,0,0,1,0],[0.01,"="],18.05],["COG","Congo",13.89,[20221128,0,0,0,0,0,0,0,1,0],[0.0,"="],10.96],["BEL","Belgium",14.81,[20221117,0,1,0,0,0,0,0,0,2],[7.76,"-"],78.63],["GRC","Greece",14.81,[20221127,1,0,0,0,0,0,0,0,2],[60.56,"="],73.59],["ISR","Israel",14.81,[20221128,1,0,0,0,0,0,0,0,2],[19.38,"-"],65.17],["KHM","Cambodia",14.81,[20221128,1,0,0,0,0,0,0,0,2],[0.05,"="],87.02],["DEU","Germany",14.81,[20221121,0,0,0,0,0,1,0,0,2],[30.95,"+"],76.18],["PAN","Panama",14.81,[20221125,1,0,1,0,0,0,0,0,2],[21.31,"="],71.66],["ITA","Italy",15.51,[20221107,0,1,0,0,0,0,0,0,2],[54.14,"="],81.26],["TON","Tonga",16.23,[20221121,0,0,0,0,0,0,0,1,1],[0.0,"="],72.49],["JAM","Jamaica",16.67,[20221128,0,0,1,0,0,0,0,0,1],[0.0,"="],26.01],["MEX","Mexico",17.59,[20221113,1,0,0,0,0,0,0,1,2],[0.84,"+"],64.19],["SGP","Singapore",17.59,[20221122,1,0,0,0,0,0,0,1,2],[21.68,"-"],91.02],["MOZ","Mozambique",17.59,[20221120,0,1,0,0,0,0,0,1,2],[0.02,"="],47.92],["GUY","Guyana",18.52,[20221129,1,1,0,0,0,0,0,0,1],[1.22,"+"],57.08],["FIN","Finland",18.52,[20221117,1,1,0,0,0,0,0,0,1],[28.36,"+"],78.43],["ETH","Ethiopia",19.44,[20221119,0,0,0,3,0,0,0,0,3],[0.03,"="],29.75],["BDI","Burundi",19.44,[20221121,0,0,1,0,0,0,0,1,1],[0.29,"="],0.2],["SEN","Senegal",19.44,[20221128,0,0,0,0,1,0,0,1,3],[0.01,"="],7.75],["PER","Peru",20.37,[20221128,1,0,1,0,0,0,0,0,1],[18.4,"-"],83.27],["SUR","Suriname",21.3,[20221113,1,1,0,0,0,0,0,1,2],[8.6,"="],38.49],["TWN","Taiwan",21.3,[20221122,1,1,0,0,0,0,0,1,2],[61.19,"-"],86.03],["NPL","Nepal",21.82,[20221121,0,0,0,1,0,0,0,1,4],[0.01,"="],78.1],["BRA","Brazil",22.22,[20221128,0,0,0,0,0,0,2,1,2],[13.23,"+"],80.88],["AGO","Angola",22.65,[20221128,0,2,0,0,0,0,0,1,2],[0.08,"="],21.96],["RUS","Russia",22.69,[20221121,0,1,2,1,0,0,0,0,2],[3.96,"+"],54.24],["VNM","Vietnam",23.15,[20221127,0,1,1,1,0,0,0,0,2],[0.49,"+"],86.25],["HND","Honduras",23.15,[20221201,0,1,1,0,0,0,0,1,3],[1.53,"+"],54.77],["USA","United States",23.2,[20221122,1,1,0,0,0,1,0,1,2],[16.37,"+"],68.79],["MLI","Mali",24.0,[20221019,0,0,2,0,0,0,0,1,0],[0.0,"="],9.97],["BMU","Bermuda",24.07,[20221121,1,1,1,0,0,0,0,0,2],[0.0,"="],74.22],["DMA","Dominica",24.07,[20221128,1,1,1,0,0,0,0,0,2],[0.0,"="],42.14],["MYS","Malaysia",24.07,[20221126,1,1,1,0,0,0,0,0,1],[7.15,"-"],81.11],["BOL","Bolivia",24.07,[20221107,1,1,1,0,0,0,0,1,2],[1.16,"+"],50.4],["MAR","Morocco",24.46,[20221115,0,1,0,0,0,0,0,0,3],[0.4,"+"],62.77],["COD","Democratic Republic of Congo",25.0,[20221124,0,0,0,0,0,0,2,1,3],[0.06,"="],3.76],["RKS","Kosovo",25.04,[20221114,2,2,2,0,0,0,0,0,1],[0.04,"-"],46.29],["RWA","Rwanda",25.64,[20221113,0,0,0,0,0,0,0,0,0],[0.09,"="],67.32],["ABW","Aruba",25.93,[20221121,0,1,1,2,0,0,0,0,2],[9.77,"="],78.81],["BIH","Bosnia and Herzegovina",25.93,[20221128,1,0,1,2,0,0,0,0,2],[0.51,"="],26.17],["LKA","Sri Lanka",25.93,[20221121,0,1,1,1,0,0,0,1,1],[0.05,"-"],67.57],["KEN","Kenya",26.5,[20221125,0,1,2,0,0,0,0,1,3],[0.1,"-"],19.82],["SLV","El Salvador",26.85,[20221121,1,1,1,1,0,0,0,0,2],[0.0,"="],68.56],["PHL","Philippines",27.78,[20221201,0,2,1,0,1,0,0,1,2],[1.09,"+"],63.81],["FJI","Fiji",29.21,[20221128,0,1,1,0,0,0,0,1,2],[0.0,"-"],68.83],["GRD","Grenada",29.38,[20220328,1,0,0,3,0,0,0,1,3],[1.9,"="],31.07],["LBR","Liberia",30.0,[20221126,0,1,1,0,0,0,0,1,3],[0.02,"="],67.83],["TGO","Togo",30.1,[20221121,0,0,1,3,0,0,0,1,3],[0.01,"="],16.45],["SLB","Solomon Islands",30.46,[20221128,1,1,1,0,0,0,0,1,3],[0.0,"="],35.12],["HTI","Haiti",31.48,[20221127,0,1,1,3,0,0,0,1,2],[0.02,"+"],2.05],["JPN","Japan",31.48,[20221129,1,1,1,1,0,1,1,1,1],[88.38,"+"],83.09],["IDN","Indonesia",32.18,[20221121,1,1,0,0,0,0,0,1,2],[1.84,"-"],62.15],["BHS","Bahamas",32.41,[20221121,1,1,1,0,1,0,0,1,2],[0.44,"-"],40.4],["GHA","Ghana",33.56,[20221124,0,2,2,0,0,0,0,1,1],[0.0,"-"],26.74],["IND","India",34.26,[20221127,0,1,1,0,0,2,2,0,3],[0.02,"="],67.09],["AUT","Austria",35.19,[20221128,2,2,1,2,0,0,0,0,2],[50.26,"+"],76.32],["GTM","Guatemala",36.57,[20221128,2,0,1,3,1,0,0,0,2],[4.75,"-"],39.31],["LAO","Laos",36.95,[20221127,1,1,1,3,0,0,0,1,3],[0.42,"+"],69.36],["SLE","Sierra Leone",39.05,[20221128,2,2,2,0,1,0,0,1,3],[0.0,"="],34.12],["MAC","Macao",39.81,[20221126,2,1,1,2,1,0,0,1,3],[],90.12],["PAK","Pakistan",40.32,[20221128,0,0,0,0,0,0,0,1,2],[0.02,"="],56.09],["AZE","Azerbaijan",40.35,[20221121,0,3,2,0,0,0,2,1,0],[0.36,"="],46.94],["MMR","Myanmar",40.74,[20221107,1,1,0,0,1,2,2,1,3],[0.04,"="],50.84],["MWI","Malawi",40.74,[20221128,1,1,1,3,1,0,0,1,3],[0.01,"="],15.16],["IRQ","Iraq",41.38,[20221121,0,2,2,1,0,0,0,1,2],[0.25,"="],17.8],["TUN","Tunisia",41.6,[20221031,0,1,2,4,0,0,0,1,3],[0.1,"="],51.73],["HKG","Hong Kong",42.3,[20221128,2,1,1,3,0,0,0,2,2],[114.47,"+"],90.33],["ZWE","Zimbabwe",53.7,[20221107,1,1,1,3,1,2,1,1,4],[1.22,"="],29.11],["IRN","Iran",53.94,[20221122,1,2,2,4,0,0,2,1,2],[0.05,"+"],66.07],["NGA","Nigeria",57.68,[20221114,0,1,1,3,1,2,2,1,3],[0.0,"="],23.52],["CHN","China",62.5,[20221106,2,2,2,4,1,2,2,2,3],[2.53,"+"],89.27],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3.73,"+"],45.43]];