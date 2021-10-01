const dataUpdate="2021.10.01";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210906,0,0,0,0,0,0,0,1,2],[1.55,"="]],["ABW","Aruba",8.8,[20210928,1,0,0,3,0,0,0,0,-1],[19.94,"-"]],["PRI","Puerto Rico",12.04,[20210926,1,0,1,0,0,0,0,1,3],[]],["FRO","Faeroe Islands",13.89,[20210927,0,0,0,0,0,0,0,1,0],[26.9,"+"]],["BFA","Burkina Faso",13.89,[20210927,0,0,0,0,0,0,0,1,4],[0.1,"+"]],["SDN","Sudan",13.89,[20210911,0,0,0,0,0,0,0,1,4],[0.07,"+"]],["GMB","Gambia",13.89,[20210927,0,0,0,0,0,0,0,1,4],[0.2,"="]],["BDI","Burundi",15.74,[20210926,0,2,0,0,0,0,0,1,1],[1.65,"+"]],["CIV","Cote d'Ivoire",17.59,[20210924,0,0,0,0,0,1,0,1,4],[0.38,"-"]],["TZA","Tanzania",17.59,[20210928,1,0,0,0,0,0,0,1,1],[0.0,"="]],["AFG","Afghanistan",18.52,[20210915,2,0,0,0,0,0,0,4,0],[0.14,"="]],["NER","Niger",19.44,[20210914,0,0,2,1,0,0,0,2,3],[0.02,"="]],["BLR","Belarus",19.44,[20210920,0,0,0,0,0,0,0,3,2],[20.92,"+"]],["BGR","Bulgaria",20.37,[20210831,0,1,0,0,0,0,0,2,3],[26.19,"+"]],["EST","Estonia",22.22,[20210927,0,0,1,1,0,0,0,1,2],[47.13,"+"]],["VUT","Vanuatu",22.22,[20210927,0,0,0,0,0,0,0,4,0],[0.0,"="]],["DNK","Denmark",24.07,[20210927,1,1,0,0,0,0,0,2,3],[7.03,"+"]],["LTU","Lithuania",25.0,[20210928,0,0,1,1,0,0,0,2,2],[54.79,"-"]],["SSD","South Sudan",25.0,[20210926,0,0,0,3,0,0,0,2,2],[0.14,"-"]],["LIE","Liechtenstein",25.0,[20210924,1,1,1,0,0,1,0,3,3],[4.12,"-"]],["COG","Congo",25.0,[20210927,0,0,1,3,0,2,0,2,3],[0.6,"="]],["TCD","Chad",25.0,[20210913,0,0,0,3,0,0,0,2,4],[0.01,"="]],["CAF","Central African Republic",27.78,[20210920,0,0,0,0,0,3,0,2,3],[0.09,"="]],["HUN","Hungary",27.78,[20210919,0,0,1,3,0,0,0,1,2],[4.67,"+"]],["SYR","Syria",28.7,[20210906,3,1,0,0,0,0,0,1,2],[2.01,"-"]],["GHA","Ghana",29.17,[20210919,0,0,2,3,0,0,0,1,4],[0.61,"+"]],["SLE","Sierra Leone",29.63,[20210927,1,1,0,0,1,0,0,2,3],[0.0,"="]],["MDA","Moldova",29.63,[20210917,1,1,0,2,0,0,0,2,3],[27.82,"+"]],["MEX","Mexico",29.63,[20210919,0,2,1,0,1,1,1,1,4],[6.12,"-"]],["TJK","Tajikistan",29.63,[20210920,1,1,0,0,0,0,0,4,3],[0.0,"="]],["GRL","Greenland",30.09,[20210912,1,0,1,3,0,0,0,1,2],[8.81,"-"]],["MAC","Macao",31.48,[20210911,1,0,0,4,0,0,0,2,2],[]],["MWI","Malawi",31.48,[20210927,0,1,1,3,0,0,0,1,3],[0.09,"="]],["SLV","El Salvador",32.41,[20210920,1,1,2,1,0,0,0,1,4],[5.12,"="]],["CZE","Czech Republic",32.41,[20210920,1,1,1,1,0,0,0,2,2],[4.69,"+"]],["HRV","Croatia",33.8,[20210830,1,1,1,3,0,0,0,1,3],[28.95,"+"]],["LUX","Luxembourg",34.26,[20210926,0,1,1,2,0,0,0,3,2],[12.12,"-"]],["CMR","Cameroon",34.26,[20210927,0,1,1,3,0,0,0,2,3],[3.71,"="]],["EGY","Egypt",35.19,[20210921,1,1,1,4,0,0,0,0,3],[0.67,"="]],["SVN","Slovenia",35.19,[20210927,1,1,1,3,0,0,0,1,3],[41.82,"+"]],["YEM","Yemen",35.19,[20210924,1,1,1,0,0,2,1,2,2],[0.11,"-"]],["BIH","Bosnia and Herzegovina",35.19,[20210830,1,1,1,3,0,0,0,1,2],[19.87,"+"]],["VIR","United States Virgin Islands",35.19,[20210927,1,1,1,3,1,0,0,1,3],[]],["SOM","Somalia",35.19,[20210920,0,1,1,3,0,1,0,1,3],[0.36,"-"]],["SVK","Slovak Republic",36.11,[20210919,1,1,1,3,0,0,0,2,2],[17.21,"+"]],["SRB","Serbia",36.11,[20210921,1,1,1,2,0,1,0,1,2],[80.06,"+"]],["TUN","Tunisia",36.11,[20210927,1,1,1,1,0,1,0,2,3],[4.99,"+"]],["FIN","Finland",36.57,[20210927,1,1,1,4,0,1,0,2,1],[8.98,"+"]],["TWN","Taiwan",36.57,[20210927,0,1,1,3,1,0,1,2,4],[0.03,"="]],["SWE","Sweden",37.04,[20210925,0,0,1,3,0,1,0,3,0],[6.0,"+"]],["MNG","Mongolia",37.04,[20210927,1,2,1,3,0,1,1,1,4],[73.07,"="]],["PNG","Papua New Guinea",37.04,[20210918,0,1,0,0,1,0,2,2,4],[1.66,"+"]],["KIR","Kiribati",37.5,[20210930,0,0,0,4,0,2,0,4,0],[0.0,"="]],["ALB","Albania",37.96,[20210820,2,1,1,3,0,2,0,0,2],[21.18,"-"]],["COD","Democratic Republic of Congo",37.96,[20210926,0,1,1,3,0,2,2,1,3],[0.08,"+"]],["LVA","Latvia",37.96,[20210927,1,1,1,3,0,0,0,2,2],[42.4,"+"]],["POL","Poland",38.89,[20210924,1,1,1,2,0,1,0,2,2],[2.34,"+"]],["SEN","Senegal",38.89,[20210926,1,1,1,1,1,1,1,1,1],[0.06,"="]],["NOR","Norway",38.89,[20210924,1,1,1,0,1,1,0,2,1],[10.81,"-"]],["SLB","Solomon Islands",38.89,[20210913,-1,0,1,0,0,0,2,4,1],[0.0,"="]],["BOL","Bolivia",39.35,[20210927,2,1,1,1,1,2,1,2,4],[2.59,"+"]],["BHR","Bahrain",39.35,[20210905,0,2,2,3,0,1,0,2,4],[3.72,"-"]],["BWA","Botswana",39.81,[20210928,0,2,0,0,0,2,2,1,3],[16.97,"-"]],["MCO","Monaco",40.74,[20210930,1,1,1,4,0,0,0,2,2],[5.1,"="]],["KWT","Kuwait",40.74,[20210921,3,1,2,-1,0,0,0,2,3],[0.99,"+"]],["GBR","United Kingdom",41.2,[20210924,1,2,1,3,1,0,0,3,3],[50.89,"-"]],["MUS","Mauritius",41.67,[20210925,1,2,1,3,0,0,0,2,3],[9.35,"+"]],["NLD","Netherlands",41.67,[20210924,1,2,1,0,1,0,0,3,2],[9.9,"-"]],["NAM","Namibia",41.67,[20210928,0,1,1,2,1,2,0,1,2],[2.91,"+"]],["ISL","Iceland",41.67,[20210927,2,1,1,2,0,0,0,3,2],[8.67,"-"]],["ESP","Spain",42.13,[20210926,1,1,2,4,0,0,0,2,2],[4.66,"-"]],["ARE","United Arab Emirates",42.13,[20210930,1,1,1,3,1,0,0,2,2],[2.92,"-"]],["PRY","Paraguay",42.59,[20210926,1,1,1,2,0,2,0,2,3],[0.43,"-"]],["MRT","Mauritania",42.59,[20210920,1,1,2,0,0,2,0,2,3],[0.96,"-"]],["BEL","Belgium",43.06,[20210927,1,2,1,4,0,0,0,3,3],[16.56,"-"]],["MLT","Malta",43.52,[20210927,1,1,1,4,0,0,0,3,3],[3.27,"+"]],["CYP","Cyprus",43.52,[20210927,1,1,1,3,1,0,0,2,3],[9.55,"+"]],["ETH","Ethiopia",43.52,[20210927,1,1,1,3,1,0,0,2,3],[0.92,"-"]],["ZMB","Zambia",43.52,[20210927,0,2,2,3,0,0,0,2,3],[0.26,"+"]],["TON","Tonga",43.52,[20210919,0,0,1,3,0,2,0,4,2],[]],["KGZ","Kyrgyz Republic",44.44,[20210919,2,0,2,4,0,0,1,1,2],[1.09,"-"]],["IRL","Ireland",44.44,[20210924,1,1,1,3,0,1,0,3,3],[26.65,"-"]],["CHE","Switzerland",44.44,[20210930,1,1,1,3,0,1,0,3,2],[14.0,"-"]],["LBR","Liberia",44.44,[20210927,1,2,1,3,1,0,0,1,3],[-0.33,"="]],["ZAF","South Africa",45.37,[20210922,1,1,1,2,1,2,0,1,3],[2.55,"+"]],["MDG","Madagascar",46.3,[20210927,0,2,1,2,0,2,0,4,3],[0.0,"="]],["BMU","Bermuda",47.22,[20210920,1,1,1,3,1,1,0,2,2],[101.85,"="]],["KOR","South Korea",47.22,[20210924,2,2,2,4,0,0,0,2,3],[5.19,"+"]],["SUR","Suriname",47.22,[20210927,2,2,2,3,0,2,0,2,4],[60.66,"-"]],["NGA","Nigeria",47.22,[20210919,0,2,1,3,1,1,0,2,2],[0.16,"-"]],["GEO","Georgia",47.22,[20210927,2,1,2,4,0,0,0,1,3],[39.2,"+"]],["SGP","Singapore",47.22,[20210925,1,1,1,4,0,1,0,3,4],[33.36,"+"]],["MOZ","Mozambique",48.15,[20210923,0,1,2,3,1,2,0,1,3],[0.16,"-"]],["SMR","San Marino",50.0,[20210913,1,1,1,3,1,1,1,1,1],[5.89,"-"]],["LAO","Laos",50.0,[20210913,2,2,1,3,1,1,1,1,3],[6.28,"-"]],["ROU","Romania",50.0,[20210927,1,1,1,4,1,1,1,2,4],[45.07,"+"]],["MLI","Mali",50.93,[20210919,1,3,2,3,0,0,0,2,3],[0.07,"+"]],["GUM","Guam",50.93,[20210927,3,1,1,3,1,0,0,2,3],[]],["ERI","Eritrea",50.93,[20210927,0,0,2,3,1,1,0,4,3],[0.17,"+"]],["ISR","Israel",50.93,[20210929,2,2,2,3,1,0,0,4,-1],[45.99,"-"]],["TGO","Togo",50.93,[20210913,0,0,2,3,0,1,2,2,4],[0.76,"-"]],["COL","Colombia",51.39,[20210926,3,1,1,3,2,2,1,1,3],[2.94,"-"]],["BRA","Brazil",51.39,[20210916,2,2,1,3,1,2,2,1,4],[7.99,"+"]],["LBY","Libya",51.85,[20210921,2,0,2,4,1,0,0,2,3],[10.46,"-"]],["AND","Andorra",51.85,[20210930,1,1,2,4,1,0,0,2,2],[12.2,"+"]],["OMN","Oman",51.85,[20210926,0,1,2,4,1,1,0,2,4],[0.61,"-"]],["SAU","Saudi Arabia",51.85,[20210927,1,1,2,3,1,0,0,3,3],[0.16,"+"]],["NPL","Nepal",52.31,[20210927,1,1,1,4,1,1,1,2,4],[3.08,"-"]],["RUS","Russia",52.31,[20210927,0,2,2,3,0,1,2,2,3],[14.93,"+"]],["JPN","Japan",52.31,[20210924,2,2,1,2,0,1,1,4,1],[1.51,"-"]],["DZA","Algeria",52.78,[20210920,2,1,2,4,1,2,0,1,3],[0.35,"="]],["RKS","Kosovo",52.78,[20210927,1,1,1,4,1,1,0,3,3],[3.62,"-"]],["BGD","Bangladesh",52.78,[20210919,1,0,2,4,0,2,0,3,4],[0.66,"-"]],["PRT","Portugal",52.78,[20210930,1,2,2,4,0,0,0,3,2],[6.17,"-"]],["URY","Uruguay",52.78,[20210926,1,1,1,2,1,1,1,4,2],[3.03,"-"]],["BHS","Bahamas",54.17,[20210916,2,2,1,4,0,2,2,1,4],[25.28,"="]],["DJI","Djibouti",54.63,[20210925,1,1,2,4,2,0,0,1,4],[8.07,"+"]],["PSE","Palestine",54.63,[20210927,0,2,2,4,0,0,2,2,4],[]],["RWA","Rwanda",54.63,[20210927,1,2,1,3,1,2,0,2,3],[1.3,"-"]],["TLS","Timor-Leste",54.63,[20210913,0,2,2,3,2,1,2,2,3],[2.54,"-"]],["CRI","Costa Rica",54.63,[20210926,2,2,2,2,0,1,1,1,3],[38.01,"-"]],["PAK","Pakistan",55.09,[20210925,2,2,1,2,2,1,1,3,3],[0.76,"-"]],["THA","Thailand",55.09,[20210920,3,2,2,3,0,2,2,2,3],[16.14,"-"]],["QAT","Qatar",55.56,[20210922,1,1,1,4,1,1,1,2,4],[3.11,"-"]],["BLZ","Belize",56.48,[20210920,3,2,1,4,0,2,0,1,4],[49.29,"-"]],["DEU","Germany",56.48,[20210926,1,2,2,3,1,1,0,2,2],[9.57,"+"]],["KEN","Kenya",56.94,[20210927,0,2,2,4,0,2,2,3,4],[0.47,"-"]],["AGO","Angola",56.94,[20210920,0,2,1,3,1,1,2,3,3],[1.19,"-"]],["JOR","Jordan",57.41,[20210830,1,1,1,3,1,2,1,3,2],[9.01,"+"]],["UKR","Ukraine",58.33,[20210927,2,1,1,3,2,0,2,1,3],[18.44,"+"]],["BEN","Benin",58.33,[20210927,0,2,2,3,1,1,0,4,4],[2.88,"="]],["AZE","Azerbaijan",58.33,[20210927,2,2,2,2,1,1,0,4,2],[8.9,"-"]],["ECU","Ecuador",58.8,[20210927,2,1,2,4,1,1,1,2,3],[1.8,"="]],["UZB","Uzbekistan",59.26,[20210913,1,0,2,3,1,0,2,3,3],[1.44,"-"]],["CPV","Cape Verde",59.26,[20210917,1,2,2,4,0,1,2,1,3],[7.35,"-"]],["HKG","Hong Kong",59.26,[20210913,1,2,1,4,1,1,1,2,2],[0.09,"="]],["SWZ","Eswatini",59.26,[20210927,1,1,1,3,1,2,2,1,4],[3.58,"-"]],["MAR","Morocco",59.26,[20210822,0,2,1,4,1,2,1,2,3],[2.93,"-"]],["AUT","Austria",60.19,[20210924,2,2,1,3,1,0,2,3,2],[20.13,"+"]],["LSO","Lesotho",60.19,[20210927,1,2,2,4,1,2,0,1,3],[0.0,"="]],["GIN","Guinea",60.19,[20210920,1,1,2,3,0,2,2,2,3],[0.1,"="]],["GRC","Greece",60.65,[20210911,1,2,2,3,1,2,1,3,2],[20.21,"+"]],["PER","Peru",61.11,[20210926,2,2,2,4,1,2,1,3,4],[2.09,"-"]],["TKM","Turkmenistan",61.11,[20210927,1,2,2,4,0,0,2,4,3],[]],["GAB","Gabon",61.11,[20210930,1,0,2,3,1,2,2,1,3],[9.17,"+"]],["USA","United States",61.57,[20210928,2,2,2,4,1,1,2,3,3],[33.83,"-"]],["BTN","Bhutan",62.96,[20210927,2,2,1,3,1,1,1,3,3],[0.04,"="]],["CHL","Chile",63.43,[20210925,2,3,2,3,1,2,2,2,3],[3.63,"="]],["TUR","Turkey",63.89,[20210927,1,2,2,0,2,0,2,3,4],[27.84,"+"]],["LBN","Lebanon",64.81,[20210926,0,2,1,3,2,2,2,1,3],[7.7,"+"]],["HTI","Haiti",64.81,[20210917,1,1,2,4,1,2,1,2,3],[0.24,"-"]],["ZWE","Zimbabwe",65.74,[20210923,1,2,2,3,1,2,1,2,3],[1.62,"="]],["DOM","Dominican Republic",65.74,[20210924,1,1,2,4,1,2,2,1,4],[3.59,"+"]],["GUY","Guyana",65.74,[20210926,1,2,2,4,1,2,0,3,4],[25.12,"-"]],["MMR","Myanmar",66.2,[20210927,3,2,2,4,1,2,1,2,4],[2.8,"-"]],["GTM","Guatemala",66.2,[20210920,3,1,2,4,2,2,0,3,4],[14.59,"-"]],["FRA","France",66.67,[20210925,1,2,2,3,1,0,2,3,3],[8.18,"-"]],["BRB","Barbados",67.59,[20210925,3,2,2,3,1,2,0,2,3],[65.42,"+"]],["CAN","Canada",68.06,[20210924,3,3,2,4,0,1,2,3,3],[11.07,"-"]],["IDN","Indonesia",68.98,[20210927,3,2,2,4,1,2,2,3,4],[0.71,"-"]],["ITA","Italy",68.98,[20210924,2,2,2,2,1,2,2,3,3],[5.3,"+"]],["KHM","Cambodia",69.44,[20210918,2,3,2,4,0,2,2,2,3],[5.15,"+"]],["IRN","Iran",69.91,[20210920,2,3,2,4,0,0,2,3,3],[15.89,"-"]],["IND","India",70.83,[20210907,2,2,2,4,2,2,2,3,4],[1.78,"-"]],["CUB","Cuba",71.76,[20210919,3,2,2,4,2,2,2,2,4],[56.94,"-"]],["AUS","Australia",71.76,[20210924,2,3,2,4,1,2,2,4,3],[7.42,"+"]],["DMA","Dominica",72.22,[20210922,1,3,2,4,1,2,1,2,3],[56.36,"+"]],["VNM","Vietnam",72.69,[20210928,2,2,2,4,2,2,2,3,3],[9.15,"+"]],["HND","Honduras",75.0,[20210913,3,3,2,4,0,2,2,1,3],[6.44,"="]],["PHL","Philippines",75.46,[20210926,3,2,2,4,1,2,2,3,4],[15.02,"-"]],["IRQ","Iraq",75.93,[20210925,3,2,2,3,0,2,2,3,4],[5.67,"-"]],["ARG","Argentina",75.93,[20210926,1,2,2,4,2,2,2,4,3],[3.13,"-"]],["CHN","China",76.39,[20210917,3,3,2,4,1,3,2,2,2],[0.0,"="]],["PAN","Panama",77.31,[20210927,2,3,2,4,2,3,2,2,4],[5.44,"-"]],["KAZ","Kazakhstan",79.17,[20210926,2,2,2,4,2,2,2,3,3],[11.69,"-"]],["BRN","Brunei",79.63,[20210930,3,3,2,4,1,2,0,4,4],[49.96,"+"]],["LKA","Sri Lanka",80.56,[20210927,3,1,2,4,2,2,2,2,4],[4.89,"-"]],["MYS","Malaysia",80.56,[20210719,0,3,2,4,2,2,2,3,3],[39.29,"-"]],["NZL","New Zealand",81.02,[20210927,3,3,2,4,2,2,2,4,3],[0.44,"+"]],["UGA","Uganda",81.48,[20210926,3,2,2,3,2,2,2,1,3],[0.31,"+"]],["TTO","Trinidad and Tobago",83.33,[20210920,2,2,2,4,2,2,2,2,4],[12.93,"-"]],["SYC","Seychelles",84.26,[20210927,3,2,2,4,1,2,2,3,3],[42.56,"="]],["FJI","Fiji",86.11,[20210913,3,3,2,4,1,2,2,4,2],[9.18,"-"]],["VEN","Venezuela",86.11,[20210815,3,3,2,4,1,3,1,3,4],[5.28,"+"]],["JAM","Jamaica",88.89,[20210927,3,3,2,4,2,3,2,2,4],[11.3,"-"]]];