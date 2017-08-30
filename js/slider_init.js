var setREVStartSize = function() {
	"use strict";
	var tpopt = new Object();
	tpopt.startwidth = 1150;
	tpopt.startheight = 1000;
	tpopt.container = jQuery('#rev_slider_2_1');
	tpopt.fullScreen = "on";
	tpopt.forceFullWidth = "off";

	tpopt.container.closest(".rev_slider_wrapper").css({
		height: tpopt.container.height()
	});
	tpopt.width = parseInt(tpopt.container.width(), 0);
	tpopt.height = parseInt(tpopt.container.height(), 0);
	tpopt.bw = tpopt.width / tpopt.startwidth;
	tpopt.bh = tpopt.height / tpopt.startheight;
	if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
	if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
	if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
	if (tpopt.bh > 1) {
		tpopt.bw = 1;
		tpopt.bh = 1
	}
	if (tpopt.bw > 1) {
		tpopt.bw = 1;
		tpopt.bh = 1
	}
	tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
	if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
	if (tpopt.fullScreen == "on") {
		tpopt.height = tpopt.bw * tpopt.startheight;
		var cow = tpopt.container.parent().width();
		var coh = jQuery(window).height();
		if (tpopt.fullScreenOffsetContainer != undefined) {
			try {
				var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
				jQuery.each(offcontainers, function(e, t) {
					coh = coh - jQuery(t).outerHeight(true);
					if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
				})
			} catch (e) {}
		}
		tpopt.container.parent().height(coh);
		tpopt.container.height(coh);
		tpopt.container.closest(".rev_slider_wrapper").height(coh);
		tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
		tpopt.container.css({
			height: "100%"
		});
		tpopt.height = coh;
	} else {
		tpopt.container.height(tpopt.height);
		tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
		tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
	}
};

/* CALL PLACEHOLDER */
setREVStartSize();

