const dataUpdate="2021.08.07";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210803,0,0,0,0,0,0,0,1,2],[0.83,"="]],["CAF","Central African Republic",11.11,[20210802,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TZA","Tanzania",11.11,[20210719,0,0,0,0,0,0,0,2,0],[0.0,"="]],["TCD","Chad",13.89,[20210804,0,0,0,3,0,0,0,2,-1],[0.0,"="]],["BDI","Burundi",15.74,[20210719,0,2,0,0,0,0,0,1,1],[1.21,"+"]],["PRI","Puerto Rico",17.59,[20210712,1,0,0,0,0,0,0,1,2],[]],["NER","Niger",19.44,[20210802,0,0,2,1,0,0,0,2,3],[0.04,"="]],["SDN","Sudan",19.44,[20210718,0,0,0,0,0,0,0,3,0],[0.0,"="]],["CIV","Cote d'Ivoire",20.37,[20210804,0,0,0,0,0,1,0,2,4],[0.55,"+"]],["BFA","Burkina Faso",22.22,[20210729,0,0,0,0,0,0,2,1,4],[0.02,"="]],["NZL","New Zealand",22.22,[20210802,0,0,0,0,0,0,0,4,2],[0.03,"="]],["VUT","Vanuatu",22.22,[20210802,0,0,0,0,0,0,0,4,0],[0.0,"="]],["KIR","Kiribati",22.22,[20210726,0,0,0,0,0,0,0,4,0],[0.0,"="]],["EST","Estonia",23.15,[20210726,1,0,0,1,0,0,0,2,1],[15.21,"+"]],["MAC","Macao",23.15,[20210712,1,0,0,0,0,0,0,3,2],[]],["SSD","South Sudan",25.0,[20210802,0,0,0,3,0,0,0,2,2],[0.07,"-"]],["SLB","Solomon Islands",25.0,[20210719,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SVN","Slovenia",25.93,[20210805,1,0,1,1,0,0,0,1,2],[5.7,"+"]],["HUN","Hungary",27.78,[20210727,0,0,0,3,0,0,0,3,2],[0.54,"-"]],["SEN","Senegal",28.7,[20210725,1,0,0,0,0,0,1,3,3],[4.27,"-"]],["ABW","Aruba",28.7,[20210803,1,0,2,0,0,0,0,1,1],[81.75,"+"]],["TJK","Tajikistan",29.63,[20210801,1,1,0,0,0,0,0,4,4],[0.76,"-"]],["SOM","Somalia",29.63,[20210719,0,1,1,3,0,1,0,1,3],[0.34,"="]],["CMR","Cameroon",29.63,[20210802,1,0,1,3,0,0,0,1,3],[0.0,"="]],["BLR","Belarus",29.63,[20210803,0,1,1,1,0,1,0,1,1],[10.12,"+"]],["LTU","Lithuania",29.63,[20210801,1,1,1,0,0,0,0,2,2],[14.66,"+"]],["RUS","Russia",30.09,[20210801,0,2,1,2,0,1,0,1,3],[15.34,"-"]],["DMA","Dominica",31.48,[20210719,0,0,1,2,0,1,0,2,2],[1.59,"="]],["ROU","Romania",31.48,[20210712,2,1,1,2,0,0,0,1,4],[1.06,"+"]],["RKS","Kosovo",32.41,[20210805,1,1,1,2,0,0,0,3,3],[8.31,"+"]],["SVK","Slovak Republic",32.87,[20210806,2,1,2,4,0,0,0,2,-1],[0.83,"-"]],["GMB","Gambia",33.33,[20210803,0,0,1,4,0,0,0,2,4],[4.71,"="]],["HRV","Croatia",33.8,[20210803,1,1,1,3,0,0,0,1,3],[4.18,"-"]],["MCO","Monaco",34.26,[20210726,0,1,1,4,0,0,0,1,2],[36.4,"-"]],["BIH","Bosnia and Herzegovina",35.19,[20210726,1,1,1,3,0,0,0,1,2],[1.96,"+"]],["SLV","El Salvador",35.19,[20210726,1,1,2,1,0,0,0,1,4],[3.86,"-"]],["CZE","Czech Republic",35.19,[20210722,1,1,1,1,0,0,0,3,2],[1.53,"-"]],["ISR","Israel",35.19,[20210730,1,1,1,0,0,0,0,4,2],[35.92,"+"]],["SRB","Serbia",36.11,[20210730,1,1,1,2,0,1,0,1,2],[4.97,"+"]],["NLD","Netherlands",36.11,[20210806,1,2,1,0,0,0,0,3,2],[15.94,"-"]],["SWE","Sweden",37.04,[20210731,0,0,1,3,0,1,0,3,0],[6.36,"+"]],["BMU","Bermuda",37.96,[20210802,1,1,1,3,0,0,0,2,2],[13.99,"+"]],["YEM","Yemen",37.96,[20210719,1,1,1,0,0,2,1,3,2],[0.03,"="]],["ALB","Albania",37.96,[20210806,2,1,1,3,0,2,0,0,2],[2.76,"+"]],["BEN","Benin",38.89,[20210802,0,0,2,3,0,0,1,1,3],[0.25,"="]],["VIR","United States Virgin Islands",38.89,[20210628,2,1,1,3,0,0,0,1,3],[]],["SMR","San Marino",38.89,[20210802,1,1,1,3,0,1,0,1,1],[7.16,"="]],["GRL","Greenland",38.89,[20210802,1,2,1,2,0,0,0,2,2],[10.57,"+"]],["MRT","Mauritania",39.81,[20210720,0,0,2,4,0,1,0,1,3],[6.68,"+"]],["BRN","Brunei",40.74,[20210806,1,1,1,2,0,0,0,4,2],[0.1,"-"]],["LUX","Luxembourg",41.67,[20210719,1,1,1,2,0,1,0,3,2],[8.95,"-"]],["ISL","Iceland",41.67,[20210726,2,1,1,2,0,0,0,3,2],[33.99,"-"]],["LVA","Latvia",41.67,[20210802,2,1,1,3,0,0,0,2,2],[3.67,"-"]],["FRO","Faeroe Islands",41.67,[20210802,1,1,1,2,0,1,0,3,2],[1.46,"-"]],["GHA","Ghana",42.59,[20210802,0,2,2,3,0,1,0,1,4],[1.57,"="]],["BGR","Bulgaria",42.59,[20210803,2,2,1,3,0,0,0,1,3],[5.36,"+"]],["TGO","Togo",42.59,[20210802,0,2,0,3,0,1,2,2,4],[1.61,"+"]],["ETH","Ethiopia",43.52,[20210802,1,1,1,3,1,0,0,2,3],[0.38,"+"]],["TON","Tonga",43.52,[20210726,0,0,1,3,0,2,0,4,0],[]],["EGY","Egypt",43.52,[20210706,1,1,2,4,0,0,0,1,4],[0.05,"="]],["CYP","Cyprus",43.52,[20210802,1,1,1,3,1,0,0,2,3],[42.3,"-"]],["GUM","Guam",43.52,[20210712,1,1,1,3,1,0,0,2,3],[]],["FIN","Finland",43.98,[20210730,1,1,1,4,0,1,0,3,2],[12.15,"-"]],["FRA","France",43.98,[20210730,1,2,2,3,0,0,0,3,3],[34.68,"+"]],["GBR","United Kingdom",43.98,[20210806,1,2,1,4,1,0,0,3,3],[38.89,"+"]],["SYR","Syria",43.98,[20210712,3,1,2,3,0,0,0,1,2],[0.1,"="]],["SLE","Sierra Leone",43.98,[20210803,1,2,1,3,1,1,0,1,4],[0.06,"="]],["CHE","Switzerland",44.44,[20210806,1,1,1,3,0,1,0,3,2],[10.4,"+"]],["ITA","Italy",44.44,[20210730,1,2,1,1,1,0,0,3,2],[9.51,"-"]],["POL","Poland",44.44,[20210729,1,1,1,2,1,1,0,2,2],[0.38,"="]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[3.37,"+"]],["MWI","Malawi",45.37,[20210726,0,1,2,3,0,0,0,4,3],[2.55,"-"]],["AND","Andorra",46.3,[20210802,1,1,1,4,1,0,0,2,2],[29.21,"+"]],["NOR","Norway",47.22,[20210806,1,1,1,3,1,1,0,2,2],[7.2,"+"]],["DNK","Denmark",47.22,[20210730,1,2,2,2,0,0,0,3,2],[14.68,"-"]],["MLT","Malta",47.22,[20210805,1,2,1,4,0,0,0,3,3],[16.66,"-"]],["KOR","South Korea",47.22,[20210806,2,1,2,4,0,0,0,2,3],[3.03,"+"]],["ESP","Spain",47.69,[20210802,1,1,2,4,0,2,0,2,2],[43.11,"-"]],["LAO","Laos",48.15,[20210802,1,2,1,3,1,1,1,1,3],[3.65,"+"]],["IRL","Ireland",48.15,[20210731,1,2,1,3,0,1,0,3,3],[26.76,"+"]],["MLI","Mali",48.15,[20210718,1,2,2,3,0,1,0,1,3],[0.04,"+"]],["COG","Congo",48.15,[20210802,0,1,1,3,1,2,1,1,3],[0.08,"-"]],["GRC","Greece",48.61,[20210802,1,1,1,4,1,1,1,1,3],[26.1,"+"]],["COD","Democratic Republic of Congo",49.07,[20210802,0,2,2,3,0,2,2,1,3],[0.27,"-"]],["MUS","Mauritius",49.07,[20210719,2,2,1,3,0,0,2,1,4],[7.63,"="]],["AUT","Austria",49.07,[20210730,2,2,1,2,1,0,0,3,2],[5.4,"+"]],["PNG","Papua New Guinea",49.07,[20210725,0,1,1,3,1,1,1,2,4],[0.16,"="]],["PRY","Paraguay",49.07,[20210703,1,2,1,3,0,2,0,2,3],[4.92,"-"]],["USA","United States",49.54,[20210802,2,1,1,3,1,1,2,3,3],[32.37,"+"]],["QAT","Qatar",50.0,[20210719,1,1,1,4,1,1,0,2,3],[5.93,"+"]],["DZA","Algeria",50.46,[20210712,1,1,2,4,1,2,0,2,3],[2.94,"-"]],["JPN","Japan",50.46,[20210731,1,2,1,2,0,1,1,4,1],[9.94,"+"]],["KAZ","Kazakhstan",50.46,[20210726,2,2,2,3,0,0,0,3,3],[42.23,"-"]],["UKR","Ukraine",50.93,[20210730,3,1,1,3,0,0,2,1,3],[3.09,"+"]],["BRB","Barbados",50.93,[20210705,2,2,2,3,0,0,0,2,3],[3.78,"-"]],["HTI","Haiti",50.93,[20210729,1,1,2,3,0,2,0,2,3],[0.31,"="]],["SGP","Singapore",50.93,[20210731,1,2,1,4,0,1,0,3,4],[1.82,"-"]],["BEL","Belgium",50.93,[20210730,1,2,1,4,0,1,0,3,3],[14.81,"+"]],["BHR","Bahrain",51.85,[20210714,2,2,2,0,0,1,1,2,3],[6.45,"+"]],["JOR","Jordan",51.85,[20210802,1,1,1,3,1,2,0,3,2],[7.89,"-"]],["ZAF","South Africa",51.85,[20210801,1,2,1,3,1,2,0,1,3],[18.34,"+"]],["NGA","Nigeria",52.78,[20210802,2,1,1,3,1,2,0,2,3],[0.26,"="]],["GTM","Guatemala",52.78,[20210803,1,1,2,4,0,0,1,3,4],[15.94,"+"]],["MOZ","Mozambique",53.7,[20210804,2,1,2,3,1,2,0,1,3],[4.83,"-"]],["SAU","Saudi Arabia",53.7,[20210726,3,1,2,3,0,0,0,3,3],[4.03,"+"]],["MDG","Madagascar",53.7,[20210725,2,2,1,2,0,2,0,4,3],[0.02,"="]],["DJI","Djibouti",54.63,[20210706,1,1,2,4,2,0,0,1,4],[0.12,"+"]],["ZMB","Zambia",54.63,[20210801,3,2,2,3,0,0,0,2,3],[3.14,"-"]],["CRI","Costa Rica",54.63,[20210802,2,2,2,3,0,1,1,1,3],[27.66,"+"]],["RWA","Rwanda",54.63,[20210719,1,2,1,3,1,2,0,2,3],[5.69,"-"]],["LBR","Liberia",55.56,[20210718,1,1,2,3,1,1,0,3,3],[0.18,"="]],["URY","Uruguay",55.56,[20210802,1,1,1,3,1,1,1,4,2],[3.83,"-"]],["AFG","Afghanistan",56.02,[20210725,3,2,2,4,0,0,1,2,3],[1.21,"-"]],["MDA","Moldova",56.48,[20210719,2,2,2,4,0,2,0,1,3],[3.78,"+"]],["LSO","Lesotho",56.48,[20210801,1,1,2,4,1,2,0,1,3],[4.63,"="]],["BOL","Bolivia",56.48,[20210726,2,1,1,1,1,2,1,4,4],[5.92,"="]],["BRA","Brazil",56.94,[20210725,2,2,2,3,1,2,2,1,4],[15.36,"+"]],["AGO","Angola",56.94,[20210727,0,2,1,3,1,1,2,3,2],[0.37,"+"]],["KGZ","Kyrgyz Republic",57.41,[20210802,2,2,2,4,1,0,1,1,2],[12.61,"-"]],["BHS","Bahamas",57.41,[20210801,2,2,1,4,0,2,2,1,4],[26.96,"+"]],["PAK","Pakistan",57.41,[20210801,2,1,2,4,0,1,1,2,3],[2.15,"-"]],["NPL","Nepal",58.33,[20210725,3,2,2,3,1,0,0,2,4],[8.53,"-"]],["PRT","Portugal",58.33,[20210806,1,2,2,4,1,0,0,3,3],[22.87,"-"]],["TKM","Turkmenistan",58.33,[20210731,1,2,2,1,0,0,2,4,3],[]],["CPV","Cape Verde",59.26,[20210712,1,2,2,4,0,1,2,1,3],[5.47,"-"]],["BWA","Botswana",59.26,[20210727,1,1,2,3,0,2,2,1,2],[96.49,"="]],["KWT","Kuwait",60.19,[20210712,3,2,2,3,0,0,0,4,3],[17.38,"-"]],["GUY","Guyana",60.19,[20210620,2,1,2,4,0,2,0,3,3],[6.99,"-"]],["CAN","Canada",60.65,[20210730,3,1,1,4,1,1,2,4,3],[2.77,"+"]],["AZE","Azerbaijan",61.11,[20210801,2,2,2,3,1,1,0,4,2],[8.59,"+"]],["THA","Thailand",61.11,[20210801,2,2,2,4,1,2,2,3,4],[27.9,"+"]],["MNG","Mongolia",61.11,[20210802,3,2,2,4,0,1,1,1,4],[35.85,"-"]],["ERI","Eritrea",62.04,[20210802,0,0,2,3,1,1,2,4,3],[0.12,"="]],["COL","Colombia",62.04,[20210725,3,2,2,3,2,2,0,1,3],[14.68,"-"]],["ECU","Ecuador",62.04,[20210802,2,2,2,3,1,1,1,2,3],[3.76,"-"]],["GIN","Guinea",62.04,[20210801,1,2,2,3,0,2,2,2,3],[0.99,"+"]],["ZWE","Zimbabwe",62.04,[20210802,0,2,2,3,0,2,2,2,3],[7.65,"-"]],["DOM","Dominican Republic",62.96,[20210712,2,1,2,4,1,2,0,2,4],[3.05,"-"]],["KEN","Kenya",62.96,[20210726,2,1,2,3,0,2,2,2,4],[2.09,"+"]],["ARE","United Arab Emirates",63.43,[20210717,1,2,2,4,1,0,2,3,3],[15.44,"="]],["BTN","Bhutan",63.43,[20210719,3,2,2,4,1,2,1,3,3],[0.67,"-"]],["BLZ","Belize",63.89,[20210802,3,2,1,3,1,1,2,1,3],[9.88,"+"]],["TLS","Timor-Leste",64.35,[20210801,0,3,2,4,2,3,2,2,3],[6.96,"+"]],["UZB","Uzbekistan",64.81,[20210725,2,1,2,3,1,0,2,4,3],[2.74,"+"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[86.0,"+"]],["TUR","Turkey",64.81,[20210806,1,1,1,2,2,2,2,2,4],[28.12,"+"]],["CUB","Cuba",65.28,[20210718,3,2,2,4,2,1,2,1,3],[80.94,"+"]],["LBN","Lebanon",65.74,[20210731,1,2,1,3,1,2,2,2,3],[16.97,"+"]],["HKG","Hong Kong",65.74,[20210719,2,2,1,4,1,1,1,3,2],[0.04,"="]],["JAM","Jamaica",66.67,[20210726,1,2,2,3,1,2,2,3,3],[7.14,"+"]],["MAR","Morocco",66.67,[20210705,2,2,1,4,1,2,2,2,3],[23.49,"+"]],["MEX","Mexico",67.13,[20210802,3,3,2,4,1,2,2,1,3],[12.72,"+"]],["SWZ","Eswatini",67.59,[20210725,1,1,1,3,1,2,2,4,4],[59.87,"+"]],["FJI","Fiji",67.59,[20210803,3,1,2,3,0,2,2,3,2],[111.23,"-"]],["DEU","Germany",67.59,[20210802,1,2,2,4,1,1,1,3,2],[3.06,"+"]],["GAB","Gabon",67.59,[20210802,1,1,2,3,1,2,2,2,3],[0.5,"+"]],["AUS","Australia",68.06,[20210730,2,2,2,4,1,2,2,4,3],[1.08,"+"]],["IDN","Indonesia",68.98,[20210727,3,2,2,4,1,2,2,3,4],[12.3,"-"]],["KHM","Cambodia",68.98,[20210803,3,3,2,4,0,2,2,2,3],[3.61,"-"]],["MMR","Myanmar",69.91,[20210719,3,2,2,4,1,2,1,2,4],[7.45,"-"]],["PER","Peru",70.37,[20210718,2,2,2,4,1,1,2,3,4],[6.05,"+"]],["PAN","Panama",70.37,[20210802,3,2,2,3,1,3,1,2,4],[17.01,"-"]],["TWN","Taiwan",71.3,[20210719,3,2,2,4,0,2,1,3,4],[0.06,"-"]],["PHL","Philippines",71.76,[20210802,2,2,2,4,1,2,2,3,3],[7.5,"+"]],["LBY","Libya",72.22,[20210712,2,2,2,4,0,2,2,2,3],[32.67,"-"]],["ARG","Argentina",73.61,[20210802,2,2,2,4,2,2,2,4,3],[26.41,"+"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[10.41,"-"]],["TUN","Tunisia",74.07,[20210723,1,3,2,4,2,2,2,3,3],[23.04,"-"]],["IRN","Iran",74.54,[20210629,2,3,2,3,1,1,2,3,3],[41.08,"+"]],["IRQ","Iraq",75.93,[20210726,3,2,2,3,0,2,2,3,4],[28.42,"-"]],["OMN","Oman",77.78,[20210712,2,2,2,4,1,2,2,3,3],[6.05,"="]],["HND","Honduras",78.7,[20210726,3,3,2,4,0,1,2,3,3],[12.73,"-"]],["VNM","Vietnam",79.17,[20210727,2,3,2,4,2,2,2,4,3],[7.67,"-"]],["CHN","China",79.17,[20210719,3,3,2,4,1,3,2,3,2],[0.01,"="]],["MYS","Malaysia",80.56,[20210719,0,3,2,4,2,2,2,3,3],[56.99,"+"]],["LKA","Sri Lanka",81.48,[20210718,3,2,2,4,1,2,2,2,3],[11.72,"+"]],["SUR","Suriname",81.48,[20210612,3,2,2,4,2,2,0,4,4],[13.78,"+"]],["IND","India",81.94,[20210720,3,3,2,4,2,3,2,3,4],[2.91,"-"]],["SYC","Seychelles",84.26,[20210726,3,2,2,4,1,2,2,3,4],[57.09,"="]],["CHL","Chile",84.72,[20210719,3,3,2,4,2,3,2,4,3],[5.19,"-"]],["UGA","Uganda",87.04,[20210802,3,2,2,3,2,2,2,3,3],[0.48,"-"]],["PSE","Palestine",87.04,[20210802,3,1,2,4,2,2,2,4,3],[]],["NAM","Namibia",87.04,[20210731,3,2,2,4,1,2,2,4,3],[11.62,"-"]],["BGD","Bangladesh",90.74,[20210728,3,3,2,4,2,2,2,2,4],[8.25,"-"]],["VEN","Venezuela",97.22,[20210801,3,3,2,4,2,3,2,3,4],[3.13,"+"]]];