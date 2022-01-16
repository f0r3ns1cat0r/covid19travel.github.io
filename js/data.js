const dataUpdate="2022.01.16";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["TZA","Tanzania",8.33,[20220110,0,0,0,0,0,0,0,1,1],[0.0,"="],2.21],["NIC","Nicaragua",8.33,[20220105,0,0,0,0,0,0,0,1,1],[0.08,"="],46.85],["MDG","Madagascar",11.11,[20220111,0,0,0,0,0,2,0,-1,4],[0.53,"-"],2.7],["YEM","Yemen",12.04,[20211220,1,0,0,0,0,0,0,1,1],[0.03,"-"],1.2],["BFA","Burkina Faso",13.89,[20211213,0,0,0,0,0,0,0,1,4],[0.52,"-"],3.38],["SDN","Sudan",13.89,[20211206,0,0,0,-1,0,0,0,1,4],[1.15,"+"],2.75],["BWA","Botswana",13.89,[20220103,0,0,0,0,0,0,0,1,3],[47.52,"="],43.35],["GMB","Gambia",13.89,[20220111,0,0,0,0,0,0,0,1,3],[1.95,"="],10.03],["CIV","Cote d'Ivoire",15.74,[20220108,1,1,0,0,0,0,0,1,3],[1.28,"-"],7.99],["NER","Niger",16.67,[20211220,0,0,2,0,0,0,0,2,3],[0.23,"-"],4.02],["CAF","Central African Republic",18.52,[20220110,0,0,0,0,0,2,1,2,-1],[2.56,"="],7.04],["BLR","Belarus",19.44,[20220108,0,0,0,0,0,0,0,3,1],[9.95,"+"],37.81],["BDI","Burundi",19.44,[20220103,0,0,0,0,2,0,0,1,1],[1.84,"="],0.03],["VUT","Vanuatu",19.44,[20220103,0,0,0,0,0,0,0,3,0],[0.0,"="],16.03],["AFG","Afghanistan",19.44,[20220110,0,2,1,0,1,0,0,2,3],[0.14,"+"],9.6],["TWN","Taiwan",20.37,[20220116,1,0,0,0,0,0,0,2,3],[0.28,"+"],70.65],["SEN","Senegal",21.3,[20220111,1,1,0,0,0,0,0,1,3],[3.11,"-"],5.78],["HUN","Hungary",22.22,[20220111,0,0,0,2,0,0,0,2,2],[65.15,"="],62.8],["SLB","Solomon Islands",22.22,[20220110,0,0,0,0,0,0,0,4,0],[-0.06,"="],8.61],["KIR","Kiribati",22.22,[20220103,0,0,0,0,0,0,0,4,0],[0.0,"="],33.39],["TCD","Chad",22.22,[20211227,0,0,0,3,0,0,0,1,4],[0.32,"="],0.56],["PAK","Pakistan",24.54,[20220109,0,1,1,2,0,1,0,1,4],[1.3,"+"],34.04],["PSE","Palestine",25.0,[20220103,0,0,0,0,0,0,2,2,4],[],29.02],["CUB","Cuba",26.85,[20220115,1,1,0,0,1,0,0,1,3],[26.42,"+"],86.19],["KWT","Kuwait",26.85,[20220111,1,1,0,0,0,0,0,3,2],[100.05,"+"],74.72],["BOL","Bolivia",26.85,[20220102,2,1,1,0,0,0,0,2,4],[65.63,"-"],41.44],["SLV","El Salvador",27.78,[20220110,0,0,2,1,0,0,0,1,2],[2.96,"="],63.89],["MDA","Moldova",27.78,[20220110,1,1,1,0,0,0,0,3,3],[28.4,"+"],24.79],["VEN","Venezuela",28.7,[20220103,1,0,0,0,1,0,0,3,2],[3.02,"-"],40.44],["SRB","Serbia",28.7,[20220113,0,0,1,2,0,1,0,1,3],[134.89,"+"],47.0],["NAM","Namibia",28.7,[20220108,0,1,1,2,0,0,0,1,3],[12.95,"-"],13.47],["TJK","Tajikistan",29.63,[20211228,1,1,0,0,0,0,0,4,4],[0.0,"="],29.7],["LBR","Liberia",29.63,[20220110,1,1,1,0,0,0,0,2,4],[0.76,"="],19.0],["SLE","Sierra Leone",29.63,[20220103,1,1,0,0,1,0,0,2,3],[0.22,"+"],4.73],["NGA","Nigeria",30.56,[20220103,0,0,1,3,0,0,0,2,3],[0.2,"-"],2.33],["CMR","Cameroon",30.56,[20211227,0,0,1,3,0,0,0,4,3],[0.0,"="],2.44],["MEX","Mexico",31.48,[20220109,0,1,1,0,1,1,2,1,2],[26.08,"+"],55.92],["URY","Uruguay",31.48,[20211220,0,1,1,2,0,0,0,2,2],[233.72,"+"],77.01],["MAC","Macao",32.41,[20220108,1,1,1,0,0,0,0,3,2],[],71.25],["BHR","Bahrain",32.41,[20220111,0,1,1,0,0,1,0,3,2],[122.04,"+"],67.89],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[1.73,"-"],8.45],["FRO","Faeroe Islands",32.41,[20220111,1,1,0,3,0,0,0,2,0],[849.61,"+"],83.05],["TGO","Togo",32.41,[20211220,0,1,2,1,0,0,0,3,4],[3.02,"-"],12.27],["MRT","Mauritania",33.33,[20220110,0,1,1,3,0,2,0,1,3],[19.32,"-"],20.27],["COG","Congo",33.33,[20211220,0,0,1,3,0,2,0,1,3],[2.91,"="],9.91],["JOR","Jordan",34.26,[20220113,0,1,1,2,0,0,0,3,2],[28.06,"+"],38.31],["GRL","Greenland",34.26,[20220103,1,1,1,0,0,1,1,1,2],[650.24,"-"],66.98],["FIN","Finland",34.72,[20220113,1,1,1,4,0,0,0,2,1],[169.17,"="],75.09],["DNK","Denmark",35.19,[20220110,1,1,1,2,0,0,0,2,2],[381.79,"+"],80.46],["LVA","Latvia",35.19,[20220110,1,1,1,3,0,0,0,1,-1],[112.19,"+"],68.41],["GUM","Guam",35.19,[20220116,1,1,1,3,0,0,0,1,3],[]],["CHL","Chile",35.65,[20220115,1,1,1,2,0,0,2,2,3],[31.15,"+"],87.13],["DOM","Dominican Republic",36.11,[20220103,0,1,2,2,1,1,0,1,3],[57.17,"-"],52.38],["DMA","Dominica",37.04,[20220105,3,1,0,0,1,0,0,2,3],[103.79,"-"],39.73],["ZMB","Zambia",37.96,[20220102,1,1,1,3,0,0,0,2,3],[10.45,"-"],7.58],["CZE","Czech Republic",37.96,[20220115,1,1,1,3,0,0,0,2,2],[84.01,"+"],62.74],["SOM","Somalia",37.96,[20220110,0,1,1,3,0,1,0,2,3],[0.0,"="],4.95],["ARG","Argentina",37.96,[20220105,0,1,1,1,1,1,0,2,4],[250.37,"-"],73.93],["SMR","San Marino",37.96,[20220110,1,1,1,4,0,0,0,1,3],[528.38,"="],63.76],["ISL","Iceland",37.96,[20220110,1,1,1,3,0,0,0,2,2],[356.97,"="],77.31],["GHA","Ghana",37.96,[20211220,0,2,2,2,0,0,0,1,4],[1.91,"-"],9.2],["IRN","Iran",38.89,[20220115,0,2,2,1,0,0,0,3,3],[2.35,"+"],62.35],["VIR","United States Virgin Islands",38.89,[20220103,1,1,1,3,0,1,0,1,3],[]],["COD","Democratic Republic of Congo",38.89,[20220103,0,1,1,3,0,2,0,1,3],[0.34,"="],0.17],["BGD","Bangladesh",38.89,[20220103,1,1,1,2,0,1,0,2,4],[1.76,"+"],33.59],["MWI","Malawi",39.81,[20220110,1,1,1,2,0,2,0,1,3],[2.09,"-"],3.81],["MNG","Mongolia",40.28,[20220110,1,2,1,3,0,1,1,2,4],[61.32,"+"],65.1],["THA","Thailand",40.28,[20211214,1,1,1,2,0,1,2,3,4],[9.74,"-"],64.94],["MCO","Monaco",40.74,[20220103,1,1,1,2,1,0,0,2,3],[370.23,"+"],58.98],["HRV","Croatia",40.74,[20220109,1,1,1,3,0,0,0,3,2],[185.93,"+"],53.38],["ETH","Ethiopia",40.74,[20220111,1,1,1,3,1,0,0,1,3],[1.61,"+"],1.35],["PRT","Portugal",40.74,[20220114,0,2,2,2,0,0,0,2,3],[335.23,"+"],90.09],["MLI","Mali",40.74,[20220110,0,2,2,3,0,0,0,1,3],[3.06,"+"],2.62],["PRY","Paraguay",40.74,[20220101,1,1,1,3,0,0,0,3,3],[6.03,"="],42.17],["ABW","Aruba",41.67,[20220110,1,0,1,4,0,2,0,1,2],[475.41,"-"],74.06],["GAB","Gabon",41.67,[20220103,0,0,1,3,0,2,1,2,3],[7.79,"="],7.6],["BMU","Bermuda",42.59,[20220106,1,1,1,3,0,2,0,1,3],[309.67,"="],73.55],["EST","Estonia",42.59,[20220115,0,1,2,4,0,0,0,2,2],[144.99,"+"],62.13],["RKS","Kosovo",42.59,[20220111,1,1,1,3,0,2,0,1,3],[23.97,"+"],44.42],["LBY","Libya",42.59,[20220105,1,0,2,4,0,0,0,2,3],[7.45,"="],13.31],["LBN","Lebanon",42.59,[20220109,0,2,1,1,1,2,0,1,4],[94.67,"-"],28.26],["ALB","Albania",43.52,[20220110,1,1,1,3,0,2,0,2,3],[79.6,"+"],37.15],["MLT","Malta",43.52,[20220110,1,1,1,4,0,0,0,3,4],[116.02,"-"],85.16],["TLS","Timor-Leste",43.52,[20220110,0,2,2,3,2,1,0,1,3],[0.07,"="],40.52],["ESP","Spain",43.52,[20220113,1,1,1,4,0,0,0,3,4],[283.59,"="],81.6],["PRI","Puerto Rico",43.52,[20220109,1,1,1,2,0,0,2,1,3],[]],["POL","Poland",43.52,[20220114,1,1,2,3,0,0,0,2,3],[36.34,"+"],56.68],["EGY","Egypt",43.52,[20220110,1,1,2,4,0,0,0,1,3],[0.97,"+"],22.6],["NZL","New Zealand",43.98,[20220108,1,1,1,3,0,0,2,4,3],[1.17,"-"],76.01],["CHE","Switzerland",44.44,[20220115,1,2,2,3,0,0,0,1,3],[302.45,"="],67.42],["ZAF","South Africa",44.44,[20220103,1,2,2,1,1,0,0,1,3],[8.45,"-"],27.03],["DZA","Algeria",44.44,[20220110,0,2,2,4,1,0,0,1,4],[1.22,"+"],12.92],["UZB","Uzbekistan",44.44,[20220111,1,0,1,3,0,1,1,3,3],[1.79,"+"],36.66],["SGP","Singapore",44.44,[20220106,1,1,1,4,0,1,0,2,4],[15.1,"-"],86.66],["MUS","Mauritius",45.37,[20220110,2,2,1,3,0,0,0,2,3],[4.2,"-"],71.89],["LSO","Lesotho",45.37,[20220110,0,2,2,2,0,2,0,1,3],[5.88,"-"],29.69],["KOR","South Korea",45.37,[20220116,1,2,1,4,0,0,0,3,3],[7.74,"+"],84.56],["AUS","Australia",45.83,[20220114,0,0,0,4,1,2,2,3,3],[422.22,"+"],77.58],["CYP","Cyprus",46.3,[20211129,1,1,1,3,1,0,0,3,2],[265.12,"-"],69.2],["SWZ","Eswatini",46.3,[20220110,0,2,1,1,1,0,2,1,4],[7.26,"-"],26.93],["LUX","Luxembourg",46.3,[20220110,1,1,1,3,1,0,0,3,2],[254.16,"="],67.69],["KHM","Cambodia",46.3,[20220106,1,2,2,3,0,1,0,2,3],[0.16,"+"],80.84],["GEO","Georgia",46.3,[20220102,0,2,2,4,0,0,0,2,4],[122.3,"+"],29.82],["JPN","Japan",47.22,[20220107,1,1,1,1,0,1,1,4,1],[11.27,"+"],78.93],["TON","Tonga",47.22,[20220103,1,0,1,3,0,2,0,4,2],[0.0,"="],60.13],["TTO","Trinidad and Tobago",47.22,[20220105,2,1,2,3,0,0,0,2,4],[41.19,"+"],48.36],["KGZ","Kyrgyz Republic",47.22,[20220105,3,0,2,4,0,0,0,1,2],[6.87,"+"],15.38],["BIH","Bosnia and Herzegovina",47.22,[20220115,1,1,1,3,1,1,1,1,3],[69.02,"="],22.08],["MOZ","Mozambique",48.15,[20211206,0,1,2,3,1,2,0,1,3],[4.3,"-"],24.22],["SSD","South Sudan",48.15,[20220102,1,1,0,4,0,2,1,2,2],[0.57,"+"],1.75],["BHS","Bahamas",48.15,[20220110,3,1,1,3,0,0,0,3,4],[128.35,"+"],37.89],["BEL","Belgium",48.15,[20220113,1,3,1,3,0,0,0,3,3],[220.7,"="],75.91],["RUS","Russia",48.61,[20220113,0,2,1,2,0,2,2,3,2],[13.56,"+"],47.0],["GBR","United Kingdom",48.61,[20211226,1,2,2,3,1,0,0,2,3],[173.14,"-"],70.13],["SWE","Sweden",49.07,[20220106,1,1,2,4,0,0,0,3,0],[203.29,"="],73.5],["DJI","Djibouti",49.07,[20220101,1,1,1,4,1,0,0,3,4],[10.95,"-"],9.88],["TUR","Turkey",49.07,[20220110,0,2,2,0,1,0,2,1,4],[82.37,"+"],61.25],["LKA","Sri Lanka",49.07,[20220110,0,1,2,4,0,1,1,1,3],[2.95,"+"],64.5],["CRI","Costa Rica",49.07,[20220103,2,2,2,2,0,1,0,1,3],[71.05,"="],69.87],["BTN","Bhutan",49.07,[20220110,1,1,2,3,0,0,1,2,3],[2.67,"+"],72.83],["BRN","Brunei",50.0,[20220114,1,1,1,2,1,1,0,4,4],[6.53,"-"],90.99],["LTU","Lithuania",50.0,[20220110,2,1,2,4,0,0,0,2,2],[127.35,"+"],68.74],["BGR","Bulgaria",50.0,[20220109,1,2,2,3,0,0,0,3,2],[81.27,"+"],28.43],["RWA","Rwanda",50.46,[20220109,1,2,1,3,1,2,0,2,3],[4.88,"-"],42.78],["MYS","Malaysia",50.46,[20220109,2,1,2,4,0,0,2,2,3],[9.71,"-"],78.33],["NOR","Norway",51.85,[20220114,2,2,1,4,0,1,0,2,2],[170.24,"+"],72.36],["GUY","Guyana",51.85,[20220107,1,2,2,3,0,2,0,1,4],[106.72,"+"],37.37],["ARE","United Arab Emirates",51.85,[20211220,1,1,1,3,1,0,1,3,2],[27.9,"+"],91.97],["UKR","Ukraine",51.85,[20220103,3,1,1,3,0,0,2,2,2],[16.2,"+"],32.8],["COL","Colombia",51.85,[20211222,0,1,2,3,1,1,0,3,4],[59.37,"+"],57.65],["SAU","Saudi Arabia",51.85,[20211213,1,1,1,3,1,0,1,3,2],[14.22,"+"],66.32],["TUN","Tunisia",51.85,[20220116,2,1,2,4,0,1,0,2,3],[47.73,"+"],50.93],["ZWE","Zimbabwe",52.78,[20220108,0,1,2,3,1,2,0,2,3],[3.57,"-"],21.37],["IRL","Ireland",52.78,[20220108,1,2,2,4,0,0,0,3,3],[393.51,"-"],77.3],["AZE","Azerbaijan",52.78,[20220105,1,1,2,3,0,1,0,4,2],[5.97,"+"],46.04],["ROU","Romania",52.78,[20211220,2,1,1,2,0,2,1,3,-1],[41.59,"+"],41.34],["HND","Honduras",52.78,[20220113,2,2,2,0,0,1,2,1,3],[1.71,"-"],43.55],["NPL","Nepal",54.17,[20220110,1,1,1,4,1,1,2,2,4],[8.56,"+"],36.09],["LIE","Liechtenstein",54.63,[20220102,3,1,1,3,1,1,0,2,3],[208.32,"+"],67.5],["SYR","Syria",55.09,[20211219,3,3,1,3,1,2,1,1,3],[0.16,"+"],4.83],["BEN","Benin",55.56,[20211206,0,2,2,3,1,1,0,3,4],[0.61,"="],11.42],["CPV","Cape Verde",55.56,[20220110,0,2,2,3,0,1,2,1,3],[106.3,"-"],47.7],["HKG","Hong Kong",55.56,[20220103,1,1,1,3,1,1,1,3,2],[0.17,"-"],62.46],["USA","United States",56.02,[20220112,2,2,1,4,1,1,2,3,2],[244.06,"+"],62.4],["ERI","Eritrea",56.48,[20220111,1,1,2,3,1,2,0,2,3],[2.31,"-"]],["QAT","Qatar",56.48,[20220112,2,1,1,4,1,1,0,3,2],[140.12,"+"],75.7],["ISR","Israel",56.48,[20220115,2,2,2,3,0,0,0,4,2],[475.4,"+"],64.69],["PAN","Panama",57.41,[20220109,2,2,1,4,1,1,0,2,-1],[150.08,"+"],56.69],["ECU","Ecuador",57.87,[20220110,2,1,1,4,1,1,2,2,3],[34.81,"="],72.63],["SVN","Slovenia",59.26,[20220102,1,2,2,4,1,1,0,2,3],[274.0,"+"],57.86],["AND","Andorra",59.26,[20220105,1,2,1,4,1,1,1,2,4],[643.43,"="],66.44],["GTM","Guatemala",59.72,[20220110,2,2,2,3,2,1,-1,3,2],[11.25,"+"],27.11],["IND","India",59.72,[20220103,3,0,2,3,0,2,2,2,2],[16.5,"+"],46.57],["PNG","Papua New Guinea",60.19,[20220103,1,2,2,3,1,2,2,3,3],[0.17,"="],2.48],["OMN","Oman",60.19,[20220110,2,1,2,4,1,1,1,1,1],[10.02,"="],55.56],["SUR","Suriname",60.19,[20220114,1,2,2,4,0,2,0,3,4],[148.65,"+"],39.0],["GIN","Guinea",60.19,[20220110,1,1,2,3,0,2,2,2,3],[1.16,"="],9.58],["BRA","Brazil",61.57,[20211210,2,2,2,4,1,1,2,3,3],[32.42,"-"],67.94],["AUT","Austria",64.81,[20220115,2,2,2,3,1,2,0,3,2],[157.09,"+"],73.44],["HTI","Haiti",64.81,[20211221,1,1,2,4,1,2,1,2,3],[0.97,"="],0.65],["NLD","Netherlands",65.74,[20220114,2,2,2,4,0,1,1,3,3],[191.96,"+"],71.47],["IDN","Indonesia",66.2,[20220109,1,1,2,3,2,1,2,3,3],[0.27,"+"],43.04],["AGO","Angola",66.67,[20220101,0,2,2,3,1,1,2,4,3],[1.86,"-"],12.7],["BRB","Barbados",67.59,[20211220,3,2,2,3,1,2,0,2,3],[172.1,"+"],50.47],["MAR","Morocco",67.59,[20220103,1,3,2,4,2,0,0,3,3],[17.84,"+"],61.83],["SVK","Slovak Republic",68.52,[20211229,3,3,2,4,0,2,0,2,3],[50.94,"-"],47.91],["IRQ","Iraq",68.52,[20220110,1,2,2,3,0,2,2,3,3],[4.93,"+"],14.59],["VNM","Vietnam",68.52,[20220103,2,2,2,3,2,2,2,2,3],[19.29,"-"],69.71],["LAO","Laos",68.52,[20211227,0,2,2,3,2,2,2,3,3],[12.25,"-"],49.37],["SYC","Seychelles",69.44,[20220102,2,2,2,4,1,2,1,1,3],[599.92,"="],79.13],["FRA","France",69.44,[20220115,1,2,2,2,2,0,2,3,3],[455.98,"+"],75.01],["KAZ","Kazakhstan",71.3,[20220114,1,1,2,4,2,2,2,3,3],[41.79,"+"],45.26],["PER","Peru",71.3,[20220110,2,2,2,4,1,2,1,3,4],[59.73,"+"],66.21],["BLZ","Belize",72.22,[20220110,2,2,2,4,0,2,2,2,3],[172.81,"="],49.46],["PHL","Philippines",74.54,[20211227,3,2,2,4,2,2,2,3,4],[30.18,"+"],49.01],["TKM","Turkmenistan",75.0,[20211211,0,3,2,4,1,2,2,4,3],[],52.41],["CAN","Canada",75.46,[20220114,3,3,2,4,1,2,2,3,3],[92.25,"-"],77.85],["JAM","Jamaica",75.93,[20211221,2,3,1,3,1,2,2,3,3],[44.36,"-"],19.92],["ITA","Italy",76.85,[20220114,2,3,2,1,2,2,2,3,3],[299.63,"-"],75.03],["GRC","Greece",77.78,[20220110,1,2,2,4,2,2,2,2,3],[220.75,"-"],69.04],["UGA","Uganda",78.7,[20220109,3,2,2,2,2,2,2,1,3],[1.55,"-"],3.84],["CHN","China",79.17,[20220116,3,3,2,4,2,3,2,2,2],[0.01,"="],84.19],["MMR","Myanmar",80.56,[20220110,3,2,2,4,1,2,2,4,4],[0.29,"+"],28.41],["DEU","Germany",84.26,[20211231,2,3,2,4,2,1,2,3,2],[77.8,"+"],71.97],["FJI","Fiji",85.19,[20211220,3,3,2,4,2,2,2,-1,3],[34.44,"-"],67.73]];