// Estar Home — make the desk "home" land on the Command Center workspace
// instead of the ERPNext app launcher. Loaded on every desk page via app_include_js.

(function () {
	"use strict";

	var HOME = ["app", "command-center"]; // target workspace route
	var HOME_URL = "/app/command-center";

	function onLauncher() {
		// bare /app or the /apps launcher screen
		var path = (window.location.pathname || "").replace(/\/+$/, "");
		if (path === "/apps" || path === "/app") return true;
		try {
			var route = (frappe.get_route && frappe.get_route()) || [];
			var r0 = (route[0] || "").toLowerCase();
			if (route.length === 0) return true;
			if (r0 === "apps") return true;
		} catch (e) {}
		return false;
	}

	function goHome() {
		try {
			frappe.set_route(HOME);
		} catch (e) {
			window.location.href = HOME_URL;
		}
	}

	function maybeRedirect() {
		if (onLauncher()) goHome();
	}

	// Run once the desk is ready, on every route change, and intercept the
	// navbar home / brand button clicks.
	$(document).ready(function () {
		setTimeout(maybeRedirect, 300);

		try {
			if (frappe.router && frappe.router.on) {
				frappe.router.on("change", maybeRedirect);
			}
		} catch (e) {}

		$(document).on(
			"click",
			".navbar-brand, .app-logo, a[href='/app'], a[href='/apps'], a[href='/app/home']",
			function (e) {
				e.preventDefault();
				goHome();
			}
		);
	});
})();
