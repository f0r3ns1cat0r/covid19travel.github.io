const dataUpdate="2022.02.13";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BFA","Burkina Faso",2.78,[20220129,0,0,0,0,0,0,0,1,4],[0.02,"="],3.59],["NIC","Nicaragua",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.18,"="],55.67],["TZA","Tanzania",8.33,[20220207,0,0,0,0,0,0,0,1,1],[0.05,"="],2.79],["YEM","Yemen",12.04,[20220124,1,0,0,0,0,0,0,1,1],[0.25,"="],1.18],["GMB","Gambia",13.89,[20220208,0,0,0,0,0,0,0,1,3],[0.18,"="],12.25],["BWA","Botswana",13.89,[20220212,0,0,0,0,0,0,0,1,3],[21.95,"="],45.01],["TLS","Timor-Leste",13.89,[20220117,0,0,0,0,0,0,0,1,3],[13.31,"+"],42.01],["CIV","Cote d'Ivoire",15.74,[20220124,1,1,0,0,0,0,0,1,3],[0.12,"-"],8.81],["SDN","Sudan",16.67,[20220207,1,1,0,0,0,0,0,2,4],[0.25,"+"],4.42],["NER","Niger",16.67,[20220207,0,0,0,0,0,0,0,2,3],[0.02,"="],4.08],["PSE","Palestine",16.67,[20220207,0,0,0,0,0,0,0,2,4],[],29.3],["TJK","Tajikistan",18.52,[20220207,1,1,0,0,0,0,0,2,3],[0.05,"="],38.56],["DNK","Denmark",19.44,[20220210,0,0,0,0,0,0,0,3,0],[795.52,"+"],81.5],["SWE","Sweden",19.44,[20220211,0,0,0,0,0,0,0,3,0],[154.95,"="],74.27],["BDI","Burundi",19.44,[20220207,0,0,0,0,0,0,2,1,2],[0.35,"="],0.06],["VUT","Vanuatu",19.44,[20220124,0,0,0,0,0,0,0,3,0],[0.0,"="],23.47],["AFG","Afghanistan",19.44,[20220131,0,2,1,0,1,0,0,2,3],[1.63,"-"],9.94],["SEN","Senegal",21.3,[20220207,1,1,0,0,0,0,0,1,3],[0.16,"-"],5.84],["BOL","Bolivia",21.3,[20220207,2,1,0,0,0,0,0,1,4],[13.34,"-"],45.98],["BLR","Belarus",23.15,[20220207,0,1,0,0,0,0,0,3,1],[81.59,"+"],44.84],["IRL","Ireland",23.15,[20220211,1,0,0,0,0,0,0,3,2],[106.73,"="],78.68],["NOR","Norway",25.0,[20220211,1,1,0,0,0,1,0,1,2],[371.53,"+"],73.36],["GRL","Greenland",25.0,[20220208,1,1,0,0,0,1,0,1,2],[96.63,"="],67.59],["FRO","Faeroe Islands",25.93,[20220209,1,0,1,2,0,0,0,0,0],[1611.5,"+"],83.33],["URY","Uruguay",25.93,[20220117,0,1,1,0,0,0,0,2,2],[217.18,"-"],77.51],["MDG","Madagascar",26.39,[20220207,0,0,2,3,0,0,0,1,3],[0.73,"-"],3.26],["CUB","Cuba",26.85,[20220207,1,1,0,0,1,0,0,1,3],[9.6,"-"],87.07],["TWN","Taiwan",27.78,[20220205,1,2,0,0,0,0,0,2,3],[0.25,"-"],73.9],["NAM","Namibia",28.7,[20220205,0,1,1,2,0,0,0,1,3],[2.61,"+"],13.79],["VEN","Venezuela",28.7,[20220207,1,0,0,0,1,0,0,3,3],[4.18,"-"],49.77],["SRB","Serbia",28.7,[20220124,0,0,1,2,0,1,0,1,3],[126.28,"-"],47.36],["LBR","Liberia",29.63,[20220131,1,1,1,0,0,0,0,2,4],[0.23,"="],19.05],["SLE","Sierra Leone",29.63,[20220207,1,1,0,0,1,0,0,2,3],[0.04,"="],8.51],["CHL","Chile",30.09,[20220212,1,1,1,2,0,0,1,2,3],[185.26,"-"],88.9],["PAK","Pakistan",30.09,[20220130,2,1,1,2,0,1,0,1,4],[1.55,"-"],39.9],["NGA","Nigeria",30.56,[20220131,0,0,1,3,0,0,0,2,3],[0.02,"-"],2.58],["CMR","Cameroon",30.56,[20220207,0,0,1,3,0,0,0,4,3],[1.05,"="],2.44],["PRT","Portugal",31.48,[20220211,0,1,1,2,0,0,0,2,3],[258.61,"-"],91.27],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[0.1,"-"],12.51],["MAC","Macao",32.41,[20220124,1,1,1,0,0,0,0,3,2],[],73.05],["COD","Democratic Republic of Congo",33.33,[20220131,0,1,1,0,0,2,1,1,4],[0.04,"="],0.23],["ARG","Argentina",34.26,[20220124,0,1,2,1,0,0,0,2,4],[47.74,"-"],77.68],["UGA","Uganda",34.26,[20220207,0,1,1,2,1,0,0,1,4],[0.14,"-"],4.71],["JOR","Jordan",34.26,[20220207,0,1,1,2,0,0,0,3,2],[191.21,"+"],41.61],["HND","Honduras",34.26,[20220207,0,2,1,0,0,2,0,1,3],[0.0,"="],43.72],["MCO","Monaco",35.19,[20220208,1,1,0,2,0,0,1,2,4],[94.29,"-"],64.95],["LBN","Lebanon",35.19,[20220123,0,1,1,1,1,1,0,1,4],[97.15,"-"],30.76],["PRY","Paraguay",35.19,[20220122,1,1,1,3,0,0,0,1,3],[31.45,"-"],43.57],["SLV","El Salvador",35.19,[20220124,2,0,2,1,0,0,0,1,4],[0.0,"="],64.84],["TCD","Chad",35.19,[20220122,1,1,1,3,0,0,0,1,4],[0.05,"="],0.8],["SOM","Somalia",35.19,[20220207,0,1,1,3,0,1,0,1,3],[0.12,"="],5.32],["BIH","Bosnia and Herzegovina",35.19,[20220131,1,1,1,3,0,0,0,1,3],[35.71,"="],25.93],["KHM","Cambodia",35.65,[20220207,1,2,1,3,0,0,0,2,3],[1.18,"+"],81.36],["MWI","Malawi",36.11,[20220131,1,1,1,2,0,1,0,1,3],[0.16,"-"],4.06],["MOZ","Mozambique",37.04,[20220117,0,1,1,4,0,0,0,2,2],[0.16,"-"],28.05],["DMA","Dominica",37.04,[20220210,3,1,0,0,1,0,0,2,3],[137.33,"+"],40.53],["MNG","Mongolia",37.5,[20220207,1,2,1,3,0,1,1,1,4],[74.36,"-"],65.22],["ISL","Iceland",37.96,[20220131,1,1,1,3,0,0,0,2,2],[521.2,"="],78.05],["ZMB","Zambia",37.96,[20220124,1,1,1,3,0,0,0,2,3],[1.96,"+"],9.29],["DOM","Dominican Republic",37.96,[20220124,0,1,2,2,1,1,0,1,3],[9.7,"-"],53.29],["SMR","San Marino",37.96,[20220124,1,1,1,4,0,0,0,1,3],[224.4,"="],64.03],["ABW","Aruba",37.96,[20220131,0,0,1,4,0,2,0,1,2],[26.89,"-"],74.76],["VIR","United States Virgin Islands",38.89,[20220202,1,1,1,3,0,1,0,1,2],[]],["SSD","South Sudan",38.89,[20220130,1,0,0,0,1,2,1,2,2],[0.06,"="],2.44],["TUR","Turkey",39.81,[20220208,0,1,1,0,1,0,2,1,4],[115.85,"-"],61.87],["MLI","Mali",40.74,[20220131,0,2,2,3,0,0,0,1,3],[0.07,"="],3.02],["ZWE","Zimbabwe",40.74,[20220130,0,0,1,3,1,2,0,1,3],[0.86,"-"],22.15],["ETH","Ethiopia",40.74,[20220208,1,1,1,3,1,0,0,1,3],[0.12,"="],1.36],["ZAF","South Africa",41.67,[20220207,1,2,1,2,1,0,0,1,3],[4.32,"-"],28.06],["CYP","Cyprus",41.67,[20220206,1,1,1,2,0,1,0,3,3],[196.92,"-"],71.41],["FIN","Finland",41.67,[20220210,1,1,2,3,1,0,0,2,1],[142.02,"="],75.78],["GBR","United Kingdom",42.13,[20220204,1,2,2,3,1,0,0,2,3],[109.75,"-"],71.43],["SVK","Slovak Republic",42.59,[20220210,0,0,2,4,0,1,0,2,3],[405.57,"-"],49.89],["BHS","Bahamas",42.59,[20220127,3,1,1,3,0,0,0,1,4],[7.63,"-"],38.51],["MUS","Mauritius",43.52,[20220207,0,2,2,3,0,0,0,2,3],[0.0,"="],71.45],["PRI","Puerto Rico",43.52,[20220211,1,1,1,0,0,0,2,3,2],[]],["AZE","Azerbaijan",43.52,[20220121,1,1,2,3,0,0,0,2,2],[66.43,"-"],46.58],["HRV","Croatia",43.52,[20220206,1,1,1,3,1,0,0,2,2],[125.92,"-"],54.35],["HTI","Haiti",43.52,[20220204,0,1,1,4,1,1,0,1,3],[0.43,"="],0.81],["EGY","Egypt",43.52,[20220202,1,1,2,4,0,0,0,1,4],[2.16,"-"],27.28],["GHA","Ghana",43.52,[20220206,0,2,2,4,0,0,0,1,4],[0.1,"-"],9.89],["TGO","Togo",43.52,[20220123,1,2,2,3,0,2,0,2,4],[0.13,"-"],12.68],["GTM","Guatemala",43.98,[20220201,2,2,2,3,0,0,0,1,2],[19.18,"-"],29.92],["GEO","Georgia",44.44,[20220130,1,2,2,2,0,0,0,2,4],[511.56,"-"],30.99],["BGR","Bulgaria",44.44,[20220206,1,2,2,3,0,0,0,1,2],[86.41,"-"],29.39],["BMU","Bermuda",44.44,[20220129,1,1,1,3,0,1,0,3,3],[51.61,"="],74.15],["CAF","Central African Republic",44.44,[20220207,0,1,1,0,1,2,1,2,3],[0.39,"="],12.09],["POL","Poland",45.37,[20220211,2,2,1,3,0,0,0,2,3],[85.9,"-"],58.15],["UZB","Uzbekistan",45.37,[20220206,1,0,2,3,0,0,1,3,3],[2.17,"-"],35.14],["LSO","Lesotho",45.37,[20220208,0,2,2,2,0,2,0,1,3],[0.76,"="],33.7],["KOR","South Korea",46.3,[20220213,0,2,2,4,0,0,0,2,3],[95.0,"+"],86.19],["CZE","Czech Republic",47.22,[20220130,1,2,2,3,0,0,0,2,2],[233.13,"-"],63.6],["MDA","Moldova",47.22,[20220207,2,1,2,4,0,0,0,1,2],[65.9,"-"],25.39],["AND","Andorra",47.22,[20220128,1,2,1,4,0,0,0,3,4],[100.03,"="],68.65],["CPV","Cape Verde",47.22,[20220206,0,2,2,0,0,1,2,1,3],[1.75,"+"],50.89],["LIE","Liechtenstein",47.22,[20220206,1,1,1,4,0,1,0,3,3],[314.73,"-"],68.56],["KGZ","Kyrgyz Republic",47.22,[20220201,3,0,2,4,0,0,-1,1,2],[1.52,"-"],16.89],["TON","Tonga",47.22,[20220131,1,0,1,3,0,2,0,4,2],[8.92,"="],60.59],["GAB","Gabon",47.22,[20220124,0,0,1,3,0,2,2,2,3],[1.15,"+"],10.28],["IRN","Iran",47.22,[20220115,0,2,2,4,0,0,0,3,3],[40.24,"-"],64.42],["JPN","Japan",47.22,[20220211,1,1,1,1,0,1,1,4,1],[70.36,"-"],79.29],["TTO","Trinidad and Tobago",48.15,[20220128,2,2,2,3,0,0,0,1,3],[53.47,"-"],49.71],["COG","Congo",48.15,[20220131,0,1,1,3,0,2,2,2,3],[0.4,"="],10.32],["RWA","Rwanda",48.15,[20220131,1,1,1,3,1,2,0,2,3],[0.19,"-"],52.34],["LVA","Latvia",48.15,[20220208,1,3,2,3,0,0,0,1,3],[514.73,"+"],69.27],["PAN","Panama",48.15,[20220131,2,1,1,4,0,1,0,2,4],[66.79,"+"],57.54],["THA","Thailand",48.15,[20220205,1,2,1,2,0,1,1,2,1],[19.71,"+"],70.31],["ISR","Israel",48.15,[20220212,2,2,2,0,0,0,0,4,2],[415.83,"-"],65.78],["RUS","Russia",48.61,[20220206,0,2,1,2,0,2,2,3,3],[126.72,"+"],48.59],["SAU","Saudi Arabia",49.07,[20220123,1,1,1,3,1,0,1,2,3],[8.46,"-"],67.67],["DJI","Djibouti",49.07,[20220122,1,1,2,4,0,0,0,3,2],[0.3,"-"],9.12],["KWT","Kuwait",49.07,[20220206,1,1,2,2,1,0,0,3,2],[81.8,"-"],75.38],["LKA","Sri Lanka",49.07,[20220110,0,1,2,4,0,1,1,1,3],[6.52,"-"],65.28],["ESP","Spain",49.07,[20220208,1,1,2,4,0,0,0,3,4],[123.59,"+"],82.09],["BEL","Belgium",50.0,[20220210,1,2,2,3,0,0,0,3,3],[154.13,"="],76.92],["EST","Estonia",50.0,[20220211,1,2,2,4,0,0,0,2,2],[453.32,"-"],62.95],["LBY","Libya",50.0,[20220128,1,2,2,4,0,0,0,2,3],[43.22,"="],14.72],["PNG","Papua New Guinea",50.93,[20220207,0,1,1,2,1,0,2,4,3],[1.74,"+"],2.57],["BHR","Bahrain",50.93,[20220131,1,2,2,3,0,1,0,2,4],[379.2,"-"],68.49],["MRT","Mauritania",51.85,[20220129,1,1,2,4,0,0,0,4,3],[0.37,"-"],20.99],["CHE","Switzerland",52.78,[20220211,2,1,2,4,0,0,0,3,2],[285.76,"="],68.17],["MLT","Malta",52.78,[20220207,1,2,2,4,0,0,0,3,4],[34.26,"-"],88.52],["GUM","Guam",52.78,[20220207,1,2,2,3,0,0,0,4,3],[]],["ROU","Romania",52.78,[20220131,2,1,1,2,0,2,1,3,3],[122.26,"-"],41.93],["BEN","Benin",53.7,[20220206,1,2,2,3,1,1,0,1,3],[0.06,"="],14.2],["SUR","Suriname",54.63,[20220204,1,2,2,3,0,2,0,2,4],[38.31,"-"],39.59],["DZA","Algeria",54.63,[20220205,1,1,2,4,1,0,0,3,3],[1.18,"-"],12.99],["SYR","Syria",55.09,[20220207,3,3,1,3,1,2,1,1,3],[0.65,"+"],5.1],["TUN","Tunisia",55.56,[20220207,2,1,2,4,0,2,0,2,3],[29.9,"-"],52.62],["LUX","Luxembourg",55.56,[20220207,1,2,2,3,1,0,0,3,2],[170.27,"="],67.69],["AUS","Australia",55.56,[20220212,0,2,1,2,1,2,2,3,3],[98.06,"+"],78.95],["ERI","Eritrea",56.48,[20220208,1,1,2,3,1,2,0,2,3],[0.13,"-"]],["CRI","Costa Rica",57.41,[20220127,2,2,2,2,0,1,1,2,3],[98.49,"="],72.27],["LTU","Lithuania",57.41,[20220202,2,3,2,4,0,0,0,2,2],[355.39,"-"],69.4],["BRN","Brunei",57.41,[20220213,3,1,1,2,1,1,0,4,4],[136.33,"+"],91.36],["MEX","Mexico",57.87,[20220206,0,3,2,4,1,2,2,1,4],[15.8,"+"],59.79],["NLD","Netherlands",58.33,[20220211,0,2,2,4,0,1,1,3,3],[732.04,"+"],71.86],["ARE","United Arab Emirates",58.33,[20220116,2,1,1,3,1,0,2,3,2],[16.36,"-"],94.04],["USA","United States",58.8,[20220201,2,2,2,4,1,1,1,4,3],[54.6,"-"],64.14],["COL","Colombia",59.26,[20220131,1,2,2,3,1,1,0,3,4],[16.34,"-"],63.56],["LAO","Laos",60.19,[20220124,0,2,2,3,2,2,2,-1,3],[5.14,"-"],51.97],["SWZ","Eswatini",60.19,[20220131,0,2,2,4,1,0,2,1,4],[2.83,"+"],28.56],["SGP","Singapore",60.19,[20220211,1,3,2,4,0,1,0,3,4],[196.31,"+"],88.45],["ECU","Ecuador",60.65,[20220207,2,1,2,3,1,1,2,2,3],[12.2,"-"],74.94],["ALB","Albania",61.11,[20220207,1,1,1,3,1,1,2,3,3],[21.74,"+"],40.71],["MAR","Morocco",61.11,[20220131,1,2,2,4,1,0,0,4,3],[3.29,"-"],62.13],["AUT","Austria",61.11,[20220211,2,3,2,4,1,0,0,2,2],[350.72,"-"],67.11],["PER","Peru",61.11,[20220208,2,2,2,4,1,0,1,3,4],[37.46,"-"],69.03],["BRA","Brazil",61.57,[20220212,2,2,2,4,1,1,2,3,3],[63.83,"-"],71.12],["NZL","New Zealand",62.04,[20220125,2,2,2,3,0,0,1,4,3],[5.94,"-"],76.93],["HKG","Hong Kong",62.04,[20220118,1,2,1,4,1,1,1,3,2],[4.25,"-"],64.33],["NPL","Nepal",62.96,[20220207,3,1,2,3,1,1,2,1,4],[3.63,"-"],48.55],["UKR","Ukraine",62.96,[20220117,3,1,1,3,0,1,2,3,2],[83.62,"-"],34.44],["GIN","Guinea",62.96,[20220207,1,1,2,4,0,2,2,2,3],[0.07,"-"],13.9],["HUN","Hungary",62.96,[20220207,0,2,2,2,2,0,2,2,3],[117.04,"="],63.64],["QAT","Qatar",63.89,[20220207,1,1,1,4,1,1,2,3,2],[27.16,"-"],75.7],["MYS","Malaysia",64.81,[20220129,3,1,2,4,0,0,2,2,3],[50.77,"+"],78.51],["BRB","Barbados",64.81,[20220125,3,2,2,3,1,2,0,1,3],[175.68,"-"],51.42],["IRQ","Iraq",64.81,[20220212,1,2,2,3,0,1,2,3,3],[10.27,"-"],15.46],["IDN","Indonesia",66.2,[20220131,1,1,2,3,2,1,2,3,3],[11.89,"-"],48.92],["RKS","Kosovo",66.67,[20220211,2,1,1,4,2,0,2,2,3],[48.85,"-"],45.42],["VNM","Vietnam",68.52,[20220124,2,2,2,3,2,2,2,2,3],[22.99,"+"],73.29],["BGD","Bangladesh",68.52,[20220212,3,1,2,4,1,1,1,2,4],[4.48,"-"],35.91],["OMN","Oman",69.44,[20220131,2,2,2,4,1,1,1,3,1],[41.84,"="],56.81],["TKM","Turkmenistan",69.44,[20220208,0,3,2,3,2,0,2,4,3],[],52.41],["SYC","Seychelles",69.44,[20220117,2,2,2,4,1,2,1,1,3],[90.64,"="],79.46],["FRA","France",69.44,[20220211,1,2,2,2,2,0,2,3,2],[226.21,"-"],76.98],["CHN","China",69.91,[20220126,3,2,2,4,1,3,2,2,2],[0.01,"="],85.05],["AGO","Angola",70.37,[20220207,0,3,2,3,1,1,2,3,3],[0.07,"="],14.38],["PHL","Philippines",71.76,[20220123,3,2,2,3,2,2,2,3,4],[4.29,"-"],54.16],["SLB","Solomon Islands",72.69,[20220206,3,1,2,4,1,2,2,4,3],[31.45,"-"],11.36],["FJI","Fiji",74.07,[20220207,2,3,2,3,1,0,2,3,3],[3.22,"="],68.14],["JAM","Jamaica",74.07,[20220130,1,2,2,4,1,2,2,2,3],[5.33,"-"],21.42],["SVN","Slovenia",75.0,[20220128,2,3,2,4,2,1,1,2,3],[388.51,"-"],58.49],["CAN","Canada",76.39,[20220211,3,3,2,4,1,1,2,4,3],[26.06,"+"],80.29],["KAZ","Kazakhstan",76.85,[20220124,1,2,2,4,2,3,2,3,3],[18.52,"+"],46.68],["ITA","Italy",76.85,[20220211,2,3,2,1,2,2,2,3,2],[120.63,"-"],77.64],["GUY","Guyana",77.78,[20220208,1,3,2,4,2,2,0,4,3],[13.66,"-"],40.44],["GRC","Greece",77.78,[20220206,1,2,2,4,2,2,2,2,3],[173.2,"+"],71.46],["BLZ","Belize",77.78,[20220207,2,2,2,4,1,2,2,2,4],[58.88,"="],50.49],["BTN","Bhutan",78.7,[20220131,3,2,2,4,1,3,2,2,4],[23.42,"+"],73.18],["MMR","Myanmar",80.56,[20220110,3,2,2,4,1,2,2,4,4],[2.03,"+"],34.39],["KIR","Kiribati",81.48,[20220131,3,3,2,4,2,2,2,2,4],[127.25,"-"],37.91],["IND","India",81.94,[20220207,3,3,2,4,2,3,2,2,3],[4.59,"-"],53.84],["DEU","Germany",84.26,[20220211,2,3,2,4,2,1,2,3,2],[226.15,"-"],74.11]];