//   all ------------------
function initPelzari() {
    "use strict";
    firstLoad();
    function firstLoad() {
        var chdpt = $(".content-holder").data("pagetitle");
        $(".page-subtitle span").text(chdpt);
        TweenMax.to($(".double-bounce2"), 0.9, {
            force3D: true,
            right: "0",
            delay: 0.1,
            ease: Expo.easeInOut,
            onComplete: function () {
                TweenMax.to($(".double-bounce1 , .double-bounce2"), 1.0, {
                    force3D: true,
                    left: "100%",
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        TweenMax.to($(".loader-wrap"), 1.2, {
                            force3D: true,
                            left: "100%",
                            ease: Expo.easeInOut,
                        });

                    }
                });
            }
        });
    }
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    //  swiper ------------------
    if ($(".home-half-slider").length > 0) {
        var j = new Swiper(".home-half-slider .swiper-container", {
            preloadImages: false,
            loop: true,
            grabCursor: true,
            centeredSlides: false,
            resistance: true,
            resistanceRatio: 0.6,
            speed: 2400,
            spaceBetween: 0,
            parallax: false,
            effect: "slide",
            mousewheel: false,
            init: false,
            pagination: {
                el: '.hero-slider-wrap_pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hsc-next',
                prevEl: '.hsc-prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
        });
        j.on('slideChange', function () {
            var csli = j.realIndex + 1,
                curnum = $('.hsc_counter-wrap .current');
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function () {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10
                    });
                    curnum.html("0" + csli);
                }
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut
            });
            initcustom_scroll();
        });
        var totalSlides = j.slides.length - 2;
        $('#total').html("0" + totalSlides);
        j.on("slideChangeTransitionStart", function () {
            eqwe();
        });
        j.on("slideChangeTransitionEnd", function () {
            kpsc();
        });
        var autobtn2 = $(".play-pause_slider2");
        function autoEnd2() {
            autobtn2.removeClass("auto_actslider2");
            j.autoplay.stop();
        }
        function autoStart2() {
            autobtn2.addClass("auto_actslider2");
            j.autoplay.start();
        }
        autobtn2.on("click", function () {
            if (autobtn2.hasClass("auto_actslider2")) autoEnd2();
            else autoStart2();
            return false;
        });
        setTimeout(function () {
            j.init();
            var totalSlides = j.slides.length - 2;
            $('.total').html('0' + totalSlides);
        }, 2000);
    }
    if ($(".testimonilas-carousel").length > 0) {
        var j2 = new Swiper(".testimonilas-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: false,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.tc-button-next',
                prevEl: '.tc-button-prev',
            },
            breakpoints: {

                800: {
                    slidesPerView: 1,
                },
            }
        });
    }
    function setUpCarouselSlider() {
        $('.fw-carousel .swiper-wrapper').addClass('no-horizontal-slider');
        if ($(".fw-carousel").length > 0) {
            if ($(window).width() >= 764 && j2 == undefined) {
                var totalSlides2 = $(".fw-carousel .swiper-slide").length;
                var mouseContr = $(".fw-carousel").data("mousecontrol");
                var j2 = new Swiper(".fw-carousel .swiper-container", {
                    preloadImages: false,
                    loop: false,
                    freeMode: false,
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    grabCursor: true,
                    mousewheel: mouseContr,
                    speed: 1400,
                    direction: "horizontal",
                    scrollbar: {
                        el: '.hs_init',
                        draggable: true,
                    },
                    effect: "slide",
                    pagination: {
                        el: '.fw-carousel-counter',
                        type: 'fraction',
                        renderFraction: function (currentClass) {
                            return '<span class="' + currentClass + '"></span>' + '' + '<span class="j2total">' + totalSlides2 + '</span>';
                        }
                    },
                    navigation: {
                        nextEl: '.fw-carousel-button-next',
                        prevEl: '.fw-carousel-button-prev',
                    },
                    on: {
                        resize: function () {
                            if ($(window).width() < 640) {
                                j2.update();
                            }
                        },
                    }
                });
            }
            if ($(window).width() < 640 && j2 !== undefined) {
                j2.destroy();
                j2 = undefined;
                $('.fw-carousel .swiper-wrapper').removeAttr('style').addClass('no-horizontal-slider');
                $('.swiper-slide').removeAttr('style');
            }
        }
    }
    setUpCarouselSlider();
    if ($(".det-carousel").length > 0) {
        var totalSlides = $(".det-carousel .swiper-slide ").length;
        var j4 = new Swiper(".det-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: false,
            autoHeight: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.fw-carousel-button-next',
                prevEl: '.fw-carousel-button-prev',
            },
        });
        j4.on('slideChangeTransitionEnd', function () {
            var scsc = $(".det-carousel .swiper-slide.swiper-slide-active").data("curtext"),
                $captproject = $(".det-carousel-title  h4");

            $captproject.text(scsc).shuffleLetters({});
        });
        j4.on('slideChange', function () {
            var csli = j4.realIndex + 1,
                curnum = $('#current');
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function () {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10
                    });
                    curnum.html("0" + csli);
                }
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut
            });
        });
        $('#total').html("0" + totalSlides);
    }
    if ($(".single-slider").length > 0) {
        var j2 = new Swiper(".single-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoHeight: true,
            grabCursor: true,
            mousewheel: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ss-slider-cont-next',
                prevEl: '.ss-slider-cont-prev',
            },
        });
    }
    if ($(".slideshow-container_wrap").length > 0) {
        var ms1 = new Swiper(".slideshow-container_wrap .swiper-container", {
            preloadImages: false,
            loop: true,
            speed: 1400,
            spaceBetween: 0,
            effect: "fade",
            init: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.fcwc-pagination',
                clickable: true,
            },
        });
        setTimeout(function () {
            ms1.init();
        }, 2000);
    }
    if ($(".hero-carousel ").length > 0) {
        var totalSlides3 = $(".hero-carousel .swiper-slide").length;
        var heroCarusel = new Swiper(".hero-carousel .swiper-container", {
            preloadImages: false,
            loop: true,
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 3,
            spaceBetween: 0,
            grabCursor: true,
            mousewheel: false,
            parallax: true,
            speed: 1400,
            effect: "slide",
            init: false,
            autoplay: {
                delay: 333332500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.fs-slider-wrap_pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ss-slider-cont-next',
                prevEl: '.ss-slider-cont-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2
                },
                640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                },
            }
        });
        $('.hsc_counter span').html('01');
        $('.hsc_total').html('0' + totalSlides3);
        heroCarusel.on('slideChange', function () {
            var csli2 = heroCarusel.realIndex + 1,
                curnum2 = $('.hsc_counter span');
            curnum2.html('0' + csli2);
        });
        heroCarusel.on("slideChangeTransitionStart", function () {
            eqwe();
        });
        heroCarusel.on("slideChangeTransitionEnd", function () {
            kpsc();
        });
        setTimeout(function () {
            heroCarusel.init();
        }, 2000);
    }
    if ($(".grid-carousel ").length > 0) {
        var totalSlides2 = $(".grid-carousel .swiper-slide").length;
        var gridCarusel = new Swiper(".grid-carousel .swiper-container", {
            preloadImages: true,
            loop: true,
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: true,
            mousewheel: false,
            parallax: true,
            speed: 1400,
            navigation: {
                nextEl: '.gc-slider-cont-next',
                prevEl: '.gc-slider-cont-prev',
            },
            pagination: {
                el: '.grid-carousel_pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,

                },
            }
        });
    }
    if ($(".grid-carousel2").length > 0) {
        var j2 = new Swiper(".grid-carousel2 .swiper-container", {
            preloadImages: false,
            freeMode: false,
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 0,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            navigation: {
                nextEl: '.cc-next',
                prevEl: '.cc-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".fs-slider").length > 0) {
        var mouseContr2 = $(".fs-slider").data("mousecontrol2");
        var j3 = new Swiper(".fs-slider .swiper-container", {
            preloadImages: false,
            loop: true,
            grabCursor: true,
            speed: 2000,
            spaceBetween: 0,
			init:false,
            effect: "slide",
            mousewheel: mouseContr2,
            pagination: {
                el: '.hero-slider-wrap_pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-slider-button-next',
                prevEl: '.hero-slider-button-prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            }
        });
        var autobtn2 = $(".play-pause_slider2");
        function autoEnd2() {
            autobtn2.removeClass("auto_actslider2");
            j3.autoplay.stop();
        }
        function autoStart2() {
            autobtn2.addClass("auto_actslider2");
            j3.autoplay.start();
        }
        autobtn2.on("click", function () {
            if (autobtn2.hasClass("auto_actslider2")) autoEnd2();
            else autoStart2();
            return false;
        });
        j3.on("slideChangeTransitionStart", function () {
            eqwe();
        });
        j3.on("slideChangeTransitionEnd", function () {
            kpsc();
        });
        j3.on('slideChange', function () {
            var csli = j3.realIndex + 1,
                curnum = $('.current');
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function () {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10
                    });
                    curnum.html("0" + csli);
                }
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut
            });
        });
        var totalSlides = j3.slides.length - 2;
        $('#total').html("0" + totalSlides);
        var imageSwiper = new Swiper(".hero-slider-img .swiper-container", {
            preloadImages: false,
            loop: true,
            resistance: true,
            parallax: true,
			init:false,
            effect: "slide",
        });
        j3.controller.control = imageSwiper;
        imageSwiper.controller.control = j3;
        setTimeout(function () {
            j3.init();
			imageSwiper.init();
        }, 2000);
    }
    function kpsc() {
        $(".slide-progress").css({
            width: "100%",
            transition: "width 3000ms"
        });
    }
    function eqwe() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    };
    //   lightGallery------------------
    function lightGalleryInit() {
        $(".image-popup").lightGallery({
            selector: "this",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            counter: false
        });
        var o = $(".lightgallery"),
            p = o.data("looped");
        o.lightGallery({
            selector: ".lightgallery a.popup-image",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            loop: false,
            counter: false
        });
        $('#html5-videos').lightGallery({
            selector: 'this'
        });
        $(".dynamic-gal").on('click', function () {
            var dynamicgal = eval($(this).attr("data-dynamicPath"));
            $(this).lightGallery({
                dynamic: true,
                dynamicEl: dynamicgal,
                download: false,
                loop: false,
                counter: false
            });

        });
    }
    lightGalleryInit();
    //   appear------------------
    $(".stats").appear(function () {
        $(".num").countTo();
    });
    $(".skillbar-box").appear(function () {
        $(this).find("div.skillbar-bg").each(function () {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
    // scrollToFixed------------------
    $(".fixed-column").scrollToFixed({
        minWidth: 1064,
        zIndex: 12,
        marginTop: 90,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".fixed-column").outerHeight(true);
            return a;
        }
    });
    $(".init_fx-column").scrollToFixed({
        minWidth: 1340,
        zIndex: 112,
        marginTop: 0,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".init_fx-column").outerHeight(true);
            return a;
        }
    });
    $(".scroll-fixed-column-content").scrollToFixed({
        minWidth: 1064,
        zIndex: 112,
        bottom: 0,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".scroll-fixed-column-content").outerHeight(true);
            return a;
        }
    });
    $(".fixed-column-filter").scrollToFixed({
        minWidth: 1064,
        zIndex: 112,
        marginTop: 0,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".fixed-column-filter").outerHeight(true);
            return a;
        }
    });
    //   scroll to------------------
    $(".scroll-con-sec").ctscroll();
    $(".arrowpagenav a").on("click", function (a) {
        a.preventDefault();
    });
    var whmin = $(window).outerHeight(true) - 90 + "px";
    var ssl_total = $("section.scroll_sec").length;
    $(".sc_total").text("0" + ssl_total);
    function initcustom_scroll() {
        $(".custom-scroll-link").on("click", function () {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
                var b = $(this.hash);
                b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
                if (b.length) {
                    TweenLite.to($("html,body"), 2, {
                        scrollTo: {
                            y: b.offset().top,
                            offsetY: 50,
                            autoKill: false
                        }
                    });
                    return false;
                }
            }
        });
    }
    initcustom_scroll();
    $(".to-top").on("click", function () {
        TweenLite.to(window, 2, {
            scrollTo: {
                y: 0,
                offsetY: 0,
                autoKill: false
            }
        });
    });
    var bgi2 = $(".fbgs").data("bgscr");
    var bgt2 = $(".fbgs").data("bgtex");
    $(".bg-scroll").css("background-image", "url(" + bgi2 + ")");
    $(".bg-title span").html(bgt2);
    $(".scroll-init ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "actscr-link"
    });
    //   Isotope vertical------------------
    function n() {
        if ($(".gallery-items").length) {
            var $grid = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms",
            });
            $grid.imagesLoaded(function () {
                $grid.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
                b.preventDefault();
                var c = $(this).attr("data-filter"),
                    dt2 = $(this).text();
                setTimeout(function () {
                    $grid.isotope({
                        filter: c
                    });

                }, 900);

                if ($grid > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) $(".filt-text span").text(dt2);
                else $(".filt-text  span").text(dt2).shuffleLetters({});
                $(".gallery-filters a").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                setTimeout(function () {
                    TweenLite.to(window, 0.5, {
                        scrollTo: {
                            y: $("#port-scroll"),
                            offsetY: 70,
                            autoKill: false,
                        }
                    });
                }, 100);
                if ($(window).width() < 778) {
                    hideFilters();
                }
            });
            var gat = $(".gallery-filter-active").text();
        }
        $(".gallery-items").isotope("on", "layoutComplete", function (a, b) {
            var b = a.length;
            $(".num-album span").html(b);
        });
        var b2 = $(".gallery-item").length;
        $(".all-album , .num-album span").html(b2);
    }
    n();
    //   Isotope horizontal------------------
    function inithorizontalPortfolio() {
        if ($("#portfolio_horizontal_container").length) {
            var d = $("#portfolio_horizontal_container");
            d.imagesLoaded(function () {
                var f = {
                    itemSelector: ".portfolio_item",
                    layoutMode: "packery",
                    packery: {
                        isHorizontal: true,
                        gutter: 0
                    },
                    resizable: true,
                    transformsEnabled: true,
                    transitionDuration: "700ms"
                };
                var g = {
                    itemSelector: ".portfolio_item",
                    layoutMode: "packery",
                    packery: {
                        isHorizontal: false,
                        gutter: 0
                    },
                    resizable: true,
                    transformsEnabled: true,
                    transitionDuration: "700ms"
                };
                if ($(window).width() < 778) {
                    d.isotope(g);
                    d.isotope("layout");
                    d.removeAttr('style');
                    $(".horizontal-grid-wrap").getNiceScroll().remove();
                } else {
                    d.isotope(f);
                    d.isotope("layout");
                    $(".horizontal-grid-wrap").niceScroll({
                        cursorwidth: "1px",
                        cursorborder: "none",
                        cursorborderradius: "0px",
                        cursorcolor: "#f27b24",
                        autohidemode: false,
                        touchbehavior: true,
                        bouncescroll: false,
                        scrollspeed: 120,
                        mousescrollstep: 90,
                        grabcursorenabled: true,
                        horizrailenabled: true,
                        preservenativescrolling: true,
                        cursordragontouch: true,
                        railpadding: {
                            right: 0,
                            bottom: 90
                        }
                    });
                }
                $(".horizontal-grid-wrap").on("scroll", function () {
                    var winScroll = $("#portfolio_horizontal_container").width() - $(".horizontal-grid-wrap").width();
                    var width = $(".horizontal-grid-wrap").scrollLeft();
                    var scrolled = ((width / winScroll) * 100);
                    $(".js-progress-bar").css("stroke-dashoffset", 100 - (scrolled));
                    $(".progress-bar").css({
                        height: scrolled + "%"
                    });
                });
                $(".gallery-filters").on("click", "a", function (a) {
                    a.preventDefault();
                    $(".horizontal-grid-wrap").animate({
                        scrollLeft: 0
                    }, 500);
                    var b = $(this).attr("data-filter"),
                        dt = $(this).text();
                    setTimeout(function () {
                        d.isotope({
                            filter: b
                        });
                    }, 600);
                    $(".gallery-filters a").removeClass("gallery-filter-active");
                    $(this).addClass("gallery-filter-active");
                    if (f > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) $(".filt-text span").text(dt);
                    else $(".filt-text  span").text(dt).shuffleLetters({});
                });
                d.isotope("on", "layoutComplete", function (a, b) {
                    var b = a.length,
                        numalb = $(".num-album");
                    TweenMax.to(numalb, 0.2, {
                        force3D: true,
                        y: -10,
                        opacity: 0,
                        ease: Power2.easeOut,
                        onComplete: function () {
                            TweenMax.to(numalb, 0.1, {
                                force3D: true,
                                y: 10
                            });
                            numalb.html(b);
                        }
                    });
                    TweenMax.to(numalb, 0.2, {
                        force3D: true,
                        y: 0,
                        delay: 0.3,
                        opacity: 1,
                        ease: Power2.easeOut
                    });
                });
                var j = $(".portfolio_item").length;
                $(".all-album , .num-album").html(j);
            });
            var gat = $(".gallery-filter-active").text();
            $(".filt-text span").text(gat);
        }
    }
    inithorizontalPortfolio();
    var sfb = $(".show-filter"),
        ffcons = $(".fixed-filter"),
        ffcount = $(".filter-holder.fixed-filter .count-folio"),
        ffga = $(".filter-holder.fixed-filter .gallery-filters a");
    function showFilters() {
        sfb.removeClass("unvis-filter");
        ffcons.addClass("vis-filter");
        TweenMax.to(ffcount, 0.8, {
            force3D: true,
            bottom: 0,
            delay: 0.3,
            ease: Expo.easeInOut,
            onComplete: function () {
                ffga.each(function (a) {
                    var boi = $(this);
                    setTimeout(function () {
                        TweenMax.to(boi, 0.6, {
                            force3D: false,
                            opacity: "1"
                        });
                    }, 130 * a);
                });
            }
        });
    }

    function hideFilters() {
        sfb.addClass("unvis-filter");
        ffcons.removeClass("vis-filter");
        TweenMax.to(ffga, 0.1, {
            force3D: false,
            opacity: "0"
        });
        TweenMax.to(ffcount, 0.2, {
            force3D: true,
            bottom: "-60px",

            ease: Expo.easeInOut
        });
    }
    sfb.on("click", function () {
        if ($(this).hasClass("unvis-filter")) showFilters();
        else hideFilters();
    });
    var $window = $(window);
    // Styles ------------------
    function csselem() {
        $(".fs-slider-item ").css({
            height: $(".fs-slider").outerHeight(true)
        });
        $(".hero-slider-img .swiper-slide").css({
            height: $(".hero-slider-img").outerHeight(true)
        });
        $(".height-emulator").css({
            height: $(".main-footer").outerHeight(true)
        });
        $(".horizontal-grid-wrap").css({
            height: $(".hor-content_padd").outerHeight(true)
        });
        $(".fw-carousel .swiper-container").css({
            height: $(".fw-carousel").outerHeight(true)
        });
        $(" #portfolio_horizontal_container .portfolio_item img  ").css({
            height: $(".portfolio_item").outerHeight(true)
        });
        $(".ms-item_fs").css({
            height: $(".slideshow-container_wrap").outerHeight(true)
        });
        $(".det-carousel .swiper-container").css({
            height: $(".det-carousel").outerHeight(true)
        });
        $(".home-half-slider .fs-slider-item").css({
            height: $(".home-half-slider").outerHeight(true) - 80 + "px"
        });
        $(".fixed-column-wrap").css({
            height: $window.outerHeight(true)
        });
        $(".fixed-column-filter").css({
            height: $window.outerHeight(true)
        });
    }
    csselem();
    $window.on("resize", function () {
        csselem();
        inithorizontalPortfolio();
    });
    //   accordion ------------------
    $(".accordion a.toggle").on("click", function (a) {
        a.preventDefault();
        $(".accordion a.toggle").removeClass("act-accordion");
        $(this).addClass("act-accordion");
        if ($(this).next('div.accordion-inner').is(':visible')) {
            $(this).next('div.accordion-inner').slideUp();
        } else {
            $(".accordion a.toggle").next('div.accordion-inner').slideUp();
            $(this).next('div.accordion-inner').slideToggle();
        }
    });
    function showDetails() {
        $(".det-overlay").fadeIn(400);
        TweenMax.to($(".hid-det-anim"), 0.8, {
            force3D: true,
            top: "120px",
            ease: Expo.easeInOut,
            onComplete: function () {
                TweenMax.to($(".closedet_style"), 0.6, {
                    force3D: true,
                    top: "0",
                    ease: Expo.easeInOut
                });
                TweenMax.to($(".pr-det_anim"), 1.5, {
                    force3D: true,
                    ease: Expo.easeInOut,
                    y: "0",
                    opacity: 1,
                    delay: 0.1,
                    onComplete: function () {
                        $(".fix-pr-det").addClass("viscur");
                    }
                });
            }
        });
        $(".shibtn").removeClass("unvisthum2");

    }
    function hideDetails() {
        $(".det-overlay").fadeOut(400);
        TweenMax.to($(".hid-det-anim"), 0.8, {
            force3D: true,
            top: "100%",
            ease: Expo.easeInOut,
            onComplete: function () {
                TweenMax.to($(".closedet_style"), 0.1, {
                    force3D: true,
                    top: "-60px",
                    ease: Expo.easeInOut
                });
                TweenMax.to($(".pr-det_anim"), 0.1, {
                    force3D: true,
                    y: "100px",
                    opacity: 0,
                    ease: Expo.easeInOut
                });
            }
        });
        $(".fix-pr-det").removeClass("viscur");
    }
    $(".pr-det_btn").on("click", function () {
        showDetails();
    });
    $(".act-closedet").on("click", function () {
        hideDetails();
    });
    $(".photo-info-btn").on("click", function () {
        $(".show-info_act").toggleClass("vis-phot_det");

    });
    $(".initscroll").niceScroll({
        cursorwidth: "1px",
        cursorborder: "none",
        cursorborderradius: "0px",
        cursorcolor: "#FAC820",
        zindex: "2",
        background: "#e1e1e1",
        autohidemode: false,
    });
    //   canvas------------------
    $('.hero-decor-let').rotaterator({
        fadeSpeed: 500,
        pauseSpeed: 1200
    });
    var backgroundAnimation = function () {
        var width, height, largeHeader, canvas, ctx, points, target, animateHeader = false;
        initHeader();
        initAnimation();
        addListeners();
        function initHeader() {
            width = $('.footer-decor').width();
            height = window.innerHeight;
            target = {
                x: width / 2,
                y: height / 2
            };
            canvas = document.getElementById('bg-animation');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');
            points = [];
            for (var x = 0; x < width; x = x + width / 10) {
                for (var y = 0; y < height; y = y + height / 10) {
                    var px = x + Math.random() * width / 10;
                    var py = y + Math.random() * height / 10;
                    var p = {
                        x: px,
                        originX: px,
                        y: py,
                        originY: py
                    };
                    points.push(p);
                }
            }
            for (var i = 0; i < points.length; i++) {
                var closest = [];
                var p1 = points[i];
                for (var j = 0; j < points.length; j++) {
                    var p2 = points[j]
                    if (!(p1 == p2)) {
                        var placed = false;
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] == undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }
            for (var i in points) {
                var c = new Circle(points[i], 1.5 + Math.random() * 1.5, 'rgba(0,0,0,0.1)');
                points[i].circle = c;
            }
        }
        function addListeners() {
            if (!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }
        function scrollCheck() {
            if ($(document).scrollTop() > height / 2) animateHeader = true;
            else animateHeader = false;
        }
        function resize() {
            width = $('.footer-decor').width();
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        function initAnimation() {
            animate();
            for (var i in points) {
                shiftPoint(points[i]);
            }
        }
        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (var i in points) {
                    if (Math.abs(getDistance(target, points[i])) < 2000) {
                        points[i].active = 0.2;
                        points[i].circle.active = 0.4;
                    } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle.active = 0;
                    }
                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }
        function shiftPoint(p) {
            TweenLite.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: Circ.easeInOut,
                onComplete: function () {
                    shiftPoint(p);
                }
            });
        }
        function drawLines(p) {
            if (!p.active) return;
            for (var i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(164,164,164,' + p.active + ')';
                ctx.stroke();
            }
        }
        function Circle(pos, rad, color) {
            var _this = this;
            (function () {
                _this.pos = pos || null;
                _this.radius = rad || null;
                _this.color = color || null;
            })();
            this.draw = function () {
                if (!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(164,164,164,' + _this.active + ')';
                ctx.fill();
            };
        }
        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
    }
    if ($('#bg-animation').length) {
        backgroundAnimation();
    }
    //   cursor ------------------
    $(".white-bg").on({
        mouseenter: function () {
            $(".element-item").addClass("white_blur");
        },
        mouseleave: function () {
            $(".element-item").removeClass("white_blur");
        }
    });
    $(".gallery-item").on({
        mouseenter: function () {
            $(".element-item").removeClass("white_blur");
        },
        mouseleave: function () {
            $(".element-item").addClass("white_blur");
        }
    });
    $("a , .btn ,   textarea,   input  , .leaflet-control-zoom , .aside-show_cf , .close-contact_form , .closedet_style  , .nav-button , .swiper-pagination-bullet , .to-top-btn  , .gc-slider-cont , .hsc , .ss-slider-cont , .fw_scb , .hsc_pp2 , .hsc_pp").on({
        mouseenter: function () {
            $(".element-item").addClass("elem_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("elem_hover");
        }
    });
    $("  .swiper-slide ,  #portfolio_horizontal_container").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });
    $(".swiper-slide a , .next-project-swiper-link , #portfolio_horizontal_container a").on({
        mouseenter: function () {
            $(".element-item").removeClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").addClass("slider_hover");
        }
    });
    $(".next-project-swiper-link").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_linknext");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_linknext");
        }
    });
    $(".nav-overlay , .det-overlay").on({
        mouseenter: function () {
            $(".element-item").addClass("close-icon");
        },
        mouseleave: function () {
            $(".element-item").removeClass("close-icon");
        }
    });
    //  Map------------------
    if ($("#map-single").length > 0) {
        var latlog = $('#map-single').data('latlog'),
            popupTextit = $('#map-single').data('popuptext'),
            map = L.map('map-single', {
                scrollWheelZoom: false
            }).setView(latlog, 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
        var greenIcon = L.icon({
            iconUrl: '../../static/images/logo.png',
            iconSize: [40, 40],
            popupAnchor: [0, -26]
        });
        L.marker(latlog, {
            icon: greenIcon
        }).addTo(map).bindPopup(popupTextit);
    }
     //   Video------------------	
    if ($(".video-holder-wrap").length > 0) {
        function videoint() {
            var v = $(".background-youtube-wrapper").data("vid");
            var f = $(".background-youtube-wrapper").data("mv");
            $(".background-youtube-wrapper").YTPlayer({
                fitToBackground: true,
                videoId: v,
                pauseOnScroll: true,
                mute: f,
                callback: function () {
                    var a = $(".background-youtube-wrapper").data("ytPlayer").player;
                }
            });
            var w = $(".background-vimeo").data("vim"),
                bvc = $(".background-vimeo"),
                bvmc = $(".media-container"),
                bvfc = $(".background-vimeo iframe "),
                vch = $(".video-container");
            bvc.append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
            $(".video-holder").height(bvmc.height());
            if ($(window).width() > 1024) {
                if ($(".video-holder").length > 0)
                    if (bvmc.height() / 9 * 16 > bvmc.width()) {
                        bvfc.height(bvmc.height()).width(bvmc.height() / 9 * 16);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            top: "-75px",
                            "margin-top": "0px"
                        });
                    } else {
                        bvfc.width($(window).width()).height($(window).width() / 16 * 9);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            "margin-top": -1 * $("iframe").height() / 2 + "px",
                            top: "50%"
                        });
                    }
            } else if ($(window).width() < 760) {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            } else {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            }
            vch.css("width", $(window).width() + "px");
            vch.css("height", Number(720 / 1280 * $(window).width()) + "px");
            if (vch.height() < $(window).height()) {
                vch.css("height", $(window).height() + "px");
                vch.css("width", Number(1280 / 720 * $(window).height()) + "px");
            }
        }
        videoint();
    }
    //   Blog filter ------------------
    $(".blog-btn").on("click", function () {
        $(this).parent(".blog-btn-filter").find("ul").slideToggle(500);
        return false;
    });
    //   mobile filter ------------------
    $(".act-filter , .show-filter2").on("click", function () {
        $(".init_hidden_filter").slideToggle(300);
        return false;
    });
    $(".gallery-filters a").on("click", function () {
        if ($(window).width() < 565) {
            $(".init_hidden_filter").delay(600).slideUp(300);
        }
    });
    //  menu------------------			
    $("#menu").menu();
    $(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
    $(".nav-scroll-bar-wrap").niceScroll({
        cursorwidth: "0px",
        cursorborder: "none",
        cursorborderradius: "0px",
    });
    var nbw = $(".nav-button"),
        nhw = $(".nav-holder"),
        nho = $(".nav-overlay"),
        nhd = $(".nav-holder-dec");

    function showMenu() {
        nho.fadeIn(500);
        TweenMax.to(nhd, 1.2, {
            force3D: true,
            left: "0",
            ease: Expo.easeInOut
        });
        TweenMax.to(nhw, 1.2, {
            force3D: true,
            left: "0",
            delay: 0.2,
            ease: Expo.easeInOut
        });
        nhw.removeClass("but-hol");
        nbw.addClass("cmenu");
        setTimeout(function () {
            $(".nav-title span").shuffleLetters({});
        }, 950);
    }

    function hideMenu() {
        TweenMax.to(nhw, 1.2, {
            force3D: true,
            left: "-600px",
            ease: Expo.easeInOut
        });
        TweenMax.to(nhd, 1.2, {
            force3D: true,
            left: "-600px",
            delay: 0.2,
            ease: Expo.easeInOut
        });
        nhw.addClass("but-hol");
        nbw.removeClass("cmenu");
        nho.fadeOut(500);
    }
    nbw.on("click", function () {
        if (nhw.hasClass("but-hol")) showMenu();
        else hideMenu();
    });
    nho.on("click", function () {
        hideMenu();
    });
    // Share   ------------------
    $(".share-container").share({
        networks: ['facebook', 'pinterest', 'twitter', 'linkedin', 'tumblr']
    });
    var shrcn = $(".share-container"),
        swra = $(".share-wrapper"),
        clsh = $(".close-share-btn"),
        shic = $(".share-icon"),
        ssbtn = $(".showshare");
    function showShare() {
        ssbtn.addClass("uncl-share");
        shrcn.removeClass("isShare");
        TweenMax.to(swra, 0.9, {
            force3D: false,
            width: "320px",
            ease: Expo.easeInOut,
            onComplete: function () {
                TweenMax.to(clsh, 0.4, {
                    force3D: true,
                    top: "0",
                    opacity: "1"
                });
                shic.each(function (a) {
                    var boi = $(this);
                    setTimeout(function () {
                        TweenMax.to(boi, 1.0, {
                            force3D: false,
                            opacity: "1"
                        });
                    }, 130 * a);
                });
            }
        });
    }
    function hideShare() {
        ssbtn.removeClass("uncl-share");
        shrcn.addClass("isShare");
        TweenMax.to($(".share-icon"), 1.0, {
            force3D: false,
            opacity: "0"
        });
        TweenMax.to(clsh, 0.4, {
            force3D: true,
            top: "-60px",
            opacity: "0",
            onComplete: function () {
                TweenMax.to(swra, 0.6, {
                    force3D: false,
                    delay: 0.2,
                    width: "0",
                    ease: Expo.easeInOut
                });
            }
        });
    }
    clsh.on("click", function () {
        hideShare();
    });
    ssbtn.on("click", function () {
        if ($(".share-container").hasClass("isShare")) showShare();
        else hideShare();
    });
    $(".sliding-menu a  , .grid-det-item a ").on({
        mouseenter: function () {
            $(this).shuffleLetters({});
        }
    });
	//   Contact form------------------
    var coninw = $(".contact-form-content"),
        coninbtn = $(".contact-form-btn");
    function showConInfo() {
        $(".contact-form-wrap").fadeIn(100);
        coninw.addClass("vis-coninfwrap");
        coninbtn.removeClass("isconin-btn_vis");
    }
    function hideConInfo() {
        coninw.removeClass("vis-coninfwrap");
        coninbtn.addClass("isconin-btn_vis");
        $(".contact-form-wrap").fadeOut(100);
    }
    coninbtn.on("click", function () {
        if ($(this).hasClass("isconin-btn_vis")) showConInfo();
        else hideConInfo();
    });
    $(".act-cf").on("click", function () {
        showConInfo();
    });
        $("#contactform").submit(function () {
            var a = $(this).attr("action");
            $("#message").slideUp(750, function () {
                $("#message").hide();
                $("#submit").attr("disabled", "disabled");
                $.post(a, {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val(),
                    subject: $('#subject').val(),
                    comments: $("#comments").val()
                }, function (a) {
                    document.getElementById("message").innerHTML = a;
                    $("#message").slideDown("slow");
                    $("#submit").removeAttr("disabled");
                    if (null != a.match("success")) $("#contactform").slideDown("slow");
                });
            });
            return false;
        });
        $("#contactform input, #contactform textarea").keyup(function () {
            $("#message").slideUp(300);
        });
    $(".close-cf , .contact-form-overlay").on("click", function (e) {
        e.preventDefault();
        hideConInfo();
        $("#message").slideUp(200);
        $(".custom-form").find("input[type=text], textarea").val("");
    });
    $.fn.duplicate = function (a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    var $one = $(".mm-parallax"),
        browserPrefix = "",
        usrAg = navigator.userAgent;
    if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) browserPrefix = "-webkit-";
    else if (usrAg.indexOf("Opera") > -1) browserPrefix = "-o";
    else if (usrAg.indexOf("Firefox") > -1) browserPrefix = "-moz-";
    else if (usrAg.indexOf("MSIE") > -1) browserPrefix = "-ms-";
    $(".impulse-container").mousemove(function (a) {
        var b = Math.ceil(window.innerWidth / 1.5),
            c = Math.ceil(window.innerHeight / 1.5),
            d = a.pageX - b,
            e = a.pageY - c,
            f = e / c,
            g = -(d / b),
            h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)),
            i = 10 * h;
        $one.css(browserPrefix + "transform", "rotate3d(" + f + ", " + g + ", 0, " + i + "deg)");
    });
    //   mailchimp------------------
    $("#subscribe").ajaxChimp({
        language: "eng",
        url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
    });
    $.ajaxChimp.translations.eng = {
        submit: "Submitting...",
        0: '<i class="fal fa-check"></i> We will be in touch soon!',
        1: '<i class="fal fa-exclamation-circle"></i> You must enter a valid e-mail address.',
        2: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        3: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        4: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        5: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.'
    };
}
//   load animation------------------
$.fn.duplicate = function (a, b) {
    var c = [];
    for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
    return this.pushStack(c);
};
$("<div class='page-load'><span class='pl-spinner'></span></div>").appendTo("#main");
$("<div class='pl-row'><span class='pl-row-anim'></span><span class='pl-row-anim2'></span></div>").duplicate(4).appendTo(".page-load");
function contentAnimShow() {
    $(".lg-backdrop , .lg-outer").remove();
    $(".nav-button").removeClass("cmenu");
    $(".showshare").removeClass("uncl-share");
    $(".page-load").fadeIn(1);
    $(".pl-row-anim2").each(function (index, element) {
        var tl = new TimelineLite();
        tl.to(element, 0.6, {
            force3D: true,
            bottom: "0",
            ease: Expo.easeInOut
        }, index * 0.1)
    });
    $(".pl-row-anim").each(function (index, element) {
        var tl = new TimelineLite();
        tl.to(element, 0.8, {
            force3D: true,
            bottom: "0",
            ease: Expo.easeInOut
        }, index * 0.1)
    });

    setTimeout(function () {
        $("html, body").animate({
            scrollTop: 0
        }, {
            queue: true,
            duration: 10,
        });
    }, 1000);
}

