/* Highlight */
(function (hljs) {
  hljs.initHighlightingOnLoad();
})(hljs);

/*
The document$ observable is exposed no matter if instant loading is enabled or not, 
and will run on the initial document load and on every document load triggered by instant loading.

This method is used to load following modules on page load
1) CookiesPage from cookie-page.js
2) CookieBanner from cookie-banner.js
3) Run inline Javascript for cookie


*/
document$.subscribe(function () {
  /* Inline script to show the cookie banner as soon as possible,
  to avoid a high cumulative layout shift (CLS) score https://web.dev/cls/ */

  /* If cookie policy changes and/or the user preferences object format needs to
   * change, bump this version up afterwards. The user should then be shown the
   * banner again to consent to the new policy.
   *
   * Note that because isValidCookieConsent checks that the version in the user's
   * cookie is equal to or greater than this number, you should be careful to
   * check backwards compatibility when changing the object format.
   *
   */
  window.GDS_CONSENT_COOKIE_VERSION = 1;
  (function () {
    /** Check the cookie preferences object.
     *
     * If the consent object is not present, malformed, or incorrect version,
     * returns false, otherwise returns true.
     *
     * This is also duplicated in cookie-functions.js - the two need to be kept in sync
     */
    function isValidConsentCookie(options) {
      return options && options.version >= window.GDS_CONSENT_COOKIE_VERSION;
    }
    // Don't show the banner on the cookies page
    if (window.location.pathname !== "/Cookies/") {
      // Show the banner if there is no consent cookie or if it is outdated
      var currentConsentCookie = document.cookie.match(
        new RegExp("(^| )mod_digital_standards_cookies_policy=([^;]+)")
      );
      if (
        !currentConsentCookie ||
        !isValidConsentCookie(JSON.parse(currentConsentCookie[2]))
      ) {
        var cookieBanner = document.querySelector(
          "[data-module='govuk-cookie-banner']"
        );
        cookieBanner.removeAttribute("hidden");
      }
    }
  })();

  window.GOVUK = window.GOVUK || {};
  window.GOVUK.Modules = window.GOVUK.Modules || {};

  var elementPage = document.querySelector('[data-module="app-cookies-page"]');
  var modulePage = new GOVUK.Modules["CookiesPage"]();
  modulePage.init(elementPage);

  var elementBanner = document.querySelector(
    '[data-module="govuk-cookie-banner"]'
  );
  var moduleBanner = new GOVUK.Modules["CookieBanner"]();
  moduleBanner.init(elementBanner);

  var currentConsentCookie = getConsentCookie();
  if (currentConsentCookie && isValidConsentCookie(currentConsentCookie)) {
    if (!isMyScriptLoaded("_gtag") && currentConsentCookie.analytics) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = "true";
      s.src = "https://www.googletagmanager.com/gtag/js?id=G-6N0XE081FE";
      s.id = "_gtag";
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
  }
});
