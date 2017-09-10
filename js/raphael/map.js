var rsr = Raphael('map', '1140', '697');

var regions = [];

// White object to show the borders, dodgy Illustrator work by original artist!

// Xovos tumani
var xovos = rsr.path("M911.2 467.74 910.97 467.55 853.23 420.69 784.79 382.93 759.41 389.1 759.14 389.1 731.19 388.45 713.44 379.28 715.98 390.26 700.58 392.57 690.41 410.86 672.58 370.02 665.25 372.3 648.58 370.15 645.17 364.13 646.21 354.11 660.13 352.85 659.3 347.9 653.3 345.41 642.87 345.43 644.47 357.13 632.15 374.18 606.25 345.17 530.71 311.98 535.16 300.82 496.4 277.2 475.55 272.31 455.89 256.17 432.6 263.24 408.25 285.63 404.98 299.52 403.3 321.66 409.42 337.23 419.05 366.18 407.48 401.26 390.23 466.27 412.92 480.89 440.55 477.55 490.59 474.76 496.04 475.56 502.07 483.29 503.83 494.06 506.46 511.69 501.31 522.2 490.41 530.34 475.53 531.03 485.41 564.06 488.52 590.79 510.21 629.67 548.88 614.39 635.11 577.25 681.05 557 691.61 560.47 708.78 565.38 738.44 576.86 746.86 576.84 757.42 568.11 772.2 554.14 782.61 546.02 803.61 536.41 822.71 530.96 844.28 527.12 879.9 521.01 880.06 521.01 931.75 520.89 924.9 505.89 924.46 496.7 927.02 487.35 936.29 481.33 940.84 479.8 911.2 467.74");
xovos.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '0.8'});
xovos.mouseover(function(e) {
    xovos.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Xavas tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(xovos);
});
xovos.mouseout(function(e) {
    xovos.attr({"fill": "", 'fill-opacity': '1'});
    xovos.node.node.href = 'http://google.com';
    regions.push(xovos);
});




// Shirin shahri
var shirin = rsr.path("M1068.56 538.41 1079.04 534.63 1065.61 521.92 1044.11 506.78 1020 488.82 1022.74 495.64 1022.64 508.73 1016.33 517.33 1002.6 517.36 995.21 508.89 986.43 502.64 977.2 496.26 968.42 488.97 954.5 485.11 937.76 485.15 930.57 489.82 928.71 500.39 936.5 521.57 945.13 527.09 960.65 533.76 975.73 536.7 996.32 533.6 1028.31 533.53 1053.18 548.3 1061.51 548.28 1064.05 545.14 1068.56 538.41" );
shirin.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '0.8'});
shirin.mouseover(function(e) {
    shirin.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Shirin shahri', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(shirin);
});
shirin.mouseout(function(e) {
    shirin.attr({"fill": "", 'fill-opacity': '1'});
    shirin.node.node.href = 'http://google.com';
    regions.push(shirin);
});

// Boyovut new
var boyovutnew = rsr.path("M1017,492l-3.12-7.75-9.55-6.34-30.92-19-2.82-5.17-9.4-7.94-15.29-16.11L929,414.33l-8.1-6.4-2.21-5.25c-3.76-5.64-4-7-3.59-7.9-.59-1.22-2-3.51-2.71-4.73-.64-1.05-1.14-1.89-1.39-2.38-1.06-2.07,0-5.22.66-6.7l1.06-5.73,1.88-5.26.2-5.1-2.5-4.66-6.67-7.34-15.42-12.17L874.6,315l-10.27-16.31-7.1-9.27-6.41-4.65-4.88-4.09-7.48-3.09-38.17,0L766,266.21l-47.47-.55L689.06,259l-1.86,3.92-24.26.05-1.47,3.81-7.13,0,.49,4.4h-2.6l17.08,39.59,7.8-4.24,5.49,2.33,15.73,33,12.42,2,9.39,3,2.92,4.56-10,23.2,19.11,9.87,26.77.62,26.39-6.41,70.25,38.8,57.65,46.78,34.08,13.88,8,3.08,14.92,4.14,9.38,7.79L997.9,505.9l6.51,7.45,9.88,0,4.28-5.83Z");
boyovutnew.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '0.8'});
boyovutnew.mouseover(function(e) {
    boyovutnew.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Boyovut  tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(boyovutnew);
});
boyovutnew.mouseout(function(e) {
    boyovutnew.attr({"fill": "", 'fill-opacity': '1'});
    boyovutnew.node.node.href = 'http://google.com';
    regions.push(boyovutnew);
});


