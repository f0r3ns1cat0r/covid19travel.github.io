const dataUpdate="2021.05.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["AFG","Afghanistan",5.56,[20210503,0,0,0,0,0,0,0,0,2],[0.7,"+"]],["TZA","Tanzania",11.11,[20210510,0,0,0,0,0,0,0,2,0],[0.0,"="]],["NIC","Nicaragua",13.89,[20210426,0,0,0,0,0,0,0,1,1],[0.21,"="]],["BDI","Burundi",15.74,[20210510,0,2,0,0,0,0,0,1,1],[0.18,"-"]],["TCD","Chad",16.67,[20210509,0,0,0,0,0,0,0,2,4],[0.03,"-"]],["KIR","Kiribati",22.22,[20210426,0,0,0,0,0,0,0,4,0],[]],["VUT","Vanuatu",22.22,[20210513,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210513,0,0,0,0,0,0,0,4,2],[0.03,"="]],["SEN","Senegal",23.15,[20210510,1,0,0,0,0,0,0,3,4],[0.16,"-"]],["MAC","Macao",23.15,[20210513,1,0,0,0,0,0,0,3,2],[]],["TWN","Taiwan",25.0,[20210510,0,0,1,0,0,0,0,3,2],[0.07,"+"]],["BFA","Burkina Faso",25.0,[20210510,0,0,0,0,0,2,0,3,-1],[0.03,"+"]],["BLR","Belarus",25.0,[20210502,0,0,1,0,0,0,0,3,3],[10.65,"-"]],["YEM","Yemen",25.93,[20210510,0,1,1,0,0,2,1,-1,1],[0.04,"="]],["CIV","Cote d'Ivoire",25.93,[20210510,0,0,0,0,0,1,0,4,4],[0.1,"-"]],["SLV","El Salvador",26.85,[20210503,1,1,1,0,0,0,0,1,4],[1.45,"-"]],["CAF","Central African Republic",27.78,[20210509,2,0,0,0,0,0,1,2,3],[0.57,"="]],["BOL","Bolivia",27.78,[20210510,2,0,0,0,0,-1,0,4,4],[15.95,"+"]],["SOM","Somalia",27.78,[20210509,0,1,1,3,0,1,0,1,3],[0.11,"="]],["DMA","Dominica",29.63,[20210510,1,0,0,2,0,1,0,2,2],[0.79,"="]],["MRT","Mauritania",31.48,[20210510,0,0,1,1,0,1,1,1,3],[0.52,"-"]],["HTI","Haiti",32.41,[20210508,0,0,0,3,0,2,0,2,3],[0.13,"+"]],["SLB","Solomon Islands",33.33,[20210426,0,0,1,0,1,0,1,3,0],[0.0,"="]],["NER","Niger",34.26,[20210419,0,1,1,3,0,0,0,2,2],[0.01,"-"]],["COD","Democratic Republic of Congo",35.19,[20210510,0,0,2,1,1,1,2,1,3],[0.04,"="]],["TJK","Tajikistan",35.19,[20210426,1,1,0,3,0,0,0,3,4],[0.0,"="]],["RUS","Russia",36.57,[20210509,0,1,2,3,0,0,0,3,2],[5.73,"+"]],["GRL","Greenland",37.04,[20210427,1,0,1,2,0,0,0,4,2],[0.0,"="]],["DJI","Djibouti",37.96,[20210425,1,1,1,4,0,0,0,1,4],[1.2,"+"]],["CMR","Cameroon",37.96,[20210503,1,1,1,3,0,0,0,2,3],[0.0,"="]],["GMB","Gambia",38.89,[20210419,0,0,1,4,1,0,0,2,3],[0.09,"+"]],["LTU","Lithuania",38.89,[20210502,2,1,1,4,0,0,0,2,2],[42.46,"-"]],["BEN","Benin",38.89,[20210510,0,0,1,3,1,0,0,3,3],[0.13,"="]],["ZMB","Zambia",39.81,[20210508,0,0,2,4,0,1,0,1,3],[0.27,"+"]],["BRN","Brunei",40.74,[20210513,1,1,1,2,0,0,0,4,2],[0.1,"-"]],["SMR","San Marino",41.67,[20210510,1,1,1,4,0,1,0,1,3],[6.74,"="]],["PNG","Papua New Guinea",41.67,[20210509,1,1,1,0,1,1,1,1,2],[3.32,"+"]],["NAM","Namibia",42.59,[20210412,1,1,1,3,0,2,0,1,3],[6.64,"-"]],["TGO","Togo",42.59,[20210509,0,2,0,3,0,1,2,2,3],[0.24,"-"]],["UZB","Uzbekistan",42.59,[20210509,1,0,1,3,1,0,0,3,3],[1.08,"-"]],["ETH","Ethiopia",43.52,[20210514,1,1,1,3,1,0,0,2,3],[0.48,"-"]],["LBR","Liberia",43.52,[20210426,0,2,1,3,1,0,0,2,3],[0.0,"="]],["ZAF","South Africa",43.52,[20210510,1,2,0,2,1,2,0,1,3],[3.8,"+"]],["ISR","Israel",43.52,[20210509,1,1,1,3,0,0,0,4,2],[0.36,"-"]],["EST","Estonia",44.44,[20210508,2,2,1,3,0,2,0,1,2],[22.76,"-"]],["GUM","Guam",44.44,[20210502,1,1,2,3,0,1,0,1,3],[]],["MEX","Mexico",44.44,[20210509,3,2,1,0,1,1,2,1,4],[1.79,"-"]],["PRY","Paraguay",45.37,[20210502,1,1,1,3,0,2,0,2,3],[30.85,"-"]],["RKS","Kosovo",45.37,[20210511,1,1,1,3,1,2,0,2,4],[3.68,"-"]],["BIH","Bosnia and Herzegovina",45.37,[20210513,1,2,1,4,0,2,0,1,3],[6.31,"-"]],["MWI","Malawi",45.37,[20210509,0,1,1,3,1,0,0,4,1],[0.03,"-"]],["UKR","Ukraine",45.83,[20210510,2,2,2,3,0,1,0,1,3],[12.71,"-"]],["VIR","United States Virgin Islands",46.3,[20210509,2,2,1,3,0,1,0,1,3],[]],["TON","Tonga",47.22,[20210502,1,0,1,3,0,2,0,4,0],[]],["NGA","Nigeria",47.22,[20210510,0,1,1,3,1,2,0,2,3],[0.02,"="]],["LUX","Luxembourg",48.15,[20210510,1,1,1,3,0,2,0,3,2],[17.55,"+"]],["MLI","Mali",48.15,[20210510,1,2,2,3,0,1,0,1,3],[0.07,"-"]],["FRO","Faeroe Islands",48.15,[20210425,1,2,1,2,0,1,1,2,2],[0.29,"="]],["AUS","Australia",48.61,[20210507,0,2,1,3,1,0,2,4,3],[0.03,"-"]],["HRV","Croatia",49.07,[20210513,1,1,1,4,1,0,0,3,3],[22.96,"-"]],["JPN","Japan",49.07,[20210507,1,2,1,1,0,1,1,4,1],[5.11,"+"]],["SAU","Saudi Arabia",50.0,[20210511,3,0,2,3,0,0,0,3,3],[2.87,"-"]],["ISL","Iceland",50.0,[20210509,1,2,1,3,1,0,0,3,3],[1.3,"+"]],["CHE","Switzerland",50.93,[20210513,1,2,1,4,0,1,0,3,3],[14.69,"+"]],["BGR","Bulgaria",50.93,[20210512,2,2,1,3,0,0,0,4,4],[8.93,"-"]],["SLE","Sierra Leone",50.93,[20210426,1,2,2,2,1,1,0,1,3],[0.06,"+"]],["LIE","Liechtenstein",50.93,[20210509,1,2,1,3,1,1,1,2,3],[6.74,"-"]],["GHA","Ghana",50.93,[20210502,0,2,2,3,0,1,0,4,4],[0.18,"+"]],["EGY","Egypt",50.93,[20210509,1,2,2,4,0,1,0,1,4],[1.14,"+"]],["ZWE","Zimbabwe",51.85,[20210509,1,2,2,3,0,2,0,1,3],[0.13,"+"]],["FIN","Finland",52.31,[20210507,2,2,2,4,0,1,0,3,2],[3.49,"-"]],["SGP","Singapore",52.78,[20210509,2,2,1,4,0,1,0,3,4],[0.47,"+"]],["UGA","Uganda",52.78,[20210423,2,2,1,2,1,2,0,1,3],[0.14,"+"]],["KOR","South Korea",52.78,[20210508,1,1,1,4,0,1,1,3,3],[1.2,"-"]],["BHR","Bahrain",53.7,[20210510,1,2,2,2,0,1,1,2,3],[92.95,"-"]],["GIN","Guinea",53.7,[20210510,0,1,2,4,-1,2,2,1,3],[0.21,"-"]],["DNK","Denmark",53.7,[20210507,3,2,1,3,0,1,0,3,2],[17.17,"-"]],["BMU","Bermuda",53.7,[20210511,1,1,1,4,1,2,0,2,2],[6.88,"+"]],["COG","Congo",53.7,[20210419,0,1,1,4,1,2,1,2,3],[0.51,"-"]],["BEL","Belgium",54.63,[20210507,1,2,1,4,0,2,0,3,3],[21.1,"-"]],["KGZ","Kyrgyz Republic",54.63,[20210508,2,2,2,4,1,0,0,1,3],[4.78,"-"]],["MCO","Monaco",54.63,[20210508,1,2,2,4,0,2,0,1,3],[4.73,"-"]],["ARE","United Arab Emirates",56.48,[20210509,1,2,2,4,0,0,2,3,3],[15.74,"-"]],["CZE","Czech Republic",56.48,[20210502,2,2,2,4,0,0,0,3,3],[11.31,"-"]],["MLT","Malta",56.48,[20210510,2,2,2,4,0,0,0,3,4],[1.36,"-"]],["SVN","Slovenia",56.48,[20210426,1,2,1,3,1,1,1,2,3],[23.1,"-"]],["SRB","Serbia",56.48,[20210510,1,2,2,4,1,1,0,1,3],[10.9,"+"]],["FJI","Fiji",56.48,[20210508,0,2,1,3,0,2,2,3,1],[0.59,"+"]],["LVA","Latvia",56.48,[20210509,2,2,2,4,0,0,0,3,3],[34.14,"-"]],["BLZ","Belize",56.48,[20210508,3,2,1,0,0,2,2,1,3],[1.01,"+"]],["CRI","Costa Rica",56.48,[20210508,1,2,2,3,0,1,2,1,3],[48.39,"+"]],["USA","United States",56.94,[20210508,2,1,1,4,1,1,1,3,4],[10.47,"-"]],["SYR","Syria",57.87,[20210511,2,3,2,3,0,2,2,1,3],[0.32,"-"]],["SYC","Seychelles",58.33,[20210510,3,1,2,4,0,1,0,3,3],[408.32,"="]],["AGO","Angola",58.33,[20210509,0,2,1,3,1,1,2,3,3],[0.79,"+"]],["GTM","Guatemala",58.33,[20210510,2,1,2,4,1,0,0,3,3],[5.16,"+"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[47.15,"-"]],["THA","Thailand",59.26,[20210510,3,1,2,4,1,1,1,3,2],[3.52,"+"]],["BHS","Bahamas",59.72,[20210509,2,2,2,4,1,2,1,1,3],[9.12,"-"]],["GBR","United Kingdom",59.72,[20210507,1,2,2,4,1,0,1,3,3],[3.33,"-"]],["ABW","Aruba",60.19,[20210509,1,2,2,4,0,2,0,3,3],[13.65,"-"]],["GUY","Guyana",60.19,[20210511,2,1,2,4,0,2,0,3,3],[16.62,"+"]],["ALB","Albania",60.19,[20210507,2,1,2,4,0,2,2,1,4],[1.8,"-"]],["LSO","Lesotho",60.19,[20210509,2,1,2,4,0,2,0,3,4],[0.11,"-"]],["BRA","Brazil",60.65,[20210502,2,3,2,4,-1,2,2,1,4],[29.38,"+"]],["ROU","Romania",61.11,[20210509,2,1,1,4,0,2,2,2,4],[4.94,"-"]],["MDG","Madagascar",62.04,[20210419,3,1,1,3,0,2,2,3,4],[0.64,"-"]],["PRT","Portugal",62.04,[20210514,1,2,2,4,1,1,0,3,3],[3.54,"+"]],["BWA","Botswana",62.04,[20210508,1,1,2,4,0,2,2,1,3],[7.53,"+"]],["MNG","Mongolia",62.04,[20210510,3,1,2,4,1,1,1,3,4],[17.8,"-"]],["TKM","Turkmenistan",62.04,[20210426,1,3,2,1,0,0,2,4,3],[]],["SDN","Sudan",62.5,[20210510,3,3,2,4,0,3,0,2,3],[0.14,"="]],["PRI","Puerto Rico",62.96,[20210405,1,2,2,3,1,2,1,3,3],[]],["ESP","Spain",62.96,[20210509,1,1,2,4,0,2,2,3,4],[11.42,"-"]],["PAN","Panama",62.96,[20210510,3,2,2,3,1,2,0,2,4],[10.86,"+"]],["SWZ","Eswatini",62.96,[20210426,2,1,1,3,1,2,2,1,4],[0.46,"+"]],["CHN","China",63.43,[20210510,2,2,2,4,1,1,1,3,2],[0.0,"="]],["MDA","Moldova",63.89,[20210504,2,2,2,4,1,1,1,1,4],[4.09,"-"]],["FRA","France",63.89,[20210507,1,3,2,4,0,2,0,3,4],[22.1,"-"]],["NOR","Norway",63.89,[20210506,2,2,1,4,1,1,1,3,2],[7.7,"+"]],["ERI","Eritrea",64.81,[20210425,0,0,2,4,1,1,2,4,3],[0.32,"-"]],["GEO","Georgia",64.81,[20210512,0,2,2,4,0,2,2,2,3],[30.67,"-"]],["TTO","Trinidad and Tobago",64.81,[20210510,2,2,2,4,1,0,0,4,4],[27.14,"+"]],["MYS","Malaysia",65.28,[20210510,3,2,2,4,1,1,2,3,3],[13.14,"-"]],["SWE","Sweden",65.74,[20210507,1,2,2,4,1,1,1,3,2],[41.49,"+"]],["AND","Andorra",65.74,[20210510,1,2,2,4,1,2,1,1,3],[22.19,"+"]],["KEN","Kenya",65.74,[20210510,2,1,2,3,0,2,2,2,3],[0.65,"-"]],["HUN","Hungary",66.67,[20210430,2,2,2,4,0,2,0,4,3],[10.65,"-"]],["SVK","Slovak Republic",67.59,[20210510,2,2,2,4,0,2,2,2,3],[5.6,"-"]],["MOZ","Mozambique",67.59,[20210511,1,2,2,3,1,3,2,1,3],[0.1,"+"]],["NLD","Netherlands",67.59,[20210506,1,2,2,4,1,1,1,3,2],[36.08,"-"]],["PHL","Philippines",68.06,[20210510,1,2,2,4,1,2,2,3,4],[5.68,"-"]],["SSD","South Sudan",68.52,[20210510,1,2,2,4,1,2,1,2,3],[0.02,"-"]],["KAZ","Kazakhstan",68.52,[20210509,2,2,2,4,0,2,2,3,4],[12.19,"+"]],["IDN","Indonesia",68.98,[20210511,3,2,2,4,1,2,2,3,4],[1.6,"-"]],["VNM","Vietnam",69.91,[20210510,3,2,2,4,1,1,1,4,3],[0.1,"="]],["BTN","Bhutan",69.91,[20210510,3,3,2,3,2,2,1,3,4],[1.59,"-"]],["DOM","Dominican Republic",70.37,[20210510,3,2,2,4,1,2,0,2,3],[7.14,"+"]],["SUR","Suriname",70.37,[20210510,3,2,2,4,0,2,0,4,4],[18.85,"+"]],["KWT","Kuwait",70.37,[20210426,3,2,2,2,1,2,1,2,3],[23.5,"-"]],["LBN","Lebanon",70.37,[20210510,0,2,2,4,1,2,2,2,3],[6.56,"-"]],["JOR","Jordan",70.37,[20210511,3,2,2,3,1,2,1,1,3],[5.77,"-"]],["HKG","Hong Kong",71.3,[20210511,2,2,2,4,1,1,1,3,2],[0.03,"-"]],["RWA","Rwanda",71.3,[20210510,1,2,2,4,1,2,2,2,3],[0.54,"+"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["MAR","Morocco",71.3,[20210508,1,2,2,4,1,2,2,3,3],[0.54,"-"]],["POL","Poland",71.3,[20210514,2,2,2,4,1,1,1,3,2],[9.28,"-"]],["GAB","Gabon",71.3,[20210419,1,2,2,3,1,2,2,2,3],[3.13,"-"]],["URY","Uruguay",72.22,[20210510,2,2,2,4,1,1,1,4,2],[78.38,"+"]],["BRB","Barbados",72.22,[20210510,2,2,2,4,1,2,1,2,3],[1.49,"="]],["TUN","Tunisia",72.22,[20210430,3,1,2,4,1,2,2,1,3],[8.51,"-"]],["JAM","Jamaica",72.22,[20210510,1,2,2,4,1,2,2,2,3],[3.48,"+"]],["KHM","Cambodia",72.69,[20210510,3,3,2,4,0,3,2,2,4],[2.84,"-"]],["AZE","Azerbaijan",73.15,[20210506,3,2,2,4,2,1,0,4,4],[5.05,"-"]],["IND","India",73.61,[20210510,3,3,2,4,0,3,2,3,4],[25.68,"-"]],["AUT","Austria",73.61,[20210509,2,2,2,4,1,2,2,3,3],[11.04,"-"]],["ITA","Italy",74.07,[20210514,1,2,2,4,1,2,2,3,4],[12.75,"-"]],["DEU","Germany",75.0,[20210509,3,2,2,4,1,2,1,3,2],[12.06,"-"]],["CYP","Cyprus",75.0,[20210509,2,2,2,4,1,2,1,3,3],[23.38,"-"]],["ECU","Ecuador",75.46,[20210510,2,3,2,4,1,3,2,4,3],[8.19,"-"]],["CAN","Canada",75.46,[20210507,3,3,2,4,1,2,2,4,3],[17.09,"-"]],["IRQ","Iraq",77.31,[20210511,3,2,2,4,0,2,2,3,4],[10.98,"-"]],["MUS","Mauritius",77.78,[20210510,3,2,2,4,1,1,1,4,4],[0.57,"-"]],["PAK","Pakistan",78.24,[20210510,2,3,2,4,2,3,2,2,4],[1.33,"-"]],["CHL","Chile",78.24,[20210510,2,3,2,3,2,3,2,4,3],[28.2,"+"]],["LBY","Libya",79.63,[20210510,1,2,2,4,1,2,2,4,0],[3.08,"-"]],["QAT","Qatar",79.63,[20210510,3,3,2,4,2,2,0,2,4],[12.88,"-"]],["OMN","Oman",80.56,[20210510,2,2,2,4,2,2,1,3,3],[9.42,"="]],["IRL","Ireland",80.56,[20210507,1,3,2,4,1,2,2,3,3],[8.58,"-"]],["CUB","Cuba",81.48,[20210510,3,3,2,4,2,2,2,2,3],[10.04,"+"]],["MMR","Myanmar",81.48,[20210425,3,3,2,4,1,2,2,4,4],[0.03,"="]],["IRN","Iran",81.48,[20210510,3,3,2,4,1,2,2,3,3],[17.87,"-"]],["HND","Honduras",82.41,[20210503,3,3,2,4,0,2,2,3,3],[8.07,"+"]],["COL","Colombia",82.41,[20210510,3,3,2,3,2,3,2,2,3],[32.52,"-"]],["PER","Peru",83.33,[20210509,2,3,2,4,1,3,2,3,4],[23.65,"+"]],["BGD","Bangladesh",83.33,[20210510,3,1,2,4,2,2,2,2,4],[0.75,"-"]],["ARG","Argentina",84.26,[20210509,3,2,2,4,2,2,2,4,3],[47.83,"+"]],["LKA","Sri Lanka",84.26,[20210508,3,3,2,4,1,2,2,3,3],[11.17,"+"]],["DZA","Algeria",85.19,[20210426,3,2,2,4,2,2,2,4,3],[0.45,"-"]],["LAO","Laos",86.11,[20210426,3,2,2,3,2,2,2,4,4],[0.58,"-"]],["TLS","Timor-Leste",87.04,[20210426,3,3,2,4,2,2,2,4,4],[12.49,"+"]],["TUR","Turkey",87.04,[20210510,2,3,2,3,2,2,2,3,4],[16.48,"-"]],["GRC","Greece",87.96,[20210421,3,3,2,4,1,2,2,3,4],[21.61,"-"]],["VEN","Venezuela",87.96,[20210510,3,3,2,4,1,2,2,3,4],[3.93,"+"]],["NPL","Nepal",91.67,[20210503,3,3,2,3,2,3,2,2,4],[30.43,"-"]]];