function contentAnimHide() {
    var chdpt = $(".content").data("pagetitle");
    $(".page-subtitle span").text(chdpt).shuffleLetters({
        step: 14,
        fps: 25
    });
    $(".pl-spinner").addClass("act-loader");
    setTimeout(function () {
        $(".pl-spinner").removeClass("act-loader");
        $(".page-load").removeClass("act_pl");
        $(".pl-row-anim").each(function (index, element) {
            var tl = new TimelineLite();
            tl.to(element, 0.6, {
                force3D: true,
                top: "100%",
                ease: Expo.easeInOut
            }, index * 0.1)
        });
        $(".pl-row-anim2").each(function (index, element) {
            var tl = new TimelineLite();
            tl.to(element, 0.8, {
                force3D: true,
                top: "100%",
                ease: Expo.easeInOut
            }, index * 0.1)
        });
        setTimeout(function () {
            $(".page-load").fadeOut(1);
            TweenMax.to($(".pl-row-anim , .pl-row-anim2"), 0.0, {
                force3D: true,
                bottom: "100%",
                top: "0"
            });

        }, 1200);
    }, 1300);
}
// init  Video ------------------
function initvideo() {
    var a = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (trueMobile) $("  .background-vimeo , .background-youtube-wrapper ").remove();
}
// progressBar ------------------
var $window = $(window);
$window.on("scroll", function (a) {
    var a = $(document).height();
    var b = $(window).height();
    var c = $(window).scrollTop();
    var d = c / (a - b) * 100;
    $(".progress-bar").css({
        height: d + "%"
    });
});
if ($(".element-item").length > 0) {
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.15;
    var active = false;
    var ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);

    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
}
$("<span class='folio-btn-dot'></span>").duplicate(4).appendTo(".folio-btn-item");
//   Init Ajax------------------
$(function () {
    $.coretemp({
        reloadbox: "#wrapper",
        outDuration: 700,
        inDuration: 200
    });
    readyFunctions();
    $(document).on({
        ksctbCallback: function () {
            readyFunctions();
        }
    });
});
function sendEmail(){
    console.log("Entry")
    fname = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("comments").value;
    console.log(message)
    subject = document.getElementById("subject").value;
$.post('/sendEmail', {
    name:fname,
    email:email,
    phone:phone,
    message:message,
    subject:subject
}).done(function (response) {
    console.log(response)
    if(response === "Completed"){
    console.log("Complete")
    message = document.getElementById("success_page")
    message.style.display = "block"
    }else{
        console.log("Uncomplete")
        message = document.getElementById("error_page") 
        message.style.display = "block"
    }
    });
}

