const dataUpdate="2021.11.06";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["CAF","Central African Republic",5.56,[20211101,0,0,0,0,0,0,0,2,1],[0.18,"="]],["NIC","Nicaragua",8.33,[20211024,0,0,0,0,0,0,0,1,1],[0.6,"="]],["BDI","Burundi",11.11,[20211025,0,0,0,0,0,0,0,2,1],[0.12,"+"]],["SDN","Sudan",13.89,[20211018,0,0,0,-1,0,0,0,1,4],[0.0,"="]],["FRO","Faeroe Islands",13.89,[20211029,0,0,0,0,0,0,0,1,0],[154.08,"-"]],["GMB","Gambia",13.89,[20211101,0,0,0,0,0,0,0,1,3],[0.05,"-"]],["BFA","Burkina Faso",13.89,[20211024,0,0,0,0,0,0,0,1,4],[0.21,"="]],["VUT","Vanuatu",16.67,[20211025,0,0,0,0,0,0,0,2,0],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20211023,0,0,0,0,0,1,0,1,4],[0.06,"="]],["SWE","Sweden",19.44,[20211106,0,0,0,0,0,0,0,3,0],[7.9,"-"]],["BLR","Belarus",19.44,[20211101,0,0,0,0,0,0,0,3,0],[20.91,"="]],["FIN","Finland",20.37,[20211104,1,0,0,0,0,0,0,2,1],[12.75,"+"]],["PRT","Portugal",20.37,[20211101,0,1,0,0,0,0,0,2,2],[8.91,"+"]],["NOR","Norway",20.37,[20211104,1,0,0,0,0,0,0,2,0],[23.56,"+"]],["SEN","Senegal",21.3,[20211031,1,1,0,0,0,0,0,1,3],[0.02,"="]],["BWA","Botswana",22.22,[20211101,0,0,-1,3,0,0,0,1,2],[38.52,"+"]],["KIR","Kiribati",22.22,[20211101,0,0,0,0,0,0,0,4,0],[0.0,"="]],["TCD","Chad",22.22,[20211106,0,0,0,3,0,0,0,1,4],[0.03,"="]],["JOR","Jordan",23.15,[20211026,0,1,0,0,0,0,0,3,2],[17.91,"+"]],["YEM","Yemen",23.15,[20211018,1,0,1,0,0,0,1,1,2],[0.03,"-"]],["SLE","Sierra Leone",24.07,[20211101,1,1,-1,0,1,0,0,2,3],[0.0,"="]],["MWI","Malawi",24.07,[20211101,0,1,0,1,0,1,0,1,3],[0.01,"-"]],["DNK","Denmark",24.07,[20211104,1,1,0,0,0,0,0,2,2],[27.67,"-"]],["NER","Niger",25.0,[20211101,0,0,2,3,0,0,0,2,3],[0.07,"-"]],["EST","Estonia",25.0,[20211018,0,0,1,1,0,0,0,2,2],[133.84,"-"]],["MDA","Moldova",25.93,[20211101,0,1,0,2,0,0,0,2,2],[30.82,"-"]],["MDG","Madagascar",26.85,[20211025,0,2,0,2,0,0,0,1,3],[0.0,"="]],["PRI","Puerto Rico",26.85,[20211031,2,0,1,0,0,0,0,1,3],[]],["HUN","Hungary",27.78,[20211101,0,0,1,3,0,0,0,1,2],[42.51,"+"]],["AFG","Afghanistan",27.78,[20211031,0,2,2,0,2,0,0,2,3],[0.07,"="]],["SSD","South Sudan",27.78,[20211024,0,0,0,4,0,0,0,2,3],[0.12,"-"]],["SLV","El Salvador",27.78,[20211024,0,0,2,1,0,0,0,1,2],[0.0,"="]],["PAK","Pakistan",28.7,[20211031,0,1,0,2,0,0,0,3,4],[0.25,"-"]],["LIE","Liechtenstein",28.7,[20211101,0,0,0,3,0,1,0,2,3],[24.73,"+"]],["TUN","Tunisia",28.7,[20211025,0,1,1,1,0,0,0,2,3],[0.91,"-"]],["SVK","Slovak Republic",29.17,[20211025,1,1,1,3,0,0,0,2,3],[84.25,"+"]],["TJK","Tajikistan",29.63,[20211101,1,1,0,0,0,0,0,4,3],[0.0,"="]],["COL","Colombia",29.63,[20211029,0,1,1,3,1,0,0,0,4],[3.35,"+"]],["GRL","Greenland",30.09,[20211102,1,0,1,3,0,0,1,1,2],[15.1,"+"]],["NLD","Netherlands",32.41,[20211104,1,1,1,0,0,0,0,3,2],[51.63,"+"]],["MUS","Mauritius",32.41,[20211025,0,2,0,3,0,0,0,2,3],[6.92,"-"]],["SLB","Solomon Islands",33.33,[20211025,0,0,1,0,0,0,1,4,0],[0.0,"="]],["LBN","Lebanon",34.26,[20211018,0,0,1,2,1,1,0,1,4],[9.27,"+"]],["IRL","Ireland",34.72,[20211106,1,1,1,1,0,1,0,3,3],[62.52,"+"]],["CZE","Czech Republic",35.19,[20211022,1,1,1,1,0,0,0,3,2],[65.46,"+"]],["MEX","Mexico",35.19,[20211031,0,2,1,0,1,1,2,1,4],[1.76,"-"]],["MCO","Monaco",35.19,[20211025,1,1,1,0,1,0,0,2,2],[7.28,"+"]],["BOL","Bolivia",35.19,[20211031,1,1,2,4,0,0,0,2,-1],[5.84,"+"]],["HRV","Croatia",35.19,[20211018,1,1,-1,2,1,0,0,2,2],[96.02,"+"]],["SOM","Somalia",35.19,[20211101,0,1,1,3,0,1,0,1,3],[0.62,"+"]],["PRY","Paraguay",35.19,[20211102,1,1,1,3,0,0,0,1,3],[0.66,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20211016,1,1,1,3,0,0,0,1,2],[20.22,"-"]],["COG","Congo",35.19,[20211024,0,0,1,3,0,2,0,1,3],[1.61,"="]],["NAM","Namibia",36.11,[20211101,0,1,1,2,0,2,0,1,3],[0.56,"+"]],["MNG","Mongolia",37.04,[20211101,1,2,1,3,0,1,1,1,4],[30.61,"-"]],["URY","Uruguay",37.04,[20211105,0,1,1,2,1,0,0,2,2],[6.0,"-"]],["BEN","Benin",37.04,[20211101,0,0,2,3,0,1,0,2,4],[0.06,"="]],["CHL","Chile",37.5,[20211031,1,1,1,2,0,0,2,2,3],[9.78,"+"]],["DJI","Djibouti",37.96,[20211025,1,1,1,4,0,0,0,1,4],[0.19,"-"]],["OMN","Oman",37.96,[20211024,1,1,1,4,0,0,0,1,4],[0.25,"="]],["SMR","San Marino",37.96,[20211025,1,1,1,4,0,0,0,1,3],[17.26,"-"]],["KEN","Kenya",37.96,[20211025,0,2,2,2,0,0,0,1,4],[0.16,"-"]],["COD","Democratic Republic of Congo",37.96,[20211018,0,1,1,3,0,2,2,1,3],[0.02,"="]],["DEU","Germany",38.43,[20211105,1,2,1,4,0,0,0,2,2],[28.07,"-"]],["TZA","Tanzania",38.89,[20211101,1,1,1,1,1,1,1,1,1],[0.01,"="]],["POL","Poland",38.89,[20211103,1,1,1,2,0,1,0,2,3],[25.75,"+"]],["TGO","Togo",38.89,[20211018,0,0,2,3,0,0,1,1,4],[0.09,"-"]],["KOR","South Korea",39.35,[20211101,1,2,1,4,0,0,0,2,3],[4.2,"+"]],["DZA","Algeria",39.81,[20211101,0,1,2,4,0,0,0,1,3],[0.24,"+"]],["GEO","Georgia",39.81,[20211016,0,1,2,4,0,0,0,1,3],[115.51,"+"]],["ETH","Ethiopia",39.81,[20211030,0,1,1,3,1,0,0,2,3],[0.27,"-"]],["UZB","Uzbekistan",39.81,[20211026,1,0,0,3,1,0,1,2,3],[0.89,"-"]],["BRA","Brazil",40.28,[20211101,2,2,1,2,1,2,0,1,3],[4.64,"+"]],["SRB","Serbia",40.74,[20211025,1,1,1,2,1,0,0,2,3],[69.51,"-"]],["CYP","Cyprus",40.74,[20211017,1,1,1,2,1,0,0,2,2],[16.52,"+"]],["AND","Andorra",40.74,[20211101,1,1,1,2,1,0,0,2,2],[18.86,"-"]],["ZMB","Zambia",40.74,[20211025,0,2,2,0,1,0,0,2,4],[0.12,"+"]],["GHA","Ghana",40.74,[20211031,0,2,2,3,0,0,0,1,4],[0.14,"+"]],["ESP","Spain",41.2,[20211022,1,2,2,3,0,0,0,2,3],[4.43,"+"]],["GBR","United Kingdom",41.2,[20211105,1,2,1,3,1,0,0,3,3],[55.74,"-"]],["ISL","Iceland",41.67,[20211025,2,1,1,2,0,0,0,3,2],[31.94,"+"]],["SVN","Slovenia",41.67,[20211104,1,1,1,3,1,1,0,2,2],[129.12,"+"]],["ALB","Albania",41.67,[20210928,2,2,1,2,0,2,0,1,3],[18.14,"+"]],["VIR","United States Virgin Islands",42.59,[20211022,1,2,1,3,0,1,0,1,3],[]],["RKS","Kosovo",42.59,[20211101,1,1,1,3,0,2,0,1,3],[0.91,"-"]],["ARG","Argentina",42.59,[20211025,1,1,1,1,1,1,1,2,3],[2.47,"-"]],["TON","Tonga",43.52,[20211104,0,0,1,3,0,2,0,4,2],[0.0,"-"]],["MLT","Malta",43.52,[20211101,1,1,1,4,0,0,0,3,3],[6.31,"+"]],["BHR","Bahrain",43.52,[20211013,0,1,2,3,0,1,0,2,4],[2.2,"-"]],["LSO","Lesotho",43.52,[20211024,1,2,1,2,0,2,0,1,3],[0.33,"+"]],["EGY","Egypt",43.52,[20211018,1,1,2,4,0,0,0,1,4],[0.91,"="]],["NPL","Nepal",43.52,[20211101,1,2,2,3,1,0,0,2,4],[1.17,"-"]],["ABW","Aruba",44.44,[20211024,1,1,1,4,0,1,0,2,2],[10.7,"-"]],["SGP","Singapore",44.44,[20211106,1,1,1,4,0,1,0,2,4],[50.41,"-"]],["MLI","Mali",44.44,[20211031,1,2,2,3,0,0,0,1,3],[0.22,"+"]],["LBY","Libya",44.44,[20211101,2,0,2,4,0,0,0,2,3],[7.51,"+"]],["ZWE","Zimbabwe",44.44,[20211101,0,2,1,3,1,1,0,1,4],[0.18,"-"]],["CMR","Cameroon",44.44,[20211017,0,0,2,3,1,0,1,1,3],[1.0,"="]],["LBR","Liberia",44.44,[20211101,1,2,1,3,1,0,0,1,3],[0.01,"="]],["ZAF","South Africa",45.37,[20211030,1,1,1,2,1,2,0,1,3],[0.43,"-"]],["BEL","Belgium",45.83,[20211104,1,2,2,3,0,0,0,3,2],[52.88,"-"]],["BGD","Bangladesh",46.3,[20211025,0,0,2,4,0,2,0,2,4],[0.11,"-"]],["LTU","Lithuania",46.3,[20211105,1,1,2,4,0,0,0,2,2],[96.08,"-"]],["LUX","Luxembourg",46.3,[20211101,1,1,1,3,1,0,0,3,2],[26.45,"+"]],["CHE","Switzerland",46.3,[20211106,1,1,2,3,0,0,0,3,2],[24.57,"+"]],["TLS","Timor-Leste",46.3,[20211101,0,2,2,3,2,1,0,2,3],[0.09,"-"]],["ERI","Eritrea",47.22,[20211102,0,1,2,3,1,2,0,4,3],[0.38,"-"]],["JPN","Japan",47.22,[20211106,1,1,1,1,0,1,1,4,1],[0.17,"="]],["BMU","Bermuda",47.22,[20211102,1,1,1,3,1,1,0,2,2],[6.88,"+"]],["PSE","Palestine",47.22,[20211101,0,0,2,4,0,0,2,2,4],[]],["ARE","United Arab Emirates",47.69,[20211101,1,1,1,3,1,0,2,1,2],[0.8,"="]],["NGA","Nigeria",48.15,[20211031,0,2,1,3,1,2,0,1,3],[0.05,"="]],["MOZ","Mozambique",48.15,[20211103,0,1,2,3,1,2,0,1,3],[0.04,"="]],["CPV","Cape Verde",49.07,[20211031,0,1,1,4,0,1,2,1,2],[1.16,"-"]],["TWN","Taiwan",49.07,[20211018,0,2,1,3,1,0,1,2,3],[0.02,"="]],["KGZ","Kyrgyz Republic",49.07,[20211025,1,1,2,4,0,0,1,1,2],[1.23,"-"]],["GTM","Guatemala",49.54,[20211017,2,1,2,4,2,0,0,1,4],[3.32,"-"]],["MRT","Mauritania",50.0,[20211101,0,1,1,3,1,2,1,1,3],[1.19,"+"]],["IND","India",50.46,[20211024,2,1,2,2,-1,2,2,2,4],[0.87,"-"]],["AUS","Australia",51.39,[20211105,0,0,2,4,1,0,2,3,3],[5.35,"-"]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[4.87,"="]],["GUM","Guam",51.85,[20211025,1,1,2,4,1,0,0,2,3],[]],["RWA","Rwanda",51.85,[20211025,1,2,1,3,1,2,0,1,3],[0.3,"-"]],["KWT","Kuwait",51.85,[20211025,1,1,1,3,0,0,2,3,4],[0.51,"+"]],["GAB","Gabon",51.85,[20211025,0,0,2,3,1,2,1,1,3],[3.18,"-"]],["QAT","Qatar",52.78,[20211031,1,1,1,3,1,1,1,2,2],[4.07,"+"]],["BGR","Bulgaria",53.7,[20211101,2,2,2,3,0,0,0,3,3],[62.67,"-"]],["TUR","Turkey",54.63,[20211024,1,1,1,0,2,0,2,3,4],[32.68,"+"]],["CRI","Costa Rica",54.63,[20211101,2,2,2,2,0,1,1,1,3],[7.34,"+"]],["SWZ","Eswatini",55.56,[20211101,3,1,1,3,0,2,1,1,4],[0.64,"-"]],["USA","United States",56.02,[20211105,2,2,2,4,1,1,1,3,3],[22.1,"+"]],["RUS","Russia",56.02,[20211101,3,1,2,3,0,1,2,2,2],[26.87,"+"]],["ISR","Israel",56.48,[20211105,2,2,2,3,0,0,0,4,2],[10.76,"-"]],["SAU","Saudi Arabia",57.41,[20211025,1,1,2,3,1,0,1,3,2],[0.13,"-"]],["ROU","Romania",57.41,[20211101,3,1,1,2,1,1,1,2,3],[48.29,"-"]],["AUT","Austria",57.41,[20211105,2,2,1,3,1,0,2,2,2],[73.27,"+"]],["IDN","Indonesia",57.87,[20211101,1,1,2,3,1,1,2,3,3],[0.21,"-"]],["ECU","Ecuador",57.87,[20211101,2,1,1,4,1,1,2,2,3],[1.96,"="]],["UKR","Ukraine",58.33,[20211018,2,1,1,3,2,0,2,1,3],[52.87,"-"]],["HKG","Hong Kong",59.26,[20211025,1,2,1,4,1,1,1,2,2],[0.03,"-"]],["MYS","Malaysia",59.26,[20211101,2,1,2,4,1,1,2,2,3],[16.09,"-"]],["AZE","Azerbaijan",60.19,[20211018,2,2,2,2,0,0,2,4,2],[21.46,"+"]],["GUY","Guyana",60.19,[20211021,1,2,2,4,0,2,0,3,4],[9.97,"-"]],["THA","Thailand",60.65,[20211101,1,2,2,3,0,2,2,3,4],[13.53,"-"]],["SYR","Syria",60.65,[20211104,3,3,2,3,1,2,1,1,3],[1.07,"-"]],["GIN","Guinea",61.11,[20211024,1,2,2,3,1,2,2,1,3],[0.03,"="]],["PER","Peru",61.11,[20211104,2,2,2,4,0,2,1,3,4],[2.43,"+"]],["BTN","Bhutan",61.11,[20211025,2,2,1,3,1,1,1,3,3],[0.04,"+"]],["SUR","Suriname",61.11,[20211105,2,2,2,4,0,2,0,2,4],[12.2,"-"]],["KHM","Cambodia",61.57,[20211024,2,2,2,4,0,2,2,2,3],[0.54,"-"]],["BLZ","Belize",62.04,[20211026,3,2,1,4,0,2,1,1,4],[39.38,"+"]],["MAC","Macao",62.04,[20211014,3,1,2,4,1,0,1,2,2],[]],["AGO","Angola",63.89,[20211025,0,2,2,4,1,1,2,2,4],[0.14,"-"]],["LKA","Sri Lanka",63.89,[20211018,0,1,2,4,1,2,2,1,4],[3.07,"+"]],["HTI","Haiti",64.81,[20211031,1,1,2,4,1,2,1,2,3],[0.31,"+"]],["CUB","Cuba",65.28,[20211031,3,1,2,4,2,2,2,1,4],[5.47,"-"]],["DOM","Dominican Republic",65.74,[20211018,1,1,2,4,1,2,2,1,3],[7.99,"+"]],["PNG","Papua New Guinea",65.74,[20211101,2,2,2,3,2,1,2,2,3],[3.48,"-"]],["MAR","Morocco",65.74,[20211022,1,2,2,3,0,2,2,2,3],[0.55,"-"]],["FRA","France",66.67,[20211105,1,2,2,3,1,0,2,3,2],[10.18,"+"]],["TKM","Turkmenistan",66.67,[20211102,1,2,2,4,1,2,2,4,3],[]],["CAN","Canada",67.13,[20211105,2,3,2,4,1,1,2,3,3],[5.91,"-"]],["BRB","Barbados",67.59,[20211031,3,2,2,3,1,2,0,2,3],[117.57,"-"]],["VNM","Vietnam",68.98,[20211101,3,2,2,3,2,2,2,2,3],[6.34,"+"]],["TTO","Trinidad and Tobago",69.44,[20211031,2,2,2,4,0,2,2,1,3],[17.86,"-"]],["IRN","Iran",69.91,[20211031,3,3,2,4,0,2,2,2,3],[10.89,"-"]],["LVA","Latvia",70.37,[20211101,2,3,2,4,1,2,0,2,3],[107.71,"-"]],["KAZ","Kazakhstan",71.3,[20211105,1,1,2,4,2,2,2,3,3],[7.8,"-"]],["SYC","Seychelles",71.3,[20211101,1,2,2,4,2,2,2,3,-1],[20.05,"+"]],["ITA","Italy",71.3,[20211105,2,3,2,1,1,2,2,3,3],[7.77,"+"]],["PAN","Panama",72.69,[20211006,1,3,2,4,2,2,2,2,4],[2.6,"-"]],["PHL","Philippines",74.54,[20211018,3,2,2,4,2,2,2,3,4],[2.35,"-"]],["LAO","Laos",75.0,[20211101,3,2,2,3,2,2,2,2,3],[12.35,"+"]],["IRQ","Iraq",75.93,[20211029,3,2,2,3,0,2,2,3,3],[2.74,"-"]],["UGA","Uganda",75.93,[20211101,3,2,2,2,1,2,2,2,3],[0.13,"="]],["CHN","China",76.39,[20211018,3,3,2,4,1,3,2,2,2],[0.01,"="]],["BRN","Brunei",79.63,[20211105,3,3,2,4,1,2,0,4,4],[19.27,"-"]],["DMA","Dominica",79.63,[20211009,3,3,2,4,1,2,1,2,2],[35.32,"-"]],["GRC","Greece",80.09,[20211025,2,2,2,4,2,2,2,3,2],[54.12,"+"]],["NZL","New Zealand",81.02,[20211101,3,3,2,4,2,2,2,4,3],[3.13,"+"]],["HND","Honduras",82.41,[20211017,3,3,2,4,2,1,2,1,3],[1.54,"+"]],["JAM","Jamaica",86.11,[20211019,3,3,2,4,1,3,2,3,3],[3.33,"+"]],["VEN","Venezuela",86.11,[20211024,3,3,2,4,1,3,1,3,4],[3.61,"-"]],["MMR","Myanmar",90.74,[20211025,3,2,2,4,1,3,2,4,4],[1.69,"+"]],["FJI","Fiji",90.74,[20211104,3,3,2,4,2,2,2,2,2],[1.69,"-"]]];