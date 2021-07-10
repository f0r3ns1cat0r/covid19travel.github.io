const dataUpdate="2021.07.10";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210705,0,0,0,0,0,0,0,1,2],[0.61,"="]],["CAF","Central African Republic",11.11,[20210628,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TZA","Tanzania",11.11,[20210630,0,0,0,0,0,0,0,2,0],[0.0,"="]],["BDI","Burundi",15.74,[20210628,0,2,0,0,0,0,0,1,1],[0.14,"+"]],["CIV","Cote d'Ivoire",17.59,[20210627,0,0,0,0,0,1,0,1,4],[0.22,"+"]],["NER","Niger",19.44,[20210704,0,0,2,1,0,0,0,2,3],[0.02,"="]],["TJK","Tajikistan",21.3,[20210628,1,1,0,0,0,0,0,3,4],[0.34,"+"]],["KIR","Kiribati",22.22,[20210628,0,0,0,0,0,0,0,4,3],[0.0,"="]],["NZL","New Zealand",22.22,[20210706,0,0,0,0,0,0,0,4,2],[0.07,"="]],["VUT","Vanuatu",22.22,[20210706,0,0,0,0,0,0,0,4,0],[0.0,"="]],["BFA","Burkina Faso",22.22,[20210709,0,0,0,0,0,0,2,1,4],[0.01,"="]],["SEN","Senegal",23.15,[20210704,1,0,0,0,0,0,0,3,4],[1.57,"+"]],["SLB","Solomon Islands",25.0,[20210709,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210704,0,0,0,3,0,0,0,2,2],[0.03,"-"]],["ABW","Aruba",25.93,[20210705,1,0,1,0,0,0,0,2,1],[3.35,"+"]],["PRI","Puerto Rico",26.85,[20210621,1,1,1,0,0,0,0,1,2],[]],["SLV","El Salvador",26.85,[20210705,1,1,1,0,0,0,0,1,4],[4.77,"="]],["ISL","Iceland",26.85,[20210705,2,0,0,0,0,0,0,3,0],[0.0,"="]],["TCD","Chad",27.78,[20210709,0,0,0,3,0,0,0,3,4],[0.0,"="]],["BOL","Bolivia",27.78,[20210607,2,0,0,0,0,0,0,4,4],[10.21,"-"]],["BEN","Benin",27.78,[20210626,0,0,1,3,0,0,0,1,3],[0.03,"="]],["MAC","Macao",28.7,[20210705,1,0,1,0,0,0,0,3,2],[]],["CMR","Cameroon",29.63,[20210705,1,0,1,3,0,0,0,1,3],[0.0,"="]],["ISR","Israel",29.63,[20210702,1,1,0,0,0,0,0,4,2],[4.96,"+"]],["SOM","Somalia",29.63,[20210621,0,1,1,3,0,1,0,1,3],[0.04,"="]],["DMA","Dominica",31.48,[20210705,0,0,1,2,0,1,0,2,2],[0.6,"-"]],["EST","Estonia",32.41,[20210705,1,1,1,3,0,0,0,-1,1],[2.94,"+"]],["SRB","Serbia",32.41,[20210628,1,1,1,2,0,0,0,1,2],[1.12,"+"]],["GMB","Gambia",33.33,[20210703,0,0,1,4,0,0,0,2,3],[0.61,"="]],["USA","United States",33.8,[20210705,2,1,1,2,0,0,0,3,1],[5.59,"+"]],["TON","Tonga",35.19,[20210705,0,0,1,3,0,2,0,3,0],[]],["SVN","Slovenia",35.19,[20210620,1,1,1,3,0,0,0,1,3],[2.2,"+"]],["HRV","Croatia",36.11,[20210708,1,2,1,2,0,0,0,1,3],[2.13,"-"]],["MWI","Malawi",37.04,[20210621,0,1,1,3,0,0,0,3,1],[1.39,"+"]],["BIH","Bosnia and Herzegovina",37.04,[20210623,1,2,1,3,0,0,0,1,3],[0.0,"-"]],["NLD","Netherlands",37.96,[20210709,1,1,1,0,1,0,0,3,2],[18.44,"+"]],["RKS","Kosovo",37.96,[20210701,1,1,1,2,1,0,0,3,3],[0.4,"-"]],["CZE","Czech Republic",37.96,[20210705,1,1,1,2,0,0,0,3,2],[1.71,"+"]],["ALB","Albania",37.96,[20210707,2,1,1,3,0,2,0,0,2],[0.27,"+"]],["YEM","Yemen",37.96,[20210705,1,1,1,0,0,2,1,3,2],[0.01,"="]],["KOR","South Korea",38.43,[20210704,1,1,1,4,0,1,0,2,3],[2.06,"+"]],["VIR","United States Virgin Islands",38.89,[20210628,2,1,1,3,0,0,0,1,3],[]],["SMR","San Marino",38.89,[20210628,1,1,1,3,0,1,0,1,3],[0.42,"="]],["MRT","Mauritania",39.81,[20210704,0,0,2,4,0,1,0,1,3],[1.6,"+"]],["COD","Democratic Republic of Congo",39.81,[20210704,0,0,2,1,1,1,2,1,3],[0.31,"-"]],["BRN","Brunei",40.74,[20210709,1,1,1,2,0,0,0,4,2],[0.16,"="]],["CYP","Cyprus",40.74,[20210705,1,1,1,3,0,2,0,1,-1],[66.27,"+"]],["GRC","Greece",41.67,[20210705,1,1,1,0,1,1,0,3,3],[14.87,"+"]],["LVA","Latvia",41.67,[20210705,2,1,1,3,0,0,0,2,2],[2.2,"-"]],["FRO","Faeroe Islands",41.67,[20210705,1,1,1,2,0,1,0,3,2],[13.74,"+"]],["AGO","Angola",41.67,[20210615,0,2,1,2,0,1,0,3,3],[0.31,"+"]],["LUX","Luxembourg",41.67,[20210706,1,1,1,2,0,1,0,3,2],[22.34,"-"]],["ROU","Romania",42.59,[20210621,2,1,1,4,0,0,0,2,2],[0.23,"+"]],["GHA","Ghana",42.59,[20210706,0,2,2,3,0,1,0,1,4],[0.49,"="]],["TGO","Togo",42.59,[20210702,0,2,0,3,0,1,2,2,4],[0.31,"-"]],["ETH","Ethiopia",43.52,[20210704,1,1,1,3,1,0,0,2,3],[0.07,"="]],["AND","Andorra",43.52,[20210627,1,1,1,4,1,0,0,1,3],[29.03,"+"]],["MCO","Monaco",43.52,[20210705,1,1,2,4,0,0,0,1,2],[9.1,"+"]],["GUM","Guam",43.52,[20210621,1,1,1,3,1,0,0,2,3],[]],["MLT","Malta",43.52,[20210707,1,1,1,4,0,0,0,3,3],[7.05,"+"]],["EGY","Egypt",43.52,[20210706,1,1,2,4,0,0,0,1,4],[0.16,"-"]],["BLR","Belarus",43.52,[20210705,0,1,1,4,0,1,0,3,3],[9.79,"+"]],["FIN","Finland",43.98,[20210702,1,1,1,4,0,1,0,3,2],[3.79,"+"]],["MLI","Mali",44.44,[20210627,0,2,2,3,0,1,0,1,3],[0.02,"="]],["FRA","France",44.44,[20210702,1,2,1,4,0,0,0,2,2],[5.06,"+"]],["MEX","Mexico",44.44,[20210704,3,2,1,0,1,1,2,1,4],[5.09,"+"]],["LTU","Lithuania",44.44,[20210620,2,1,1,4,0,0,0,2,2],[1.41,"+"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[5.25,"+"]],["AFG","Afghanistan",46.3,[20210628,3,2,2,0,-1,0,1,2,3],[4.17,"+"]],["RUS","Russia",46.76,[20210705,3,2,1,2,0,1,0,3,3],[16.51,"+"]],["ITA","Italy",47.22,[20210709,1,2,1,2,1,0,0,3,2],[1.63,"+"]],["NGA","Nigeria",47.22,[20210705,0,1,1,3,1,2,0,2,3],[0.05,"+"]],["DNK","Denmark",47.22,[20210702,1,2,2,2,0,0,0,3,2],[8.92,"+"]],["BMU","Bermuda",47.22,[20210628,1,1,1,3,1,1,0,2,2],[1.61,"="]],["UGA","Uganda",47.22,[20210704,2,2,0,2,0,2,0,3,3],[1.27,"-"]],["SYR","Syria",47.69,[20210628,3,2,2,3,0,0,0,1,3],[0.15,"-"]],["LSO","Lesotho",48.15,[20210614,1,1,2,3,0,2,0,1,4],[0.68,"-"]],["CHE","Switzerland",48.15,[20210709,1,2,1,3,0,1,0,3,2],[2.66,"+"]],["ESP","Spain",48.61,[20210710,1,1,2,4,0,1,0,3,2],[31.57,"+"]],["PRY","Paraguay",49.07,[20210703,1,2,1,3,0,2,0,2,3],[18.43,"-"]],["AUT","Austria",49.07,[20210702,2,2,1,2,1,0,0,3,2],[1.15,"+"]],["HUN","Hungary",49.07,[20210628,2,1,1,3,0,2,0,2,2],[0.35,"+"]],["JOR","Jordan",49.07,[20210601,3,0,0,0,1,2,2,1,2],[4.97,"+"]],["SLE","Sierra Leone",50.0,[20210621,0,2,2,3,1,1,0,1,4],[0.47,"+"]],["POL","Poland",50.0,[20210709,1,1,1,2,1,1,1,2,2],[0.21,"-"]],["KWT","Kuwait",50.93,[20210627,3,1,2,2,0,0,0,3,3],[40.62,"-"]],["HTI","Haiti",50.93,[20210705,1,1,2,3,0,2,0,2,3],[0.7,"+"]],["COG","Congo",50.93,[20210705,0,1,1,3,1,2,1,2,3],[0.25,"="]],["BRB","Barbados",50.93,[20210705,2,2,2,3,0,0,0,2,3],[2.29,"+"]],["BEL","Belgium",50.93,[20210702,1,2,1,4,0,1,0,3,3],[8.87,"+"]],["GRL","Greenland",50.93,[20210703,1,2,1,3,0,1,0,4,2],[0.25,"="]],["GBR","United Kingdom",51.39,[20210709,1,2,1,4,1,0,0,3,3],[42.96,"+"]],["LBR","Liberia",51.85,[20210628,0,1,2,3,1,1,0,3,3],[1.58,"-"]],["GTM","Guatemala",51.85,[20210705,1,2,2,4,1,0,0,3,4],[12.28,"+"]],["SWE","Sweden",51.85,[20210705,0,1,1,3,1,1,1,3,0],[2.35,"-"]],["TKM","Turkmenistan",52.78,[20210704,1,2,1,1,0,0,2,4,3],[]],["SVK","Slovak Republic",53.24,[20210705,2,2,2,4,0,2,0,2,-1],[0.46,"+"]],["JPN","Japan",53.24,[20210702,1,2,2,2,0,1,1,4,1],[1.44,"+"]],["THA","Thailand",53.7,[20210706,2,1,2,4,1,1,1,3,4],[9.53,"+"]],["UZB","Uzbekistan",53.7,[20210705,2,1,1,3,1,0,2,2,3],[1.44,"="]],["IRL","Ireland",53.7,[20210703,1,2,1,3,1,1,0,3,3],[9.95,"+"]],["SAU","Saudi Arabia",53.7,[20210629,3,1,2,3,0,0,0,3,3],[3.46,"-"]],["MOZ","Mozambique",53.7,[20210701,2,2,2,3,0,2,0,1,3],[3.74,"+"]],["DJI","Djibouti",54.63,[20210706,1,1,2,4,2,0,0,1,4],[0.17,"="]],["RWA","Rwanda",54.63,[20210628,1,2,1,3,1,2,0,2,3],[6.66,"="]],["NOR","Norway",54.63,[20210709,1,2,1,3,1,1,1,2,2],[3.21,"+"]],["UKR","Ukraine",54.63,[20210704,3,2,1,3,0,0,2,1,3],[2.26,"="]],["SGP","Singapore",54.63,[20210703,2,2,1,4,0,1,0,3,4],[0.19,"="]],["CRI","Costa Rica",55.56,[20210706,3,2,2,3,0,1,0,1,3],[26.01,"-"]],["PNG","Papua New Guinea",55.56,[20210705,1,1,1,3,1,1,1,3,3],[0.31,"="]],["BHS","Bahamas",56.94,[20210621,2,2,2,4,0,2,2,1,3],[10.5,"="]],["KGZ","Kyrgyz Republic",57.41,[20210704,2,2,2,4,1,0,1,1,2],[20.1,"-"]],["GIN","Guinea",58.33,[20210621,0,2,2,3,0,2,2,2,3],[0.23,"="]],["SWZ","Eswatini",59.26,[20210628,1,1,1,3,1,2,2,1,4],[8.56,"+"]],["MNG","Mongolia",59.26,[20210705,3,2,2,4,0,1,1,1,4],[60.71,"="]],["CPV","Cape Verde",59.26,[20210505,1,2,2,4,0,1,2,1,3],[6.73,"-"]],["ECU","Ecuador",60.19,[20210625,2,2,2,3,1,1,1,1,2],[4.79,"-"]],["LAO","Laos",60.19,[20210705,2,2,1,3,1,1,1,2,3],[0.71,"+"]],["ZMB","Zambia",60.19,[20210621,3,2,1,3,2,0,0,2,3],[9.16,"-"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[10.95,"-"]],["BRA","Brazil",60.65,[20210621,2,3,2,3,1,2,2,1,4],[22.38,"-"]],["ARE","United Arab Emirates",60.65,[20210705,1,2,2,4,1,0,2,3,3],[15.8,"-"]],["URY","Uruguay",61.11,[20210705,2,2,1,3,1,1,1,4,2],[18.44,"-"]],["AZE","Azerbaijan",61.11,[20210628,2,2,2,4,1,1,1,1,2],[1.04,"+"]],["PAN","Panama",61.11,[20210702,3,2,2,3,1,2,0,2,4],[25.21,"+"]],["DZA","Algeria",61.57,[20210607,1,1,2,4,1,2,1,4,3],[1.28,"+"]],["ERI","Eritrea",62.04,[20210704,0,0,2,3,1,1,2,4,3],[0.84,"-"]],["SDN","Sudan",62.04,[20210614,3,2,2,4,0,1,0,3,3],[0.05,"="]],["BGR","Bulgaria",62.96,[20210622,2,2,1,3,1,1,1,3,2],[0.89,"-"]],["BHR","Bahrain",62.96,[20210621,2,2,2,4,0,1,1,2,3],[7.54,"-"]],["QAT","Qatar",62.96,[20210621,2,2,1,3,1,1,1,3,4],[4.09,"+"]],["DOM","Dominican Republic",62.96,[20210628,2,1,2,4,1,2,0,2,4],[6.35,"-"]],["KAZ","Kazakhstan",62.96,[20210705,2,2,2,4,0,0,2,3,3],[13.26,"+"]],["TLS","Timor-Leste",63.43,[20210704,0,3,2,4,1,2,2,4,4],[3.78,"-"]],["PAK","Pakistan",63.89,[20210705,2,2,2,4,1,1,1,1,3],[0.66,"+"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[24.4,"+"]],["IRQ","Iraq",64.81,[20210627,3,2,2,3,0,2,1,3,4],[19.57,"+"]],["BWA","Botswana",64.81,[20210705,1,1,2,3,1,2,2,1,3],[23.97,"="]],["TUR","Turkey",64.81,[20210629,1,1,1,2,2,2,2,2,4],[4.96,"-"]],["BTN","Bhutan",65.28,[20210629,3,2,2,4,1,2,1,3,3],[2.52,"-"]],["CUB","Cuba",65.28,[20210705,3,2,2,4,2,1,2,1,3],[34.77,"+"]],["KEN","Kenya",65.74,[20210704,2,1,2,3,0,2,2,2,4],[0.77,"-"]],["MMR","Myanmar",66.2,[20210701,2,2,2,4,1,2,2,1,3],[6.08,"+"]],["CHN","China",66.2,[20210705,1,2,2,4,1,2,2,3,2],[0.0,"="]],["BLZ","Belize",66.67,[20210706,3,2,1,4,1,1,2,1,3],[6.29,"-"]],["MAR","Morocco",66.67,[20210705,2,2,1,4,1,2,2,2,3],[2.65,"+"]],["GAB","Gabon",67.59,[20210705,1,1,2,3,1,2,2,2,3],[0.56,"+"]],["FJI","Fiji",67.59,[20210628,3,1,2,3,0,2,2,3,2],[68.01,"+"]],["DEU","Germany",67.59,[20210704,1,2,2,4,1,1,1,3,2],[0.81,"+"]],["MDG","Madagascar",67.59,[20210621,2,2,1,3,1,2,1,4,4],[0.07,"="]],["MDA","Moldova",67.59,[20210628,2,2,2,4,1,2,1,1,3],[1.68,"+"]],["ZWE","Zimbabwe",67.59,[20210621,0,2,2,3,1,2,2,2,3],[11.92,"+"]],["AUS","Australia",68.06,[20210702,2,2,2,4,1,2,2,4,3],[0.16,"+"]],["NPL","Nepal",68.52,[20210703,3,2,2,4,1,1,2,2,4],[5.3,"+"]],["IDN","Indonesia",68.98,[20210628,3,2,2,4,1,2,2,3,4],[11.85,"+"]],["CAN","Canada",69.91,[20210702,3,2,2,4,1,1,2,4,3],[1.38,"-"]],["COL","Colombia",70.37,[20210709,3,2,2,3,2,2,2,1,3],[48.94,"-"]],["LBN","Lebanon",71.3,[20210620,1,2,2,3,1,2,2,2,3],[4.07,"+"]],["TWN","Taiwan",71.3,[20210703,3,2,2,4,0,2,1,3,4],[0.16,"-"]],["SYC","Seychelles",71.3,[20210614,2,1,2,4,1,2,1,3,3],[119.4,"-"]],["HKG","Hong Kong",71.3,[20210705,2,2,2,4,1,1,1,3,2],[0.02,"-"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["JAM","Jamaica",71.76,[20210617,2,2,1,3,2,2,2,2,4],[1.57,"-"]],["LBY","Libya",72.22,[20210705,2,2,2,4,0,2,2,2,3],[14.37,"+"]],["KHM","Cambodia",72.69,[20210705,3,3,2,4,0,3,2,2,3],[5.72,"+"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[12.75,"+"]],["PRT","Portugal",74.07,[20210702,2,2,2,4,1,2,2,3,3],[25.28,"+"]],["IRN","Iran",74.54,[20210629,2,3,2,3,1,1,2,3,3],[18.95,"+"]],["PHL","Philippines",74.54,[20210705,2,2,2,4,1,2,2,3,3],[4.82,"-"]],["OMN","Oman",75.0,[20210704,2,2,2,4,1,2,1,3,3],[31.29,"="]],["ZAF","South Africa",75.0,[20210705,2,2,2,4,1,2,2,1,3],[33.21,"-"]],["ARG","Argentina",75.0,[20210705,2,2,2,4,2,2,2,4,3],[36.38,"-"]],["VNM","Vietnam",75.46,[20210706,2,2,2,4,2,2,2,4,3],[1.25,"+"]],["PER","Peru",75.93,[20210704,2,2,2,4,1,3,2,3,4],[7.21,"="]],["TUN","Tunisia",76.85,[20210705,3,2,2,4,2,2,2,2,3],[59.2,"+"]],["NAM","Namibia",76.85,[20210704,3,2,2,4,1,2,2,1,3],[53.43,"-"]],["HND","Honduras",78.7,[20210705,3,3,2,4,0,1,2,3,3],[10.9,"-"]],["MYS","Malaysia",78.7,[20210628,0,2,2,4,2,2,2,3,3],[22.9,"+"]],["MUS","Mauritius",80.56,[20210629,3,2,2,4,1,1,2,4,3],[0.0,"="]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[26.93,"+"]],["IND","India",81.94,[20210705,3,3,2,4,2,3,2,3,4],[3.04,"-"]],["CHL","Chile",84.72,[20210704,3,3,2,4,2,3,2,4,3],[14.78,"-"]],["LKA","Sri Lanka",85.19,[20210614,3,3,2,4,1,2,2,2,3],[5.8,"-"]],["BGD","Bangladesh",86.11,[20210622,3,3,2,4,2,2,2,2,3],[6.12,"+"]],["VEN","Venezuela",87.96,[20210607,3,3,2,4,1,2,2,3,4],[3.89,"-"]]];