function submitReview(){
    console.log("Entry")
    button = document.getElementById("btn fl-btn");
    button.style.display = "none"
    loader = document.getElementById("loader");
    loader.style.display = "block"
    fname = document.getElementById("name").value;
    review = document.getElementById("review").value;

$.post('/review', {
    name:fname,
    review:review,
}).done(function (response) {
    console.log(response)
    if(response === "Completed"){
    console.log("Complete")
    success_message = document.getElementById("success_page")
    missing_variable_message = document.getElementById("missing_variable")
    error_message = document.getElementById("error_page")
    missing_variable_message.style.display = "none"
    error_message.style.display = "none"
    success_message.style.display = "block"
    button.style.display = "block"
    loader.style.display = "none"
    }else if(response === "Empty Fields"){
        success_message = document.getElementById("success_page")
        missing_variable_message = document.getElementById("missing_variable")
        error_message = document.getElementById("error_page")
        success_message.style.display = "none"
        error_message.style.display = "none"
        missing_variable_message.style.display = "block"
        button.style.display = "block"
        loader.style.display = "none"
    }else{
        success_message = document.getElementById("success_page")
        missing_variable_message = document.getElementById("missing_variable")
        error_message = document.getElementById("error_page")
        success_message.style.display = "none"
        missing_variable_message.style.display = "none"
        error_message.style.display = "block"
        button.style.display = "block"
        loader.style.display = "none"
    }
    });
}
//   Init All Functions------------------
function readyFunctions() {
    initvideo();
    initPelzari();
}