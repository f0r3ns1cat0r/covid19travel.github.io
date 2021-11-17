const dataUpdate="2021.11.17";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["CAF","Central African Republic",5.56,[20211101,0,0,0,0,0,0,0,2,1],[0.26,"="]],["NIC","Nicaragua",8.33,[20211114,0,0,0,0,0,0,0,1,1],[0.7,"+"]],["TZA","Tanzania",8.33,[20211115,0,0,0,0,0,0,0,1,1],[0.0,"="]],["BDI","Burundi",11.11,[20211109,0,0,0,0,0,0,0,2,1],[0.13,"-"]],["BWA","Botswana",13.89,[20211107,0,0,0,0,0,0,0,1,2],[4.13,"="]],["BFA","Burkina Faso",13.89,[20211115,0,0,0,0,0,0,0,1,3],[0.28,"+"]],["GMB","Gambia",13.89,[20211116,0,0,0,0,0,0,0,1,3],[0.04,"="]],["SDN","Sudan",13.89,[20211114,0,0,0,-1,0,0,0,1,4],[0.09,"-"]],["TUN","Tunisia",16.67,[20211114,0,0,0,0,0,0,0,2,3],[2.98,"+"]],["NER","Niger",16.67,[20211114,0,0,2,0,0,0,0,2,3],[0.09,"-"]],["JOR","Jordan",17.59,[20211113,0,1,0,0,0,0,0,1,2],[20.47,"-"]],["CIV","Cote d'Ivoire",17.59,[20211113,0,0,0,0,0,1,0,1,4],[0.04,"-"]],["BLR","Belarus",19.44,[20211101,0,0,0,0,0,0,0,3,0],[20.12,"-"]],["SWE","Sweden",19.44,[20211116,0,0,0,0,0,0,0,3,0],[8.35,"+"]],["PRI","Puerto Rico",19.44,[20211101,-1,0,1,0,0,0,0,1,3],[]],["VUT","Vanuatu",19.44,[20211115,0,0,0,0,0,0,0,3,1],[0.0,"="]],["NOR","Norway",20.37,[20211112,1,0,0,0,0,0,0,2,0],[32.48,"+"]],["SEN","Senegal",21.3,[20211116,1,1,0,0,0,0,0,1,3],[0.01,"-"]],["KIR","Kiribati",22.22,[20211108,0,0,0,0,0,0,0,4,0],[0.0,"="]],["TCD","Chad",22.22,[20211106,0,0,0,3,0,0,0,1,4],[0.0,"="]],["BGD","Bangladesh",23.15,[20211108,0,0,1,0,0,1,0,1,4],[0.13,"="]],["YEM","Yemen",23.15,[20211108,1,0,1,0,0,0,1,1,2],[0.02,"-"]],["DNK","Denmark",24.07,[20211115,1,1,0,0,0,0,0,2,2],[57.9,"+"]],["MWI","Malawi",24.07,[20211101,0,1,0,1,0,1,0,1,3],[0.02,"="]],["PSE","Palestine",25.0,[20211114,0,0,0,0,0,0,2,2,4],[]],["CMR","Cameroon",25.0,[20211115,0,0,1,3,0,0,0,2,3],[0.99,"="]],["MDG","Madagascar",26.85,[20211113,0,2,0,2,0,2,0,1,3],[0.02,"="]],["FIN","Finland",27.31,[20211115,1,0,0,3,0,0,0,2,1],[15.26,"+"]],["AFG","Afghanistan",27.78,[20211031,0,2,2,0,2,0,0,2,3],[0.09,"+"]],["HUN","Hungary",27.78,[20211101,0,0,1,3,0,0,0,1,2],[76.28,"+"]],["SLB","Solomon Islands",27.78,[20211115,0,0,1,0,0,0,0,4,0],[0.0,"="]],["SLV","El Salvador",27.78,[20211024,0,0,2,1,0,0,0,1,2],[3.93,"="]],["LIE","Liechtenstein",28.7,[20211115,0,0,0,3,0,1,0,2,3],[61.45,"+"]],["MUS","Mauritius",28.7,[20211108,0,1,0,3,0,0,0,2,3],[0.0,"-"]],["TUR","Turkey",28.7,[20211115,0,1,1,0,1,0,0,1,4],[28.62,"-"]],["SVK","Slovak Republic",29.17,[20211109,1,1,1,3,0,0,0,2,3],[113.19,"+"]],["GRL","Greenland",29.63,[20211111,1,1,1,1,0,0,1,1,2],[37.24,"-"]],["TJK","Tajikistan",29.63,[20211116,1,1,0,0,0,0,0,4,3],[0.0,"="]],["SLE","Sierra Leone",29.63,[20211115,1,1,0,0,1,0,0,2,3],[0.0,"="]],["MDA","Moldova",29.63,[20211115,1,1,0,2,0,0,0,2,2],[21.84,"-"]],["BHR","Bahrain",29.63,[20211108,0,1,1,0,0,1,0,2,3],[1.25,"+"]],["COL","Colombia",29.63,[20211029,0,1,1,3,1,0,0,0,4],[4.81,"-"]],["BOL","Bolivia",30.09,[20211115,2,1,1,1,0,1,0,2,3],[7.73,"+"]],["MAR","Morocco",30.56,[20211115,1,1,0,0,0,1,0,3,3],[0.3,"-"]],["PAK","Pakistan",31.94,[20211115,0,1,1,2,0,1,0,3,4],[0.15,"-"]],["EST","Estonia",32.41,[20211109,1,1,1,1,0,0,0,2,2],[70.02,"-"]],["NAM","Namibia",32.41,[20211116,0,1,1,2,0,1,0,1,3],[0.25,"-"]],["UZB","Uzbekistan",33.33,[20211113,1,0,1,2,0,1,0,2,2],[0.73,"-"]],["ISL","Iceland",33.33,[20211114,1,1,1,3,0,0,0,1,2],[50.7,"+"]],["HRV","Croatia",35.19,[20211114,1,1,1,3,0,0,0,1,2],[128.04,"-"]],["PRY","Paraguay",35.19,[20211112,1,1,1,3,0,0,0,1,3],[1.29,"+"]],["MCO","Monaco",35.19,[20211115,1,1,1,0,1,0,0,2,2],[17.11,"="]],["SOM","Somalia",35.19,[20211101,0,1,1,3,0,1,0,1,3],[0.13,"="]],["MEX","Mexico",35.19,[20211114,0,2,1,0,1,1,2,1,4],[1.69,"-"]],["CZE","Czech Republic",35.19,[20211115,1,1,1,3,0,0,0,1,2],[105.64,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20211108,1,1,1,3,0,0,0,1,2],[22.23,"-"]],["SSD","South Sudan",35.19,[20211108,1,1,0,4,0,0,0,2,2],[0.09,"-"]],["CHL","Chile",35.65,[20211113,1,1,1,2,0,0,2,2,3],[12.9,"-"]],["MNG","Mongolia",37.04,[20211115,1,2,1,3,0,1,1,1,4],[28.83,"+"]],["URY","Uruguay",37.04,[20211105,0,1,1,2,1,0,0,2,2],[5.26,"+"]],["SMR","San Marino",37.96,[20211115,1,1,1,4,0,0,0,1,3],[30.73,"+"]],["KEN","Kenya",37.96,[20211025,0,2,2,2,0,0,0,1,4],[0.13,"+"]],["MAC","Macao",37.96,[20211106,1,1,1,0,1,0,0,3,2],[]],["DJI","Djibouti",37.96,[20211025,1,1,1,4,0,0,0,1,4],[0.06,"+"]],["CPV","Cape Verde",37.96,[20211115,0,1,1,0,0,1,2,1,2],[0.98,"+"]],["FRO","Faeroe Islands",38.89,[20211115,1,2,1,3,0,0,0,1,0],[83.62,"-"]],["TGO","Togo",38.89,[20211115,0,0,2,3,0,0,1,1,4],[0.07,"-"]],["POL","Poland",38.89,[20211110,1,1,1,2,0,1,0,2,3],[39.81,"+"]],["COG","Congo",38.89,[20211108,0,1,1,3,0,2,0,1,3],[1.0,"+"]],["NGA","Nigeria",38.89,[20211112,0,1,1,3,1,1,0,1,3],[0.02,"-"]],["IND","India",39.35,[20211115,0,1,1,2,0,2,2,2,4],[0.81,"-"]],["KOR","South Korea",39.35,[20211115,1,2,1,4,0,0,0,2,3],[4.72,"+"]],["DZA","Algeria",39.81,[20211101,0,1,2,4,0,0,0,1,3],[0.28,"="]],["OMN","Oman",39.81,[20211108,1,0,2,4,0,0,0,1,4],[0.15,"-"]],["COD","Democratic Republic of Congo",39.81,[20211115,0,1,1,3,0,2,2,1,3],[0.03,"="]],["SRB","Serbia",40.74,[20211115,1,1,1,2,1,0,0,2,3],[42.42,"-"]],["LBN","Lebanon",40.74,[20211107,0,1,2,1,1,1,0,1,1],[13.17,"+"]],["GHA","Ghana",40.74,[20211031,0,2,2,3,0,0,0,1,4],[0.05,"-"]],["PRT","Portugal",40.74,[20211104,0,2,2,2,0,0,0,2,2],[15.2,"+"]],["ESP","Spain",41.2,[20211104,1,2,2,3,0,0,0,2,3],[8.86,"+"]],["BRA","Brazil",41.2,[20211115,2,1,1,2,1,1,2,1,3],[4.61,"-"]],["GBR","United Kingdom",41.2,[20211112,1,2,1,3,1,0,0,3,3],[57.69,"+"]],["TWN","Taiwan",41.67,[20211112,1,2,1,3,0,0,0,2,3],[0.03,"="]],["BMU","Bermuda",41.67,[20211116,1,1,1,3,0,1,0,2,2],[5.73,"+"]],["NLD","Netherlands",41.67,[20211112,1,2,2,0,0,0,0,3,2],[92.21,"+"]],["RKS","Kosovo",42.59,[20211115,1,1,1,3,0,2,0,1,3],[0.53,"-"]],["VIR","United States Virgin Islands",42.59,[20211022,1,2,1,3,0,1,0,1,3],[]],["ARG","Argentina",42.59,[20211114,1,1,1,1,1,1,1,2,3],[2.96,"+"]],["MLT","Malta",43.52,[20211115,1,1,1,4,0,0,0,3,3],[11.42,"+"]],["LSO","Lesotho",43.52,[20211115,1,2,1,2,0,2,0,1,3],[0.08,"+"]],["EGY","Egypt",43.52,[20211108,1,1,2,4,0,0,0,1,4],[0.91,"="]],["TON","Tonga",43.52,[20211108,0,0,1,3,0,2,0,4,2],[0.0,"="]],["ETH","Ethiopia",43.52,[20211109,1,1,1,3,1,0,0,2,3],[0.2,"="]],["DEU","Germany",43.98,[20211105,1,2,2,4,0,0,0,2,2],[49.0,"+"]],["SGP","Singapore",44.44,[20211106,1,1,1,4,0,1,0,2,4],[41.86,"-"]],["MLI","Mali",44.44,[20211114,1,2,2,3,0,0,0,1,3],[0.17,"-"]],["ABW","Aruba",44.44,[20211024,1,1,1,4,0,1,0,2,2],[13.65,"+"]],["ZWE","Zimbabwe",44.44,[20211101,1,1,1,3,1,1,0,1,4],[0.25,"+"]],["LBR","Liberia",44.44,[20211115,1,2,1,3,1,0,0,1,3],[0.0,"-"]],["LBY","Libya",44.44,[20211108,2,0,2,4,0,0,0,2,3],[7.3,"-"]],["ZMB","Zambia",44.44,[20211115,1,1,1,1,1,1,1,1,1],[0.07,"="]],["BEL","Belgium",44.91,[20211115,1,1,2,3,0,0,0,3,2],[106.05,"+"]],["TLS","Timor-Leste",44.91,[20211114,0,2,2,3,2,1,0,2,3],[0.09,"-"]],["USA","United States",44.91,[20211116,2,2,1,4,1,1,1,1,3],[25.56,"+"]],["ZAF","South Africa",45.37,[20211108,1,1,1,2,1,2,0,1,3],[0.49,"+"]],["ALB","Albania",45.37,[20211113,1,1,1,3,0,2,0,2,2],[18.52,"-"]],["CYP","Cyprus",46.3,[20211108,1,1,1,3,1,0,0,3,2],[21.38,"+"]],["CHE","Switzerland",46.3,[20211113,1,1,2,3,0,0,0,3,2],[42.87,"+"]],["GUM","Guam",46.3,[20211108,1,1,2,4,0,0,0,2,3],[]],["ARE","United Arab Emirates",46.3,[20211114,1,1,1,3,1,0,1,1,2],[0.73,"="]],["LTU","Lithuania",46.3,[20211105,1,1,2,4,0,0,0,2,2],[80.11,"-"]],["LUX","Luxembourg",46.3,[20211115,1,1,1,3,1,0,0,3,2],[31.65,"-"]],["AND","Andorra",46.3,[20211115,1,1,1,4,1,0,0,2,2],[39.2,"+"]],["GTM","Guatemala",46.76,[20211108,2,1,2,3,2,0,0,1,4],[3.07,"-"]],["BTN","Bhutan",47.22,[20211108,2,1,1,3,0,0,1,2,3],[0.04,"="]],["JPN","Japan",47.22,[20211115,1,1,1,1,0,1,1,4,1],[0.13,"="]],["GEO","Georgia",47.22,[20211108,1,2,2,4,0,0,0,1,3],[107.61,"-"]],["MOZ","Mozambique",48.15,[20211115,0,1,2,3,1,2,0,1,3],[0.03,"="]],["IRL","Ireland",48.15,[20211116,1,2,2,1,0,1,0,3,3],[85.45,"+"]],["KGZ","Kyrgyz Republic",49.07,[20211108,1,1,2,4,0,0,1,1,2],[1.3,"+"]],["BEN","Benin",50.0,[20211101,0,2,2,3,0,1,0,3,4],[0.03,"="]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[0.76,"-"]],["AZE","Azerbaijan",51.85,[20211116,1,1,2,2,0,0,1,4,2],[19.01,"+"]],["QAT","Qatar",51.85,[20211114,-1,1,1,4,1,1,1,2,2],[4.92,"+"]],["GAB","Gabon",51.85,[20211107,0,0,2,3,1,2,1,1,3],[2.93,"-"]],["RWA","Rwanda",51.85,[20211115,1,2,1,3,1,2,0,1,3],[0.18,"-"]],["KWT","Kuwait",51.85,[20211115,1,1,1,3,0,0,2,3,4],[0.53,"-"]],["LKA","Sri Lanka",52.78,[20211115,1,1,2,3,0,1,1,2,3],[4.23,"="]],["MRT","Mauritania",52.78,[20211114,0,1,2,4,1,2,0,1,3],[1.61,"+"]],["DOM","Dominican Republic",52.78,[20211106,1,1,1,4,1,1,1,1,3],[10.48,"+"]],["HKG","Hong Kong",52.78,[20211108,1,1,1,3,1,1,1,2,2],[0.04,"="]],["ISR","Israel",53.7,[20211115,2,2,2,2,0,0,0,4,2],[5.03,"+"]],["BGR","Bulgaria",53.7,[20211101,2,2,2,3,0,0,0,3,3],[40.58,"-"]],["SVN","Slovenia",53.7,[20211115,1,2,2,4,0,1,0,2,2],[158.87,"+"]],["KHM","Cambodia",54.17,[20211114,0,2,2,4,0,2,2,2,3],[0.35,"-"]],["CRI","Costa Rica",54.63,[20211101,2,2,2,2,0,1,1,1,3],[4.52,"-"]],["THA","Thailand",55.09,[20211108,1,1,2,3,0,2,2,3,4],[9.87,"-"]],["SWZ","Eswatini",55.56,[20211101,3,1,1,3,0,2,1,1,4],[0.23,"+"]],["RUS","Russia",56.02,[20211101,3,1,2,3,0,1,2,2,2],[25.84,"-"]],["ROU","Romania",57.41,[20211101,3,1,1,2,1,1,1,2,3],[22.16,"-"]],["SAU","Saudi Arabia",57.41,[20211025,1,1,2,3,1,0,1,3,2],[0.11,"-"]],["NPL","Nepal",57.87,[20211115,2,1,1,4,1,1,2,2,4],[1.13,"-"]],["ECU","Ecuador",57.87,[20211115,2,1,1,4,1,1,2,2,3],[1.81,"-"]],["IDN","Indonesia",57.87,[20211111,1,1,2,3,1,1,2,3,3],[0.13,"-"]],["UKR","Ukraine",58.33,[20211109,2,1,1,3,2,0,2,1,3],[47.56,"-"]],["PAN","Panama",58.33,[20211106,2,3,2,4,0,2,0,2,4],[4.66,"+"]],["AUT","Austria",59.26,[20211115,2,2,2,3,1,2,0,2,2],[130.27,"+"]],["MYS","Malaysia",59.26,[20211101,2,1,2,4,1,1,2,2,3],[17.52,"-"]],["BLZ","Belize",60.19,[20211116,1,2,1,4,1,2,1,1,4],[39.77,"+"]],["AUS","Australia",60.65,[20211115,1,2,2,4,1,0,2,3,3],[4.92,"+"]],["SYR","Syria",60.65,[20211115,3,3,2,3,1,2,1,1,3],[0.89,"-"]],["PER","Peru",61.11,[20211104,2,2,2,4,0,2,1,3,4],[3.87,"+"]],["TKM","Turkmenistan",61.11,[20211115,1,2,2,4,1,-1,2,4,3],[]],["ERI","Eritrea",62.04,[20211110,1,1,2,3,1,2,0,4,3],[0.39,"-"]],["GIN","Guinea",62.04,[20211115,1,2,2,4,1,2,1,1,3],[0.01,"="]],["AGO","Angola",63.43,[20211108,0,2,2,4,1,1,2,4,3],[0.08,"="]],["SUR","Suriname",63.89,[20211112,2,2,2,4,0,2,0,3,4],[8.72,"-"]],["HND","Honduras",63.89,[20211109,2,2,2,0,2,1,2,1,3],[0.61,"-"]],["HTI","Haiti",64.81,[20211031,1,1,2,4,1,2,1,2,3],[0.6,"+"]],["CUB","Cuba",65.28,[20211031,3,1,2,4,2,2,2,1,4],[3.01,"-"]],["PNG","Papua New Guinea",65.74,[20211115,2,2,2,3,2,1,2,2,3],[1.85,"-"]],["GUY","Guyana",65.74,[20211031,1,2,2,4,1,2,0,3,4],[11.97,"+"]],["SYC","Seychelles",65.74,[20211108,1,2,2,4,1,2,2,1,1],[38.49,"-"]],["FRA","France",66.67,[20211115,1,2,2,3,1,0,2,3,2],[17.26,"+"]],["CAN","Canada",67.13,[20211115,2,3,2,4,1,1,2,3,3],[6.41,"-"]],["BRB","Barbados",67.59,[20211112,3,2,2,3,1,2,0,2,3],[97.58,"-"]],["VNM","Vietnam",68.98,[20211101,3,2,2,3,2,2,2,2,3],[8.89,"+"]],["TTO","Trinidad and Tobago",69.44,[20211031,2,2,2,4,0,2,2,1,3],[31.86,"+"]],["LVA","Latvia",70.37,[20211114,2,3,2,4,1,2,0,2,3],[61.66,"-"]],["KAZ","Kazakhstan",71.3,[20211105,1,1,2,4,2,2,2,3,3],[6.6,"-"]],["ITA","Italy",71.3,[20211112,2,3,2,1,1,2,2,3,3],[12.85,"+"]],["IRN","Iran",72.69,[20211114,3,3,2,4,0,2,2,3,3],[8.02,"-"]],["JAM","Jamaica",74.07,[20211114,2,2,2,4,1,3,2,2,3],[2.67,"-"]],["PHL","Philippines",74.54,[20211107,3,2,2,4,2,2,2,3,4],[1.65,"-"]],["VEN","Venezuela",75.0,[20211107,3,2,2,4,1,1,1,3,4],[3.15,"="]],["LAO","Laos",75.0,[20211101,3,2,2,3,2,2,2,2,3],[14.59,"+"]],["UGA","Uganda",75.93,[20211101,3,2,2,2,1,2,2,2,3],[0.11,"="]],["IRQ","Iraq",75.93,[20211115,3,2,2,3,0,2,2,3,3],[2.04,"-"]],["CHN","China",76.39,[20211108,3,3,2,4,1,3,2,2,2],[0.0,"="]],["BRN","Brunei",79.63,[20211110,3,3,2,4,1,2,0,4,4],[13.94,"-"]],["DMA","Dominica",79.63,[20211115,3,3,2,4,1,2,1,2,3],[73.63,"+"]],["GRC","Greece",80.09,[20211108,2,2,2,4,2,2,2,3,2],[63.02,"-"]],["NZL","New Zealand",81.02,[20211108,3,3,2,4,2,2,2,4,3],[4.04,"+"]],["MMR","Myanmar",85.19,[20211108,3,2,2,4,1,2,2,4,4],[1.61,"="]],["FJI","Fiji",90.74,[20211108,3,3,2,4,2,2,2,2,2],[2.09,"="]]];