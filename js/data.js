const dataUpdate="2022.08.18";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4,VACCINATION:5};var data=[["PRI","Puerto Rico",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["HUN","Hungary",0.0,[20220812,0,0,0,0,0,0,0,0,2],[24.03,"-"],63.87],["GUM","Guam",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["ERI","Eritrea",0.0,[20200121,0,0,0,0,0,0,0,0,0],[0.07,"+"]],["VIR","United States Virgin Islands",0.0,[20200121,0,0,0,0,0,0,0,0,0],[]],["ZMB","Zambia",2.78,[20220808,0,0,0,0,0,0,0,1,3],[0.54,"+"],28.59],["BWA","Botswana",2.78,[20220815,0,0,0,0,0,0,0,1,2],[0.61,"="],58.44],["LVA","Latvia",5.56,[20220803,0,0,0,0,0,0,0,0,2],[70.77,"-"],69.69],["DOM","Dominican Republic",5.56,[20220815,0,0,0,0,0,0,0,0,0],[2.33,"-"],54.2],["KAZ","Kazakhstan",5.56,[20220815,0,0,0,0,0,0,0,0,1],[6.76,"-"],54.94],["AND","Andorra",5.56,[20220730,0,0,0,0,0,0,0,0,0],[14.05,"-"],67.64],["YEM","Yemen",5.56,[20220801,0,0,1,0,0,0,0,0,0],[0.0,"="],1.37],["MUS","Mauritius",5.56,[20220815,0,0,0,0,0,0,0,0,2],[33.99,"="],75.27],["NAM","Namibia",8.33,[20220808,0,0,0,0,0,0,0,1,0],[0.0,"="],19.07],["TJK","Tajikistan",8.33,[20220815,0,0,0,0,0,0,0,1,0],[0.0,"="],51.64],["BEN","Benin",8.33,[20220812,0,0,0,0,0,0,0,1,2],[0.0,"="],20.7],["SDN","Sudan",8.33,[20220811,0,0,0,0,0,0,0,1,0],[0.01,"="],9.94],["BFA","Burkina Faso",8.33,[20220731,0,0,0,0,0,0,0,1,3],[0.0,"="],7.42],["TZA","Tanzania",8.33,[20220722,0,0,0,0,0,0,0,1,0],[0.06,"-"],23.24],["NER","Niger",10.78,[20220808,0,0,0,0,0,0,0,1,2],[0.02,"+"],11.83],["ROU","Romania",11.11,[20220731,0,0,0,0,0,0,0,0,1],[24.41,"+"],41.98],["CUB","Cuba",11.11,[20220816,0,0,0,0,0,0,0,0,2],[0.72,"-"],88.68],["CRI","Costa Rica",11.11,[20220731,0,0,0,0,0,0,0,0,1],[32.16,"="],81.23],["IRL","Ireland",11.11,[20220720,0,0,0,0,0,0,0,0,1],[8.06,"-"],81.18],["MLT","Malta",11.11,[20220816,0,0,0,0,0,0,0,0,2],[8.06,"-"],89.31],["DNK","Denmark",11.11,[20220801,0,0,0,0,0,0,0,0,0],[28.72,"-"],81.76],["SVN","Slovenia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[60.96,"+"],57.67],["SVK","Slovak Republic",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.0,"="],50.73],["SAU","Saudi Arabia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[0.32,"-"],69.77],["EST","Estonia",11.11,[20220816,0,0,0,0,0,0,0,0,1],[19.9,"="],63.56],["SRB","Serbia",11.11,[20220808,0,0,0,0,0,0,0,0,2],[65.6,"+"],47.71],["FRA","France",11.11,[20220801,0,0,0,0,0,0,0,0,2],[28.97,"+"],78.64],["FRO","Faeroe Islands",11.11,[20220802,0,0,0,0,0,0,0,0,0],[0.0,"="],77.32],["GAB","Gabon",11.11,[20220801,0,0,0,0,0,0,0,0,2],[0.0,"="],10.97],["SWE","Sweden",11.11,[20220808,0,0,0,0,0,0,0,0,0],[8.95,"="],73.19],["GRL","Greenland",11.11,[20220725,0,0,0,0,0,0,0,0,0],[0.0,"="],68.46],["CHE","Switzerland",11.11,[20220815,0,0,0,0,0,0,0,0,0],[30.06,"="],69.13],["LTU","Lithuania",11.11,[20220813,0,0,0,0,0,0,0,0,1],[41.09,"+"],67.38],["AFG","Afghanistan",11.11,[20220805,0,2,1,0,1,0,0,0,3],[0.55,"="],20.63],["ZAF","South Africa",11.11,[20220815,0,0,0,0,0,0,0,0,0],[0.5,"+"],32.45],["ALB","Albania",11.11,[20220810,0,0,0,0,0,0,0,0,2],[19.05,"-"],43.93],["AUS","Australia",11.11,[20220816,0,0,0,0,0,0,0,0,2],[78.97,"+"],83.9],["MDA","Moldova",11.11,[20220704,0,0,0,0,0,0,0,0,1],[33.06,"-"],34.74],["MNG","Mongolia",11.11,[20220812,0,0,0,0,0,0,0,0,2],[33.96,"-"],64.99],["BGR","Bulgaria",11.11,[20220808,0,0,0,0,0,0,0,0,2],[16.19,"-"],30.02],["BHR","Bahrain",11.11,[20220805,0,0,0,0,0,0,0,0,2],[34.51,"-"],83.71],["ISL","Iceland",11.11,[20220816,0,0,0,0,0,0,0,0,0],[27.3,"="],78.36],["UZB","Uzbekistan",11.11,[20220726,0,0,0,0,0,0,0,0,1],[0.08,"="],46.34],["GEO","Georgia",11.11,[20220803,0,0,0,0,0,0,0,0,2],[45.58,"="],33.89],["NOR","Norway",11.11,[20220717,0,0,0,0,0,0,0,0,1],[2.68,"-"],74.97],["KWT","Kuwait",11.11,[20220809,0,0,0,0,0,0,0,0,1],[1.8,"="],78.36],["KIR","Kiribati",11.11,[20220801,0,0,0,0,0,0,0,0,4],[0.0,"="],48.09],["GBR","United Kingdom",11.11,[20220816,0,0,0,0,0,0,0,0,1],[8.58,"-"],75.21],["TTO","Trinidad and Tobago",11.11,[20220816,0,0,0,0,0,0,0,0,1],[20.55,"+"],46.93],["JAM","Jamaica",11.11,[20220816,0,0,0,0,0,0,0,0,1],[4.72,"+"],25.58],["LIE","Liechtenstein",11.11,[20220706,0,0,0,0,0,0,0,0,1],[33.35,"+"],67.72],["OMN","Oman",12.32,[20220726,0,0,0,0,0,0,0,0,0],[0.96,"+"],67.34],["NIC","Nicaragua",13.89,[20220815,0,0,0,0,0,0,0,1,0],[0.06,"-"],82.35],["GMB","Gambia",13.89,[20220810,0,0,0,0,0,0,0,1,3],[0.0,"-"],13.54],["PRY","Paraguay",13.89,[20220807,0,0,0,0,0,0,0,1,1],[4.04,"="],52.29],["MDG","Madagascar",13.89,[20220805,0,0,0,0,0,0,0,1,3],[0.02,"="],4.64],["PRT","Portugal",13.89,[20220808,0,0,0,0,0,0,0,1,2],[21.16,"+"],86.54],["KOR","South Korea",13.89,[20220816,0,0,0,0,0,0,0,1,3],[244.68,"+"],86.17],["CAF","Central African Republic",13.89,[20220810,0,0,0,0,0,0,0,1,3],[0.07,"="],22.82],["TUR","Turkey",13.89,[20220814,0,0,0,0,0,0,0,1,2],[63.69,"="],62.68],["SMR","San Marino",13.89,[20220808,0,0,0,0,0,0,0,1,1],[42.94,"+"],70.03],["VUT","Vanuatu",13.89,[20220811,0,0,0,0,0,0,0,1,2],[1.02,"="],40.93],["ECU","Ecuador",13.89,[20220815,0,0,0,0,0,0,0,1,2],[6.79,"="],79.02],["BDI","Burundi",13.89,[20220812,0,0,0,0,0,0,0,1,0],[0.94,"-"],0.13],["TCD","Chad",13.89,[20220814,0,0,0,0,0,0,0,1,3],[0.01,"="],12.19],["VEN","Venezuela",13.89,[20220815,0,0,0,0,0,0,0,1,3],[0.8,"-"],50.66],["CMR","Cameroon",13.89,[20220815,0,0,0,0,0,0,0,1,2],[0.4,"="],4.51],["UGA","Uganda",13.89,[20220808,0,0,0,0,0,0,0,1,3],[0.0,"="],27.12],["URY","Uruguay",13.89,[20220807,0,0,0,0,0,0,0,1,1],[7.58,"="],84.38],["BRN","Brunei",13.95,[20220719,0,0,0,0,0,0,0,1,2],[0.0,"="],97.9],["JOR","Jordan",14.81,[20220814,0,1,0,0,0,0,0,0,2],[8.32,"="],40.86],["ISR","Israel",14.81,[20220815,1,0,0,0,0,0,0,0,2],[17.69,"-"],66.2],["POL","Poland",14.81,[20220816,1,0,0,0,0,0,0,0,2],[8.57,"+"],58.83],["HRV","Croatia",14.81,[20220815,0,1,0,0,0,0,0,0,2],[19.22,"-"],55.34],["DEU","Germany",14.81,[20220808,0,-1,0,0,0,1,0,0,2],[48.68,"-"],76.03],["GRC","Greece",14.81,[20220815,1,0,0,0,0,0,0,0,2],[105.62,"="],73.09],["CZE","Czech Republic",14.81,[20220802,0,1,0,0,0,0,0,0,1],[20.42,"-"],65.51],["CYP","Cyprus",14.81,[20220815,0,1,0,0,0,0,0,0,2],[42.73,"="],72.04],["BLR","Belarus",14.83,[20220801,0,0,0,0,0,0,0,1,0],[0.0,"="],66.12],["NZL","New Zealand",14.97,[20220808,0,0,0,0,0,0,0,1,2],[85.29,"-"],80.5],["TLS","Timor-Leste",15.13,[20220807,0,0,0,0,0,0,0,1,3],[0.39,"-"],55.7],["LUX","Luxembourg",15.42,[20220815,0,0,0,0,0,0,0,1,0],[4.88,"+"],72.35],["ITA","Italy",15.52,[20220815,0,1,0,0,0,0,0,0,2],[36.49,"+"],80.96],["NLD","Netherlands",15.65,[20220717,0,0,0,0,0,0,0,1,0],[9.49,"-"],68.39],["CIV","Cote d'Ivoire",15.74,[20220713,0,1,0,0,0,0,0,1,3],[0.2,"-"],30.46],["BMU","Bermuda",16.03,[20220810,0,0,0,0,0,0,0,1,2],[27.07,"-"],74.25],["ARG","Argentina",16.21,[20220815,0,0,0,0,0,0,0,1,1],[9.86,"="],83.3],["SSD","South Sudan",16.29,[20220807,0,0,0,0,0,0,0,1,2],[0.05,"="],13.69],["KHM","Cambodia",17.59,[20220812,1,0,0,0,0,0,0,1,2],[0.18,"-"],86.97],["PAN","Panama",17.59,[20220808,1,0,0,0,0,0,0,1,2],[21.45,"="],72.02],["MCO","Monaco",17.59,[20220815,0,1,0,0,0,0,0,1,2],[29.49,"+"],69.96],["RWA","Rwanda",18.47,[20220813,0,0,0,0,0,0,0,0,1],[0.04,"-"],77.91],["CAN","Canada",19.41,[20220815,0,0,0,0,1,0,0,1,2],[10.51,"-"],82.61],["CPV","Cape Verde",19.44,[20220814,0,0,0,0,0,0,1,1,2],[0.8,"-"],52.4],["COL","Colombia",20.37,[20220809,1,1,1,0,0,0,0,1,3],[2.08,"="],70.65],["IDN","Indonesia",20.74,[20220816,1,0,0,0,0,0,0,1,2],[1.87,"-"],62.23],["BEL","Belgium",20.96,[20220801,0,1,0,0,0,0,0,2,2],[19.43,"="],78.85],["SUR","Suriname",21.3,[20220814,1,1,0,0,0,0,0,1,2],[0.46,"="],38.81],["MEX","Mexico",22.22,[20220808,1,1,1,0,0,0,0,1,3],[8.19,"+"],63.1],["BTN","Bhutan",22.22,[20220723,0,0,1,0,0,0,0,2,4],[2.15,"="],86.62],["PSE","Palestine",22.22,[20220810,0,0,0,0,0,0,0,4,4],[],34.55],["ESP","Spain",23.61,[20220808,0,0,1,3,0,0,0,1,2],[7.87,"="],85.54],["THA","Thailand",24.07,[20220813,1,1,0,1,0,0,0,1,1],[2.46,"-"],74.42],["GUY","Guyana",24.85,[20220809,1,1,0,0,0,0,0,1,1],[7.61,"+"],57.37],["RKS","Kosovo",25.04,[20220815,2,2,2,0,0,0,0,0,1],[35.05,"-"],46.26],["VNM","Vietnam",25.93,[20220815,0,1,1,2,0,0,0,0,3],[2.89,"+"],83.15],["ABW","Aruba",25.93,[20220808,0,1,1,2,0,0,0,0,2],[21.41,"-"],78.24],["BIH","Bosnia and Herzegovina",25.93,[20220816,1,0,1,2,0,0,0,0,2],[10.99,"-"],25.87],["AGO","Angola",26.03,[20220808,0,2,1,0,0,0,0,1,2],[0.0,"="],22.14],["MRT","Mauritania",26.85,[20220815,1,1,1,0,0,0,0,1,2],[0.13,"-"],30.56],["TWN","Taiwan",26.85,[20220813,1,1,0,0,0,0,0,3,2],[90.51,"+"],83.84],["FIN","Finland",26.85,[20220801,1,1,0,0,1,0,0,1,1],[53.58,"="],78.4],["MAR","Morocco",27.11,[20220809,0,1,0,0,0,0,0,1,3],[0.26,"-"],63.3],["RUS","Russia",28.24,[20220815,0,1,2,1,0,0,0,2,2],[18.69,"+"],51.9],["PNG","Papua New Guinea",28.54,[20220815,0,1,1,2,0,0,0,1,2],[0.05,"+"],2.84],["MOZ","Mozambique",28.7,[20220731,0,1,1,2,0,0,0,1,2],[0.07,"+"],43.95],["CHL","Chile",28.81,[20220815,1,1,0,2,0,0,0,1,2],[50.81,"-"],90.52],["COG","Congo",29.31,[20220815,0,0,1,2,0,0,1,1,3],[0.16,"="],11.21],["GRD","Grenada",29.37,[20220328,1,0,0,3,0,0,0,1,3],[20.44,"="],31.06],["SYR","Syria",29.63,[20220816,1,1,1,1,0,0,0,1,2],[0.13,"-"],8.98],["FJI","Fiji",29.98,[20220815,0,1,0,0,1,0,0,1,2],[1.59,"="],68.88],["PHL","Philippines",30.33,[20220730,1,1,1,0,1,0,0,1,4],[3.52,"-"],63.42],["SLB","Solomon Islands",30.9,[20220813,1,1,1,0,0,0,1,1,3],[0.0,"="],27.13],["SGP","Singapore",31.48,[20220808,1,1,1,0,0,1,0,1,2],[78.9,"+"],91.71],["NPL","Nepal",31.49,[20220815,2,0,0,1,0,0,0,1,4],[1.33,"+"],68.72],["LSO","Lesotho",31.65,[20220816,0,2,2,3,0,0,0,1,4],[0.0,"="],38.25],["QAT","Qatar",32.24,[20220801,1,1,1,0,1,0,0,1,3],[24.28,"-"],102.35],["DMA","Dominica",32.41,[20220814,1,1,1,2,0,0,0,1,3],[0.0,"="],42.21],["SEN","Senegal",32.41,[20220815,1,1,1,0,1,0,0,1,3],[0.12,"-"],6.35],["USA","United States",32.63,[20220802,1,1,0,0,2,1,0,1,2],[30.14,"-"],67.3],["SWZ","Eswatini",32.66,[20220801,0,1,1,4,0,0,0,1,1],[0.25,"-"],28.69],["LBY","Libya",32.76,[20220802,1,2,2,0,0,0,0,1,3],[1.21,"+"],18.11],["BRA","Brazil",33.17,[20220808,2,1,1,0,1,1,1,1,2],[10.57,"+"],79.85],["KGZ","Kyrgyz Republic",33.33,[20220815,0,0,2,4,0,0,0,0,2],[1.15,"="],20.32],["TGO","Togo",33.76,[20220814,0,1,1,3,0,2,0,1,3],[0.19,"+"],18.02],["HTI","Haiti",34.26,[20220815,0,1,2,4,0,0,0,1,2],[0.16,"="],1.42],["BGD","Bangladesh",34.26,[20220813,2,1,1,0,0,1,0,1,4],[0.12,"="],71.44],["AZE","Azerbaijan",34.41,[20220813,0,3,2,0,2,0,0,1,0],[4.67,"-"],47.12],["IRQ","Iraq",34.53,[20220808,0,2,2,1,0,0,0,1,2],[1.08,"="],17.78],["ARE","United Arab Emirates",34.94,[20220718,1,1,1,0,1,0,0,2,3],[8.08,"-"],104.56],["AUT","Austria",35.19,[20220815,2,2,1,2,0,0,0,0,2],[57.6,"-"],76.44],["SOM","Somalia",35.19,[20220812,0,0,2,1,0,2,0,1,3],[0.0,"="],11.96],["HND","Honduras",35.85,[20220812,2,2,1,0,0,0,0,1,3],[4.39,"-"],53.56],["LKA","Sri Lanka",36.11,[20220807,0,1,1,1,1,1,0,1,3],[0.74,"-"],66.86],["SLV","El Salvador",36.93,[20220816,1,1,1,2,1,0,0,0,4],[0.0,"="],68.59],["IND","India",37.04,[20220816,0,1,1,0,0,2,2,1,3],[0.95,"-"],66.66],["JPN","Japan",37.53,[20220816,1,1,1,1,0,1,1,1,1],[147.58,"-"],82.33],["EGY","Egypt",37.96,[20220816,1,1,2,3,0,0,0,0,3],[0.0,"="],35.57],["BLZ","Belize",38.55,[20220808,1,1,1,0,1,0,1,1,2],[13.26,"+"],54.71],["LBR","Liberia",38.6,[20220807,1,3,2,0,0,0,0,1,4],[0.31,"="],44.83],["KEN","Kenya",39.32,[20220805,0,1,2,3,0,0,0,1,2],[0.02,"="],17.6],["NGA","Nigeria",39.49,[20220731,0,1,1,3,1,0,0,1,3],[0.05,"="],11.56],["COD","Democratic Republic of Congo",39.81,[20220812,0,1,1,0,1,0,2,1,3],[0.01,"="],2.58],["PER","Peru",40.16,[20220815,1,1,1,0,1,0,1,1,3],[19.61,"-"],83.02],["PAK","Pakistan",40.48,[20220729,0,0,0,0,0,0,0,1,4],[0.25,"+"],56.41],["BHS","Bahamas",40.74,[20220808,1,1,1,3,1,0,0,1,4],[3.31,"+"],39.89],["MWI","Malawi",40.74,[20220731,1,1,1,3,1,0,0,1,3],[0.05,"-"],9.72],["MLI","Mali",40.74,[20220808,0,2,2,3,0,0,0,1,3],[0.01,"="],6.84],["LBN","Lebanon",41.56,[20220808,1,2,1,1,1,2,0,1,1],[18.64,"-"],42.7],["TUN","Tunisia",41.59,[20220814,0,1,2,4,0,0,0,1,3],[2.53,"-"],52.02],["MYS","Malaysia",41.67,[20220814,1,1,1,1,1,1,1,0,2],[11.27,"-"],81.85],["GHA","Ghana",42.59,[20220813,0,2,2,4,0,0,0,1,1],[0.05,"="],24.4],["SLE","Sierra Leone",42.66,[20220815,2,2,2,0,1,0,0,1,3],[0.01,"+"],25.77],["ETH","Ethiopia",42.67,[20220801,1,1,1,3,1,0,0,1,3],[0.03,"="],30.52],["GTM","Guatemala",43.98,[20220801,2,1,1,3,1,1,0,1,2],[11.11,"+"],37.86],["DZA","Algeria",45.21,[20220808,1,2,1,4,1,0,0,1,3],[0.29,"="],15.51],["SYC","Seychelles",45.37,[20220712,1,0,2,4,1,0,0,1,3],[23.24,"="],76.12],["BOL","Bolivia",46.3,[20220815,2,1,1,1,1,1,1,1,3],[17.99,"-"],50.34],["GIN","Guinea",46.3,[20220725,1,1,1,3,0,0,2,1,2],[0.04,"="],20.04],["HKG","Hong Kong",47.13,[20220813,1,1,2,4,0,0,0,2,2],[66.54,"+"],87.28],["BRB","Barbados",47.22,[20220808,1,1,1,2,1,1,1,1,2],[112.94,"-"],54.84],["TON","Tonga",48.64,[20220809,1,2,1,0,0,2,2,1,4],[175.57,"="],72.22],["DJI","Djibouti",49.07,[20220815,1,1,1,4,2,0,0,1,3],[0.0,"="],17.25],["LAO","Laos",53.01,[20220811,2,1,1,4,1,2,0,1,3],[1.44,"+"],70.34],["ZWE","Zimbabwe",53.7,[20220807,1,1,1,3,1,2,1,1,3],[0.07,"="],29.34],["IRN","Iran",53.94,[20220815,1,2,2,4,0,0,2,1,2],[7.06,"-"],66.03],["MMR","Myanmar",54.63,[20220815,1,1,1,2,1,2,2,1,4],[0.06,"="],51.2],["MAC","Macao",57.41,[20220813,1,3,1,2,0,2,2,3,3],[],86.41],["TKM","Turkmenistan",58.33,[20210228,1,2,2,1,0,0,2,4,3],[],46.04],["UKR","Ukraine",58.33,[20220812,3,1,2,3,1,1,2,3,-1],[2.14,"+"],34.81],["CHN","China",73.61,[20220815,3,3,2,4,2,3,1,2,4],[0.17,"+"],88.95],["MNE","Montenegro",NaN,[20220215,-1,-1,-1,-1,-1,-1,-1,-1,-1],[91.66,"-"],45.33]];