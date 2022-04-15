const dataUpdate="2022.04.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",2.78,[20220331,0,0,0,0,0,0,0,1,2],[1.46,"+"],65.33],["DOM","Dominican Republic",8.33,[20220408,0,0,0,0,0,0,0,1,1],[0.33,"-"],54.31],["NIC","Nicaragua",8.33,[20220409,0,0,0,0,0,0,0,1,1],[0.0,"="],65.63],["AND","Andorra",8.33,[20220411,0,0,0,0,0,0,0,0,2],[70.44,"-"],69.02],["IRL","Ireland",11.11,[20220411,0,0,0,0,0,0,0,0,1],[41.99,"-"],80.61],["NOR","Norway",11.11,[20220405,0,0,0,0,0,0,0,0,1],[12.8,"-"],73.73],["SWE","Sweden",11.11,[20220412,0,0,0,0,0,0,0,0,0],[5.68,"-"],75.02],["FRO","Faeroe Islands",11.11,[20220408,0,0,0,0,0,0,0,0,0],[0.0,"="],83.37],["DNK","Denmark",11.11,[20220409,0,0,0,0,0,0,0,0,0],[39.12,"-"],82.57],["ISL","Iceland",11.11,[20220411,0,0,0,0,0,0,0,0,0],[56.14,"="],78.69],["HUN","Hungary",11.11,[20220411,0,0,0,0,0,0,0,0,0],[20.52,"-"],64.25],["GBR","United Kingdom",12.96,[20220408,1,0,0,0,0,0,0,0,3],[51.05,"-"],72.69],["BFA","Burkina Faso",13.89,[20220404,0,0,0,0,0,0,0,1,2],[0.0,"="],5.53],["TZA","Tanzania",13.89,[20220411,0,0,0,0,0,0,0,1,1],[0.01,"="],4.99],["GMB","Gambia",13.89,[20220412,0,0,0,0,0,0,0,1,3],[0.02,"+"],12.79],["SDN","Sudan",13.89,[20220407,0,0,0,0,0,0,0,1,0],[0.02,"="],7.48],["ROU","Romania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[7.61,"-"],42.29],["BWA","Botswana",13.89,[20220404,0,0,0,0,0,0,0,1,3],[2.02,"="],53.92],["BEL","Belgium",14.81,[20220409,0,1,0,0,0,0,0,0,2],[70.54,"-"],78.52],["POL","Poland",14.81,[20220401,0,1,0,0,0,0,0,0,2],[2.88,"-"],59.25],["MDA","Moldova",14.81,[20220329,0,1,0,0,0,0,0,0,2],[3.97,"-"],26.29],["TJK","Tajikistan",15.74,[20220411,1,1,0,0,0,0,0,1,3],[0.0,"="],49.78],["NER","Niger",16.67,[20220411,0,0,0,0,0,0,0,2,3],[0.01,"="],6.15],["PSE","Palestine",16.67,[20220401,0,0,0,0,0,0,0,2,4],[],33.74],["BDI","Burundi",16.67,[20220411,0,0,0,0,0,0,0,2,2],[0.14,"="],0.08],["AFG","Afghanistan",16.67,[20220404,0,2,1,0,1,0,0,2,3],[0.14,"+"],11.38],["TUN","Tunisia",16.67,[20220411,0,0,0,0,0,0,0,2,3],[1.58,"="],53.22],["ISR","Israel",17.59,[20220410,1,0,0,0,0,0,0,1,2],[66.28,"-"],66.0],["LTU","Lithuania",17.59,[20220411,0,1,0,0,0,0,0,1,2],[47.09,"-"],69.65],["LVA","Latvia",17.59,[20220402,0,1,0,0,0,0,0,1,2],[41.22,"-"],69.81],["PRT","Portugal",17.59,[20220405,1,0,0,0,0,0,0,1,2],[99.26,"+"],92.6],["CUB","Cuba",18.52,[20220408,1,1,0,0,0,0,0,0,2],[4.49,"-"],87.7],["FRA","France",19.44,[20220321,0,0,0,0,0,0,0,3,2],[196.71,"-"],77.86],["MDG","Madagascar",19.44,[20220410,0,0,0,0,0,2,0,1,3],[0.02,"="],3.7],["BLR","Belarus",19.44,[20220327,0,0,0,0,0,0,0,3,1],[7.13,"-"],58.26],["SVK","Slovak Republic",20.37,[20220321,1,0,0,0,0,0,0,2,3],[49.21,"-"],50.73],["JOR","Jordan",20.37,[20220321,0,1,0,2,0,0,0,0,2],[1.04,"="],43.4],["GEO","Georgia",21.3,[20220411,1,1,0,0,0,0,0,1,2],[6.32,"-"],31.66],["PRY","Paraguay",21.3,[20220325,1,1,1,0,0,0,0,3,-1],[0.19,"="],46.15],["SEN","Senegal",21.3,[20220411,1,1,0,0,0,0,0,1,3],[0.02,"="],6.04],["CIV","Cote d'Ivoire",21.3,[20220402,1,1,0,0,0,0,0,1,1],[0.02,"-"],17.0],["BGR","Bulgaria",21.3,[20220404,1,1,0,0,0,0,0,1,2],[8.75,"-"],29.77],["SVN","Slovenia",22.22,[20220406,0,2,0,0,0,1,0,0,2],[78.2,"-"],58.73],["COG","Congo",23.15,[20220411,0,1,0,2,0,0,0,1,3],[0.0,"="],12.04],["CHE","Switzerland",23.15,[20220331,0,1,0,0,0,0,0,3,2],[65.91,"="],68.77],["NLD","Netherlands",23.15,[20220405,0,0,0,0,0,1,0,3,2],[42.93,"-"],72.17],["TUR","Turkey",23.15,[20220411,1,0,0,0,1,0,0,1,2],[7.44,"-"],62.33],["MEX","Mexico",23.15,[20220401,1,0,0,0,1,0,0,1,2],[1.06,"-"],61.19],["CAF","Central African Republic",24.07,[20220328,0,0,0,2,0,2,0,2,3],[0.0,"="],18.25],["KWT","Kuwait",24.07,[20220328,1,1,0,0,0,0,0,2,2],[2.44,"-"],75.94],["LUX","Luxembourg",25.0,[20220410,0,0,0,0,1,0,0,3,2],[107.99,"-"],72.63],["ETH","Ethiopia",26.85,[20220411,1,1,0,0,1,0,0,1,2],[0.02,"-"],17.78],["BEN","Benin",26.85,[20220404,0,2,0,0,1,0,0,1,2],[0.0,"="],19.52],["CMR","Cameroon",27.78,[20220404,0,0,1,3,0,0,0,1,3],[0.13,"="],3.85],["URY","Uruguay",27.78,[20220330,0,0,2,0,0,0,0,4,1],[11.46,"-"],81.91],["ZMB","Zambia",27.78,[20220411,0,0,1,3,0,0,0,1,3],[0.58,"-"],12.12],["VEN","Venezuela",28.7,[20220404,1,0,0,0,1,0,0,3,3],[0.35,"+"],49.77],["ABW","Aruba",28.7,[20220329,0,0,1,2,0,1,0,1,2],[34.25,"+"],76.22],["NAM","Namibia",28.7,[20220404,0,1,1,2,0,0,0,1,2],[0.99,"+"],14.94],["FIN","Finland",29.63,[20220409,1,1,0,0,1,0,0,2,1],[74.49,"+"],77.79],["BOL","Bolivia",29.63,[20220404,2,1,1,0,0,0,0,2,4],[0.87,"-"],49.31],["KHM","Cambodia",29.63,[20220411,1,1,1,0,0,0,0,2,3],[0.13,"-"],83.16],["GUY","Guyana",29.63,[20220409,1,1,0,0,0,0,0,4,1],[0.96,"-"],45.88],["CHL","Chile",30.09,[20220412,1,1,1,2,0,0,1,2,3],[16.26,"-"],90.69],["BMU","Bermuda",30.56,[20220401,1,1,1,3,0,1,0,2,3],[43.58,"-"],76.13],["TWN","Taiwan",30.56,[20220411,1,2,0,0,0,0,0,3,3],[2.89,"+"],77.16],["SYR","Syria",30.56,[20220414,1,1,1,0,0,1,0,1,3],[0.02,"="],7.44],["LIE","Liechtenstein",31.48,[20220413,0,1,1,1,0,0,0,3,1],[76.43,"-"],69.0],["MCO","Monaco",31.48,[20220328,0,1,0,4,0,0,0,2,2],[117.22,"+"],64.95],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[17.9,"+"],33.64],["ARG","Argentina",31.48,[20220321,0,1,1,1,0,0,1,2,3],[3.19,"-"],81.32],["COD","Democratic Republic of Congo",31.48,[20220412,0,1,1,0,0,0,2,1,4],[0.04,"+"],0.56],["CZE","Czech Republic",31.48,[20220410,0,1,0,0,2,0,0,2,2],[26.81,"-"],64.0],["PRI","Puerto Rico",32.41,[20220403,1,1,1,1,0,0,0,3,2],[]],["MAC","Macao",32.41,[20220401,1,1,1,0,0,0,0,3,2],[],80.49],["JAM","Jamaica",32.41,[20220411,0,0,1,4,0,1,0,1,1],[0.88,"-"],22.86],["SLV","El Salvador",32.41,[20220309,2,0,2,1,0,0,0,0,4],[1.14,"="],65.79],["TCD","Chad",32.41,[20220321,1,1,1,2,0,0,0,1,3],[0.03,"="],4.47],["EST","Estonia",32.41,[20220403,1,1,1,1,0,0,0,2,2],[46.88,"-"],63.67],["GAB","Gabon",32.41,[20220411,0,2,0,3,0,0,0,2,0],[0.02,"="],11.05],["LKA","Sri Lanka",32.87,[20220331,0,0,1,3,0,1,0,2,4],[0.23,"-"],67.11],["PAN","Panama",33.33,[20220404,0,0,2,2,0,0,0,2,2],[6.69,"+"],69.46],["KEN","Kenya",33.33,[20220406,0,2,2,3,0,1,0,1,1],[0.02,"="],14.86],["GRL","Greenland",33.33,[20220412,1,1,0,0,0,1,0,4,1],[0.0,"="],67.7],["RKS","Kosovo",33.33,[20220411,2,1,1,4,0,0,0,2,3],[1.19,"-"],46.09],["HND","Honduras",34.26,[20220326,0,2,1,0,0,2,0,1,3],[0.0,"-"],45.54],["BGD","Bangladesh",34.26,[20220411,2,1,1,0,0,1,0,1,4],[0.02,"="],69.24],["NGA","Nigeria",34.26,[20220404,0,0,1,3,0,1,0,2,2],[0.0,"-"],4.52],["HTI","Haiti",34.26,[20220410,0,1,1,4,0,0,0,1,3],[0.01,"="],1.0],["YEM","Yemen",35.19,[20220404,1,1,1,0,0,2,0,4,1],[0.0,"="],1.33],["HRV","Croatia",35.19,[20220403,1,1,1,2,0,0,0,2,2],[18.32,"-"],54.88],["SSD","South Sudan",36.11,[20220411,1,0,1,0,0,2,1,1,2],[0.06,"-"],4.24],["KGZ","Kyrgyz Republic",36.11,[20220409,0,0,2,4,0,0,-1,1,2],[0.01,"="],18.97],["VIR","United States Virgin Islands",36.11,[20220403,1,1,1,3,0,1,0,0,2],[]],["SRB","Serbia",36.11,[20220402,1,1,1,2,0,1,0,1,3],[11.81,"-"],47.58],["BIH","Bosnia and Herzegovina",36.11,[20220404,1,1,1,3,0,1,0,0,2],[1.55,"-"],25.93],["BRB","Barbados",37.04,[20220328,-1,1,2,3,0,0,0,1,3],[125.17,"+"],52.68],["UGA","Uganda",37.96,[20220404,1,1,1,2,1,0,0,1,4],[0.03,"+"],17.01],["LSO","Lesotho",37.96,[20220408,0,2,2,2,0,0,0,1,4],[0.39,"="],33.7],["MOZ","Mozambique",37.96,[20220404,0,2,1,3,0,0,0,2,3],[0.02,"+"],41.11],["ZAF","South Africa",37.96,[20220411,0,2,1,2,1,0,0,1,2],[2.09,"+"],30.17],["RWA","Rwanda",37.96,[20220404,1,1,1,-1,2,0,0,1,3],[0.02,"="],61.36],["BHR","Bahrain",38.89,[20220403,1,1,1,2,0,1,0,2,2],[27.97,"-"],69.62],["CYP","Cyprus",38.89,[20220327,1,1,1,2,0,1,0,2,3],[142.37,"-"],72.02],["RUS","Russia",40.28,[20220331,0,2,1,2,0,2,1,3,3],[8.37,"-"],50.09],["THA","Thailand",40.28,[20220411,0,2,1,2,0,1,1,2,1],[37.94,"+"],72.22],["MLI","Mali",40.74,[20220412,0,2,2,3,0,0,0,1,3],[0.06,"="],4.69],["KOR","South Korea",40.74,[20220410,0,2,1,4,0,0,0,2,3],[312.41,"-"],86.77],["BHS","Bahamas",40.74,[20220404,0,1,1,3,1,1,0,1,3],[1.53,"-"],39.46],["AUT","Austria",40.74,[20220411,2,2,1,3,0,0,0,1,2],[121.92,"-"],72.96],["GUM","Guam",40.74,[20220413,1,1,1,2,0,0,0,4,3],[]],["MLT","Malta",41.67,[20220411,1,2,2,0,0,0,0,3,3],[112.4,"-"],90.57],["MWI","Malawi",41.67,[20220404,0,1,1,2,1,2,0,1,3],[0.03,"="],4.39],["CAN","Canada",42.59,[20220411,2,0,0,0,0,1,2,4,3],[35.72,"+"],82.04],["AGO","Angola",42.59,[20220408,0,2,1,0,0,2,1,2,4],[0.0,"="],17.66],["PNG","Papua New Guinea",43.06,[20220404,0,1,2,3,0,1,0,4,4],[0.34,"+"],2.82],["GHA","Ghana",43.52,[20220410,0,2,2,4,0,0,0,1,4],[0.02,"="],15.98],["MRT","Mauritania",43.52,[20220411,1,1,2,4,0,0,0,1,3],[-0.09,"="],22.25],["SOM","Somalia",43.52,[20220328,0,1,1,3,0,1,1,2,3],[0.0,"="],8.26],["EGY","Egypt",43.52,[20220411,1,1,2,4,0,0,0,1,4],[0.39,"="],30.89],["JPN","Japan",43.52,[20220412,1,0,1,1,0,1,1,4,1],[39.44,"+"],80.13],["ESP","Spain",43.98,[20220315,1,2,2,3,0,0,0,3,2],[14.92,"="],86.32],["TLS","Timor-Leste",44.44,[20220410,0,0,1,0,2,0,2,2,3],[0.1,"-"],43.95],["CRI","Costa Rica",44.44,[20220328,0,2,2,2,0,1,0,2,3],[9.95,"="],78.65],["TGO","Togo",45.37,[20220314,1,2,2,3,0,2,0,2,4],[0.01,"="],18.37],["NPL","Nepal",46.3,[20220411,0,1,2,1,1,1,1,1,4],[0.04,"-"],65.16],["ARE","United Arab Emirates",46.3,[20220412,1,1,2,1,0,0,2,1,2],[2.47,"+"],96.42],["UZB","Uzbekistan",46.3,[20220327,1,1,2,3,0,0,1,2,1],[0.09,"-"],41.81],["GIN","Guinea",46.3,[20220411,1,1,1,3,0,0,2,1,3],[0.05,"="],18.37],["ALB","Albania",46.3,[20220314,1,1,1,3,0,0,2,1,2],[1.33,"+"],42.56],["IRQ","Iraq",46.3,[20220328,0,2,2,3,0,0,0,3,3],[0.48,"-"],17.59],["QAT","Qatar",47.22,[20220328,1,1,1,0,1,1,1,3,2],[4.23,"-"],88.5],["SLE","Sierra Leone",48.15,[20220411,2,2,2,0,1,0,0,2,3],[0.01,"+"],13.82],["LBR","Liberia",48.15,[20220411,1,3,2,0,0,0,0,4,4],[0.01,"="],20.94],["IND","India",48.61,[20220403,2,2,1,2,2,1,0,1,3],[0.07,"="],60.32],["SUR","Suriname",50.0,[20220404,1,2,2,3,0,0,0,3,4],[0.85,"="],40.12],["LBY","Libya",50.0,[20220328,1,2,2,4,0,0,0,2,3],[0.2,"="],16.36],["MUS","Mauritius",50.0,[20220404,1,2,2,4,0,0,0,2,3],[37.84,"+"],76.18],["DEU","Germany",50.93,[20220402,2,2,0,2,2,1,0,3,2],[153.16,"-"],75.39],["BTN","Bhutan",51.85,[20220404,2,2,2,0,0,1,1,2,4],[222.49,"+"],74.69],["DZA","Algeria",52.78,[20220411,1,2,2,4,1,0,0,1,3],[0.01,"="],13.7],["SMR","San Marino",52.78,[20220411,1,1,1,4,1,1,1,1,1],[123.36,"+"],69.44],["COL","Colombia",52.78,[20220328,1,2,2,2,1,0,0,3,3],[0.58,"-"],68.52],["OMN","Oman",52.78,[20220329,1,2,2,4,0,0,0,3,2],[0.54,"="],57.9],["BRN","Brunei",53.7,[20220408,2,1,1,2,1,1,0,4,4],[61.39,"-"],91.79],["ITA","Italy",53.7,[20220409,2,2,2,0,2,0,0,2,2],[100.88,"-"],79.3],["LBN","Lebanon",53.7,[20220404,2,3,1,1,1,2,0,1,4],[2.1,"-"],32.67],["MYS","Malaysia",54.17,[20220411,2,2,2,4,0,0,2,2,3],[31.09,"-"],79.49],["AUS","Australia",54.17,[20220411,0,2,2,4,1,0,2,3,2],[189.11,"-"],83.07],["IDN","Indonesia",54.17,[20220412,1,1,1,3,1,1,1,3,3],[0.49,"-"],58.59],["BLZ","Belize",54.63,[20220401,2,2,2,0,1,1,1,2,0],[0.47,"="],51.76],["DMA","Dominica",55.56,[20220328,1,2,2,4,1,0,0,2,3],[6.95,"-"],41.61],["GRC","Greece",55.56,[20220319,1,2,1,3,1,2,1,1,2],[107.65,"-"],73.36],["ERI","Eritrea",56.48,[20220404,1,1,2,3,1,2,0,2,3],[0.02,"="]],["SYC","Seychelles",56.48,[20220403,2,2,2,4,1,0,0,1,3],[115.34,"+"],81.04],["CPV","Cape Verde",56.48,[20220402,1,2,1,0,2,1,2,1,3],[0.59,"+"],54.6],["TTO","Trinidad and Tobago",56.48,[20220313,2,2,2,3,0,0,0,4,3],[20.51,"+"],50.62],["NZL","New Zealand",56.48,[20220404,2,2,2,3,0,0,0,4,3],[212.81,"+"],79.58],["KAZ","Kazakhstan",56.48,[20220405,1,1,2,4,1,1,2,1,3],[0.13,"+"],48.45],["FJI","Fiji",57.41,[20220402,0,2,2,0,2,0,2,3,1],[0.49,"="],69.83],["DJI","Djibouti",58.33,[20220404,1,1,2,4,1,1,1,1,3],[0.07,"-"],10.95],["USA","United States",58.8,[20220407,2,2,2,2,1,1,2,4,3],[11.94,"+"],65.85],["GTM","Guatemala",58.8,[20220315,2,2,2,3,1,1,0,3,3],[2.87,"-"],33.13],["SGP","Singapore",60.19,[20220411,1,3,2,4,0,1,0,3,3],[58.66,"-"],91.22],["SWZ","Eswatini",60.19,[20220313,0,2,2,4,1,0,2,1,4],[1.54,"+"],27.16],["KIR","Kiribati",60.65,[20220411,3,2,2,3,0,2,2,2,4],[0.12,"="],45.58],["ZWE","Zimbabwe",61.11,[20220411,2,2,1,3,0,2,2,1,3],[0.32,"-"],23.88],["MAR","Morocco",63.89,[20220404,1,2,2,4,2,0,0,3,3],[0.18,"="],62.56],["VNM","Vietnam",63.89,[20220404,2,2,2,3,2,2,2,1,3],[36.68,"-"],79.2],["TKM","Turkmenistan",63.89,[20220404,0,3,2,4,2,0,2,1,3],[],52.41],["PER","Peru",65.74,[20220410,0,2,2,4,2,0,2,1,4],[1.63,"+"],78.94],["ECU","Ecuador",65.74,[20220411,0,2,2,4,2,0,2,1,3],[1.77,"-"],77.31],["SAU","Saudi Arabia",67.59,[20220411,2,2,2,3,2,0,2,0,2],[0.32,"="],69.58],["IRN","Iran",67.59,[20220405,3,3,2,4,0,0,2,3,2],[3.1,"-"],67.33],["BRA","Brazil",69.91,[20220410,2,2,2,4,1,2,2,4,2],[9.32,"-"],75.86],["PAK","Pakistan",70.37,[20220410,3,2,2,2,1,1,2,3,4],[0.05,"-"],53.4],["LAO","Laos",73.15,[20220411,2,1,2,3,2,1,2,2,3],[15.69,"-"],64.06],["UKR","Ukraine",75.0,[20220406,3,1,2,3,2,1,2,3,3],[0.0,"="],34.86],["HKG","Hong Kong",75.0,[20220326,3,2,2,4,1,1,1,3,3],[23.06,"-"],78.73],["CHN","China",75.46,[20220410,3,2,2,4,2,3,2,2,2],[1.68,"-"],86.2],["PHL","Philippines",78.24,[20220328,3,3,2,4,2,2,2,3,4],[0.24,"="],60.02],["MMR","Myanmar",78.7,[20220325,3,1,2,4,1,2,2,3,4],[0.09,"-"],40.76],["AZE","Azerbaijan",79.63,[20220322,2,3,2,3,2,0,2,3,2],[0.22,"-"],47.29],["TON","Tonga",81.02,[20220410,3,3,2,4,2,2,2,4,4],[159.08,"-"],67.3],["SLB","Solomon Islands",83.33,[20220404,3,2,2,4,2,1,2,3,3],[8.98,"+"],18.98],["VUT","Vanuatu",85.19,[20220411,3,3,2,4,1,2,1,4,4],[29.21,"-"],37.57],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[9.05,"+"],44.91]];