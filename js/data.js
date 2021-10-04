const dataUpdate="2021.10.04";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210906,0,0,0,0,0,0,0,1,2],[1.55,"="]],["SWE","Sweden",8.33,[20211003,0,0,0,0,0,0,0,3,-1],[6.01,"="]],["PRI","Puerto Rico",12.04,[20210926,1,0,1,0,0,0,0,1,3],[]],["SDN","Sudan",13.89,[20210911,0,0,0,0,0,0,0,1,4],[0.07,"="]],["FRO","Faeroe Islands",13.89,[20210927,0,0,0,0,0,0,0,1,0],[27.77,"="]],["GMB","Gambia",13.89,[20210927,0,0,0,0,0,0,0,1,4],[0.03,"-"]],["BDI","Burundi",13.89,[20211003,0,0,1,0,0,0,0,1,1],[2.3,"="]],["BFA","Burkina Faso",13.89,[20210927,0,0,0,0,0,0,0,1,4],[0.11,"="]],["TZA","Tanzania",17.59,[20211003,1,0,0,0,0,0,0,1,1],[5.85,"="]],["CIV","Cote d'Ivoire",17.59,[20210924,0,0,0,0,0,1,0,1,4],[0.3,"-"]],["AFG","Afghanistan",18.52,[20210915,2,0,0,0,0,0,0,4,0],[0.08,"="]],["BLR","Belarus",19.44,[20210920,0,0,0,0,0,0,0,3,2],[20.82,"-"]],["NER","Niger",19.44,[20210914,0,0,2,1,0,0,0,2,3],[0.04,"="]],["ABW","Aruba",19.91,[20210928,1,0,0,3,0,0,0,0,2],[16.06,"-"]],["BGR","Bulgaria",20.37,[20210831,0,1,0,0,0,0,0,2,3],[27.0,"+"]],["TCD","Chad",22.22,[20211002,0,0,0,3,0,0,0,1,4],[0.01,"="]],["EST","Estonia",22.22,[20210927,0,0,1,1,0,0,0,1,2],[51.92,"+"]],["SLV","El Salvador",22.22,[20211002,0,1,0,1,0,1,0,1,1],[5.12,"="]],["VUT","Vanuatu",22.22,[20210927,0,0,0,0,0,0,0,4,0],[0.0,"="]],["DNK","Denmark",24.07,[20210927,1,1,0,0,0,0,0,2,3],[7.38,"+"]],["FIN","Finland",24.07,[20211003,1,1,0,0,0,1,0,2,1],[6.98,"-"]],["SSD","South Sudan",25.0,[20210926,0,0,0,3,0,0,0,2,2],[0.12,"-"]],["COG","Congo",25.0,[20210927,0,0,1,3,0,2,0,2,3],[0.64,"="]],["CMR","Cameroon",25.0,[20210927,0,0,0,3,0,0,0,2,3],[3.71,"="]],["LTU","Lithuania",25.0,[20210928,0,0,1,1,0,0,0,2,2],[61.98,"+"]],["NOR","Norway",25.93,[20211001,1,0,1,0,0,0,0,2,0],[9.48,"-"]],["CAF","Central African Republic",27.78,[20210920,0,0,0,0,0,3,0,2,3],[0.0,"="]],["HUN","Hungary",27.78,[20210919,0,0,1,3,0,0,0,1,2],[4.89,"="]],["SYR","Syria",28.7,[20210906,3,1,0,0,0,0,0,1,2],[1.59,"-"]],["BEL","Belgium",28.7,[20211003,1,0,1,0,0,0,0,3,2],[16.61,"="]],["GHA","Ghana",29.17,[20210919,0,0,2,3,0,0,0,1,4],[0.4,"="]],["SLE","Sierra Leone",29.63,[20210927,1,1,0,0,1,0,0,2,3],[0.01,"+"]],["MDA","Moldova",29.63,[20210917,1,1,0,2,0,0,0,2,3],[29.06,"-"]],["TJK","Tajikistan",29.63,[20210920,1,1,0,0,0,0,0,4,3],[0.0,"="]],["GRL","Greenland",30.09,[20210912,1,0,1,3,0,0,0,1,2],[6.54,"-"]],["MWI","Malawi",31.48,[20210927,0,1,1,3,0,0,0,1,3],[0.08,"="]],["CZE","Czech Republic",32.41,[20210920,1,1,1,1,0,0,0,2,2],[5.9,"+"]],["HRV","Croatia",33.8,[20211003,1,1,1,3,0,0,0,1,3],[30.65,"+"]],["LUX","Luxembourg",34.26,[20210926,0,1,1,2,0,0,0,3,2],[12.87,"="]],["YEM","Yemen",35.19,[20210924,1,1,1,0,0,2,1,2,2],[0.1,"-"]],["SEN","Senegal",35.19,[20211003,1,1,1,1,1,-1,1,1,1],[0.05,"-"]],["MEX","Mexico",35.19,[20211003,0,2,1,-1,1,1,2,1,4],[5.12,"-"]],["BIH","Bosnia and Herzegovina",35.19,[20211001,1,1,1,3,0,0,0,1,2],[20.62,"="]],["SVN","Slovenia",35.19,[20210927,1,1,1,3,0,0,0,1,3],[42.52,"+"]],["SOM","Somalia",35.19,[20210920,0,1,1,3,0,1,0,1,3],[0.77,"+"]],["EGY","Egypt",35.19,[20210921,1,1,1,4,0,0,0,0,3],[0.72,"+"]],["SRB","Serbia",36.11,[20210921,1,1,1,2,0,1,0,1,2],[81.65,"-"]],["LIE","Liechtenstein",36.11,[20211002,1,1,1,0,0,1,0,3,3],[4.12,"+"]],["TUN","Tunisia",36.11,[20211003,1,1,1,1,0,1,0,2,3],[3.71,"="]],["SVK","Slovak Republic",36.11,[20211003,1,1,1,3,0,0,0,2,3],[19.64,"+"]],["TWN","Taiwan",36.57,[20210927,0,1,1,3,1,0,1,2,4],[0.04,"="]],["MNG","Mongolia",37.04,[20211004,1,2,1,3,0,1,1,1,4],[76.7,"+"]],["PNG","Papua New Guinea",37.04,[20210918,0,1,0,0,1,0,2,2,4],[1.83,"-"]],["KIR","Kiribati",37.5,[20210930,0,0,0,4,0,2,0,4,0],[0.0,"="]],["CHL","Chile",37.5,[20211003,1,1,1,3,1,1,1,2,3],[3.63,"-"]],["COD","Democratic Republic of Congo",37.96,[20210926,0,1,1,3,0,2,2,1,3],[0.06,"="]],["LVA","Latvia",37.96,[20211004,1,1,1,3,0,0,0,2,2],[51.92,"+"]],["POL","Poland",38.89,[20211001,1,1,1,2,0,1,0,2,2],[2.88,"+"]],["SLB","Solomon Islands",38.89,[20210913,-1,0,1,0,0,0,2,4,1],[0.0,"="]],["BHR","Bahrain",39.35,[20211004,0,2,2,3,0,1,0,2,4],[3.55,"-"]],["BOL","Bolivia",39.35,[20210927,2,1,1,1,1,2,1,2,4],[2.8,"+"]],["BWA","Botswana",39.81,[20210928,0,2,0,0,0,2,2,1,3],[16.97,"="]],["MCO","Monaco",40.74,[20210930,1,1,1,4,0,0,0,2,2],[4.0,"="]],["KWT","Kuwait",40.74,[20210921,3,1,2,-1,0,0,0,2,3],[1.07,"+"]],["GBR","United Kingdom",41.2,[20211001,1,2,1,3,1,0,0,3,3],[49.89,"-"]],["ALB","Albania",41.67,[20210928,2,2,1,2,0,2,0,1,3],[19.37,"-"]],["NLD","Netherlands",41.67,[20211001,1,2,1,0,1,0,0,3,2],[10.0,"+"]],["ISL","Iceland",41.67,[20210927,2,1,1,2,0,0,0,3,2],[8.67,"="]],["MUS","Mauritius",41.67,[20210925,1,2,1,3,0,0,0,2,3],[6.0,"="]],["NAM","Namibia",41.67,[20210928,0,1,1,2,1,2,0,1,2],[3.05,"+"]],["ARE","United Arab Emirates",42.13,[20210930,1,1,1,3,1,0,0,2,2],[2.62,"-"]],["ESP","Spain",42.13,[20211004,1,1,2,4,0,0,0,2,2],[4.44,"="]],["PRY","Paraguay",42.59,[20210928,1,1,1,2,0,2,0,2,3],[0.44,"="]],["MRT","Mauritania",42.59,[20210920,1,1,2,0,0,2,0,2,3],[0.93,"+"]],["ZMB","Zambia",43.52,[20210927,0,2,2,3,0,0,0,2,3],[0.24,"="]],["SAU","Saudi Arabia",43.52,[20211003,1,1,1,3,1,0,0,2,3],[0.09,"-"]],["ETH","Ethiopia",43.52,[20210927,1,1,1,3,1,0,0,2,3],[0.86,"-"]],["MLT","Malta",43.52,[20211004,1,1,1,4,0,0,0,3,3],[3.46,"-"]],["TON","Tonga",43.52,[20210919,0,0,1,3,0,2,0,4,2],[]],["GUM","Guam",43.52,[20211001,1,1,1,3,1,0,0,2,3],[]],["CYP","Cyprus",43.52,[20210927,1,1,1,3,1,0,0,2,3],[6.9,"-"]],["KGZ","Kyrgyz Republic",44.44,[20210919,2,0,2,4,0,0,1,1,2],[1.06,"+"]],["CHE","Switzerland",44.44,[20210930,1,1,1,3,0,1,0,3,2],[13.52,"="]],["LBR","Liberia",44.44,[20210927,1,2,1,3,1,0,0,1,3],[0.02,"="]],["IRL","Ireland",44.44,[20210924,1,1,1,3,0,1,0,3,3],[25.89,"-"]],["ZAF","South Africa",45.37,[20210922,1,1,1,2,1,2,0,1,3],[2.28,"-"]],["MDG","Madagascar",46.3,[20210927,0,2,1,2,0,2,0,4,3],[0.0,"="]],["VIR","United States Virgin Islands",46.3,[20211003,1,2,1,3,0,2,0,1,3],[]],["NGA","Nigeria",47.22,[20211003,0,2,1,3,1,1,0,2,2],[0.12,"-"]],["KOR","South Korea",47.22,[20210924,2,2,2,4,0,0,0,2,3],[4.52,"-"]],["GEO","Georgia",47.22,[20210927,2,1,2,4,0,0,0,1,3],[40.33,"+"]],["JPN","Japan",47.22,[20211003,1,1,1,1,0,1,1,4,1],[1.14,"-"]],["SUR","Suriname",47.22,[20210927,2,2,2,3,0,2,0,2,4],[57.88,"+"]],["SGP","Singapore",47.22,[20210925,1,1,1,4,0,1,0,3,4],[38.95,"+"]],["BMU","Bermuda",47.22,[20210920,1,1,1,3,1,1,0,2,2],[81.2,"="]],["MOZ","Mozambique",48.15,[20210923,0,1,2,3,1,2,0,1,3],[0.13,"-"]],["IRN","Iran",48.15,[20211004,0,3,2,-1,0,0,2,3,3],[15.41,"-"]],["LSO","Lesotho",49.07,[20211002,1,2,1,2,1,2,0,1,3],[46.45,"+"]],["THA","Thailand",49.54,[20211004,3,2,2,3,0,2,2,2,-1],[15.51,"-"]],["SMR","San Marino",50.0,[20210913,1,1,1,3,1,1,1,1,1],[5.47,"="]],["ROU","Romania",50.0,[20210927,1,1,1,4,1,1,1,2,4],[53.26,"+"]],["MLI","Mali",50.93,[20210919,1,3,2,3,0,0,0,2,3],[0.09,"="]],["TGO","Togo",50.93,[20210913,0,0,2,3,0,1,2,2,4],[0.55,"-"]],["ERI","Eritrea",50.93,[20210927,0,0,2,3,1,1,0,4,3],[0.12,"+"]],["BRA","Brazil",51.39,[20210916,2,2,1,3,1,2,2,1,4],[7.81,"+"]],["COL","Colombia",51.39,[20210926,3,1,1,3,2,2,1,1,3],[2.91,"-"]],["OMN","Oman",51.85,[20210926,0,1,2,4,1,1,0,2,4],[0.36,"-"]],["AND","Andorra",51.85,[20210930,1,1,2,4,1,0,0,2,2],[10.17,"="]],["RWA","Rwanda",51.85,[20211001,1,2,1,3,1,2,0,1,3],[1.14,"-"]],["LBY","Libya",51.85,[20210921,2,0,2,4,1,0,0,2,3],[10.1,"-"]],["RUS","Russia",52.31,[20210927,0,2,2,3,0,1,2,2,3],[15.83,"+"]],["NPL","Nepal",52.31,[20210927,1,1,1,4,1,1,1,2,4],[2.84,"-"]],["BGD","Bangladesh",52.78,[20210919,1,0,2,4,0,2,0,3,4],[0.57,"-"]],["DZA","Algeria",52.78,[20210920,2,1,2,4,1,2,0,1,3],[0.35,"="]],["RKS","Kosovo",52.78,[20210927,1,1,1,4,1,1,0,3,3],[2.59,"-"]],["PRT","Portugal",52.78,[20210930,1,2,2,4,0,0,0,3,2],[5.84,"-"]],["URY","Uruguay",52.78,[20210926,1,1,1,2,1,1,1,4,2],[2.81,"-"]],["BHS","Bahamas",54.17,[20210916,2,2,1,4,0,2,2,1,4],[18.56,"="]],["DJI","Djibouti",54.63,[20210925,1,1,2,4,2,0,0,1,4],[9.67,"+"]],["BEN","Benin",54.63,[20211002,0,1,2,3,1,1,0,4,4],[1.1,"="]],["PSE","Palestine",54.63,[20210927,0,2,2,4,0,0,2,2,4],[]],["TLS","Timor-Leste",54.63,[20210913,0,2,2,3,2,1,2,2,3],[2.17,"-"]],["CRI","Costa Rica",54.63,[20210926,2,2,2,2,0,1,1,1,3],[35.59,"="]],["PAK","Pakistan",55.09,[20210925,2,2,1,2,2,1,1,3,3],[0.71,"-"]],["QAT","Qatar",55.56,[20211002,1,1,1,4,1,1,1,2,4],[3.05,"+"]],["ISR","Israel",56.48,[20211003,2,2,2,3,0,0,0,4,2],[39.48,"-"]],["BLZ","Belize",56.48,[20210920,3,2,1,4,0,2,0,1,4],[50.41,"="]],["DEU","Germany",56.48,[20210926,1,2,2,3,1,1,0,2,2],[9.58,"-"]],["AGO","Angola",56.94,[20210920,0,2,1,3,1,1,2,3,3],[1.66,"="]],["KEN","Kenya",56.94,[20210927,0,2,2,4,0,2,2,3,4],[0.44,"+"]],["JOR","Jordan",57.41,[20211004,1,1,1,3,1,2,1,3,2],[9.1,"+"]],["UKR","Ukraine",58.33,[20211003,2,1,1,3,2,0,2,1,3],[21.78,"+"]],["TUR","Turkey",58.33,[20211001,1,2,1,0,2,0,2,3,4],[28.69,"+"]],["AZE","Azerbaijan",58.33,[20210927,2,2,2,2,1,1,0,4,2],[7.25,"-"]],["ECU","Ecuador",58.8,[20210927,2,1,2,4,1,1,1,2,3],[2.24,"+"]],["CPV","Cape Verde",59.26,[20210917,1,2,2,4,0,1,2,1,3],[5.4,"-"]],["HKG","Hong Kong",59.26,[20210913,1,2,1,4,1,1,1,2,2],[0.06,"-"]],["SWZ","Eswatini",59.26,[20210927,1,1,1,3,1,2,2,1,4],[3.41,"+"]],["UZB","Uzbekistan",59.26,[20210913,1,0,2,3,1,0,2,3,3],[1.36,"-"]],["MAR","Morocco",59.26,[20210822,0,2,1,4,1,2,1,2,3],[2.33,"-"]],["AUT","Austria",60.19,[20210924,2,2,1,3,1,0,2,3,2],[20.52,"+"]],["GIN","Guinea",60.19,[20210920,1,1,2,3,0,2,2,2,3],[0.08,"-"]],["GRC","Greece",60.65,[20210911,1,2,2,3,1,2,1,3,2],[21.02,"+"]],["GAB","Gabon",61.11,[20210930,1,0,2,3,1,2,2,1,3],[9.77,"="]],["PER","Peru",61.11,[20211003,2,2,2,4,1,2,1,3,4],[1.84,"-"]],["TKM","Turkmenistan",61.11,[20210927,1,2,2,4,0,0,2,4,3],[]],["USA","United States",61.57,[20210928,2,2,2,4,1,1,2,3,3],[32.42,"-"]],["MAC","Macao",62.04,[20211003,3,1,2,4,1,0,1,2,2],[]],["BTN","Bhutan",62.96,[20210927,2,2,1,3,1,1,1,3,3],[0.17,"+"]],["LBN","Lebanon",64.81,[20210926,0,2,1,3,2,2,2,1,3],[7.83,"+"]],["HTI","Haiti",64.81,[20211001,1,1,2,4,1,2,1,2,3],[0.54,"="]],["GUY","Guyana",65.74,[20210926,1,2,2,4,1,2,0,3,4],[24.25,"-"]],["ZWE","Zimbabwe",65.74,[20210923,1,2,2,3,1,2,1,2,3],[1.45,"-"]],["DOM","Dominican Republic",65.74,[20210924,1,1,2,4,1,2,2,1,4],[4.85,"+"]],["MMR","Myanmar",66.2,[20210927,3,2,2,4,1,2,1,2,4],[2.71,"-"]],["GTM","Guatemala",66.2,[20210920,3,1,2,4,2,2,0,3,4],[13.31,"-"]],["FRA","France",66.67,[20211002,1,2,2,3,1,0,2,3,2],[7.57,"-"]],["BRB","Barbados",67.59,[20210925,3,2,2,3,1,2,0,2,3],[60.45,"-"]],["CAN","Canada",68.06,[20210924,3,3,2,4,0,1,2,3,3],[11.89,"+"]],["IDN","Indonesia",68.98,[20210927,3,2,2,4,1,2,2,3,4],[0.59,"-"]],["ITA","Italy",68.98,[20211001,2,2,2,2,1,2,2,3,3],[5.13,"-"]],["KHM","Cambodia",69.44,[20210918,2,3,2,4,0,2,2,2,3],[3.56,"-"]],["IND","India",70.83,[20210907,2,2,2,4,2,2,2,3,4],[1.61,"-"]],["LKA","Sri Lanka",71.3,[20211002,2,1,2,4,1,2,2,2,4],[4.55,"-"]],["CUB","Cuba",71.76,[20210919,3,2,2,4,2,2,2,2,4],[47.02,"-"]],["AUS","Australia",71.76,[20210924,2,3,2,4,1,2,2,4,3],[8.06,"+"]],["DMA","Dominica",72.22,[20210922,1,3,2,4,1,2,1,2,3],[75.41,"-"]],["VNM","Vietnam",72.69,[20210928,2,2,2,4,2,2,2,3,3],[7.62,"-"]],["HND","Honduras",75.0,[20210913,3,3,2,4,0,2,2,1,3],[6.14,"="]],["PHL","Philippines",75.46,[20210926,3,2,2,4,1,2,2,3,4],[13.37,"-"]],["ARG","Argentina",75.93,[20210926,1,2,2,4,2,2,2,4,3],[2.95,"-"]],["IRQ","Iraq",75.93,[20210925,3,2,2,3,0,2,2,3,4],[5.65,"+"]],["CHN","China",76.39,[20210917,3,3,2,4,1,3,2,2,2],[0.0,"="]],["PAN","Panama",77.31,[20210927,2,3,2,4,2,3,2,2,4],[5.17,"-"]],["KAZ","Kazakhstan",79.17,[20210926,2,2,2,4,2,2,2,3,3],[11.17,"-"]],["LAO","Laos",79.17,[20210930,3,3,2,4,2,3,2,3,3],[6.67,"+"]],["BRN","Brunei",79.63,[20210930,3,3,2,4,1,2,0,4,4],[25.67,"-"]],["VEN","Venezuela",80.56,[20211003,3,3,2,4,1,2,1,3,4],[5.67,"+"]],["MYS","Malaysia",80.56,[20210719,0,3,2,4,2,2,2,3,3],[35.01,"-"]],["NZL","New Zealand",81.02,[20211003,3,3,2,4,2,2,2,4,3],[0.56,"+"]],["UGA","Uganda",81.48,[20210926,3,2,2,3,2,2,2,1,3],[0.25,"="]],["TTO","Trinidad and Tobago",83.33,[20211004,2,2,2,4,2,2,2,2,4],[13.21,"+"]],["SYC","Seychelles",84.26,[20210927,3,2,2,4,1,2,2,3,3],[32.83,"="]],["FJI","Fiji",86.11,[20210913,3,3,2,4,1,2,2,4,2],[7.12,"-"]],["JAM","Jamaica",88.89,[20210927,3,3,2,4,2,3,2,2,4],[9.28,"-"]]];