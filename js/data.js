const dataUpdate="2022.02.09";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BFA","Burkina Faso",2.78,[20220129,0,0,0,0,0,0,0,1,4],[0.05,"="],3.59],["NIC","Nicaragua",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.13,"="],53.74],["TZA","Tanzania",8.33,[20220207,0,0,0,0,0,0,0,1,1],[0.07,"="],2.79],["YEM","Yemen",12.04,[20220124,1,0,0,0,0,0,0,1,1],[0.11,"+"],1.18],["GMB","Gambia",13.89,[20220208,0,0,0,0,0,0,0,1,3],[0.22,"="],12.25],["BWA","Botswana",13.89,[20220207,0,0,0,0,0,0,0,1,3],[32.17,"="],45.01],["TLS","Timor-Leste",13.89,[20220117,0,0,0,0,0,0,0,1,3],[5.36,"+"],42.01],["CIV","Cote d'Ivoire",15.74,[20220124,1,1,0,0,0,0,0,1,3],[0.12,"-"],8.81],["SDN","Sudan",16.67,[20220207,1,1,0,0,0,0,0,2,4],[0.58,"="],4.42],["NER","Niger",16.67,[20220207,0,0,0,0,0,0,0,2,3],[0.02,"="],4.08],["DNK","Denmark",16.67,[20220207,0,0,0,0,0,0,0,2,0],[714.15,"+"],81.47],["TJK","Tajikistan",18.52,[20220207,1,1,0,0,0,0,0,2,3],[0.1,"="],38.56],["AFG","Afghanistan",19.44,[20220131,0,2,1,0,1,0,0,2,3],[1.5,"-"],9.94],["VUT","Vanuatu",19.44,[20220124,0,0,0,0,0,0,0,3,0],[0.0,"="],23.47],["BDI","Burundi",19.44,[20220207,0,0,0,0,0,0,2,1,2],[0.32,"="],0.06],["BOL","Bolivia",21.3,[20220207,2,1,0,0,0,0,0,1,4],[23.83,"-"],45.34],["SEN","Senegal",21.3,[20220207,1,1,0,0,0,0,0,1,3],[0.23,"-"],5.84],["BLR","Belarus",23.15,[20220207,0,1,0,0,0,0,0,3,1],[55.03,"+"],44.84],["IRL","Ireland",23.15,[20220205,1,0,0,0,0,0,0,3,2],[104.93,"="],78.6],["NOR","Norway",25.0,[20220207,1,1,0,0,0,1,0,1,2],[338.61,"-"],73.25],["PSE","Palestine",25.0,[20220116,0,0,0,0,0,0,2,2,4],[],29.3],["GRL","Greenland",25.0,[20220208,1,1,0,0,0,1,0,1,2],[91.35,"-"],67.48],["URY","Uruguay",25.93,[20220117,0,1,1,0,0,0,0,2,2],[265.67,"-"],77.45],["FRO","Faeroe Islands",25.93,[20220209,1,0,1,2,0,0,0,0,0],[1434.62,"+"],83.31],["MDG","Madagascar",26.39,[20220207,0,0,2,3,0,0,0,1,3],[1.09,"="],3.26],["CUB","Cuba",26.85,[20220207,1,1,0,0,1,0,0,1,3],[13.73,"-"],86.98],["TWN","Taiwan",27.78,[20220205,1,2,0,0,0,0,0,2,3],[0.25,"="],73.45],["NAM","Namibia",28.7,[20220205,0,1,1,2,0,0,0,1,3],[2.99,"+"],13.79],["SRB","Serbia",28.7,[20220124,0,0,1,2,0,1,0,1,3],[173.14,"-"],47.31],["VEN","Venezuela",28.7,[20220207,1,0,0,0,1,0,0,3,3],[6.16,"-"],49.26],["LBR","Liberia",29.63,[20220131,1,1,1,0,0,0,0,2,4],[0.06,"="],19.05],["SLE","Sierra Leone",29.63,[20220207,1,1,0,0,1,0,0,2,3],[0.01,"-"],8.51],["CHL","Chile",30.09,[20220206,1,1,1,2,0,0,1,2,3],[174.94,"+"],88.55],["PAK","Pakistan",30.09,[20220130,2,1,1,2,0,1,0,1,4],[2.46,"-"],39.05],["NGA","Nigeria",30.56,[20220131,0,0,1,3,0,0,0,2,3],[0.05,"="],2.58],["CMR","Cameroon",30.56,[20220207,0,0,1,3,0,0,0,4,3],[1.4,"="],2.44],["PRT","Portugal",31.48,[20220204,0,1,1,2,0,0,0,2,3],[426.03,"-"],91.2],["MAC","Macao",32.41,[20220124,1,1,1,0,0,0,0,3,2],[],72.79],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[0.2,"-"],11.72],["COD","Democratic Republic of Congo",33.33,[20220131,0,1,1,0,0,2,1,1,4],[0.08,"="],0.23],["UGA","Uganda",34.26,[20220207,0,1,1,2,1,0,0,1,4],[0.18,"-"],4.71],["HND","Honduras",34.26,[20220207,0,2,1,0,0,2,0,1,3],[0.0,"="],43.55],["ARG","Argentina",34.26,[20220124,0,1,2,1,0,0,0,2,4],[80.51,"-"],77.09],["JOR","Jordan",34.26,[20220207,0,1,1,2,0,0,0,3,2],[169.45,"+"],41.61],["PRY","Paraguay",35.19,[20220122,1,1,1,3,0,0,0,1,3],[75.06,"+"],43.18],["MCO","Monaco",35.19,[20220208,1,1,0,2,0,0,1,2,4],[213.69,"+"],64.95],["TCD","Chad",35.19,[20220122,1,1,1,3,0,0,0,1,4],[0.07,"="],0.8],["BIH","Bosnia and Herzegovina",35.19,[20220131,1,1,1,3,0,0,0,1,3],[45.02,"="],25.93],["SOM","Somalia",35.19,[20220207,0,1,1,3,0,1,0,1,3],[0.61,"="],5.32],["SLV","El Salvador",35.19,[20220124,2,0,2,1,0,0,0,1,4],[2.1,"-"],64.54],["LBN","Lebanon",35.19,[20220123,0,1,1,1,1,1,0,1,4],[118.98,"-"],30.45],["KHM","Cambodia",35.65,[20220207,1,2,1,3,0,0,0,2,3],[0.41,"+"],81.34],["MWI","Malawi",36.11,[20220131,1,1,1,2,0,1,0,1,3],[0.29,"-"],3.98],["DMA","Dominica",37.04,[20220123,3,1,0,0,1,0,0,2,3],[136.93,"="],40.4],["MOZ","Mozambique",37.04,[20220117,0,1,1,4,0,0,0,2,2],[0.24,"-"],28.05],["MNG","Mongolia",37.5,[20220207,1,2,1,3,0,1,1,1,4],[26.75,"-"],65.2],["ISL","Iceland",37.96,[20220131,1,1,1,3,0,0,0,2,2],[378.62,"="],77.62],["ABW","Aruba",37.96,[20220131,0,0,1,4,0,2,0,1,2],[46.3,"-"],74.66],["DOM","Dominican Republic",37.96,[20220124,0,1,2,2,1,1,0,1,3],[11.27,"-"],53.16],["MRT","Mauritania",37.96,[20220129,1,1,2,4,0,0,0,1,3],[0.8,"-"],20.99],["SMR","San Marino",37.96,[20220124,1,1,1,4,0,0,0,1,3],[364.61,"="],64.03],["ZMB","Zambia",37.96,[20220124,1,1,1,3,0,0,0,2,3],[1.77,"+"],9.1],["SSD","South Sudan",38.89,[20220130,1,0,0,0,1,2,1,2,2],[0.07,"="],2.44],["VIR","United States Virgin Islands",38.89,[20220202,1,1,1,3,0,1,0,1,2],[]],["TUR","Turkey",39.81,[20220208,0,1,1,0,1,0,2,1,4],[120.58,"-"],61.79],["MLI","Mali",40.74,[20220131,0,2,2,3,0,0,0,1,3],[0.11,"+"],3.02],["ZWE","Zimbabwe",40.74,[20220130,0,0,1,3,1,2,0,1,3],[0.91,"-"],22.07],["ETH","Ethiopia",40.74,[20220208,1,1,1,3,1,0,0,1,3],[0.2,"-"],1.36],["ZAF","South Africa",41.67,[20220207,1,2,1,2,1,0,0,1,3],[4.84,"-"],27.92],["CYP","Cyprus",41.67,[20220206,1,1,1,2,0,1,0,3,3],[240.0,"-"],71.34],["FIN","Finland",41.67,[20220207,1,1,2,3,1,0,0,2,1],[101.74,"="],75.67],["GBR","United Kingdom",42.13,[20220204,1,2,2,3,1,0,0,2,3],[282.23,"-"],71.28],["RKS","Kosovo",42.59,[20220124,1,1,1,3,0,2,0,1,3],[105.68,"-"],45.36],["SVK","Slovak Republic",42.59,[20220205,0,0,2,4,0,1,0,2,3],[375.16,"+"],49.4],["BHS","Bahamas",42.59,[20220127,3,1,1,3,0,0,0,1,4],[9.48,"+"],38.17],["PRI","Puerto Rico",43.52,[20220122,1,1,1,2,0,0,2,1,3],[]],["HTI","Haiti",43.52,[20220204,0,1,1,4,1,1,0,1,3],[1.05,"+"],0.81],["GHA","Ghana",43.52,[20220206,0,2,2,4,0,0,0,1,4],[0.34,"-"],9.89],["HRV","Croatia",43.52,[20220206,1,1,1,3,1,0,0,2,2],[167.23,"-"],54.23],["AZE","Azerbaijan",43.52,[20220121,1,1,2,3,0,0,0,2,2],[59.7,"+"],46.51],["MUS","Mauritius",43.52,[20220207,0,2,2,3,0,0,0,2,3],[1.44,"="],71.45],["TGO","Togo",43.52,[20220123,1,2,2,3,0,2,0,2,4],[0.18,"+"],12.68],["EGY","Egypt",43.52,[20220202,1,1,2,4,0,0,0,1,4],[2.23,"+"],27.28],["EST","Estonia",43.52,[20220130,1,1,2,4,0,0,0,1,2],[520.86,"+"],62.86],["GTM","Guatemala",43.98,[20220201,2,2,2,3,0,0,0,1,2],[17.12,"-"],29.51],["CAF","Central African Republic",44.44,[20220207,0,1,1,0,1,2,1,2,3],[0.37,"="],12.09],["BMU","Bermuda",44.44,[20220129,1,1,1,3,0,1,0,3,3],[84.64,"="],73.96],["GEO","Georgia",44.44,[20220130,1,2,2,2,0,0,0,2,4],[543.72,"+"],30.89],["BGR","Bulgaria",44.44,[20220206,1,2,2,3,0,0,0,1,2],[110.24,"-"],29.25],["LSO","Lesotho",45.37,[20220208,0,2,2,2,0,2,0,1,3],[0.55,"="],33.7],["UZB","Uzbekistan",45.37,[20220206,1,0,2,3,0,0,1,3,3],[2.94,"-"],38.7],["POL","Poland",45.37,[20220206,2,2,1,3,0,0,0,2,3],[117.43,"-"],57.92],["CZE","Czech Republic",47.22,[20220130,1,2,2,3,0,0,0,2,2],[327.01,"+"],63.5],["AND","Andorra",47.22,[20220128,1,2,1,4,0,0,0,3,4],[192.84,"="],68.65],["CPV","Cape Verde",47.22,[20220206,0,2,2,0,0,1,2,1,3],[2.77,"-"],50.89],["MDA","Moldova",47.22,[20220207,2,1,2,4,0,0,0,1,2],[102.78,"+"],25.31],["TON","Tonga",47.22,[20220131,1,0,1,3,0,2,0,4,2],[0.81,"="],60.59],["JPN","Japan",47.22,[20220207,1,1,1,1,0,1,1,4,1],[71.37,"+"],79.28],["GAB","Gabon",47.22,[20220124,0,0,1,3,0,2,2,2,3],[3.37,"="],10.28],["IRN","Iran",47.22,[20220115,0,2,2,4,0,0,0,3,3],[39.98,"+"],64.23],["KGZ","Kyrgyz Republic",47.22,[20220201,3,0,2,4,0,0,-1,1,2],[2.9,"-"],16.7],["LIE","Liechtenstein",47.22,[20220206,1,1,1,4,0,1,0,3,3],[306.49,"-"],68.47],["THA","Thailand",48.15,[20220205,1,2,1,2,0,1,1,2,1],[13.7,"+"],70.06],["LVA","Latvia",48.15,[20220208,1,3,2,3,0,0,0,1,3],[462.88,"+"],69.2],["TTO","Trinidad and Tobago",48.15,[20220128,2,2,2,3,0,0,0,1,3],[41.65,"+"],49.52],["PAN","Panama",48.15,[20220131,2,1,1,4,0,1,0,2,4],[100.28,"+"],57.3],["COG","Congo",48.15,[20220131,0,1,1,3,0,2,2,2,3],[0.13,"="],10.32],["RWA","Rwanda",48.15,[20220131,1,1,1,3,1,2,0,2,3],[0.33,"-"],52.34],["KOR","South Korea",48.15,[20220206,1,2,2,4,0,0,0,2,3],[55.52,"+"],86.07],["ISR","Israel",48.15,[20220208,2,2,2,0,0,0,0,4,2],[604.71,"-"],65.75],["RUS","Russia",48.61,[20220206,0,2,1,2,0,2,2,3,3],[104.25,"+"],48.37],["SAU","Saudi Arabia",49.07,[20220123,1,1,1,3,1,0,1,2,3],[10.6,"-"],67.49],["DJI","Djibouti",49.07,[20220122,1,1,2,4,0,0,0,3,2],[0.85,"-"],9.12],["KWT","Kuwait",49.07,[20220206,1,1,2,2,1,0,0,3,2],[131.01,"-"],75.38],["LKA","Sri Lanka",49.07,[20220110,0,1,2,4,0,1,1,1,3],[5.62,"+"],65.22],["ESP","Spain",49.07,[20220208,1,1,2,4,0,0,0,3,4],[128.51,"="],82.04],["LBY","Libya",50.0,[20220128,1,2,2,4,0,0,0,2,3],[51.73,"-"],14.72],["SWE","Sweden",50.0,[20220205,1,1,2,3,0,1,0,3,1],[307.42,"="],74.15],["PNG","Papua New Guinea",50.93,[20220207,0,1,1,2,1,0,2,4,3],[0.84,"="],2.57],["BHR","Bahrain",50.93,[20220131,1,2,2,3,0,1,0,2,4],[439.21,"+"],68.48],["GUM","Guam",52.78,[20220207,1,2,2,3,0,0,0,4,3],[]],["MLT","Malta",52.78,[20220207,1,2,2,4,0,0,0,3,4],[46.98,"-"],88.38],["ROU","Romania",52.78,[20220131,2,1,1,2,0,2,1,3,3],[152.55,"-"],41.85],["CHE","Switzerland",52.78,[20220206,2,1,2,4,0,0,0,3,2],[385.49,"="],68.14],["BRA","Brazil",53.24,[20220128,2,2,2,4,1,1,2,-1,3],[79.69,"-"],70.64],["BEN","Benin",53.7,[20220206,1,2,2,3,1,1,0,1,3],[0.06,"="],14.2],["DZA","Algeria",54.63,[20220205,1,1,2,4,1,0,0,3,3],[2.35,"-"],12.99],["SUR","Suriname",54.63,[20220204,1,2,2,3,0,2,0,2,4],[57.69,"+"],39.41],["SYR","Syria",55.09,[20220207,3,3,1,3,1,2,1,1,3],[0.47,"+"],5.1],["LUX","Luxembourg",55.56,[20220207,1,2,2,3,1,0,0,3,2],[285.79,"="],67.69],["TUN","Tunisia",55.56,[20220207,2,1,2,4,0,2,0,2,3],[52.06,"+"],52.57],["AUS","Australia",55.56,[20220205,0,2,1,2,1,2,2,3,3],[81.38,"-"],78.77],["BEL","Belgium",56.48,[20220207,1,3,2,2,1,0,0,3,3],[295.97,"="],76.38],["ERI","Eritrea",56.48,[20220208,1,1,2,3,1,2,0,2,3],[0.45,"-"]],["LTU","Lithuania",57.41,[20220202,2,3,2,4,0,0,0,2,2],[399.33,"-"],69.34],["CRI","Costa Rica",57.41,[20220127,2,2,2,2,0,1,1,2,3],[110.75,"="],72.27],["BRN","Brunei",57.41,[20220204,3,1,1,2,1,1,0,4,4],[34.58,"="],91.36],["MEX","Mexico",57.87,[20220206,0,3,2,4,1,2,2,1,4],[24.54,"-"],59.6],["MAR","Morocco",58.33,[20220131,1,2,2,4,1,0,0,3,3],[6.13,"-"],62.13],["NLD","Netherlands",58.33,[20220207,0,2,2,4,0,1,1,3,3],[477.61,"+"],71.79],["ARE","United Arab Emirates",58.33,[20220116,2,1,1,3,1,0,2,3,2],[21.13,"-"],93.74],["USA","United States",58.8,[20220201,2,2,2,4,1,1,1,4,3],[88.22,"-"],63.94],["COL","Colombia",59.26,[20220131,1,2,2,3,1,1,0,3,4],[26.6,"-"],62.9],["SWZ","Eswatini",60.19,[20220131,0,2,2,4,1,0,2,1,4],[2.6,"-"],28.56],["LAO","Laos",60.19,[20220124,0,2,2,3,2,2,2,-1,3],[5.72,"-"],51.97],["SGP","Singapore",60.19,[20220207,1,3,2,4,0,1,0,3,3],[101.93,"+"],88.45],["ECU","Ecuador",60.65,[20220207,2,1,2,3,1,1,2,2,3],[32.5,"="],74.78],["ALB","Albania",61.11,[20220207,1,1,1,3,1,1,2,3,3],[44.1,"-"],40.71],["AUT","Austria",61.11,[20220204,2,3,2,4,1,0,0,2,2],[362.85,"+"],74.71],["PER","Peru",61.11,[20220208,2,2,2,4,1,0,1,3,4],[60.26,"-"],68.82],["NZL","New Zealand",62.04,[20220125,2,2,2,3,0,0,1,4,3],[4.66,"+"],76.81],["HKG","Hong Kong",62.04,[20220118,1,2,1,4,1,1,1,3,2],[1.88,"+"],64.33],["NPL","Nepal",62.96,[20220207,3,1,2,3,1,1,2,1,4],[7.83,"-"],48.55],["UKR","Ukraine",62.96,[20220117,3,1,1,3,0,1,2,3,2],[81.59,"+"],34.19],["GIN","Guinea",62.96,[20220207,1,1,2,4,0,2,2,2,3],[0.27,"="],13.89],["HUN","Hungary",62.96,[20220207,0,2,2,2,2,0,2,2,3],[160.43,"="],63.58],["QAT","Qatar",63.89,[20220207,1,1,1,4,1,1,2,3,2],[39.59,"-"],75.7],["BRB","Barbados",64.81,[20220125,3,2,2,3,1,2,0,1,3],[211.07,"-"],51.32],["MYS","Malaysia",64.81,[20220129,3,1,2,4,0,0,2,2,3],[21.29,"+"],78.49],["IDN","Indonesia",66.2,[20220131,1,1,2,3,2,1,2,3,3],[7.17,"-"],47.8],["BGD","Bangladesh",66.67,[20220124,3,1,2,4,-1,2,1,2,4],[6.61,"-"],35.91],["IRQ","Iraq",68.52,[20220124,1,2,2,3,0,2,2,3,3],[15.92,"-"],15.46],["VNM","Vietnam",68.52,[20220124,2,2,2,3,2,2,2,2,3],[11.58,"-"],73.29],["TKM","Turkmenistan",69.44,[20220208,0,3,2,3,2,0,2,4,3],[],52.41],["SYC","Seychelles",69.44,[20220117,2,2,2,4,1,2,1,1,3],[176.05,"="],79.46],["OMN","Oman",69.44,[20220131,2,2,2,4,1,1,1,3,1],[44.0,"+"],56.81],["FRA","France",69.44,[20220206,1,2,2,2,2,0,2,3,2],[374.03,"-"],76.83],["CHN","China",69.91,[20220126,3,2,2,4,1,3,2,2,2],[0.0,"="],85.05],["AGO","Angola",70.37,[20220207,0,3,2,3,1,1,2,3,3],[0.13,"="],14.38],["PHL","Philippines",71.76,[20220123,3,2,2,3,2,2,2,3,4],[8.33,"-"],54.16],["SLB","Solomon Islands",72.69,[20220206,3,1,2,4,1,2,2,4,4],[39.35,"="],11.36],["CAN","Canada",72.69,[20220207,2,3,2,4,1,1,2,4,3],[33.97,"-"],79.97],["JAM","Jamaica",74.07,[20220130,1,2,2,4,1,2,2,2,3],[9.12,"-"],21.2],["FJI","Fiji",74.07,[20220207,2,3,2,3,1,0,2,3,3],[14.36,"="],68.14],["SVN","Slovenia",75.0,[20220128,2,3,2,4,2,1,1,2,3],[633.85,"-"],58.39],["ITA","Italy",76.85,[20220204,2,3,2,1,2,2,2,3,3],[164.51,"-"],77.47],["KAZ","Kazakhstan",76.85,[20220124,1,2,2,4,2,3,2,3,3],[31.84,"+"],46.45],["GUY","Guyana",77.78,[20220208,1,3,2,4,2,2,0,4,3],[32.64,"-"],39.85],["GRC","Greece",77.78,[20220206,1,2,2,4,2,2,2,2,3],[173.87,"-"],71.06],["BLZ","Belize",77.78,[20220207,2,2,2,4,1,2,2,2,4],[109.83,"="],50.49],["BTN","Bhutan",78.7,[20220131,3,2,2,4,1,3,2,2,4],[26.05,"+"],73.18],["MMR","Myanmar",80.56,[20220110,3,2,2,4,1,2,2,4,4],[0.69,"+"],34.39],["KIR","Kiribati",81.48,[20220131,3,3,2,4,2,2,2,2,4],[141.0,"+"],37.91],["IND","India",81.94,[20220207,3,3,2,4,2,3,2,2,3],[10.04,"-"],52.84],["DEU","Germany",87.96,[20220204,3,3,2,4,2,1,2,3,2],[221.91,"+"],73.9]];