const dataUpdate="2022.03.07";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["MNG","Mongolia",2.78,[20220307,0,0,0,0,0,0,0,1,2],[22.73,"="],65.28],["DOM","Dominican Republic",8.33,[20220306,0,0,0,0,0,0,0,1,0],[2.47,"+"],53.52],["NIC","Nicaragua",8.33,[20220228,0,0,0,0,0,0,0,1,1],[0.22,"="],59.94],["ISL","Iceland",11.11,[20220228,0,0,0,0,0,0,0,0,0],[734.96,"="],78.49],["YEM","Yemen",12.04,[20220221,1,0,0,0,0,0,0,1,1],[0.0,"-"],1.26],["CIV","Cote d'Ivoire",13.89,[20220213,0,0,0,0,0,0,0,1,4],[0.05,"+"],14.81],["PRT","Portugal",13.89,[20220225,0,0,0,0,0,0,0,1,3],[103.38,"+"],92.54],["TZA","Tanzania",13.89,[20220228,0,0,0,0,0,0,0,1,1],[0.0,"="],4.06],["GMB","Gambia",13.89,[20220301,0,0,0,0,0,0,0,1,3],[0.14,"="],12.74],["BWA","Botswana",13.89,[20220228,0,0,0,0,0,0,0,1,3],[0.0,"="],51.23],["NOR","Norway",13.89,[20220227,0,0,0,0,0,0,0,1,1],[201.79,"-"],73.58],["FRO","Faeroe Islands",13.89,[20220301,0,0,0,0,0,0,0,1,0],[123.08,"-"],83.37],["BFA","Burkina Faso",13.89,[20220227,0,0,0,0,0,0,0,1,2],[0.0,"="],5.36],["TJK","Tajikistan",14.81,[20220224,1,0,0,0,0,0,0,2,3],[0.0,"="],42.13],["OMN","Oman",15.74,[20220307,0,2,0,0,0,0,1,1,-1],[9.61,"-"],57.52],["SDN","Sudan",16.67,[20220221,0,0,0,0,0,0,0,2,3],[0.06,"="],5.2],["NER","Niger",16.67,[20220228,0,0,0,0,0,0,0,2,3],[0.01,"="],4.18],["PSE","Palestine",16.67,[20220207,0,0,0,0,0,0,0,2,4],[],32.86],["KHM","Cambodia",16.67,[20220221,0,0,0,0,0,0,0,2,3],[2.12,"-"],81.83],["DNK","Denmark",16.67,[20220306,0,0,0,0,0,0,0,2,0],[285.61,"-"],81.58],["SWE","Sweden",19.44,[20220226,0,0,0,0,0,0,0,3,0],[20.97,"="],74.74],["AFG","Afghanistan",19.44,[20220131,0,2,1,0,1,0,0,2,3],[0.44,"+"],10.75],["AND","Andorra",20.37,[20220228,0,1,0,0,0,0,0,2,2],[80.43,"="],68.84],["ARE","United Arab Emirates",21.3,[20220228,1,1,0,0,0,0,1,1,2],[5.08,"-"],95.33],["SEN","Senegal",21.3,[20220228,1,1,0,0,0,0,0,1,3],[0.07,"="],6.0],["BOL","Bolivia",21.3,[20220207,2,1,0,0,0,0,0,1,4],[2.29,"+"],47.36],["ISR","Israel",21.3,[20220304,2,0,0,0,0,0,0,1,2],[78.17,"-"],65.9],["BDI","Burundi",21.3,[20220221,0,0,0,0,0,2,1,1,2],[0.1,"="],0.07],["CAF","Central African Republic",21.3,[20220221,0,0,0,0,0,2,0,1,3],[0.39,"="],15.85],["CMR","Cameroon",22.22,[20220228,0,0,1,3,0,0,0,1,3],[0.04,"="],2.99],["VUT","Vanuatu",22.22,[20220214,0,0,0,0,0,0,0,4,0],[-0.05,"="],27.09],["IRL","Ireland",23.15,[20220226,1,0,0,0,0,0,0,3,2],[66.22,"="],79.79],["FIN","Finland",23.15,[20220306,1,0,0,0,1,0,0,2,1],[87.78,"="],76.35],["BLR","Belarus",23.15,[20220228,0,1,0,0,0,0,0,3,1],[20.46,"-"],49.06],["POL","Poland",24.07,[20220304,1,1,0,0,0,0,0,2,2],[30.67,"-"],58.85],["ABW","Aruba",25.0,[20220224,0,0,1,2,0,0,0,1,2],[7.49,"="],75.15],["GRL","Greenland",25.0,[20220307,1,1,0,0,0,1,0,1,2],[22.9,"="],67.65],["CUB","Cuba",26.85,[20220207,1,1,0,0,1,0,0,1,3],[4.5,"-"],87.37],["LSO","Lesotho",26.85,[20220306,0,2,0,2,0,0,0,1,4],[0.63,"="],33.7],["TWN","Taiwan",27.78,[20220226,1,2,0,0,0,0,0,2,3],[0.24,"-"],75.54],["ZMB","Zambia",27.78,[20220214,0,0,1,3,0,0,0,1,3],[0.87,"-"],10.48],["VEN","Venezuela",28.7,[20220207,1,0,0,0,1,0,0,3,3],[1.26,"+"],49.77],["URY","Uruguay",28.7,[20220208,0,1,1,0,0,0,0,3,2],[57.02,"-"],78.38],["NAM","Namibia",28.7,[20220226,0,1,1,2,0,0,0,1,3],[0.72,"-"],14.45],["MDG","Madagascar",29.17,[20220214,0,0,2,3,0,2,0,1,3],[0.07,"="],3.48],["GBR","United Kingdom",29.63,[20220225,1,2,2,0,0,0,0,1,3],[66.95,"="],71.93],["MLI","Mali",29.63,[20220301,0,2,2,3,0,0,0,1,-1],[0.01,"-"],4.23],["LBR","Liberia",29.63,[20220228,1,1,1,0,0,0,0,2,4],[0.07,"="],20.94],["LIE","Liechtenstein",31.48,[20220305,0,1,1,1,0,0,0,3,2],[420.76,"+"],68.89],["PAN","Panama",31.48,[20220305,0,0,2,0,0,1,0,2,4],[7.37,"-"],58.8],["KEN","Kenya",32.41,[20220222,0,2,1,2,0,0,0,1,4],[0.04,"="],13.95],["SLV","El Salvador",32.41,[20220220,2,0,2,1,0,0,0,0,4],[18.89,"="],65.33],["TCD","Chad",32.41,[20220220,1,1,1,2,0,0,0,1,3],[0.01,"="],0.84],["MAC","Macao",32.41,[20220219,1,1,1,0,0,0,0,3,2],[],74.97],["CHL","Chile",32.87,[20220306,1,1,1,2,0,0,1,2,3],[109.89,"-"],89.83],["COD","Democratic Republic of Congo",33.33,[20220214,0,1,1,0,0,2,1,1,4],[0.02,"="],0.48],["JOR","Jordan",34.26,[20220221,0,1,1,2,0,0,0,3,2],[20.66,"-"],42.7],["HND","Honduras",34.26,[20220305,0,2,1,0,0,2,0,1,3],[3.59,"="],45.35],["NLD","Netherlands",34.26,[20220227,0,0,1,0,0,1,1,3,2],[365.09,"+"],71.95],["PRY","Paraguay",35.19,[20220214,1,1,1,3,0,0,0,1,2],[5.12,"-"],44.57],["MEX","Mexico",35.19,[20220220,0,2,1,0,1,1,2,1,4],[6.52,"+"],60.73],["LBN","Lebanon",35.19,[20220214,0,1,1,1,1,1,0,1,4],[23.88,"-"],32.02],["ALB","Albania",35.19,[20220305,1,1,1,3,0,0,0,1,2],[3.39,"-"],41.73],["CYP","Cyprus",36.11,[20220307,1,1,1,2,0,1,0,1,3],[154.74,"+"],72.02],["TLS","Timor-Leste",36.11,[20220221,0,0,1,0,1,0,1,3,3],[0.99,"-"],42.67],["MWI","Malawi",36.11,[20220214,1,1,1,2,0,1,0,1,3],[0.08,"+"],4.18],["BIH","Bosnia and Herzegovina",36.11,[20220228,1,1,1,2,0,1,0,1,3],[6.47,"="],25.93],["SSD","South Sudan",36.11,[20220228,1,0,1,0,0,2,1,1,3],[0.06,"="],3.74],["DMA","Dominica",37.04,[20220210,3,1,0,0,1,0,0,2,3],[46.04,"="],41.02],["ARG","Argentina",37.04,[20220221,0,1,1,1,0,0,2,2,4],[12.46,"-"],79.39],["ZAF","South Africa",37.96,[20220228,0,2,1,2,1,0,0,1,3],[2.66,"-"],28.98],["ESP","Spain",37.96,[20220306,1,1,0,4,0,0,0,3,2],[37.55,"="],83.65],["HTI","Haiti",37.96,[20220227,0,1,1,4,0,1,0,1,3],[0.05,"-"],0.91],["NGA","Nigeria",37.96,[20220221,0,0,1,3,0,2,0,2,3],[0.01,"="],4.0],["SRB","Serbia",38.89,[20220221,1,1,1,2,0,1,0,2,3],[28.36,"-"],47.5],["VIR","United States Virgin Islands",38.89,[20220228,1,1,1,3,0,1,0,1,2],[]],["BHR","Bahrain",38.89,[20220221,1,1,1,2,0,1,0,2,4],[124.5,"-"],68.49],["RUS","Russia",40.28,[20220221,0,2,1,2,0,2,1,3,3],[62.87,"-"],49.43],["KOR","South Korea",40.74,[20220306,0,2,1,4,0,0,0,2,3],[427.02,"+"],86.53],["ETH","Ethiopia",40.74,[20220225,1,1,1,3,1,0,0,1,3],[0.04,"="]],["SOM","Somalia",40.74,[20220228,0,1,1,3,0,1,1,1,3],[0.03,"="],5.73],["MCO","Monaco",40.74,[20220228,1,1,0,4,0,0,1,2,2],[65.53,"+"],64.95],["CZE","Czech Republic",41.67,[20220214,1,2,1,3,0,0,0,2,2],[73.62,"-"],63.86],["BHS","Bahamas",42.59,[20220221,3,1,1,3,0,0,0,1,4],[1.53,"-"],38.77],["SVK","Slovak Republic",42.59,[20220221,0,0,2,4,0,1,0,2,3],[224.26,"-"],50.5],["BRB","Barbados",42.59,[20220304,2,2,2,3,0,0,0,1,3],[54.33,"-"],52.11],["MDA","Moldova",42.59,[20220228,0,1,2,4,0,0,0,2,2],[14.45,"+"],25.93],["MOZ","Mozambique",42.59,[20220304,0,2,1,4,0,1,0,2,3],[0.05,"="],35.68],["UGA","Uganda",43.52,[20220221,1,1,1,2,1,0,1,1,4],[0.04,"-"],16.3],["TGO","Togo",43.52,[20220219,1,2,2,3,0,2,0,2,4],[0.04,"+"],13.51],["TUN","Tunisia",43.52,[20220221,0,2,2,4,0,0,0,1,3],[8.96,"-"],53.09],["MRT","Mauritania",43.52,[20220228,1,1,2,4,0,0,0,1,3],[0.05,"="],21.85],["KWT","Kuwait",43.52,[20220228,1,1,2,-1,1,0,0,3,2],[12.88,"+"],75.71],["GHA","Ghana",43.52,[20220227,0,2,2,4,0,0,0,1,4],[0.42,"="],15.1],["EGY","Egypt",43.52,[20220228,1,1,2,4,0,0,0,1,4],[1.22,"-"],28.94],["HRV","Croatia",43.52,[20220228,1,1,1,3,1,0,0,2,2],[32.13,"-"],54.67],["AUS","Australia",43.98,[20220304,0,1,1,3,1,0,2,3,2],[97.83,"+"],79.59],["LBY","Libya",44.44,[20220304,1,1,1,4,1,1,0,2,3],[9.17,"-"],15.81],["BGR","Bulgaria",44.44,[20220221,1,2,2,3,0,0,0,1,2],[26.33,"-"],29.71],["QAT","Qatar",44.44,[20220306,1,1,1,3,1,1,1,3,-1],[7.84,"-"],75.7],["BMU","Bermuda",44.44,[20220219,1,1,1,3,0,1,0,3,3],[33.03,"="],74.48],["UZB","Uzbekistan",45.37,[20220301,1,0,2,3,0,0,1,3,3],[0.26,"-"],38.78],["RWA","Rwanda",45.37,[20220228,1,1,1,0,2,2,0,1,3],[0.07,"="],58.81],["LUX","Luxembourg",46.3,[20220307,1,1,1,3,1,0,0,3,2],[101.72,"="],71.85],["NPL","Nepal",46.3,[20220228,0,1,2,1,1,1,1,1,4],[0.31,"-"],60.13],["AZE","Azerbaijan",46.3,[20220222,1,1,1,3,2,0,0,1,2],[5.68,"-"],46.68],["BEL","Belgium",46.3,[20220306,1,1,2,3,0,0,0,3,3],[52.09,"="],78.11],["PRI","Puerto Rico",46.3,[20220305,1,1,1,1,0,0,2,3,3],[]],["EST","Estonia",46.3,[20220306,1,1,2,4,0,0,0,2,2],[253.71,"-"],63.4],["PNG","Papua New Guinea",46.76,[20220221,0,1,2,4,0,2,2,4,3],[0.61,"="],2.67],["THA","Thailand",47.22,[20220304,0,2,2,2,0,1,1,2,1],[31.91,"-"],71.1],["KGZ","Kyrgyz Republic",47.22,[20220220,3,0,2,4,0,0,0,1,2],[0.31,"-"],17.85],["ROU","Romania",47.22,[20220214,2,1,1,2,0,2,1,1,3],[29.36,"-"],42.19],["JPN","Japan",47.22,[20220307,1,1,1,1,0,1,1,4,1],[49.73,"-"],79.6],["MUS","Mauritius",47.22,[20220220,1,2,2,3,0,0,0,2,3],[0.0,"="],74.4],["SLE","Sierra Leone",48.15,[20220228,2,2,2,0,1,0,0,2,3],[0.0,"="],11.85],["SVN","Slovenia",48.15,[20220228,0,3,2,4,1,1,0,2,3],[80.65,"+"],58.63],["LVA","Latvia",48.15,[20220228,1,3,2,3,0,0,0,1,3],[394.11,"-"],69.61],["CHE","Switzerland",49.07,[20220226,1,1,2,4,0,0,0,3,2],[206.91,"="],68.7],["SAU","Saudi Arabia",49.07,[20220214,1,1,1,3,1,0,1,2,2],[1.26,"-"],67.81],["SUR","Suriname",50.0,[20220301,1,2,2,3,0,0,0,3,4],[9.45,"-"],39.9],["CRI","Costa Rica",50.0,[20220222,0,2,2,2,0,1,1,2,3],[33.96,"="],74.48],["ZWE","Zimbabwe",50.0,[20220228,0,1,2,2,1,2,0,2,3],[3.27,"+"],22.6],["GEO","Georgia",50.0,[20220228,1,2,2,4,0,0,0,2,4],[80.09,"-"],31.38],["TTO","Trinidad and Tobago",50.93,[20220220,2,2,2,3,0,0,0,2,3],[30.58,"-"],50.17],["LTU","Lithuania",50.93,[20220228,1,3,2,4,0,0,0,1,3],[164.28,"-"],69.55],["COG","Congo",51.85,[20220221,0,2,1,3,0,2,2,2,3],[0.14,"="],11.23],["HUN","Hungary",51.85,[20220228,0,2,2,2,2,0,0,2,3],[30.87,"="],64.08],["MLT","Malta",52.78,[20220301,1,2,2,4,0,0,0,3,4],[21.48,"+"],89.88],["LKA","Sri Lanka",52.78,[20220213,1,1,2,4,0,1,1,1,3],[3.4,"-"],66.08],["SMR","San Marino",52.78,[20220222,1,1,1,4,1,1,1,1,1],[74.52,"="],64.22],["GUM","Guam",52.78,[20220207,1,2,2,3,0,0,0,4,3],[]],["CPV","Cape Verde",52.78,[20220220,0,2,2,0,1,1,2,1,3],[0.33,"+"],53.41],["GTM","Guatemala",53.24,[20220225,2,2,2,3,1,1,0,1,3],[12.37,"-"],31.32],["MYS","Malaysia",54.17,[20220221,2,2,2,4,0,0,2,2,3],[89.59,"+"],78.59],["PAK","Pakistan",54.17,[20220223,2,2,2,2,1,1,2,3,-1],[0.37,"="],44.48],["GIN","Guinea",54.63,[20220226,1,1,1,3,0,0,2,4,3],[0.0,"="],13.9],["SYR","Syria",55.09,[20220207,3,3,1,3,1,2,1,1,3],[0.45,"-"],6.94],["BEN","Benin",55.56,[20220219,0,2,2,3,1,1,0,3,4],[0.01,"="],16.17],["ERI","Eritrea",56.48,[20220225,1,1,2,3,1,2,0,2,3],[0.06,"="]],["BRN","Brunei",57.41,[20220224,3,1,1,2,1,1,0,4,4],[960.11,"+"],91.61],["AUT","Austria",57.41,[20220304,2,2,2,4,1,0,0,2,2],[330.29,"+"],72.64],["DZA","Algeria",58.33,[20220223,1,2,2,4,1,0,0,3,3],[0.13,"-"],13.62],["DJI","Djibouti",58.33,[20220221,1,1,2,4,1,1,1,1,3],[0.04,"="],10.01],["USA","United States",58.8,[20220225,2,2,2,4,1,1,1,4,3],[13.97,"-"],64.86],["COL","Colombia",59.26,[20220228,1,2,2,3,1,1,0,3,4],[2.53,"-"],65.1],["SWZ","Eswatini",60.19,[20220222,0,2,2,4,1,0,2,1,4],[2.07,"-"],28.67],["SGP","Singapore",60.19,[20220307,1,3,2,4,0,1,0,3,4],[297.76,"-"],90.25],["FJI","Fiji",61.11,[20220307,0,3,2,0,2,0,2,3,3],[4.19,"="],68.67],["NZL","New Zealand",61.11,[20220228,1,2,2,4,0,0,1,4,3],[456.76,"+"],77.43],["BRA","Brazil",61.57,[20220212,2,2,2,4,1,1,2,3,3],[18.8,"-"],72.78],["IRN","Iran",62.04,[20220225,2,3,2,4,0,0,2,3,2],[8.41,"-"],65.57],["TUR","Turkey",62.04,[20220221,2,2,2,0,2,0,2,1,4],[55.68,"-"],62.16],["IDN","Indonesia",63.43,[20220228,1,1,2,3,2,1,2,2,3],[10.93,"-"],53.5],["VNM","Vietnam",63.89,[20220214,2,2,2,3,1,1,2,2,3],[163.45,"+"],78.86],["FRA","France",63.89,[20220226,1,2,2,-1,2,0,2,3,2],[82.02,"+"],77.63],["ITA","Italy",63.89,[20220305,2,3,2,1,2,1,0,2,2],[61.8,"+"],78.85],["CHN","China",64.35,[20220301,3,2,2,4,1,1,2,2,2],[0.02,"="],85.48],["IRQ","Iraq",64.81,[20220228,1,2,2,3,0,1,2,3,3],[2.34,"-"],16.74],["MAR","Morocco",65.74,[20220222,2,2,2,4,2,0,0,3,3],[0.29,"-"],62.42],["HKG","Hong Kong",65.74,[20220215,2,2,1,4,1,1,1,3,3],[572.24,"-"],69.84],["GAB","Gabon",65.74,[20220214,0,2,1,3,1,2,2,4,3],[0.16,"-"],10.78],["RKS","Kosovo",66.67,[20220221,2,1,1,4,2,0,2,2,3],[3.46,"-"],45.86],["PER","Peru",66.67,[20220214,2,2,2,4,1,0,2,3,4],[2.69,"-"],73.27],["ECU","Ecuador",67.59,[20220228,1,2,2,4,2,0,2,1,3],[6.85,"="],75.83],["MMR","Myanmar",68.52,[20220227,3,1,2,4,1,2,2,3,4],[3.22,"-"],38.38],["BGD","Bangladesh",68.52,[20220212,3,1,2,4,1,1,1,2,4],[0.4,"-"],51.91],["CAN","Canada",68.98,[20220225,2,2,2,4,1,1,2,4,3],[16.03,"-"],81.3],["TKM","Turkmenistan",69.44,[20220208,0,3,2,3,2,0,2,4,3],[],52.41],["AGO","Angola",70.37,[20220207,0,3,2,3,1,1,2,3,3],[0.05,"+"],16.53],["IND","India",71.76,[20220228,3,2,2,4,2,2,2,2,3],[0.45,"-"],57.5],["GRC","Greece",72.22,[20220222,1,2,2,4,2,2,1,2,3],[141.27,"+"],72.82],["KIR","Kiribati",72.69,[20220228,3,3,2,3,2,2,2,2,4],[8.61,"-"],37.91],["BTN","Bhutan",73.61,[20220305,1,3,2,4,2,3,2,2,4],[48.21,"-"],73.69],["JAM","Jamaica",74.07,[20220221,1,2,2,4,1,2,2,2,3],[1.05,"-"],22.09],["UKR","Ukraine",75.0,[20220214,3,1,2,3,2,1,2,3,3],[0.0,"="],35.02],["SYC","Seychelles",75.0,[20220214,2,2,2,4,1,2,2,1,3],[25.57,"="],80.8],["KAZ","Kazakhstan",76.85,[20220124,1,2,2,4,2,3,2,3,3],[1.19,"-"],47.44],["BLZ","Belize",77.78,[20220207,2,2,2,4,1,2,2,2,4],[10.02,"="],51.18],["GUY","Guyana",77.78,[20220208,1,3,2,4,2,2,0,4,3],[2.98,"+"],41.76],["PHL","Philippines",78.24,[20220214,3,3,2,4,2,2,2,3,4],[0.85,"-"],56.82],["TON","Tonga",79.17,[20220306,2,2,2,4,2,2,2,4,4],[73.39,"="],65.83],["DEU","Germany",80.56,[20220307,2,2,2,4,2,1,2,3,2],[190.58,"+"],74.9],["LAO","Laos",84.26,[20220228,2,2,2,3,2,2,2,4,3],[3.04,"+"],58.67],["SLB","Solomon Islands",87.5,[20220228,3,3,2,4,2,2,2,4,3],[22.65,"-"],13.51],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[19.06,"-"],44.66]];