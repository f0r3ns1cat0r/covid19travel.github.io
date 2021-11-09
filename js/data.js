const dataUpdate="2021.11.09";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["CAF","Central African Republic",5.56,[20211101,0,0,0,0,0,0,0,2,1],[0.0,"-"]],["NIC","Nicaragua",8.33,[20211024,0,0,0,0,0,0,0,1,1],[0.6,"="]],["BDI","Burundi",11.11,[20211109,0,0,0,0,0,0,0,2,1],[0.1,"-"]],["SDN","Sudan",13.89,[20211018,0,0,0,-1,0,0,0,1,4],[0.0,"="]],["BWA","Botswana",13.89,[20211107,0,0,0,0,0,0,0,1,2],[37.47,"-"]],["GMB","Gambia",13.89,[20211106,0,0,0,0,0,0,0,1,3],[0.04,"-"]],["FRO","Faeroe Islands",13.89,[20211029,0,0,0,0,0,0,0,1,0],[133.02,"-"]],["BFA","Burkina Faso",13.89,[20211024,0,0,0,0,0,0,0,1,4],[0.21,"="]],["VUT","Vanuatu",16.67,[20211025,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TUN","Tunisia",16.67,[20211107,0,0,0,0,0,0,0,2,3],[0.7,"+"]],["CIV","Cote d'Ivoire",17.59,[20211023,0,0,0,0,0,1,0,1,4],[0.06,"-"]],["PRI","Puerto Rico",19.44,[20211101,-1,0,1,0,0,0,0,1,3],[]],["BLR","Belarus",19.44,[20211101,0,0,0,0,0,0,0,3,0],[20.8,"="]],["SWE","Sweden",19.44,[20211106,0,0,0,0,0,0,0,3,0],[7.9,"="]],["NOR","Norway",20.37,[20211104,1,0,0,0,0,0,0,2,0],[25.75,"+"]],["FIN","Finland",20.37,[20211108,1,0,0,0,0,0,0,2,1],[14.18,"+"]],["SEN","Senegal",21.3,[20211106,1,1,0,0,0,0,0,1,3],[0.02,"="]],["KIR","Kiribati",22.22,[20211108,0,0,0,0,0,0,0,4,0],[0.0,"="]],["TCD","Chad",22.22,[20211106,0,0,0,3,0,0,0,1,4],[0.0,"-"]],["JOR","Jordan",23.15,[20211026,0,1,0,0,0,0,0,3,2],[19.19,"+"]],["BGD","Bangladesh",23.15,[20211108,0,0,1,0,0,1,0,1,4],[0.13,"="]],["YEM","Yemen",23.15,[20211108,1,0,1,0,0,0,1,1,2],[0.04,"="]],["MWI","Malawi",24.07,[20211101,0,1,0,1,0,1,0,1,3],[0.01,"="]],["DNK","Denmark",24.07,[20211108,1,1,0,0,0,0,0,2,2],[38.51,"+"]],["EST","Estonia",25.0,[20211018,0,0,1,1,0,0,0,2,2],[113.09,"-"]],["NER","Niger",25.0,[20211101,0,0,2,3,0,0,0,2,3],[0.09,"+"]],["MDA","Moldova",25.93,[20211101,0,1,0,2,0,0,0,2,2],[28.3,"-"]],["MDG","Madagascar",26.85,[20211025,0,2,0,2,0,0,0,1,3],[0.0,"="]],["AFG","Afghanistan",27.78,[20211031,0,2,2,0,2,0,0,2,3],[0.04,"-"]],["HUN","Hungary",27.78,[20211101,0,0,1,3,0,0,0,1,2],[52.3,"+"]],["SLV","El Salvador",27.78,[20211024,0,0,2,1,0,0,0,1,2],[6.25,"="]],["MUS","Mauritius",28.7,[20211108,0,1,0,3,0,0,0,2,3],[8.08,"+"]],["LIE","Liechtenstein",28.7,[20211108,0,0,0,3,0,1,0,2,3],[28.48,"+"]],["SVK","Slovak Republic",29.17,[20211025,1,1,1,3,0,0,0,2,3],[94.25,"+"]],["BHR","Bahrain",29.63,[20211108,0,1,1,0,0,1,0,2,3],[1.88,"-"]],["COL","Colombia",29.63,[20211029,0,1,1,3,1,0,0,0,4],[3.64,"+"]],["SLE","Sierra Leone",29.63,[20211108,1,1,0,0,1,0,0,2,3],[0.0,"="]],["TJK","Tajikistan",29.63,[20211101,1,1,0,0,0,0,0,4,3],[0.0,"="]],["GRL","Greenland",30.09,[20211102,1,0,1,3,0,0,1,1,2],[18.12,"+"]],["PAK","Pakistan",31.94,[20211108,0,1,1,2,0,1,0,3,4],[0.23,"="]],["AZE","Azerbaijan",32.41,[20211106,1,1,1,2,0,0,0,1,2],[22.57,"+"]],["SLB","Solomon Islands",33.33,[20211025,0,0,1,0,0,0,1,4,0],[0.0,"="]],["BOL","Bolivia",35.19,[20211031,1,1,2,4,0,0,0,2,-1],[5.45,"+"]],["MEX","Mexico",35.19,[20211108,0,2,1,0,1,1,2,1,4],[2.17,"="]],["HRV","Croatia",35.19,[20211018,1,1,-1,2,1,0,0,2,2],[108.21,"+"]],["SSD","South Sudan",35.19,[20211108,1,1,0,4,0,0,0,2,2],[0.13,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20211108,1,1,1,3,0,0,0,1,2],[24.23,"+"]],["MCO","Monaco",35.19,[20211025,1,1,1,0,1,0,0,2,2],[9.1,"+"]],["CZE","Czech Republic",35.19,[20211022,1,1,1,1,0,0,0,3,2],[71.37,"+"]],["PRY","Paraguay",35.19,[20211102,1,1,1,3,0,0,0,1,3],[0.65,"+"]],["SOM","Somalia",35.19,[20211101,0,1,1,3,0,1,0,1,3],[0.62,"="]],["CHL","Chile",35.65,[20211107,1,1,1,2,0,0,2,2,3],[10.95,"+"]],["NAM","Namibia",36.11,[20211101,0,1,1,2,0,2,0,1,3],[0.43,"-"]],["URY","Uruguay",37.04,[20211105,0,1,1,2,1,0,0,2,2],[5.58,"-"]],["BEN","Benin",37.04,[20211101,0,0,2,3,0,1,0,2,4],[0.06,"="]],["MNG","Mongolia",37.04,[20211108,1,2,1,3,0,1,1,1,4],[26.47,"-"]],["COD","Democratic Republic of Congo",37.96,[20211018,0,1,1,3,0,2,2,1,3],[0.01,"-"]],["DJI","Djibouti",37.96,[20211025,1,1,1,4,0,0,0,1,4],[0.16,"-"]],["SMR","San Marino",37.96,[20211025,1,1,1,4,0,0,0,1,3],[21.47,"+"]],["MAC","Macao",37.96,[20211106,1,1,1,0,1,0,0,3,2],[]],["KEN","Kenya",37.96,[20211025,0,2,2,2,0,0,0,1,4],[0.14,"="]],["TZA","Tanzania",38.89,[20211101,1,1,1,1,1,1,1,1,1],[0.01,"="]],["POL","Poland",38.89,[20211103,1,1,1,2,0,1,0,2,3],[30.72,"+"]],["COG","Congo",38.89,[20211108,0,1,1,3,0,2,0,1,3],[1.25,"-"]],["TGO","Togo",38.89,[20211018,0,0,2,3,0,0,1,1,4],[0.07,"+"]],["KOR","South Korea",39.35,[20211108,1,2,1,4,0,0,0,2,3],[4.3,"+"]],["UZB","Uzbekistan",39.81,[20211026,1,0,0,3,1,0,1,2,3],[0.82,"-"]],["OMN","Oman",39.81,[20211108,1,0,2,4,0,0,0,1,4],[0.21,"="]],["ETH","Ethiopia",39.81,[20211109,0,1,1,3,1,0,0,2,3],[0.25,"="]],["DZA","Algeria",39.81,[20211101,0,1,2,4,0,0,0,1,3],[0.22,"-"]],["BRA","Brazil",40.28,[20211101,2,2,1,2,1,2,0,1,3],[4.8,"+"]],["ZMB","Zambia",40.74,[20211025,0,2,2,0,1,0,0,2,4],[0.13,"="]],["LBN","Lebanon",40.74,[20211107,0,1,2,1,1,1,0,1,1],[9.72,"+"]],["GHA","Ghana",40.74,[20211031,0,2,2,3,0,0,0,1,4],[0.14,"="]],["PRT","Portugal",40.74,[20211104,0,2,2,2,0,0,0,2,2],[9.78,"+"]],["SRB","Serbia",40.74,[20211025,1,1,1,2,1,0,0,2,3],[63.32,"-"]],["AND","Andorra",40.74,[20211108,1,1,1,2,1,0,0,2,2],[34.94,"+"]],["GBR","United Kingdom",41.2,[20211105,1,2,1,3,1,0,0,3,3],[50.26,"-"]],["ESP","Spain",41.2,[20211104,1,2,2,3,0,0,0,2,3],[6.39,"+"]],["ISL","Iceland",41.67,[20211025,2,1,1,2,0,0,0,3,2],[34.83,"+"]],["CMR","Cameroon",41.67,[20211105,0,0,2,3,0,0,2,2,3],[1.0,"="]],["NLD","Netherlands",41.67,[20211104,1,2,2,0,0,0,0,3,2],[61.05,"+"]],["RKS","Kosovo",42.59,[20211101,1,1,1,3,0,2,0,1,3],[0.91,"+"]],["VIR","United States Virgin Islands",42.59,[20211022,1,2,1,3,0,1,0,1,3],[]],["ARG","Argentina",42.59,[20211025,1,1,1,1,1,1,1,2,3],[2.57,"+"]],["TON","Tonga",43.52,[20211108,0,0,1,3,0,2,0,4,2],[0.0,"="]],["MLT","Malta",43.52,[20211108,1,1,1,4,0,0,0,3,3],[8.35,"+"]],["LSO","Lesotho",43.52,[20211024,1,2,1,2,0,2,0,1,3],[0.33,"="]],["EGY","Egypt",43.52,[20211108,1,1,2,4,0,0,0,1,4],[0.9,"="]],["NPL","Nepal",43.52,[20211108,1,2,2,3,1,0,0,2,4],[0.94,"-"]],["DEU","Germany",43.98,[20211105,1,2,2,4,0,0,0,2,2],[33.57,"+"]],["LBY","Libya",44.44,[20211108,2,0,2,4,0,0,0,2,3],[7.79,"+"]],["MLI","Mali",44.44,[20211031,1,2,2,3,0,0,0,1,3],[0.22,"+"]],["SGP","Singapore",44.44,[20211106,1,1,1,4,0,1,0,2,4],[48.74,"="]],["ABW","Aruba",44.44,[20211024,1,1,1,4,0,1,0,2,2],[10.7,"-"]],["ZWE","Zimbabwe",44.44,[20211101,0,2,1,3,1,1,0,1,4],[0.19,"-"]],["LBR","Liberia",44.44,[20211101,1,2,1,3,1,0,0,1,3],[0.0,"-"]],["IND","India",44.91,[20211108,2,1,1,2,0,2,2,2,4],[0.84,"="]],["ZAF","South Africa",45.37,[20211108,1,1,1,2,1,2,0,1,3],[0.45,"+"]],["BEL","Belgium",45.83,[20211108,1,2,2,3,0,0,0,3,2],[96.37,"+"]],["LTU","Lithuania",46.3,[20211105,1,1,2,4,0,0,0,2,2],[94.25,"-"]],["LUX","Luxembourg",46.3,[20211108,1,1,1,3,1,0,0,3,2],[36.77,"+"]],["ALB","Albania",46.3,[20211108,2,1,2,3,0,2,0,1,2],[19.15,"+"]],["CYP","Cyprus",46.3,[20211108,1,1,1,3,1,0,0,3,2],[17.78,"+"]],["GUM","Guam",46.3,[20211108,1,1,2,4,0,0,0,2,3],[]],["CHE","Switzerland",46.3,[20211106,1,1,2,3,0,0,0,3,2],[28.05,"+"]],["TLS","Timor-Leste",46.3,[20211107,0,2,2,3,2,1,0,2,3],[0.1,"="]],["GTM","Guatemala",46.76,[20211108,2,1,2,3,2,0,0,1,4],[3.26,"="]],["GEO","Georgia",47.22,[20211108,1,2,2,4,0,0,0,1,3],[120.53,"+"]],["ERI","Eritrea",47.22,[20211102,0,1,2,3,1,2,0,4,3],[0.48,"+"]],["BTN","Bhutan",47.22,[20211108,2,1,1,3,0,0,1,2,3],[0.04,"="]],["BMU","Bermuda",47.22,[20211102,1,1,1,3,1,1,0,2,2],[7.11,"+"]],["PSE","Palestine",47.22,[20211101,0,0,2,4,0,0,2,2,4],[]],["JPN","Japan",47.22,[20211106,1,1,1,1,0,1,1,4,1],[0.15,"="]],["ARE","United Arab Emirates",47.69,[20211101,1,1,1,3,1,0,2,1,2],[0.75,"-"]],["IRL","Ireland",48.15,[20211106,1,2,2,1,0,1,0,3,3],[69.72,"+"]],["NGA","Nigeria",48.15,[20211031,0,2,1,3,1,2,0,1,3],[0.05,"="]],["MOZ","Mozambique",48.15,[20211108,0,1,2,3,1,2,0,1,3],[0.03,"="]],["KGZ","Kyrgyz Republic",49.07,[20211108,1,1,2,4,0,0,1,1,2],[1.22,"-"]],["TWN","Taiwan",49.07,[20211018,0,2,1,3,1,0,1,2,3],[0.02,"="]],["CPV","Cape Verde",49.07,[20211031,0,1,1,4,0,1,2,1,2],[1.16,"+"]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[4.43,"-"]],["KWT","Kuwait",51.85,[20211025,1,1,1,3,0,0,2,3,4],[0.54,"-"]],["GAB","Gabon",51.85,[20211107,0,0,2,3,1,2,1,1,3],[5.04,"+"]],["RWA","Rwanda",51.85,[20211025,1,2,1,3,1,2,0,1,3],[0.28,"+"]],["HKG","Hong Kong",52.78,[20211108,1,1,1,3,1,1,1,2,2],[0.04,"="]],["QAT","Qatar",52.78,[20211031,1,1,1,3,1,1,1,2,2],[4.33,"+"]],["DOM","Dominican Republic",52.78,[20211106,1,1,1,4,1,1,1,1,3],[8.71,"+"]],["SVN","Slovenia",53.7,[20211108,1,2,2,4,0,1,0,2,2],[138.49,"+"]],["BGR","Bulgaria",53.7,[20211101,2,2,2,3,0,0,0,3,3],[60.75,"-"]],["TUR","Turkey",54.63,[20211024,1,1,1,0,2,0,2,3,4],[33.85,"-"]],["LKA","Sri Lanka",54.63,[20211106,2,1,2,3,0,1,1,2,3],[2.87,"+"]],["CRI","Costa Rica",54.63,[20211101,2,2,2,2,0,1,1,1,3],[6.74,"-"]],["THA","Thailand",55.09,[20211108,1,1,2,3,0,2,2,3,4],[11.34,"-"]],["SWZ","Eswatini",55.56,[20211101,3,1,1,3,0,2,1,1,4],[0.37,"-"]],["USA","United States",56.02,[20211105,2,2,2,4,1,1,1,3,3],[22.13,"+"]],["RUS","Russia",56.02,[20211101,3,1,2,3,0,1,2,2,2],[26.68,"-"]],["ISR","Israel",56.48,[20211105,2,2,2,3,0,0,0,4,2],[10.81,"+"]],["AUT","Austria",57.41,[20211105,2,2,1,3,1,0,2,2,2],[89.72,"+"]],["ROU","Romania",57.41,[20211101,3,1,1,2,1,1,1,2,3],[41.67,"-"]],["SAU","Saudi Arabia",57.41,[20211025,1,1,2,3,1,0,1,3,2],[0.13,"="]],["IDN","Indonesia",57.87,[20211101,1,1,2,3,1,1,2,3,3],[0.19,"-"]],["ECU","Ecuador",57.87,[20211108,2,1,1,4,1,1,2,2,3],[2.86,"="]],["MRT","Mauritania",58.33,[20211108,0,1,2,4,1,2,1,1,3],[1.19,"+"]],["UKR","Ukraine",58.33,[20211109,2,1,1,3,2,0,2,1,3],[52.28,"-"]],["GIN","Guinea",59.26,[20211108,1,2,2,3,1,2,1,1,3],[0.05,"+"]],["MYS","Malaysia",59.26,[20211101,2,1,2,4,1,1,2,2,3],[15.26,"-"]],["SYR","Syria",60.65,[20211104,3,3,2,3,1,2,1,1,3],[1.17,"+"]],["AUS","Australia",60.65,[20211105,1,2,2,4,1,0,2,3,3],[5.44,"+"]],["PER","Peru",61.11,[20211104,2,2,2,4,0,2,1,3,4],[2.47,"-"]],["PAN","Panama",61.11,[20211106,2,3,2,4,0,2,0,2,4],[2.84,"+"]],["SUR","Suriname",61.11,[20211105,2,2,2,4,0,2,0,2,4],[14.2,"+"]],["KHM","Cambodia",61.57,[20211024,2,2,2,4,0,2,2,2,3],[0.47,"-"]],["BLZ","Belize",62.04,[20211026,3,2,1,4,0,2,1,1,4],[36.39,"-"]],["AGO","Angola",63.43,[20211108,0,2,2,4,1,1,2,4,3],[0.12,"+"]],["HTI","Haiti",64.81,[20211031,1,1,2,4,1,2,1,2,3],[0.34,"+"]],["CUB","Cuba",65.28,[20211031,3,1,2,4,2,2,2,1,4],[4.82,"-"]],["GUY","Guyana",65.74,[20211031,1,2,2,4,1,2,0,3,4],[10.9,"+"]],["MAR","Morocco",65.74,[20211022,1,2,2,3,0,2,2,2,3],[0.45,"-"]],["SYC","Seychelles",65.74,[20211108,1,2,2,4,1,2,2,1,1],[25.57,"+"]],["PNG","Papua New Guinea",65.74,[20211101,2,2,2,3,2,1,2,2,3],[3.16,"+"]],["TKM","Turkmenistan",66.67,[20211102,1,2,2,4,1,2,2,4,3],[]],["FRA","France",66.67,[20211105,1,2,2,3,1,0,2,3,2],[11.24,"+"]],["CAN","Canada",67.13,[20211105,2,3,2,4,1,1,2,3,3],[6.29,"+"]],["BRB","Barbados",67.59,[20211031,3,2,2,3,1,2,0,2,3],[111.45,"-"]],["VNM","Vietnam",68.98,[20211101,3,2,2,3,2,2,2,2,3],[7.33,"+"]],["TTO","Trinidad and Tobago",69.44,[20211031,2,2,2,4,0,2,2,1,3],[22.86,"+"]],["IRN","Iran",69.91,[20211031,3,3,2,4,0,2,2,2,3],[10.49,"-"]],["LVA","Latvia",70.37,[20211108,2,3,2,4,1,2,0,2,3],[93.43,"-"]],["ITA","Italy",71.3,[20211105,2,3,2,1,1,2,2,3,3],[8.93,"+"]],["KAZ","Kazakhstan",71.3,[20211105,1,1,2,4,2,2,2,3,3],[7.2,"-"]],["PHL","Philippines",74.54,[20211107,3,2,2,4,2,2,2,3,4],[1.94,"-"]],["LAO","Laos",75.0,[20211101,3,2,2,3,2,2,2,2,3],[13.52,"+"]],["VEN","Venezuela",75.0,[20211107,3,2,2,4,1,1,1,3,4],[3.19,"+"]],["IRQ","Iraq",75.93,[20211029,3,2,2,3,0,2,2,3,3],[2.7,"="]],["UGA","Uganda",75.93,[20211101,3,2,2,2,1,2,2,2,3],[0.12,"="]],["CHN","China",76.39,[20211108,3,3,2,4,1,3,2,2,2],[0.01,"="]],["HND","Honduras",76.85,[20211109,2,2,2,4,2,1,2,1,3],[1.75,"+"]],["GRC","Greece",79.17,[20211108,1,2,2,4,2,2,2,3,2],[61.19,"+"]],["DMA","Dominica",79.63,[20211009,3,3,2,4,1,2,1,2,2],[49.02,"+"]],["BRN","Brunei",79.63,[20211105,3,3,2,4,1,2,0,4,4],[17.5,"-"]],["NZL","New Zealand",81.02,[20211108,3,3,2,4,2,2,2,4,3],[3.12,"="]],["MMR","Myanmar",85.19,[20211108,3,2,2,4,1,2,2,4,4],[1.8,"+"]],["JAM","Jamaica",86.11,[20211019,3,3,2,4,1,3,2,3,3],[3.01,"-"]],["FJI","Fiji",90.74,[20211108,3,3,2,4,2,2,2,2,2],[1.88,"+"]]];