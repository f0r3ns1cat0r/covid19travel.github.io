const dataUpdate="2022.09.07";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.02,"+"]],["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["GEO","Georgia",0.0,[20220905,0,0,0,0,0,0,0,0,-1],[0.0,"="],33.96],["VIR","United States Virgin Islands",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["HUN","Hungary",0.0,[20220812,0,0,0,0,0,0,0,0,2],[17.98,"="],63.88],["ZMB","Zambia",2.78,[20220829,0,0,0,0,0,0,0,1,3],[0.23,"+"],29.32],["BWA","Botswana",2.78,[20220815,0,0,0,0,0,0,0,1,2],[0.29,"+"],58.44],["KAZ","Kazakhstan",5.56,[20220815,0,0,0,0,0,0,0,0,1],[1.55,"-"],55.08],["DOM","Dominican Republic",5.56,[20220815,0,0,0,0,0,0,0,0,0],[2.06,"="],54.29],["CHE","Switzerland",5.56,[20220831,0,0,0,0,0,0,0,0,0],[23.97,"-"],69.12],["YEM","Yemen",5.56,[20220801,0,0,1,0,0,0,0,0,0],[0.0,"="],1.43],["AND","Andorra",5.56,[20220823,0,0,0,0,0,0,0,0,2],[0.0,"="],67.66],["MUS","Mauritius",5.56,[20220905,0,0,0,0,0,0,0,0,2],[20.77,"-"],75.27],["BLR","Belarus",5.56,[20220901,0,0,0,0,0,0,0,0,0],[0.0,"="],67.93],["UZB","Uzbekistan",5.56,[20220903,0,0,0,0,0,0,0,0,1],[0.04,"-"],48.13],["SDN","Sudan",8.33,[20220905,0,0,0,0,0,0,0,1,0],[0.01,"-"],9.94],["TZA","Tanzania",8.33,[20220822,0,0,0,0,0,0,0,1,0],[0.06,"="],27.28],["TJK","Tajikistan",8.33,[20220815,0,0,0,0,0,0,0,1,0],[0.0,"="],52.52],["NAM","Namibia",8.33,[20220822,0,0,0,0,0,0,0,1,0],[0.0,"="],19.79],["BFA","Burkina Faso",8.33,[20220822,0,0,0,0,0,0,0,1,3],[0.0,"="],10.98],["BEN","Benin",8.33,[20220812,0,0,0,0,0,0,0,1,2],[0.0,"="],20.66],["LSO","Lesotho",8.33,[20220902,0,0,0,0,0,0,0,1,1],[0.54,"="],38.25],["NER","Niger",10.79,[20220808,0,0,0,0,0,0,0,1,2],[0.36,"="],11.8],["LIE","Liechtenstein",11.11,[20220820,0,0,0,0,0,0,0,0,1],[42.34,"-"],67.74],["EST","Estonia",11.11,[20220817,0,0,0,0,0,0,0,0,1],[8.59,"-"],63.64],["MNG","Mongolia",11.11,[20220812,0,0,0,0,0,0,0,0,2],[6.46,"-"],64.99],["SWE","Sweden",11.11,[20220808,0,0,0,0,0,0,0,0,0],[6.69,"="],73.21],["SVN","Slovenia",11.11,[20220904,0,0,0,0,0,0,0,0,1],[63.56,"+"],57.67],["FRA","France",11.11,[20220822,0,0,0,0,0,0,0,0,1],[24.85,"-"],78.67],["FRO","Faeroe Islands",11.11,[20220802,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["GBR","United Kingdom",11.11,[20220817,0,0,0,0,0,0,0,0,1],[6.14,"-"],75.34],["NOR","Norway",11.11,[20220822,0,0,0,0,0,0,0,0,1],[1.71,"-"],74.99],["SVK","Slovak Republic",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.0,"="],50.73],["GRL","Greenland",11.11,[20220902,0,0,0,0,0,0,0,0,1],[0.0,"="],68.46],["MLT","Malta",11.11,[20220905,0,0,0,0,0,0,0,0,2],[4.72,"-"],89.35],["KWT","Kuwait",11.11,[20220905,0,0,0,0,0,0,0,0,1],[1.17,"+"],78.45],["HRV","Croatia",11.11,[20220905,0,0,0,0,0,0,0,0,2],[15.27,"-"],55.36],["MDG","Madagascar",11.11,[20220819,0,0,0,0,0,0,0,0,1],[0.01,"="],4.95],["MDA","Moldova",11.11,[20220818,0,0,0,0,0,0,0,0,1],[21.12,"="],34.74],["LVA","Latvia",11.11,[20220819,0,0,0,0,0,0,0,0,2],[37.36,"+"],69.69],["LTU","Lithuania",11.11,[20220904,0,0,0,0,0,0,0,0,1],[27.09,"-"],67.4],["SAU","Saudi Arabia",11.11,[20220905,0,0,0,0,0,0,0,0,2],[0.25,"+"],70.2],["IRL","Ireland",11.11,[20220829,0,0,0,0,0,0,0,0,1],[4.68,"="],81.22],["ROU","Romania",11.11,[20220824,0,0,0,0,0,0,0,0,1],[11.13,"-"],41.98],["JAM","Jamaica",11.11,[20220818,0,0,0,0,0,0,0,0,1],[2.87,"+"],25.72],["KIR","Kiribati",11.11,[20220822,0,0,0,0,0,0,0,0,4],[0.0,"="],48.09],["SRB","Serbia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[34.67,"-"],47.71],["ISL","Iceland",11.11,[20220816,0,0,0,0,0,0,0,0,0],[12.22,"-"],78.36],["GAB","Gabon",11.11,[20220821,0,0,0,0,0,0,0,0,2],[0.04,"-"],10.98],["BHR","Bahrain",11.11,[20220829,0,0,0,0,0,0,0,0,2],[11.54,"-"],83.75],["TTO","Trinidad and Tobago",11.11,[20220905,0,0,0,0,0,0,0,0,1],[13.74,"+"],46.97],["ZAF","South Africa",11.11,[20220815,0,0,0,0,0,0,0,0,0],[0.3,"-"],32.56],["ALB","Albania",11.11,[20220823,0,0,0,0,0,0,0,0,2],[6.28,"-"],44.1],["BGR","Bulgaria",11.11,[20220808,0,0,0,0,0,0,0,0,2],[7.78,"-"],30.06],["CUB","Cuba",11.11,[20220817,0,0,0,0,0,0,0,0,2],[0.33,"-"],88.73],["AUS","Australia",11.11,[20220905,0,0,0,0,0,0,0,0,2],[36.09,"-"],83.98],["CRI","Costa Rica",11.11,[20220901,0,0,0,0,0,0,0,0,2],[25.0,"+"],81.33],["DNK","Denmark",11.11,[20220819,0,0,0,0,0,0,0,0,0],[12.38,"+"],81.7],["AFG","Afghanistan",11.11,[20220821,0,2,1,0,1,0,0,0,3],[0.59,"+"],24.79],["OMN","Oman",12.32,[20220726,0,0,0,0,0,0,0,0,0],[0.41,"+"],67.35],["KEN","Kenya",13.89,[20220825,0,0,0,0,0,0,0,1,2],[0.02,"="],17.65],["URY","Uruguay",13.89,[20220807,0,0,0,0,0,0,0,1,1],[8.33,"="],84.42],["PRT","Portugal",13.89,[20220905,0,0,0,0,0,0,0,1,2],[22.38,"-"],86.58],["VEN","Venezuela",13.89,[20220905,0,0,0,0,0,0,0,1,3],[0.42,"+"],50.66],["ECU","Ecuador",13.89,[20220905,0,0,0,0,0,0,0,1,2],[2.14,"+"],79.16],["CAF","Central African Republic",13.89,[20220828,0,0,0,0,0,0,0,1,3],[0.06,"+"],23.61],["PRY","Paraguay",13.89,[20220905,0,0,0,0,0,0,0,1,1],[0.82,"="],52.26],["UGA","Uganda",13.89,[20220831,0,0,0,0,0,0,0,1,3],[0.0,"="],27.32],["BMU","Bermuda",13.89,[20220905,0,0,0,0,0,0,0,1,2],[29.36,"="],74.25],["BDI","Burundi",13.89,[20220812,0,0,0,0,0,0,0,1,0],[0.13,"-"],0.14],["KOR","South Korea",13.89,[20220905,0,0,0,0,0,0,0,1,3],[152.02,"-"],86.18],["GMB","Gambia",13.89,[20220810,0,0,0,0,0,0,0,1,3],[0.0,"="],13.54],["CMR","Cameroon",13.89,[20220905,0,0,0,0,0,0,0,1,2],[0.0,"="],4.51],["TUR","Turkey",13.89,[20220829,0,0,0,0,0,0,0,1,2],[21.33,"="],62.7],["TCD","Chad",13.89,[20220829,0,0,0,0,0,0,0,1,3],[0.01,"="],21.02],["NIC","Nicaragua",13.89,[20220905,0,0,0,0,0,0,0,1,0],[0.0,"="],83.09],["VUT","Vanuatu",13.89,[20220822,0,0,0,0,0,0,0,1,2],[4.6,"+"],40.93],["SMR","San Marino",13.89,[20220821,0,0,0,0,0,0,0,1,1],[30.73,"+"],70.03],["BRN","Brunei",13.9,[20220905,0,0,0,0,0,0,0,1,2],[91.89,"+"],99.71],["CZE","Czech Republic",14.81,[20220802,0,1,0,0,0,0,0,0,1],[14.94,"+"],65.53],["CYP","Cyprus",14.81,[20220829,0,1,0,0,0,0,0,0,3],[20.73,"="],72.05],["JOR","Jordan",14.81,[20220822,0,1,0,0,0,0,0,0,2],[4.72,"="],40.89],["DEU","Germany",14.81,[20220808,0,-1,0,0,0,1,0,0,2],[42.32,"+"],76.06],["ISR","Israel",14.81,[20220905,1,0,0,0,0,0,0,0,2],[10.43,"+"],66.22],["POL","Poland",14.81,[20220817,1,0,0,0,0,0,0,0,2],[7.82,"+"],58.86],["GRC","Greece",14.81,[20220905,1,0,0,0,0,0,0,0,2],[57.78,"-"],73.11],["BEL","Belgium",14.81,[20220819,0,1,0,0,0,0,0,0,2],[12.89,"="],78.87],["NZL","New Zealand",14.97,[20220903,0,0,0,0,0,0,0,1,2],[36.9,"-"],80.53],["TLS","Timor-Leste",15.13,[20220807,0,0,0,0,0,0,0,1,3],[0.35,"+"],55.85],["LUX","Luxembourg",15.42,[20220905,0,0,0,0,0,0,0,1,0],[45.6,"-"],72.41],["ITA","Italy",15.52,[20220905,0,1,0,0,0,0,0,0,2],[29.25,"-"],80.96],["NLD","Netherlands",15.65,[20220822,0,0,0,0,0,0,0,1,0],[6.61,"+"],68.36],["CIV","Cote d'Ivoire",15.74,[20220829,0,1,0,0,0,0,0,1,3],[0.08,"-"],31.55],["ARG","Argentina",16.21,[20220815,0,0,0,0,0,0,0,1,1],[3.68,"="],83.39],["SSD","South Sudan",16.25,[20220829,0,0,0,0,0,0,0,1,1],[0.0,"="],15.28],["CAN","Canada",16.61,[20220905,0,0,0,0,0,0,0,1,2],[7.4,"-"],82.7],["BTN","Bhutan",16.67,[20220822,0,0,0,0,0,0,0,2,4],[2.91,"="],86.7],["PAN","Panama",17.59,[20220829,1,0,0,0,0,0,0,1,2],[12.05,"="],72.17],["SGP","Singapore",17.59,[20220905,1,0,0,0,0,0,0,1,2],[31.56,"-"],91.75],["KHM","Cambodia",17.59,[20220829,1,0,0,0,0,0,0,1,2],[0.07,"="],87.41],["MCO","Monaco",17.59,[20220815,0,1,0,0,0,0,0,1,2],[13.47,"-"],69.96],["RWA","Rwanda",18.47,[20220822,0,0,0,0,0,0,0,0,1],[0.03,"-"],77.91],["COL","Colombia",19.44,[20220905,1,1,0,0,0,0,0,1,3],[0.9,"="],70.81],["CPV","Cape Verde",19.44,[20220814,0,0,0,0,0,0,1,1,2],[0.51,"+"],52.42],["QAT","Qatar",20.54,[20220904,1,1,0,0,0,0,0,1,3],[20.11,"="],103.03],["SUR","Suriname",21.3,[20220814,1,1,0,0,0,0,0,1,2],[0.0,"-"],38.81],["SYC","Seychelles",22.22,[20220829,0,0,0,3,0,0,0,1,2],[13.65,"-"],76.27],["PSE","Palestine",22.22,[20220810,0,0,0,0,0,0,0,4,4],[],34.56],["BOL","Bolivia",22.22,[20220905,1,1,1,0,0,0,0,1,2],[3.39,"-"],50.64],["ESP","Spain",23.61,[20220822,0,0,1,3,0,0,0,1,2],[4.84,"-"],85.57],["GUY","Guyana",23.67,[20220905,1,1,0,0,0,0,0,1,1],[1.98,"-"],57.37],["NPL","Nepal",23.73,[20220905,0,0,0,1,0,0,0,1,4],[0.51,"+"],69.51],["BRA","Brazil",23.89,[20220828,0,0,0,0,0,0,2,1,2],[4.27,"-"],80.16],["MEX","Mexico",24.07,[20220829,0,1,1,0,0,0,1,1,3],[3.51,"+"],63.1],["BRB","Barbados",24.07,[20220905,1,1,0,2,0,0,0,0,2],[32.36,"-"],54.92],["FIN","Finland",24.07,[20220819,1,1,0,0,1,0,0,0,-1],[20.93,"="],78.41],["RKS","Kosovo",25.04,[20220829,2,2,2,0,0,0,0,0,1],[3.73,"-"],46.27],["VNM","Vietnam",25.93,[20220815,0,1,1,2,0,0,0,0,3],[2.32,"+"],85.15],["ABW","Aruba",25.93,[20220904,0,1,1,2,0,0,0,0,2],[16.32,"="],78.37],["BIH","Bosnia and Herzegovina",25.93,[20220905,1,0,1,2,0,0,0,0,2],[3.89,"-"],25.87],["TWN","Taiwan",26.85,[20220902,1,1,0,0,0,0,0,3,2],[138.12,"+"],84.46],["MRT","Mauritania",26.85,[20220828,1,1,1,0,0,0,0,1,2],[0.03,"="],30.85],["SYR","Syria",26.85,[20220822,1,1,1,0,0,0,0,1,2],[0.07,"="],9.49],["MAR","Morocco",27.1,[20220830,0,1,0,0,0,0,0,1,3],[0.07,"-"],63.34],["COD","Democratic Republic of Congo",27.78,[20220905,0,0,1,1,0,0,1,1,3],[0.01,"="],2.96],["AGO","Angola",28.17,[20220903,0,2,1,0,0,0,0,1,3],[0.0,"="],22.59],["PNG","Papua New Guinea",28.54,[20220829,0,1,1,2,0,0,0,1,2],[0.03,"="],2.86],["MOZ","Mozambique",28.7,[20220828,0,1,1,2,0,0,0,1,2],[0.03,"="],40.02],["CHL","Chile",28.79,[20220822,1,1,0,2,0,0,0,1,2],[27.04,"-"],90.6],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[14.47,"+"],31.13],["THA","Thailand",29.63,[20220821,1,1,1,1,0,0,0,1,1],[2.38,"-"],74.58],["IDN","Indonesia",29.81,[20220903,0,1,0,0,0,0,0,1,2],[1.27,"-"],62.3],["BLZ","Belize",30.2,[20220830,1,1,1,0,0,0,1,0,2],[7.69,"+"],54.87],["HND","Honduras",30.27,[20220822,0,2,1,0,0,0,0,1,3],[1.93,"="],54.2],["PHL","Philippines",30.31,[20220905,1,1,1,0,1,0,0,1,4],[2.1,"-"],63.59],["SLB","Solomon Islands",30.85,[20220905,1,1,1,0,0,0,1,1,3],[0.0,"="],28.14],["SOM","Somalia",32.41,[20220826,0,0,2,0,0,2,0,1,3],[0.0,"="],14.27],["DMA","Dominica",32.41,[20220829,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["SEN","Senegal",32.41,[20220905,1,1,1,0,1,0,0,1,3],[0.04,"-"],6.45],["USA","United States",32.62,[20220802,1,1,0,0,2,1,0,1,2],[22.37,"+"],67.5],["SWZ","Eswatini",32.66,[20220801,0,1,1,4,0,0,0,1,1],[0.09,"="],28.69],["LBY","Libya",32.74,[20220905,1,2,2,0,0,0,0,1,3],[0.19,"="],18.18],["KGZ","Kyrgyz Republic",33.33,[20220905,0,0,2,4,0,0,0,0,2],[0.26,"-"],20.4],["TGO","Togo",33.33,[20220901,0,0,1,3,0,2,0,1,3],[0.17,"+"],16.55],["BGD","Bangladesh",34.26,[20220813,2,1,1,0,0,1,0,1,4],[0.15,"+"],71.62],["LBR","Liberia",34.9,[20220904,0,3,2,0,0,0,0,1,4],[0.18,"="],44.83],["ARE","United Arab Emirates",34.94,[20220828,1,1,1,0,1,0,0,2,3],[4.41,"-"],104.56],["AUT","Austria",35.19,[20220905,2,2,1,2,0,0,0,0,2],[45.95,"-"],76.44],["COG","Congo",35.26,[20220905,0,2,2,2,0,0,0,1,3],[0.0,"="],11.21],["FJI","Fiji",35.5,[20220829,0,1,0,0,1,0,0,1,2],[0.67,"+"],68.99],["MYS","Malaysia",35.69,[20220904,1,1,1,0,1,0,1,0,2],[6.5,"-"],81.9],["NGA","Nigeria",35.73,[20220905,0,0,1,3,0,0,1,1,3],[0.03,"="],13.58],["LKA","Sri Lanka",36.11,[20220829,0,1,1,1,1,1,0,1,3],[0.24,"-"],66.88],["GHA","Ghana",36.8,[20220904,0,2,2,3,0,0,0,1,1],[0.0,"="],25.05],["SLV","El Salvador",36.93,[20220829,1,1,1,2,1,0,0,0,0],[0.0,"-"],68.59],["IND","India",37.04,[20220905,0,1,1,0,0,2,2,1,3],[0.56,"+"],67.05],["JPN","Japan",37.53,[20220905,1,1,1,1,0,1,1,1,1],[97.18,"-"],82.46],["MAC","Macao",37.96,[20220902,1,1,1,2,0,0,0,3,3],[],87.09],["EGY","Egypt",37.96,[20220829,1,1,2,3,0,0,0,0,3],[0.0,"="],35.93],["RUS","Russia",38.43,[20220904,0,2,1,1,1,1,0,3,2],[31.55,"+"],52.68],["HTI","Haiti",39.81,[20220828,0,1,2,4,0,0,0,1,2],[0.21,"="],1.46],["PAK","Pakistan",40.04,[20220823,0,0,0,0,0,0,0,1,4],[0.08,"-"],56.71],["PER","Peru",40.11,[20220905,1,1,1,0,1,0,1,1,3],[5.74,"-"],83.45],["ETH","Ethiopia",40.74,[20220822,1,1,1,3,1,0,0,1,3],[0.01,"="],30.52],["MLI","Mali",40.74,[20220808,0,2,2,3,0,0,0,1,3],[0.29,"+"],7.39],["BHS","Bahamas",40.74,[20220829,1,1,1,3,1,0,0,1,4],[1.53,"="],40.09],["MWI","Malawi",40.74,[20220731,1,1,1,3,1,0,0,1,3],[0.04,"-"],10.29],["GTM","Guatemala",41.2,[20220903,2,1,1,3,1,1,0,0,4],[4.56,"-"],38.78],["IRQ","Iraq",41.37,[20220830,0,2,2,1,0,0,0,1,2],[0.23,"-"],17.93],["LBN","Lebanon",41.55,[20220822,1,2,1,1,1,2,0,1,1],[5.43,"+"],42.81],["TUN","Tunisia",41.59,[20220904,0,1,2,4,0,0,0,1,3],[1.25,"+"],52.04],["SLE","Sierra Leone",42.61,[20220905,2,2,2,0,1,0,0,1,3],[0.0,"="],26.0],["AZE","Azerbaijan",44.69,[20220826,0,3,2,0,2,0,2,1,0],[4.61,"="],47.15],["DZA","Algeria",45.21,[20220808,1,2,1,4,1,0,0,1,3],[0.07,"="],15.51],["GIN","Guinea",46.3,[20220725,1,1,1,3,0,0,2,1,2],[0.0,"="],19.3],["HKG","Hong Kong",47.07,[20220905,1,1,2,4,0,0,0,2,2],[134.31,"+"],88.14],["TON","Tonga",48.61,[20220904,1,2,1,0,0,2,2,1,4],[128.0,"="],72.26],["DJI","Djibouti",51.33,[20220829,1,1,2,4,1,0,0,1,3],[0.0,"="],18.59],["ZWE","Zimbabwe",52.61,[20220821,1,1,1,3,1,2,1,1,3],[0.07,"+"],29.54],["LAO","Laos",53.01,[20220904,2,1,1,4,1,2,0,1,3],[1.25,"+"],70.34],["IRN","Iran",53.9,[20220829,1,2,2,4,0,0,2,1,3],[1.32,"-"],66.32],["MMR","Myanmar",54.63,[20220904,1,1,1,2,1,2,2,1,4],[0.18,"+"],51.2],["TKM","Turkmenistan",62.04,[20210426,1,3,2,1,0,0,2,4,3],[],46.04],["UKR","Ukraine",65.33,[20220819,3,1,2,3,2,1,2,3,3],[10.53,"+"],34.81],["CHN","China",73.61,[20220822,3,3,2,4,2,3,1,2,4],[0.12,"-"],88.95],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[29.52,"-"],45.37]];