// Guliston tumani
var gulistont = rsr.path("M910.07,310.73l.67-7.27L907.06,296l-10.58-9.41-18.94-13.24L858.9,263.19l6.53-11.82L844.28,249l-2.12-5.57,2.09-7.12-.6-3.3L830,208.18l6.79-2.29.68-.67-.23-1.13-.93-1.09-2.49-1.15h-2.48l-2.81,2-3,1.83h-3.91l-.52-.36c-3-2.1-3.7-2.75-4-3.15-.43-.42-1.94-1.62-2.53-2.09l-.71-.57c-.4-.21-1.74-.78-2.64-1.17-2.59-1.1-2.95-1.27-3.34-1.68a14.23,14.23,0,0,1-1.89-2.6c-.12-.23-.29-.63-.48-1.09s-.7-1.64-1-2.11c-.35-.2-1-.52-1.57-.8l-3.58-.64-3.62,1.72c-4.36,2.27-5,2.32-5.64,2.19s-3.77,0-6.53,0h-.42l-12.45-5.2-5.12-1.82h-4.8l-1.14.7-2.38,1.52-.3,4.69L755.78,200l-.2.32a6.24,6.24,0,0,1-2.28,2.34,14.39,14.39,0,0,1-2.29.65,23.82,23.82,0,0,0-2.39.65,5.9,5.9,0,0,0-1.47,1.42c-.11.65-.42,3-.67,5.15l-.25,2.09-10.68-1.86-10.34-3-10.41-4.23L709.88,201l-3.69-1.26-3.31-.11L697.59,201l-9.75,5.44-6.36,1.79-7.71-1.11L668,203.95,638.1,179l-6.28-4.29L621,173.32l-15.06-6.42h-.13l6.92,6.66,2.92,4.53,6.41,15.51,4,12.94,2.3,8.47,2.58,3.62h.25l-.5-3.21-1.4-4.41L627,205l4.66-1.39.62.23c4.48,1.64,5,2.32,5.29,2.65.51.63,2.07,3.26,2.72,4.36l.12.21,1.79,6,1.27,3.54,6.29-.57,4.54,3.89,1.6,5.85-2.14,4.63-5.21.87,3.38,7.37,3.28,2.61,14.6-.19L682,246.23l4.66.87,2,4.93.9,2.93L719,261.67l47.66.55,34.25,11.31,37.22,0,9.81,3.58,12.1,9.38,7.61,9.95,18,29.14,9.75-2.66L903,320Z ");
gulistont.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});

gulistont.mouseover(function(e) {
    gulistont.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Guluston  tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(gulistont);
});
gulistont.mouseout(function(e) {
    gulistont.attr({"fill": "", 'fill-opacity': '1'});
    gulistont.node.node.href = 'http://google.com';
    regions.push(gulistont);
});

// Sayxunobod tumani
var sayhun = rsr.path("M824,194.81l0-.64-1.13-2.1-4.48-3.71-8.77-6.24-7.91-3.7-3.07-2.85.23-4.65.34-.48.34-.51-.13-.35-1.26-.92c-2.27-.54-4.7-1.09-5.12-1.16-1-.09-3.57-.6-3.76-.64-.5-.11-2.42-.29-3.67-.38l-31.46-.57,7.93-9.19.38-1-25.59-1.11-2.71-10.8-1.43-3.38-2.52-2.64c-.83-.48-4.21-2.3-7.26-3.92l-6-1.92-6.21-1-7.8-1-9.93-.3-16.54-6.22-4.25-2.23-.81-2.86c-1.8-.82-2.55-1.18-2.91-1.37s-2-.48-3.2-.75l-.81-.17-2.75-4.23c-.57-.48-1.2-1-1.54-1.25l-.08,0c-2.68-.56-3.58-.74-3.85-.78l-6.39-.27-.36,0-2.55-.58-6.85-5.72L640,103l-1.61-2.24L637,99.58c-.79-.28-1.65-.57-1.94-.65l-5.64-.42h-6.16L620.83,100l-4.38,7-10-1.16-1.94-.44-.3.11.55,10.74-.86,2.88-17.5-.25c.3.44.7,1,1.23,1.87l.16.3,6.1,14.71,5,15.3,3.54,11.78h4.41l15.31,6.53,11.21,1.4,7.31,5,29.87,24.91,4.59,2.46,6.17.89,5.09-1.43,9.81-5.47,6.36-1.55,4.46.15,4.64,1.61,5,2.51L726.61,204l9.94,2.84,6.24,1.08.56-4.16,3.39-3.45,4.63-1.28.64-.71,1-5.62.39-6.37,6.25-3.92,6.67,0,17.61,7H790l8.83-4.09,5.39,1,3.12,1.61,2.15,4.28,1.15,1.57,4.76,2.17,4.06-.35h3.82Z");
sayhun.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
sayhun.mouseover(function(e) {
    sayhun.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Sayxunobod tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(sayhun);
});
sayhun.mouseout(function(e) {
    sayhun.attr({"fill": "", 'fill-opacity': '1'});
    sayhun.node.node.href = 'http://google.com';
    regions.push(sayhun);
});


