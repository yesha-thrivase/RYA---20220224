$(function () {
	const sequence = [{
		name: 'RYA_Efficacy', //0 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 7, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
	},{
		name: 'RYA_Efficacy_Oscular_Symptoms', //1 ID of the slide as written in parameters.xml
		studyDesign: 2, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 8, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:0
	},{
		name: 'RYA_Efficacy_Ocular_Symptoms_SD_1', //2 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:1
	},{
		name: 'RYA_Efficacy_Ocular_Symptoms_SD_2', //3 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:1
	},{
		name: 'RYA_Efficacy_Patients_Experience', //4 ID of the slide as written in parameters.xml
		studyDesign: 6, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 5, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:0
	},{
		name: 'RYA_Efficacy_Patients_Experience_Ref', //5 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_Patients_Experience_SD', //6 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_Ref', //7 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_Oscular_Symptoms_Ref', //8 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_15_minutes', //9 ID of the slide as written in parameters.xml
		studyDesign: 10, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 11, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:0
	},{
		name: 'RYA_Efficacy_15_minutes_SD_1', //10 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_15_minutes_Ref', //11 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_Usage', //12 ID of the slide as written in parameters.xml
		studyDesign: 13, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 14, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:0
	},{
		name: 'RYA_Efficacy_Usage_SD', //13 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_Usage_Ref', //14 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous'
	},{
		name: 'RYA_Efficacy_15_minutes_SD_2', //15 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:9
	},{
		name: 'RYA_Efficacy_Twice', //16 ID of the slide as written in parameters.xml
		studyDesign: 18, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 17, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
	},{
		name: 'RYA_Efficacy_Twice_Ref', //17 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:16
	},{
		name: 'RYA_Efficacy_Twice_SD', //18 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:16
	},{
		name: 'RYA_Efficacy_Paediatric', //19 ID of the slide as written in parameters.xml
		studyDesign: 21, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 20, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
	},{
		name: 'RYA_Efficacy_Paediatric_Ref', //20 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:19
	},{
		name: 'RYA_Efficacy_Paediatric_SD', //21 ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:19
	}
];

	

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
				createTopMenu();
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
				createTopMenu();
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
		<div class="efficacy"  style="width:11.6%;"></div>
		<div class="qol" onclick="window.parent.navigateToSequence('RYA_QOL')" data-prevent-tap="true" style="width:6.2%"></div>
		<div class="safety" onclick="window.parent.navigateToSequence('RYA_Safety')" data-prevent-tap="true" style="width:8.8%"></div>
		<div class="dosing" onclick="window.parent.navigateToSequence('RYA_Dosing')" data-prevent-tap="true" style="width:9.8%"></div>
		<div class="summary" onclick="window.parent.navigateToSequence('RYA_Summary')" data-prevent-tap="true" style="width:12%"></div>
		<div class="pi" onclick="window.parent.navigateToSequence('RYA_PI')" data-prevent-tap="true" style="width:7.3%"></div>
		<div class="study-design" data-prevent-tap="true" style="width:6.4%"></div>
		<div class="faq" onclick="window.parent.navigateToSequence('RYA_FAQ')" data-prevent-tap="true" style="width:7.8%"></div>
		
		<div class="references"  data-prevent-tap="true" style="width:8.4%"></div>
		`);

		$('.bottom-menu .efficacy').on('click', function() {
			slideTo(0)
		})
	}

	function createTopMenu() {
		// Acarizax Section
		$('.top-menu').html(`
		<div class="efficacy1" data-prevent-tap="true" style = "width:10%;"></div>
		<div class="efficacy2" data-prevent-tap="true" style = "width: 12%;"></div>
		<div class="efficacy3" data-prevent-tap="true" style = "width: 12%;"></div>
		<div class="efficacy4" data-prevent-tap="true" style = "width: 12%;"></div>
		<div class="efficacy5" data-prevent-tap="true" style = "width: 12%;"></div>
		<div class="efficacy6" data-prevent-tap="true" style = "width: 12%;"></div>
		<div class="efficacy7" data-prevent-tap="true" style = "width: 12%;"></div>
		`);

		$('.top-menu .efficacy1').on('click', function() {
			slideTo(0)
		})

		$('.top-menu .efficacy2').on('click', function() {
			slideTo(16)
		})

		$('.top-menu .efficacy3').on('click', function() {
			slideTo(4)
		})

		$('.top-menu .efficacy4').on('click', function() {
			slideTo(19)
		})

		$('.top-menu .efficacy5').on('click', function() {
			slideTo(1)
		})

		$('.top-menu .efficacy6').on('click', function() {
			slideTo(9)
		})
		$('.top-menu .efficacy7').on('click', function() {
			slideTo(12)
		})
	}
	

	

	$('#nexNav').on('click', function(){
		slideTo(16);
	})

	$('#nexNav1').on('click', function(){
		slideTo(19);
	})

	
	$('#nexNav2').on('click', function(){
		slideTo(9);
	})

	$('#nexNav3').on('click', function(){
		slideTo(12);
	})
	
	$('#nexNav3').on('click', function(){
		slideTo(12);
	})
	$('#nexNav5').on('click', function(){
		slideTo(4);
	
	})
	$('#nexNav6').on('click', function(){
		slideTo(1);
	
	})
	
	

	$('#preNav').on('click', function(){
		slideTo(16);
	})

	$('#preNav1').on('click', function(){
		slideTo(19);
	})
	
	$('#preNav2').on('click', function(){
		slideTo(1);
	})

	$('#preNav3').on('click', function(){
		slideTo(9);
	})

	$('#preNav4').on('click', function(){
		slideTo(0);
	})
	$('#preNav5').on('click', function(){
		slideTo(4);
	})

	$('#sd2').on('click', function(){
		slideTo(3);
	})

	$('#sd4').on('click', function(){
		slideTo(2);
	})

	
	$('#sd3').on('click', function(){
		slideTo(15);
	})
	
	$('#sd5').on('click', function(){
		slideTo(10);
	})
	

	

	
});

