(function ($) {
    $(document).ready(function () {
        //Callback
        $('.call-back__button').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $('.messangers-list').slideToggle("fast");
        });

        //tabs
        $('.tabgroup > div.tab-hidden').hide();
        $('.tabgroup > div.tab-hidden:first-of-type').show();
        $('.tabs a').click(function (e) {
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('rel');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('.tab-hidden').hide();
            $(target).show();
        });

        //Menu button on click event
        $('.mobile-nav-button').on('click', function () {
            // Toggles a class on the menu button to transform the burger menu into a cross
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

            // Toggles a class that slides the menu into view on the screen
            $('.mobile-menu').toggleClass('mobile-menu--open');
            return false;
        });

        //Modal
        $(".js-open-modal").click(function (e) {
            e.preventDefault();
            dataModal = $(this).attr("data-modal");
            $("#" + dataModal).css({
                display: "block"
            });
        });

        $(".js-close-modal, .modal-bg").click(function () {
            $(".modal").css({
                display: "none"
            });
        });

        $('.section-clients__slider').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            arrows: false,
            centerMode: true,
            infinite: true,
            focusOnSelect: true,
            cssEase: 'linear',
            centerPadding: '40px',
            touchMove: true,
            responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    autoplay: false,
                    adaptiveHeight: true
                }
            }]
        });

        //scroll to #
        $('a[href^="#"').on('click', function () {

            let href = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(href).offset().top
            });
            return false;
        });

        //fixed menu
        var header = $('.header-fixed'),
            scrollPrev = 0;

        $(window).scroll(function() {
            var scrolled = $(window).scrollTop();

            if ( scrolled > 100 && scrolled > scrollPrev ) {
                header.addClass('out');
            } else {
                header.removeClass('out');
            }
            scrollPrev = scrolled;
        });

        //Mask phone
        jQuery(function ($) {
            $(".phone").mask("+7 (999) 999-99-99");
        });

        //Date
        const lang = navigator.language;
        let date = new Date();
        let dayNumber = date.getDate();
        let month = date.getMonth();
        let dayName = date.toLocaleString(lang, {weekday: 'long'});
        let monthName = date.toLocaleString(lang, {month: 'long'});
        let yearY = date.getFullYear();

        document.getElementById('year-y').innerHTML = yearY;
        document.getElementById('projects-counter__day').innerHTML = dayNumber;
        document.getElementById('projects-counter__month').innerHTML = month;
        document.getElementById('projects-counter__year').innerHTML = yearY;


        // ???????????????? ???????????????? ???? ????????????????
        const year = document.querySelector("#year");
        const days = document.querySelector("#days");
        const hours = document.querySelector("#hours");
        const minutes = document.querySelector("#minutes");
        const seconds = document.querySelector("#seconds");

        // ???????? ???????????????????? ??????????
        const deadline = new Date(`2022-12-31`);

        function updateCounter() {
            const currentTime = new Date();
            const dist = deadline - currentTime;

            // ?????????????? ?? ??????
            const toDays = Math.floor(dist / 1000 / 60 / 60 / 24);
            // ?????????????? ?? ????????, ?? ???????????? ?????????????? ?????????????? ???? 24
            const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
            // ?????????????? ?? ????????????, ?? ???????????? ?????????????? ?????????????? ???? 60
            const toMinutes = Math.floor(dist / 1000 / 60) % 60;
            // ?????????????? ?? ??????????????, ?? ???????????? ?????????????? ?????????????? ???? 60
            const toSeconds = Math.floor(dist / 1000) % 60;

            days.innerText = toDays;
            hours.innerText = toHours < 10 ? "0" + toHours : toHours;
            minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
            seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
        }

        updateCounter();

        // ?????????????????? ?????????????? ???????????? ??????????????
        setInterval(updateCounter, 1000);

        const d = document.getElementById('projects-counter__num');
        let counter = 5;

        setInterval(() => {
            counter += 5;
            d.textContent = counter;
        }, 604800000);

        const b = document.getElementById('projects-counter__num-1');
        let counterB = 2000;

        setInterval(() => {
            counterB += 5;
            b.textContent = counterB;
        }, 604800000);

        new WOW().init();
    });
})(jQuery);