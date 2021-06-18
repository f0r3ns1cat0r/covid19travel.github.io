const dataUpdate="2021.06.18";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",8.33,[20210613,0,0,0,0,0,0,0,1,0],[0.07,"="]],["CAF","Central African Republic",11.11,[20210613,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TZA","Tanzania",13.89,[20210607,0,0,0,0,0,0,0,3,0],[0.0,"="]],["BDI","Burundi",15.74,[20210613,0,2,0,0,0,0,0,1,1],[0.17,"="]],["TCD","Chad",16.67,[20210612,0,0,0,0,0,0,0,2,4],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20210613,0,0,0,0,0,1,0,1,4],[0.2,"-"]],["NER","Niger",19.44,[20210614,0,0,2,1,0,0,0,2,3],[0.01,"="]],["ISR","Israel",22.22,[20210617,0,0,0,0,0,0,0,4,1],[0.19,"-"]],["KIR","Kiribati",22.22,[20210614,0,0,0,0,0,0,0,4,3],[0.0,"="]],["VUT","Vanuatu",22.22,[20210615,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210614,0,0,0,0,0,0,0,4,2],[0.04,"-"]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.3,"+"]],["SOM","Somalia",24.07,[20210614,0,1,1,3,0,1,0,1,3],[0.06,"+"]],["SLB","Solomon Islands",25.0,[20210614,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210614,0,0,0,3,0,0,0,2,2],[0.1,"+"]],["BFA","Burkina Faso",25.0,[20210606,0,0,0,0,0,0,2,2,4],[0.0,"="]],["SLV","El Salvador",26.85,[20210615,1,1,1,0,0,0,0,1,4],[2.52,"-"]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[20.99,"-"]],["BEN","Benin",27.78,[20210613,0,0,1,3,0,0,0,1,3],[0.04,"="]],["MAC","Macao",28.7,[20210614,1,0,1,0,0,0,0,3,2],[]],["CMR","Cameroon",29.63,[20210613,1,0,1,3,0,0,0,1,3],[0.23,"="]],["DMA","Dominica",31.48,[20210614,0,0,1,2,0,1,0,2,2],[0.6,"+"]],["MWI","Malawi",31.48,[20210614,0,1,1,3,0,0,0,1,1],[0.19,"+"]],["SRB","Serbia",32.41,[20210606,1,0,1,2,0,1,0,1,3],[1.6,"-"]],["ABW","Aruba",33.33,[20210614,1,2,1,0,0,0,0,2,1],[4.01,"+"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.64,"-"]],["YEM","Yemen",34.26,[20210607,0,1,1,0,0,2,1,3,2],[0.02,"="]],["SVN","Slovenia",35.19,[20210615,1,1,1,3,0,0,0,1,3],[4.68,"-"]],["TJK","Tajikistan",35.19,[20210613,1,1,0,3,0,0,0,3,4],[0.0,"="]],["NAM","Namibia",35.19,[20210607,0,0,1,3,0,2,1,1,3],[49.13,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210611,1,2,1,3,0,0,0,1,3],[0.98,"+"]],["ISL","Iceland",37.96,[20210614,1,1,1,2,0,0,0,3,2],[0.0,"="]],["EST","Estonia",38.89,[20210614,1,2,1,2,0,0,0,2,2],[3.56,"-"]],["FRO","Faeroe Islands",38.89,[20210607,1,1,1,2,0,1,0,2,2],[1.17,"-"]],["GMB","Gambia",38.89,[20210607,0,0,1,4,1,0,0,2,3],[0.13,"="]],["ZMB","Zambia",38.89,[20210617,0,0,2,4,0,0,0,2,3],[12.69,"+"]],["HRV","Croatia",38.89,[20210617,0,2,1,3,0,1,0,1,4],[2.34,"-"]],["SMR","San Marino",38.89,[20210614,1,1,1,3,0,1,0,1,3],[0.0,"="]],["VIR","United States Virgin Islands",38.89,[20210614,2,1,1,3,0,0,0,1,3],[]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[0.9,"+"]],["COD","Democratic Republic of Congo",39.81,[20210613,0,0,2,1,1,1,2,1,3],[0.37,"+"]],["BRN","Brunei",40.74,[20210610,1,1,1,2,0,0,0,4,2],[0.07,"-"]],["RKS","Kosovo",40.74,[20210611,1,1,1,3,1,0,0,3,3],[0.54,"="]],["OMN","Oman",41.67,[20210614,2,1,1,2,0,0,0,3,3],[34.98,"+"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.42,"-"]],["TGO","Togo",42.59,[20210612,0,2,0,3,0,1,2,2,4],[0.18,"="]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[8.77,"-"]],["GHA","Ghana",42.59,[20210613,0,2,2,3,0,1,0,1,4],[0.21,"="]],["AFG","Afghanistan",43.52,[20210613,3,2,2,0,0,0,1,1,3],[3.9,"+"]],["GUM","Guam",43.52,[20210608,1,1,1,3,1,0,0,2,3],[]],["AND","Andorra",43.52,[20210607,1,1,1,4,1,0,0,1,3],[6.29,"-"]],["LBR","Liberia",43.52,[20210607,0,2,1,3,1,0,0,2,3],[1.17,"+"]],["ETH","Ethiopia",43.52,[20210613,1,1,1,3,1,0,0,2,3],[0.14,"-"]],["HTI","Haiti",44.44,[20210607,1,0,1,4,0,2,0,2,3],[1.07,"+"]],["MEX","Mexico",44.44,[20210614,3,2,1,0,1,1,2,1,4],[2.45,"+"]],["LTU","Lithuania",44.44,[20210614,2,1,1,4,0,0,0,2,2],[5.01,"-"]],["MLI","Mali",44.44,[20210614,0,2,2,3,0,1,0,1,3],[0.02,"="]],["LUX","Luxembourg",45.37,[20210614,1,1,1,2,0,2,0,3,2],[2.74,"-"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[1.12,"-"]],["ALB","Albania",46.3,[20210606,2,1,2,4,0,2,0,0,2],[0.27,"-"]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[3.65,"-"]],["CZE","Czech Republic",47.22,[20210613,1,2,2,2,0,0,0,3,2],[1.35,"-"]],["BMU","Bermuda",47.22,[20210614,1,1,1,3,1,1,0,2,2],[0.46,"="]],["NGA","Nigeria",47.22,[20210614,0,1,1,3,1,2,0,2,3],[0.01,"="]],["TKM","Turkmenistan",47.22,[20210614,1,2,1,1,0,0,2,4,3],[]],["UGA","Uganda",47.22,[20210613,2,2,0,2,0,2,0,3,3],[3.21,"+"]],["TON","Tonga",47.22,[20210614,1,0,1,3,0,2,0,4,0],[]],["SWZ","Eswatini",47.22,[20210607,1,1,1,2,0,1,2,1,4],[0.97,"+"]],["UZB","Uzbekistan",47.22,[20210607,2,0,1,3,1,0,1,2,3],[0.95,"+"]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[0.69,"-"]],["ROU","Romania",48.15,[20210531,2,1,2,4,0,0,0,3,2],[0.48,"-"]],["ZAF","South Africa",48.15,[20210613,1,1,1,3,1,2,0,1,3],[15.41,"+"]],["ZWE","Zimbabwe",48.15,[20210613,0,2,2,3,0,2,0,1,3],[1.38,"+"]],["BGR","Bulgaria",48.15,[20210531,2,2,1,3,0,0,0,3,3],[1.58,"+"]],["CHE","Switzerland",48.15,[20210610,1,2,1,3,0,1,0,3,2],[2.9,"-"]],["PRY","Paraguay",49.07,[20210614,1,2,1,3,0,2,0,2,2],[32.56,"-"]],["RUS","Russia",49.07,[20210617,3,1,1,3,0,1,0,2,3],[9.29,"+"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.46,"+"]],["JPN","Japan",49.07,[20210606,1,2,1,1,0,1,1,4,1],[1.23,"-"]],["FIN","Finland",49.54,[20210614,2,2,1,4,0,1,0,3,2],[1.21,"-"]],["LVA","Latvia",50.0,[20210614,2,1,2,3,0,0,0,3,3],[7.27,"-"]],["SVK","Slovak Republic",50.0,[20210524,2,2,2,4,0,2,0,2,3],[1.05,"-"]],["KOR","South Korea",50.0,[20210614,1,1,1,4,0,1,1,2,3],[0.94,"-"]],["KWT","Kuwait",50.93,[20210607,3,1,2,2,0,0,0,3,3],[36.33,"-"]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[10.56,"+"]],["SLE","Sierra Leone",50.93,[20210531,1,2,2,2,1,1,0,1,3],[0.47,"+"]],["GRL","Greenland",50.93,[20210614,1,2,1,3,0,1,0,4,2],[1.51,"="]],["COG","Congo",50.93,[20210607,0,1,1,3,1,2,1,2,3],[0.7,"+"]],["BEL","Belgium",50.93,[20210614,1,2,1,4,0,1,0,3,3],[4.99,"-"]],["BRA","Brazil",51.39,[20210611,2,-1,2,3,1,2,2,1,4],[33.04,"-"]],["FRA","France",51.85,[20210612,1,2,1,4,0,2,0,2,2],[4.35,"-"]],["GTM","Guatemala",51.85,[20210615,1,2,2,4,1,0,0,3,4],[7.56,"-"]],["MLT","Malta",52.78,[20210614,2,1,2,4,0,0,0,3,4],[0.26,"-"]],["BHR","Bahrain",53.7,[20210524,1,2,1,4,0,1,1,2,3],[46.57,"-"]],["SAU","Saudi Arabia",53.7,[20210614,3,1,2,3,0,0,0,3,3],[3.89,"+"]],["ARE","United Arab Emirates",53.7,[20210607,1,2,2,3,0,0,2,3,3],[24.13,"+"]],["MNG","Mongolia",53.7,[20210614,3,1,2,4,0,1,1,1,4],[78.59,"+"]],["POL","Poland",53.7,[20210611,1,2,1,2,1,1,1,2,2],[0.61,"-"]],["THA","Thailand",53.7,[20210615,2,1,2,4,1,1,1,3,4],[4.13,"+"]],["QAT","Qatar",53.7,[20210614,2,1,1,4,1,1,0,2,3],[5.18,"-"]],["ESP","Spain",54.17,[20210613,1,1,2,4,0,1,1,3,4],[7.26,"-"]],["SWE","Sweden",54.63,[20210614,0,1,1,4,1,1,1,3,2],[2.7,"-"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.22,"+"]],["RWA","Rwanda",54.63,[20210614,1,2,1,3,1,2,0,2,3],[2.14,"+"]],["KGZ","Kyrgyz Republic",54.63,[20210613,2,2,2,4,1,0,0,1,3],[9.0,"+"]],["PNG","Papua New Guinea",55.56,[20210607,1,1,1,3,1,1,1,3,3],[0.28,"-"]],["DNK","Denmark",55.56,[20210614,3,2,2,3,0,0,0,3,2],[5.7,"-"]],["PRT","Portugal",56.48,[20210611,1,2,1,4,1,1,0,3,3],[8.68,"+"]],["CYP","Cyprus",56.48,[20210607,1,1,1,3,1,2,1,2,3],[4.6,"+"]],["DOM","Dominican Republic",57.41,[20210614,2,1,2,4,0,2,0,2,4],[9.54,"-"]],["PRI","Puerto Rico",57.41,[20210516,1,2,2,3,1,2,1,1,3],[]],["UKR","Ukraine",57.41,[20210616,3,1,2,4,0,1,0,2,4],[2.81,"-"]],["SYR","Syria",57.87,[20210601,2,3,2,3,0,2,2,1,3],[0.2,"+"]],["SGP","Singapore",58.33,[20210614,3,2,1,4,0,1,0,3,4],[0.32,"+"]],["GIN","Guinea",58.33,[20210531,0,2,2,3,0,2,2,2,3],[0.09,"+"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[10.92,"-"]],["NOR","Norway",59.26,[20210611,1,2,1,3,1,1,1,3,2],[3.22,"+"]],["AUT","Austria",60.19,[20210614,2,2,2,4,1,0,0,3,2],[1.92,"-"]],["GUY","Guyana",60.19,[20210607,2,1,2,4,0,2,0,3,3],[11.71,"-"]],["BHS","Bahamas",60.65,[20210614,2,3,2,4,0,2,2,1,3],[6.9,"-"]],["BRB","Barbados",61.11,[20210614,2,2,2,4,0,2,0,2,3],[0.3,"="]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[19.33,"+"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.81,"+"]],["GRC","Greece",62.04,[20210607,1,2,1,4,1,1,1,3,4],[5.6,"-"]],["BLZ","Belize",62.04,[20210614,0,2,1,4,1,2,2,1,3],[2.51,"-"]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[22.88,"+"]],["URY","Uruguay",62.04,[20210613,2,2,1,3,1,1,1,4,2],[76.64,"-"]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.05,"-"]],["GBR","United Kingdom",62.5,[20210604,1,2,2,4,1,0,2,3,3],[12.14,"+"]],["KAZ","Kazakhstan",62.96,[20210605,2,2,2,4,0,0,2,3,3],[5.81,"+"]],["TUR","Turkey",63.43,[20210617,1,1,1,2,2,2,2,2,4],[6.95,"-"]],["MOZ","Mozambique",63.89,[20210613,0,2,2,3,1,3,2,1,3],[0.3,"+"]],["MDG","Madagascar",63.89,[20210606,1,2,1,3,1,2,1,4,4],[0.1,"-"]],["TLS","Timor-Leste",64.35,[20210615,1,1,1,4,1,2,2,4,4],[4.24,"-"]],["ERI","Eritrea",64.81,[20210613,0,0,2,4,1,1,2,4,3],[1.72,"+"]],["MYS","Malaysia",64.81,[20210614,0,2,2,4,2,2,2,2,3],[17.3,"+"]],["TTO","Trinidad and Tobago",64.81,[20210530,2,2,2,4,1,0,0,4,4],[21.95,"+"]],["GEO","Georgia",64.81,[20210610,0,2,2,4,0,2,2,2,3],[17.78,"+"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.8,"+"]],["PAK","Pakistan",65.74,[20210614,2,1,2,4,1,2,2,1,3],[0.48,"-"]],["KHM","Cambodia",66.2,[20210614,3,3,2,4,0,2,1,2,3],[3.52,"+"]],["CRI","Costa Rica",66.67,[20210607,3,2,2,3,0,1,2,1,3],[30.79,"-"]],["HUN","Hungary",66.67,[20210517,2,2,2,4,0,2,0,4,3],[1.08,"-"]],["GAB","Gabon",67.59,[20210614,1,1,2,3,1,2,2,2,3],[0.87,"="]],["MDA","Moldova",67.59,[20210614,2,2,2,4,1,2,1,1,3],[1.18,"-"]],["FJI","Fiji",67.59,[20210614,3,1,2,3,0,2,2,3,-1],[9.78,"+"]],["NLD","Netherlands",67.59,[20210611,1,2,2,4,1,1,1,3,2],[6.39,"-"]],["TWN","Taiwan",68.52,[20210531,3,2,2,4,0,2,2,3,4],[0.82,"-"]],["BTN","Bhutan",68.52,[20210614,3,3,2,3,1,2,1,3,3],[2.09,"-"]],["IDN","Indonesia",68.98,[20210614,3,2,2,4,1,2,2,3,4],[3.36,"+"]],["TUN","Tunisia",69.44,[20210614,1,2,2,4,1,2,1,3,3],[16.96,"="]],["MUS","Mauritius",69.44,[20210613,3,2,2,4,0,1,2,2,3],[2.3,"="]],["AZE","Azerbaijan",69.44,[20210614,2,2,2,4,1,1,1,4,2],[0.49,"-"]],["COL","Colombia",70.37,[20210615,3,2,2,3,2,2,2,1,3],[54.66,"-"]],["LBN","Lebanon",70.37,[20210510,0,2,2,4,1,2,2,2,3],[1.48,"="]],["ITA","Italy",71.3,[20210611,1,3,2,4,1,2,2,3,4],[2.34,"-"]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[240.69,"+"]],["HKG","Hong Kong",71.3,[20210613,2,2,2,4,1,1,1,3,2],[0.01,"-"]],["MAR","Morocco",71.3,[20210531,1,2,2,4,1,2,2,3,3],[1.04,"+"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.9,"+"]],["PHL","Philippines",71.76,[20210607,2,2,2,3,1,2,2,3,3],[5.97,"-"]],["BGD","Bangladesh",72.22,[20210607,3,1,2,4,1,2,1,2,4],[1.79,"+"]],["MMR","Myanmar",72.22,[20210613,3,2,2,4,1,2,1,4,4],[0.5,"+"]],["CAN","Canada",73.61,[20210617,3,3,2,4,1,1,2,4,3],[3.0,"-"]],["IRL","Ireland",74.07,[20210615,1,2,2,3,1,2,2,3,3],[6.39,"-"]],["LAO","Laos",74.07,[20210607,2,2,2,3,2,2,2,2,3],[0.12,"="]],["AUS","Australia",74.54,[20210604,2,3,2,4,1,2,2,4,3],[0.05,"+"]],["DEU","Germany",75.0,[20210614,3,2,2,4,1,2,1,3,2],[1.54,"-"]],["PER","Peru",75.93,[20210613,2,2,2,4,1,3,2,3,4],[10.6,"+"]],["IRN","Iran",76.39,[20210607,2,3,2,3,1,2,2,3,3],[11.45,"-"]],["ECU","Ecuador",76.85,[20210525,2,2,2,3,1,1,2,4,3],[5.12,"-"]],["VNM","Vietnam",77.31,[20210614,3,2,2,4,2,2,2,4,3],[0.34,"+"]],["IRQ","Iraq",77.31,[20210607,3,2,2,4,0,2,2,3,4],[11.4,"+"]],["ARG","Argentina",77.78,[20210613,2,2,2,4,2,2,2,4,3],[49.39,"-"]],["CUB","Cuba",78.24,[20210613,3,3,2,4,2,2,2,2,3],[12.41,"+"]],["CHN","China",78.24,[20210614,3,3,2,4,1,2,2,3,2],[0.0,"="]],["HND","Honduras",78.7,[20210613,3,3,2,4,0,1,2,3,4],[8.13,"-"]],["LBY","Libya",79.63,[20210531,1,2,2,4,1,2,2,4,3],[3.66,"+"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[44.2,"+"]],["IND","India",81.94,[20210531,3,3,2,4,2,3,2,3,4],[5.05,"-"]],["NPL","Nepal",81.94,[20210613,2,3,2,4,2,2,2,2,4],[7.01,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[33.45,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[11.29,"-"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.53,"+"]]];