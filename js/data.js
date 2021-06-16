const dataUpdate="2021.06.16";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",8.33,[20210613,0,0,0,0,0,0,0,1,0],[0.07,"-"]],["CAF","Central African Republic",11.11,[20210613,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TZA","Tanzania",13.89,[20210607,0,0,0,0,0,0,0,3,0],[0.0,"="]],["BDI","Burundi",15.74,[20210613,0,2,0,0,0,0,0,1,1],[0.13,"+"]],["TCD","Chad",16.67,[20210612,0,0,0,0,0,0,0,2,4],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20210613,0,0,0,0,0,1,0,1,4],[0.22,"+"]],["NER","Niger",19.44,[20210614,0,0,2,1,0,0,0,2,3],[0.01,"="]],["NZL","New Zealand",22.22,[20210614,0,0,0,0,0,0,0,4,2],[0.04,"-"]],["KIR","Kiribati",22.22,[20210614,0,0,0,0,0,0,0,4,3],[0.0,"="]],["VUT","Vanuatu",22.22,[20210615,0,0,0,0,0,0,0,4,0],[0.0,"="]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.28,"+"]],["SOM","Somalia",24.07,[20210614,0,1,1,3,0,1,0,1,3],[0.04,"="]],["SLB","Solomon Islands",25.0,[20210614,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210614,0,0,0,3,0,0,0,2,2],[0.0,"="]],["BFA","Burkina Faso",25.0,[20210606,0,0,0,0,0,0,2,2,4],[0.0,"="]],["SLV","El Salvador",26.85,[20210615,1,1,1,0,0,0,0,1,4],[2.89,"+"]],["BEN","Benin",27.78,[20210613,0,0,1,3,0,0,0,1,3],[0.07,"+"]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[22.89,"-"]],["MAC","Macao",28.7,[20210614,1,0,1,0,0,0,0,3,2],[]],["ISR","Israel",29.63,[20210614,1,1,0,0,0,0,0,4,2],[0.19,"+"]],["CMR","Cameroon",29.63,[20210613,1,0,1,3,0,0,0,1,3],[0.1,"-"]],["MWI","Malawi",31.48,[20210614,0,1,1,3,0,0,0,1,1],[0.13,"+"]],["DMA","Dominica",31.48,[20210614,0,0,1,2,0,1,0,2,2],[0.2,"="]],["SRB","Serbia",32.41,[20210606,1,0,1,2,0,1,0,1,3],[1.79,"-"]],["ABW","Aruba",33.33,[20210614,1,2,1,0,0,0,0,2,1],[2.68,"-"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.68,"-"]],["YEM","Yemen",34.26,[20210607,0,1,1,0,0,2,1,3,2],[0.02,"="]],["NAM","Namibia",35.19,[20210607,0,0,1,3,0,2,1,1,3],[40.52,"+"]],["SVN","Slovenia",35.19,[20210615,1,1,1,3,0,0,0,1,3],[6.38,"-"]],["TJK","Tajikistan",35.19,[20210613,1,1,0,3,0,0,0,3,4],[0.0,"="]],["RUS","Russia",36.57,[20210614,0,1,2,3,0,0,0,3,2],[8.78,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210611,1,2,1,3,0,0,0,1,3],[1.05,"-"]],["ISL","Iceland",37.96,[20210614,1,1,1,2,0,0,0,3,2],[0.0,"="]],["EST","Estonia",38.89,[20210614,1,2,1,2,0,0,0,2,2],[3.84,"-"]],["FRO","Faeroe Islands",38.89,[20210607,1,1,1,2,0,1,0,2,2],[2.92,"-"]],["GMB","Gambia",38.89,[20210607,0,0,1,4,1,0,0,2,3],[0.08,"="]],["ZMB","Zambia",38.89,[20210607,0,0,2,4,0,0,0,2,3],[10.75,"+"]],["SMR","San Marino",38.89,[20210614,1,1,1,3,0,1,0,1,3],[0.0,"="]],["VIR","United States Virgin Islands",38.89,[20210614,2,1,1,3,0,0,0,1,3],[]],["COD","Democratic Republic of Congo",39.81,[20210613,0,0,2,1,1,1,2,1,3],[0.37,"="]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[0.79,"="]],["RKS","Kosovo",40.74,[20210611,1,1,1,3,1,0,0,3,3],[0.61,"="]],["BRN","Brunei",40.74,[20210610,1,1,1,2,0,0,0,4,2],[0.13,"="]],["OMN","Oman",41.67,[20210614,2,1,1,2,0,0,0,3,3],[33.34,"+"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.4,"-"]],["TGO","Togo",42.59,[20210612,0,2,0,3,0,1,2,2,4],[0.17,"+"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[8.83,"-"]],["GHA","Ghana",42.59,[20210613,0,2,2,3,0,1,0,1,4],[0.22,"+"]],["AFG","Afghanistan",43.52,[20210613,3,2,2,0,0,0,1,1,3],[4.02,"+"]],["GUM","Guam",43.52,[20210608,1,1,1,3,1,0,0,2,3],[]],["AND","Andorra",43.52,[20210607,1,1,1,4,1,0,0,1,3],[8.69,"-"]],["LBR","Liberia",43.52,[20210607,0,2,1,3,1,0,0,2,3],[0.8,"="]],["UKR","Ukraine",43.52,[20210531,2,2,1,0,0,1,0,3,2],[3.08,"-"]],["ETH","Ethiopia",43.52,[20210613,1,1,1,3,1,0,0,2,3],[0.16,"="]],["MEX","Mexico",44.44,[20210614,3,2,1,0,1,1,2,1,4],[2.39,"+"]],["LTU","Lithuania",44.44,[20210614,2,1,1,4,0,0,0,2,2],[6.21,"-"]],["HTI","Haiti",44.44,[20210607,1,0,1,4,0,2,0,2,3],[0.96,"-"]],["MLI","Mali",44.44,[20210614,0,2,2,3,0,1,0,1,3],[0.02,"-"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[1.5,"="]],["LUX","Luxembourg",45.37,[20210614,1,1,1,2,0,2,0,3,2],[3.99,"-"]],["ALB","Albania",46.3,[20210606,2,1,2,4,0,2,0,0,2],[0.36,"-"]],["HRV","Croatia",46.3,[20210606,1,1,1,3,1,0,0,3,3],[3.1,"-"]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[4.1,"-"]],["UGA","Uganda",47.22,[20210613,2,2,0,2,0,2,0,3,3],[3.08,"+"]],["SWZ","Eswatini",47.22,[20210607,1,1,1,2,0,1,2,1,4],[0.91,"-"]],["TON","Tonga",47.22,[20210614,1,0,1,3,0,2,0,4,0],[]],["NGA","Nigeria",47.22,[20210614,0,1,1,3,1,2,0,2,3],[0.01,"-"]],["TKM","Turkmenistan",47.22,[20210614,1,2,1,1,0,0,2,4,3],[]],["UZB","Uzbekistan",47.22,[20210607,2,0,1,3,1,0,1,2,3],[0.83,"+"]],["BMU","Bermuda",47.22,[20210614,1,1,1,3,1,1,0,2,2],[0.46,"+"]],["CZE","Czech Republic",47.22,[20210613,1,2,2,2,0,0,0,3,2],[1.77,"-"]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[0.56,"-"]],["ZAF","South Africa",48.15,[20210613,1,1,1,3,1,2,0,1,3],[13.73,"+"]],["ROU","Romania",48.15,[20210531,2,1,2,4,0,0,0,3,2],[0.54,"-"]],["ZWE","Zimbabwe",48.15,[20210613,0,2,2,3,0,2,0,1,3],[0.96,"+"]],["CHE","Switzerland",48.15,[20210610,1,2,1,3,0,1,0,3,2],[3.6,"-"]],["BGR","Bulgaria",48.15,[20210531,2,2,1,3,0,0,0,3,3],[1.63,"-"]],["PRY","Paraguay",49.07,[20210614,1,2,1,3,0,2,0,2,2],[34.09,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.59,"-"]],["JPN","Japan",49.07,[20210606,1,2,1,1,0,1,1,4,1],[1.35,"-"]],["FIN","Finland",49.54,[20210614,2,2,1,4,0,1,0,3,2],[1.36,"-"]],["SVK","Slovak Republic",50.0,[20210524,2,2,2,4,0,2,0,2,3],[1.42,"-"]],["LVA","Latvia",50.0,[20210614,2,1,2,3,0,0,0,3,3],[8.35,"-"]],["KOR","South Korea",50.0,[20210614,1,1,1,4,0,1,1,2,3],[0.97,"-"]],["KWT","Kuwait",50.93,[20210607,3,1,2,2,0,0,0,3,3],[35.98,"-"]],["SLE","Sierra Leone",50.93,[20210531,1,2,2,2,1,1,0,1,3],[0.41,"+"]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[7.64,"+"]],["GRL","Greenland",50.93,[20210614,1,2,1,3,0,1,0,4,2],[1.51,"+"]],["COG","Congo",50.93,[20210607,0,1,1,3,1,2,1,2,3],[0.25,"="]],["BEL","Belgium",50.93,[20210614,1,2,1,4,0,1,0,3,3],[6.05,"-"]],["GTM","Guatemala",51.85,[20210615,1,2,2,4,1,0,0,3,4],[7.89,"+"]],["FRA","France",51.85,[20210612,1,2,1,4,0,2,0,2,2],[5.41,"-"]],["MLT","Malta",52.78,[20210614,2,1,2,4,0,0,0,3,4],[0.32,"-"]],["POL","Poland",53.7,[20210611,1,2,1,2,1,1,1,2,2],[0.79,"-"]],["MNG","Mongolia",53.7,[20210614,3,1,2,4,0,1,1,1,4],[67.19,"+"]],["BHR","Bahrain",53.7,[20210524,1,2,1,4,0,1,1,2,3],[54.19,"-"]],["QAT","Qatar",53.7,[20210614,2,1,1,4,1,1,0,2,3],[5.22,"-"]],["ARE","United Arab Emirates",53.7,[20210607,1,2,2,3,0,0,2,3,3],[21.24,"-"]],["SAU","Saudi Arabia",53.7,[20210614,3,1,2,3,0,0,0,3,3],[3.37,"+"]],["THA","Thailand",53.7,[20210615,2,1,2,4,1,1,1,3,4],[4.04,"+"]],["ESP","Spain",54.17,[20210613,1,1,2,4,0,1,1,3,4],[10.44,"-"]],["KGZ","Kyrgyz Republic",54.63,[20210613,2,2,2,4,1,0,0,1,3],[7.95,"+"]],["RWA","Rwanda",54.63,[20210614,1,2,1,3,1,2,0,2,3],[1.63,"+"]],["SWE","Sweden",54.63,[20210614,0,1,1,4,1,1,1,3,2],[5.52,"-"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.13,"-"]],["PNG","Papua New Guinea",55.56,[20210607,1,1,1,3,1,1,1,3,3],[0.45,"-"]],["DNK","Denmark",55.56,[20210614,3,2,2,3,0,0,0,3,2],[7.42,"-"]],["CYP","Cyprus",56.48,[20210607,1,1,1,3,1,2,1,2,3],[4.64,"+"]],["PRT","Portugal",56.48,[20210611,1,2,1,4,1,1,0,3,3],[7.58,"+"]],["DOM","Dominican Republic",57.41,[20210614,2,1,2,4,0,2,0,2,4],[9.75,"-"]],["PRI","Puerto Rico",57.41,[20210516,1,2,2,3,1,2,1,1,3],[]],["SYR","Syria",57.87,[20210601,2,3,2,3,0,2,2,1,3],[0.17,"+"]],["SGP","Singapore",58.33,[20210614,3,2,1,4,0,1,0,3,4],[0.23,"+"]],["GIN","Guinea",58.33,[20210531,0,2,2,3,0,2,2,2,3],[0.09,"-"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[12.31,"-"]],["NOR","Norway",59.26,[20210611,1,2,1,3,1,1,1,3,2],[3.28,"+"]],["AUT","Austria",60.19,[20210614,2,2,2,4,1,0,0,3,2],[2.42,"-"]],["GUY","Guyana",60.19,[20210607,2,1,2,4,0,2,0,3,3],[13.17,"-"]],["BHS","Bahamas",60.65,[20210614,2,3,2,4,0,2,2,1,3],[7.3,"+"]],["BRA","Brazil",60.65,[20210610,2,3,2,3,1,2,2,1,4],[33.34,"+"]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[18.01,"-"]],["BRB","Barbados",61.11,[20210614,2,2,2,4,0,2,0,2,3],[0.3,"+"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.8,"="]],["URY","Uruguay",62.04,[20210613,2,2,1,3,1,1,1,4,2],[84.87,"-"]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[20.42,"="]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.1,"="]],["GRC","Greece",62.04,[20210607,1,2,1,4,1,1,1,3,4],[6.39,"-"]],["BLZ","Belize",62.04,[20210614,0,2,1,4,1,2,2,1,3],[2.87,"+"]],["GBR","United Kingdom",62.5,[20210604,1,2,2,4,1,0,2,3,3],[11.07,"+"]],["KAZ","Kazakhstan",62.96,[20210605,2,2,2,4,0,0,2,3,3],[5.77,"+"]],["MOZ","Mozambique",63.89,[20210613,0,2,2,3,1,3,2,1,3],[0.22,"+"]],["MDG","Madagascar",63.89,[20210606,1,2,1,3,1,2,1,4,4],[0.11,"="]],["ERI","Eritrea",64.81,[20210613,0,0,2,4,1,1,2,4,3],[1.67,"-"]],["MYS","Malaysia",64.81,[20210614,0,2,2,4,2,2,2,2,3],[17.75,"-"]],["TUR","Turkey",64.81,[20210615,1,1,1,2,2,2,2,2,4],[7.08,"-"]],["GEO","Georgia",64.81,[20210610,0,2,2,4,0,2,2,2,3],[17.69,"+"]],["TTO","Trinidad and Tobago",64.81,[20210530,2,2,2,4,1,0,0,4,4],[22.76,"+"]],["PAK","Pakistan",65.74,[20210614,2,1,2,4,1,2,2,1,3],[0.51,"-"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.81,"="]],["KHM","Cambodia",66.2,[20210614,3,3,2,4,0,2,1,2,3],[3.38,"-"]],["CRI","Costa Rica",66.67,[20210607,3,2,2,3,0,1,2,1,3],[32.23,"-"]],["HUN","Hungary",66.67,[20210517,2,2,2,4,0,2,0,4,3],[1.33,"-"]],["NLD","Netherlands",67.59,[20210611,1,2,2,4,1,1,1,3,2],[7.38,"-"]],["FJI","Fiji",67.59,[20210614,3,1,2,3,0,2,2,3,-1],[7.6,"+"]],["MDA","Moldova",67.59,[20210614,2,2,2,4,1,2,1,1,3],[1.19,"+"]],["GAB","Gabon",67.59,[20210614,1,1,2,3,1,2,2,2,3],[0.67,"-"]],["BTN","Bhutan",68.52,[20210614,3,3,2,3,1,2,1,3,3],[2.18,"-"]],["TWN","Taiwan",68.52,[20210531,3,2,2,4,0,2,2,3,4],[0.93,"-"]],["TLS","Timor-Leste",68.52,[20210601,1,3,1,4,2,2,2,2,4],[7.02,"+"]],["IDN","Indonesia",68.98,[20210614,3,2,2,4,1,2,2,3,4],[3.05,"+"]],["TUN","Tunisia",69.44,[20210614,1,2,2,4,1,2,1,3,3],[16.97,"+"]],["AZE","Azerbaijan",69.44,[20210614,2,2,2,4,1,1,1,4,2],[0.58,"-"]],["MUS","Mauritius",69.44,[20210613,3,2,2,4,0,1,2,2,3],[2.73,"="]],["COL","Colombia",70.37,[20210615,3,2,2,3,2,2,2,1,3],[53.47,"+"]],["LBN","Lebanon",70.37,[20210510,0,2,2,4,1,2,2,2,3],[1.77,"-"]],["ITA","Italy",71.3,[20210611,1,3,2,4,1,2,2,3,4],[2.7,"-"]],["MAR","Morocco",71.3,[20210531,1,2,2,4,1,2,2,3,3],[0.96,"="]],["HKG","Hong Kong",71.3,[20210613,2,2,2,4,1,1,1,3,2],[0.02,"="]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[169.08,"="]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["PHL","Philippines",71.76,[20210607,2,2,2,3,1,2,2,3,3],[6.08,"+"]],["BGD","Bangladesh",72.22,[20210607,3,1,2,4,1,2,1,2,4],[1.56,"+"]],["MMR","Myanmar",72.22,[20210613,3,2,2,4,1,2,1,4,4],[0.39,"+"]],["CAN","Canada",73.61,[20210614,3,3,2,4,1,1,2,4,3],[3.28,"-"]],["IRL","Ireland",74.07,[20210615,1,2,2,3,1,2,2,3,3],[6.29,"+"]],["LAO","Laos",74.07,[20210607,2,2,2,3,2,2,2,2,3],[0.11,"+"]],["AUS","Australia",74.54,[20210604,2,3,2,4,1,2,2,4,3],[0.04,"="]],["DEU","Germany",75.0,[20210614,3,2,2,4,1,2,1,3,2],[2.17,"-"]],["PER","Peru",75.93,[20210613,2,2,2,4,1,3,2,3,4],[9.74,"+"]],["IRN","Iran",76.39,[20210607,2,3,2,3,1,2,2,3,3],[11.83,"+"]],["JAM","Jamaica",76.85,[20210524,1,2,2,4,1,2,2,3,3],[1.68,"-"]],["ECU","Ecuador",76.85,[20210525,2,2,2,3,1,1,2,4,3],[5.17,"-"]],["IRQ","Iraq",77.31,[20210607,3,2,2,4,0,2,2,3,4],[11.03,"+"]],["VNM","Vietnam",77.31,[20210614,3,2,2,4,2,2,2,4,3],[0.31,"+"]],["ARG","Argentina",77.78,[20210613,2,2,2,4,2,2,2,4,3],[51.83,"-"]],["CUB","Cuba",78.24,[20210613,3,3,2,4,2,2,2,2,3],[11.77,"+"]],["CHN","China",78.24,[20210614,3,3,2,4,1,2,2,3,2],[0.0,"="]],["HND","Honduras",78.7,[20210613,3,3,2,4,0,1,2,3,4],[9.12,"+"]],["LBY","Libya",79.63,[20210531,1,2,2,4,1,2,2,4,3],[3.38,"+"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[43.44,"-"]],["NPL","Nepal",81.94,[20210613,2,3,2,4,2,2,2,2,4],[8.26,"-"]],["IND","India",81.94,[20210531,3,3,2,4,2,3,2,3,4],[5.63,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[34.99,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[11.74,"-"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.43,"-"]]];