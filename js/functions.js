function convertHex(e, t) {
    return e = e.replace("#", ""), r = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16), b = parseInt(e.substring(4, 6), 16), result = "rgba(" + r + ", " + g + ", " + b + ", " + t + ")", result
}! function(o) {
    "use strict";
    o(document).on("ready", function() {
        var e, t, a, s, i;
        n(), o("*[data-pattern-overlay-darkness-opacity]").each(function() {
                var e = o(this).data("pattern-overlay-darkness-opacity");
                o(this).css("background-color", convertHex("#000000", e))
            }), o("*[data-pattern-overlay-background-image]").each(function() {
                "none" == o(this).data("pattern-overlay-background-image") ? o(this).css("background-image", "none") : "yes" == o(this).data("pattern-overlay-background-image") && o(this).css("background-image")
            }), o("*[data-remove-pattern-overlay]").each(function() {
                "yes" == o(this).data("remove-pattern-overlay") && o(this).css("background", "none")
            }), o("*[data-bg-color]").each(function() {
                var e = o(this).data("bg-color");
                o(this).css("background-color", e)
            }), o("*[data-bg-color-opacity]").each(function() {
                var e = o(this).data("bg-color-opacity"),
                    t = o(this).css("background-color"),
                    a = t.replace("rgb", "rgba").replace(")", ", " + e + ")");
                o(this).css("background-color", a)
            }), o("*[data-bg-img]").each(function() {
                var e = o(this).data("bg-img");
                o(this).css("background-image", "url('" + e + "')")
            }), o("*[data-parallax-bg-img]").each(function() {
                var e = o(this).data("parallax-bg-img");
                o(this).css("background-image", "url('./images/files/parallax-bg/" + e + "')")
            }), l(), o(".img-bg").each(function() {
                var e = o(this),
                    t = e.find("img").attr("src");
                if (e.parent(".section-image").length) e.css("background-image", "url('" + t + "')");
                else {
                    e.prepend("<div class='bg-element'></div>");
                    var a = e.find(".bg-element");
                    a.css("background-image", "url('" + t + "')")
                }
                e.find("img").css({
                    opacity: 0,
                    visibility: "hidden"
                })
            }), o("#full-container").fitVids(), o(".video-background").each(function() {
                o(this).YTPlayer({
                    mute: !1,
                    autoPlay: !0,
                    opacity: 1,
                    containment: ".video-background",
                    showControls: !1,
                    startAt: 0,
                    addRaster: !0,
                    showYTLogo: !1,
                    stopMovieOnBlur: !1
                })
            }), o(".lightbox-img").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !1
                },
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), o(".lightbox-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                },
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), o(".lightbox-iframe").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), e = o(".header-bar.sticky"), t = e.height(), a = e ? t : 0, o(".scroll-to").on("click", function(e) {
                e.preventDefault();
                var t = o(this);
                o("html, body").stop().animate({
                    scrollTop: o(t.attr("href")).offset().top - a
                }, 1200, "easeInOutExpo")
            }), s = o(".banner-parallax"), i = s.children("img:first-child").attr("src"), s.prepend("<div class='bg-element'></div>"), s.find("> .bg-element").css("background-image", "url('" + i + "')").attr("data-stellar-background-ratio", .2), o(".parallax-section").each(function() {
                var e = o(this),
                    t = e.children("img:first-child").attr("src");
                e.prepend("<div class='bg-element'></div>");
                var a = e.find("> .bg-element");
                a.css("background-image", "url('" + t + "')").attr("data-stellar-background-ratio", .2)
            }), o(".slider-choosing-course > .owl-carousel").owlCarousel({
                rtl: r,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 400,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 30,
                stagePadding: 0,
                nav: !1,
                dots: !0,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), o(".slider-our-instructors > .owl-carousel").owlCarousel({
                rtl: r,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 400,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 30,
                stagePadding: 0,
                nav: !1,
                dots: !0,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), o(".slider-clients > .owl-carousel").owlCarousel({
                items: 6,
                rtl: r,
                autoplay: 3e3,
                autoplaySpeed: 500,
                autoplayTimeout: 3e3,
                dragEndSpeed: 400,
                autoplayHoverPause: !0,
                loop: !0,
                slideBy: 1,
                margin: 30,
                stagePadding: 0,
                nav: !1,
                dots: !1,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                },
                autoHeight: !1,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), o(".slider-testimonials > .owl-carousel").owlCarousel({
                rtl: r,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 400,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 30,
                stagePadding: 0,
                nav: !1,
                dots: !0,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }),
            function() {
                o("#form-cta-subscribe-2").validate({
                    rules: {
                        cs2Name: {
                            required: !0,
                            minlength: 3
                        },
                        cs2Email: {
                            required: !0,
                            email: !0
                        },
                        cs2Course: {
                            required: !0
                        }
                    }
                });
                var e = u.data("error-msg"),
                    n = e || "Please Follow Error Messages and Complete as Required";
                o("#form-cta-subscribe-2").on("submit", function(e) {
                    if (e.isDefaultPrevented()) {
                        var t = '<i class="cs-error-icon fa fa-close"></i>' + n;
                        m(!1, t), p()
                    } else e.preventDefault(), a = o("#cs2Name").val(), s = o("#cs2Email").val(), i = o("#cs2Course").val(), o.ajax({
                        type: "POST",
                        url: "./php/cs2-process.php",
                        data: "cs2Name=" + a + "&cs2Email=" + s + "&cs2Course=" + i,
                        success: function(e) {
                            var t, a;
                            "success" == e ? (t = u.data("success-msg"), a = t || "Thank you for your submission :)", o("#form-cta-subscribe-2")[0].reset(), m(!0, '<i class="cs-success-icon fa fa-check"></i>' + a), o(".cs-notifications-content").addClass("sent"), u.css("opacity", 0), u.slideDown(300).animate({
                                opacity: 1
                            }, 300).delay(5e3).slideUp(400), o("#form-cta-subscribe-2").hasClass("redirected") && setTimeout(function() {
                                window.location.href = "thank-you-page.html"
                            }, 3e3)) : (p(), m(!1, e))
                        }
                    });
                    var a, s, i
                })
            }(), c()
    }), o(window).on("load", function() {
        a(), s(),
            function() {
                o("<div class='style-switcher'></div>").insertAfter("#full-container");
                o(".style-switcher").load("switcher.html", function() {
                    o(this).append("<img class='dp-img' src='images/files/style-switcher/img-1.jpg'>"), setTimeout(function() {
                        o(".style-switcher").addClass("show"), o(".ss-icon").toggleClass("rotating")
                    }, 2e3), o(".demos-preview li a").each(function() {
                        var t = o(this);
                        t.hover(function() {
                            var e = t.find("img").attr("src");
                            o(".dp-img").attr("src", e).toggleClass("appeared")
                        })
                    }), o(".ss-icon").on("click", function(e) {
                        e.preventDefault(), o(".style-switcher").toggleClass(""), o(this).toggleClass("rotating")
                    }), o(".switch-button").each(function() {
                        o(this).on("click", function() {
                            o(this).toggleClass("active"), o(this).next().toggleClass("active"), o(this).prev().toggleClass("active")
                        }), o(this).prev("span").on("click", function() {
                            o(this).addClass("active"), o(this).nextAll().removeClass("active")
                        }), o(this).next("span").on("click", function() {
                            o(this).addClass("active"), o(this).prev(".switch-button").addClass("active").prevAll("span:first-child").removeClass("active")
                        })
                    }), o(".list-patterns li button").each(function() {
                        o(this).on("click", function() {
                            o("body").addClass("boxed"), o(".page-width-option .switch-button").addClass("active"), o(".page-width-option .switch-button").next().addClass("active"), o(".page-width-option .switch-button").prev().removeClass("active");
                            var e = "bg-pattern-" + o(this).attr("class");
                            o("body").removeClass(function(e, t) {
                                return (t.match(/(^|\s)bg-pattern-\S+/g) || []).join(" ")
                            }), o("body").addClass(e), o(".list-patterns li button").removeClass("active"), o(this).addClass("active")
                        })
                    }), o(".page-width-option .switch-button").each(function() {
                        o("body").hasClass("boxed") && (o(this).addClass("active"), o(this).prev("span").removeClass("active"), o(this).next("span").addClass("active"), o(".list-patterns").removeClass("hidden")), o(this).on("click", function() {
                            o("body").toggleClass("boxed"), o("body").hasClass("boxed") && o("body").is("[class*='bg-pattern-']")
                        }), o(this).prev("span").on("click", function() {
                            o("body").removeClass("boxed")
                        }), o(this).next("span").on("click", function() {
                            o("body").addClass("boxed")
                        })
                    });
                    var e = document.querySelector(".style-switcher-content");
                    SimpleScrollbar.initEl(e)
                })
            }()
    }), o(window).on("resize", function() {
        n(), l(), a()
    }), o(window).on("scroll", function() {
        c(), s()
    }), o(window).on("load", function() {
        o(window).on("scroll", function() {})
    });
    (o = jQuery.noConflict())(window), o(this);
    var e = o("body");

    function n() {
        jRespond([{
            label: "smallest",
            enter: 0,
            exit: 479
        }, {
            label: "handheld",
            enter: 480,
            exit: 767
        }, {
            label: "tablet",
            enter: 768,
            exit: 991
        }, {
            label: "laptop",
            enter: 992,
            exit: 1199
        }, {
            label: "desktop",
            enter: 1200,
            exit: 1e4
        }]).addFunc([{
            breakpoint: "desktop",
            enter: function() {
                e.addClass("device-lg")
            },
            exit: function() {
                e.removeClass("device-lg")
            }
        }, {
            breakpoint: "laptop",
            enter: function() {
                e.addClass("device-md")
            },
            exit: function() {
                e.removeClass("device-md")
            }
        }, {
            breakpoint: "tablet",
            enter: function() {
                e.addClass("device-sm")
            },
            exit: function() {
                e.removeClass("device-sm")
            }
        }, {
            breakpoint: "handheld",
            enter: function() {
                e.addClass("device-xs")
            },
            exit: function() {
                e.removeClass("device-xs")
            }
        }, {
            breakpoint: "smallest",
            enter: function() {
                e.addClass("device-xxs")
            },
            exit: function() {
                e.removeClass("device-xxs")
            }
        }])
    }

    function l() {
        o(".fullscreen, #home-header, #home-banner").css("height", o(window).height()), o("#banner.fullscreen").css("height", o(window).height())
    }
    o(".banner-parallax").each(function() {
        var e = o(this).data("banner-height"),
            t = o(this).find(".row > [class*='col-']");
        o(this).css("min-height", e), o(t).css("min-height", e)
    }), o("body").waitForImages({
        finished: function() {
            setTimeout(function() {
                o(".lp-content, #loading-progress .logo").css({
                    opacity: 0
                }), o("#loading-progress").addClass("hide-it"), setTimeout(function() {
                    o(".banner-parallax > .bg-element, .banner-parallax > .overlay-pattern").addClass("appeared")
                }, 1400)
            }, 0)
        },
        each: function(e, t, a) {
            var s = Math.floor((e + 1) / t * 100);
            o("#lp-counter").animate({
                $this: s
            }, {
                duration: 150,
                easing: "",
                queue: !1,
                step: function(e) {
                    var t = Math.round(e);
                    o("#lp-counter").text(t + "%")
                }
            }), o("#lp-bar").animate({
                width: s + "%"
            }, 0)
        },
        waitForAll: !0
    });
    var r, t = o("html").css("direction");

    function a() {
        o(function() {
            (e.hasClass("device-lg") || e.hasClass("device-md") || e.hasClass("device-sm")) && o.stellar({
                horizontalScrolling: !1,
                verticalOffset: 0,
                responsive: !0
            })
        })
    }

    function c() {
        o(window).scrollTop();
        var e = o(".scroll-top-icon");
        800 < o(window).scrollTop() ? e.addClass("show") : e.removeClass("show")
    }

    function s() {
        var e = o(document).height() - o(window).height(),
            t = o(document).scrollTop() / (e / 100);
        o("#scroll-progress .scroll-progress").width(t + "%"), o(".scroll-percent").text(t.toFixed(0) + "%")
    }
    r = "rtl" == t, o(".scroll-top").on("click", function(e) {
        e.preventDefault(), o("html, body").animate({
            scrollTop: 0
        }, 1200, "easeInOutExpo")
    }), o(".scroll-to").on("click", function(e) {
        e.preventDefault();
        var t = o(this);
        o("html, body").stop().animate({
            scrollTop: o(t.attr("href")).offset().top
        }, 1200, "easeInOutExpo")
    });
    var d, u = o(".cs-notifications");

    function p() {
        u.css("opacity", 0), u.slideDown(300).animate({
            opacity: 1
        }, 300), o(".cs-notifications-content").removeClass("sent")
    }

    function m(e, t) {
        var a;
        a = "shake animated", u.delay(300).addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            o(this).removeClass("shake bounce animated")
        }), u.children(".cs-notifications-content").html(t)
    }
    o("#form-cta-subscribe-1").ajaxChimp({
        callback: function(e) {
            var t = u;
            "success" === e.result ? (o("#form-cta-subscribe-1")[0].reset(), t.children(".cs-notifications-content").html('<i class="cs-success-icon fa fa-check"></i>' + e.msg).addClass("sent shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                o(this).removeClass("shake bounce animated")
            }), t.css("opacity", 0), t.slideDown(300).animate({
                opacity: 1
            }, 300).delay(8e3).slideUp(400)) : "error" === e.result && (t.children(".cs-notifications-content").html('<i class="cs-error-icon fa fa-close"></i>' + e.msg).removeClass("sent").addClass("bounce animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                o(this).removeClass("shake bounce animated")
            }), t.css("opacity", 0), t.slideDown(300).animate({
                opacity: 1
            }, 300))
        },
        url: "https://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2"
    }), o(".popup-preview").length && o("body").append("<div class='popup-preview-overlay'>"), o(".popup-btn, .popup-bg, .popup-close").on("click", function(e) {
        e.preventDefault(), o(".popup-preview").toggleClass("viewed"), o(".popup-preview-overlay").toggleClass("viewed"), o("html").toggleClass("scroll-lock")
    }), (d = jQuery).fn.countdown = function(e, o) {
        var l = d(this),
            r = {
                date: null,
                format: null
            };

        function t() {
            var e = Date.parse(r.date) / 1e3,
                t = Math.floor(d.now() / 1e3);
            e <= t && (o.call(this), clearInterval(c));
            var a = e - t,
                s = Math.floor(a / 86400);
            a -= 60 * s * 60 * 24;
            var i = Math.floor(a / 3600);
            a -= 60 * i * 60;
            var n = Math.floor(a / 60);
            a -= 60 * n, 1 == s ? l.find(".timeRefDays").text("day") : l.find(".timeRefDays").text("days"), 1 == i ? l.find(".timeRefHours").text("hour") : l.find(".timeRefHours").text("hours"), 1 == n ? l.find(".timeRefMinutes").text("minute") : l.find(".timeRefMinutes").text("minutes"), 1 == a ? l.find(".timeRefSeconds").text("second") : l.find(".timeRefSeconds").text("seconds"), "on" == r.format && (s = 2 <= String(s).length ? s : "0" + s, i = 2 <= String(i).length ? i : "0" + i, n = 2 <= String(n).length ? n : "0" + n, a = 2 <= String(a).length ? a : "0" + a), isNaN(e) ? (alert("Invalid date. Here's an example: 12 Tuesday 2016 17:30:00"), clearInterval(c)) : (l.find(".days").text(s), l.find(".hours").text(i), l.find(".minutes").text(n), l.find(".seconds").text(a))
        }
        e && d.extend(r, e), t();
        var c = setInterval(t, 1e3)
    };
    var i = o(".countdown").data("event-date");
    i && o(".countdown").countdown({
        date: i,
        format: "on"
    }, function() {
        console.log("event ended")
    }), jQuery("img.svg").each(function() {
        var a = jQuery(this),
            s = a.attr("id"),
            i = a.attr("class"),
            e = a.attr("src");
        jQuery.get(e, function(e) {
            var t = jQuery(e).find("svg");
            void 0 !== s && (t = t.attr("id", s)), void 0 !== i && (t = t.attr("class", i + " replaced-svg")), t = t.removeAttr("xmlns:a"), a.replaceWith(t)
        }, "xml")
    })
}(jQuery);