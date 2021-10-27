const dataUpdate="2021.10.27";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",8.33,[20211024,0,0,0,0,0,0,0,1,1],[0.39,"-"]],["CAF","Central African Republic",11.11,[20211011,0,0,0,0,0,0,0,2,3],[0.12,"="]],["BDI","Burundi",11.11,[20211025,0,0,0,0,0,0,0,2,1],[0.25,"-"]],["BFA","Burkina Faso",13.89,[20211024,0,0,0,0,0,0,0,1,4],[0.02,"-"]],["SDN","Sudan",13.89,[20211018,0,0,0,-1,0,0,0,1,4],[0.19,"="]],["TZA","Tanzania",13.89,[20211011,0,0,0,0,0,0,0,1,1],[0.02,"="]],["FRO","Faeroe Islands",13.89,[20211025,0,0,0,0,0,0,0,1,0],[106.42,"+"]],["VUT","Vanuatu",16.67,[20211025,0,0,0,0,0,0,0,2,0],[0.0,"="]],["CIV","Cote d'Ivoire",17.59,[20211023,0,0,0,0,0,1,0,1,4],[0.07,"="]],["BLR","Belarus",19.44,[20211011,0,0,0,0,0,0,0,3,2],[21.72,"+"]],["SWE","Sweden",19.44,[20211024,0,0,0,0,0,0,0,3,0],[6.61,"+"]],["NOR","Norway",20.37,[20211022,1,0,0,0,0,0,0,2,0],[13.31,"+"]],["SEN","Senegal",21.3,[20211024,1,1,0,0,0,0,0,1,3],[0.02,"="]],["TCD","Chad",22.22,[20211018,0,0,0,3,0,0,0,1,4],[0.0,"="]],["KIR","Kiribati",22.22,[20211026,0,0,0,0,0,0,0,4,0],[0.0,"="]],["JOR","Jordan",23.15,[20211026,0,1,0,0,0,0,0,3,2],[13.94,"+"]],["PRI","Puerto Rico",23.15,[20211010,1,0,1,0,0,0,0,1,3],[]],["YEM","Yemen",23.15,[20211018,1,0,1,0,0,0,1,1,2],[0.07,"="]],["DNK","Denmark",24.07,[20211025,1,1,0,0,0,0,0,2,2],[22.0,"+"]],["FIN","Finland",24.07,[20211025,1,1,0,0,0,1,0,2,1],[9.69,"+"]],["NER","Niger",25.0,[20211024,0,0,2,3,0,0,0,2,-1],[0.04,"-"]],["EST","Estonia",25.0,[20211018,0,0,1,1,0,0,0,2,2],[108.48,"+"]],["LTU","Lithuania",25.93,[20211017,0,1,0,2,0,0,0,2,2],[104.11,"-"]],["MDA","Moldova",25.93,[20211009,0,1,0,2,0,0,0,2,2],[39.61,"-"]],["PAK","Pakistan",26.85,[20211025,0,1,0,2,1,0,0,1,4],[0.27,"="]],["MDG","Madagascar",26.85,[20211025,0,2,0,2,0,0,0,1,3],[0.0,"="]],["GMB","Gambia",27.78,[20211025,0,0,1,3,0,0,0,1,3],[0.08,"+"]],["SSD","South Sudan",27.78,[20211024,0,0,0,4,0,0,0,2,3],[0.06,"-"]],["SLV","El Salvador",27.78,[20211024,0,0,2,1,0,0,0,1,2],[7.12,"+"]],["HUN","Hungary",27.78,[20211011,0,0,1,3,0,0,0,1,2],[22.13,"+"]],["TUN","Tunisia",28.7,[20211025,0,1,1,1,0,0,0,2,3],[1.22,"+"]],["LIE","Liechtenstein",28.7,[20211018,0,0,0,3,0,1,-1,2,2],[14.61,"-"]],["SVK","Slovak Republic",29.17,[20211025,1,1,1,3,0,0,0,2,3],[53.76,"+"]],["TJK","Tajikistan",29.63,[20211015,1,1,0,0,0,0,0,4,3],[0.0,"="]],["SLE","Sierra Leone",29.63,[20211025,1,1,0,0,1,0,0,2,3],[0.0,"="]],["GRL","Greenland",30.09,[20211025,1,0,1,3,0,0,0,1,2],[21.14,"-"]],["MRT","Mauritania",30.56,[20211025,0,1,1,-1,0,2,0,1,3],[0.84,"+"]],["AFG","Afghanistan",30.56,[20211023,0,2,0,0,2,0,0,2,3],[0.1,"="]],["BOL","Bolivia",31.02,[20211012,2,1,1,1,1,0,0,2,4],[4.08,"+"]],["CHL","Chile",31.94,[20211024,1,1,1,3,0,0,0,2,3],[8.68,"+"]],["MUS","Mauritius",32.41,[20211025,0,2,0,3,0,0,0,2,3],[6.86,"+"]],["SLB","Solomon Islands",33.33,[20211025,0,0,1,0,0,0,1,4,0],[0.0,"="]],["LBN","Lebanon",34.26,[20211018,0,0,1,2,1,1,0,1,4],[8.19,"+"]],["HRV","Croatia",35.19,[20211018,1,1,-1,2,1,0,0,2,2],[67.48,"+"]],["MCO","Monaco",35.19,[20211025,1,1,1,0,1,0,0,2,2],[7.64,"-"]],["MEX","Mexico",35.19,[20211012,0,2,1,0,1,1,2,1,4],[2.41,"-"]],["ABW","Aruba",35.19,[20211017,1,0,1,4,0,1,0,0,2],[13.65,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20211016,1,1,1,3,0,0,0,1,2],[19.05,"+"]],["CZE","Czech Republic",35.19,[20211022,1,1,1,1,0,0,0,3,2],[31.09,"+"]],["SOM","Somalia",35.19,[20211011,0,1,1,3,0,1,0,1,3],[0.66,"="]],["COG","Congo",35.19,[20211024,0,0,1,3,0,2,0,1,3],[2.35,"="]],["NAM","Namibia",36.11,[20211004,0,1,1,2,0,2,0,1,3],[2.71,"-"]],["MWI","Malawi",37.04,[20211018,0,1,1,3,1,0,0,1,3],[0.03,"="]],["MNG","Mongolia",37.04,[20211025,1,2,1,3,0,1,1,1,4],[45.81,"-"]],["BEN","Benin",37.04,[20211009,0,0,2,3,0,1,0,2,4],[0.14,"="]],["OMN","Oman",37.96,[20211024,1,1,1,4,0,0,0,1,4],[0.39,"+"]],["SMR","San Marino",37.96,[20211025,1,1,1,4,0,0,0,1,3],[17.68,"+"]],["KEN","Kenya",37.96,[20211025,0,2,2,2,0,0,0,1,4],[0.17,"="]],["COD","Democratic Republic of Congo",37.96,[20211018,0,1,1,3,0,2,2,1,3],[0.02,"="]],["DJI","Djibouti",37.96,[20211025,1,1,1,4,0,0,0,1,4],[0.55,"-"]],["POL","Poland",38.89,[20211022,1,1,1,2,0,1,0,2,2],[14.0,"+"]],["TGO","Togo",38.89,[20211018,0,0,2,3,0,0,1,1,4],[0.15,"-"]],["PRY","Paraguay",38.89,[20211022,1,2,1,3,0,0,0,1,3],[0.47,"+"]],["ARE","United Arab Emirates",39.35,[20211018,1,1,1,3,1,0,0,1,2],[0.95,"-"]],["UZB","Uzbekistan",39.81,[20211026,1,0,0,3,1,0,1,2,3],[1.1,"-"]],["GEO","Georgia",39.81,[20211016,0,1,2,4,0,0,0,1,3],[101.68,"-"]],["BRA","Brazil",40.28,[20211017,2,2,1,2,1,2,0,1,3],[5.65,"+"]],["GHA","Ghana",40.74,[20211016,0,2,2,3,0,0,0,1,4],[0.19,"-"]],["SRB","Serbia",40.74,[20211025,1,1,1,2,1,0,0,2,3],[80.11,"+"]],["ZMB","Zambia",40.74,[20211025,0,2,2,0,1,0,0,2,4],[0.08,"="]],["CYP","Cyprus",40.74,[20211017,1,1,1,2,1,0,0,2,2],[12.05,"+"]],["ESP","Spain",41.2,[20211022,1,2,2,3,0,0,0,2,3],[4.09,"+"]],["GBR","United Kingdom",41.2,[20211022,1,2,1,3,1,0,0,3,3],[65.98,"+"]],["ISL","Iceland",41.67,[20211025,2,1,1,2,0,0,0,3,2],[22.31,"+"]],["IRL","Ireland",41.67,[20211024,1,1,1,2,0,1,0,3,3],[42.86,"-"]],["ALB","Albania",41.67,[20210928,2,2,1,2,0,2,0,1,3],[18.89,"+"]],["NLD","Netherlands",41.67,[20211022,1,2,2,0,0,0,0,3,2],[32.34,"+"]],["ARG","Argentina",42.59,[20211025,1,1,1,1,1,1,1,2,3],[2.6,"+"]],["VIR","United States Virgin Islands",42.59,[20211022,1,2,1,3,0,1,0,1,3],[]],["BEL","Belgium",43.06,[20211025,1,2,2,2,0,0,0,3,2],[50.61,"+"]],["EGY","Egypt",43.52,[20211018,1,1,2,4,0,0,0,1,4],[0.86,"="]],["ETH","Ethiopia",43.52,[20211025,1,1,1,3,1,0,0,2,3],[0.42,"+"]],["TON","Tonga",43.52,[20211018,0,0,1,3,0,2,0,4,2],[]],["LSO","Lesotho",43.52,[20211024,1,2,1,2,0,2,0,1,3],[0.27,"-"]],["BHR","Bahrain",43.52,[20211013,0,1,2,3,0,1,0,2,4],[3.13,"-"]],["SVN","Slovenia",43.52,[20211025,1,1,1,3,1,0,0,2,3],[87.57,"+"]],["NPL","Nepal",43.52,[20211025,1,2,2,3,1,0,0,2,4],[1.85,"-"]],["MLT","Malta",43.52,[20211025,1,1,1,4,0,0,0,3,3],[3.04,"-"]],["CMR","Cameroon",44.44,[20211017,0,0,2,3,1,0,1,1,3],[0.0,"-"]],["MLI","Mali",44.44,[20211024,1,2,2,3,0,0,0,1,3],[0.14,"-"]],["LBR","Liberia",44.44,[20211025,1,2,1,3,1,0,0,1,3],[0.01,"="]],["LBY","Libya",44.44,[20211017,2,0,2,4,0,0,0,2,3],[7.57,"+"]],["PRT","Portugal",44.44,[20211025,1,2,2,2,0,0,0,2,2],[7.5,"="]],["ZAF","South Africa",45.37,[20211025,1,1,1,2,1,2,0,1,3],[0.69,"-"]],["DEU","Germany",45.37,[20211022,1,2,2,3,0,0,0,2,2],[18.06,"+"]],["BGD","Bangladesh",46.3,[20211025,0,0,2,4,0,2,0,2,4],[0.17,"-"]],["CHE","Switzerland",46.3,[20211022,1,1,2,3,0,0,0,3,2],[12.4,"-"]],["LUX","Luxembourg",46.3,[20211018,1,1,1,3,1,0,0,3,2],[23.71,"+"]],["TLS","Timor-Leste",46.3,[20211025,0,2,2,3,2,1,0,2,3],[0.52,"-"]],["PSE","Palestine",47.22,[20211024,0,0,2,4,0,0,2,2,4],[]],["ZWE","Zimbabwe",47.22,[20211011,1,1,1,2,1,1,1,1,3],[0.31,"="]],["KOR","South Korea",47.22,[20211025,2,2,2,4,0,0,0,2,3],[2.85,"+"]],["BGR","Bulgaria",47.22,[20211011,1,2,2,3,0,0,0,2,3],[64.9,"+"]],["JPN","Japan",47.22,[20211023,1,1,1,1,0,1,1,4,1],[0.23,"-"]],["BMU","Bermuda",47.22,[20211026,1,1,1,3,1,1,0,2,2],[7.34,"-"]],["MOZ","Mozambique",48.15,[20211025,0,1,2,3,1,2,0,1,3],[0.05,"="]],["TWN","Taiwan",49.07,[20211018,0,2,1,3,1,0,1,2,3],[0.02,"="]],["AND","Andorra",49.07,[20211025,1,1,2,3,1,0,0,2,2],[10.35,"-"]],["KGZ","Kyrgyz Republic",49.07,[20211025,1,1,2,4,0,0,1,1,2],[1.61,"+"]],["PNG","Papua New Guinea",49.54,[20211018,0,1,2,3,1,0,2,2,2],[4.56,"-"]],["GTM","Guatemala",49.54,[20211017,2,1,2,4,2,0,0,1,4],[5.13,"-"]],["IND","India",50.46,[20211024,2,1,2,2,-1,2,2,2,4],[1.1,"-"]],["NGA","Nigeria",50.93,[20211018,0,2,1,3,1,2,0,2,3],[0.12,"="]],["SGP","Singapore",50.93,[20211023,2,1,1,4,0,1,0,3,4],[59.51,"-"]],["ERI","Eritrea",50.93,[20211025,0,0,2,3,1,1,0,4,3],[0.08,"="]],["COL","Colombia",51.39,[20211017,3,1,1,3,2,2,1,1,3],[2.94,"+"]],["AUS","Australia",51.39,[20211022,2,0,0,4,1,0,2,4,4],[8.11,"-"]],["BHS","Bahamas",51.39,[20211021,2,2,1,4,0,2,2,1,4],[7.67,"-"]],["IDN","Indonesia",51.39,[20211025,1,1,2,3,1,1,2,3,3],[0.25,"-"]],["GUM","Guam",51.85,[20211025,1,1,2,4,1,0,0,2,3],[]],["KWT","Kuwait",51.85,[20211025,1,1,1,3,0,0,2,3,4],[0.59,"-"]],["GAB","Gabon",51.85,[20211025,0,0,2,3,1,2,1,1,3],[6.78,"="]],["RKS","Kosovo",52.78,[20210927,1,1,1,4,1,1,0,3,3],[0.8,"+"]],["RUS","Russia",54.17,[20211014,3,1,2,3,0,0,2,2,2],[24.34,"+"]],["CRI","Costa Rica",54.63,[20211017,2,2,2,2,0,1,1,1,3],[11.95,"+"]],["TUR","Turkey",54.63,[20211024,1,1,1,0,2,0,2,3,4],[32.98,"-"]],["THA","Thailand",55.09,[20211018,3,2,2,3,0,2,2,2,3],[13.08,"-"]],["URY","Uruguay",55.56,[20211017,1,1,1,2,1,1,1,4,2],[5.05,"+"]],["ROU","Romania",55.56,[20211011,1,1,1,2,1,1,2,2,3],[75.46,"-"]],["QAT","Qatar",55.56,[20211015,1,1,1,4,1,1,1,2,2],[3.29,"+"]],["USA","United States",56.02,[20211018,2,2,2,4,1,1,1,3,3],[20.58,"-"]],["DZA","Algeria",56.48,[20211010,0,1,2,4,2,2,0,1,3],[0.17,"-"]],["ISR","Israel",56.48,[20211022,2,2,2,3,0,0,0,4,2],[9.73,"-"]],["RWA","Rwanda",57.41,[20211025,1,1,1,3,1,2,2,1,3],[0.29,"+"]],["SAU","Saudi Arabia",57.41,[20211025,1,1,2,3,1,0,1,3,2],[0.14,"="]],["UKR","Ukraine",58.33,[20211018,2,1,1,3,2,0,2,1,3],[48.85,"+"]],["SUR","Suriname",58.33,[20211022,2,2,2,3,0,2,0,2,4],[30.78,"-"]],["CPV","Cape Verde",58.33,[20211024,0,2,2,4,0,1,2,1,3],[2.54,"="]],["MYS","Malaysia",59.26,[20211018,2,1,2,4,1,1,2,2,3],[17.81,"-"]],["HKG","Hong Kong",59.26,[20211025,1,2,1,4,1,1,1,2,2],[0.06,"+"]],["AUT","Austria",60.19,[20211023,2,2,1,3,1,0,2,3,2],[38.95,"+"]],["AZE","Azerbaijan",60.19,[20211018,2,2,2,2,0,0,2,4,2],[20.45,"+"]],["GUY","Guyana",60.19,[20211021,1,2,2,4,0,2,0,3,4],[10.21,"-"]],["ECU","Ecuador",60.65,[20211025,2,1,2,4,1,1,2,2,3],[1.27,"-"]],["SYR","Syria",60.65,[20211019,3,3,2,3,1,2,1,1,3],[1.77,"-"]],["BTN","Bhutan",61.11,[20211025,2,2,1,3,1,1,1,3,3],[0.0,"="]],["GIN","Guinea",61.11,[20211024,1,2,2,3,1,2,2,1,3],[0.05,"-"]],["SWZ","Eswatini",61.11,[20211023,3,1,1,3,1,2,1,1,4],[0.22,"+"]],["KHM","Cambodia",61.57,[20211024,2,2,2,4,0,2,2,2,3],[0.82,"-"]],["BLZ","Belize",62.04,[20211026,3,2,1,4,0,2,1,1,4],[49.72,"-"]],["SYC","Seychelles",62.04,[20211018,-1,2,2,4,1,2,1,1,3],[23.1,"-"]],["MAC","Macao",62.04,[20211014,3,1,2,4,1,0,1,2,2],[]],["BWA","Botswana",62.04,[20211004,0,2,2,4,0,2,2,1,3],[11.75,"="]],["IRN","Iran",63.43,[20211024,0,3,2,4,0,2,2,3,3],[11.48,"-"]],["AGO","Angola",63.89,[20211025,0,2,2,4,1,1,2,2,4],[0.36,"-"]],["LKA","Sri Lanka",63.89,[20211018,0,1,2,4,1,2,2,1,4],[2.96,"+"]],["GRC","Greece",64.35,[20211025,1,1,2,3,2,2,1,3,2],[32.36,"+"]],["HTI","Haiti",64.81,[20211017,1,1,2,4,1,2,1,2,3],[0.37,"-"]],["CUB","Cuba",65.28,[20211010,3,1,2,4,2,2,2,1,4],[11.8,"-"]],["DOM","Dominican Republic",65.74,[20211018,1,1,2,4,1,2,2,1,3],[6.99,"+"]],["MAR","Morocco",65.74,[20211022,1,2,2,3,0,2,2,2,3],[0.78,"-"]],["KAZ","Kazakhstan",66.2,[20211012,1,1,2,4,1,2,2,3,3],[9.34,"-"]],["ITA","Italy",66.67,[20211022,2,3,2,1,1,1,1,3,2],[6.05,"+"]],["FRA","France",66.67,[20211022,1,2,2,3,1,0,2,3,2],[8.39,"+"]],["PER","Peru",66.67,[20211017,2,2,2,4,1,2,1,3,3],[2.55,"+"]],["VNM","Vietnam",67.13,[20211024,2,2,2,4,2,0,2,3,3],[3.8,"+"]],["BRB","Barbados",67.59,[20211017,3,2,2,3,1,2,0,2,3],[123.28,"+"]],["CAN","Canada",68.06,[20211022,3,3,2,4,0,1,2,3,3],[5.57,"-"]],["TTO","Trinidad and Tobago",69.44,[20211016,2,2,2,4,0,2,2,1,3],[16.41,"+"]],["LVA","Latvia",70.37,[20211025,2,3,2,4,1,2,0,2,3],[127.66,"+"]],["TKM","Turkmenistan",72.22,[20211008,1,2,2,4,1,2,2,4,3],[]],["LAO","Laos",72.22,[20211011,3,2,2,3,2,2,2,1,3],[7.95,"+"]],["PAN","Panama",72.69,[20211006,1,3,2,4,2,2,2,2,4],[4.93,"+"]],["PHL","Philippines",74.54,[20211018,3,2,2,4,2,2,2,3,4],[4.42,"-"]],["UGA","Uganda",75.93,[20211018,3,2,2,2,1,2,2,2,3],[0.16,"="]],["IRQ","Iraq",75.93,[20211026,3,2,2,3,0,2,2,3,3],[3.69,"-"]],["CHN","China",76.39,[20211018,3,3,2,4,1,3,2,2,2],[0.0,"="]],["DMA","Dominica",79.63,[20211009,3,3,2,4,1,2,1,2,2],[58.15,"-"]],["BRN","Brunei",79.63,[20211026,3,3,2,4,1,2,0,4,4],[44.9,"+"]],["NZL","New Zealand",81.02,[20211025,3,3,2,4,2,2,2,4,3],[2.03,"+"]],["HND","Honduras",82.41,[20211017,3,3,2,4,2,1,2,1,3],[2.27,"-"]],["JAM","Jamaica",86.11,[20211019,3,3,2,4,1,3,2,3,3],[3.92,"-"]],["VEN","Venezuela",86.11,[20211024,3,3,2,4,1,3,1,3,4],[3.03,"-"]],["FJI","Fiji",88.89,[20211018,3,3,2,4,2,2,2,4,2],[2.9,"="]],["MMR","Myanmar",90.74,[20211025,3,2,2,4,1,3,2,4,4],[1.55,"-"]]];