// Sirdaryo tumani
var zirdaryo = rsr.path("M622.17,94.53l7.42,0,6.24.47,3.25,1.07,2.43,2.26,1.56,2.17,5.72,4.78,1.43.33,6.55.3,5,1,2.93,2.29,2.2,3.38,2.37.58,5.42,2.37.82,2.9,18.25,7.33,2.24.07L680.18,103.7l-10.51-.24-9.83-2.56L652,97.39l-4-5.49-2.42-3.4L608.6,80.1l-16.87-.47,6.36-4.47,2.6-1.75,1-.91L600.39,72l-5,.86-5.27,1.73-5-.79.75-4.41a29.07,29.07,0,0,0-.3-4.75,5.22,5.22,0,0,1-.68-3l-3.17-1.95L573.18,57l-5.6-1-.39-.31c-.2-.16-2-1.58-2.41-2a34,34,0,0,1-2.68-3.28l-1.58-1.56-2.22-.28-7.61,1.87-.77-.63a19.52,19.52,0,0,1-1.51-1.33c-.25-.27-.54-.59-1.71-3.92l-.38-1.09.76-.88c2-2.36,2.48-2.6,2.74-2.75a17.84,17.84,0,0,1,2.53-.91l.22-.05,6.32-1.21a6.77,6.77,0,0,0,.66-.75c-1.09-.48-2.29-1-2.77-1.14-1.07,0-4.92.2-5.39.25,0,0-7.27,1.29-8.32,1.3h0a7.56,7.56,0,0,1-3.65-1.49c-.41-.29-1-.68-1.51-3.37l-1.81-2.2-1.91-1.46-17.92,7L513,32.87l-39.37-.4-.46,2.09,28.24.63,2.6,1.38,6.46,6.86-7.06,4.84,5.83,8.51-.85,14.8-9.48,30.87-.13,1.09,27,25.78,3.28,6.24,7.63,17.28,1.17,1.63,7.2,3.12,18.94,7.66,3.32,2.81,2.06,5.93L574,182l16.56-5.92,13.32-5.5L599.1,166l-9-28.87-5.93-14.28-2-2.82-.18-2.26,1-2.88,17.67.26-.5-9.85.54-2.83,3.6-1.14,2.9.66,7.19.82,3.56-5.71Z");
zirdaryo.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});
zirdaryo.mouseover(function(e) {
    zirdaryo.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Sirdaryo tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(zirdaryo);
});
zirdaryo.mouseout(function(e) {
    zirdaryo.attr({"fill": "", 'fill-opacity': '1'});
    zirdaryo.node.node.href = 'http://google.com';
    regions.push(zirdaryo);
});




// Guliston shahri
var gulshahar = rsr.path("M684.67,258.89l1.13-2.38-.57-1.86-1.48-3.94L669.61,249l-15.79.21-5.14-4.09-5.62-12.28,4.83-1.6,3.13-.51.63-1.38-.89-3.26-2.32-2-7.69.7-2.37-6.61-1.47-4.94-2.33-4-2.15-1,2.19,6.4,1.27,8.17-6.23-.25-3.86-.43-3.49-1.51-6.5-.55c-2.44.35-3.58.5-4.13.56-.22.15-.56.42-.92.72,0,1.33,0,2.9,0,3.54a5.73,5.73,0,0,0,1.26,1.26,34.42,34.42,0,0,1,4.87,2.36l.92.49.55,4.52-4.81,1.1c-1.33.69-2.86,1.51-3.28,1.79a5.25,5.25,0,0,1-1.76,1l0,.17a9.6,9.6,0,0,1,.82,2.47,2.68,2.68,0,0,1-1.9,2.81l-.45.24a13.39,13.39,0,0,0,.76,1.15,7.35,7.35,0,0,1,.94,1.53h0a2.88,2.88,0,0,1,.58,2.12l.69,2.31-1.08,2.36.1,1,3.74,1.72,4,3,.21,5.17-2.09,5.06.77,2.85,1.14.72,4.33,1.75h4.38c.29,0,2.49-.33,4.61-.64l2.89-2.67,3.3-4.3H643l6.34,1h1l-.49-4.4,8.86,0,1.47-3.81Z");
gulshahar.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'}).data({'id': 'baxmal', 'region': 'Baxmal tumani','url': 'http://jizzax.uz/baxmal/'});
gulshahar.mouseover(function(e) {
    gulshahar.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'poytaxt', 'href':'Guliston shahar', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(gulshahar);
});
gulshahar.mouseout(function(e) {
    gulshahar.attr({"fill": "", 'fill-opacity': '1'});
    gulshahar.node.node.href = 'http://google.com';
    regions.push(gulshahar);
});




