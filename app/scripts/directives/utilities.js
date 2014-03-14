'use strict';

angular.module('flatApp')
    .directive('panel', function ($window, $timeout) {
        return {
            restrict: 'EA',
            scope:{
                image: "@",
                size: "@",
                attachment:"@",
                position:"@",
                master: '@'
            },
            link: function (scope, element, attrs) {

                scope.position = scope.position ? scope.position : 'center center';
                scope.size = scope.size ? scope.size : 'cover';
                scope.attachment = scope.attachment ? scope.attachment : 'scroll';
                scope.panel = scope.$eval(attrs.panel);

                attrs.$observe('image', function(newVal){
//                    window.console.log(newVal);
                });

//                if(attrs.color){
//                    element.css({'background-color': attrs.color});
//                }


                var setImage = function(){
                    if(!scope.image){
                        return null;
                    }
                    element.css({
                        'background-image': 'url(' + scope.image + ')',
                        'background-size': scope.size,
                        'background-position': scope.position,
                        'background-attachment': scope.attachment,
                        'background-repeat': 'no-repeat'
                    });
                };

                var fillScreen = function(){
                    var panel = scope.$eval(attrs.panel);
                    if($(window).width() <= 568 && panel > 1){
                        panel = panel * 2;
                    }

                    var w = $(window).width() * panel;
                    var h = $(window).height();

                    element.css({
                        'min-height': scope.h + 'px',
                        'width': w,
                        'height': h
                    })
                };

                attrs.$observe(attrs.panel, function(newVal){
                    if(newVal){
                        fillScreen();
                    }
                });

                $( window ).bind('resize', function() {
                    fillScreen();
                });

                function scroll(scrollObj){
                    $("body").animate(scrollObj, 400, 'swing', function(){
//                        window.console.log('scroll call back');
                    });
                }

                fillScreen();
                setImage();

            }
        }
    })
    
    .directive('blink', function(){
        return function(scope, elem, attrs){
            attrs.$observe('blink', function(newVal){

                if(newVal !== 'false'){

                }
            });
        }
    })

		.directive('magnify', function() {
			return {
				restrict: 'EA',
				link: function (scope, element, attrs) {

					// ADD 'OFFSET' ATTRIBUTE SO THAT WHEN MOUSE IS WITHIN EDGE'S OFFSET AREA,
					// MAGNIFIED IMAGE STAYS POSITIONED AT CONTAINER EDGE

					// Checks for presence of 'magnify' attribute, and number indicating ratio value (container:background image)
					if (attrs.magnify != null) {
						scope.magnify = parseInt(attrs.magnify);

						// Checks that image src is present
						if (attrs.img != null) {

							// Create new DOM Image(), attaches src value from 'img' attribute
							scope.img = new Image();
							scope.img.src = attrs.img;

							// Gets calculated dimensions
							scope.getDimensions = function() {
								scope.a = element[0].offsetWidth;						// container width
								scope.b = element[0].offsetHeight;					// container height
								scope.img_a = scope.img.width;							// image's actual width
								scope.img_b = scope.img.height;							// image's actual height
								scope.img_r = (scope.img_a / scope.img_b);	// image aspect ratio, W:H
								scope.d = (scope.b * scope.magnify);				// magnified image height
								scope.c = (scope.d * scope.img_r);					// magnified image width
							};

							// Sees where element is, relative to page
							scope.getElemPageOffset = function() {
								scope.pageTop = element.offset().top;
								scope.pageLeft = element.offset().left;
							};

							// Gets mouse's coordinates, sets them relative to container's upper-left corner, e.g. (0,0),
							// then scales them to image's dimensions (i.e. X @ 50% of container W : X @ 50% of image W)
							scope.getMouseCoords = function() {
								scope.mouseX = (event.pageX - scope.pageLeft) * ((scope.c - scope.a) / scope.a);	// mouse's adjusted x
								scope.mouseY = (event.pageY - scope.pageTop) * ((scope.d - scope.b) / scope.b);		// mouse's adjusted y
							};

							// Hides magnified image until moused over
							element.css({
								'opacity': '0'
							});

							// Updates container's position relative to page
							element.on('scroll', function() {
								scope.getElemPageOffset();
							});

							// Shows magnified image when moused over, positioned relative to adjusted mouse coordinates
							element.on('mouseover', function() {
								scope.getDimensions();
								scope.getElemPageOffset();

								element.css({
									'opacity': 1,
//									'transition-property': 'opacity',
									'transition': 'opacity 1s ease-in-out',
									'-moz-transition': 'opacity 1s ease-in-out',
									'-webkit-transition': 'opacity 1s ease-in-out',
									'background-image': 'url(' + scope.img.src + ')',
									'background-repeat': 'no-repeat',
									'background-size': scope.c + 'px ' + scope.d + 'px',
									'background-position': scope.lgCoordX + 'px ' + scope.lgCoordY + 'px'
								});
							});

							// Fades magnified image out
							element.on('mouseout', function() {
								element.css({
									'opacity': 0,
									'transition': 'opacity .55s ease-in-out',
									'-moz-transition': 'opacity .55s ease-in-out',
									'-webkit-transition': 'opacity .55s ease-in-out'
								});
							});

							// Magnified image repositions as mouse moves over container
							element.on('mousemove', function() {
								scope.getMouseCoords();

								// Upper-left-hand coordinates for lg.img, moved proportionally with mouse over container
								scope.lgCoordX = -(scope.mouseX);
								scope.lgCoordY = -(scope.mouseY);
								element.css({
									'background-position': scope.lgCoordX + 'px ' + scope.lgCoordY + 'px'
								})
							});
						}
						// Doesn't do anything if 'img' attribute is missing
						else {
							return false;
						}
					}
					// Doesn't do anything if 'magnify' attribute is missing
					else {
						return false;
					}
				}
			}
		})

    .directive('backgroundImg', function () {
        return function (scope, element, attrs) {
            attrs.$observe('backgroundImg', function(value) {
                if(!attrs.position) {
                    scope.position = 'center center';
                }
                else {
                    scope.position = attrs.position;
                }
                if(!attrs.attachment) {
                    scope.attachment = 'scroll';
                }
                else {
                    scope.attachment = attrs.attachment;
                }
                if (attrs.color) {
                    var colorRgb = attrs.color;
                    var regExp = /\(([^)]+)\)/;
                    var rgbValues = regExp.exec(colorRgb);
                    //rgbValues[1] contains value between rgba() parentheses
                    var splitRegExp = /\,/;
                    var rgb = rgbValues[1].split(splitRegExp);
                    var luma = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]; // per ITU-R BT.709

                    if (luma > 200) {
//                        console.log(colorRgb + ' requires a dark border: ' + luma);
                        $(element).addClass('light-color');
                    }
                }
//								if (attrs.zoom) {
//									scope.img_a = element.height();
//									scope.img_b = element.width();
//									console.log(scope.img_a + ', ' + scope.img_b);
////									scope.$watch(attrs.zoom, function(newValue){ // Watch given path for changes
////										console.log(newValue);
////									});
//								}
                if (!attrs.wide) {
                    scope.image = 'url(' + value + ')';
                }
                else {
                    if (window.outerHeight < window.outerWidth) {
                        scope.image = 'url(' + attrs.wide + ')';
                    }
                    else {
                        scope.image = 'url(' + value + ')';
                    }
                }
                element.css({
                    'background-image': scope.image,
                    'background-color': attrs.color,
                    'background-size': attrs.size,
                    'background-position': scope.position,
                    'background-attachment': scope.attachment,
                    'background-repeat': 'no-repeat'
                })
            });
        }
    })

;

