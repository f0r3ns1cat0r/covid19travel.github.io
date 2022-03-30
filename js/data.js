const dataUpdate="2022.03.30";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",2.78,[20220314,0,0,0,0,0,0,0,1,2],[7.21,"="],65.31],["DOM","Dominican Republic",8.33,[20220323,0,0,0,0,0,0,0,1,1],[0.57,"-"],54.05],["NIC","Nicaragua",8.33,[20220325,0,0,0,0,0,0,0,1,1],[0.15,"-"],61.37],["AND","Andorra",11.11,[20220328,0,0,0,0,0,0,0,0,2],[88.56,"="],68.99],["ISL","Iceland",11.11,[20220327,0,0,0,0,0,0,0,0,0],[187.72,"-"],78.65],["IRL","Ireland",11.11,[20220326,0,0,0,0,0,0,0,0,1],[147.34,"-"],80.42],["GBR","United Kingdom",12.96,[20220325,1,0,0,0,0,0,0,0,3],[121.95,"-"],72.42],["ROU","Romania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[17.53,"-"],42.26],["SDN","Sudan",13.89,[20220325,0,0,0,0,0,0,0,1,0],[0.02,"="],6.12],["DNK","Denmark",13.89,[20220318,0,0,0,0,0,0,0,1,0],[81.15,"-"],81.48],["FRO","Faeroe Islands",13.89,[20220301,0,0,0,0,0,0,0,1,0],[0.0,"="],83.37],["GMB","Gambia",13.89,[20220329,0,0,0,0,0,0,0,1,3],[0.06,"+"],12.79],["BFA","Burkina Faso",13.89,[20220328,0,0,0,0,0,0,0,1,2],[0.03,"="],5.53],["TZA","Tanzania",13.89,[20220328,0,0,0,0,0,0,0,1,1],[0.0,"-"],4.99],["NOR","Norway",13.89,[20220313,0,0,0,0,0,0,0,1,1],[40.01,"-"],73.68],["HUN","Hungary",13.89,[20220324,0,0,0,0,0,0,0,1,0],[22.02,"+"],64.21],["KEN","Kenya",13.89,[20220328,0,0,0,0,0,0,0,1,0],[0.02,"="],14.71],["BWA","Botswana",13.89,[20220322,0,0,0,0,0,0,0,1,3],[0.0,"="],53.92],["MDA","Moldova",14.81,[20220329,0,1,0,0,0,0,0,0,2],[6.97,"+"],26.19],["TJK","Tajikistan",15.74,[20220325,1,1,0,0,0,0,0,1,3],[0.0,"="],47.33],["NER","Niger",16.67,[20220321,0,0,0,0,0,0,0,2,3],[0.0,"="],6.15],["PSE","Palestine",16.67,[20220307,0,0,0,0,0,0,0,2,4],[],33.63],["PRT","Portugal",17.59,[20220321,1,0,0,0,0,0,0,1,2],[105.46,"="],92.6],["ISR","Israel",17.59,[20220328,1,0,0,0,0,0,0,1,2],[152.68,"+"],65.96],["COG","Congo",17.59,[20220328,0,1,0,0,0,0,0,1,3],[0.02,"="],11.32],["LTU","Lithuania",17.59,[20220314,0,1,0,0,0,0,0,1,3],[110.56,"-"],69.61],["TUN","Tunisia",17.59,[20220321,0,1,0,0,0,0,0,1,3],[2.6,"-"],53.16],["FRA","France",19.44,[20220321,0,0,0,0,0,0,0,3,2],[204.73,"+"],77.77],["AFG","Afghanistan",19.44,[20220307,0,2,1,0,1,0,0,2,3],[0.15,"="],11.1],["SWE","Sweden",19.44,[20220319,0,0,0,0,0,0,0,3,0],[8.56,"="],74.94],["BDI","Burundi",19.44,[20220328,0,-1,0,0,0,0,1,1,2],[0.13,"+"],0.08],["BLR","Belarus",19.44,[20220327,0,0,0,0,0,0,0,3,1],[12.08,"-"],58.94],["GUY","Guyana",20.37,[20220317,1,0,0,0,0,0,0,4,1],[0.67,"-"],45.62],["SVK","Slovak Republic",20.37,[20220321,1,0,0,0,0,0,0,2,3],[156.37,"-"],50.7],["JOR","Jordan",20.37,[20220321,0,1,0,2,0,0,0,0,2],[4.44,"="],42.96],["URY","Uruguay",20.37,[20220307,0,1,0,0,0,0,0,2,2],[33.79,"-"],81.54],["YEM","Yemen",20.37,[20220321,1,0,0,0,0,0,0,4,1],[0.0,"="],1.33],["CIV","Cote d'Ivoire",21.3,[20220321,1,1,0,0,0,0,0,1,1],[0.03,"="],17.0],["BGR","Bulgaria",21.3,[20220328,1,1,0,0,0,0,0,1,2],[17.51,"-"],29.72],["PRY","Paraguay",21.3,[20220325,1,1,1,0,0,0,0,3,-1],[1.05,"-"],45.94],["SEN","Senegal",21.3,[20220328,1,1,0,0,0,0,0,1,3],[0.04,"="],6.04],["SVN","Slovenia",22.22,[20220325,0,2,0,0,0,1,0,0,2],[132.24,"-"],58.69],["PAN","Panama",22.22,[20220320,0,0,0,2,0,0,0,2,4],[6.37,"-"],68.88],["CMR","Cameroon",22.22,[20220321,0,0,1,3,0,0,0,1,3],[0.0,"="],3.85],["TUR","Turkey",23.15,[20220328,1,0,0,0,1,0,0,1,2],[17.78,"-"],62.28],["BEL","Belgium",23.15,[20220318,0,1,0,0,0,0,0,3,2],[81.15,"-"],78.46],["CHE","Switzerland",23.15,[20220318,0,1,0,0,0,0,0,3,2],[189.06,"-"],68.77],["BOL","Bolivia",24.07,[20220327,2,1,0,0,0,0,0,2,4],[2.15,"+"],48.58],["POL","Poland",24.07,[20220318,1,1,0,0,0,0,0,2,2],[17.64,"-"],59.1],["KWT","Kuwait",24.07,[20220328,1,1,0,0,0,0,0,2,2],[4.1,"+"],75.87],["CAF","Central African Republic",24.07,[20220328,0,0,0,2,0,2,0,2,3],[0.0,"="],18.25],["LUX","Luxembourg",25.0,[20220328,0,0,0,0,1,0,0,3,2],[223.95,"+"],72.51],["FIN","Finland",26.85,[20220318,1,1,0,0,1,0,0,2,1],[135.6,"+"],77.55],["ZMB","Zambia",27.78,[20220328,0,0,1,3,0,0,0,1,3],[0.36,"-"],11.5],["TWN","Taiwan",27.78,[20220322,1,2,0,0,0,0,0,2,3],[0.54,"="],76.46],["NAM","Namibia",28.7,[20220321,0,1,1,2,0,0,0,1,2],[0.43,"-"],14.84],["VEN","Venezuela",28.7,[20220307,1,0,0,0,1,0,0,3,3],[0.19,"-"],49.77],["ABW","Aruba",28.7,[20220329,0,0,1,2,0,1,0,1,2],[11.51,"="],75.82],["KHM","Cambodia",29.63,[20220328,1,1,1,0,0,0,0,2,3],[0.34,"-"],82.55],["CUB","Cuba",29.63,[20220323,1,1,0,0,0,0,0,4,2],[7.26,"-"],87.56],["LBR","Liberia",29.63,[20220328,1,1,1,0,0,0,0,2,4],[0.01,"="],19.61],["CHL","Chile",30.09,[20220326,1,1,1,2,0,0,1,2,3],[38.83,"-"],90.29],["LVA","Latvia",30.09,[20220321,1,2,0,3,0,0,0,1,3],[130.62,"-"],69.75],["ARG","Argentina",31.48,[20220321,0,1,1,1,0,0,1,2,3],[5.09,"-"],80.92],["LIE","Liechtenstein",31.48,[20220319,0,1,1,1,0,0,0,3,2],[254.41,"-"],69.0],["MCO","Monaco",31.48,[20220328,0,1,0,4,0,0,0,2,2],[144.89,"+"],64.95],["GRD","Grenada",31.48,[20220328,1,0,0,3,0,0,0,3,3],[3.55,"-"],33.55],["PRI","Puerto Rico",32.41,[20220328,1,1,1,1,0,0,-1,3,2],[]],["SLV","El Salvador",32.41,[20220309,2,0,2,1,0,0,0,0,4],[0.0,"="],65.69],["TCD","Chad",32.41,[20220321,1,1,1,2,0,0,0,1,3],[0.02,"="],0.91],["LKA","Sri Lanka",33.33,[20220307,1,1,0,0,0,1,1,2,3],[0.95,"-"],66.93],["RKS","Kosovo",33.33,[20220328,2,1,1,4,0,0,0,2,3],[1.75,"-"],46.02],["TLS","Timor-Leste",33.33,[20220325,0,0,1,0,1,0,1,2,3],[0.13,"-"],43.08],["GRL","Greenland",33.33,[20220329,1,1,0,0,0,1,0,4,1],[5.03,"-"],67.7],["HND","Honduras",34.26,[20220326,0,2,1,0,0,2,0,1,3],[3.63,"+"],47.48],["HTI","Haiti",34.26,[20220327,0,1,1,4,0,0,0,1,3],[0.02,"-"],0.97],["NLD","Netherlands",34.26,[20220313,0,0,1,0,0,1,1,3,2],[185.97,"-"],72.01],["MEX","Mexico",35.19,[20220320,1,1,1,0,1,1,2,1,2],[2.02,"+"],61.18],["HRV","Croatia",35.19,[20220321,1,1,1,2,0,0,0,2,2],[33.26,"-"],54.82],["ARE","United Arab Emirates",35.19,[20220321,1,1,2,1,0,0,0,1,2],[3.34,"-"],96.12],["KGZ","Kyrgyz Republic",36.11,[20220318,0,0,2,4,0,0,0,1,2],[0.18,"+"],18.63],["SYR","Syria",36.11,[20220321,1,1,1,0,0,1,1,1,3],[0.08,"="],7.22],["VIR","United States Virgin Islands",36.11,[20220314,1,1,1,3,0,1,0,0,2],[]],["SSD","South Sudan",36.11,[20220327,1,0,1,0,0,2,1,1,2],[0.12,"+"],4.24],["SRB","Serbia",36.11,[20220307,1,1,1,2,0,1,0,1,3],[21.35,"-"],47.58],["CYP","Cyprus",36.11,[20220327,1,1,1,2,0,1,0,1,3],[405.7,"+"],72.02],["PER","Peru",36.11,[20220328,0,2,2,1,0,0,1,1,4],[1.31,"-"],76.38],["NGA","Nigeria",36.11,[20220314,0,0,1,3,1,0,0,2,3],[0.01,"-"],4.52],["BGD","Bangladesh",37.04,[20220312,2,1,1,0,0,1,0,2,4],[0.05,"-"],62.01],["MDG","Madagascar",37.5,[20220328,0,0,2,3,0,2,0,2,3],[0.04,"="],3.7],["ZAF","South Africa",37.96,[20220326,0,2,1,2,1,0,0,1,2],[2.33,"+"],29.65],["EST","Estonia",37.96,[20220321,1,1,1,1,0,0,2,2,3],[93.47,"-"],63.59],["MOZ","Mozambique",37.96,[20220320,0,2,1,3,0,0,0,2,2],[0.01,"="],40.83],["LSO","Lesotho",37.96,[20220314,0,2,2,2,0,0,0,1,4],[0.0,"-"],33.7],["GEO","Georgia",37.96,[20220327,1,1,1,4,0,0,0,1,3],[14.14,"-"],31.56],["BHR","Bahrain",38.89,[20220318,1,1,1,2,0,1,0,2,2],[50.32,"-"],69.56],["BIH","Bosnia and Herzegovina",38.89,[20220327,1,1,1,3,0,1,0,1,2],[3.47,"+"],25.93],["COD","Democratic Republic of Congo",39.81,[20220320,0,1,1,0,0,2,2,1,4],[0.03,"="],0.56],["RUS","Russia",40.28,[20220307,0,2,1,2,0,2,1,3,3],[15.89,"-"],49.9],["RWA","Rwanda",40.74,[20220313,1,1,1,1,2,0,0,1,3],[0.04,"-"],60.53],["SOM","Somalia",40.74,[20220328,0,1,1,3,0,1,1,1,3],[0.0,"="],7.89],["MLI","Mali",40.74,[20220329,0,2,2,3,0,0,0,1,3],[0.01,"="],4.69],["KOR","South Korea",40.74,[20220327,0,2,1,4,0,0,0,2,3],[654.17,"-"],86.69],["ETH","Ethiopia",40.74,[20220314,1,1,1,3,1,0,0,1,3],[0.02,"="],17.78],["AUT","Austria",40.74,[20220328,2,2,1,3,0,0,0,1,2],[377.5,"-"],72.86],["MWI","Malawi",41.67,[20220321,0,1,1,2,1,2,0,1,3],[0.04,"="],4.39],["UGA","Uganda",43.52,[20220307,1,1,1,2,1,0,1,1,4],[0.03,"="],17.01],["EGY","Egypt",43.52,[20220328,1,1,2,4,0,0,0,1,4],[0.61,"="],30.43],["GHA","Ghana",43.52,[20220321,0,2,2,4,0,0,0,1,4],[0.03,"="],15.92],["MRT","Mauritania",43.52,[20220328,1,1,2,4,0,0,0,1,3],[0.01,"="],22.14],["ESP","Spain",43.98,[20220315,1,2,2,3,0,0,0,3,2],[39.58,"+"],85.82],["CRI","Costa Rica",44.44,[20220328,0,2,2,2,0,1,0,2,3],[7.49,"-"],76.62],["BMU","Bermuda",44.44,[20220328,1,1,1,3,0,1,0,3,3],[51.61,"="],75.21],["BRB","Barbados",44.44,[20220326,2,1,2,3,0,0,0,1,3],[47.67,"+"],52.5],["TGO","Togo",45.37,[20220314,1,2,2,3,0,2,0,2,4],[0.05,"-"],18.37],["IRQ","Iraq",46.3,[20220328,0,2,2,3,0,0,0,3,3],[0.84,"+"],17.29],["UZB","Uzbekistan",46.3,[20220327,1,1,2,3,0,0,1,2,1],[0.07,"="],40.82],["ALB","Albania",46.3,[20220314,1,1,1,3,0,0,2,1,2],[1.9,"+"],42.3],["NPL","Nepal",46.3,[20220328,0,1,2,1,1,1,1,1,4],[0.07,"="],63.98],["JPN","Japan",47.22,[20220329,1,1,1,1,0,1,1,4,1],[34.15,"+"],79.8],["QAT","Qatar",47.22,[20220328,1,1,1,0,1,1,1,3,2],[4.51,"-"],88.5],["CZE","Czech Republic",47.22,[20220325,1,2,1,3,1,0,0,2,2],[76.66,"-"],63.95],["NZL","New Zealand",47.22,[20220321,1,2,2,3,0,0,0,2,3],[313.53,"-"],78.98],["SLE","Sierra Leone",48.15,[20220328,2,2,2,0,1,0,0,2,3],[0.0,"="],13.68],["THA","Thailand",48.61,[20220328,0,2,2,3,0,1,1,2,1],[36.19,"+"],71.68],["PNG","Papua New Guinea",48.61,[20220312,0,1,2,3,0,1,1,4,4],[2.67,"="],2.75],["LBY","Libya",50.0,[20220328,1,2,2,4,0,0,0,2,3],[0.83,"-"],16.18],["SUR","Suriname",50.0,[20220311,1,2,2,3,0,0,0,3,4],[3.24,"-"],40.08],["MUS","Mauritius",50.0,[20220314,1,2,2,4,0,0,0,2,3],[130.77,"="],75.66],["IDN","Indonesia",51.39,[20220326,1,1,1,3,1,1,1,2,3],[1.62,"-"],57.16],["SMR","San Marino",52.78,[20220328,1,1,1,4,1,1,1,1,1],[100.2,"+"],69.4],["GUM","Guam",52.78,[20220313,1,2,2,3,0,0,0,4,3],[]],["COL","Colombia",52.78,[20220328,1,2,2,2,1,0,0,3,3],[0.65,"="],67.71],["MLT","Malta",52.78,[20220328,1,2,2,4,0,0,0,3,3],[64.71,"-"],90.33],["MAC","Macao",52.78,[20220312,1,2,1,4,0,0,1,3,2],[],77.44],["OMN","Oman",52.78,[20220329,1,2,2,4,0,0,0,3,2],[1.4,"-"],57.84],["DEU","Germany",53.7,[20220328,2,2,0,2,2,1,2,-1,2],[308.37,"+"],75.23],["LBN","Lebanon",53.7,[20220328,2,3,1,1,1,2,0,1,4],[5.04,"-"],32.48],["ZWE","Zimbabwe",53.7,[20220321,0,2,1,3,0,2,2,1,3],[1.3,"+"],23.15],["MYS","Malaysia",54.17,[20220320,2,2,2,4,0,0,2,2,3],[59.58,"-"],78.71],["AUS","Australia",54.17,[20220329,0,2,2,4,1,0,2,3,2],[220.42,"+"],82.03],["BLZ","Belize",54.63,[20220314,2,2,2,0,1,1,1,2,3],[2.23,"-"],51.65],["GIN","Guinea",54.63,[20220328,1,1,1,3,0,0,2,4,3],[0.0,"="],18.37],["BEN","Benin",55.56,[20220219,0,2,2,3,1,1,0,3,4],[0.0,"="],19.52],["GRC","Greece",55.56,[20220319,1,2,1,3,1,2,1,1,2],[202.83,"+"],73.2],["DMA","Dominica",55.56,[20220328,1,2,2,4,1,0,0,2,3],[7.74,"-"],41.47],["GAB","Gabon",55.56,[20220328,0,2,1,3,0,3,2,2,3],[0.02,"="],11.0],["ERI","Eritrea",56.48,[20220314,1,1,2,3,1,2,0,2,3],[0.0,"="]],["TTO","Trinidad and Tobago",56.48,[20220313,2,2,2,3,0,0,0,4,3],[19.57,"-"],50.49],["SYC","Seychelles",56.48,[20220321,2,2,2,4,1,0,0,1,3],[31.67,"-"],80.97],["BRN","Brunei",57.41,[20220317,3,1,1,2,1,1,0,4,4],[185.51,"-"],91.71],["BTN","Bhutan",57.41,[20220321,2,2,2,0,1,1,1,2,4],[60.19,"+"],74.32],["DZA","Algeria",58.33,[20220322,1,2,2,4,1,0,0,3,3],[0.03,"="],13.7],["CPV","Cape Verde",58.33,[20220310,0,2,2,0,2,1,2,1,3],[0.49,"-"],54.6],["DJI","Djibouti",58.33,[20220314,1,1,2,4,1,1,1,1,3],[0.16,"-"],10.48],["USA","United States",58.8,[20220330,2,2,2,2,1,1,2,4,3],[9.22,"-"],65.49],["GTM","Guatemala",58.8,[20220315,2,2,2,3,1,1,0,3,3],[6.07,"-"],32.49],["AGO","Angola",60.19,[20220307,0,3,1,3,0,2,1,4,4],[0.03,"-"],17.66],["AZE","Azerbaijan",60.19,[20220322,1,1,2,3,0,0,2,4,2],[0.38,"+"],47.14],["SGP","Singapore",60.19,[20220328,1,3,2,4,0,1,0,3,4],[120.56,"-"],90.92],["SWZ","Eswatini",60.19,[20220313,0,2,2,4,1,0,2,1,4],[1.21,"-"],27.16],["CAN","Canada",60.65,[20220328,2,2,2,3,0,1,2,4,3],[18.0,"+"],81.8],["FJI","Fiji",61.11,[20220313,0,3,2,0,2,0,2,3,3],[1.07,"="],69.38],["IRN","Iran",62.04,[20220225,2,3,2,4,0,0,2,3,2],[2.27,"+"],66.77],["KAZ","Kazakhstan",62.04,[20220313,1,1,2,4,1,1,2,3,3],[0.15,"-"],48.16],["JAM","Jamaica",62.96,[20220320,1,2,1,4,1,2,1,2,2],[0.78,"+"],22.6],["BHS","Bahamas",62.96,[20220320,3,1,1,3,1,1,2,1,3],[0.84,"-"],39.33],["ITA","Italy",63.89,[20220325,2,3,2,1,2,1,0,2,2],[119.2,"+"],79.2],["MAR","Morocco",63.89,[20220321,1,2,2,4,2,0,0,3,3],[0.19,"+"],62.52],["VNM","Vietnam",63.89,[20220321,2,2,2,3,2,2,2,1,3],[153.75,"-"],79.2],["UKR","Ukraine",63.89,[20220316,3,1,2,3,2,1,2,3,3],[0.0,"="],35.02],["CHN","China",64.35,[20220301,3,2,2,4,1,1,2,2,2],[0.1,"-"],85.91],["ECU","Ecuador",65.74,[20220328,0,2,2,4,2,0,2,1,3],[4.01,"+"],76.57],["TKM","Turkmenistan",66.67,[20220315,0,3,2,4,1,0,2,4,3],[],52.41],["SAU","Saudi Arabia",67.59,[20220321,2,2,2,3,2,0,2,0,2],[0.3,"-"],69.21],["BRA","Brazil",69.91,[20220307,2,2,2,4,1,2,2,4,3],[13.14,"-"],74.77],["PAK","Pakistan",70.37,[20220321,3,2,2,2,1,1,2,3,4],[0.11,"-"],45.24],["IND","India",71.76,[20220314,3,2,2,4,2,2,2,2,3],[0.11,"="],59.39],["KIR","Kiribati",72.69,[20220328,3,3,2,3,2,2,2,2,4],[0.96,"+"],45.58],["HKG","Hong Kong",75.0,[20220326,3,2,2,4,1,1,1,3,3],[129.34,"-"],75.99],["TON","Tonga",76.39,[20220319,2,2,2,4,2,2,1,4,4],[244.23,"-"],65.83],["PHL","Philippines",78.24,[20220328,3,3,2,4,2,2,2,3,4],[0.34,"-"],59.01],["LAO","Laos",78.7,[20220328,2,2,2,3,2,2,2,2,3],[29.49,"-"],60.38],["MMR","Myanmar",78.7,[20220325,3,1,2,4,1,2,2,3,4],[0.43,"-"],39.78],["SLB","Solomon Islands",81.94,[20220313,3,3,2,4,2,0,2,4,3],[11.94,"-"],16.46],["VUT","Vanuatu",85.19,[20220328,3,3,2,4,1,2,1,4,4],[74.19,"-"],27.09],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[12.46,"-"],44.82]];