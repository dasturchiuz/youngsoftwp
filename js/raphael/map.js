var rsr = Raphael('map', '680', '416');

var regions = [];

// White object to show the borders, dodgy Illustrator work by original artist!

// Xovos tumani
var xovos = rsr.path("M229.3,278.9 239.8,239.3 246.6,218.7 241,201.8 237.2,192.3 238.3,178.8 240.3,170 255.3,156.2 270.1,151.7 282.1,161.6 294.4,164.5 318.6,179.2 316,185.7 360.2,205.2 374.9,221.5 381,213 380,205.1 387.8,205.1 392.3,206.9 393,211.8 384.4,212.6 384,217.2 385.5,219.9 394.6,221.1 399.8,219.5 409.8,242.7 415,233.3 423.5,232 421.7,224.3 434.4,230.8 450.8,231.1 466.2,227.4 507.5,250.2 542,278.2 562.6,286.6 556.9,288.5 551.9,291.7 550.5,296.7 550.7,301.8 553.4,307.5 555.5,312.1 541.7,312.2 522.8,312.3 501.7,315.8 488.8,318.2 477.6,321.4 465.3,327 459.2,331.8 450.5,340.1 443.8,345.5 438.1,345.5 420.2,338.6 410.1,335.7 404.2,333.8 377.2,345.7 325.7,367.9 301.7,377.3 288.1,353.1 286.3,337 279.9,315.9 290,315.4 296,311 298.8,305.3 297.2,295.1 296.2,289.1 293.1,285.1 290.5,284.6 260.7,286.3 243.9,288.3 ");
xovos.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '0.8'});
$(xovos.node).attr("title", "Xavas tumani");
$(xovos.node).attr("class", "xovos");
$(".xovos").tooltip();
xovos.mouseover(function(e) {
    $(".xovos").tooltip();
    xovos.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(0);
    regions.push(xovos);
});
xovos.mouseout(function(e) {
    xovos.attr({"fill": "", 'fill-opacity': '1'});
    xovos.node.node.href = 'http://google.com';
    regions.push(xovos);
});




// Shirin shahri
var shirin = rsr.path("M643.7,319.7 636,322.4 633.5,326.2 631.6,328.5 625.8,328.5 610.9,319.7 592.2,319.7 579.9,321.6 570.5,319.8 561.1,315.7 555.5,312.1 550.6,298.8 551.9,291.7 556.9,288.5 567.4,288.5 576.1,290.8 581.5,295.4 587,299.1 592.3,302.9 596.5,307.7 603.5,307.7 606.7,303.3 606.8,296.2 603.6,288.3 621.4,301.6 634.2,310.7" );
shirin.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '0.8'});
$(shirin.node).attr("title", "Shirin shahri");
$(shirin.node).attr("class", "shirin");
$(".shirin").tooltip();
shirin.mouseover(function(e) {
    $(".shirin").tooltip();
    shirin.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(1);
    regions.push(shirin);
});
shirin.mouseout(function(e) {
    shirin.attr({"fill": "", 'fill-opacity': '1'});
    shirin.node.node.href = 'http://google.com';
    regions.push(shirin);
});

// Boyovut new
var boyovutnew = rsr.path("M529.8,202.7l9.1,7.2l4.1,4.5l1.7,3.2l-0.1,3.6l-1.2,3.3l-0.6,3.3c0,0-1,2.1-0.5,3.1c0.5,1,3.2,5.2,2.6,5.1c-0.7-0.1,2,3.8,2,3.8l1.3,2.9l4.6,3.6l10.1,9.2l9.1,9.7l5.7,4.8l1.6,3l18.2,11.2l6,4l2.1,5.1l1,9.8l-3.2,4.4h-7l-4.1-4.8l-10.8-7.6l-5.4-4.5l-8.7-2.4l-4.9-1.8l-20.5-8.4l-34.5-28l-41.3-22.8l-15.4,3.8l-16.4-0.4l-12.6-6.5l6.1-14.3l-1.2-1.8l-5.2-1.7l-7.9-1.3l-9.5-19.9l-2.3-1l-5.3,2.9L385,160.8h2l-0.3-2.6h4.8l0.9-2.3l14.6-0.1l1.2-2.5l18.4,4.2l28.4,0.4l20.5,6.7h22.8l4.8,2l3,2.6l3.9,2.8l4.4,5.7l6.1,9.8L529.8,202.7z");
boyovutnew.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '0.8'});
$(boyovutnew.node).attr("title", "Boyovut tumani");
$(boyovutnew.node).attr("class", "boyovutnew");
$(".boyovutnew").tooltip();
boyovutnew.mouseover(function(e) {
    $(".boyovutnew").tooltip();
    boyovutnew.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(2);
    regions.push(boyovutnew);
});
boyovutnew.mouseout(function(e) {
    boyovutnew.attr({"fill": "", 'fill-opacity': '1'});
    boyovutnew.node.node.href = 'http://google.com';
    regions.push(boyovutnew);
});


