const dataUpdate="2022.08.30";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["HUN","Hungary",0.0,[20220812,0,0,0,0,0,0,0,0,2],[21.8,"="],63.87],["BWA","Botswana",2.78,[20220815,0,0,0,0,0,0,0,1,2],[0.09,"="],58.44],["ZMB","Zambia",2.78,[20220828,0,0,0,0,0,0,0,1,3],[0.23,"-"],29.32],["MUS","Mauritius",5.56,[20220815,0,0,0,0,0,0,0,0,2],[0.0,"="],75.27],["DOM","Dominican Republic",5.56,[20220815,0,0,0,0,0,0,0,0,0],[2.74,"+"],54.25],["AND","Andorra",5.56,[20220823,0,0,0,0,0,0,0,0,2],[9.61,"="],67.66],["YEM","Yemen",5.56,[20220801,0,0,1,0,0,0,0,0,0],[0.0,"="],1.37],["KAZ","Kazakhstan",5.56,[20220815,0,0,0,0,0,0,0,0,1],[2.5,"-"],55.04],["TJK","Tajikistan",8.33,[20220815,0,0,0,0,0,0,0,1,0],[0.0,"="],52.52],["BFA","Burkina Faso",8.33,[20220822,0,0,0,0,0,0,0,1,3],[0.0,"="],7.64],["TZA","Tanzania",8.33,[20220822,0,0,0,0,0,0,0,1,0],[0.06,"="],25.89],["BEN","Benin",8.33,[20220812,0,0,0,0,0,0,0,1,2],[0.21,"+"],20.66],["NAM","Namibia",8.33,[20220822,0,0,0,0,0,0,0,1,0],[0.0,"="],19.79],["SDN","Sudan",8.33,[20220811,0,0,0,0,0,0,0,1,0],[0.0,"-"],9.94],["NER","Niger",10.78,[20220808,0,0,0,0,0,0,0,1,2],[0.07,"+"],11.83],["MLT","Malta",11.11,[20220816,0,0,0,0,0,0,0,0,2],[5.4,"-"],89.33],["SVN","Slovenia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[68.8,"-"],57.67],["FRO","Faeroe Islands",11.11,[20220802,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["EST","Estonia",11.11,[20220817,0,0,0,0,0,0,0,0,1],[14.47,"="],63.59],["GAB","Gabon",11.11,[20220821,0,0,0,0,0,0,0,0,2],[0.0,"="],10.98],["GBR","United Kingdom",11.11,[20220817,0,0,0,0,0,0,0,0,1],[6.9,"-"],75.28],["GEO","Georgia",11.11,[20220803,0,0,0,0,0,0,0,0,2],[45.1,"="],33.96],["SRB","Serbia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[44.78,"-"],47.71],["GRL","Greenland",11.11,[20220825,0,0,0,0,0,0,0,0,1],[0.0,"="],68.46],["SWE","Sweden",11.11,[20220808,0,0,0,0,0,0,0,0,0],[7.75,"="],73.2],["FRA","France",11.11,[20220822,0,0,0,0,0,0,0,0,1],[27.27,"-"],78.66],["SVK","Slovak Republic",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.0,"="],50.73],["HRV","Croatia",11.11,[20220822,0,0,0,0,0,0,0,0,2],[18.6,"+"],55.35],["ROU","Romania",11.11,[20220824,0,0,0,0,0,0,0,0,1],[16.8,"-"],41.98],["DNK","Denmark",11.11,[20220819,0,0,0,0,0,0,0,0,0],[15.92,"-"],81.73],["ISL","Iceland",11.11,[20220816,0,0,0,0,0,0,0,0,0],[8.83,"="],78.36],["JAM","Jamaica",11.11,[20220818,0,0,0,0,0,0,0,0,1],[3.68,"-"],25.66],["KIR","Kiribati",11.11,[20220822,0,0,0,0,0,0,0,0,4],[0.0,"="],48.09],["KWT","Kuwait",11.11,[20220809,0,0,0,0,0,0,0,0,1],[1.18,"+"],78.41],["LIE","Liechtenstein",11.11,[20220820,0,0,0,0,0,0,0,0,1],[39.72,"+"],67.72],["NOR","Norway",11.11,[20220822,0,0,0,0,0,0,0,0,1],[1.95,"+"],74.98],["LTU","Lithuania",11.11,[20220813,0,0,0,0,0,0,0,0,1],[35.41,"+"],67.39],["LVA","Latvia",11.11,[20220819,0,0,0,0,0,0,0,0,2],[41.29,"-"],69.69],["MDA","Moldova",11.11,[20220818,0,0,0,0,0,0,0,0,1],[27.95,"="],34.74],["MDG","Madagascar",11.11,[20220819,0,0,0,0,0,0,0,0,1],[0.01,"="],4.84],["SAU","Saudi Arabia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.22,"-"],70.2],["IRL","Ireland",11.11,[20220828,0,0,0,0,0,0,0,0,1],[5.1,"="],81.21],["MNG","Mongolia",11.11,[20220812,0,0,0,0,0,0,0,0,2],[10.97,"-"],64.99],["AFG","Afghanistan",11.11,[20220821,0,2,1,0,1,0,0,0,3],[0.68,"+"],24.37],["ZAF","South Africa",11.11,[20220815,0,0,0,0,0,0,0,0,0],[0.34,"-"],32.52],["CUB","Cuba",11.11,[20220817,0,0,0,0,0,0,0,0,2],[0.52,"="],88.72],["CRI","Costa Rica",11.11,[20220731,0,0,0,0,0,0,0,0,1],[29.9,"="],81.33],["ALB","Albania",11.11,[20220823,0,0,0,0,0,0,0,0,2],[11.86,"-"],44.1],["AUS","Australia",11.11,[20220824,0,0,0,0,0,0,0,0,2],[47.14,"+"],83.95],["CHE","Switzerland",11.11,[20220815,0,0,0,0,0,0,0,0,0],[28.14,"="],69.13],["BGR","Bulgaria",11.11,[20220808,0,0,0,0,0,0,0,0,2],[11.85,"-"],30.05],["BHR","Bahrain",11.11,[20220805,0,0,0,0,0,0,0,0,2],[11.04,"-"],83.74],["UZB","Uzbekistan",11.11,[20220726,0,0,0,0,0,0,0,0,1],[0.03,"="],48.13],["TTO","Trinidad and Tobago",11.11,[20220828,0,0,0,0,0,0,0,0,1],[17.64,"+"],46.95],["OMN","Oman",12.32,[20220726,0,0,0,0,0,0,0,0,0],[0.76,"="],67.35],["UGA","Uganda",13.89,[20220821,0,0,0,0,0,0,0,1,3],[0.0,"="],27.32],["PRY","Paraguay",13.89,[20220823,0,0,0,0,0,0,0,1,1],[1.65,"="],52.29],["URY","Uruguay",13.89,[20220807,0,0,0,0,0,0,0,1,1],[7.63,"-"],84.4],["PRT","Portugal",13.89,[20220828,0,0,0,0,0,0,0,1,2],[30.02,"+"],86.58],["VEN","Venezuela",13.89,[20220822,0,0,0,0,0,0,0,1,3],[0.34,"-"],50.66],["SMR","San Marino",13.89,[20220821,0,0,0,0,0,0,0,1,1],[41.68,"="],70.03],["BDI","Burundi",13.89,[20220812,0,0,0,0,0,0,0,1,0],[0.28,"-"],0.14],["VUT","Vanuatu",13.89,[20220822,0,0,0,0,0,0,0,1,2],[1.07,"+"],40.93],["NIC","Nicaragua",13.89,[20220815,0,0,0,0,0,0,0,1,0],[0.07,"="],82.8],["KEN","Kenya",13.89,[20220825,0,0,0,0,0,0,0,1,2],[0.03,"="],17.65],["CAF","Central African Republic",13.89,[20220828,0,0,0,0,0,0,0,1,3],[0.17,"="],22.84],["KOR","South Korea",13.89,[20220824,0,0,0,0,0,0,0,1,3],[193.1,"-"],86.18],["TCD","Chad",13.89,[20220828,0,0,0,0,0,0,0,1,3],[0.04,"+"],21.01],["ECU","Ecuador",13.89,[20220828,0,0,0,0,0,0,0,1,2],[3.84,"-"],79.16],["CMR","Cameroon",13.89,[20220815,0,0,0,0,0,0,0,1,2],[0.37,"="],4.51],["TUR","Turkey",13.89,[20220828,0,0,0,0,0,0,0,1,2],[0.0,"="],62.69],["GMB","Gambia",13.89,[20220810,0,0,0,0,0,0,0,1,3],[0.0,"-"],13.54],["BRN","Brunei",13.9,[20220828,0,0,0,0,0,0,0,1,2],[162.03,"="],99.65],["GRC","Greece",14.81,[20220815,1,0,0,0,0,0,0,0,2],[78.52,"="],73.1],["CYP","Cyprus",14.81,[20220828,0,1,0,0,0,0,0,0,3],[25.49,"="],72.05],["POL","Poland",14.81,[20220817,1,0,0,0,0,0,0,0,2],[8.82,"-"],58.85],["JOR","Jordan",14.81,[20220822,0,1,0,0,0,0,0,0,2],[5.52,"="],40.89],["ISR","Israel",14.81,[20220828,1,0,0,0,0,0,0,0,2],[11.17,"-"],66.21],["DEU","Germany",14.81,[20220808,0,-1,0,0,0,1,0,0,2],[38.74,"-"],76.05],["CZE","Czech Republic",14.81,[20220802,0,1,0,0,0,0,0,0,1],[14.54,"+"],65.52],["BLR","Belarus",14.82,[20220801,0,0,0,0,0,0,0,1,0],[0.0,"="],67.93],["NZL","New Zealand",14.97,[20220820,0,0,0,0,0,0,0,1,2],[49.34,"-"],80.52],["TLS","Timor-Leste",15.13,[20220807,0,0,0,0,0,0,0,1,3],[0.44,"-"],55.85],["LUX","Luxembourg",15.42,[20220828,0,0,0,0,0,0,0,1,0],[13.69,"-"],72.41],["ITA","Italy",15.52,[20220828,0,1,0,0,0,0,0,0,2],[36.38,"-"],80.96],["NLD","Netherlands",15.65,[20220822,0,0,0,0,0,0,0,1,0],[6.62,"-"],68.36],["CIV","Cote d'Ivoire",15.74,[20220828,0,1,0,0,0,0,0,1,3],[0.11,"="],31.55],["BMU","Bermuda",16.03,[20220810,0,0,0,0,0,0,0,1,2],[25.46,"="],74.25],["ARG","Argentina",16.21,[20220815,0,0,0,0,0,0,0,1,1],[6.27,"="],83.35],["SSD","South Sudan",16.27,[20220828,0,0,0,0,0,0,0,1,1],[0.0,"="],14.55],["BTN","Bhutan",16.67,[20220822,0,0,0,0,0,0,0,2,4],[3.3,"+"],86.7],["MCO","Monaco",17.59,[20220815,0,1,0,0,0,0,0,1,2],[14.56,"-"],69.96],["KHM","Cambodia",17.59,[20220828,1,0,0,0,0,0,0,1,2],[0.11,"="],87.33],["HTI","Haiti",17.59,[20220828,0,1,0,0,0,0,0,1,2],[0.67,"-"],1.46],["PAN","Panama",17.59,[20220828,1,0,0,0,0,0,0,1,2],[17.82,"-"],72.11],["RWA","Rwanda",18.47,[20220822,0,0,0,0,0,0,0,0,1],[0.03,"="],77.91],["CAN","Canada",19.4,[20220828,0,0,0,0,1,0,0,1,2],[7.77,"-"],82.67],["COL","Colombia",19.44,[20220828,1,1,0,0,0,0,0,1,3],[1.82,"="],70.81],["CPV","Cape Verde",19.44,[20220814,0,0,0,0,0,0,1,1,2],[0.54,"-"],52.4],["BEL","Belgium",20.96,[20220819,0,1,0,0,0,0,0,2,2],[13.18,"-"],78.87],["SUR","Suriname",21.3,[20220814,1,1,0,0,0,0,0,1,2],[0.37,"="],38.81],["PSE","Palestine",22.22,[20220810,0,0,0,0,0,0,0,4,4],[],34.56],["SYC","Seychelles",22.22,[20220828,0,0,0,3,0,0,0,1,2],[0.0,"="],76.2],["COG","Congo",22.73,[20220828,0,1,0,0,0,0,1,1,2],[0.0,"="],11.21],["ESP","Spain",23.61,[20220822,0,0,1,3,0,0,0,1,2],[5.56,"="],85.56],["NPL","Nepal",23.73,[20220828,0,0,0,1,0,0,0,1,4],[0.65,"-"],69.51],["BRA","Brazil",23.89,[20220828,0,0,0,0,0,0,2,1,2],[7.55,"+"],80.07],["BOL","Bolivia",24.07,[20220815,2,1,1,0,0,0,0,1,3],[7.13,"-"],50.64],["FIN","Finland",24.07,[20220819,1,1,0,0,1,0,0,0,-1],[21.25,"="],78.4],["GUY","Guyana",24.85,[20220821,1,1,0,0,0,0,0,1,1],[3.03,"+"],57.37],["VNM","Vietnam",25.93,[20220815,0,1,1,2,0,0,0,0,3],[2.89,"+"],85.15],["ABW","Aruba",25.93,[20220808,0,1,1,2,0,0,0,0,2],[12.85,"-"],78.31],["BIH","Bosnia and Herzegovina",25.93,[20220828,1,0,1,2,0,0,0,0,2],[7.08,"-"],25.87],["AGO","Angola",26.03,[20220808,0,2,1,0,0,0,0,1,2],[0.0,"="],23.53],["SYR","Syria",26.85,[20220822,1,1,1,0,0,0,0,1,2],[0.11,"+"],9.44],["MRT","Mauritania",26.85,[20220828,1,1,1,0,0,0,0,1,2],[0.06,"-"],30.85],["TWN","Taiwan",26.85,[20220826,1,1,0,0,0,0,0,3,2],[109.07,"+"],84.23],["BRB","Barbados",26.85,[20220823,1,1,0,2,0,0,0,1,2],[56.42,"-"],54.9],["MAR","Morocco",27.1,[20220828,0,1,0,0,0,0,0,1,3],[0.13,"="],63.32],["MEX","Mexico",27.78,[20220828,1,1,1,0,0,0,1,1,3],[7.19,"="],63.1],["SGP","Singapore",28.08,[20220823,1,1,1,0,0,0,0,1,2],[38.17,"-"],91.72],["PNG","Papua New Guinea",28.54,[20220828,0,1,1,2,0,0,0,1,2],[0.04,"-"],2.86],["MOZ","Mozambique",28.7,[20220828,0,1,1,2,0,0,0,1,2],[0.03,"="],39.98],["CHL","Chile",28.79,[20220822,1,1,0,2,0,0,0,1,2],[37.52,"-"],90.57],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[16.25,"="],31.11],["RKS","Kosovo",29.63,[20220828,2,2,1,0,0,0,0,0,1],[10.47,"-"],46.26],["THA","Thailand",29.63,[20220821,1,1,1,1,0,0,0,1,1],[2.15,"-"],74.53],["IDN","Indonesia",29.81,[20220828,0,1,0,0,0,0,0,1,2],[1.58,"-"],62.3],["HND","Honduras",30.27,[20220822,0,2,1,0,0,0,0,1,3],[4.4,"+"],54.07],["PHL","Philippines",30.37,[20220730,1,1,1,0,1,0,0,1,4],[2.38,"-"],63.45],["SLB","Solomon Islands",30.87,[20220822,1,1,1,0,0,0,1,1,3],[0.0,"="],28.14],["RUS","Russia",31.02,[20220825,0,1,2,1,0,0,0,3,2],[28.46,"+"],52.14],["LSO","Lesotho",31.65,[20220817,0,2,2,3,0,0,0,1,4],[0.0,"="],38.25],["QAT","Qatar",32.2,[20220818,1,1,1,0,1,0,0,1,3],[18.49,"-"],102.65],["SEN","Senegal",32.41,[20220828,1,1,1,0,1,0,0,1,3],[0.11,"="],6.39],["SOM","Somalia",32.41,[20220826,0,0,2,0,0,2,0,1,3],[0.0,"="],14.15],["DMA","Dominica",32.41,[20220828,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["USA","United States",32.62,[20220802,1,1,0,0,2,1,0,1,2],[26.79,"-"],67.44],["SWZ","Eswatini",32.66,[20220801,0,1,1,4,0,0,0,1,1],[0.21,"+"],28.69],["LBY","Libya",32.74,[20220823,1,2,2,0,0,0,0,1,3],[0.35,"-"],18.17],["KGZ","Kyrgyz Republic",33.33,[20220828,0,0,2,4,0,0,0,0,2],[0.0,"-"],20.37],["COD","Democratic Republic of Congo",34.26,[20220822,0,1,1,0,0,0,2,1,3],[0.01,"="],2.7],["BGD","Bangladesh",34.26,[20220813,2,1,1,0,0,1,0,1,4],[0.12,"="],71.54],["ARE","United Arab Emirates",34.94,[20220828,1,1,1,0,1,0,0,2,3],[5.76,"-"],104.56],["AUT","Austria",35.19,[20220828,2,2,1,2,0,0,0,0,2],[31.03,"-"],76.44],["FJI","Fiji",35.52,[20220828,0,1,0,0,1,0,0,1,2],[1.12,"-"],68.98],["TGO","Togo",35.65,[20220824,0,0,1,3,0,2,0,1,3],[0.14,"+"],16.49],["LKA","Sri Lanka",36.11,[20220828,0,1,1,1,1,1,0,1,3],[0.46,"-"],66.88],["SLV","El Salvador",36.93,[20220828,1,1,1,2,1,0,0,0,0],[0.0,"="],68.59],["IND","India",37.04,[20220816,0,1,1,0,0,2,2,1,3],[0.6,"-"],66.92],["JPN","Japan",37.53,[20220828,1,1,1,1,0,1,1,1,1],[146.68,"-"],82.42],["EGY","Egypt",37.96,[20220828,1,1,2,3,0,0,0,0,3],[0.0,"="],35.81],["BLZ","Belize",38.55,[20220808,1,1,1,0,1,0,1,1,2],[7.4,"-"],54.83],["LBR","Liberia",38.6,[20220820,1,3,2,0,0,0,0,1,4],[0.51,"+"],44.83],["NGA","Nigeria",39.43,[20220821,0,1,1,3,1,0,0,1,3],[0.03,"="],13.58],["PAK","Pakistan",40.04,[20220823,0,0,0,0,0,0,0,1,4],[0.13,"+"],56.63],["PER","Peru",40.15,[20220815,1,1,1,0,1,0,1,1,3],[10.34,"-"],83.33],["GHA","Ghana",40.38,[20220821,0,2,2,3,0,0,0,1,1],[0.06,"+"],24.69],["MWI","Malawi",40.74,[20220731,1,1,1,3,1,0,0,1,3],[0.04,"="],10.29],["ETH","Ethiopia",40.74,[20220822,1,1,1,3,1,0,0,1,3],[0.02,"="],30.52],["BHS","Bahamas",40.74,[20220828,1,1,1,3,1,0,0,1,4],[2.76,"+"],40.01],["MLI","Mali",40.74,[20220808,0,2,2,3,0,0,0,1,3],[0.05,"="],7.2],["IRQ","Iraq",41.37,[20220828,0,2,2,1,0,0,0,1,2],[0.0,"-"],17.89],["LBN","Lebanon",41.55,[20220822,1,2,1,1,1,2,0,1,1],[8.28,"-"],42.78],["TUN","Tunisia",41.59,[20220828,0,1,2,4,0,0,0,1,3],[1.68,"="],52.04],["MYS","Malaysia",41.67,[20220828,1,1,1,1,1,1,1,0,2],[7.92,"-"],81.89],["SLE","Sierra Leone",42.66,[20220828,2,2,2,0,1,0,0,1,3],[0.01,"="],25.77],["AZE","Azerbaijan",43.22,[20220826,0,3,2,0,2,0,2,1,0],[4.98,"-"],47.15],["GTM","Guatemala",43.98,[20220823,2,1,1,3,1,1,0,1,4],[10.26,"+"],38.59],["DZA","Algeria",45.21,[20220808,1,2,1,4,1,0,0,1,3],[0.11,"-"],15.51],["GIN","Guinea",46.3,[20220725,1,1,1,3,0,0,2,1,2],[0.0,"="],19.16],["HKG","Hong Kong",47.09,[20220828,1,1,2,4,0,0,0,2,2],[109.77,"+"],87.76],["TON","Tonga",48.61,[20220823,1,2,1,0,0,2,2,1,4],[148.68,"="],72.26],["DJI","Djibouti",51.34,[20220828,1,1,2,4,1,0,0,1,3],[0.0,"="],18.26],["ZWE","Zimbabwe",52.61,[20220821,1,1,1,3,1,2,1,1,3],[0.07,"="],29.54],["IRN","Iran",53.94,[20220828,1,2,2,4,0,0,2,1,3],[2.54,"-"],66.03],["MMR","Myanmar",54.63,[20220828,1,1,1,2,1,2,2,1,4],[0.12,"+"],51.2],["MAC","Macao",54.63,[20220828,1,3,1,2,0,2,1,3,3],[],86.8],["LAO","Laos",60.82,[20220828,2,1,1,4,1,2,2,1,3],[1.1,"-"],70.34],["UKR","Ukraine",65.33,[20220819,3,1,2,3,2,1,2,3,3],[4.44,"+"],34.81],["CHN","China",73.61,[20220822,3,3,2,4,2,3,1,2,4],[0.11,"-"],88.95],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[43.47,"-"],45.37]];