jQuery(document).ready(function() {
	"use strict";	
	var revapi2;
	revapi2 = jQuery('#rev_slider_2_1').show().revolution({
		dottedOverlay: "none",
		delay: 7000,
		startwidth: 1150,
		startheight: 1000,
		hideThumbs: 200,

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 3,

		simplifyAll: "off",

		navigationType: "bullet",
		navigationArrows: "solo",
		navigationStyle: "round",

		touchenabled: "on",
		onHoverStop: "on",
		nextSlideOnWindowFocus: "off",

		swipe_threshold: 75,
		swipe_min_touches: 1,
		drag_block_vertical: false,

		parallax: "mouse",
		parallaxBgFreeze: "off",
		parallaxLevels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
		parallaxDisableOnMobile: "on",

		keyboardNavigation: "off",

		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 0,
		navigationVOffset: 20,

		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,

		shadow: 0,
		fullWidth: "off",
		fullScreen: "on",

		spinner: "spinner0",

		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,

		shuffle: "off",

		forceFullWidth: "off",
		fullScreenAlignForce: "off",
		minFullScreenHeight: "",

		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off",
		hideThumbsUnderResolution: 0,

		fullScreenOffsetContainer: "",
		fullScreenOffset: "",
		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		startWithSlide: 0
	});
	
	var revapi1;	
	revapi1 = jQuery('#rev_slider_1_1').show().revolution({
		dottedOverlay: "none",
		delay: 7000,
		startwidth: 1150,
		startheight: 670,
		hideThumbs: 200,

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 3,

		minHeight: 200,

		simplifyAll: "off",

		navigationType: "bullet",
		navigationArrows: "solo",
		navigationStyle: "round",

		touchenabled: "on",
		onHoverStop: "on",
		nextSlideOnWindowFocus: "off",

		swipe_threshold: 75,
		swipe_min_touches: 1,
		drag_block_vertical: false,

		parallax: "mouse+scroll",
		parallaxBgFreeze: "off",
		parallaxLevels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
		parallaxDisableOnMobile: "on",

		keyboardNavigation: "off",

		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 0,
		navigationVOffset: 20,

		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,

		shadow: 0,
		fullWidth: "on",
		fullScreen: "off",

		spinner: "spinner0",

		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,

		shuffle: "off",

		autoHeight: "off",
		forceFullWidth: "off",

		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off",
		hideThumbsUnderResolution: 0,

		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		startWithSlide: 0
	});
	
	var revapi3;
	revapi3 = jQuery('#rev_slider_3_1').show().revolution({
		dottedOverlay: "none",
		delay: 7000,
		startwidth: 1150,
		startheight: 200,
		hideThumbs: 200,

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 5,

		minHeight: 200,

		simplifyAll: "off",

		navigationType: "thumb",
		navigationArrows: "solo",
		navigationStyle: "round",

		touchenabled: "on",
		onHoverStop: "on",
		nextSlideOnWindowFocus: "off",

		swipe_threshold: 75,
		swipe_min_touches: 1,
		drag_block_vertical: false,

		parallax: "mouse",
		parallaxBgFreeze: "off",
		parallaxLevels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
		parallaxDisableOnMobile: "on",

		keyboardNavigation: "off",

		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 0,
		navigationVOffset: 20,

		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,

		shadow: 0,
		fullWidth: "on",
		fullScreen: "off",

		spinner: "spinner0",

		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,

		shuffle: "off",

		autoHeight: "off",
		forceFullWidth: "off",

		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off",
		hideThumbsUnderResolution: 0,

		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		startWithSlide: 0
	});
	
	$('.new-royalslider-15').royalSlider({
	template: 'default',
	image_generation: {
		imageWidth: '',
		imageHeight: '',
		thumbImageWidth: '',
		thumbImageHeight: ''
	},
	thumbs: {
		thumbWidth: 96,
		thumbHeight: 72
	},
	autoPlay: {
		enabled: !0,
		delay: 7000,
		stopAtAction: !1,
		pauseOnHover: !1
	},
	fullscreen: {
		enabled: 0
	},
	block: {
		moveOffset: 900,
		speed: 1500,
		delay: 300
	},
	width: '100%',
	height: '',
	autoHeight: !0,
	slidesSpacing: 0,
	imageScaleMode: 'fill',
	arrowsNav: !1,
	loop: !0,
	numImagesToPreload: 2
	});


	$('.new-royalslider-11').royalSlider({
		template: 'default',
		image_generation: {
			imageWidth: '',
			imageHeight: '',
			thumbImageWidth: '',
			thumbImageHeight: ''
		},
		thumbs: {
			thumbWidth: 96,
			thumbHeight: 72
		},
		autoPlay: {
			enabled: !0,
			delay: 7000,
			stopAtAction: !1,
			pauseOnHover: !1
		},
		fullscreen: {
			enabled: !0
		},
		block: {
			moveOffset: 900,
			speed: 1500,
			delay: 300
		},
		width: '100%',
		height: '',
		autoHeight: !0,
		slidesSpacing: 0,
		imageScaleMode: 'fill',
		arrowsNav: !1,
		loop: !0,
		numImagesToPreload: 2
	});
	
	$('.new-royalslider-12').royalSlider({
	template: 'default',
	image_generation: {
		imageWidth: '',
		imageHeight: '',
		thumbImageWidth: '',
		thumbImageHeight: ''
	},
	thumbs: {
		thumbWidth: 96,
		thumbHeight: 72
	},
	autoPlay: {
		enabled: !0,
		delay: 7000,
		stopAtAction: !1,
		pauseOnHover: !1
	},
	fullscreen: {
		enabled: !0
	},
	block: {
		moveOffset: 900,
		speed: 1500,
		delay: 300
	},
	width: '100%',
	height: '',
	autoHeight: !0,
	slidesSpacing: 0,
	imageScaleMode: 'fill',
	arrowsNav: !1,
	loop: !0,
	numImagesToPreload: 2
	});

	$('.new-royalslider-13').royalSlider({
		template: 'default',
		image_generation: {
			imageWidth: '',
			imageHeight: '',
			thumbImageWidth: '',
			thumbImageHeight: ''
		},
		thumbs: {
			thumbWidth: 96,
			thumbHeight: 72
		},
		autoPlay: {
			enabled: !0,
			delay: 7000,
			stopAtAction: !1
		},
		block: {
			moveOffset: 20,
			speed: 400,
			delay: 200
		},
		width: '100%',
		height: '500px',
		autoScaleSlider: !0,
		autoScaleSliderWidth: '',
		autoScaleSliderHeight: '',
		slidesSpacing: 0,
		imageScalePadding: 0,
		arrowsNav: !1
	});


});