// Guliston tumani
var gulistont = rsr.path("M537.3,192.2l4.7-6.1l0.5-5l-2.4-5l-6.6-5.8l-11.5-8.1l-10.1-5.5l4.2-7.6l-13.7-1.6l-0.8-2.3l1.2-4.1l-0.4-2.4l-7.6-13.7l3-1l1.1-1.1l-0.4-1.6l-1-1.1l-2-0.9h-2.1l-1.9,1.4l-1.5,0.9h-1.6c0,0-2-1.4-2.1-1.6c-0.1-0.2-1.9-1.6-2.2-1.8c-0.2-0.2-3.3-1.4-3.4-1.6c-0.2-0.2-0.7-0.8-1-1.3c-0.2-0.4-0.8-2.1-1.1-2.3c-0.3-0.2-1.4-0.7-1.4-0.7l-2.7-0.5l-2.5,1.2c0,0-2.4,1.3-2.7,1.2s-4.1,0-4.1,0l-7.2-3l-3.3-1.2h-1.8h-1.6l-1,0.6l-2,1.3l-0.2,3.3l-0.4,2.3l-0.3,1.5c0,0-0.5,0.8-0.8,1c-0.4,0.2-2.2,0.5-2.8,0.8c-0.5,0.2-1.4,1.2-1.5,1.6c-0.1,0.4-0.4,3.3-0.4,3.3l-5-0.9l-6-1.7l-6.1-2.5l-3-1.6l-2.4-0.8l-2.3-0.1l-3.5,0.8l-5.8,3.3l-3.4,1l-4.1-0.6l-3-1.6L379.2,106l-4.1-2.7l-6.6-0.8l-7.1-3l-2-0.8h-3.3l4.5,4.4l1.7,1.6l1.6,2.4l3.8,9.1l2.4,7.7l1.4,5.2l2,2.8l2.2,0.1l-0.5-3.5l-0.9-2.7l-1-2.4l1.2-0.4c0,0,2.4,0.8,2.6,1.2c0.3,0.4,1.6,2.4,1.6,2.4l1,3.5l1.1,3l4.2-0.4l2,1.7l0.7,2.7l-0.8,1.8l-2.5,0.4l-1.4,0.5l2.7,5.8l2.5,2l9.1-0.1l7.1,0.7l2.1,0.4l0.9,2.3l0.7,2.4l18.4,4.2l28.4,0.4l20.5,6.7h22.2l5.5,2l6.9,5.4l4.4,5.7l11.2,18.1l6.7-1.8L537.3,192.2z ");
gulistont.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(gulistont.node).attr("title", "Guluston tumani");
$(gulistont.node).attr("class", "gulistont");
$(".gulistont").tooltip();
gulistont.mouseover(function(e) {
    $(".gulistont").tooltip();
    gulistont.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(3);
    regions.push(gulistont);
});
gulistont.mouseout(function(e) {
    gulistont.attr({"fill": "", 'fill-opacity': '1'});
    gulistont.node.node.href = 'http://google.com';
    regions.push(gulistont);
});

