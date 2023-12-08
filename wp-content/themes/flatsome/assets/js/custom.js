function scrollToAccess() {
    if (!window.location.pathname.includes('facility')) {
        window.location.href = '/facility?access=true'
    }
    var element = document.getElementById('access');
    var headerOffset = 110;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
jQuery(document).ready(function () {
    if (window.location.pathname.includes('facility') && window.location.search === '?access=true') {
        var element = document.getElementById('access');
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    if (!jQuery('#tpbr_topbar').length) {
        setTimeout(function () {
            jQuery('#tpbr_topbar').append(`
                <svg class="tpbr_topbar_close" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L20 20" stroke="#245079" stroke-width="2" stroke-linecap="square"/>
                    <path d="M2 20L20 2" stroke="#245079" stroke-width="2" stroke-linecap="square"/>
                </svg>
            `)
            jQuery('.tpbr_topbar_close').click(function () {
                jQuery('#tpbr_topbar').css('display', 'none')
            });
        }, 500);
    }

    const callToActionInterval = setInterval(function () {
        if (jQuery('#tpbr_calltoaction').length) {
            clearInterval(callToActionInterval);
            jQuery('#tpbr_calltoaction').append(`
                <svg class="tpbr_calltoaction_arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5.17294L1 9.34589" stroke="#2660AD" stroke-linecap="round"/>
                </svg>        
            `);
        }

    }, 500);

    if (!jQuery('.homepage-news .box-blog-post').length) {
        jQuery('.homepage-news').hide();
    }
    if (!jQuery('#program-carousel .program-carousel--item').length) {
        jQuery('.homepage-programs').hide();
        jQuery('.homepage-programs-content').hide();
    }

    if (window.innerWidth >= 768) {
        if (jQuery('.program-carousel--item').length >= 3) {
            jQuery("#program-carousel").attr('style', 'display: block; gap: unset;');
            jQuery('.program-carousel--item').css('max-width', '100%');
            jQuery("#program-carousel").parents('.homepage-programs-content').addClass('row-collapse row-full-width');
            jQuery("#program-carousel").addClass('owl-carousel');
            jQuery("#program-carousel").owlCarousel({
                nav: true,
                center: true,
                items: 3,
                loop: true,
                margin: 16,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                navText: [
                    `<svg width="13" height="22" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 11.5L12 21" stroke="#2660AD" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    `,
                    `<svg width="13" height="22" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L11 11.5L2 2" stroke="#2660AD" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    `
                ]
            });
        }
    } else {
        jQuery("#program-carousel").attr('style', 'display: block; gap: unset;');
        jQuery('.program-carousel--item').css('max-width', '100%');
        jQuery('.program-carousel--item').each((index, item) => {
            if (index > 2) jQuery(item).hide();
        });
    }

    jQuery('#sticky-time--close').click(function () {
        jQuery('.sticky-time').css('display', 'none');
    });

    const interval = setInterval(() => {
        const width = jQuery('.program-carousel--item').width();
        jQuery('#program-carousel .owl-prev').css('left', (width / 2) * (-1) + 10);
        jQuery('#program-carousel .owl-next').css('right', (width / 2) * (-1) + 10);

        if (jQuery('#program-carousel .owl-nav').length) clearInterval(interval);
    }, 1000);

    jQuery('.ma-news--pagination-btn').click(function () {
        const type = jQuery(this).data('type');

        const currentPage = Number(jQuery('#ma-news--current-page').text());
        const totalPage = Number(jQuery('#ma-news--total-page').text());

        if (type === 'next' && currentPage >= totalPage) return;
        if (type === 'previous' && currentPage <= 1) return;

        const page = type === 'next' ? currentPage + 1 : currentPage - 1;

        const currentUrl = `${window.location.origin}${window.location.pathname}`; // get current url without any query params
        const currentSearchParams = window.location.search;
        let newUrl = '';
        if (currentUrl.includes('/page/')) {
            const tmp = currentUrl.split('/page/');
            newUrl = `${tmp[0]}/page/${page}${currentSearchParams}`;
        } else {
            newUrl = `${currentUrl}/page/${page}${currentSearchParams}`;
        }

        window.location.href = newUrl;
    });

    jQuery('.ma-news--filter-item').click(function () {
        const categoryId = Number(jQuery(this).data('id'));

        let newUrl = '';
        const currentUrl = `${window.location.origin}${window.location.pathname}`; // get current url without any query params
        let currentUrlWithoutPagination = '';
        if (currentUrl.includes('/page/')) {
            const tmp = currentUrl.split('/page/');
            currentUrlWithoutPagination = tmp[0];
        } else {
            currentUrlWithoutPagination = currentUrl;
        }

        if (categoryId) {
            newUrl = `${currentUrlWithoutPagination}?cat=${categoryId}`;
        } else {
            newUrl = currentUrlWithoutPagination;
        }

        window.location.href = newUrl;
    });


    /**
     * Contact pages
     */
    document.addEventListener('wpcf7submit', function (event) {
        if (event.detail.contactFormId == '98') { // <=== change contact form ID if needed,  ID 98 is contact form
            const data = Object.fromEntries(event.detail.formData);
            localStorage.setItem("ma_cf7_data", JSON.stringify(data));
        } else if (event.detail.contactFormId == '981') { // <=== change contact form ID if needed, ID 981 is hidden form at confirmation page
            localStorage.removeItem('ma_cf7_data');
        }
    }, false);

    if (jQuery('.form-confirmation').length) {
        const data = JSON.parse(localStorage.getItem('ma_cf7_data'));
        if (data) {
            jQuery('.form-confirmation #contact_name').text(data['your-name']);
            jQuery('.form-confirmation #contact_email').text(data['your-email']);
            jQuery('.form-confirmation #contact_message').text(data['your-message']);

            jQuery('.wpcf7-form input[name="your-name"]').val(data['your-name']);
            jQuery('.wpcf7-form input[name="your-email"]').val(data['your-email']);
            jQuery('.wpcf7-form input[name="your-message"]').val(data['your-message']);
        }
    }
});