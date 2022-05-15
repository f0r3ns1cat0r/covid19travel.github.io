var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(h){return h.raw=h};$jscomp.createTemplateTagFirstArgWithRaw=function(h,t){h.raw=t;return h};
var REGIONS=[["Africa","002"],["Americas","019"],["Asia","142"],["Europe","150"],["Oceania","009"]],COUNTRIES_INDEX={NAME:0,REGION:1,SUBREG:2,INTERM:3},COUNTRIES=[["Åland Islands","150","154",""],["Afghanistan","142","034",""],["Albania","150","039",""],["Algeria","002","015",""],["American Samoa","009","061",""],["Andorra","150","039",""],["Angola","002","202","017"],["Anguilla","019","419","029"],["Antarctica","","",""],["Antigua and Barbuda","019","419","029"],["Argentina","019","419","005"],["Armenia",
"142","145",""],["Aruba","019","419","029"],["Australia","009","053",""],["Austria","150","155",""],["Azerbaijan","142","145",""],["Bahamas","019","419","029"],["Bahrain","142","145",""],["Bangladesh","142","034",""],["Barbados","019","419","029"],["Belarus","150","151",""],["Belgium","150","155",""],["Belize","019","419","013"],["Benin","002","202","011"],["Bermuda","019","021",""],["Bhutan","142","034",""],["Bolivia","019","419","005"],["Bonaire, Sint Eustatius and Saba","019","419","029"],["Bosnia and Herzegovina",
"150","039",""],["Botswana","002","202","018"],["Bouvet Island","019","419","005"],["Brazil","019","419","005"],["British Indian Ocean Territory","002","202","014"],["British Virgin Islands","019","419","029"],["Brunei","142","035",""],["Bulgaria","150","151",""],["Burkina Faso","002","202","011"],["Burundi","002","202","014"],["Cambodia","142","035",""],["Cameroon","002","202","017"],["Canada","019","021",""],["Cape Verde","002","202","011"],["Cayman Islands","019","419","029"],["Central African Republic",
"002","202","017"],["Chad","002","202","017"],["Chile","019","419","005"],["China","142","030",""],["Christmas Island","009","053",""],["Cocos (Keeling) Islands","009","053",""],["Colombia","019","419","005"],["Comoros","002","202","014"],["Congo","002","202","017"],["Cook Islands","009","061",""],["Costa Rica","019","419","013"],["Cote d'Ivoire","002","202","011"],["Croatia","150","039",""],["Cuba","019","419","029"],["Curaçao","019","419","029"],["Cyprus","150","039",""],["Czech Republic","150",
"151",""],["Democratic People's Republic of Korea","142","030",""],["Democratic Republic of Congo","002","202","017"],["Denmark","150","154",""],["Djibouti","002","202","014"],["Dominica","019","419","029"],["Dominican Republic","019","419","029"],["Ecuador","019","419","005"],["Egypt","002","015",""],["El Salvador","019","419","013"],["Equatorial Guinea","002","202","017"],["Eritrea","002","202","014"],["Estonia","150","154",""],["Eswatini","002","202","018"],["Ethiopia","002","202","014"],["Faeroe Islands",
"150","154",""],["Falkland Islands (Malvinas)","019","419","005"],["Fiji","009","054",""],["Finland","150","154",""],["France","150","155",""],["French Guiana","019","419","005"],["French Polynesia","009","061",""],["French Southern Territories","002","202","014"],["Gabon","002","202","017"],["Gambia","002","202","011"],["Georgia","142","145",""],["Germany","150","155",""],["Ghana","002","202","011"],["Gibraltar","150","039",""],["Greece","150","039",""],["Greenland","019","021",""],["Grenada","019",
"419","029"],["Guadeloupe","019","419","029"],["Guam","009","057",""],["Guatemala","019","419","013"],["Guernsey","150","154","830"],["Guinea","002","202","011"],["Guinea-Bissau","002","202","011"],["Guyana","019","419","005"],["Haiti","019","419","029"],["Heard Island and McDonald Islands","009","053",""],["Holy See","150","039",""],["Honduras","019","419","013"],["Hong Kong","142","030",""],["Hungary","150","151",""],["Iceland","150","154",""],["India","142","034",""],["Indonesia","142","035",""],
["Iran","142","034",""],["Iraq","142","145",""],["Ireland","150","154",""],["Isle of Man","150","154",""],["Israel","142","145",""],["Italy","150","039",""],["Jamaica","019","419","029"],["Japan","142","030",""],["Jersey","150","154","830"],["Jordan","142","145",""],["Kazakhstan","142","143",""],["Kenya","002","202","014"],["Kiribati","009","057",""],["Kosovo","150","039",""],["Kuwait","142","145",""],["Kyrgyz Republic","142","143",""],["Laos","142","035",""],["Latvia","150","154",""],["Lebanon",
"142","145",""],["Lesotho","002","202","018"],["Liberia","002","202","011"],["Libya","002","015",""],["Liechtenstein","150","155",""],["Lithuania","150","154",""],["Luxembourg","150","155",""],["Macao","142","030",""],["Madagascar","002","202","014"],["Malawi","002","202","014"],["Malaysia","142","035",""],["Maldives","142","034",""],["Mali","002","202","011"],["Malta","150","039",""],["Marshall Islands","009","057",""],["Martinique","019","419","029"],["Mauritania","002","202","011"],["Mauritius",
"002","202","014"],["Mayotte","002","202","014"],["Mexico","019","419","013"],["Micronesia (Federated States of)","009","057",""],["Moldova","150","151",""],["Monaco","150","155",""],["Mongolia","142","030",""],["Montenegro","150","039",""],["Montserrat","019","419","029"],["Morocco","002","015",""],["Mozambique","002","202","014"],["Myanmar","142","035",""],["Namibia","002","202","018"],["Nauru","009","057",""],["Nepal","142","034",""],["Netherlands","150","155",""],["New Caledonia","009","054",
""],["New Zealand","009","053",""],["Nicaragua","019","419","013"],["Niger","002","202","011"],["Nigeria","002","202","011"],["Niue","009","061",""],["Norfolk Island","009","053",""],["North Macedonia","150","039",""],["Northern Mariana Islands","009","057",""],["Norway","150","154",""],["Oman","142","145",""],["Pakistan","142","034",""],["Palau","009","057",""],["Palestine","142","145",""],["Panama","019","419","013"],["Papua New Guinea","009","054",""],["Paraguay","019","419","005"],["Peru","019",
"419","005"],["Philippines","142","035",""],["Pitcairn","009","061",""],["Poland","150","151",""],["Portugal","150","039",""],["Puerto Rico","019","419","029"],["Qatar","142","145",""],["Réunion","002","202","014"],["Romania","150","151",""],["Russia","150","151",""],["Rwanda","002","202","014"],["Saint Barthélemy","019","419","029"],["Saint Helena","002","202","011"],["Saint Kitts and Nevis","019","419","029"],["Saint Lucia","019","419","029"],["Saint Martin (French Part)","019","419","029"],["Saint Pierre and Miquelon",
"019","021",""],["Saint Vincent and the Grenadines","019","419","029"],["Samoa","009","061",""],["San Marino","150","039",""],["Sao Tome and Principe","002","202","017"],["Sark","150","154","830"],["Saudi Arabia","142","145",""],["Senegal","002","202","011"],["Serbia","150","039",""],["Seychelles","002","202","014"],["Sierra Leone","002","202","011"],["Singapore","142","035",""],["Sint Maarten (Dutch part)","019","419","029"],["Slovak Republic","150","151",""],["Slovenia","150","039",""],["Solomon Islands",
"009","054",""],["Somalia","002","202","014"],["South Africa","002","202","018"],["South Georgia and the South Sandwich Islands","019","419","005"],["South Korea","142","030",""],["South Sudan","002","202","014"],["Spain","150","039",""],["Sri Lanka","142","034",""],["Sudan","002","015",""],["Suriname","019","419","005"],["Svalbard and Jan Mayen Islands","150","154",""],["Sweden","150","154",""],["Switzerland","150","155",""],["Syria","142","145",""],["Taiwan","142","030",""],["Tajikistan","142",
"143",""],["Tanzania","002","202","014"],["Thailand","142","035",""],["Timor-Leste","142","035",""],["Togo","002","202","011"],["Tokelau","009","061",""],["Tonga","009","061",""],["Trinidad and Tobago","019","419","029"],["Tunisia","002","015",""],["Turkey","142","145",""],["Turkmenistan","142","143",""],["Turks and Caicos Islands","019","419","029"],["Tuvalu","009","061",""],["Uganda","002","202","014"],["Ukraine","150","151",""],["United Arab Emirates","142","145",""],["United Kingdom","150","154",
""],["United States Minor Outlying Islands","009","057",""],["United States Virgin Islands","019","419","029"],["United States","019","021",""],["Uruguay","019","419","005"],["Uzbekistan","142","143",""],["Vanuatu","009","054",""],["Venezuela","019","419","005"],["Vietnam","142","035",""],["Wallis and Futuna Islands","009","061",""],["Western Sahara","002","015",""],["Yemen","142","145",""],["Zambia","002","202","014"],["Zimbabwe","002","202","014"]],COUNTRIES_EU="Austria;Belgium;Bulgaria;Croatia;Cyprus;Czech Republic;Denmark;Estonia;Finland;France;Germany;Greece;Hungary;Ireland;Italy;Latvia;Lithuania;Luxembourg;Malta;Netherlands;Poland;Portugal;Romania;Slovak Republic;Slovenia;Spain;Sweden".split(";"),
COUNTRIES_SA="Austria;Belgium;Czech Republic;Denmark;Estonia;Finland;France;Germany;Greece;Hungary;Iceland;Italy;Latvia;Liechtenstein;Lithuania;Luxembourg;Malta;Netherlands;Norway;Poland;Portugal;Slovak Republic;Slovenia;Spain;Sweden;Switzerland".split(";"),ct;
(function(h){function t(a,b,c){c=void 0===c?tree_data:c;var d=document.getElementById(a);d.checked=b;d.indeterminate=!1;a=jst.gc(a,c);for(c=0;c<a.length;c++)t(a[c][0],b,a[c])}function w(){C=data.slice();C.sort(function(a,b){return T(a[DATA_INDEX.NAME],b[DATA_INDEX.NAME])})}function n(){D=data.slice();D.sort(function(a,b){a=a[DATA_INDEX.INCIDENCE][0];b=b[DATA_INDEX.INCIDENCE][0];null==a&&(a=-1);null==b&&(b=-1);return a-b})}function g(){E=data.slice();E.sort(function(a,b){a=a[DATA_INDEX.VACCINATION];
b=b[DATA_INDEX.VACCINATION];null==a&&(a=-1);null==b&&(b=-1);return a-b})}function q(a,b){if(a==K){if(b!=L)for(var c=document.getElementById("countriesTable").rows,d=1;d<c.length;d++)c[d].parentNode.insertBefore(c[c.length-1],c[d])}else{a==p.STRINGENCY?c=data:a==p.INCIDENCE?(0==D.length&&n(),c=D):a==p.VACCINATION?(0==E.length&&g(),c=E):a==p.NAME&&(0==C.length&&w(),c=C);d=document.getElementById("countriesTable").rows;for(var e=1;e<d.length;e++){var f=c[e-1][DATA_INDEX.STRINGENCY],k=c[e-1][DATA_INDEX.NAME],
l=c[e-1][DATA_INDEX.INCIDENCE],m=c[e-1][DATA_INDEX.VACCINATION],v=x(k);d[e].style.display=u.isVisible(v)?"":"none";v=d[e].getElementsByTagName("td");v[p.STRINGENCY].innerText=H(f);v[p.NAME].innerText=k;v[p.INCIDENCE].innerHTML=M(l);v[p.VACCINATION].innerHTML=I(m);d[e].id=k}}K=a;L=b}function r(a){var b=REGIONS.findIndex(function(c){return c[0]===a});return 0<=b?REGIONS[b][1]:null}function x(a){return COUNTRIES.findIndex(function(b){return b[COUNTRIES_INDEX.NAME]===a})}function U(a){return data.findIndex(function(b){return b[DATA_INDEX.NAME]===
a})}function y(a){return(a=a.getElementsByTagName("td")[p.NAME])?a.textContent||a.innerText:null}function z(){for(var a=document.getElementsByClassName("content"),b=a.length-1;0<=b;b--){var c=a[b].previousSibling;c.getElementsByClassName("collapsible")[0].classList.toggle("active");c.classList.toggle("activeRow");a[b].remove()}}function N(a){a=a.toString();return a.substring(0,4)+"."+a.substring(4,6)+"."+a.substring(6,8)}function A(a){return a.nextElementSibling.getElementsByTagName("td")[0]}function B(a){return a.replace(/(?:\r\n|\r|\n)/g,
"<br />")}function V(a,b,c,d,e){var f=a.replace(/'/g,"\\'");return'\n\t<table class="navigation" id="'+b+'_navigation">\n\t<tr><td class="strong">'+a+':</td></tr>\n\t<tr><td><table class="navigation_data">\n\t\t<tr><td>Stringency:</td><td>'+c+"</td></tr>\n\t\t<tr><td>Incidence:</td><td>"+d+"</td></tr>\n\t\t<tr><td>Vaccination:</td><td>"+e+'</td></tr>\n\t</table></td></tr>\n\t<tr><td><a href="#'+b+'_facial">Facial coverings</a></td></tr>\n\t<tr><td><a href="#'+b+'_containment">Containment and closure policies</a></td></tr>\n\t<tr><td><a href="#'+
b+'_certifications">Certifications</a></td></tr>\n\t<tr><td><a href="#'+b+'_quarantine">Quarantine info</a></td></tr>\n\t<tr><td><a href="#'+b+'_vaccine">Vaccine related</a></td></tr>\n\t<tr><td><a href="#'+b+'_details">Details</a></td></tr>\n\t<tr><td><a href="#'+b+'_sources">Sources</a></td></tr>\n\t<tr><td></td></tr>\n\t<tr><td></td></tr>\n\t<tr><td><a href="javascript:void(0);" class="strong extra-alert" onclick="ct.dm(\''+f+"', '"+b+'\')">Get updates</a></td></tr>\n\t<tr><td><a href="'+O+'" class="strong extra-insure" target="_blank" rel="noopener noreferrer">Get insurance</a></td></tr>\n\t<tr><td></td></tr>\n\t<tr><td><a href="javascript:void(0);" class="extra-collapse" onclick="ct.c(\''+
f+"')\">Collapse</a></td></tr>\n\t</table>\n\t"}function W(a){var b=U(a),c=data[b][DATA_INDEX.CODE],d=data[b][DATA_INDEX.DATA],e=H(data[b][DATA_INDEX.STRINGENCY]),f=X(data[b][DATA_INDEX.INCIDENCE]);b=I(data[b][DATA_INDEX.VACCINATION]);a='\n\t<table class="data" style="width:100%"><tr>\n\t\t<td>\n\t\t\t<h2 id="'+c+'_facial">Facial coverings</h2>\n\t\t\t<table class="data">\n\t\t\t\t<tr><td>'+H6[d[9]+1]+'</td></tr>\n\t\t\t</table>\n\t\t\t<h2 id="'+c+'_containment">Containment and closure policies</h2>\n\t\t\t<table class="data">\n\t\t\t\t<tr><td>Closings of schools and universities:</td><td class="strong">'+
C1[d[1]+1]+'</td></tr>\n\t\t\t\t<tr><td>Closings of workplaces:</td><td class="strong">'+C2[d[2]+1]+'</td></tr>\n\t\t\t\t<tr><td>Cancelling public events:</td><td class="strong">'+C3[d[3]+1]+'</td></tr>\n\t\t\t\t<tr><td>Limits on gatherings:</td><td class="strong">'+C4[d[4]+1]+'</td></tr>\n\t\t\t\t<tr><td>Closing of public transport:</td><td class="strong">'+C5[d[5]+1]+'</td></tr>\n\t\t\t\t<tr><td>Orders to confine to the home:</td><td class="strong">'+C6[d[6]+1]+'</td></tr>\n\t\t\t\t<tr><td>Restrictions on internal travel:</td><td class="strong">'+
C7[d[7]+1]+'</td></tr>\n\t\t\t\t<tr><td>Restrictions on international travel:</td><td class="strong">'+C8[d[8]+1]+'</td></tr>\n\t\t\t</table>\n\t\t\t<div id="'+c+'_travel" style="display:none">\n\t\t\t\t<h2 id="'+c+'_certifications">Certifications</h2>\n\t\t\t\t<table class="data">\n\t\t\t\t\t<tr><td></td></tr>\n\t\t\t\t</table>\n\t\t\t\t<h2 id="'+c+'_quarantine">Quarantine info</h2>\n\t\t\t\t<table class="data">\n\t\t\t\t\t<tr><td></td></tr>\n\t\t\t\t</table>\n\t\t\t\t<h2 id="'+c+'_vaccine">Vaccine related</h2>\n\t\t\t\t<table class="data">\n\t\t\t\t\t<tr><td></td></tr>\n\t\t\t\t</table>\n\t\t\t\t<h2 id="'+
c+'_details">Details</h2>\n\t\t\t\t<table class="data">\n\t\t\t\t\t<tr><td></td></tr>\n\t\t\t\t</table>\n\t\t\t\t<h2 id="'+c+'_sources">Sources</h2>\n\t\t\t\t<table class="data">\n\t\t\t\t\t<tr><td></td></tr>\n\t\t\t\t</table>\t\n\t\t\t</div>\n\t\t\t<p id="'+c+'_date">Last change: '+N(d[0])+'</p>\n\t\t</td>\n\t\t<td class="top" style="width:15%">'+V(a,c,e,f,b)+"</td>\n\t</tr></table>\n\t";Papa.parse("https://covid19travel.com/csv/"+c+".csv",{download:!0,complete:function(k){var l=document.getElementById(c+
"_travel");if(l){l.style.display="initial";var m;if(m=document.getElementById(c+"_certifications"))A(m).innerHTML=B(k.data[0][1]);if(m=document.getElementById(c+"_quarantine"))A(m).innerHTML=B(k.data[0][2]);if(m=document.getElementById(c+"_vaccine"))A(m).innerHTML=B(k.data[0][3]);if(m=document.getElementById(c+"_details"))A(m).innerHTML=B(k.data[0][4]);if(m=document.getElementById(c+"_sources"))A(m).innerHTML=B(k.data[0][5]);l=l.getElementsByTagName("a");for(m=0;m<l.length;m++)l[m].target="_blank",
l[m].rel="noopener noreferrer"}k=k.data[0][0];d[0]>=k||!(l=document.getElementById(c+"_date"))||(l.innerHTML="Last change: "+N(k))}});return a}function Y(a){a.addEventListener("click",function(){this.classList.toggle("activeRow");if(this.children[p.NAME].classList.toggle("active")){var b=document.createElement("tr");b.className="content";var c=y(this);b.innerHTML='<td colspan="'+Object.keys(p).length+'">'+W(c)+"</td>";document.getElementById("countriesTable").insertBefore(b,this.nextSibling)}else this.nextSibling.remove()})}
function Z(){var a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);window.location.hash&&a&&setTimeout(function(){var b=window.location.hash;window.location.hash="";window.location.hash=b},300);h.ohc()}function aa(){for(var a=document.querySelectorAll("input[type=checkbox]"),b=0;b<a.length;b++)document.getElementsByTagName("input")[b].checked=!0;document.getElementById("countryNameInput").value=""}function H(a){return isNaN(a)?"":a.toFixed(2)}function P(a){return 1>a?"incidenceB1":
10>a?"incidenceB10":20>a?"incidenceB20":30>a?"incidenceB30":40>a?"incidenceB40":"incidence40"}function Q(a){return"+"==a?"&uArr;":"-"==a?"&dArr;":"&bull;"}function M(a){var b="";if(a.length){b=P(a[0]);var c=Q(a[1]);b="<span class='"+b+"'><strong class='monospace'>"+c+"</strong>"+a[0].toFixed(2)+"</span>"}return b}function X(a){var b="";if(a.length){b=P(a[0]);var c=Q(a[1]);b="<span class='"+b+"'>"+a[0].toFixed(2)+"&nbsp;<strong>"+c+"</strong></span>"}return b}function I(a){return"undefined"===typeof a||
null===a?"":a.toFixed(2)+"%"}function ba(){var a=new XMLHttpRequest;a.open("POST","https://covid19travel.appspot.com/get_insurance",!0);a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var b=a.responseText;1>b.length||(O=b)}};a.send()}function J(a){a="Covid19 Corona Coronavirus Travel Information for "+a+". Updated daily. "+a+" government response stringency. Incidence in "+a+". Vaccination share in "+
a+". Containment and closure policies in "+a+". Quarantine info for "+a+". Latest news from "+a+".";document.querySelector('meta[name="description"]').setAttribute("content",a)}var F=function(a){this.direction=a},p={STRINGENCY:0,INCIDENCE:1,VACCINATION:2,NAME:3},G=[new F(0),new F(2),new F(2),new F(2)],K=p.STRINGENCY,L=0,u={name:Array(COUNTRIES.length).fill(!0),region:Array(COUNTRIES.length).fill(!0),eu:Array(COUNTRIES.length).fill(!0),sa:Array(COUNTRIES.length).fill(!0),isVisible:function(a){return this.name[a]&&
this.region[a]&&this.eu[a]&&this.sa[a]}},T=(new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"})).compare,C=[],D=[],E=[],R,S,O="https://bit.ly/inomads";h.s=function(){var a=document.getElementById("emailInput"),b=document.getElementById("buttonSubmit"),c=document.getElementById("validEmail"),d=document.getElementById("subscribed");/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(a.value)?(a.disabled=
!0,b.disabled=!0,c.style.display="none",d.style.display="inline",a=a.value,b=new XMLHttpRequest,b.open("POST","https://covid19travel.appspot.com/subscribe",!0),b.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),b.send("email="+encodeURIComponent(a)+"&country="+encodeURIComponent(R)+"&code="+encodeURIComponent(S))):(d.style.display="none",c.style.display="inline")};h.dm=function(a,b){R=a;S=b;var c=document.getElementById("subscribeModal");b=document.getElementsByClassName("close")[0];
if(c&&b){c.style.display="block";b.onclick=function(){c.style.display="none"};window.onclick=function(f){f.target==c&&(c.style.display="none")};if(b=document.getElementById("subscribeText"))b.innerText="Get email updates when restrictions in "+a+" change.";a=document.getElementById("emailInput");b=document.getElementById("buttonSubmit");var d=document.getElementById("validEmail"),e=document.getElementById("subscribed");a.disabled=!1;b.disabled=!1;d.style.display="none";e.style.display="none";a.addEventListener("keyup",
function(f){"Enter"===f.key&&h.s()})}};h.c=function(a){if(a=document.getElementById(a)){var b=a.getBoundingClientRect();0<=b.top&&0<=b.left&&b.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)||a.scrollIntoView();a.click()}};h.ohc=function(){if(window.location.hash){var a=decodeURIComponent(window.location.hash.substr(1)),b=document.getElementById(a);if(b)b.click(),J(a);else if(b=r(a)){if(b=document.getElementById(b)){var c=
document.getElementById("001");c.checked=!0;c.click();b.click()}J(a)}else if(a=a.split(":"),2==a.length&&(b=r(a[0]))){a:{c=a[1];for(var d=document.getElementsByTagName("label"),e=0;e<d.length;e++)if(d[e].innerText===c){var f=d[e].getAttribute("for");if(f&&jst.ga(f).at(-2)==b){b=f;break a}}b=null}if(b){if(b=document.getElementById(b))c=document.getElementById("001"),c.checked=!0,c.click(),b.click();J(a[1]+" "+a[0])}}}};h.ol=function(){aa();document.getElementById("update").innerHTML+=dataUpdate;var a=
document.getElementById("countriesTable");data.forEach(function(b){var c=b[DATA_INDEX.NAME],d=b[DATA_INDEX.STRINGENCY],e=b[DATA_INDEX.INCIDENCE];b=b[DATA_INDEX.VACCINATION];var f=document.createElement("tr");f.id=c;f.className="collapsibleRow";f.innerHTML="<td>"+H(d)+"</td><td>"+M(e)+"</td><td>"+I(b)+"</td><td class='collapsible'>"+c+"</td>";a.appendChild(f);Y(f)});Z();ba()};h.st=function(a){z();var b=document.getElementById("countriesTable").rows[0].getElementsByTagName("th");0==G[a].direction?(G[a].direction=
1,b[a].style.backgroundImage='url("./img/desc.gif")',q(a,1)):(G[a].direction=0,b[a].style.backgroundImage='url("./img/asc.gif")',q(a,0));for(var c=0;c<Object.keys(p).length;c++)c!=a&&(G[c].direction=2,b[c].style.backgroundImage='url("./img/bg.gif")')};h.fr=function(a){z();a=a.value.toUpperCase();for(var b=document.getElementById("countriesTable").getElementsByTagName("tr"),c=1;c<b.length;c++){var d=y(b[c]),e=x(d);u.name[e]=-1<d.toUpperCase().indexOf(a);b[c].style.display=u.isVisible(e)?"":"none"}};
h.hca=function(a){z();t(a.id,a.checked);for(var b=document.getElementById("countriesTable").getElementsByTagName("tr"),c=1;c<b.length;c++){var d=y(b[c]);d=x(d);u.region[d]=a.checked;b[c].style.display=u.isVisible(d)?"":"none"}};h.hc=function(a,b){z();var c=jst.ga(a.id);if(0!=c.length)for(var d=0;d<c.length;d++){var e=document.getElementById(c[d]),f=e;b:{var k=jst.gc(c[d]);for(var l=0;l<k.length;l++)if(!document.getElementById(k[l][0]).checked){k=!1;break b}k=!0}f.checked=k;f=e;if(e.checked)e=!1;else b:{e=
jst.gc(c[d]);for(k=0;k<e.length;k++)if(l=document.getElementById(e[k][0]),l.checked||l.indeterminate){e=!0;break b}e=!1}f.indeterminate=e}t(a.id,a.checked);c=document.getElementById("countriesTable").getElementsByTagName("tr");for(d=1;d<c.length;d++)e=y(c[d]),e=x(e),COUNTRIES[e][b]==a.id&&(u.region[e]=a.checked,c[d].style.display=u.isVisible(e)?"":"none")};h.hce=function(a,b){z();for(var c=document.getElementById("countriesTable").getElementsByTagName("tr"),d=1;d<c.length;d++){var e=y(c[d]);if(-1<
b.findIndex(function(k){return k===e})){var f=x(e);("ceu"==a.id?u.eu:u.sa)[f]=a.checked;c[d].style.display=u.isVisible(f)?"":"none"}}}})(ct||(ct={}));var sh;
(function(h){function t(){return"width=640,height=320,left="+(screen.width-640)/2+",top="+(screen.height-320)/2}h.sof=function(){window.open("https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid19travel.com","facebook-share-dialog",t());return!1};h.sot=function(){window.open("https://twitter.com/intent/tweet?text="+document.title+"&url=https%3A%2F%2Fcovid19travel.com&hashtags=coronavirus,covid19,travel,information","twitter-share-dialog",t());return!1};h.sbe=function(){window.location.href=
"mailto:?&subject="+document.title+"&body="+encodeURIComponent("I saw this on internet and thought you'd like to see it: http://covid19travel.com")}})(sh||(sh={}));
var C1=["No data","No measures","Recommend closing or all schools open with alterations","Require closing (only some levels or categories)","Require closing all levels"],C2=["No data","No measures","Recommend closing (or recommend work from home)","Require closing (or work from home) for some sectors or categories of workers","Require closing (or work from home) for all-but-essential workplaces (eg grocery stores, doctors)"],C3=["No data","No measures","Recommend cancelling","Require cancelling"],
C4="No data;No measures;Restrictions on very large gatherings (the limit is above 1000 people);Restrictions on gatherings between 101-1000 people;Restrictions on gatherings between 11-100 people ;Restrictions on gatherings of 10 people or less".split(";"),C5=["No data","No measures","Recommend closing (or significantly reduce transport available)","Require closing (or prohibit most citizens from using it)"],C6=["No data","No measures","Recommend not leaving house","Require not leaving house with exceptions for daily exercise, grocery shopping, and 'essential' trips",
"Require not leaving house with minimal exceptions (eg allowed to leave once a week, or only one person can leave at a time, etc)"],C7=["No data","No measures","Recommend not to travel between regions/cities","Internal movement restrictions in place"],C8="No data;No measures;Screening arrivals;Quarantine arrivals from some or all regions;Ban arrivals from some regions;Ban on all regions or total border closure".split(";"),H6="No data;No policy;Recommended;Required in some specified shared/public spaces outside the home with other people present, or some situations when social distancing not possible;Required in all shared/public spaces outside the home with other people present or all situations when social distancing not possible;Required outside the home at all times regardless of location or presence of other people".split(";"),
tree_data=["001",[["002",[["015"],["202",[["011"],["014"],["017"],["018"]]]]],["019",[["021"],["419",[["005"],["013"],["029"]]]]],["142",[["030"],["034"],["035"],["143"],["145"]]],["150",[["039"],["151"],["154"],["155"]]],["009",[["053"],["054"],["057"],["061"]]]]],jst;
(function(h){function t(n,g){var q=[];Array.isArray(g[0])||g[0]!=n||(q=g);for(var r=0;r<g.length&&0==q.length;r++)Array.isArray(g[r])&&(q=t(n,g[r]));return q}function w(n,g,q){if(!Array.isArray(g[0])&&g[0]==n)return!0;if(!Array.isArray(g[0])&&Array.isArray(g[1])){q.push(g[0]);if(w(n,g[1],q))return!0;q.pop();return!1}for(var r=0;r<g.length;r++)if(Array.isArray(g[r])&&w(n,g[r],q))return!0;return!1}h.ga=function(n){var g=[];w(n,tree_data,g);return g.reverse()};h.gc=function(n,g){g=void 0===g?tree_data:
g;n=t(n,g);return 2>n.length?[]:n[1]}})(jst||(jst={}));