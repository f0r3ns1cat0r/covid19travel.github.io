const dataUpdate="2021.07.25";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",0.0,[20210719,0,0,0,0,0,0,0,0,2],[0.74,"="]],["CAF","Central African Republic",11.11,[20210719,0,0,0,0,0,0,0,2,0],[0.01,"="]],["TZA","Tanzania",11.11,[20210719,0,0,0,0,0,0,0,2,0],[0.0,"="]],["BDI","Burundi",15.74,[20210719,0,2,0,0,0,0,0,1,1],[0.39,"+"]],["PRI","Puerto Rico",17.59,[20210712,1,0,0,0,0,0,0,1,2],[]],["SDN","Sudan",19.44,[20210718,0,0,0,0,0,0,0,3,0],[0.05,"="]],["NER","Niger",19.44,[20210719,0,0,2,1,0,0,0,2,3],[0.01,"-"]],["CIV","Cote d'Ivoire",20.37,[20210724,0,0,0,0,0,1,0,2,4],[0.23,"+"]],["KIR","Kiribati",22.22,[20210712,0,0,0,0,0,0,0,4,0],[0.0,"="]],["VUT","Vanuatu",22.22,[20210718,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210723,0,0,0,0,0,0,0,4,2],[0.14,"-"]],["BFA","Burkina Faso",22.22,[20210709,0,0,0,0,0,0,2,1,4],[0.0,"="]],["SEN","Senegal",23.15,[20210704,1,0,0,0,0,0,0,3,4],[5.29,"-"]],["MAC","Macao",23.15,[20210712,1,0,0,0,0,0,0,3,2],[]],["EST","Estonia",23.15,[20210716,1,0,0,1,0,0,0,2,1],[6.04,"+"]],["SLB","Solomon Islands",25.0,[20210719,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210719,0,0,0,3,0,0,0,2,2],[0.0,"="]],["ABW","Aruba",25.93,[20210705,1,0,1,0,0,0,0,2,1],[17.53,"+"]],["ISL","Iceland",26.85,[20210718,2,0,0,0,0,0,0,3,2],[18.0,"+"]],["TCD","Chad",27.78,[20210709,0,0,0,3,0,0,0,3,4],[0.0,"="]],["ZMB","Zambia",27.78,[20210712,3,0,0,0,0,0,0,2,3],[5.33,"-"]],["BOL","Bolivia",27.78,[20210712,2,0,0,0,0,2,0,2,4],[7.66,"-"]],["HUN","Hungary",27.78,[20210712,0,0,0,3,0,0,0,3,2],[0.56,"="]],["LTU","Lithuania",29.63,[20210712,1,1,1,0,0,0,0,2,2],[5.84,"+"]],["TJK","Tajikistan",29.63,[20210724,1,1,0,0,0,0,0,4,4],[0.7,"+"]],["CMR","Cameroon",29.63,[20210719,1,0,1,3,0,0,0,1,3],[0.29,"+"]],["ISR","Israel",29.63,[20210719,1,1,0,0,0,0,0,4,2],[13.91,"+"]],["SOM","Somalia",29.63,[20210719,0,1,1,3,0,1,0,1,3],[0.11,"+"]],["DMA","Dominica",31.48,[20210719,0,0,1,2,0,1,0,2,2],[0.6,"-"]],["ROU","Romania",31.48,[20210712,2,1,1,2,0,0,0,1,4],[0.44,"+"]],["SRB","Serbia",32.41,[20210711,1,1,1,2,0,0,0,1,3],[2.37,"+"]],["GMB","Gambia",33.33,[20210718,0,0,1,4,0,0,0,2,3],[4.27,"+"]],["BIH","Bosnia and Herzegovina",35.19,[20210720,1,1,1,3,0,0,0,1,2],[0.59,"="]],["SVN","Slovenia",35.19,[20210712,1,1,1,3,0,-1,0,1,3],[3.09,"+"]],["SLV","El Salvador",35.19,[20210719,1,1,2,1,0,0,0,1,4],[4.05,"+"]],["CZE","Czech Republic",35.19,[20210722,1,1,1,1,0,0,0,3,2],[2.02,"-"]],["TON","Tonga",35.19,[20210705,0,0,1,3,0,2,0,3,0],[]],["HRV","Croatia",36.11,[20210722,1,2,1,2,0,0,0,1,3],[3.51,"+"]],["SWE","Sweden",37.04,[20210719,0,0,1,3,0,1,0,3,0],[3.55,"="]],["RKS","Kosovo",37.96,[20210720,1,1,1,2,1,0,0,3,2],[0.77,"+"]],["ALB","Albania",37.96,[20210722,2,1,1,3,0,2,0,0,2],[0.93,"+"]],["YEM","Yemen",37.96,[20210719,1,1,1,0,0,2,1,3,2],[0.01,"="]],["MCO","Monaco",37.96,[20210718,1,1,1,4,0,0,0,1,2],[36.04,"+"]],["SMR","San Marino",38.89,[20210712,1,1,1,3,0,1,0,1,1],[2.11,"="]],["CYP","Cyprus",38.89,[20210719,1,1,1,3,0,1,0,1,3],[78.72,"+"]],["VIR","United States Virgin Islands",38.89,[20210628,2,1,1,3,0,0,0,1,3],[]],["BEN","Benin",38.89,[20210719,0,0,2,3,0,0,1,1,3],[0.09,"="]],["GRL","Greenland",38.89,[20210718,1,2,1,2,0,0,0,2,2],[4.28,"+"]],["MRT","Mauritania",39.81,[20210720,0,0,2,4,0,1,0,1,3],[3.22,"+"]],["COD","Democratic Republic of Congo",40.74,[20210718,0,2,2,3,0,2,0,1,3],[0.38,"+"]],["BRN","Brunei",40.74,[20210721,1,1,1,2,0,0,0,4,2],[1.24,"+"]],["FRA","France",41.2,[20210719,1,2,2,3,0,0,0,2,3],[27.08,"+"]],["FRO","Faeroe Islands",41.67,[20210712,1,1,1,2,0,1,0,3,2],[14.33,"+"]],["NLD","Netherlands",41.67,[20210723,1,2,1,0,1,0,0,3,2],[42.59,"-"]],["LVA","Latvia",41.67,[20210719,2,1,1,3,0,0,0,2,2],[2.26,"+"]],["LUX","Luxembourg",41.67,[20210719,1,1,1,2,0,1,0,3,2],[14.9,"="]],["TGO","Togo",42.59,[20210724,0,2,0,3,0,1,2,2,4],[0.81,"+"]],["GHA","Ghana",42.59,[20210717,0,2,2,3,0,1,0,1,4],[1.06,"+"]],["ETH","Ethiopia",43.52,[20210718,1,1,1,3,1,0,0,2,3],[0.1,"+"]],["EGY","Egypt",43.52,[20210706,1,1,2,4,0,0,0,1,4],[0.05,"="]],["GUM","Guam",43.52,[20210712,1,1,1,3,1,0,0,2,3],[]],["BLR","Belarus",43.52,[20210705,0,1,1,4,0,1,0,3,3],[9.7,"+"]],["FIN","Finland",43.98,[20210719,1,1,1,4,0,1,0,3,2],[6.8,"+"]],["SYR","Syria",43.98,[20210712,3,1,2,3,0,0,0,1,2],[0.03,"="]],["GBR","United Kingdom",43.98,[20210723,1,2,1,4,1,0,0,3,3],[60.4,"-"]],["CHE","Switzerland",44.44,[20210724,1,1,1,3,0,1,0,3,2],[7.74,"-"]],["MEX","Mexico",44.44,[20210718,3,2,1,0,1,1,2,1,4],[9.67,"+"]],["MWI","Malawi",45.37,[20210712,0,1,1,3,1,0,0,4,1],[3.75,"+"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[5.25,"+"]],["AND","Andorra",46.3,[20210717,1,1,1,4,1,0,0,2,3],[41.6,"="]],["RUS","Russia",46.76,[20210705,3,2,1,2,0,1,0,3,3],[16.21,"-"]],["DNK","Denmark",47.22,[20210719,1,2,2,2,0,0,0,3,2],[13.36,"-"]],["MLT","Malta",47.22,[20210720,1,2,1,4,0,0,0,3,3],[40.96,"-"]],["BMU","Bermuda",47.22,[20210628,1,1,1,3,1,1,0,2,2],[1.84,"+"]],["ESP","Spain",47.69,[20210723,1,1,2,4,0,2,0,2,2],[55.06,"="]],["COG","Congo",48.15,[20210719,0,1,1,3,1,2,1,1,3],[0.48,"="]],["MLI","Mali",48.15,[20210718,1,2,2,3,0,1,0,1,3],[0.02,"="]],["PRY","Paraguay",49.07,[20210703,1,2,1,3,0,2,0,2,3],[8.99,"+"]],["AUT","Austria",49.07,[20210719,2,2,1,2,1,0,0,3,2],[4.01,"-"]],["MUS","Mauritius",49.07,[20210719,2,2,1,3,0,0,2,1,4],[11.5,"="]],["USA","United States",49.54,[20210719,2,1,1,3,1,1,2,3,3],[15.54,"+"]],["POL","Poland",50.0,[20210723,1,1,1,2,1,1,1,2,2],[0.27,"="]],["KOR","South Korea",50.0,[20210719,2,1,2,4,0,1,1,2,3],[3.04,"+"]],["QAT","Qatar",50.0,[20210719,1,1,1,4,1,1,0,2,3],[4.52,"+"]],["DZA","Algeria",50.46,[20210712,1,1,2,4,1,2,0,2,3],[2.82,"+"]],["JPN","Japan",50.46,[20210719,1,2,1,2,0,1,1,4,1],[3.09,"-"]],["SGP","Singapore",50.93,[20210725,1,2,1,4,0,1,0,3,4],[2.62,"+"]],["BRB","Barbados",50.93,[20210705,2,2,2,3,0,0,0,2,3],[4.37,"-"]],["BEL","Belgium",50.93,[20210719,1,2,1,4,0,1,0,3,3],[12.39,"+"]],["HTI","Haiti",50.93,[20210705,1,1,2,3,0,2,0,2,3],[0.49,"="]],["BHS","Bahamas",51.39,[20210712,2,2,1,4,0,2,2,1,3],[13.7,"="]],["BHR","Bahrain",51.85,[20210714,2,2,2,0,0,1,1,2,3],[5.18,"+"]],["JOR","Jordan",51.85,[20210712,1,1,1,3,1,2,0,3,2],[4.72,"+"]],["NGA","Nigeria",52.78,[20210719,2,1,1,3,1,2,0,2,3],[0.11,"+"]],["NOR","Norway",52.78,[20210723,1,1,1,3,1,1,1,2,2],[3.69,"+"]],["GTM","Guatemala",52.78,[20210719,1,1,2,4,0,0,1,3,4],[14.11,"+"]],["SVK","Slovak Republic",53.24,[20210705,2,2,2,4,0,2,0,2,-1],[0.59,"="]],["AFG","Afghanistan",53.24,[20210725,3,2,2,4,0,0,2,2,3],[2.05,"="]],["SAU","Saudi Arabia",53.7,[20210724,3,1,2,3,0,0,0,3,3],[2.41,"="]],["IRL","Ireland",53.7,[20210719,1,2,1,3,1,1,0,3,3],[24.7,"-"]],["UZB","Uzbekistan",53.7,[20210705,2,1,1,3,1,0,2,2,3],[2.0,"+"]],["THA","Thailand",53.7,[20210720,2,1,2,4,1,1,1,3,4],[18.42,"+"]],["MDG","Madagascar",53.7,[20210710,2,2,1,2,0,2,0,4,4],[0.04,"="]],["GRC","Greece",54.17,[20210719,1,1,1,4,1,1,1,3,2],[25.51,"-"]],["RWA","Rwanda",54.63,[20210719,1,2,1,3,1,2,0,2,3],[8.58,"-"]],["DJI","Djibouti",54.63,[20210706,1,1,2,4,2,0,0,1,4],[0.17,"="]],["UKR","Ukraine",54.63,[20210704,3,2,1,3,0,0,2,1,3],[2.53,"+"]],["CRI","Costa Rica",54.63,[20210719,2,2,2,3,0,1,1,1,3],[24.71,"+"]],["PNG","Papua New Guinea",55.56,[20210705,1,1,1,3,1,1,1,3,3],[0.47,"+"]],["LBR","Liberia",55.56,[20210718,1,1,2,3,1,1,0,3,3],[0.23,"-"]],["MOZ","Mozambique",56.48,[20210714,2,2,2,3,0,2,0,2,3],[4.85,"+"]],["MDA","Moldova",56.48,[20210719,2,2,2,4,0,2,0,1,3],[2.4,"+"]],["SLE","Sierra Leone",56.48,[20210712,1,2,2,3,1,1,0,2,4],[0.09,"-"]],["BRA","Brazil",56.94,[20210707,2,2,2,3,1,2,2,1,4],[22.05,"+"]],["AGO","Angola",56.94,[20210721,0,2,1,3,1,1,2,3,2],[0.45,"+"]],["KGZ","Kyrgyz Republic",57.41,[20210719,2,2,2,4,1,0,1,1,2],[18.6,"-"]],["TLS","Timor-Leste",57.87,[20210718,0,3,2,4,1,2,2,2,4],[2.57,"+"]],["LAO","Laos",57.87,[20210714,2,2,2,3,1,2,2,1,3],[2.6,"+"]],["TKM","Turkmenistan",58.33,[20210718,1,2,2,1,0,0,2,4,3],[]],["ECU","Ecuador",58.33,[20210711,2,2,2,3,1,1,1,2,3],[4.46,"-"]],["MNG","Mongolia",59.26,[20210719,3,2,2,4,0,1,1,1,4],[34.74,"-"]],["BWA","Botswana",59.26,[20210718,1,1,2,3,0,2,2,1,3],[70.01,"="]],["URY","Uruguay",59.26,[20210719,1,2,1,3,1,1,1,4,2],[6.49,"+"]],["CPV","Cape Verde",59.26,[20210712,1,2,2,4,0,1,2,1,3],[6.96,"+"]],["KWT","Kuwait",60.19,[20210712,3,2,2,3,0,0,0,4,3],[24.11,"+"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[11.24,"+"]],["AZE","Azerbaijan",61.11,[20210723,2,2,2,3,1,1,0,4,2],[2.64,"+"]],["ERI","Eritrea",62.04,[20210718,0,0,2,3,1,1,2,4,3],[0.37,"+"]],["GIN","Guinea",62.04,[20210712,1,2,2,3,0,2,2,2,3],[0.53,"+"]],["CAN","Canada",62.5,[20210719,3,1,1,4,1,1,2,4,3],[1.17,"+"]],["BGR","Bulgaria",62.96,[20210622,2,2,1,3,1,1,1,3,2],[1.44,"="]],["DOM","Dominican Republic",62.96,[20210712,2,1,2,4,1,2,0,2,4],[3.32,"+"]],["ARE","United Arab Emirates",63.43,[20210717,1,2,2,4,1,0,2,3,3],[15.4,"-"]],["BTN","Bhutan",63.43,[20210719,3,2,2,4,1,2,1,3,3],[1.31,"-"]],["PAK","Pakistan",63.89,[20210705,2,2,2,4,1,1,1,1,3],[1.0,"+"]],["BLZ","Belize",63.89,[20210719,3,2,1,3,1,1,2,1,-1],[8.41,"+"]],["PRT","Portugal",63.89,[20210719,1,2,2,4,1,2,0,3,3],[32.24,"-"]],["LSO","Lesotho",63.89,[20210725,3,1,2,4,1,2,0,1,3],[2.59,"+"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[51.94,"+"]],["TUR","Turkey",64.81,[20210629,1,1,1,2,2,2,2,2,4],[11.07,"+"]],["IRQ","Iraq",64.81,[20210627,3,2,2,3,0,2,1,3,4],[21.48,"-"]],["ZWE","Zimbabwe",64.81,[20210712,0,2,2,4,0,2,2,2,3],[14.09,"+"]],["CUB","Cuba",65.28,[20210718,3,2,2,4,2,1,2,1,3],[61.18,"+"]],["HKG","Hong Kong",65.74,[20210719,2,2,1,4,1,1,1,3,2],[0.04,"+"]],["KEN","Kenya",65.74,[20210704,2,1,2,3,0,2,2,2,4],[1.15,"+"]],["MAR","Morocco",66.67,[20210705,2,2,1,4,1,2,2,2,3],[7.61,"+"]],["SWZ","Eswatini",67.59,[20210725,1,1,1,3,1,2,2,4,4],[20.01,"+"]],["FJI","Fiji",67.59,[20210628,3,1,2,3,0,2,2,3,2],[96.29,"-"]],["GAB","Gabon",67.59,[20210719,1,1,2,3,1,2,2,2,3],[0.42,"+"]],["DEU","Germany",67.59,[20210719,1,2,2,4,1,1,1,3,2],[1.81,"+"]],["AUS","Australia",68.06,[20210719,2,2,2,4,1,2,2,4,3],[0.57,"+"]],["NPL","Nepal",68.52,[20210703,3,2,2,4,1,1,2,2,4],[6.44,"+"]],["IDN","Indonesia",68.98,[20210712,3,2,2,4,1,2,2,3,4],[15.41,"-"]],["JAM","Jamaica",69.44,[20210707,1,2,2,4,1,2,2,3,4],[3.06,"-"]],["MMR","Myanmar",69.91,[20210719,3,2,2,4,1,2,1,2,4],[10.58,"+"]],["COL","Colombia",70.37,[20210709,3,2,2,3,2,2,2,1,3],[26.82,"-"]],["PER","Peru",70.37,[20210718,2,2,2,4,1,1,2,3,4],[1.01,"-"]],["PAN","Panama",70.37,[20210719,3,2,2,3,1,3,1,2,4],[23.59,"+"]],["TWN","Taiwan",71.3,[20210719,3,2,2,4,0,2,1,3,4],[0.1,"+"]],["PSE","Palestine",71.3,[20210430,2,1,2,4,1,2,2,2,3],[]],["KAZ","Kazakhstan",71.3,[20210718,2,2,2,4,2,0,2,3,3],[26.34,"+"]],["LBN","Lebanon",71.3,[20210620,1,2,2,3,1,2,2,2,3],[8.3,"+"]],["PHL","Philippines",71.76,[20210720,2,2,2,4,1,2,2,3,3],[5.33,"+"]],["ZAF","South Africa",72.22,[20210718,2,2,2,4,1,2,2,1,3],[20.29,"-"]],["LBY","Libya",72.22,[20210712,2,2,2,4,0,2,2,2,3],[25.3,"="]],["KHM","Cambodia",72.69,[20210712,3,3,2,4,0,3,2,2,3],[4.93,"+"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[14.81,"+"]],["IRN","Iran",74.54,[20210629,2,3,2,3,1,1,2,3,3],[27.76,"+"]],["ARG","Argentina",75.0,[20210719,2,2,2,4,2,2,2,4,3],[28.34,"-"]],["ITA","Italy",75.46,[20210722,3,3,2,4,1,2,2,3,3],[6.7,"+"]],["SYC","Seychelles",76.85,[20210712,3,1,2,4,2,1,2,1,3],[74.52,"="]],["OMN","Oman",77.78,[20210712,2,2,2,4,1,2,2,3,3],[0.0,"="]],["NAM","Namibia",78.7,[20210718,3,2,2,4,1,2,2,1,3],[24.6,"-"]],["HND","Honduras",78.7,[20210719,3,3,2,4,0,1,2,3,3],[12.49,"+"]],["VNM","Vietnam",79.17,[20210719,2,3,2,4,2,2,2,4,3],[6.44,"+"]],["CHN","China",79.17,[20210719,3,3,2,4,1,3,2,3,2],[0.0,"="]],["MYS","Malaysia",80.56,[20210719,0,3,2,4,2,2,2,3,3],[39.96,"+"]],["TUN","Tunisia",81.48,[20210705,3,3,2,4,2,2,2,3,3],[27.96,"-"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[15.12,"+"]],["LKA","Sri Lanka",81.48,[20210718,3,2,2,4,1,2,2,2,3],[7.56,"+"]],["IND","India",81.94,[20210720,3,3,2,4,2,3,2,3,4],[2.75,"+"]],["CHL","Chile",84.72,[20210719,3,3,2,4,2,3,2,4,3],[6.93,"-"]],["BGD","Bangladesh",86.11,[20210714,3,3,2,4,2,2,2,2,3],[5.29,"-"]],["VEN","Venezuela",86.11,[20210712,3,3,2,4,1,2,2,3,4],[3.56,"+"]],["UGA","Uganda",87.04,[20210719,3,2,2,3,2,2,2,3,3],[0.67,"+"]]];