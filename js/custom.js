$(document).ready(function () {
    $("#btn-search").click(function () {
      $(".search ").addClass("search--open");
    });
    $("#search-cls").click(function () {
      $(".search ").removeClass("search--open");
    });
  
    if ($("li>a.close-top-menu").length > 0) {
          $("li>a.close-top-menu").click(function(event) {
              $(this).parent("li").closest("li.menu-item-has-children").removeClass("sub-open");
              event.stopPropagation();
          });
          $("li.menu-item-has-children").click(function(event) {
              $(this).addClass("sub-open");
              event.stopPropagation();
          });
          $("body").click(function(event) {
              $(".navbar-collapse").removeClass("show");
              $("li.menu-item-has-children").removeClass("sub-open");
              $(".btn-menu-toggler").removeClass("toggler-active");
              $(".wl-navbar-collapse").removeClass("collapse-active");
              event.stopPropagation();
          });
          $(".btn-menu-toggler").click(function(event) {
              $(".btn-menu-toggler").toggleClass("toggler-active");
              $(".wl-navbar-collapse").toggleClass("collapse-active");
              event.stopPropagation();
          });
      }
  });
 

  $(document).ready(function() {
    // Swiper: Slider
        new Swiper('.banner-container', {
            loop: true,
            nextButton: 'true',
            prevButton: 'true',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
              },
            breakpoints: {
                1920: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });
    
    $(document).ready(function() {
        // Swiper: Slider
            new Swiper('.swipper-first', {
                loop: true,
                nextButton: 'false',
                prevButton: 'false',
                slidesPerView: 5,
                paginationClickable: true,
                spaceBetween: 20,
                breakpoints: {
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1028: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            });
        });
        




  $(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper-container', {
            loop: true,
            nextButton: 'false',
            prevButton: 'false',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 20,
            breakpoints: {
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });
    


    $(document).ready(function() {
        // Swiper: Slider
            new Swiper('.swiper-containers', {
                loop: true,
                nextButton: 'false',
                prevButton: 'false',
                slidesPerView: 5,
                paginationClickable: true,
                spaceBetween: 20,
                breakpoints: {
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1028: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            });
        });
        