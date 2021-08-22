const dataUpdate="2021.08.22";const DATA_INDEX={CODE:0,NAME:1,STRINGENCY:2,DATA:3,INCIDENCE:4};var data=[["NIC","Nicaragua",2.78,[20210816,0,0,0,0,0,0,0,1,2],[0.91,"="]],["MLI","Mali",8.33,[20210809,0,0,0,0,0,0,0,1,3],[0.04,"="]],["BFA","Burkina Faso",13.89,[20210816,0,0,0,0,0,0,0,1,4],[0.02,"="]],["BDI","Burundi",15.74,[20210816,0,2,0,0,0,0,0,1,1],[1.41,"="]],["TZA","Tanzania",16.67,[20210808,0,0,1,0,0,0,0,2,1],[0.0,"="]],["PRI","Puerto Rico",17.59,[20210809,1,0,0,0,0,0,0,1,2],[]],["NER","Niger",19.44,[20210816,0,0,2,1,0,0,0,2,3],[0.03,"+"]],["SDN","Sudan",19.44,[20210718,0,0,0,0,0,0,0,3,0],[0.03,"="]],["SEN","Senegal",19.44,[20210816,0,0,0,0,0,0,0,3,4],[1.16,"-"]],["CIV","Cote d'Ivoire",20.37,[20210814,0,0,0,0,0,1,0,2,4],[0.68,"+"]],["VUT","Vanuatu",22.22,[20210816,0,0,0,0,0,0,0,4,0],[0.0,"="]],["NZL","New Zealand",22.22,[20210816,0,0,0,0,0,0,0,4,2],[0.29,"+"]],["MAC","Macao",23.15,[20210712,1,0,0,0,0,0,0,3,2],[]],["EST","Estonia",23.15,[20210821,1,0,0,1,0,0,0,2,2],[20.63,"-"]],["GMB","Gambia",24.07,[20210809,1,1,0,0,0,0,0,2,3],[2.62,"="]],["CAF","Central African Republic",24.07,[20210809,0,0,0,0,0,2,0,2,3],[0.0,"-"]],["SLB","Solomon Islands",25.0,[20210719,0,0,1,0,0,0,0,3,0],[0.0,"="]],["SSD","South Sudan",25.0,[20210816,0,0,0,3,0,0,0,2,2],[0.09,"="]],["TCD","Chad",25.0,[20210822,0,0,0,3,0,0,0,2,4],[0.0,"="]],["HUN","Hungary",27.78,[20210819,0,0,0,3,0,0,0,3,2],[0.69,"="]],["ABW","Aruba",28.7,[20210803,1,0,2,0,0,0,0,1,1],[89.51,"-"]],["SVN","Slovenia",29.63,[20210816,1,1,1,1,0,0,0,1,3],[13.54,"+"]],["LTU","Lithuania",29.63,[20210801,1,1,1,0,0,0,0,2,2],[20.97,"+"]],["CMR","Cameroon",30.56,[20210814,0,0,1,3,0,0,0,2,3],[0.0,"="]],["SLV","El Salvador",32.41,[20210809,1,1,2,1,0,0,0,1,4],[5.63,"="]],["RKS","Kosovo",32.41,[20210820,1,1,1,2,0,0,0,3,3],[100.01,"+"]],["HRV","Croatia",33.8,[20210817,1,1,1,3,0,0,0,1,3],[9.28,"+"]],["TJK","Tajikistan",35.19,[20210815,1,1,0,2,0,0,0,4,4],[0.54,"-"]],["SOM","Somalia",35.19,[20210808,0,1,1,3,0,1,0,1,3],[0.24,"-"]],["BIH","Bosnia and Herzegovina",35.19,[20210817,1,1,1,3,0,0,0,1,2],[8.7,"="]],["SRB","Serbia",36.11,[20210819,1,1,1,2,0,1,0,1,2],[16.1,"+"]],["NLD","Netherlands",36.11,[20210820,1,2,1,0,0,0,0,3,2],[14.41,"-"]],["MRT","Mauritania",36.11,[20210816,0,1,2,0,0,2,0,1,3],[5.4,"-"]],["CZE","Czech Republic",37.04,[20210814,2,1,1,1,0,0,0,3,3],[1.73,"-"]],["SWE","Sweden",37.04,[20210816,0,0,1,3,0,1,0,3,0],[9.11,"="]],["MCO","Monaco",37.04,[20210809,0,1,1,4,0,0,0,2,2],[25.85,"+"]],["KIR","Kiribati",37.5,[20210809,0,0,0,4,0,2,0,4,0],[0.0,"="]],["BMU","Bermuda",37.96,[20210802,1,1,1,3,0,0,0,2,2],[19.96,"+"]],["COD","Democratic Republic of Congo",37.96,[20210816,0,1,1,3,0,2,2,1,3],[0.12,"-"]],["LUX","Luxembourg",37.96,[20210821,1,1,1,2,0,0,0,3,2],[8.9,"="]],["ALB","Albania",37.96,[20210820,2,1,1,3,0,2,0,0,2],[16.08,"+"]],["YEM","Yemen",37.96,[20210719,1,1,1,0,0,2,1,3,2],[0.1,"+"]],["ROU","Romania",38.43,[20210808,2,1,1,4,0,0,0,2,4],[2.61,"+"]],["DNK","Denmark",38.89,[20210820,1,2,1,2,0,0,0,2,3],[16.82,"+"]],["BEN","Benin",38.89,[20210815,0,0,2,3,0,0,1,1,3],[1.32,"="]],["SMR","San Marino",38.89,[20210815,1,1,1,3,0,1,0,1,1],[15.58,"="]],["NOR","Norway",38.89,[20210820,1,1,1,0,1,1,0,2,2],[10.59,"+"]],["VIR","United States Virgin Islands",38.89,[20210628,2,1,1,3,0,0,0,1,3],[]],["GRL","Greenland",38.89,[20210802,1,2,1,2,0,0,0,2,2],[13.34,"-"]],["POL","Poland",38.89,[20210813,1,1,1,2,0,1,0,2,2],[0.5,"="]],["FIN","Finland",39.81,[20210820,1,1,1,4,0,1,0,2,1],[11.72,"-"]],["CYP","Cyprus",40.74,[20210816,1,1,1,3,1,0,0,1,3],[28.79,"-"]],["LVA","Latvia",41.67,[20210810,2,1,1,3,0,0,0,2,2],[6.78,"+"]],["FRO","Faeroe Islands",41.67,[20210802,1,1,1,2,0,1,0,3,2],[1.17,"="]],["ISL","Iceland",41.67,[20210816,2,1,1,2,0,0,0,3,2],[24.91,"-"]],["COL","Colombia",41.67,[20210816,3,1,1,0,2,2,0,1,3],[6.25,"-"]],["GHA","Ghana",42.59,[20210815,0,2,2,3,0,1,0,1,4],[1.68,"+"]],["BGR","Bulgaria",42.59,[20210803,2,2,1,3,0,0,0,1,3],[16.34,"+"]],["MWI","Malawi",42.59,[20210810,0,1,2,3,0,0,0,3,3],[1.12,"-"]],["RUS","Russia",43.06,[20210822,0,2,1,3,0,0,2,2,3],[14.01,"-"]],["ETH","Ethiopia",43.52,[20210816,1,1,1,3,1,0,0,2,3],[0.77,"+"]],["BLR","Belarus",43.52,[20210816,0,1,1,4,0,1,0,3,1],[12.73,"+"]],["MLT","Malta",43.52,[20210816,1,1,1,4,0,0,0,3,3],[14.07,"-"]],["TON","Tonga",43.52,[20210726,0,0,1,3,0,2,0,4,0],[]],["NGA","Nigeria",43.52,[20210814,0,1,1,3,1,1,0,2,3],[0.25,"-"]],["GUM","Guam",43.52,[20210712,1,1,1,3,1,0,0,2,3],[]],["EGY","Egypt",43.52,[20210706,1,1,2,4,0,0,0,1,4],[0.13,"+"]],["GBR","United Kingdom",43.98,[20210820,1,2,1,4,1,0,0,3,3],[46.46,"+"]],["SYR","Syria",43.98,[20210810,3,1,2,3,0,0,0,1,2],[0.41,"+"]],["SLE","Sierra Leone",43.98,[20210809,1,2,1,3,1,1,0,1,4],[0.02,"-"]],["SVK","Slovak Republic",43.98,[20210806,2,1,2,4,0,0,0,2,2],[1.37,"="]],["NAM","Namibia",44.44,[20210815,0,1,1,3,1,2,0,1,3],[7.06,"+"]],["CHE","Switzerland",44.44,[20210820,1,1,1,3,0,1,0,3,2],[28.7,"="]],["PRY","Paraguay",45.37,[20210820,1,1,1,3,0,2,0,2,3],[2.05,"+"]],["LIE","Liechtenstein",45.37,[20210509,1,2,1,3,0,1,1,2,3],[27.35,"+"]],["LBR","Liberia",46.3,[20210816,0,1,1,3,1,1,0,3,4],[0.0,"="]],["AND","Andorra",46.3,[20210802,1,1,1,4,1,0,0,2,2],[11.83,"="]],["SGP","Singapore",47.22,[20210813,1,1,1,4,0,1,0,3,4],[0.79,"-"]],["BEL","Belgium",47.22,[20210820,1,2,1,4,0,0,0,3,3],[17.08,"="]],["ESP","Spain",47.69,[20210816,1,1,2,4,0,2,0,2,2],[23.5,"="]],["IRL","Ireland",48.15,[20210816,1,2,1,3,0,1,0,3,3],[35.99,"+"]],["GRC","Greece",48.61,[20210809,1,1,1,4,1,1,1,1,3],[30.16,"-"]],["PNG","Papua New Guinea",49.07,[20210806,0,1,1,3,1,1,1,2,4],[0.04,"="]],["QAT","Qatar",50.0,[20210719,1,1,1,4,1,1,0,2,3],[8.19,"-"]],["OMN","Oman",50.0,[20210815,2,2,2,4,0,2,0,2,0],[3.56,"="]],["TUR","Turkey",50.0,[20210811,1,1,1,3,1,1,1,1,4],[23.25,"-"]],["BRB","Barbados",50.0,[20210816,2,2,1,3,0,2,0,1,3],[5.12,"-"]],["ITA","Italy",50.0,[20210813,1,2,1,1,1,0,1,3,2],[10.32,"+"]],["JPN","Japan",50.46,[20210814,1,2,1,2,0,1,1,4,1],[17.28,"+"]],["DZA","Algeria",50.46,[20210712,1,1,2,4,1,2,0,2,3],[1.47,"-"]],["KOR","South Korea",50.93,[20210815,3,2,2,4,0,0,0,2,3],[3.47,"-"]],["ZMB","Zambia",50.93,[20210816,2,2,2,3,0,0,0,2,3],[1.76,"+"]],["TGO","Togo",50.93,[20210816,0,0,2,3,0,1,2,2,4],[2.67,"="]],["UKR","Ukraine",50.93,[20210730,3,1,1,3,0,0,2,1,3],[4.1,"+"]],["BRA","Brazil",51.39,[20210815,2,2,1,3,1,2,2,1,4],[13.87,"-"]],["MDA","Moldova",51.85,[20210814,2,2,2,4,0,0,0,2,3],[8.27,"+"]],["JOR","Jordan",51.85,[20210802,1,1,1,3,1,2,0,3,2],[8.23,"-"]],["COG","Congo",51.85,[20210816,1,1,1,3,1,2,1,1,3],[0.11,"="]],["MUS","Mauritius",51.85,[20210816,2,2,1,3,0,1,1,3,3],[16.43,"="]],["ZAF","South Africa",51.85,[20210815,1,2,1,3,1,2,0,1,3],[20.42,"+"]],["AFG","Afghanistan",52.31,[20210808,2,2,2,4,0,2,1,1,3],[0.25,"="]],["GTM","Guatemala",52.78,[20210816,1,1,2,4,0,0,1,3,4],[20.88,"+"]],["ISR","Israel",52.78,[20210813,1,2,2,3,0,0,0,4,2],[83.5,"+"]],["BHR","Bahrain",53.7,[20210816,3,2,0,3,0,2,0,3,4],[6.03,"-"]],["HTI","Haiti",53.7,[20210812,1,1,2,4,0,2,0,2,3],[0.23,"="]],["SAU","Saudi Arabia",53.7,[20210726,3,1,2,3,0,0,0,3,3],[1.57,"+"]],["MDG","Madagascar",53.7,[20210808,2,2,1,2,0,2,0,4,3],[0.02,"="]],["LAO","Laos",53.7,[20210816,1,2,2,3,1,1,1,1,3],[4.46,"+"]],["MOZ","Mozambique",53.7,[20210804,2,1,2,3,1,2,0,1,3],[1.91,"-"]],["CRI","Costa Rica",54.63,[20210817,2,2,2,3,0,1,1,1,3],[34.64,"="]],["KAZ","Kazakhstan",54.63,[20210816,2,2,2,4,-1,0,0,3,3],[45.32,"+"]],["RWA","Rwanda",54.63,[20210816,1,2,1,3,1,2,0,2,3],[3.69,"-"]],["DJI","Djibouti",54.63,[20210706,1,1,2,4,2,0,0,1,4],[0.2,"="]],["URY","Uruguay",55.56,[20210816,1,1,1,3,1,1,1,4,2],[3.35,"+"]],["BHS","Bahamas",55.56,[20210817,1,2,1,4,-1,2,2,1,4],[29.83,"="]],["USA","United States",56.02,[20210816,2,2,1,4,1,1,2,3,3],[44.58,"+"]],["AUT","Austria",56.02,[20210813,2,2,1,2,1,0,2,3,2],[12.0,"+"]],["BOL","Bolivia",56.48,[20210819,2,1,1,1,1,2,1,4,4],[5.83,"+"]],["GUY","Guyana",56.48,[20210819,1,1,2,4,0,2,0,3,-1],[13.97,"+"]],["TWN","Taiwan",56.48,[20210811,2,2,1,3,0,0,1,4,3],[0.04,"="]],["AGO","Angola",56.94,[20210727,0,2,1,3,1,1,2,3,2],[0.56,"+"]],["BGD","Bangladesh",57.41,[20210822,3,0,2,4,0,2,0,2,4],[3.9,"-"]],["KGZ","Kyrgyz Republic",57.41,[20210816,2,2,2,4,1,0,1,1,2],[4.2,"-"]],["PRT","Portugal",58.33,[20210820,1,2,2,4,1,0,0,3,3],[22.68,"+"]],["MNG","Mongolia",59.26,[20210816,3,2,2,4,0,1,1,1,4],[46.25,"+"]],["CPV","Cape Verde",59.26,[20210712,1,2,2,4,0,1,2,1,3],[8.79,"-"]],["BTN","Bhutan",59.72,[20210809,2,2,2,4,1,2,1,3,3],[0.28,"+"]],["KWT","Kuwait",60.19,[20210808,3,2,2,3,0,0,0,4,3],[6.17,"-"]],["ECU","Ecuador",60.19,[20210815,2,1,2,4,1,1,1,2,3],[1.09,"="]],["DOM","Dominican Republic",60.19,[20210809,2,1,2,4,1,2,0,1,4],[2.21,"-"]],["LSO","Lesotho",60.19,[20210815,1,2,2,4,1,2,0,1,3],[0.85,"="]],["CAN","Canada",60.65,[20210813,2,2,1,4,1,1,2,4,3],[6.26,"+"]],["AZE","Azerbaijan",61.11,[20210819,2,2,2,3,1,1,0,4,2],[33.01,"+"]],["ERI","Eritrea",62.04,[20210816,0,0,2,3,1,1,2,4,3],[0.08,"+"]],["GIN","Guinea",62.04,[20210801,1,2,2,3,0,2,2,2,3],[0.88,"-"]],["DEU","Germany",62.04,[20210812,1,2,2,4,1,1,0,3,2],[7.77,"+"]],["BWA","Botswana",62.04,[20210822,3,2,2,4,0,2,2,1,-1],[58.94,"="]],["TKM","Turkmenistan",62.5,[20210820,1,2,2,3,0,0,2,4,3],[]],["DMA","Dominica",62.96,[20210817,0,3,2,4,1,2,0,2,3],[74.82,"-"]],["HKG","Hong Kong",62.96,[20210816,2,2,1,4,1,1,1,2,2],[0.04,"="]],["SWZ","Eswatini",62.96,[20210810,2,1,1,3,1,2,2,1,4],[54.57,"+"]],["PHL","Philippines",63.43,[20210811,2,2,2,4,1,2,1,3,3],[12.62,"+"]],["TLS","Timor-Leste",64.35,[20210815,0,3,2,4,2,3,2,2,3],[18.52,"+"]],["NPL","Nepal",64.81,[20210815,3,2,2,4,1,1,0,2,4],[7.48,"-"]],["GEO","Georgia",64.81,[20210621,0,2,2,4,0,2,2,2,3],[120.6,"-"]],["CUB","Cuba",65.28,[20210808,3,2,2,4,2,1,2,1,3],[81.63,"+"]],["ARE","United Arab Emirates",65.28,[20210816,1,1,2,4,1,1,2,3,3],[11.14,"-"]],["IND","India",65.28,[20210816,2,-1,2,4,2,2,2,3,4],[2.4,"-"]],["LBN","Lebanon",65.74,[20210731,1,2,1,3,1,2,2,2,3],[19.85,"-"]],["MMR","Myanmar",66.2,[20210809,3,2,2,4,1,2,1,2,4],[5.23,"-"]],["MAR","Morocco",66.67,[20210705,2,2,1,4,1,2,2,2,3],[20.98,"-"]],["JAM","Jamaica",66.67,[20210816,1,2,2,3,1,2,2,3,3],[19.26,"+"]],["PAK","Pakistan",66.67,[20210816,3,1,2,4,1,1,1,2,3],[1.64,"+"]],["BLZ","Belize",66.67,[20210809,3,2,1,3,1,1,2,1,3],[20.41,"="]],["MEX","Mexico",67.13,[20210816,3,3,2,4,1,2,2,1,4],[13.9,"-"]],["GAB","Gabon",67.59,[20210816,1,1,2,3,1,2,2,2,3],[0.66,"="]],["AUS","Australia",68.06,[20210813,2,2,2,4,1,2,2,4,3],[2.76,"+"]],["IDN","Indonesia",68.98,[20210816,3,2,2,4,1,2,2,3,4],[6.97,"-"]],["PAN","Panama",70.37,[20210802,3,2,2,3,1,3,1,2,4],[15.64,"-"]],["UZB","Uzbekistan",71.3,[20210815,2,2,2,3,1,0,2,4,3],[2.59,"-"]],["KHM","Cambodia",72.22,[20210821,3,3,2,4,0,2,2,2,3],[3.31,"-"]],["FRA","France",72.22,[20210821,1,2,2,3,2,0,2,3,3],[35.24,"-"]],["THA","Thailand",72.22,[20210816,2,2,2,4,1,2,2,3,4],[29.68,"-"]],["LBY","Libya",72.22,[20210712,2,2,2,4,0,2,2,2,3],[30.01,"="]],["KEN","Kenya",72.22,[20210816,2,1,2,3,2,2,2,2,4],[2.24,"+"]],["ZWE","Zimbabwe",73.15,[20210815,3,2,2,3,0,2,2,2,3],[2.53,"+"]],["TTO","Trinidad and Tobago",74.07,[20210621,2,1,2,4,0,2,2,4,3],[13.13,"-"]],["PER","Peru",74.07,[20210815,2,2,2,4,1,2,2,3,4],[3.13,"-"]],["IRN","Iran",74.54,[20210629,2,3,2,3,1,1,2,3,3],[42.79,"-"]],["ARG","Argentina",75.93,[20210816,1,2,2,4,2,2,2,4,3],[15.79,"-"]],["IRQ","Iraq",75.93,[20210726,3,2,2,3,0,2,2,3,4],[18.01,"-"]],["CHL","Chile",78.7,[20210821,2,3,2,3,1,2,2,2,-1],[3.63,"-"]],["UGA","Uganda",78.7,[20210810,3,2,2,3,2,2,2,1,3],[0.24,"-"]],["HND","Honduras",78.7,[20210817,3,3,2,4,0,1,2,3,3],[15.28,"="]],["CHN","China",79.17,[20210719,3,3,2,4,1,3,2,3,2],[0.0,"="]],["VNM","Vietnam",79.17,[20210816,2,3,2,4,2,2,2,4,3],[10.46,"+"]],["LKA","Sri Lanka",79.63,[20210818,3,1,2,4,2,1,2,2,3],[22.79,"+"]],["BRN","Brunei",79.63,[20210818,3,3,2,4,1,2,0,4,4],[26.61,"+"]],["TUN","Tunisia",79.63,[20210821,1,2,2,4,2,2,2,2,3],[19.11,"+"]],["MYS","Malaysia",80.56,[20210719,0,3,2,4,2,2,2,3,3],[66.62,"+"]],["SUR","Suriname",83.33,[20210820,2,2,2,4,2,2,2,2,4],[20.26,"+"]],["SYC","Seychelles",84.26,[20210810,3,2,2,4,1,2,2,3,4],[71.9,"="]],["VEN","Venezuela",86.11,[20210815,3,3,2,4,1,3,1,3,4],[3.24,"+"]],["FJI","Fiji",86.11,[20210816,3,3,2,4,1,2,2,4,2],[56.16,"-"]],["PSE","Palestine",87.04,[20210802,3,1,2,4,2,2,2,4,3],[]]];