// Mirzaobod tumani
var mirzaobod = rsr.path("M647.79 270.97 642.7 270.15 638.3 270.17 635.87 273.29 631.94 276.93 625.54 277.79 620.37 277.8 614.84 275.52 612.23 273.88 610.69 268.21 612.96 262.7 612.86 260.31 610.54 258.57 605.27 256.23 604.84 251.89 605.74 249.91 605.38 248.65 605.23 247.66 601.94 241.61 605.07 239.42 603.75 234.94 608.06 233.15 612.14 230.86 612.43 230.8 610.29 229.76 607.05 226.77 606.74 219.45 610.36 216.78 615.7 216.06 623.3 216.7 625.27 217.55 624.7 216.75 622.23 207.66 618.26 194.88 612.03 179.79 609.63 176.13 607.04 173.63 573.85 186.36 547.29 196.02 528.5 202.55 495.02 201.32 488.63 207.52 484.89 210.64 457.01 206.1 460.26 214.25 464.32 219.03 477.46 227.51 481.85 232.8 485.22 239.5 488.29 247.91 504.69 262.15 524.38 269.21 538.44 274.19 544.81 278.52 556.23 294.83 576.48 296.62 608.54 316.49 641.25 341.44 654.1 341.41 659.65 343.72 666.26 313.76 647.79 270.97");
mirzaobod.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});

mirzaobod.mouseover(function(e) {
    mirzaobod.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Mirzaobod tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(mirzaobod);
});
mirzaobod.mouseout(function(e) {
    mirzaobod.attr({"fill": "", 'fill-opacity': '1'});
    mirzaobod.node.node.href = 'http://google.com';
    regions.push(mirzaobod);
});



// Oqoltin tumani
var oqoltin = rsr.path("M638.71 344.53 606.2 319.73 575.19 300.52 554.03 298.66 541.95 281.42 536.61 277.78 502.63 265.66 484.89 250.25 481.5 240.98 478.48 235 474.77 230.53 461.27 221.61 456.8 216.36 451.97 205 422.55 198.43 429.63 189.72 431.11 185.51 416 173.83 392.77 177.35 357.91 149.47 321.5 139.87 320.92 145.78 321.82 152.17 299.06 173.45 289.84 182.88 273.25 203.05 265.1 193.82 238.56 204.37 219.49 227.53 404.14 285.62 404.63 283.52 430.56 259.67 456.77 251.72 477.37 268.63 497.94 273.46 540.13 299.16 535.85 309.88 608.65 341.86 631.83 367.81 640.29 356.08 638.71 344.53");
oqoltin.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'}).data({'id': 'mirzachul', 'region': 'Mirzacho\'l tumani','url': 'http://jizzax.uz/mirzachul/'});
oqoltin.mouseover(function(e) {
    oqoltin.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Oqoltin tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(oqoltin);
});
oqoltin.mouseout(function(e) {
    oqoltin.attr({"fill": "", 'fill-opacity': '1'});
    oqoltin.node.node.href = 'http://google.com';
    regions.push(oqoltin);
});

// Sardoba tumani
var sardoba = rsr.path("M414.82 366.2 399.24 322.24 401.05 298.76 403.22 289.52 250.98 241.63 231.32 269.05 237.84 293.73 79.25 387.37 88.89 411.2 67.49 447.15 191.23 456.07 204.82 474.35 275.29 470 307.07 454.16 344.78 454.77 386.49 464.76 403.67 400.06 414.82 366.2");
sardoba.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});


sardoba.mouseover(function(e) {
    sardoba.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Sardoba tumani', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(sardoba);
});
sardoba.mouseout(function(e) {
    sardoba.attr({"fill": "", 'fill-opacity': '1'});
    sardoba.node.node.href = 'http://google.com';
    regions.push(sardoba);
});


// Yangiyer shahri
var yangiyer = rsr.path("M708.43 375.33 718.56 351.77 717.56 350.22 709.69 347.7 695.63 345.51 679.65 311.94 677.33 310.96 670.1 314.88 663.13 346.53 664.79 356.44 649.85 357.8 649.28 363.27 651.07 366.44 664.89 368.22 674.81 365.15 690.84 401.86 698.03 388.91 711.11 386.94 708.43 375.33");
yangiyer.attr({'fill': '', 'fill-opacity': '0.2','stroke-width': '0','stroke': '#ffffff','stroke-opacity': '1'});

yangiyer.mouseover(function(e) {
    yangiyer.attr({"fill": "#424376", 'fill-opacity': '0.2', 'id':'salom', 'href':'Yangiyer shahri', 'url':'ssssssssssssssssssssssss'});
   
    regions.push(yangiyer);
});
yangiyer.mouseout(function(e) {
    yangiyer.attr({"fill": "", 'fill-opacity': '1'});
    yangiyer.node.node.href = 'http://google.com';
    regions.push(yangiyer);
});





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