// Sayxunobod tumani
var sayhun = rsr.path("M486.7,118.1h2.8l1.1-1.2l-0.1-1.1l-0.9-1.7l-2.9-2.4l-5.4-3.8l-4.7-2.1l-1.3-1.2l0.1-1.8c0,0,0.5-0.7,0.5-0.8c0-0.2-0.4-1.1-0.4-1.1l-1.3-0.9c0,0-3.3-0.8-3.4-0.8c-0.2,0-1.6-0.2-2.1-0.4c-0.5-0.1-2.4-0.2-2.4-0.2l-16.2-0.3l3.2-3.7l0.7-1.7l-0.4-0.7l-15.4-0.7l-1.4-5.7l-1-2.3c0,0-1.7-1.7-1.7-1.8c-0.1-0.1-4.7-2.5-4.7-2.5l-3.8-1.2l-3.8-0.6l-4.8-0.6l-5.8-0.2L402,73l-2.1-1.1l-0.5-1.7c0,0-2.1-1-2.2-1c-0.1-0.1-2.1-0.5-2.1-0.5l-1.5-2.3c0,0-1.3-1-1.4-1.1c-0.1,0-2.6-0.5-2.7-0.5c-0.2,0-3.8-0.2-3.8-0.2l-1.3-0.3l-3.8-3.1c0,0-1-1.3-1-1.4c-0.1-0.1-1.1-1-1.1-1s-1.4-0.5-1.6-0.5c-0.2,0-3.5-0.2-3.5-0.2h-4.1l-2,1.2l-0.9,1.5l-1,1.5l-0.5,0.8l-5.1-0.6l-1.5-0.4l-1.1,0.4l-0.2,0.8l0.3,6.3l-0.2,0.7L346.6,70c0,0-0.2,0.6-0.2,0.7c0,0.1-0.1,0.7,0.1,0.8c0.1,0.1,1.1,1.5,1.1,1.5l3.6,8.7l3,9.1l2.4,7.9h3.3l9.1,3.9l6.6,0.8l4.1,2.7l17.9,14.9l3,1.6l4.1,0.6l3.4-1l5.8-3.3l3.5-0.8l2.3,0.1l2.4,0.8l3,1.6l6.1,2.5l6,1.7l5,0.9l0.4-3.3l1.5-1.6l2.8-0.8l0.8-1l0.7-3.8l0.2-3.3l2.9-1.8h3.4l10.5,4.2h4.1l5.2-2.4l2.7,0.5l1.4,0.7l1.1,2.3l1,1.3l3.4,1.6L486.7,118.1z");
sayhun.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(sayhun.node).attr("title", "Sayxunobod tumani");
$(sayhun.node).attr("class", "sayhun");
$(".sayhun").tooltip();
sayhun.mouseover(function(e) {
    $(".sayhun").tooltip();
    sayhun.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(4);
    regions.push(sayhun);
});
sayhun.mouseout(function(e) {
    sayhun.attr({"fill": "", 'fill-opacity': '1'});
    sayhun.node.node.href = 'http://google.com';
    regions.push(sayhun);
});


// Sirdaryo tumani
var zirdaryo = rsr.path("M350.6,106.4l-10.9,3.9l-3.3-5.8l-1.1-3.3l-1.6-1.3l-11.2-4.5l-4.6-2l-1-1.3l-4.6-10.4l-1.8-3.5l-16.4-15.6l0.2-1.4l5.7-18.4l0.5-8.3l-3.9-5.7l4.1-2.8l-2.7-2.9l-1.1-0.6l-18.1-0.4l0.8-3.6l24.9,0.2l1.7,1.6l10.6-4.1l1.8,1.4l1.4,1.7c0,0,0.2,1.4,0.5,1.6c0.2,0.2,1,0.7,1.5,0.7c0.5,0,4.6-0.7,4.8-0.8c0.2-0.1,3.3-0.2,3.5-0.2s2.3,0.9,2.3,0.9s0.5,0.2,0.5,0.5c0,0.2,0.3,0.4-0.1,1c-0.4,0.7-1,1.1-1,1.1l-4.1,0.8c0,0-1.1,0.4-1.3,0.5s-1.3,1.4-1.3,1.4s0.6,1.8,0.8,1.9c0.2,0.2,0.8,0.7,0.8,0.7l4.2-1l2,0.2l1.3,1.3c0,0,1.3,1.6,1.5,1.8c0.2,0.2,1.4,1.1,1.4,1.1l3.1,0.5l5.3,1.7l2.6,1.6c0,0-0.2,1.4,0.2,1.8c0.4,0.4,0.4,3.6,0.4,3.6l-0.2,1.6l1.5,0.2l3-1l3.4-0.6l2.3,0.8l-0.4,1.1l-1,1l-1.6,1.1l-0.8,0.6l6.6,0.2l22.6,5.1l1.7,2.4l2.2,3l4.4,2l5.5,1.4l6.7,0.2l11.2,15.6l-3.9-0.1l-11.6-4.7l-0.5-1.7l-2.7-1.2l-1.7-0.4l-1.5-2.3l-1.4-1.1l-2.7-0.5l-3.8-0.2l-1.3-0.3l-3.8-3.1l-1-1.4l-1.1-1L377,58l-3.6-0.1h-4.1l-2,1.2l-2.4,3.8l-5.1-0.6l-1.5-0.4l-1.1,0.4l-0.2,0.8l0.3,6.3l-0.2,0.7l-10.7-0.2l-0.2,0.7l0.1,0.8l1.1,1.5l3.6,8.7l5.3,17l4,3.8L350.6,106.4z");
zirdaryo.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(zirdaryo.node).attr("title", "Sirdaryo tumani");
$(zirdaryo.node).attr("class", "zirdaryo");
$(".zirdaryo").tooltip();
zirdaryo.mouseover(function(e) {
    $(".zirdaryo").tooltip();
    zirdaryo.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(5);
    regions.push(zirdaryo);
});
zirdaryo.mouseout(function(e) {
    zirdaryo.attr({"fill": "", 'fill-opacity': '1'});
    zirdaryo.node.node.href = 'http://google.com';
    regions.push(zirdaryo);
});




