var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(h){return h.raw=h};$jscomp.createTemplateTagFirstArgWithRaw=function(h,n){h.raw=n;return h};
var COUNTRIES_INDEX={NAME:0,REGION:1,SUBREG:2,INTERM:3},countries=[["Åland Islands","150","154",""],["Afghanistan","142","034",""],["Albania","150","039",""],["Algeria","002","015",""],["American Samoa","009","061",""],["Andorra","150","039",""],["Angola","002","202","017"],["Anguilla","019","419","029"],["Antarctica","","",""],["Antigua and Barbuda","019","419","029"],["Argentina","019","419","005"],["Armenia","142","145",""],["Aruba","019","419","029"],["Australia","009","053",""],["Austria","150",
"155",""],["Azerbaijan","142","145",""],["Bahamas","019","419","029"],["Bahrain","142","145",""],["Bangladesh","142","034",""],["Barbados","019","419","029"],["Belarus","150","151",""],["Belgium","150","155",""],["Belize","019","419","013"],["Benin","002","202","011"],["Bermuda","019","021",""],["Bhutan","142","034",""],["Bolivia","019","419","005"],["Bonaire, Sint Eustatius and Saba","019","419","029"],["Bosnia and Herzegovina","150","039",""],["Botswana","002","202","018"],["Bouvet Island","019",
"419","005"],["Brazil","019","419","005"],["British Indian Ocean Territory","002","202","014"],["British Virgin Islands","019","419","029"],["Brunei","142","035",""],["Bulgaria","150","151",""],["Burkina Faso","002","202","011"],["Burundi","002","202","014"],["Cambodia","142","035",""],["Cameroon","002","202","017"],["Canada","019","021",""],["Cape Verde","002","202","011"],["Cayman Islands","019","419","029"],["Central African Republic","002","202","017"],["Chad","002","202","017"],["Chile","019",
"419","005"],["China","142","030",""],["Christmas Island","009","053",""],["Cocos (Keeling) Islands","009","053",""],["Colombia","019","419","005"],["Comoros","002","202","014"],["Congo","002","202","017"],["Cook Islands","009","061",""],["Costa Rica","019","419","013"],["Cote d'Ivoire","002","202","011"],["Croatia","150","039",""],["Cuba","019","419","029"],["Curaçao","019","419","029"],["Cyprus","150","039",""],["Czech Republic","150","151",""],["Democratic People's Republic of Korea","142","030",
""],["Democratic Republic of Congo","002","202","017"],["Denmark","150","154",""],["Djibouti","002","202","014"],["Dominica","019","419","029"],["Dominican Republic","019","419","029"],["Ecuador","019","419","005"],["Egypt","002","015",""],["El Salvador","019","419","013"],["Equatorial Guinea","002","202","017"],["Eritrea","002","202","014"],["Estonia","150","154",""],["Eswatini","002","202","018"],["Ethiopia","002","202","014"],["Faeroe Islands","150","154",""],["Falkland Islands (Malvinas)","019",
"419","005"],["Fiji","009","054",""],["Finland","150","154",""],["France","150","155",""],["French Guiana","019","419","005"],["French Polynesia","009","061",""],["French Southern Territories","002","202","014"],["Gabon","002","202","017"],["Gambia","002","202","011"],["Georgia","142","145",""],["Germany","150","155",""],["Ghana","002","202","011"],["Gibraltar","150","039",""],["Greece","150","039",""],["Greenland","019","021",""],["Grenada","019","419","029"],["Guadeloupe","019","419","029"],["Guam",
"009","057",""],["Guatemala","019","419","013"],["Guernsey","150","154","830"],["Guinea","002","202","011"],["Guinea-Bissau","002","202","011"],["Guyana","019","419","005"],["Haiti","019","419","029"],["Heard Island and McDonald Islands","009","053",""],["Holy See","150","039",""],["Honduras","019","419","013"],["Hong Kong","142","030",""],["Hungary","150","151",""],["Iceland","150","154",""],["India","142","034",""],["Indonesia","142","035",""],["Iran","142","034",""],["Iraq","142","145",""],["Ireland",
"150","154",""],["Isle of Man","150","154",""],["Israel","142","145",""],["Italy","150","039",""],["Jamaica","019","419","029"],["Japan","142","030",""],["Jersey","150","154","830"],["Jordan","142","145",""],["Kazakhstan","142","143",""],["Kenya","002","202","014"],["Kiribati","009","057",""],["Kosovo","150","039",""],["Kuwait","142","145",""],["Kyrgyz Republic","142","143",""],["Laos","142","035",""],["Latvia","150","154",""],["Lebanon","142","145",""],["Lesotho","002","202","018"],["Liberia","002",
"202","011"],["Libya","002","015",""],["Liechtenstein","150","155",""],["Lithuania","150","154",""],["Luxembourg","150","155",""],["Macao","142","030",""],["Madagascar","002","202","014"],["Malawi","002","202","014"],["Malaysia","142","035",""],["Maldives","142","034",""],["Mali","002","202","011"],["Malta","150","039",""],["Marshall Islands","009","057",""],["Martinique","019","419","029"],["Mauritania","002","202","011"],["Mauritius","002","202","014"],["Mayotte","002","202","014"],["Mexico","019",
"419","013"],["Micronesia (Federated States of)","009","057",""],["Moldova","150","151",""],["Monaco","150","155",""],["Mongolia","142","030",""],["Montenegro","150","039",""],["Montserrat","019","419","029"],["Morocco","002","015",""],["Mozambique","002","202","014"],["Myanmar","142","035",""],["Namibia","002","202","018"],["Nauru","009","057",""],["Nepal","142","034",""],["Netherlands","150","155",""],["New Caledonia","009","054",""],["New Zealand","009","053",""],["Nicaragua","019","419","013"],
["Niger","002","202","011"],["Nigeria","002","202","011"],["Niue","009","061",""],["Norfolk Island","009","053",""],["North Macedonia","150","039",""],["Northern Mariana Islands","009","057",""],["Norway","150","154",""],["Oman","142","145",""],["Pakistan","142","034",""],["Palau","009","057",""],["Palestine","142","145",""],["Panama","019","419","013"],["Papua New Guinea","009","054",""],["Paraguay","019","419","005"],["Peru","019","419","005"],["Philippines","142","035",""],["Pitcairn","009","061",
""],["Poland","150","151",""],["Portugal","150","039",""],["Puerto Rico","019","419","029"],["Qatar","142","145",""],["Réunion","002","202","014"],["Romania","150","151",""],["Russia","150","151",""],["Rwanda","002","202","014"],["Saint Barthélemy","019","419","029"],["Saint Helena","002","202","011"],["Saint Kitts and Nevis","019","419","029"],["Saint Lucia","019","419","029"],["Saint Martin (French Part)","019","419","029"],["Saint Pierre and Miquelon","019","021",""],["Saint Vincent and the Grenadines",
"019","419","029"],["Samoa","009","061",""],["San Marino","150","039",""],["Sao Tome and Principe","002","202","017"],["Sark","150","154","830"],["Saudi Arabia","142","145",""],["Senegal","002","202","011"],["Serbia","150","039",""],["Seychelles","002","202","014"],["Sierra Leone","002","202","011"],["Singapore","142","035",""],["Sint Maarten (Dutch part)","019","419","029"],["Slovak Republic","150","151",""],["Slovenia","150","039",""],["Solomon Islands","009","054",""],["Somalia","002","202","014"],
["South Africa","002","202","018"],["South Georgia and the South Sandwich Islands","019","419","005"],["South Korea","142","030",""],["South Sudan","002","202","014"],["Spain","150","039",""],["Sri Lanka","142","034",""],["Sudan","002","015",""],["Suriname","019","419","005"],["Svalbard and Jan Mayen Islands","150","154",""],["Sweden","150","154",""],["Switzerland","150","155",""],["Syria","142","145",""],["Taiwan","142","030",""],["Tajikistan","142","143",""],["Tanzania","002","202","014"],["Thailand",
"142","035",""],["Timor-Leste","142","035",""],["Togo","002","202","011"],["Tokelau","009","061",""],["Tonga","009","061",""],["Trinidad and Tobago","019","419","029"],["Tunisia","002","015",""],["Turkey","142","145",""],["Turkmenistan","142","143",""],["Turks and Caicos Islands","019","419","029"],["Tuvalu","009","061",""],["Uganda","002","202","014"],["Ukraine","150","151",""],["United Arab Emirates","142","145",""],["United Kingdom","150","154",""],["United States Minor Outlying Islands","009",
"057",""],["United States Virgin Islands","019","419","029"],["United States","019","021",""],["Uruguay","019","419","005"],["Uzbekistan","142","143",""],["Vanuatu","009","054",""],["Venezuela","019","419","005"],["Vietnam","142","035",""],["Wallis and Futuna Islands","009","061",""],["Western Sahara","002","015",""],["Yemen","142","145",""],["Zambia","002","202","014"],["Zimbabwe","002","202","014"]],countriesEU="Austria;Belgium;Bulgaria;Croatia;Cyprus;Czech Republic;Denmark;Estonia;Finland;France;Germany;Greece;Hungary;Ireland;Italy;Latvia;Lithuania;Luxembourg;Malta;Netherlands;Poland;Portugal;Romania;Slovak Republic;Slovenia;Spain;Sweden".split(";"),
countriesSA="Austria;Belgium;Czech Republic;Denmark;Estonia;Finland;France;Germany;Greece;Hungary;Iceland;Italy;Latvia;Liechtenstein;Lithuania;Luxembourg;Malta;Netherlands;Norway;Poland;Portugal;Slovak Republic;Slovenia;Spain;Sweden;Switzerland".split(";"),ct;
(function(h){function n(a,c,b){b=void 0===b?tree_data:b;var d=document.getElementById(a);d.checked=c;d.indeterminate=!1;a=jst.gc(a,b);for(b=0;b<a.length;b++)n(a[b][0],c,a[b])}function u(){w=data.slice();w.sort(function(a,c){return B(a[DATA_INDEX.NAME],c[DATA_INDEX.NAME])})}function k(a,c){1==a&&0==w.length&&u();a=0==a?data:w;for(var b=document.getElementById("countriesTable").rows,d=1;d<b.length;d++){var e=c==r.ASC?d-1:data.length-d,g=a[e][DATA_INDEX.STRINGENCY];e=a[e][DATA_INDEX.NAME];var l=f(e);
b[d].style.display=q.isVisible(l)?"":"none";l=b[d].getElementsByTagName("td");l[0].innerText=g.toFixed(2);l[1].innerText=e}}function f(a){return countries.findIndex(function(c){return c[COUNTRIES_INDEX.NAME]===a})}function p(a){return data.findIndex(function(c){return c[DATA_INDEX.NAME]===a})}function m(a){return(a=a.getElementsByTagName("td")[1])?a.textContent||a.innerText:null}function v(){for(var a=document.getElementsByClassName("content"),c=a.length-1;0<=c;c--){var b=a[c].previousSibling;b.getElementsByClassName("collapsible")[0].classList.toggle("active");
b.classList.toggle("activeRow");a[c].remove()}}function z(a){a=a.toString();return a.substring(0,4)+"."+a.substring(4,6)+"."+a.substring(6,8)}function y(a){return a.replace(/(?:\r\n|\r|\n)/g,"<br />")}function C(a){a=p(a);var c=data[a][DATA_INDEX.CODE],b=data[a][DATA_INDEX.DATA];a='\n\t<strong>Facial coverings:</strong>\n\t<br /><br />\n\t<table class="data">\n\t<tr><td>'+H6[b[9]+1]+'</td></tr>\n\t</table>\n\t<br />\n\t<strong>Containment and closure policies:</strong>\n\t<br /><br />\n\t<table class="data">\n\t<tr><td>Closings of schools and universities:</td><td class="strong">'+
C1[b[1]+1]+'</td></tr>\n\t<tr><td>Closings of workplaces:</td><td class="strong">'+C2[b[2]+1]+'</td></tr>\n\t<tr><td>Cancelling public events:</td><td class="strong">'+C3[b[3]+1]+'</td></tr>\n\t<tr><td>Limits on gatherings:</td><td class="strong">'+C4[b[4]+1]+'</td></tr>\n\t<tr><td>Closing of public transport:</td><td class="strong">'+C5[b[5]+1]+'</td></tr>\n\t<tr><td>Orders to confine to the home:</td><td class="strong">'+C6[b[6]+1]+'</td></tr>\n\t<tr><td>Restrictions on internal travel:</td><td class="strong">'+
C7[b[7]+1]+'</td></tr>\n\t<tr><td>Restrictions on international travel:</td><td class="strong">'+C8[b[8]+1]+'</td></tr>\n\t</table>\n\t<br />\n\t<div id="'+c+'_travel" style="display:none">\n\t<strong>Certifications:</strong>\n\t<br /><br />\n\t<table class="data">\n\t<tr><td id="'+c+'_certifications"></td></tr>\n\t</table>\t\n\t<br />\n\t<strong>Quarantine info:</strong>\n\t<br /><br />\n\t<table class="data">\n\t<tr><td id="'+c+'_quarantine"></td></tr>\n\t</table>\t\n\t<br />\n\t<strong>Sources:</strong>\n\t<br /><br />\n\t<table class="data">\n\t<tr><td id="'+
c+'_sources"></td></tr>\n\t</table>\t\n\t<br />\n\t</div>\n\t<p id="'+c+'_date">Updated: '+z(b[0])+"</p>\n\t";Papa.parse("https://covid19travel.com/csv/"+c+".csv",{download:!0,complete:function(d){var e=document.getElementById(c+"_travel");if(e){e.style.display="initial";var g;if(g=document.getElementById(c+"_certifications"))g.innerHTML=y(d.data[0][1]);if(g=document.getElementById(c+"_quarantine"))g.innerHTML=y(d.data[0][2]);if(g=document.getElementById(c+"_sources"))g.innerHTML=y(d.data[0][3]);
e=e.getElementsByTagName("a");for(g=0;g<e.length;g++)e[g].target="_blank",e[g].rel="noopener noreferrer"}d=d.data[0][0];b[0]>=d||!(e=document.getElementById(c+"_date"))||(e.innerHTML="Updated: "+z(d))}});return a}function D(a){a.addEventListener("click",function(){this.classList.toggle("activeRow");if(this.children[1].classList.toggle("active")){var c=document.createElement("tr");c.className="content";var b=m(this);c.innerHTML="<td></td><td>"+C(b)+"</td>";document.getElementById("countriesTable").insertBefore(c,
this.nextSibling)}else this.nextSibling.remove()})}function E(){var a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);window.location.hash&&a&&setTimeout(function(){var c=window.location.hash;window.location.hash="";window.location.hash=c},300);h.ohc()}var A=function(a){this.direction=a},r={ASC:0,DESC:1,NONE:2},x=[new A(r.ASC),new A(r.NONE)],q={name:Array(countries.length).fill(!0),region:Array(countries.length).fill(!0),eu:Array(countries.length).fill(!0),sa:Array(countries.length).fill(!0),
isVisible:function(a){return this.name[a]&&this.region[a]&&this.eu[a]&&this.sa[a]}},B=(new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"})).compare,w=[];h.ohc=function(){if(window.location.hash){var a=decodeURIComponent(window.location.hash.substr(1));(a=document.getElementById(a))&&a.click()}};h.lc=function(){document.getElementById("update").innerHTML+=dataUpdate;var a=document.getElementById("countriesTable");data.forEach(function(c){var b=c[DATA_INDEX.NAME];c=c[DATA_INDEX.STRINGENCY];var d=
document.createElement("tr");d.id=b;d.className="collapsibleRow";d.innerHTML="<td>"+c.toFixed(2)+"</td><td class='collapsible'>"+b+"</td>";a.appendChild(d);D(d)});E()};h.st=function(a){v();var c=document.getElementById("countriesTable").rows[0].getElementsByTagName("th");x[a].direction==r.ASC?(x[a].direction=r.DESC,c[a].style.backgroundImage='url("./img/desc.gif")',k(a,r.DESC)):(x[a].direction=r.ASC,c[a].style.backgroundImage='url("./img/asc.gif")',k(a,r.ASC));a=0==a?1:0;x[a].direction=r.NONE;c[a].style.backgroundImage=
'url("./img/bg.gif")'};h.fr=function(a){v();a=a.value.toUpperCase();for(var c=document.getElementById("countriesTable").getElementsByTagName("tr"),b=1;b<c.length;b++){var d=m(c[b]),e=f(d);q.name[e]=-1<d.toUpperCase().indexOf(a);c[b].style.display=q.isVisible(e)?"":"none"}};h.hca=function(a){v();n(a.id,a.checked);for(var c=document.getElementById("countriesTable").getElementsByTagName("tr"),b=1;b<c.length;b++){var d=m(c[b]);d=f(d);q.region[d]=a.checked;c[b].style.display=q.isVisible(d)?"":"none"}};
h.hc=function(a,c){v();var b=jst.ga(a.id);if(0!=b.length)for(var d=0;d<b.length;d++){var e=document.getElementById(b[d]),g=e;b:{var l=jst.gc(b[d]);for(var t=0;t<l.length;t++)if(!document.getElementById(l[t][0]).checked){l=!1;break b}l=!0}g.checked=l;g=e;if(e.checked)e=!1;else b:{e=jst.gc(b[d]);for(l=0;l<e.length;l++)if(t=document.getElementById(e[l][0]),t.checked||t.indeterminate){e=!0;break b}e=!1}g.indeterminate=e}n(a.id,a.checked);b=document.getElementById("countriesTable").getElementsByTagName("tr");
for(d=1;d<b.length;d++)e=m(b[d]),e=f(e),countries[e][c]==a.id&&(q.region[e]=a.checked,b[d].style.display=q.isVisible(e)?"":"none")};h.hce=function(a,c){v();for(var b=document.getElementById("countriesTable").getElementsByTagName("tr"),d=1;d<b.length;d++){var e=m(b[d]);if(-1<c.findIndex(function(l){return l===e})){var g=f(e);("ceu"==a.id?q.eu:q.sa)[g]=a.checked;b[d].style.display=q.isVisible(g)?"":"none"}}}})(ct||(ct={}));var sh;
(function(h){function n(){return"width=640,height=320,left="+(screen.width-640)/2+",top="+(screen.height-320)/2}h.sof=function(){window.open("https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovid19travel.com","facebook-share-dialog",n());return!1};h.sot=function(){window.open("https://twitter.com/intent/tweet?text="+document.title+"&url=https%3A%2F%2Fcovid19travel.com&hashtags=coronavirus,covid19,travel,information","twitter-share-dialog",n());return!1};h.sbe=function(){window.location.href=
"mailto:?&subject="+document.title+"&body="+encodeURIComponent("I saw this on internet and thought you'd like to see it: http://covid19travel.com")}})(sh||(sh={}));
var C1=["No data","No measures","Recommend closing or all schools open with alterations","Require closing (only some levels or categories)","Require closing all levels"],C2=["No data","No measures","Recommend closing (or recommend work from home)","Require closing (or work from home) for some sectors or categories of workers","Require closing (or work from home) for all-but-essential workplaces (eg grocery stores, doctors)"],C3=["No data","No measures","Recommend cancelling","Require cancelling"],
C4="No data;No measures;Restrictions on very large gatherings (the limit is above 1000 people);Restrictions on gatherings between 101-1000 people;Restrictions on gatherings between 11-100 people ;Restrictions on gatherings of 10 people or less".split(";"),C5=["No data","No measures","Recommend closing (or significantly reduce transport available)","Require closing (or prohibit most citizens from using it)"],C6=["No data","No measures","Recommend not leaving house","Require not leaving house with exceptions for daily exercise, grocery shopping, and 'essential' trips",
"Require not leaving house with minimal exceptions (eg allowed to leave once a week, or only one person can leave at a time, etc)"],C7=["No data","No measures","Recommend not to travel between regions/cities","Internal movement restrictions in place"],C8="No data;No measures;Screening arrivals;Quarantine arrivals from some or all regions;Ban arrivals from some regions;Ban on all regions or total border closure".split(";"),H6="No data;No policy;Recommended;Required in some specified shared/public spaces outside the home with other people present, or some situations when social distancing not possible;Required in all shared/public spaces outside the home with other people present or all situations when social distancing not possible;Required outside the home at all times regardless of location or presence of other people".split(";"),
tree_data=["001",[["002",[["015"],["202",[["011"],["014"],["017"],["018"]]]]],["019",[["021"],["419",[["005"],["013"],["029"]]]]],["142",[["030"],["034"],["035"],["143"],["145"]]],["150",[["039"],["151"],["154"],["155"]]],["009",[["053"],["054"],["057"],["061"]]]]],jst;
(function(h){function n(k,f){var p=[];Array.isArray(f[0])||f[0]!=k||(p=f);for(var m=0;m<f.length&&0==p.length;m++)Array.isArray(f[m])&&(p=n(k,f[m]));return p}function u(k,f,p){if(!Array.isArray(f[0])&&f[0]==k)return!0;if(!Array.isArray(f[0])&&Array.isArray(f[1])){p.push(f[0]);if(u(k,f[1],p))return!0;p.pop();return!1}for(var m=0;m<f.length;m++)if(Array.isArray(f[m])&&u(k,f[m],p))return!0;return!1}jst.ga=function(k){var f=[];u(k,tree_data,f);return f.reverse()};jst.gc=function(k,f){f=void 0===f?tree_data:
f;k=n(k,f);return 2>k.length?[]:k[1]}})(jst||(jst={}));