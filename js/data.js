const dataUpdate="2021.12.12";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["BDI","Burundi",8.33,[20211206,0,0,0,0,0,0,0,1,1],[0.27,"="],0.01],["NIC","Nicaragua",8.33,[20211114,0,0,0,0,0,0,0,1,1],[0.16,"="],37.9],["TZA","Tanzania",8.33,[20211206,0,0,0,0,0,0,0,1,1],[0.01,"="],1.75],["YEM","Yemen",12.04,[20211129,1,0,0,0,0,0,0,1,1],[0.02,"="],1.2],["SDN","Sudan",13.89,[20211206,0,0,0,-1,0,0,0,1,4],[0.34,"="],2.75],["GMB","Gambia",13.89,[20211130,0,0,0,0,0,0,0,1,3],[0.04,"="],9.09],["BWA","Botswana",13.89,[20211211,0,0,0,0,0,0,0,1,3],[4.79,"="],22.03],["BFA","Burkina Faso",13.89,[20211115,0,0,0,0,0,0,0,1,3],[0.23,"="],1.51],["NER","Niger",16.67,[20211129,0,0,2,0,0,0,0,2,3],[0.05,"="],1.85],["SLB","Solomon Islands",16.67,[20211128,0,0,0,0,0,0,0,2,0],[0.0,"="],6.61],["TUN","Tunisia",16.67,[20211129,0,0,0,0,0,0,0,2,3],[1.4,"-"],44.61],["CIV","Cote d'Ivoire",17.59,[20211205,0,0,0,0,0,1,0,1,4],[0.04,"-"],5.21],["BLR","Belarus",19.44,[20211205,0,0,0,0,0,0,0,3,1],[16.95,"-"],30.35],["VUT","Vanuatu",19.44,[20211129,0,0,0,0,0,0,0,3,1],[0.0,"="],14.42],["SWE","Sweden",19.44,[20211204,0,0,0,0,0,0,0,3,0],[24.15,"="],71.46],["SEN","Senegal",21.3,[20211206,1,1,0,0,0,0,0,1,3],[0.05,"="],5.45],["CUB","Cuba",21.3,[20211203,1,1,0,0,0,0,0,1,3],[0.71,"-"],82.56],["TCD","Chad",22.22,[20211205,0,0,0,3,0,0,0,1,4],[0.0,"="],0.45],["KIR","Kiribati",22.22,[20211206,0,0,0,0,0,0,0,4,0],[0.0,"="],18.68],["CMR","Cameroon",22.22,[20211206,0,0,1,3,0,0,0,1,3],[0.22,"="],2.25],["CAF","Central African Republic",24.07,[20211211,0,0,0,0,0,2,0,2,3],[0.5,"="],6.81],["LIE","Liechtenstein",25.0,[20211129,1,1,1,0,0,1,0,3,-1],[162.98,"="],66.07],["PSE","Palestine",25.0,[20211205,0,0,0,0,0,0,2,2,4],[],26.56],["NAM","Namibia",25.0,[20211208,0,0,1,2,0,0,0,1,3],[14.8,"+"],12.33],["PRI","Puerto Rico",26.85,[20211121,1,1,1,0,0,0,0,1,3],[]],["MDG","Madagascar",26.85,[20211113,0,2,0,2,0,2,0,1,3],[0.51,"+"],1.9],["HUN","Hungary",27.78,[20211210,0,0,1,3,0,0,0,1,2],[71.06,"="],61.07],["AFG","Afghanistan",27.78,[20211206,0,2,2,0,2,0,0,2,3],[0.16,"="],8.95],["SLV","El Salvador",27.78,[20211118,0,0,2,1,0,0,0,1,2],[0.0,"="],62.9],["TJK","Tajikistan",29.63,[20211206,1,1,0,0,0,0,0,4,3],[0.0,"="],26.59],["SLE","Sierra Leone",29.63,[20211206,1,1,0,0,1,0,0,2,3],[0.03,"="],4.73],["COG","Congo",29.63,[20211205,0,0,1,3,0,1,0,1,3],[0.25,"="],2.4],["GRL","Greenland",30.56,[20211206,1,1,1,0,0,1,1,1,2],[58.13,"+"],66.42],["URY","Uruguay",31.48,[20211126,0,1,1,2,0,0,0,2,2],[6.42,"-"],76.48],["MEX","Mexico",31.48,[20211206,0,1,1,0,1,1,2,1,2],[1.91,"+"],50.67],["LBN","Lebanon",31.48,[20211205,0,0,1,1,1,1,0,1,1],[23.79,"+"],25.73],["PAK","Pakistan",31.94,[20211206,0,1,1,2,0,1,0,3,4],[0.14,"-"],24.92],["MAC","Macao",32.41,[20211124,1,1,1,0,0,0,0,3,2],[],68.11],["EST","Estonia",32.41,[20211126,1,1,1,1,0,0,0,2,2],[34.98,"-"],60.42],["MDA","Moldova",32.41,[20211208,1,1,0,2,0,0,0,3,2],[11.47,"-"],23.76],["BHR","Bahrain",32.41,[20211209,0,1,1,0,0,1,0,3,3],[1.96,"+"],66.65],["TUR","Turkey",32.41,[20211126,0,2,2,0,-1,0,0,1,4],[23.79,"-"],59.85],["KEN","Kenya",32.41,[20211121,0,2,1,2,0,0,0,1,4],[0.19,"+"],5.88],["FIN","Finland",32.87,[20211206,1,0,1,3,0,0,0,2,1],[25.33,"="],73.16],["PHL","Philippines",33.33,[20211203,3,2,1,0,0,1,0,3,4],[0.27,"-"],35.63],["BOL","Bolivia",33.8,[20211130,2,1,1,1,1,0,0,2,4],[10.59,"-"],36.47],["GUM","Guam",34.26,[20211205,-1,1,1,4,0,0,0,1,3],[]],["JOR","Jordan",34.26,[20211204,0,1,1,2,0,0,0,3,2],[48.63,"-"],37.13],["VEN","Venezuela",34.26,[20211208,1,0,0,0,1,0,1,3,2],[1.89,"+"],34.34],["NOR","Norway",34.72,[20211203,1,1,1,3,0,0,0,3,2],[82.59,"+"],70.89],["PRY","Paraguay",35.19,[20211210,1,1,1,3,0,0,0,1,3],[0.78,"-"],38.35],["CZE","Czech Republic",35.19,[20211125,1,1,1,3,0,0,0,1,2],[127.35,"-"],60.39],["SOM","Somalia",35.19,[20211129,0,1,1,3,0,1,0,1,3],[0.02,"="],4.06],["SSD","South Sudan",35.19,[20211129,1,1,0,4,0,0,0,2,2],[0.09,"="],1.52],["HRV","Croatia",37.04,[20211206,1,-1,1,3,0,0,0,3,1],[82.2,"-"],49.72],["MNG","Mongolia",37.04,[20211206,1,2,1,3,0,1,1,1,4],[7.89,"+"],64.75],["SMR","San Marino",37.96,[20211206,1,1,1,4,0,0,0,1,3],[133.04,"="],69.83],["CPV","Cape Verde",37.96,[20211129,0,1,1,0,0,1,2,1,2],[1.46,"-"],44.53],["LBY","Libya",38.89,[20211205,0,0,2,4,0,0,0,2,3],[6.59,"="],10.44],["IRQ","Iraq",38.89,[20211120,1,1,1,3,0,1,0,1,3],[1.28,"-"],12.21],["SRB","Serbia",38.89,[20211201,2,0,1,2,0,1,0,2,3],[17.47,"-"],45.95],["VIR","United States Virgin Islands",38.89,[20211201,1,1,1,3,0,1,0,1,3],[]],["ISL","Iceland",38.89,[20211206,2,1,1,2,0,0,0,2,2],[34.58,"="],82.19],["TGO","Togo",38.89,[20211115,0,0,2,3,0,0,1,1,4],[0.14,"-"],7.66],["BHS","Bahamas",39.35,[20211122,1,2,1,3,0,1,1,1,4],[2.03,"="],36.2],["MWI","Malawi",39.81,[20211212,1,1,1,2,0,2,0,1,2],[0.2,"+"],3.17],["DZA","Algeria",39.81,[20211128,0,1,2,4,0,0,0,1,3],[0.44,"+"],12.08],["COD","Democratic Republic of Congo",39.81,[20211129,0,1,1,3,0,2,2,1,3],[0.24,"="],0.07],["THA","Thailand",40.28,[20211206,1,1,1,2,0,1,2,3,4],[6.57,"-"],61.81],["AZE","Azerbaijan",40.74,[20211130,1,1,-1,2,0,0,1,4,2],[11.64,"-"],45.13],["MCO","Monaco",40.74,[20211212,1,1,2,3,0,0,0,1,3],[77.9,"+"],58.98],["FRO","Faeroe Islands",40.74,[20211210,1,1,2,3,0,0,0,1,0],[140.04,"="],77.76],["LBR","Liberia",40.74,[20211206,1,1,1,3,1,0,0,1,3],[0.03,"="],9.19],["GHA","Ghana",40.74,[20211122,0,2,2,3,0,0,0,1,4],[0.23,"+"],2.65],["KWT","Kuwait",40.74,[20211128,1,1,1,3,0,0,0,3,3],[0.7,"+"],73.46],["POL","Poland",41.67,[20211210,1,1,1,3,0,1,0,2,3],[60.31,"-"],54.67],["TWN","Taiwan",41.67,[20211112,1,2,1,3,0,0,0,2,3],[0.05,"="],62.62],["KOR","South Korea",41.67,[20211206,0,2,1,4,0,0,0,3,3],[12.33,"+"],81.18],["ABW","Aruba",41.67,[20211209,1,0,1,4,0,2,0,1,2],[19.13,"+"],73.14],["DOM","Dominican Republic",41.67,[20211126,1,1,2,2,1,1,0,1,3],[2.43,"-"],51.59],["TLS","Timor-Leste",42.13,[20211205,0,2,2,3,2,1,0,1,3],[0.01,"-"],36.44],["RKS","Kosovo",42.59,[20211206,1,1,1,3,0,2,0,1,3],[0.49,"+"],43.14],["KGZ","Kyrgyz Republic",42.59,[20211211,1,0,2,4,1,0,0,1,2],[0.78,"+"],14.13],["ARG","Argentina",42.59,[20211203,1,1,1,1,1,1,1,2,3],[5.53,"+"],67.69],["BMU","Bermuda",42.59,[20211121,1,1,1,3,0,2,0,1,3],[2.98,"="],72.52],["PRT","Portugal",43.52,[20211203,0,2,2,2,0,0,0,3,2],[38.4,"-"],88.69],["MLT","Malta",43.52,[20211210,1,1,1,4,0,0,0,3,3],[19.51,"+"],84.04],["LVA","Latvia",43.52,[20211206,1,1,1,4,1,0,0,1,3],[34.92,"+"],65.65],["EGY","Egypt",43.52,[20211206,1,1,2,4,0,0,0,1,3],[0.85,"="],16.14],["DJI","Djibouti",43.52,[20211120,1,1,-1,4,1,0,0,3,4],[0.09,"-"],2.6],["ETH","Ethiopia",43.52,[20211206,1,1,1,3,1,0,0,2,3],[0.11,"="],1.23],["ZMB","Zambia",43.52,[20211129,1,1,1,3,1,0,0,2,3],[0.52,"+"],4.34],["ESP","Spain",43.98,[20211203,1,2,2,3,0,0,0,3,3],[26.65,"-"],80.66],["CHL","Chile",43.98,[20211206,1,1,1,3,0,0,2,4,3],[5.79,"-"],84.88],["DNK","Denmark",44.44,[20211206,1,2,2,2,0,0,0,2,2],[104.36,"+"],77.18],["UZB","Uzbekistan",44.44,[20211207,1,0,1,3,0,1,1,3,3],[0.61,"+"],17.33],["SGP","Singapore",44.44,[20211202,1,1,1,4,0,1,0,2,4],[10.58,"-"],87.0],["BGD","Bangladesh",44.44,[20211206,1,1,1,2,1,1,0,2,4],[0.17,"+"],25.29],["MLI","Mali",44.44,[20211206,1,2,2,3,0,0,0,1,3],[0.49,"-"],1.67],["BIH","Bosnia and Herzegovina",44.44,[20211129,1,1,1,3,0,1,1,1,2],[16.34,"="],22.08],["GTM","Guatemala",45.37,[20211206,2,2,2,-1,1,1,0,3,3],[2.09,"-"],23.67],["ZAF","South Africa",45.37,[20211205,1,1,1,2,1,2,0,1,3],[26.27,"+"],25.53],["ALB","Albania",45.37,[20211122,1,1,1,3,0,2,0,2,2],[10.53,"-"],34.2],["CYP","Cyprus",46.3,[20211129,1,1,1,3,1,0,0,3,2],[46.54,"="],65.88],["LTU","Lithuania",46.3,[20211201,1,1,2,4,0,0,0,2,2],[59.61,"-"],67.04],["LUX","Luxembourg",46.3,[20211206,1,1,1,3,1,0,0,3,2],[60.59,"="],67.69],["GEO","Georgia",46.3,[20211128,0,2,2,4,0,0,0,2,4],[87.67,"-"],26.21],["GBR","United Kingdom",46.76,[20211203,1,2,2,3,1,0,0,3,3],[74.3,"+"],68.48],["MUS","Mauritius",47.22,[20211122,1,2,2,3,0,0,0,2,3],[5.48,"-"],71.85],["NGA","Nigeria",47.22,[20211129,0,1,1,3,1,2,0,2,3],[0.17,"+"],1.82],["BGR","Bulgaria",47.22,[20211207,1,2,2,3,0,0,0,2,2],[24.06,"+"],26.65],["TON","Tonga",47.22,[20211210,1,0,1,3,0,2,0,4,2],[0.0,"="],43.31],["JPN","Japan",47.22,[20211203,1,1,1,1,0,1,1,4,1],[0.09,"="],77.7],["MOZ","Mozambique",48.15,[20211206,0,1,2,3,1,2,0,1,3],[0.7,"+"],13.36],["AND","Andorra",48.15,[20211206,1,2,1,4,1,0,0,2,4],[264.4,"="],65.07],["CRI","Costa Rica",49.07,[20211206,2,2,2,2,0,1,0,1,3],[1.72,"="],63.79],["RWA","Rwanda",49.07,[20211129,1,2,1,3,1,2,0,-1,3],[0.2,"+"],29.23],["OMN","Oman",49.07,[20211207,1,1,2,4,0,0,0,3,3],[0.27,"="],54.14],["GAB","Gabon",49.07,[20211206,0,0,1,3,1,2,1,2,3],[0.73,"-"],6.23],["ZWE","Zimbabwe",49.07,[20211206,0,1,1,3,1,1,1,2,4],[25.45,"+"],19.62],["CHE","Switzerland",50.0,[20211204,1,2,2,3,0,0,0,3,2],[111.07,"="],65.96],["IRL","Ireland",50.0,[20211211,1,2,2,3,0,0,0,3,3],[86.39,"-"],76.43],["MRT","Mauritania",50.0,[20211206,0,1,1,3,1,2,1,1,3],[0.82,"-"],14.62],["USA","United States",50.46,[20211130,2,2,1,4,1,1,1,3,3],[35.92,"-"],60.28],["IND","India",51.39,[20211207,2,0,2,2,0,2,2,2,4],[0.68,"+"],36.75],["ARE","United Arab Emirates",51.85,[20211206,1,1,1,3,1,0,1,3,2],[0.73,"+"],90.18],["HND","Honduras",52.78,[20211126,2,2,2,0,0,1,2,1,3],[0.25,"="],38.67],["LSO","Lesotho",52.78,[20211206,2,2,2,2,0,2,0,1,3],[4.07,"="],28.64],["HKG","Hong Kong",52.78,[20211121,1,1,1,3,1,1,1,2,2],[0.06,"="],60.59],["BTN","Bhutan",53.24,[20211208,1,1,2,4,1,0,1,2,4],[0.15,"-"],72.4],["BEL","Belgium",53.7,[20211206,1,3,2,3,0,0,0,3,3],[126.1,"="],75.06],["NPL","Nepal",54.17,[20211206,1,1,1,4,1,1,2,2,4],[0.78,"-"],29.4],["LKA","Sri Lanka",54.63,[20211129,0,1,2,4,0,1,1,3,3],[3.5,"+"],64.11],["MYS","Malaysia",55.09,[20211128,2,1,2,4,0,1,2,2,3],[14.86,"-"],77.64],["AGO","Angola",55.09,[20211122,0,2,2,4,1,1,2,1,3],[0.07,"+"],9.77],["QAT","Qatar",55.56,[20211129,1,1,1,3,1,1,1,3,2],[5.54,"="],75.7],["COL","Colombia",55.56,[20211126,1,2,2,3,1,2,0,1,4],[3.52,"-"],50.45],["BEN","Benin",55.56,[20211206,0,2,2,3,1,1,0,3,4],[0.04,"="],7.04],["SVN","Slovenia",55.56,[20211129,-1,2,2,4,1,1,0,2,2],[70.26,"-"],56.27],["ISR","Israel",56.48,[20211203,2,2,2,3,0,0,0,4,2],[7.1,"="],62.31],["PAN","Panama",56.48,[20211207,2,2,1,4,1,0,0,3,4],[6.72,"+"],55.81],["NLD","Netherlands",56.48,[20211203,1,2,2,4,0,1,0,3,3],[112.72,"-"],74.37],["UKR","Ukraine",57.41,[20211203,3,1,1,3,1,0,2,2,2],[21.78,"-"],28.62],["ECU","Ecuador",57.87,[20211206,2,1,1,4,1,1,2,2,3],[3.23,"="],64.3],["ROU","Romania",58.33,[20211205,2,1,2,2,0,2,1,3,3],[4.74,"-"],39.7],["GIN","Guinea",59.26,[20211206,1,2,2,3,1,2,1,1,3],[0.03,"="],6.03],["CHN","China",59.72,[20211206,1,3,1,2,1,3,1,4,2],[0.01,"="],77.9],["KHM","Cambodia",60.65,[20211204,1,2,2,4,0,2,2,3,3],[0.09,"-"],79.86],["RUS","Russia",60.65,[20211203,2,2,2,2,0,3,2,3,2],[20.97,"-"],41.78],["SYR","Syria",60.65,[20211129,3,3,2,3,1,2,1,1,3],[0.53,"="],4.04],["IDN","Indonesia",60.65,[20211206,1,1,2,3,1,1,2,3,3],[0.08,"="],37.07],["SAU","Saudi Arabia",61.11,[20211122,1,2,2,3,1,0,1,3,2],[0.13,"+"],64.43],["TTO","Trinidad and Tobago",61.11,[20211205,2,1,2,4,0,0,1,4,4],[56.31,"+"],46.61],["SWZ","Eswatini",61.11,[20211206,3,1,1,3,1,2,1,1,3],[59.18,"+"],24.13],["BRA","Brazil",61.57,[20211210,2,2,2,4,1,1,2,3,3],[2.61,"-"],65.14],["IRN","Iran",61.57,[20211204,0,2,2,4,0,2,2,3,3],[3.6,"-"],56.63],["ERI","Eritrea",62.04,[20211206,1,1,2,3,1,2,0,4,3],[0.69,"-"]],["SVK","Slovak Republic",62.96,[20211206,2,3,2,4,0,2,0,2,3],[153.33,"-"],43.32],["PNG","Papua New Guinea",63.89,[20211209,2,2,2,3,1,2,1,3,-1],[0.71,"="],2.17],["PER","Peru",63.89,[20211205,2,2,2,4,0,2,1,3,3],[4.42,"+"],57.6],["HTI","Haiti",64.81,[20211129,1,1,2,4,1,2,1,2,3],[0.29,"-"],0.58],["NZL","New Zealand",65.28,[20211206,3,1,1,3,2,2,2,4,3],[2.04,"-"],73.15],["BLZ","Belize",65.74,[20211202,1,2,2,4,1,2,1,1,4],[12.68,"="],48.22],["GUY","Guyana",65.74,[20211119,1,2,2,4,1,2,0,3,3],[6.08,"-"],35.87],["FRA","France",66.67,[20211203,1,2,2,3,1,0,2,3,2],[74.45,"+"],70.8],["VNM","Vietnam",67.13,[20211121,2,2,2,3,2,2,2,2,3],[15.21,"+"],57.44],["BRB","Barbados",67.59,[20211130,3,2,2,3,1,2,0,2,3],[38.58,"-"],48.22],["MAR","Morocco",67.59,[20211128,1,3,2,4,2,0,0,3,3],[0.34,"-"],61.17],["SUR","Suriname",69.44,[20211210,2,2,2,3,0,2,2,2,4],[4.24,"-"],37.87],["SYC","Seychelles",69.44,[20211129,2,2,2,4,1,2,1,1,3],[30.07,"="],78.81],["CAN","Canada",69.91,[20211203,2,3,2,4,1,1,2,3,3],[10.02,"+"],76.68],["LAO","Laos",71.3,[20211206,0,2,2,3,2,2,2,4,3],[18.8,"+"],42.0],["KAZ","Kazakhstan",71.3,[20211130,1,1,2,4,2,2,2,3,3],[3.6,"-"],43.58],["MMR","Myanmar",72.22,[20211129,3,1,2,4,1,3,2,4,4],[0.59,"-"],21.64],["AUS","Australia",72.69,[20211206,3,3,2,4,1,2,2,3,4],[6.21,"+"],74.69],["AUT","Austria",73.15,[20211203,2,2,2,4,1,2,1,3,2],[51.18,"-"],68.07],["TKM","Turkmenistan",75.0,[20211211,0,3,2,4,1,2,2,4,3],[],52.41],["UGA","Uganda",75.93,[20211122,3,2,2,2,1,2,2,2,3],[0.09,"="],2.73],["ITA","Italy",76.85,[20211210,2,3,2,1,2,2,2,3,3],[26.52,"+"],73.35],["JAM","Jamaica",78.7,[20211129,2,3,2,4,1,2,2,3,3],[1.47,"+"],18.05],["DMA","Dominica",79.63,[20211203,3,3,2,4,1,2,1,2,3],[22.42,"="],37.57],["BRN","Brunei",79.63,[20211206,3,3,2,4,1,2,0,4,4],[5.85,"+"],83.18],["GRC","Greece",80.09,[20211206,2,2,2,4,2,2,2,3,2],[50.65,"-"],65.16],["DEU","Germany",84.26,[20211205,2,3,2,4,2,1,2,3,2],[59.83,"-"],68.91],["FJI","Fiji",90.74,[20211108,3,3,2,4,2,2,2,2,2],[0.54,"="],65.28]];