// Guliston shahri
var gulshahar = rsr.path("M376.4,162.4l-2.1,1.9c0,0-3,0.5-3.3,0.5s-2.9,0-2.9,0l-2.9-1.2l-1.2-0.7l-0.7-2.6l1.3-3.2l-0.1-2.3l-2-1.4l-2.6-1.2l-0.2-1.6l0.6-1.3l-0.4-1.2c0,0,0.1-0.4-0.1-0.6c-0.2-0.2-0.1-0.4-0.6-1c-0.5-0.6-1-1.6-1-1.6l-0.1-0.4c0,0,1-0.6,1.3-0.7c0.3-0.1,0.4-0.2,0.4-0.5c0-0.2-0.4-1.3-0.4-1.3l-0.3-1.3c0,0,1.4-0.5,1.7-0.7c0.2-0.2,2.3-1.3,2.3-1.3l2-0.5l-0.1-1c0,0-2.4-1.3-2.7-1.3s-1.5-1.1-1.6-1.7c-0.1-0.6,0-2.9,0-2.9s1.2-1,1.4-1c0.2,0,2.7-0.4,2.7-0.4l4.2,0.4l2.1,0.9l2.1,0.2l2.2,0.1l-0.5-3.5l-1.8-5.2l1.2-0.4l2.6,1.2l1.7,2.9l0.9,3.1l1.1,3l4.2-0.4l2,1.7l0.7,2.7l-0.8,1.8l-2.5,0.4l-1.4,0.5l2.7,5.8l2.5,2l9.1-0.1l9.2,1.1l1.1,3l0.5,1.6l-1.2,2.5l-14.6,0.1l-0.9,2.3h-4.8l0.3,2.6h-2l-3.8-0.6h-3.3L376.4,162.4z");
gulshahar.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(gulshahar.node).attr("title", "Guliston shahar");
$(gulshahar.node).attr("class", "gulshahar");
$(".gulshahar").tooltip();
gulshahar.mouseover(function(e) {
    $(".gulshahar").tooltip();
    gulshahar.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(6);
    regions.push(gulshahar);
});
gulshahar.mouseout(function(e) {
    gulshahar.attr({"fill": "", 'fill-opacity': '1'});
    gulshahar.node.node.href = 'http://google.com';
    regions.push(gulshahar);
});




