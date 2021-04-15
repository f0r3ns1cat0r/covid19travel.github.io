const dataUpdate="2021.04.15";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3};var data=[["AFG","Afghanistan",8.33,[20210406,0,0,0,0,0,0,0,1,2]],["NIC","Nicaragua",8.33,[20210322,0,0,0,0,0,0,0,1,2]],["TZA","Tanzania",8.33,[20210412,0,0,0,0,0,0,0,1,1]],["CAF","Central African Republic",12.96,[20210404,0,0,0,0,0,1,0,2,2]],["TCD","Chad",16.67,[20210406,0,0,0,0,0,0,0,2,4]],["LAO","Laos",16.67,[20210412,0,0,0,0,0,0,0,2,4]],["BDI","Burundi",16.67,[20210404,0,0,0,0,0,0,0,2,1]],["NPL","Nepal",16.67,[20210412,0,0,0,0,0,0,0,2,4]],["SEN","Senegal",19.44,[20210406,0,0,0,0,0,0,0,3,4]],["BLR","Belarus",22.22,[20210412,0,0,0,0,0,0,0,4,3]],["VUT","Vanuatu",22.22,[20210413,0,0,0,0,0,0,0,4,0]],["KIR","Kiribati",22.22,[20210413,0,0,0,0,0,0,0,4,0]],["NZL","New Zealand",22.22,[20210411,0,0,0,0,0,0,0,4,2]],["MAC","Macao",23.15,[20210412,1,0,0,0,0,0,0,3,2]],["TWN","Taiwan",25.0,[20210405,0,0,1,0,0,0,0,3,2]],["CIV","Cote d'Ivoire",25.93,[20210411,0,0,0,0,0,1,0,4,4]],["BOL","Bolivia",27.78,[20210412,2,0,0,0,0,0,0,4,4]],["COD","Democratic Republic of Congo",28.7,[20210405,0,0,2,1,1,1,1,1,3]],["YEM","Yemen",28.7,[20210412,0,1,1,0,0,2,1,3,1]],["DMA","Dominica",29.63,[20210413,1,0,0,2,0,1,0,2,2]],["BFA","Burkina Faso",30.56,[20210409,0,0,0,0,0,0,2,4,3]],["LKA","Sri Lanka",31.48,[20210412,0,2,1,0,0,1,0,2,3]],["TJK","Tajikistan",31.48,[20210412,1,0,0,3,0,0,0,3,4]],["KGZ","Kyrgyz Republic",31.94,[20210404,1,2,0,3,0,0,0,1,3]],["GMB","Gambia",33.33,[20210412,0,0,1,4,0,0,0,2,3]],["MRT","Mauritania",33.33,[20210406,1,1,1,1,0,1,0,1,3]],["SLB","Solomon Islands",33.33,[20210411,0,0,1,0,1,0,1,3,0]],["DJI","Djibouti",34.26,[20210405,0,1,1,4,0,0,0,1,3]],["NER","Niger",34.26,[20210412,0,1,1,3,0,0,0,2,2]],["MDG","Madagascar",34.26,[20210405,1,0,1,2,0,0,0,3,4]],["CMR","Cameroon",35.19,[20210411,1,1,1,3,0,0,0,1,3]],["RUS","Russia",36.57,[20210404,0,1,2,3,0,0,0,3,2]],["GRL","Greenland",37.04,[20210412,1,0,1,2,0,0,0,4,2]],["UZB","Uzbekistan",37.04,[20210411,1,0,1,3,0,0,0,3,3]],["HTI","Haiti",37.96,[20210412,0,0,0,3,1,2,0,2,3]],["ZMB","Zambia",39.81,[20210411,0,0,2,4,0,1,0,1,3]],["ETH","Ethiopia",39.81,[20210414,1,0,1,3,1,0,0,2,3]],["BEN","Benin",39.81,[20210411,0,0,0,3,1,1,0,4,4]],["SOM","Somalia",40.74,[20210405,3,1,1,3,0,1,0,1,3]],["BRN","Brunei",40.74,[20210413,1,1,1,2,0,0,0,4,2]],["LBR","Liberia",40.74,[20210412,0,2,1,3,1,0,0,1,3]],["SLV","El Salvador",42.59,[20210329,3,1,1,0,0,0,1,3,4]],["BIH","Bosnia and Herzegovina",42.59,[20210408,1,2,1,3,0,2,0,1,3]],["NAM","Namibia",42.59,[20210412,1,1,1,3,0,2,0,1,3]],["GUM","Guam",44.44,[20210405,1,1,2,3,0,1,0,1,3]],["NGA","Nigeria",45.37,[20210411,1,1,1,3,0,2,0,2,3]],["JPN","Japan",45.37,[20210409,1,1,1,1,0,1,1,4,1]],["VIR","United States Virgin Islands",46.3,[20210405,2,2,1,2,0,1,0,2,3]],["AUS","Australia",46.76,[20210409,1,1,1,3,1,0,2,4,3]],["THA","Thailand",47.22,[20210408,1,1,2,4,1,1,1,2,2]],["GHA","Ghana",47.22,[20210412,0,2,2,3,0,0,0,4,4]],["MEX","Mexico",47.22,[20210411,3,2,1,0,1,1,2,1,4]],["COG","Congo",47.22,[20210412,0,1,1,3,0,2,1,2,3]],["TON","Tonga",47.22,[20210405,1,0,1,3,0,2,0,4,0]],["SDN","Sudan",47.69,[20210404,3,1,2,4,0,0,0,2,3]],["ZAF","South Africa",48.15,[20210405,1,1,1,3,1,2,0,1,3]],["FRO","Faeroe Islands",48.15,[20210412,1,2,1,2,0,1,1,2,1]],["MWI","Malawi",48.15,[20210411,0,2,1,3,1,2,0,1,3]],["MLI","Mali",48.15,[20210406,1,2,2,3,0,1,0,1,3]],["SAU","Saudi Arabia",50.0,[20210412,3,0,2,3,0,0,0,3,3]],["ISR","Israel",50.93,[20210409,2,1,1,3,1,0,0,4,3]],["SGP","Singapore",50.93,[20210412,1,2,1,4,0,1,0,3,4]],["SLE","Sierra Leone",50.93,[20210412,1,2,2,2,1,1,0,1,3]],["EGY","Egypt",50.93,[20210329,2,2,2,4,0,0,0,1,4]],["FIN","Finland",52.31,[20210409,2,2,2,4,0,1,0,3,2]],["AND","Andorra",52.78,[20210405,1,2,2,4,1,0,0,1,3]],["HRV","Croatia",52.78,[20210412,2,1,1,4,1,0,0,3,3]],["UGA","Uganda",52.78,[20210409,2,2,1,2,1,2,0,1,3]],["TUN","Tunisia",53.7,[20210408,1,1,1,4,1,2,0,2,4]],["FJI","Fiji",53.7,[20210411,0,2,1,3,1,2,0,3,1]],["CPV","Cape Verde",53.7,[20210405,2,2,2,4,0,1,1,1,3]],["BGR","Bulgaria",53.7,[20210414,2,2,2,3,0,0,0,3,3]],["LUX","Luxembourg",53.7,[20210405,1,1,1,3,1,2,0,3,2]],["ARE","United Arab Emirates",53.7,[20210412,1,2,2,4,0,0,2,2,3]],["SMR","San Marino",54.63,[20210414,2,1,1,4,0,2,1,1,4]],["MCO","Monaco",54.63,[20210411,1,2,2,4,0,2,0,1,3]],["GTM","Guatemala",54.63,[20210405,2,2,2,4,1,0,0,2,3]],["LBY","Libya",55.56,[20210329,1,2,2,4,0,2,2,2,3]],["MOZ","Mozambique",55.56,[20210412,1,1,2,3,1,3,0,1,3]],["PAK","Pakistan",56.02,[20210404,2,3,2,4,0,3,0,1,4]],["ABW","Aruba",56.48,[20210322,0,2,2,4,0,2,0,3,3]],["LVA","Latvia",56.48,[20210411,2,2,2,4,0,0,0,3,3]],["BHR","Bahrain",56.48,[20210406,1,2,2,3,0,1,1,2,3]],["VNM","Vietnam",56.94,[20210412,1,1,1,3,1,1,1,4,3]],["USA","United States",56.94,[20210412,2,1,1,4,1,1,1,3,4]],["ZWE","Zimbabwe",57.41,[20210410,1,2,2,3,1,2,0,1,3]],["ISL","Iceland",57.41,[20210412,3,2,2,4,1,0,0,-1,3]],["SYR","Syria",57.87,[20210412,2,3,2,3,0,2,2,1,3]],["KOR","South Korea",58.33,[20210409,1,1,2,4,0,1,1,3,3]],["SRB","Serbia",58.33,[20210412,3,2,2,4,0,1,0,1,3]],["AGO","Angola",59.26,[20210405,1,1,1,4,1,2,1,2,3]],["GUY","Guyana",60.19,[20210405,2,1,2,4,0,2,0,3,3]],["CHE","Switzerland",60.19,[20210414,2,2,2,4,0,1,0,3,3]],["SWZ","Eswatini",60.19,[20210405,2,1,2,4,0,2,1,1,4]],["LSO","Lesotho",60.19,[20210412,2,1,2,4,0,2,0,3,4]],["ALB","Albania",60.19,[20210405,2,1,2,4,0,2,0,3,4]],["LTU","Lithuania",61.11,[20210412,2,2,2,4,0,2,1,2,2]],["EST","Estonia",61.11,[20210410,2,3,2,4,0,1,0,2,2]],["GIN","Guinea",61.11,[20210406,1,2,2,4,0,2,2,1,3]],["BWA","Botswana",62.04,[20210412,1,1,2,4,0,2,2,1,3]],["TKM","Turkmenistan",62.04,[20210405,1,3,2,1,0,0,2,4,4]],["CRI","Costa Rica",62.04,[20210411,1,2,2,3,1,1,2,1,3]],["PRI","Puerto Rico",62.96,[20210405,1,2,2,3,1,2,1,3,3]],["ROU","Romania",63.89,[20210412,2,1,1,4,0,2,2,3,4]],["KEN","Kenya",63.89,[20210411,1,2,2,3,1,2,2,1,3]],["MYS","Malaysia",64.35,[20210405,1,3,2,4,0,2,2,3,3]],["TTO","Trinidad and Tobago",64.81,[20210329,2,2,2,4,1,0,0,4,4]],["DNK","Denmark",64.81,[20210409,3,2,2,4,0,1,0,4,2]],["DOM","Dominican Republic",64.81,[20210411,3,2,2,3,1,2,-1,1,3]],["TGO","Togo",64.81,[20210412,2,2,2,3,0,1,2,4,4]],["GEO","Georgia",64.81,[20210411,0,2,2,4,0,2,2,2,3]],["PRY","Paraguay",64.81,[20210410,3,2,1,3,2,2,0,1,3]],["ECU","Ecuador",65.28,[20210412,2,2,2,4,1,2,1,4,3]],["KAZ","Kazakhstan",65.74,[20210412,2,1,2,4,1,1,2,3,4]],["SWE","Sweden",65.74,[20210409,1,2,2,4,1,1,1,3,2]],["SYC","Seychelles",65.74,[20210412,2,2,2,4,1,1,1,1,3]],["PRT","Portugal",65.74,[20210408,2,2,2,4,1,1,0,3,3]],["MDA","Moldova",65.74,[20210405,3,3,2,4,1,2,1,1,3]],["UKR","Ukraine",66.67,[20210412,3,3,2,3,2,1,1,1,2]],["BHS","Bahamas",68.06,[20210413,2,2,2,4,1,2,2,3,3]],["KHM","Cambodia",68.52,[20210412,3,2,2,3,0,2,2,2,3]],["GAB","Gabon",68.52,[20210405,1,2,2,3,1,2,2,2,3]],["PAN","Panama",68.52,[20210409,3,2,2,3,1,2,0,3,4]],["IDN","Indonesia",68.98,[20210408,3,2,2,4,1,2,2,3,4]],["CYP","Cyprus",69.44,[20210406,2,2,1,4,1,2,1,3,3]],["ESP","Spain",69.44,[20210409,1,2,2,4,0,2,2,3,4]],["IND","India",69.91,[20210412,3,2,2,4,0,3,2,3,4]],["NOR","Norway",69.91,[20210411,2,3,2,4,1,1,1,3,2]],["SUR","Suriname",70.37,[20210404,3,2,2,4,0,2,0,4,4]],["HUN","Hungary",70.37,[20210414,3,2,2,4,0,2,0,4,3]],["KWT","Kuwait",70.37,[20210405,3,2,2,2,1,2,1,2,3]],["BRA","Brazil",70.83,[20210319,3,3,2,4,1,3,2,1,4]],["MLT","Malta",71.3,[20210412,2,3,2,4,0,0,2,3,4]],["HKG","Hong Kong",71.3,[20210412,2,2,2,4,1,1,1,3,2]],["RWA","Rwanda",71.3,[20210409,1,2,2,4,1,2,2,2,3]],["ARG","Argentina",71.76,[20210405,1,2,2,4,2,2,2,3,3]],["TUR","Turkey",72.22,[20210411,2,2,2,3,1,2,1,3,4]],["SSD","South Sudan",72.22,[20210412,2,2,2,4,1,2,1,2,3]],["AZE","Azerbaijan",72.22,[20210405,3,1,2,4,2,1,0,4,4]],["BTN","Bhutan",72.22,[20210411,0,2,2,4,1,1,2,4,4]],["IRQ","Iraq",73.15,[20210330,3,2,2,4,0,2,2,1,4]],["BLZ","Belize",73.15,[20210411,3,2,2,4,1,2,1,1,3]],["BRB","Barbados",74.07,[20210404,3,3,2,4,1,2,0,2,3]],["JAM","Jamaica",74.07,[20210410,1,2,2,4,1,2,2,2,3]],["PNG","Papua New Guinea",74.07,[20210413,2,2,2,4,1,1,2,2,2]],["SVK","Slovak Republic",74.07,[20210404,3,2,2,4,0,2,2,2,4]],["BMU","Bermuda",74.07,[20210401,3,3,2,4,1,2,0,2,2]],["DEU","Germany",75.0,[20210409,3,2,2,4,1,2,1,3,2]],["NLD","Netherlands",75.0,[20210408,2,2,2,4,1,2,1,3,2]],["CAN","Canada",75.46,[20210409,3,3,2,4,1,2,2,4,3]],["BEL","Belgium",75.93,[20210409,3,2,2,4,1,2,0,4,3]],["MMR","Myanmar",75.93,[20210412,3,3,2,4,1,2,1,4,4]],["JOR","Jordan",75.93,[20210411,3,2,2,3,1,2,1,3,3]],["GBR","United Kingdom",75.93,[20210411,2,3,2,4,1,2,2,3,3]],["RKS","Kosovo",75.93,[20210412,2,3,2,4,1,2,2,2,4]],["MAR","Morocco",76.85,[20210411,1,2,2,4,1,2,2,3,3]],["AUT","Austria",77.31,[20210409,3,3,2,4,1,2,2,3,3]],["DZA","Algeria",77.78,[20210405,1,2,2,4,2,2,2,4,3]],["CHN","China",78.24,[20210412,3,2,2,4,2,3,2,3,2]],["FRA","France",78.7,[20210409,2,3,2,4,0,2,2,3,4]],["POL","Poland",78.7,[20210409,3,3,2,4,1,1,1,3,2]],["CHL","Chile",79.17,[20210329,3,3,2,4,1,3,2,3,2]],["TLS","Timor-Leste",79.63,[20210410,3,3,2,4,2,0,2,4,4]],["PSE","Palestine",79.63,[20210405,2,1,2,4,1,2,2,4,3]],["CUB","Cuba",79.63,[20210412,3,3,2,4,2,2,2,2,3]],["SVN","Slovenia",79.63,[20210406,3,3,2,4,0,2,2,2,4]],["ITA","Italy",80.56,[20210409,2,3,2,4,1,2,2,3,4]],["PHL","Philippines",81.02,[20210412,3,3,2,4,1,2,2,4,4]],["COL","Colombia",81.48,[20210412,2,3,2,3,2,3,2,4,3]],["CZE","Czech Republic",81.48,[20210411,3,2,2,4,1,2,2,3,3]],["IRN","Iran",81.48,[20210411,3,3,2,4,1,2,2,3,3]],["HND","Honduras",82.41,[20210329,3,3,2,4,0,2,2,3,3]],["PER","Peru",83.33,[20210405,2,3,2,4,2,3,2,2,4]],["BGD","Bangladesh",83.33,[20210412,3,1,2,4,2,2,2,2,3]],["IRL","Ireland",84.26,[20210409,2,3,2,4,1,2,2,3,3]],["OMN","Oman",85.19,[20210411,3,3,2,4,2,2,1,2,3]],["QAT","Qatar",85.19,[20210412,3,3,2,4,2,2,1,2,4]],["ERI","Eritrea",85.19,[20210411,2,2,2,4,2,1,2,4,3]],["URY","Uruguay",87.04,[20210330,3,3,2,4,1,1,2,4,2]],["VEN","Venezuela",87.96,[20210412,3,3,2,4,1,2,2,3,4]],["GRC","Greece",87.96,[20210411,3,3,2,4,1,2,2,3,4]],["MNG","Mongolia",87.96,[20210412,3,3,2,4,1,2,2,4,3]],["LBN","Lebanon",92.59,[20210322,3,2,2,4,2,2,2,4,3]],["MUS","Mauritius",96.3,[20210412,3,3,2,4,2,2,2,4,3]]];