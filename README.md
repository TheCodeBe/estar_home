# Estar Home

A tiny Frappe app for **estar.v.frappe.cloud** that makes the desk **home button / app
launcher** land on the **Command Center** workspace (`/app/command-center`) instead of the
default ERPNext app-launcher grid.

It injects one client script (`app_include_js`) on the desk that:
- redirects the bare `/app` route and the `/apps` launcher to Command Center
- intercepts the navbar home / brand button click

## Install (Frappe Cloud)
1. Bench → Apps → **Add from GitHub** → this repo
2. **Deploy** the bench
3. Move the site onto the bench and **Install** `estar_home`

To change the target page, edit `HOME` / `HOME_URL` in
`estar_home/public/js/estar_home.js`.
