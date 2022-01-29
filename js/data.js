const dataUpdate="2022.01.29";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["NIC","Nicaragua",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.1,"="],51.61],["BDI","Burundi",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.52,"+"],0.05],["TZA","Tanzania",8.33,[20220124,0,0,0,0,0,0,0,1,1],[0.13,"="],2.21],["YEM","Yemen",12.04,[20220124,1,0,0,0,0,0,0,1,1],[0.17,"-"],1.1],["BFA","Burkina Faso",13.89,[20220117,0,0,0,0,0,0,0,1,4],[0.12,"+"],3.59],["TLS","Timor-Leste",13.89,[20220117,0,0,0,0,0,0,0,1,3],[0.3,"="],41.79],["GMB","Gambia",13.89,[20220111,0,0,0,0,0,0,0,1,3],[0.0,"="],12.25],["CIV","Cote d'Ivoire",15.74,[20220124,1,1,0,0,0,0,0,1,3],[0.41,"-"],8.81],["NER","Niger",16.67,[20220117,0,0,2,0,0,0,0,2,3],[0.08,"="],4.02],["SDN","Sudan",18.52,[20220125,1,1,0,0,0,0,0,2,2],[1.03,"="],3.2],["VUT","Vanuatu",19.44,[20220124,0,0,0,0,0,0,0,3,0],[0.0,"="],22.03],["AFG","Afghanistan",19.44,[20220110,0,2,1,0,1,0,0,2,3],[0.57,"-"],9.71],["TWN","Taiwan",20.37,[20220116,1,0,0,0,0,0,0,2,3],[0.31,"="],72.92],["BWA","Botswana",21.3,[20220124,2,0,0,0,0,0,0,1,3],[41.31,"="],45.01],["SEN","Senegal",21.3,[20220124,1,1,0,0,0,0,0,1,3],[0.79,"-"],5.6],["HUN","Hungary",22.22,[20220124,0,0,0,2,0,0,0,2,3],[158.09,"+"],63.21],["SLB","Solomon Islands",22.22,[20220110,0,0,0,0,0,0,0,4,0],[16.99,"+"],10.08],["BLR","Belarus",23.15,[20220121,0,1,0,0,0,0,0,3,1],[20.2,"+"],43.34],["NAM","Namibia",23.15,[20220123,0,1,1,2,0,0,0,1,3],[3.91,"-"],13.79],["MDG","Madagascar",23.61,[20220117,0,0,2,3,0,0,0,1,3],[0.8,"="],2.7],["CAF","Central African Republic",24.07,[20220124,0,0,0,0,0,2,0,2,3],[1.15,"="],10.27],["PAK","Pakistan",24.54,[20220109,0,1,1,2,0,1,0,1,4],[3.23,"+"],35.86],["PSE","Palestine",25.0,[20220116,0,0,0,0,0,0,2,2,4],[],29.3],["URY","Uruguay",25.93,[20220117,0,1,1,0,0,0,0,2,2],[310.88,"+"],77.22],["CUB","Cuba",26.85,[20220115,1,1,0,0,1,0,0,1,3],[27.22,"-"],86.73],["BOL","Bolivia",26.85,[20220125,2,1,1,0,0,0,0,1,4],[45.38,"-"],43.7],["KWT","Kuwait",26.85,[20220118,1,1,0,0,0,0,0,3,2],[131.45,"+"],75.13],["SRB","Serbia",28.7,[20220124,0,0,1,2,0,1,0,1,3],[189.41,"+"],47.19],["SLE","Sierra Leone",29.63,[20220124,1,1,0,0,1,0,0,2,3],[0.07,"-"],8.51],["TJK","Tajikistan",29.63,[20220116,1,1,0,0,0,0,0,4,3],[0.25,"+"],36.94],["FRO","Faeroe Islands",29.63,[20220119,1,1,0,2,0,0,0,2,0],[1226.75,"-"],83.25],["LBR","Liberia",29.63,[20220124,1,1,1,0,0,0,0,2,4],[0.13,"+"],19.0],["CMR","Cameroon",30.56,[20220124,0,0,1,3,0,0,0,4,3],[0.0,"-"],2.44],["GRL","Greenland",30.56,[20220129,1,1,1,0,0,1,0,1,2],[283.35,"+"],67.43],["PRT","Portugal",31.48,[20220128,0,1,1,2,0,0,0,2,3],[545.32,"+"],90.43],["KEN","Kenya",32.41,[20211219,0,2,1,2,0,0,0,1,4],[0.34,"-"],9.64],["BHR","Bahrain",32.41,[20220118,0,1,1,0,0,1,0,3,2],[260.35,"+"],68.22],["MAC","Macao",32.41,[20220124,1,1,1,0,0,0,0,3,2],[],72.26],["COG","Congo",33.33,[20211220,0,0,1,3,0,2,0,1,3],[0.71,"-"],10.32],["MRT","Mauritania",33.33,[20220124,0,1,1,3,0,2,0,1,3],[3.36,"-"],20.44],["MDA","Moldova",33.8,[20220123,1,1,1,4,0,0,0,1,2],[106.22,"+"],25.11],["JOR","Jordan",34.26,[20220124,0,1,1,2,0,0,0,3,2],[82.73,"-"],40.76],["ARG","Argentina",34.26,[20220124,0,1,2,1,0,0,0,2,4],[182.42,"-"],75.82],["VEN","Venezuela",34.26,[20220119,1,0,0,0,1,0,1,3,3],[6.81,"-"],47.62],["TCD","Chad",35.19,[20220122,1,1,1,3,0,0,0,1,4],[0.16,"="],0.71],["SLV","El Salvador",35.19,[20220124,2,0,2,1,0,0,0,1,4],[0.0,"-"],64.45],["GUM","Guam",35.19,[20220116,1,1,1,3,0,0,0,1,3],[]],["LBN","Lebanon",35.19,[20220123,0,1,1,1,1,1,0,1,4],[98.05,"+"],29.57],["LVA","Latvia",35.19,[20220124,1,1,1,3,0,0,0,1,3],[359.79,"+"],68.91],["PRY","Paraguay",35.19,[20220122,1,1,1,3,0,0,0,1,3],[97.77,"+"],42.78],["MEX","Mexico",35.19,[20220123,0,2,1,0,1,1,2,1,4],[30.8,"-"],59.07],["CHL","Chile",35.65,[20220124,1,1,1,2,0,0,2,2,3],[105.74,"+"],87.98],["IRL","Ireland",36.11,[20220128,1,2,1,0,0,0,0,3,3],[101.54,"-"],77.62],["MOZ","Mozambique",37.04,[20220117,0,1,1,4,0,0,0,2,2],[0.75,"-"],28.05],["DMA","Dominica",37.04,[20220123,3,1,0,0,1,0,0,2,3],[82.75,"-"],40.16],["SSD","South Sudan",37.04,[20220117,1,1,0,0,1,2,0,2,2],[0.16,"-"],1.99],["MNG","Mongolia",37.5,[20220124,1,2,1,3,0,1,1,1,4],[73.46,"-"],65.19],["SMR","San Marino",37.96,[20220124,1,1,1,4,0,0,0,1,3],[419.34,"+"],63.91],["NGA","Nigeria",37.96,[20220103,0,0,1,3,0,2,0,2,3],[0.07,"-"],2.47],["SOM","Somalia",37.96,[20220110,0,1,1,3,0,1,0,2,3],[0.96,"="],5.3],["ZMB","Zambia",37.96,[20220124,1,1,1,3,0,0,0,2,3],[2.93,"-"],8.62],["DOM","Dominican Republic",37.96,[20220124,0,1,2,2,1,1,0,1,3],[27.04,"-"],52.82],["CZE","Czech Republic",37.96,[20220115,1,1,1,3,0,0,0,2,2],[290.71,"+"],63.2],["VIR","United States Virgin Islands",38.89,[20220117,1,1,1,3,0,1,0,1,3],[]],["MWI","Malawi",39.81,[20220110,1,1,1,2,0,2,0,1,3],[0.56,"-"],4.06],["LSO","Lesotho",39.81,[20220125,0,2,1,2,0,2,0,1,3],[1.85,"+"],34.07],["MLI","Mali",40.74,[20220118,0,2,2,3,0,0,0,1,3],[0.39,"-"],3.02],["ISL","Iceland",40.74,[20220123,1,1,1,4,0,0,0,2,2],[414.74,"-"],77.62],["ETH","Ethiopia",40.74,[20220118,1,1,1,3,1,0,0,1,3],[0.39,"-"],1.36],["HRV","Croatia",40.74,[20220124,1,1,2,3,0,0,0,1,2],[209.95,"-"],53.96],["ZAF","South Africa",41.67,[20220124,1,2,1,2,1,0,0,1,3],[5.28,"+"],27.6],["ABW","Aruba",41.67,[20220110,1,0,1,4,0,2,0,1,2],[100.62,"-"],74.41],["HND","Honduras",41.67,[20220124,2,2,2,0,0,1,0,1,3],[6.29,"="],43.55],["GBR","United Kingdom",42.13,[20220127,1,2,2,3,1,0,0,2,3],[132.99,"-"],70.84],["BHS","Bahamas",42.59,[20220127,3,1,1,3,0,0,0,1,4],[18.31,"-"],38.17],["BMU","Bermuda",42.59,[20220106,1,1,1,3,0,2,0,1,3],[180.3,"="],73.86],["LBY","Libya",42.59,[20220105,1,0,2,4,0,0,0,2,3],[34.09,"+"],14.02],["EST","Estonia",42.59,[20220115,0,1,2,4,0,0,0,2,2],[393.38,"+"],62.51],["RKS","Kosovo",42.59,[20220124,1,1,1,3,0,2,0,1,3],[184.72,"+"],45.09],["FIN","Finland",43.06,[20220127,1,1,2,4,1,0,0,2,1],[97.61,"-"],74.38],["MLT","Malta",43.52,[20220124,1,1,1,4,0,0,0,3,3],[60.05,"-"],86.96],["PRI","Puerto Rico",43.52,[20220122,1,1,1,2,0,0,2,1,3],[]],["EGY","Egypt",43.52,[20220110,1,1,2,4,0,0,0,1,4],[1.75,"+"],25.15],["HTI","Haiti",43.52,[20220117,0,1,1,4,1,1,0,1,3],[0.78,"-"],0.69],["ESP","Spain",43.52,[20220123,1,1,1,4,0,0,0,3,4],[245.56,"-"],81.9],["GHA","Ghana",43.52,[20220117,0,2,2,4,0,0,0,1,4],[0.75,"+"],9.89],["TGO","Togo",43.52,[20220123,1,2,2,3,0,2,0,2,4],[0.51,"+"],12.68],["GTM","Guatemala",43.98,[20220117,2,2,2,3,0,0,0,1,2],[15.57,"+"],28.67],["UZB","Uzbekistan",44.44,[20220111,1,0,1,3,0,1,1,3,3],[3.74,"-"],38.7],["CHE","Switzerland",44.44,[20220115,1,2,2,3,0,0,0,1,3],[415.56,"+"],67.87],["DZA","Algeria",44.44,[20220110,0,2,2,4,1,0,0,1,4],[4.97,"+"],12.99],["GEO","Georgia",44.44,[20220118,1,2,2,2,0,0,0,2,4],[345.66,"+"],30.58],["MUS","Mauritius",45.37,[20220110,2,2,1,3,0,0,0,2,3],[6.74,"+"],71.45],["KOR","South Korea",45.37,[20220123,1,2,1,4,0,0,0,3,3],[23.64,"+"],85.63],["BRN","Brunei",46.3,[20220124,-1,1,1,2,1,1,0,4,4],[7.41,"+"],91.28],["KHM","Cambodia",46.3,[20220106,1,2,2,3,0,1,0,2,3],[0.2,"="],81.18],["MCO","Monaco",46.3,[20220117,1,1,1,4,1,0,0,2,4],[319.99,"+"],58.98],["SVK","Slovak Republic",46.3,[20220128,0,1,2,4,0,1,0,2,3],[214.65,"+"],48.69],["LUX","Luxembourg",46.3,[20220124,1,1,1,3,1,0,0,3,2],[362.06,"-"],67.69],["LTU","Lithuania",46.3,[20220123,1,1,2,4,0,0,0,2,2],[291.81,"+"],69.1],["BIH","Bosnia and Herzegovina",47.22,[20220115,1,1,1,3,1,1,1,1,3],[62.78,"-"],25.83],["IRN","Iran",47.22,[20220115,0,2,2,4,0,0,0,3,3],[11.67,"+"],63.41],["GAB","Gabon",47.22,[20220124,0,0,1,3,0,2,2,2,3],[5.22,"+"],10.28],["TON","Tonga",47.22,[20220103,1,0,1,3,0,2,0,4,2],[0.0,"="],60.59],["KGZ","Kyrgyz Republic",47.22,[20220105,3,0,2,4,0,0,0,1,2],[7.93,"-"],15.04],["JPN","Japan",47.22,[20220128,1,1,1,1,0,1,1,4,1],[50.08,"+"],79.1],["POL","Poland",47.22,[20220127,2,1,2,3,0,0,0,2,3],[116.82,"+"],57.35],["COD","Democratic Republic of Congo",47.22,[20220117,0,1,1,3,0,2,1,2,3],[0.11,"-"],0.23],["AZE","Azerbaijan",47.22,[20220121,1,1,2,3,0,1,0,2,2],[23.46,"+"],46.35],["AND","Andorra",47.22,[20220128,1,2,1,4,0,0,0,3,4],[467.96,"-"],68.58],["TTO","Trinidad and Tobago",48.15,[20220128,2,2,2,3,0,0,0,1,3],[44.87,"-"],49.07],["NOR","Norway",48.15,[20220128,1,2,1,4,0,1,0,2,2],[367.44,"-"],72.96],["PNG","Papua New Guinea",48.15,[20220117,0,1,1,3,1,0,2,3,3],[0.67,"+"],2.53],["CYP","Cyprus",48.15,[20220124,2,1,1,3,0,1,0,3,3],[160.65,"+"],69.97],["THA","Thailand",48.15,[20220124,1,2,1,2,0,1,1,2,3],[11.11,"+"],68.54],["RUS","Russia",48.61,[20220122,0,2,1,2,0,2,2,3,3],[49.99,"+"],47.64],["DJI","Djibouti",49.07,[20220122,1,1,2,4,0,0,0,3,2],[2.59,"-"],8.68],["SWZ","Eswatini",49.07,[20220124,0,2,1,2,1,0,2,1,4],[3.13,"+"],28.16],["SAU","Saudi Arabia",49.07,[20220123,1,1,1,3,1,0,1,2,3],[13.24,"-"],66.94],["BTN","Bhutan",49.07,[20220110,1,1,2,3,0,0,1,2,3],[18.0,"+"],73.12],["LKA","Sri Lanka",49.07,[20220110,0,1,2,4,0,1,1,1,3],[5.25,"+"],64.65],["BGR","Bulgaria",50.0,[20220124,1,2,2,3,0,0,0,3,2],[128.67,"-"],28.88],["SWE","Sweden",50.0,[20220129,1,1,2,3,0,1,0,3,1],[405.19,"+"],74.31],["MYS","Malaysia",50.46,[20220109,2,1,2,4,0,0,2,2,3],[13.66,"+"],78.44],["RWA","Rwanda",50.46,[20220109,1,2,1,3,1,2,0,2,3],[1.16,"-"],52.34],["GUY","Guyana",51.85,[20220107,1,2,2,3,0,2,0,1,4],[54.05,"-"],38.82],["TUN","Tunisia",51.85,[20220116,2,1,2,4,0,1,0,2,3],[69.81,"-"],52.09],["ZWE","Zimbabwe",52.78,[20220108,0,1,2,3,1,2,0,2,3],[1.32,"-"],21.77],["ROU","Romania",52.78,[20220116,2,1,1,2,0,2,1,3,3],[120.96,"+"],41.62],["COL","Colombia",53.7,[20220117,1,2,2,1,1,1,0,3,4],[42.49,"-"],60.59],["LIE","Liechtenstein",54.63,[20220102,3,1,1,3,1,1,0,2,3],[316.23,"+"],67.97],["TUR","Turkey",54.63,[20220123,0,2,2,0,2,0,2,1,4],[90.61,"+"],61.57],["SUR","Suriname",54.63,[20220122,1,2,2,3,0,2,0,2,4],[89.32,"-"],39.34],["SYR","Syria",55.09,[20220122,3,3,1,3,1,2,1,1,3],[0.27,"+"],5.1],["CPV","Cape Verde",55.56,[20220124,0,2,2,3,0,1,2,1,3],[11.74,"-"],47.7],["BEL","Belgium",55.56,[20220127,1,2,2,3,1,0,0,3,3],[442.13,"-"],76.12],["BEN","Benin",55.56,[20220117,1,1,2,3,1,1,0,3,3],[0.17,"="],13.06],["USA","United States",56.02,[20220119,2,2,2,4,1,1,1,3,2],[165.18,"-"],63.42],["ERI","Eritrea",56.48,[20220118,1,1,2,3,1,2,0,2,3],[1.2,"+"]],["ISR","Israel",56.48,[20220128,2,2,2,3,0,0,0,4,2],[886.45,"-"],65.48],["QAT","Qatar",56.48,[20220112,2,1,1,4,1,1,0,3,2],[85.61,"-"],75.7],["PAN","Panama",57.41,[20220109,2,2,1,4,1,1,0,2,-1],[194.48,"-"],57.06],["CRI","Costa Rica",57.41,[20220127,2,2,2,2,0,1,1,2,3],[109.32,"+"],71.11],["ARE","United Arab Emirates",58.33,[20220116,2,1,1,3,1,0,2,3,2],[26.75,"-"],92.95],["NLD","Netherlands",58.33,[20220128,0,2,2,4,0,1,1,3,3],[358.13,"+"],71.67],["LAO","Laos",60.19,[20220124,0,2,2,3,2,2,2,-1,3],[7.38,"-"],51.97],["SGP","Singapore",60.19,[20220128,1,3,2,4,0,1,0,3,4],[75.24,"-"],87.14],["OMN","Oman",60.19,[20220110,2,1,2,4,1,1,1,1,1],[34.95,"="],56.22],["UGA","Uganda",60.19,[20220124,1,2,2,2,1,2,1,1,3],[0.5,"-"],4.1],["GIN","Guinea",60.19,[20220124,1,1,2,3,0,2,2,2,3],[0.32,"="],13.84],["ECU","Ecuador",60.65,[20220124,2,1,2,3,1,1,2,2,3],[27.41,"-"],74.11],["ALB","Albania",61.11,[20220121,1,1,1,3,1,1,2,3,3],[49.36,"-"],38.66],["BRA","Brazil",61.57,[20211210,2,2,2,4,1,1,2,3,3],[86.3,"+"],69.96],["AUT","Austria",62.04,[20220128,2,2,2,3,1,2,0,2,2],[373.34,"+"],74.4],["HKG","Hong Kong",62.04,[20220118,1,2,1,4,1,1,1,3,2],[1.17,"+"],63.42],["NZL","New Zealand",62.04,[20220125,2,2,2,3,0,0,1,4,3],[1.98,"+"],76.51],["UKR","Ukraine",62.96,[20220117,3,1,1,3,0,1,2,3,2],[53.99,"+"],33.63],["NPL","Nepal",62.96,[20220124,3,1,2,3,1,1,2,1,4],[23.28,"-"],44.17],["AUS","Australia",63.43,[20220121,0,3,2,4,1,2,2,3,3],[220.49,"+"],78.25],["IDN","Indonesia",66.2,[20220109,1,1,2,3,2,1,2,3,3],[2.03,"+"],14.79],["BGD","Bangladesh",66.67,[20220124,3,1,2,4,-1,2,1,2,4],[8.51,"+"],35.91],["DNK","Denmark",66.67,[20220127,1,2,2,2,2,0,2,2,2],[780.63,"+"],81.25],["BRB","Barbados",67.59,[20211220,3,2,2,3,1,2,0,2,3],[232.65,"+"],51.03],["MAR","Morocco",67.59,[20220103,1,3,2,4,2,0,0,3,3],[14.96,"-"],62.02],["PER","Peru",68.52,[20220123,2,2,2,4,1,2,1,3,4],[121.7,"-"],67.96],["VNM","Vietnam",68.52,[20220124,2,2,2,3,2,2,2,2,3],[15.76,"-"],73.29],["IRQ","Iraq",68.52,[20220124,1,2,2,3,0,2,2,3,3],[16.88,"+"],15.23],["FRA","France",69.44,[20220123,1,2,2,2,2,0,2,3,3],[542.64,"-"],76.13],["SYC","Seychelles",69.44,[20220117,2,2,2,4,1,2,1,1,3],[318.41,"="],79.46],["IND","India",71.76,[20220118,3,2,2,3,1,2,2,2,2],[20.23,"-"],50.1],["PHL","Philippines",71.76,[20220123,3,2,2,3,2,2,2,3,4],[20.13,"-"],52.36],["SVN","Slovenia",75.0,[20220128,2,3,2,4,2,1,1,2,3],[643.69,"+"],58.16],["TKM","Turkmenistan",75.0,[20211211,0,3,2,4,1,2,2,4,3],[],52.41],["JAM","Jamaica",76.85,[20220111,1,2,2,4,1,2,2,3,3],[25.71,"-"],20.76],["KAZ","Kazakhstan",76.85,[20220124,1,2,2,4,2,3,2,3,3],[64.65,"-"],45.99],["GRC","Greece",77.78,[20220118,1,2,2,4,2,2,2,2,3],[174.65,"+"],70.1],["BLZ","Belize",77.78,[20220119,2,2,2,4,1,2,2,2,4],[170.08,"-"],49.93],["AGO","Angola",77.78,[20220117,3,2,2,4,1,1,2,3,3],[1.02,"-"],13.94],["CAN","Canada",78.24,[20220128,3,3,2,4,1,2,2,4,3],[47.12,"-"],78.83],["CHN","China",79.17,[20220123,3,3,2,4,2,3,2,2,2],[0.0,"="],84.78],["MMR","Myanmar",80.56,[20220110,3,2,2,4,1,2,2,4,4],[0.29,"+"],33.31],["KIR","Kiribati",81.48,[20220124,3,3,2,4,2,2,2,2,4],[19.37,"+"],33.39],["ITA","Italy",85.19,[20220128,2,3,2,4,2,2,2,3,3],[255.2,"-"],76.11],["DEU","Germany",86.11,[20220127,2,3,2,4,2,2,2,3,4],[174.97,"+"],73.13],["FJI","Fiji",87.96,[20220116,3,3,2,3,2,2,2,2,3],[22.98,"-"],67.89]];