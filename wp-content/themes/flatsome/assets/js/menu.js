jQuery(document).ready(function () {
    jQuery('#ma-hamburger-btn').click(function () {
        if (jQuery('#ma-hamburger-submenu').hasClass('hidden')) {
            jQuery('#ma-hamburger-submenu').removeClass('hidden');
            jQuery('#ma-hamburger-btn').html(
                `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L20 20" stroke="#245079" stroke-width="2" stroke-linecap="square"/>
                    <path d="M2 20L20 2" stroke="#245079" stroke-width="2" stroke-linecap="square"/>
                </svg>`
            );
        } else {
            jQuery('#ma-hamburger-submenu').addClass('hidden');
            jQuery('#ma-hamburger-btn').html(
                `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H33" stroke="#245079" stroke-width="2" stroke-linecap="square"></path>
                    <path d="M1 17H33" stroke="#245079" stroke-width="2" stroke-linecap="square"></path>
                    <path d="M1 33H33" stroke="#245079" stroke-width="2" stroke-linecap="square"></path>
                </svg>`
            );
        }
    });

    jQuery('.ma-menu-mobile #ma-hamburger-btn').click(function () {
        if (jQuery('#ma-hamburger-submenu-mobile').hasClass('hidden')) {
            jQuery('#ma-hamburger-submenu-mobile').removeClass('hidden');
            jQuery('.ma-menu-mobile #ma-hamburger-btn').html(
                `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L20 20" stroke="#245079" stroke-width="2" stroke-linecap="square"/>
                    <path d="M2 20L20 2" stroke="#245079" stroke-width="2" stroke-linecap="square"/>
                </svg>`
            );
        } else {
            jQuery('#ma-hamburger-submenu-mobile').addClass('hidden');
            jQuery('.ma-menu-mobile #ma-hamburger-btn').html(
                `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H33" stroke="#245079" stroke-width="2" stroke-linecap="square"></path>
                    <path d="M1 17H33" stroke="#245079" stroke-width="2" stroke-linecap="square"></path>
                    <path d="M1 33H33" stroke="#245079" stroke-width="2" stroke-linecap="square"></path>
                </svg>`
            );
        }

        jQuery('#ma-hamburger-submenu-socials-mobile').toggleClass('hidden');
    });
});