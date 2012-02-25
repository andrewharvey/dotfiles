/*
  These are my custom deviations from the default Iceweasel settings.
*/

// don't let sites auto-refresh
user_pref("accessibility.blockautorefresh", true);

// don't auto-update anything as Debian takes care of that
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("browser.search.update", false);

// no alerts when downloading executables
user_pref("browser.download.manager.alertOnEXEOpen", false);

/* download UI preferences */
user_pref("browser.download.manager.closeWhenDone", true);
user_pref("browser.download.manager.showAlertOnComplete", false);
user_pref("browser.download.save_converter_index", 0);
user_pref("browser.download.useDownloadDir", false);

/* feeds */
user_pref("browser.feeds.handler.default", "bookmarks");
user_pref("browser.feeds.handlers.application", "/usr/bin/liferea-add-feed");
user_pref("browser.feeds.handlers.webservice", "");
user_pref("browser.feeds.showFirstRunUI", false);

/* don't try to fix up my URL with www. and .com */
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.alternate.prefix", "");
user_pref("browser.fixup.alternate.suffix", "");

/* don't tell Google about every site I visit */
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.provider.0.gethashURL", "");
user_pref("browser.safebrowsing.provider.0.keyURL", "");
user_pref("browser.safebrowsing.provider.0.name", "");
user_pref("browser.safebrowsing.provider.0.reportErrorURL", "");
user_pref("browser.safebrowsing.provider.0.reportGenericURL", "");
user_pref("browser.safebrowsing.provider.0.reportMalwareErrorURL", "");
user_pref("browser.safebrowsing.provider.0.reportMalwareURL", "");
user_pref("browser.safebrowsing.provider.0.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.0.reportURL", "");
user_pref("browser.safebrowsing.provider.0.updateURL", "");
user_pref("browser.safebrowsing.warning.infoURL", "");

// change default search engine to DuckDuckGo
user_pref("browser.search.selectedEngine", "DuckDuckGo HTML");

// don't send my query until I hit enter
user_pref("browser.search.suggest.enabled", false);

// don't load any restored tabs until I select them
user_pref("browser.sessionstore.restore_on_demand", true);

// use about:blank as the homepage
user_pref("browser.startup.homepage", "about:blank");

// show me the full URL in the URL bar
user_pref("browser.urlbar.trimURLs", false);

// don't let JavaScript code mess with Mozilla's windows/UI
user_pref("browser.jsannoyances.disabled", true);

// limit total number of popup windows to span automatically
user_pref("dom.popup_maximum", 3);

// let middlemouse scroll
user_pref("general.autoScroll", true);

// save cookies just for the session -- overidden by a whitelist
user_pref("network.cookie.lifetimePolicy", 2);

// I only use English so disable IDN
user_pref("network.enableIDN", false);

/* use HTTP/1.1 Pipelining */
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 5);
user_pref("network.http.proxy.pipelining", true);

// never send the Referer header
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.http.sendSecureXSiteReferrer", false);

// don't fetch links unless I visit them
user_pref("network.prefetch-next", false);

// don't sugar coat file plugin paths
user_pref("plugin.expose_full_path", true);

// don't bother with OCSP
user_pref("security.OCSP.enabled", 0);

// disable webgl
user_pref("webgl.disabled", true);


/* empty out magick URLs as Debian takes care of updates and extensions, and I
   don't use services hosted my Mozilla, or other Feed services. I don't submit
   usage data. */
user_pref("app.releaseNotesURL", "");
user_pref("app.support.baseURL", "")
user_pref("app.update.url", "");;
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.dictionaries.download.url", "");
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("browser.search.searchEnginesURL", "");

user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");
user_pref("extensions.blocklist.url", "");
user_pref("extensions.getAddons.get.url", "");
user_pref("extensions.getAddons.search.browseURL", "");
user_pref("extensions.getAddons.search.url", "");
user_pref("extensions.getMoreThemesURL", "");
user_pref("extensions.update.url", "");
user_pref("extensions.webservice.discoverURL", "");
user_pref("pfs.datasource.url", "");
user_pref("plugins.update.url", "");

user_pref("services.sync.jpake.serverURL", "");
user_pref("services.sync.privacyURL", "");
user_pref("services.sync.serverURL", "");
user_pref("services.sync.statusURL", "");
user_pref("services.sync.syncKeyHelpURL", "");
user_pref("services.sync.termsURL", "");

user_pref("toolkit.telemetry.server", "");

user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");

user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("browser.contentHandlers.types.1.title", "");
user_pref("browser.contentHandlers.types.1.uri", "");


/* deny access to certain properties accessed through JavaScript */
user_pref("capability.policy.default.Screen.availHeight", "noAccess");
user_pref("capability.policy.default.Screen.availLeft", "noAccess");
user_pref("capability.policy.default.Screen.availTop", "noAccess");
user_pref("capability.policy.default.Screen.availWidth", "noAccess");
user_pref("capability.policy.default.Screen.colorDepth", "noAccess");
user_pref("capability.policy.default.Screen.height", "noAccess");
user_pref("capability.policy.default.Screen.left", "noAccess");
user_pref("capability.policy.default.Screen.pixelDepth", "noAccess");
user_pref("capability.policy.default.Screen.top", "noAccess");
user_pref("capability.policy.default.Screen.width", "noAccess");
user_pref("capability.policy.default.Window.history", "noAccess");
user_pref("capability.policy.default.Window.innerHeight.set", "noAccess");
user_pref("capability.policy.default.Window.innerWidth.set", "noAccess");
user_pref("capability.policy.default.Window.moveBy", "noAccess");
user_pref("capability.policy.default.Window.moveTo", "noAccess");
user_pref("capability.policy.default.Window.outerHeight.set", "noAccess");
user_pref("capability.policy.default.Window.outerWidth.set", "noAccess");
user_pref("capability.policy.default.Window.resizeBy", "noAccess");
user_pref("capability.policy.default.Window.resizeTo", "noAccess");
user_pref("capability.policy.default.Window.screenX.set", "noAccess");
user_pref("capability.policy.default.Window.screenY.set", "noAccess");
user_pref("capability.policy.default.Window.sizeToContent", "noAccess");
user_pref("capability.policy.default.Window.status", "noAccess");