// Mirzaobod tumani
var mirzaobod = rsr.path("M324,116.1 313,119.9 292.7,119.1 288.6,123.1 286.8,124.7 268.6,121.7 271.4,128.7 274,131.8 281.9,136.9 284.3,139.8 286.2,143.5 288.2,148.8 298.3,157.7 310.3,161.9 318.5,164.9 322,167.3 329,177.3 341.4,178.4 360.2,190 380,205.1 387.8,205.1 392.3,206.9 396.5,187.3 385.2,160.8 381.3,160.2 378.1,160.2 376.4,162.4 374.3,164.3 371,164.8 368.2,164.8 365.3,163.6 364.1,162.9 363.4,160.3 364.7,157.2 364.6,154.9 362.7,153.5 360,152.3 359.9,150.7 360.5,149.4 360.2,148.4 360,147.6 358.5,144.8 360.2,143.6 359.4,141.1 361.1,140.4 363.4,139.1 365.4,138.6 365.3,137.6 362.6,136.3 361.2,135 361,131.8 362.4,130.7 365.2,130.3 369.4,130.7 371.5,131.6 373.6,131.8 371.6,129 370.2,123.8 367.8,116.1 364,107 362.4,104.6 360.3,102.5 339.8,110.3 ");
mirzaobod.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(mirzaobod.node).attr("title", "Mirzaobod tumani");
$(mirzaobod.node).attr("class", "mirzaobod");
$(".mirzaobod").tooltip();
mirzaobod.mouseover(function(e) {
    $(".mirzaobod").tooltip();
    mirzaobod.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(7);
    regions.push(mirzaobod);
});
mirzaobod.mouseout(function(e) {

    mirzaobod.attr({"fill": "", 'fill-opacity': '1'});
    regions.push(mirzaobod);
});



// Oqoltin tumani
var oqoltin = rsr.path("M188.6,90.6 175.5,102.8 169.9,108.6 160.9,119.5 156.3,114.5 139.5,121.1 126.8,136.6 239.8,172.1 240.3,170 255.3,156.2 270.1,151.7 282.1,161.6 294.4,164.5 318.6,179.2 316,185.7 360.2,205.2 374.9,221.5 381,213 380,205.1 360.2,190 341.4,178.4 329,177.3 322,167.3 318.5,164.9 298.3,157.7 288.2,148.8 286.2,143.5 284.3,139.8 281.9,136.9 273.8,131.5 271.4,128.7 268.4,121.5 252.1,117.9 255.2,114 256.4,110.5 246.4,102.7 232.5,104.8 211.9,88.3 188.6,82.2 188.1,87.3");
oqoltin.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(oqoltin.node).attr("title", "Oqoltin tumani");
$(oqoltin.node).attr("class", "oqoltin");
$(".oqoltin").tooltip();
oqoltin.mouseover(function(e) {
    oqoltin.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom'});
    $(".oqoltin").tooltip();
    sir_region(8);
    regions.push(oqoltin);
});
oqoltin.mouseout(function(e) {
    oqoltin.attr({"fill": "", 'fill-opacity': '1'});
    oqoltin.node.node.href = 'http://google.com';
    regions.push(oqoltin);
});

// Sardoba tumani
var sardoba = rsr.path("M134.6,160.5 138.4,174.9 43.7,230.8 49.6,245.5 36.1,268.1 111.3,273.5 119.5,284.5 162.4,281.8 181.3,272.4 203.3,272.7 229.3,278.9 239.8,239.3 246.6,218.7 237.2,192.3 238.3,178.8 239.8,172.1 147.2,143");
sardoba.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(sardoba.node).attr("title", "Sardoba tumani");
$(sardoba.node).attr("class", "Sardoba");
$(".Sardoba").tooltip();

sardoba.mouseover(function(e) {
    sardoba.attr({"fill": "#424376", 'fill-opacity': '0.2'});
    sir_region(9);
    $(".Sardoba").tooltip();
    regions.push(sardoba);
});
sardoba.mouseout(function(e) {
    sardoba.attr({"fill": "", 'fill-opacity': '1'});
    sardoba.node.node.href = 'http://google.com';
    regions.push(sardoba);
});


// Yangiyer shahri
var yangiyer = rsr.path("M392.3,206.9 393,211.8 384.4,212.6 384,217.2 385.5,219.9 394.6,221.1 399.8,219.5 409.8,242.7 415,233.3 423.5,232 421.7,224.3 427.9,210 426.7,208.2 421.5,206.5 413.6,205.3 404.2,185.4 401.9,184.4 396.5,187.3");
yangiyer.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
$(yangiyer.node).attr("title", "Yangiyer shahri");
$(yangiyer.node).attr("class", "mediumBold");
$(".mediumBold").tooltip();
yangiyer.mouseover(function(e) {

    yangiyer.attr({ "fill": "#424376", 'fill-opacity': '0.2'});

    $(".mediumBold").tooltip();
    sir_region(10);
    regions.push(yangiyer);
});
yangiyer.mouseout(function(e) {

    yangiyer.attr({"fill": "", 'fill-opacity': '1'});
    yangiyer.node.node.href = 'http://google.com';
    regions.push(yangiyer);
});


