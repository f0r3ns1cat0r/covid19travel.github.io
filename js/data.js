const dataUpdate="2021.05.03";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3};var data=[["TZA","Tanzania",2.78,[20210426,0,0,0,0,0,0,0,1,-1]],["AFG","Afghanistan",8.33,[20210427,0,0,0,0,0,0,0,1,2]],["CAF","Central African Republic",12.96,[20210419,0,0,0,0,0,1,0,2,2]],["NIC","Nicaragua",13.89,[20210426,0,0,0,0,0,0,0,1,1]],["BDI","Burundi",15.74,[20210503,0,2,0,0,0,0,0,1,1]],["BLR","Belarus",19.44,[20210502,0,0,0,0,0,0,0,3,3]],["NZL","New Zealand",22.22,[20210426,0,0,0,0,0,0,0,4,2]],["KIR","Kiribati",22.22,[20210426,0,0,0,0,0,0,0,4,0]],["VUT","Vanuatu",22.22,[20210501,0,0,0,0,0,0,0,4,0]],["VNM","Vietnam",22.22,[20210426,0,0,0,0,0,0,0,4,3]],["SEN","Senegal",23.15,[20210418,1,0,0,0,0,0,0,3,4]],["UZB","Uzbekistan",23.15,[20210502,1,0,1,3,0,0,0,2,-1]],["MAC","Macao",23.15,[20210502,1,0,0,0,0,0,0,3,2]],["TCD","Chad",25.0,[20210425,0,0,0,0,0,0,2,2,4]],["TWN","Taiwan",25.0,[20210502,0,0,1,0,0,0,0,3,2]],["CIV","Cote d'Ivoire",25.93,[20210426,0,0,0,0,0,1,0,4,4]],["SLV","El Salvador",26.85,[20210418,1,1,1,0,0,0,0,1,4]],["BOL","Bolivia",27.78,[20210501,2,0,0,0,0,0,0,4,4]],["COD","Democratic Republic of Congo",28.7,[20210423,0,0,2,1,1,1,1,1,3]],["DMA","Dominica",29.63,[20210413,1,0,0,2,0,1,0,2,2]],["NPL","Nepal",30.56,[20210426,3,0,0,0,0,0,1,2,4]],["BFA","Burkina Faso",30.56,[20210425,0,0,0,0,0,0,2,4,4]],["SOM","Somalia",31.48,[20210425,0,2,1,3,0,1,0,1,3]],["HTI","Haiti",32.41,[20210419,0,0,0,3,0,2,0,2,3]],["MRT","Mauritania",33.33,[20210420,1,1,1,1,0,1,0,1,3]],["SLB","Solomon Islands",33.33,[20210426,0,0,1,0,1,0,1,3,0]],["BEN","Benin",33.33,[20210425,0,0,0,3,1,0,0,3,4]],["YEM","Yemen",34.26,[20210503,0,1,1,0,0,2,1,3,1]],["NER","Niger",34.26,[20210419,0,1,1,3,0,0,0,2,2]],["CMR","Cameroon",35.19,[20210411,1,1,1,3,0,0,0,1,3]],["TJK","Tajikistan",35.19,[20210426,1,1,0,3,0,0,0,3,4]],["RUS","Russia",36.57,[20210426,0,1,2,3,0,0,0,3,2]],["GRL","Greenland",37.04,[20210427,1,0,1,2,0,0,0,4,2]],["DJI","Djibouti",37.96,[20210425,1,1,1,4,0,0,0,1,4]],["GMB","Gambia",38.89,[20210419,0,0,1,4,1,0,0,2,3]],["LTU","Lithuania",38.89,[20210502,2,1,1,4,0,0,0,2,2]],["ZMB","Zambia",39.81,[20210502,0,0,2,4,0,1,0,1,3]],["BRN","Brunei",40.74,[20210428,1,1,1,2,0,0,0,4,2]],["LIE","Liechtenstein",42.59,[20200602,1,2,2,4,0,1,0,-1,-1]],["NAM","Namibia",42.59,[20210412,1,1,1,3,0,2,0,1,3]],["ISR","Israel",43.52,[20210502,1,1,1,3,0,0,0,4,-1]],["LBR","Liberia",43.52,[20210426,0,2,1,3,1,0,0,2,3]],["ETH","Ethiopia",43.52,[20210501,1,1,1,3,1,0,0,2,3]],["SYC","Seychelles",43.52,[20210426,0,0,1,4,0,2,0,3,3]],["MEX","Mexico",44.44,[20210424,3,2,1,0,1,1,2,1,4]],["GUM","Guam",44.44,[20210502,1,1,2,3,0,1,0,1,3]],["BIH","Bosnia and Herzegovina",45.37,[20210429,1,2,1,4,0,2,0,1,3]],["MWI","Malawi",45.37,[20210501,0,1,1,3,1,0,0,4,1]],["PRY","Paraguay",45.37,[20210502,1,1,1,3,0,2,0,2,3]],["SDN","Sudan",45.83,[20210502,3,1,2,4,0,1,0,-1,3]],["VIR","United States Virgin Islands",46.3,[20210425,2,2,1,3,0,1,0,1,3]],["TON","Tonga",47.22,[20210502,1,0,1,3,0,2,0,4,0]],["NGA","Nigeria",47.22,[20210426,0,1,1,3,1,2,0,2,3]],["JPN","Japan",47.69,[20210426,1,2,1,1,0,1,1,4,1]],["BGR","Bulgaria",48.15,[20210428,2,2,1,3,0,0,0,3,4]],["FRO","Faeroe Islands",48.15,[20210425,1,2,1,2,0,1,1,2,2]],["ZAF","South Africa",48.15,[20210405,1,1,1,3,1,2,0,1,3]],["TGO","Togo",48.15,[20210502,0,2,0,3,0,1,2,4,3]],["MLI","Mali",48.15,[20210502,1,2,2,3,0,1,0,1,3]],["HRV","Croatia",49.07,[20210429,1,1,1,4,1,0,0,3,3]],["RKS","Kosovo",49.07,[20210427,2,1,1,3,1,2,0,2,4]],["ISL","Iceland",50.0,[20210425,1,2,1,3,1,0,0,3,3]],["SAU","Saudi Arabia",50.0,[20210426,3,0,2,3,0,0,0,3,3]],["EST","Estonia",50.0,[20210426,2,3,2,4,0,1,0,2,-1]],["SLE","Sierra Leone",50.93,[20210426,1,2,2,2,1,1,0,1,3]],["BLZ","Belize",50.93,[20210503,3,2,1,0,0,2,1,1,3]],["GHA","Ghana",50.93,[20210502,0,2,2,3,0,1,0,4,4]],["SGP","Singapore",50.93,[20210423,1,2,1,4,0,1,0,3,4]],["EGY","Egypt",50.93,[20210419,1,2,2,4,0,1,0,1,4]],["CHE","Switzerland",50.93,[20210428,1,2,1,4,0,1,0,3,3]],["SRB","Serbia",50.93,[20210425,1,2,2,4,0,1,0,1,3]],["ZWE","Zimbabwe",51.85,[20210501,1,2,2,3,0,2,0,1,3]],["FIN","Finland",52.31,[20210424,2,2,2,4,0,1,0,3,2]],["UGA","Uganda",52.78,[20210423,2,2,1,2,1,2,0,1,3]],["AND","Andorra",52.78,[20210427,1,2,2,4,1,0,0,1,3]],["SMR","San Marino",52.78,[20210426,1,1,2,4,0,1,1,1,4]],["LUX","Luxembourg",53.7,[20210503,1,1,1,3,1,2,0,3,2]],["COG","Congo",53.7,[20210419,0,1,1,4,1,2,1,2,3]],["CPV","Cape Verde",53.7,[20210405,2,2,2,4,0,1,1,1,3]],["KGZ","Kyrgyz Republic",54.63,[20210502,2,2,2,4,1,0,0,1,3]],["MCO","Monaco",54.63,[20210501,1,2,2,4,0,2,0,1,3]],["ALB","Albania",54.63,[20210502,2,1,2,4,0,2,0,1,4]],["THA","Thailand",56.48,[20210426,3,1,2,4,1,1,1,2,2]],["SVN","Slovenia",56.48,[20210426,1,2,1,3,1,1,1,2,3]],["CZE","Czech Republic",56.48,[20210502,2,2,2,4,0,0,0,3,3]],["BHR","Bahrain",56.48,[20210423,1,2,2,3,0,1,1,2,4]],["DNK","Denmark",56.48,[20210424,3,2,1,4,0,1,0,3,2]],["LVA","Latvia",56.48,[20210501,2,2,2,4,0,0,0,3,3]],["ARE","United Arab Emirates",56.48,[20210502,1,2,2,4,0,0,2,3,3]],["FJI","Fiji",56.48,[20210502,0,2,1,3,0,2,2,3,1]],["USA","United States",56.94,[20210420,2,1,1,4,1,1,1,3,4]],["SYR","Syria",57.87,[20210412,2,3,2,3,0,2,2,1,3]],["KOR","South Korea",58.33,[20210502,1,1,2,4,0,1,1,3,3]],["GTM","Guatemala",58.33,[20210426,2,1,2,4,1,0,0,3,3]],["PAK","Pakistan",58.8,[20210418,2,3,2,4,0,3,0,2,4]],["LKA","Sri Lanka",59.26,[20210502,3,2,2,4,0,1,0,2,3]],["AGO","Angola",59.26,[20210405,1,1,1,4,1,2,1,2,3]],["BHS","Bahamas",59.72,[20210426,2,2,2,4,1,2,1,1,3]],["LSO","Lesotho",60.19,[20210412,2,1,2,4,0,2,0,3,4]],["ABW","Aruba",60.19,[20210501,1,2,2,4,0,2,0,3,3]],["BEL","Belgium",60.19,[20210502,1,2,2,4,0,2,0,3,3]],["GUY","Guyana",60.19,[20210502,2,1,2,4,0,2,0,3,3]],["ROU","Romania",61.11,[20210502,2,1,1,4,0,2,2,2,4]],["GBR","United Kingdom",61.11,[20210430,1,2,2,4,1,0,1,3,3]],["GIN","Guinea",61.11,[20210420,1,2,2,4,0,2,2,1,3]],["MYS","Malaysia",61.57,[20210426,3,1,2,4,1,1,2,3,3]],["MDG","Madagascar",62.04,[20210419,3,1,1,3,0,2,2,3,4]],["BWA","Botswana",62.04,[20210412,1,1,2,4,0,2,2,1,3]],["CRI","Costa Rica",62.04,[20210503,1,2,2,3,1,1,2,1,3]],["TKM","Turkmenistan",62.04,[20210426,1,3,2,1,0,0,2,4,3]],["PRI","Puerto Rico",62.96,[20210405,1,2,2,3,1,2,1,3,3]],["KAZ","Kazakhstan",62.96,[20210503,2,2,2,4,0,0,2,3,4]],["SWZ","Eswatini",62.96,[20210426,2,1,1,3,1,2,2,1,4]],["ERI","Eritrea",64.81,[20210425,0,0,2,4,1,1,2,4,3]],["SVK","Slovak Republic",64.81,[20210426,2,2,1,4,0,2,2,2,3]],["GEO","Georgia",64.81,[20210426,0,2,2,4,0,2,2,2,3]],["TTO","Trinidad and Tobago",64.81,[20210418,2,2,2,4,1,0,0,4,4]],["ECU","Ecuador",65.28,[20210412,2,2,2,4,1,2,1,4,3]],["SWE","Sweden",65.74,[20210502,1,2,2,4,1,1,1,3,2]],["PNG","Papua New Guinea",65.74,[20210426,2,2,2,3,1,1,1,2,3]],["PAN","Panama",65.74,[20210426,3,2,2,3,1,2,0,3,4]],["MOZ","Mozambique",65.74,[20210426,1,2,2,3,1,2,2,1,3]],["NOR","Norway",65.74,[20210430,2,3,1,4,1,1,1,3,2]],["HUN","Hungary",66.67,[20210430,2,2,2,4,0,2,0,4,3]],["BTN","Bhutan",66.67,[20210419,0,2,2,4,1,1,1,4,4]],["BRB","Barbados",66.67,[20210425,2,2,2,4,1,2,0,2,3]],["MLT","Malta",67.59,[20210503,2,2,2,4,0,0,2,3,4]],["ESP","Spain",67.59,[20210423,1,1,2,4,0,2,2,3,4]],["PHL","Philippines",68.06,[20210426,1,2,2,4,1,2,2,3,4]],["BRA","Brazil",68.06,[20210418,3,3,2,3,1,3,2,1,4]],["MDA","Moldova",68.52,[20210426,2,3,2,4,1,3,1,1,4]],["IDN","Indonesia",68.98,[20210426,3,2,2,4,1,2,2,3,4]],["CYP","Cyprus",69.44,[20210425,2,2,1,4,1,2,1,3,3]],["UKR","Ukraine",69.44,[20210425,3,3,2,3,2,1,2,1,3]],["PRT","Portugal",69.44,[20210501,1,2,2,4,1,2,2,3,3]],["DOM","Dominican Republic",70.37,[20210426,3,2,2,4,1,2,0,2,3]],["BMU","Bermuda",70.37,[20210426,3,2,2,4,1,2,0,2,2]],["SUR","Suriname",70.37,[20210501,3,2,2,4,0,2,0,4,4]],["KWT","Kuwait",70.37,[20210426,3,2,2,2,1,2,1,2,3]],["JOR","Jordan",70.37,[20210426,3,2,2,3,1,2,1,1,3]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3]],["RWA","Rwanda",71.3,[20210425,1,2,2,4,1,2,2,2,3]],["POL","Poland",71.3,[20210430,2,3,2,4,1,1,1,3,2]],["GAB","Gabon",71.3,[20210419,1,2,2,3,1,2,2,2,3]],["MAR","Morocco",71.3,[20210426,1,2,2,4,1,2,2,3,3]],["HKG","Hong Kong",71.3,[20210426,2,2,2,4,1,1,1,3,2]],["NLD","Netherlands",71.3,[20210430,2,2,2,4,1,1,1,3,2]],["ARG","Argentina",71.76,[20210405,1,2,2,4,2,2,2,3,3]],["SSD","South Sudan",72.22,[20210503,2,2,2,4,1,2,1,2,3]],["URY","Uruguay",72.22,[20210418,3,2,2,4,1,1,0,4,2]],["KHM","Cambodia",72.22,[20210426,3,2,2,3,0,3,2,2,4]],["TUN","Tunisia",72.22,[20210430,3,1,2,4,1,2,2,1,3]],["AZE","Azerbaijan",72.22,[20210425,3,1,2,4,2,1,0,4,3]],["IRQ","Iraq",73.15,[20210419,3,2,2,4,0,2,2,1,4]],["KEN","Kenya",73.15,[20210426,3,2,2,3,1,1,2,3,4]],["IND","India",73.61,[20210430,3,3,2,4,0,3,2,3,4]],["JAM","Jamaica",74.07,[20210419,1,2,2,4,1,2,2,2,3]],["LBN","Lebanon",74.07,[20210425,1,2,2,4,1,2,2,2,3]],["ITA","Italy",75.0,[20210430,2,3,2,4,1,2,2,3,4]],["FRA","France",75.0,[20210502,2,2,2,4,0,2,2,3,-1]],["DEU","Germany",75.0,[20210501,3,2,2,4,1,2,1,3,2]],["AUS","Australia",75.46,[20210425,3,3,2,4,1,2,2,4,4]],["CAN","Canada",75.46,[20210502,3,3,2,4,1,2,2,4,3]],["PER","Peru",75.93,[20210501,2,2,2,4,1,3,2,3,4]],["AUT","Austria",77.31,[20210423,3,3,2,4,1,2,2,3,3]],["MUS","Mauritius",77.78,[20210503,3,2,2,4,1,1,1,4,4]],["CHN","China",78.24,[20210426,3,2,2,4,2,3,2,3,2]],["QAT","Qatar",79.63,[20210503,3,3,2,4,2,2,0,2,4]],["LBY","Libya",79.63,[20210419,1,2,2,4,1,2,2,4,3]],["CUB","Cuba",79.63,[20210502,3,3,2,4,2,2,2,2,3]],["OMN","Oman",80.56,[20210426,2,2,2,4,2,2,1,3,3]],["IRL","Ireland",80.56,[20210423,1,3,2,4,1,2,2,3,3]],["IRN","Iran",81.48,[20210502,3,3,2,4,1,2,2,3,3]],["VEN","Venezuela",81.48,[20210502,3,2,2,4,1,2,2,3,4]],["MMR","Myanmar",81.48,[20210425,3,3,2,4,1,2,2,4,4]],["HND","Honduras",82.41,[20210418,3,3,2,4,0,2,2,3,3]],["TUR","Turkey",83.33,[20210425,2,2,2,3,2,2,2,3,4]],["CHL","Chile",84.72,[20210502,3,3,2,4,2,3,2,4,3]],["DZA","Algeria",85.19,[20210426,3,2,2,4,2,2,2,4,3]],["LAO","Laos",86.11,[20210426,3,2,2,3,2,2,2,4,4]],["TLS","Timor-Leste",87.04,[20210426,3,3,2,4,2,2,2,4,4]],["GRC","Greece",87.96,[20210421,3,3,2,4,1,2,2,3,4]],["COL","Colombia",88.89,[20210502,2,3,2,3,2,3,2,4,3]],["BGD","Bangladesh",88.89,[20210426,3,1,2,4,2,2,2,4,3]],["MNG","Mongolia",96.3,[20210503,3,3,2,4,2,2,2,4,4]]];