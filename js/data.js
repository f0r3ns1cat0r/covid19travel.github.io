const dataUpdate="2021.06.23";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",6.48,[20210621,1,0,0,0,0,0,0,1,2],[0.48,"+"]],["CAF","Central African Republic",11.11,[20210613,0,0,0,0,0,0,0,2,0],[0.11,"+"]],["TZA","Tanzania",13.89,[20210607,0,0,0,0,0,0,0,3,0],[0.0,"="]],["BDI","Burundi",15.74,[20210613,0,2,0,0,0,0,0,1,1],[0.28,"+"]],["CIV","Cote d'Ivoire",17.59,[20210619,0,0,0,0,0,1,0,1,4],[0.08,"-"]],["NER","Niger",19.44,[20210621,0,0,2,1,0,0,0,2,3],[0.01,"="]],["TJK","Tajikistan",21.3,[20210621,1,1,0,0,0,0,0,3,4],[0.0,"="]],["NZL","New Zealand",22.22,[20210619,0,0,0,0,0,0,0,4,2],[0.04,"+"]],["KIR","Kiribati",22.22,[20210614,0,0,0,0,0,0,0,4,3],[0.0,"="]],["VUT","Vanuatu",22.22,[20210621,0,0,0,0,0,0,0,4,0],[0.0,"="]],["ISR","Israel",22.22,[20210618,0,0,0,0,0,0,0,4,1],[0.62,"+"]],["SEN","Senegal",23.15,[20210607,1,0,0,0,0,0,0,3,4],[0.36,"+"]],["TCD","Chad",25.0,[20210620,0,0,0,0,0,0,2,2,4],[0.0,"="]],["SSD","South Sudan",25.0,[20210614,0,0,0,3,0,0,0,2,2],[0.13,"="]],["BFA","Burkina Faso",25.0,[20210619,0,0,0,0,0,0,2,2,4],[0.01,"="]],["SLB","Solomon Islands",25.0,[20210620,0,0,1,0,0,0,0,3,0],[0.0,"="]],["PRI","Puerto Rico",26.85,[20210621,1,1,1,0,0,0,0,1,2],[]],["SLV","El Salvador",26.85,[20210615,1,1,1,0,0,0,0,1,4],[2.61,"-"]],["BEN","Benin",27.78,[20210613,0,0,1,3,0,0,0,1,3],[0.04,"="]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[15.67,"-"]],["MAC","Macao",28.7,[20210621,1,0,1,0,0,0,0,3,2],[]],["SOM","Somalia",29.63,[20210621,0,1,1,3,0,1,0,1,3],[0.04,"="]],["CMR","Cameroon",29.63,[20210613,1,0,1,3,0,0,0,1,3],[0.21,"+"]],["DMA","Dominica",31.48,[20210620,0,0,1,2,0,1,0,2,2],[0.4,"="]],["SRB","Serbia",32.41,[20210606,1,0,1,2,0,1,0,1,3],[1.25,"-"]],["EGY","Egypt",33.33,[20210606,2,0,0,1,1,1,0,1,4],[0.54,"-"]],["ABW","Aruba",33.33,[20210620,1,2,1,0,0,0,0,2,1],[4.28,"+"]],["GMB","Gambia",33.33,[20210621,0,0,1,4,0,0,0,2,3],[0.17,"="]],["TON","Tonga",35.19,[20210620,0,0,1,3,0,2,0,3,0],[]],["SVN","Slovenia",35.19,[20210620,1,1,1,3,0,0,0,1,3],[3.33,"-"]],["BIH","Bosnia and Herzegovina",37.04,[20210611,1,2,1,3,0,0,0,1,3],[0.82,"-"]],["MWI","Malawi",37.04,[20210621,0,1,1,3,0,0,0,3,1],[0.3,"+"]],["EST","Estonia",38.89,[20210614,1,2,1,2,0,0,0,2,2],[2.76,"-"]],["ISL","Iceland",38.89,[20210621,2,1,1,2,0,0,0,2,2],[0.0,"="]],["FRO","Faeroe Islands",38.89,[20210621,1,1,1,2,0,1,0,2,2],[3.51,"+"]],["SMR","San Marino",38.89,[20210614,1,1,1,3,0,1,0,1,3],[0.0,"="]],["HRV","Croatia",38.89,[20210617,0,2,1,3,0,1,0,1,4],[2.03,"-"]],["VIR","United States Virgin Islands",38.89,[20210614,2,1,1,3,0,0,0,1,3],[]],["MRT","Mauritania",39.81,[20210614,0,0,2,4,0,1,0,1,3],[0.81,"+"]],["YEM","Yemen",39.81,[20210621,1,1,1,0,0,2,1,3,2],[0.01,"="]],["COD","Democratic Republic of Congo",39.81,[20210622,0,0,2,1,1,1,2,1,3],[0.38,"+"]],["RKS","Kosovo",40.74,[20210611,1,1,1,3,1,0,0,3,3],[0.58,"="]],["BRN","Brunei",40.74,[20210618,1,1,1,2,0,0,0,4,2],[0.2,"-"]],["LVA","Latvia",41.67,[20210621,2,1,1,3,0,0,0,2,3],[5.51,"-"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.41,"-"]],["UZB","Uzbekistan",41.67,[20210620,2,0,1,3,1,0,0,2,3],[1.17,"+"]],["LUX","Luxembourg",41.67,[20210621,1,1,1,2,0,1,0,3,2],[1.85,"-"]],["BLR","Belarus",42.59,[20210524,0,0,1,4,0,1,0,4,3],[7.09,"-"]],["ROU","Romania",42.59,[20210621,2,1,1,4,0,0,0,2,2],[0.33,"-"]],["TGO","Togo",42.59,[20210620,0,2,0,3,0,1,2,2,4],[0.14,"-"]],["GHA","Ghana",42.59,[20210613,0,2,2,3,0,1,0,1,4],[0.25,"-"]],["GUM","Guam",43.52,[20210621,1,1,1,3,1,0,0,2,3],[]],["LBR","Liberia",43.52,[20210607,0,2,1,3,1,0,0,2,3],[1.51,"="]],["ETH","Ethiopia",43.52,[20210620,1,1,1,3,1,0,0,2,3],[0.11,"-"]],["CYP","Cyprus",43.52,[20210621,1,0,1,2,1,1,1,1,3],[6.16,"+"]],["AFG","Afghanistan",43.52,[20210613,3,2,2,0,0,0,1,1,3],[4.58,"+"]],["AND","Andorra",43.52,[20210607,1,1,1,4,1,0,0,1,3],[6.66,"-"]],["LTU","Lithuania",44.44,[20210620,2,1,1,4,0,0,0,2,2],[2.75,"-"]],["MLI","Mali",44.44,[20210614,0,2,2,3,0,1,0,1,3],[0.02,"="]],["MEX","Mexico",44.44,[20210621,3,2,1,0,1,1,2,1,4],[2.57,"="]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[0.75,"="]],["GRC","Greece",45.37,[20210621,1,1,1,0,1,2,0,3,4],[3.77,"-"]],["ALB","Albania",46.3,[20210606,2,1,2,4,0,2,0,0,2],[0.13,"-"]],["USA","United States",46.76,[20210613,2,1,1,4,1,1,1,3,-1],[3.42,"-"]],["BMU","Bermuda",47.22,[20210614,1,1,1,3,1,1,0,2,2],[1.15,"-"]],["NGA","Nigeria",47.22,[20210621,0,1,1,3,1,2,0,2,3],[0.02,"+"]],["CZE","Czech Republic",47.22,[20210613,1,2,2,2,0,0,0,3,2],[1.15,"-"]],["SWZ","Eswatini",47.22,[20210607,1,1,1,2,0,1,2,1,4],[1.23,"+"]],["UGA","Uganda",47.22,[20210622,2,2,0,2,0,2,0,3,3],[2.77,"-"]],["TKM","Turkmenistan",47.22,[20210622,1,2,1,1,0,0,2,4,3],[]],["FIN","Finland",47.69,[20210618,2,2,1,4,0,1,0,3,2],[1.46,"+"]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[1.37,"+"]],["CHE","Switzerland",48.15,[20210618,1,2,1,3,0,1,0,3,2],[1.89,"-"]],["RUS","Russia",49.07,[20210617,3,1,1,3,0,1,0,2,3],[11.03,"+"]],["JPN","Japan",49.07,[20210619,1,2,1,1,0,1,1,4,1],[1.13,"="]],["PRY","Paraguay",49.07,[20210621,1,2,1,3,0,2,0,2,3],[26.67,"-"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.38,"+"]],["AUS","Australia",49.54,[20210618,1,1,1,4,1,0,2,4,3],[0.05,"="]],["SVK","Slovak Republic",50.0,[20210524,2,2,2,4,0,2,0,2,3],[0.78,"+"]],["SLE","Sierra Leone",50.0,[20210621,0,2,2,3,1,1,0,1,4],[0.92,"+"]],["KOR","South Korea",50.0,[20210620,1,1,1,4,0,1,1,2,3],[0.93,"+"]],["DNK","Denmark",50.0,[20210618,1,2,2,3,0,0,0,3,2],[4.0,"-"]],["MCO","Monaco",50.93,[20210614,1,1,2,4,0,2,0,1,3],[8.01,"-"]],["KWT","Kuwait",50.93,[20210607,3,1,2,2,0,0,0,3,3],[39.86,"+"]],["GRL","Greenland",50.93,[20210621,1,2,1,3,0,1,0,4,2],[0.25,"-"]],["COG","Congo",50.93,[20210621,0,1,1,3,1,2,1,2,3],[0.73,"+"]],["BEL","Belgium",50.93,[20210618,1,2,1,4,0,1,0,3,3],[3.63,"-"]],["GBR","United Kingdom",51.39,[20210618,1,2,1,4,1,0,0,3,3],[14.95,"+"]],["GTM","Guatemala",51.85,[20210621,1,2,2,4,1,0,0,3,4],[7.16,"+"]],["FRA","France",51.85,[20210618,1,2,1,4,0,2,0,2,2],[3.4,"-"]],["MLT","Malta",52.78,[20210622,2,1,2,4,0,0,0,3,4],[0.42,"+"]],["THA","Thailand",53.7,[20210619,2,1,2,4,1,1,1,3,4],[4.73,"+"]],["POL","Poland",53.7,[20210618,1,2,1,2,1,1,1,2,2],[0.46,"-"]],["HTI","Haiti",53.7,[20210621,1,1,2,4,0,2,0,2,3],[0.5,"-"]],["SAU","Saudi Arabia",53.7,[20210614,3,1,2,3,0,0,0,3,3],[3.57,"+"]],["ESP","Spain",54.17,[20210620,1,1,2,4,0,1,1,3,4],[7.18,"+"]],["SWE","Sweden",54.63,[20210619,0,1,1,4,1,1,1,3,2],[4.78,"+"]],["DJI","Djibouti",54.63,[20210607,1,1,2,4,2,0,0,1,4],[0.29,"+"]],["OMN","Oman",54.63,[20210621,2,1,1,2,0,2,1,3,3],[39.29,"-"]],["RWA","Rwanda",54.63,[20210614,1,2,1,3,1,2,0,2,3],[3.73,"+"]],["KGZ","Kyrgyz Republic",54.63,[20210619,2,2,2,4,1,0,0,1,3],[11.39,"+"]],["CRI","Costa Rica",55.56,[20210622,3,2,2,3,0,1,0,1,3],[28.91,"-"]],["PAK","Pakistan",56.48,[20210621,2,1,2,4,1,1,1,1,3],[0.43,"-"]],["BHS","Bahamas",56.94,[20210621,2,2,2,4,0,2,2,1,3],[5.59,"-"]],["UKR","Ukraine",57.41,[20210616,3,1,2,4,0,1,0,2,4],[2.21,"-"]],["DOM","Dominican Republic",57.41,[20210614,2,1,2,4,0,2,0,2,4],[10.5,"-"]],["SYR","Syria",57.87,[20210601,2,3,2,3,0,2,2,1,3],[0.25,"+"]],["GIN","Guinea",58.33,[20210621,0,2,2,3,0,2,2,2,3],[0.16,"+"]],["BRB","Barbados",58.33,[20210620,2,2,2,3,0,2,0,2,3],[0.35,"-"]],["SGP","Singapore",58.33,[20210619,3,2,1,4,0,1,0,3,4],[0.32,"+"]],["TLS","Timor-Leste",58.8,[20210620,1,1,1,4,1,2,2,4,4],[4.0,"-"]],["NOR","Norway",59.26,[20210618,1,2,1,3,1,1,1,3,2],[3.34,"="]],["MNG","Mongolia",59.26,[20210621,3,2,2,4,0,1,1,1,4],[65.03,"-"]],["ZAF","South Africa",59.26,[20210621,1,1,1,3,1,2,2,1,3],[19.87,"+"]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[10.46,"+"]],["AUT","Austria",60.19,[20210618,2,2,2,4,1,0,0,3,2],[1.39,"-"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[12.79,"+"]],["ZMB","Zambia",60.19,[20210621,3,2,1,3,2,0,0,2,3],[13.86,"+"]],["ARE","United Arab Emirates",60.65,[20210621,1,2,2,4,1,0,2,3,3],[20.52,"+"]],["BRA","Brazil",60.65,[20210621,2,3,2,3,1,2,2,1,4],[35.04,"+"]],["PNG","Papua New Guinea",61.11,[20210621,1,1,1,3,1,1,2,3,0],[0.53,"="]],["PAN","Panama",61.11,[20210614,3,2,2,3,1,2,0,2,4],[20.78,"+"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[0.84,"+"]],["BWA","Botswana",62.04,[20210613,1,1,2,4,0,2,2,1,3],[26.43,"="]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.01,"="]],["QAT","Qatar",62.96,[20210621,2,2,1,3,1,1,1,3,4],[5.38,"+"]],["BGR","Bulgaria",62.96,[20210622,2,2,1,3,1,1,1,3,2],[1.22,"-"]],["KAZ","Kazakhstan",62.96,[20210605,2,2,2,4,0,0,2,3,3],[6.13,"+"]],["BHR","Bahrain",62.96,[20210621,2,2,2,4,0,1,1,2,3],[28.17,"-"]],["TUR","Turkey",63.43,[20210617,1,1,1,2,2,2,2,2,4],[6.73,"+"]],["URY","Uruguay",63.89,[20210621,2,2,1,3,1,1,1,4,2],[61.05,"-"]],["MOZ","Mozambique",63.89,[20210613,0,2,2,3,1,3,2,1,3],[0.51,"+"]],["MYS","Malaysia",64.81,[20210614,0,2,2,4,2,2,2,2,3],[16.72,"-"]],["ERI","Eritrea",64.81,[20210620,0,0,2,4,1,1,2,4,3],[2.0,"+"]],["NAM","Namibia",64.81,[20210622,3,1,1,4,1,2,2,1,3],[49.17,"-"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[16.78,"-"]],["KEN","Kenya",65.74,[20210606,2,1,2,3,0,2,2,2,3],[0.99,"+"]],["KHM","Cambodia",66.2,[20210614,3,3,2,4,0,2,1,2,3],[3.98,"+"]],["HUN","Hungary",66.67,[20210517,2,2,2,4,0,2,0,4,3],[0.86,"-"]],["MAR","Morocco",66.67,[20210621,2,2,1,1,2,2,2,3,3],[1.04,"-"]],["DEU","Germany",67.59,[20210620,1,2,2,4,1,1,1,3,2],[1.02,"-"]],["ZWE","Zimbabwe",67.59,[20210621,0,2,2,3,1,2,2,2,3],[2.3,"+"]],["NLD","Netherlands",67.59,[20210618,1,2,2,4,1,1,1,3,2],[4.73,"-"]],["FJI","Fiji",67.59,[20210621,3,1,2,3,0,2,2,3,2],[15.11,"+"]],["MDG","Madagascar",67.59,[20210621,2,2,1,3,1,2,1,4,4],[0.09,"-"]],["MDA","Moldova",67.59,[20210614,2,2,2,4,1,2,1,1,3],[1.25,"-"]],["GAB","Gabon",67.59,[20210621,1,1,2,3,1,2,2,2,3],[0.83,"+"]],["TWN","Taiwan",68.52,[20210531,3,2,2,4,0,2,2,3,4],[0.55,"-"]],["IRL","Ireland",68.52,[20210620,1,2,1,3,1,2,2,3,3],[6.38,"-"]],["BTN","Bhutan",68.52,[20210614,3,3,2,3,1,2,1,3,3],[2.24,"+"]],["IDN","Indonesia",68.98,[20210614,3,2,2,4,1,2,2,3,4],[4.72,"+"]],["MUS","Mauritius",69.44,[20210613,3,2,2,4,0,1,2,2,3],[0.0,"="]],["AZE","Azerbaijan",69.44,[20210614,2,2,2,4,1,1,1,4,2],[0.43,"-"]],["LAO","Laos",69.44,[20210621,2,2,2,3,1,2,1,2,3],[0.08,"-"]],["TUN","Tunisia",69.44,[20210614,1,2,2,4,1,2,1,3,3],[18.8,"+"]],["PRT","Portugal",70.37,[20210618,1,2,2,4,1,1,2,3,3],[10.9,"+"]],["COL","Colombia",70.37,[20210620,3,2,2,3,2,2,2,1,3],[54.74,"+"]],["ITA","Italy",71.3,[20210618,1,3,2,4,1,2,2,3,4],[1.72,"-"]],["LBN","Lebanon",71.3,[20210620,1,2,2,3,1,2,2,2,3],[1.84,"-"]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[143.81,"+"]],["HKG","Hong Kong",71.3,[20210621,2,2,2,4,1,1,1,3,2],[0.03,"+"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["PHL","Philippines",71.76,[20210621,2,2,2,3,1,2,2,3,3],[5.28,"-"]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.72,"="]],["MMR","Myanmar",72.22,[20210613,3,2,2,4,1,2,1,4,4],[0.84,"+"]],["BLZ","Belize",73.15,[20210621,3,2,1,4,1,2,2,1,3],[2.51,"+"]],["CAN","Canada",73.61,[20210618,3,3,2,4,1,1,2,4,3],[2.29,"-"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[17.08,"-"]],["PER","Peru",75.93,[20210620,2,2,2,4,1,3,2,3,4],[10.02,"-"]],["IRN","Iran",76.39,[20210607,2,3,2,3,1,2,2,3,3],[11.51,"+"]],["ECU","Ecuador",76.85,[20210525,2,2,2,3,1,1,2,4,3],[6.32,"+"]],["IRQ","Iraq",77.31,[20210607,3,2,2,4,0,2,2,3,4],[12.22,"+"]],["VNM","Vietnam",77.31,[20210621,3,2,2,4,2,2,2,4,3],[0.36,"-"]],["ARG","Argentina",77.78,[20210621,2,2,2,4,2,2,2,4,3],[39.84,"-"]],["CUB","Cuba",78.24,[20210621,3,3,2,4,2,2,2,2,3],[12.94,"-"]],["CHN","China",78.24,[20210621,3,3,2,4,1,2,2,3,2],[0.0,"="]],["HND","Honduras",78.7,[20210621,3,3,2,4,0,1,2,3,4],[8.65,"-"]],["LBY","Libya",79.63,[20210531,1,2,2,4,1,2,2,4,3],[3.53,"-"]],["NPL","Nepal",80.56,[20210621,2,3,2,4,2,2,2,2,3],[6.93,"+"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[35.87,"-"]],["IND","India",81.94,[20210617,3,3,2,4,2,3,2,3,4],[4.1,"-"]],["CHL","Chile",84.72,[20210613,3,3,2,4,2,3,2,4,3],[28.92,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[10.45,"-"]],["BGD","Bangladesh",86.11,[20210622,3,3,2,4,2,2,2,2,3],[2.42,"+"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[4.65,"+"]]];