function sir_region(id){
    var obj = [
        //Xovos tumani
        {tumannomi:"Xavas tumani",hokim:"Boboyev Rahimjon Mahamadjonovich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 225-0373",fax:"0 (367) 225-4581",site:"Sirdaryo",email:"gulistan@sirdaryo.uz"},
        //Shirin shahri
        {tumannomi:"Shirin shahri",hokim:"Begaliyev Ilhomjon Mahmudjonovich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 764-5090",fax:"0 (367) 264-5090",site:"Sirdaryo",email:"shirin@sirdaryo.uz"},
//Boyovut new
        {tumannomi:"Boyavut tumani",hokim:"Ashurmatov Oybek Shodmonqulovich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 390-1090",fax:"0 (367) 262-1358",site:"Sirdaryo",email:"boyovut@sirdaryo.uz"},
// Guliston tumani

        {tumannomi:"Guliston tumani",hokim:"Ibodullayev Abdumavlon Abduahadovich v/b",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 796-3030",fax:"0 (367) 796-2155",site:"Sirdaryo",email:"Sirdaryo"},
//Sayxunobod tumani

        {tumannomi:"Sayxunobod tumani",hokim:"Egamberdiyev Nosirjon Mahmudovich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 333-2961",fax:"0 (367) 333-2503",site:"Sirdaryo",email:"sayxunobod@sirdaryo.uz"},
//Sirdaryo tumani

        {tumannomi:"Sirdaryo tumani",hokim:"Nazarov Sobirjon",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 357-0868",fax:"0 (367) 357-4808",site:"Sirdaryo",email:"sirdaryotumani@sirdaryo.uz"},
//Guliston shahri

        {tumannomi:"Guliston shahri",hokim:"Ismatullayev Sherzod Shuxratullayevich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 225-0373",fax:"0 (367) 225-4581",site:"Sirdaryo",email:"gulistan@sirdaryo.uz"},
//Mirzaobod tumani

        {tumannomi:"Mirzaobod tumani",hokim:"Mirzaobod tumani hokimi",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 310-1112",fax:"0 (367) 341-1404",site:"Sirdaryo",email:"mirzaobod@sirdaryo.uz"},
//Oqoltin tumani

        {tumannomi:"Oqoltin tumani",hokim:"Фазилов Дилмурод Тухмакович",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 243-1001",fax:"0 (367) 243-1009",site:"Sirdaryo",email:"oqoltin@sirdaryo.uz"},
// Sardoba tumani

        {tumannomi:"Sardoba tumani",hokim:"Tursunov Shukurullo Xo’jamqulovich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 344-1777",fax:"0 (367) 344-1351",site:"Sirdaryo",email:"sardoba@sirdaryo.uz"},
//Yangiyer shahri

        {tumannomi:"Yangiyer shahri",hokim:"Qudratov Isroil Turg`unbayevich",markazi:"Sirdaryo",maydoni:"Sirdaryo",aholisi:"Sirdaryo",telefon:"0 (367) 350-3116",fax:"0 (367) 372-2400",site:"Sirdaryo",email:"iqudratov@sirdaryo.uz"},



    ];

    $("#shaharyotuman").text(obj[id].tumannomi);
    $("#hokim").text(obj[id].hokim);
    $("#telefoni").text(obj[id].telefon);
    $("#faxi").text(obj[id].fax);
    $("#emaili").text(obj[id].email);

}

// Iterate through the regions & change Yorkshire's fill colour to gold
for (var i = 0; i < regions.length; i++) {

	// Change Yorkshire's fill colour to gold
    if (regions[i].data('id') == 'poytaxt') {
    	regions[i].node.setAttribute('fill', '#000000');
    }

    // Showing off
    
    regions[i].mouseover(function(e){
    	this.node.style.cursor = "pointer";
		this.node.style.opacity = 0.0;
		document.getElementById('region-name').innerHTML = this.data('region');
		
	});

	regions[i].mouseout(function(e){
		this.node.style.opacity = 1;
	});
	
	regions[i].click(function(e) {
      location.href=this.data('url');
});

}

