$(function () {
	const sequence = [{
		name: 'RYA_Home', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 1 // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
	},{
		name: 'RYA_Home_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:0,
	}];

	$("#center-info-circle").on('click', function(){
		slideTo(1);
	});

	let parentSequence = parseFloat(sequence.length-1);
	console.log(typeof(parentSequence));
	let dosingResponsibleSource;
	let parentSource;

	function slideTo(index) {
		swiper.slideTo(index,0,false);
	}

	const swiper = new Swiper('.swiper-container', { //Swiper Initialisation
		on: {
			afterInit: function(swiper){
				createBottomMenu();
				//Get the active Index of the Swiper
				let slideIndex = swiper.activeIndex;
				console.log('SlideIndex:'+slideIndex);
				let slide = sequence[slideIndex];
				console.log("Slide Name:"+slide.name);
				if (slide.studyDesign === null) {
					$('.study-design').off('click')
				} else {
					$(".study-design").on('click', function(){
						slideTo(slide.studyDesign);
					});
				}
				if (slide.references === null) {
					$('.references').off('click')
				} else {
					$(".references").on('click', function(){
						slideTo(slide.references);
					});
				}
				console.log(slide.backTo)
				if (slide.backTo === 'previous') {
					// console.log(sequence[slideIndex].backTo)
					$(".back-button").on('click', function(){
						slideTo(swiper.previousIndex)
					});
				} else if (typeof slide.backTo === 'number') {
					// console.log(sequence[slideIndex].backTo)
					$(".back-button").on('click', function() {
						slideTo(slide.backTo)
					});
				} else {
					$(".back-button").off('click')
				}
				if (window.parent.onEnterPage){
					window.parent.onEnterPage(slide.name);
				}
			},
			slideChange: function () {
				let slideIndex = swiper.activeIndex;
				console.log('SlideIndex:'+slideIndex);
				let slide = sequence[slideIndex];
				createBottomMenu();
				initialise()
				if (window.parent.onEnterPage){
					window.parent.onEnterPage(slide.name);
				}
			}
		},
		preloadImages: false,
		// Enable lazy loading
		lazy: true,
		effect: 'fade', // Effect used when trasitioning between slides
		direction: 'vertical', // The direction which slides transition between eachother
		allowTouchMove: false, // Whether touch based swiping is allowed or not.
		spaceBetween: 0, // pixels between each slide.
		shortSwipes: false, /* Disables swipes that don't swipe a page past the half way point to go to the next page */
		longSwipesMS: 100, /* Minimum time in milliseconds for a swipe to last for it to be able to swipe to another page */
		longSwipesRatio: 0.1, /* Fraction of screen that needs to be swiped in order for it to go to the next page */
	});

	function initialise() {
		let slideIndex = swiper.activeIndex;
		let slide = sequence[slideIndex];
		if (slide.studyDesign === null) {
			$('.study-design').off('click')
		} else {
			$(".study-design").on('click', function(){
				swiper.slideTo(slide.studyDesign,0,false);
			});
		}
		if (slide.references === null) {
			$('.references').off('click')
		} else {
			$(".references").on('click', function(){
				swiper.slideTo(slide.references,0,false);
			});
		}

	}
	
	$(".back-button").on('click', function(){
		let slideIndex = swiper.activeIndex;
		let slide = sequence[slideIndex];
		console.log(slide.backTo);
		if (slide.backTo === 'previous') {
			console.log("Previous Index");
			slideTo(swiper.previousIndex);
		} else if(slide.backTo == 'reference-back'){
			//if this vairable points to its own index then we would use the parent source variable to revert back to the 
			//2nd layer parent source
			if(dosingResponsibleSource != swiper.activeIndex){
				slideTo(dosingResponsibleSource);
			}
			else{
				slideTo(parentSource);
			}
		}else if (typeof slide.backTo === 'number') {
			console.log("Numeric Index");
			slideTo(slide.backTo);
		} else {
			$(".back-button").off('click')
		}
	});

	/* Menu Buttons */

	
	if (!window.parent.navigateToSequence) {
        window.parent.navigateToSequence = function(name) {
            // We are not in the MI Touch environment
            window.location.href = `../${name}/index.html`
        }
    }
	function createBottomMenu() {
		// Acarizax Section
		$('.bottom-menu').html(`
		<div class="flex flex-row h-full">
		<div class="sequence" data-prevent-tap="false" style="width:8.7%"></div>
		<div class="home" onclick="window.parent.navigateToSequence('RYA_Home')" data-prevent-tap="true" style="width:7.7%"></div>
		<div class="ryaltris" onclick="window.parent.navigateToSequence('RYA_Home')" data-prevent-tap="true" style="width:7.3%"></div>
		<div class="acarizax" onclick="window.parent.navigateToSequence('ACA_Acarizax')" data-prevent-tap="true" style="width:7.3%"></div>
		<div class="grazax" onclick="window.parent.navigateToSequence('GRA_GPA')" data-prevent-tap="true" style="width:7.7%"></div>
		<div class="unmet_needs" onclick="window.parent.navigateToSequence('RYA_Unmet_Needs')" data-prevent-tap="true" style="width:16.5%"></div>
		<div class="indication" onclick="window.parent.navigateToSequence('RYA_Indications')" data-prevent-tap="true" style="width:13.9%;"></div>
		<div class="efficacy" onclick="window.parent.navigateToSequence('RYA_Efficacy')" data-prevent-tap="true" style="width:11.6%;"></div>
		<div class="qol" onclick="window.parent.navigateToSequence('RYA_QOL')" data-prevent-tap="true" style="width:6.2%"></div>
		<div class="safety" onclick="window.parent.navigateToSequence('RYA_Safety')" data-prevent-tap="true" style="width:8.8%"></div>
		<div class="dosing" onclick="window.parent.navigateToSequence('RYA_Dosing')" data-prevent-tap="true" style="width:9.8%"></div>
		<div class="summary" onclick="window.parent.navigateToSequence('RYA_Summary')" data-prevent-tap="true" style="width:12%"></div>
		<div class="pi" onclick="window.parent.navigateToSequence('RYA_PI')" data-prevent-tap="true" style="width:7.3%"></div>
		<div class="study-design" data-prevent-tap="true" style="width:6.4%"></div>
		<div class="faq" onclick="window.parent.navigateToSequence('RYA_FAQ')" data-prevent-tap="true" style="width:7.8%"></div>
		<div class="references"  data-prevent-tap="true" style="width:8.4%"></div>
		`);
	}
	


	
	
	

	
	
});

