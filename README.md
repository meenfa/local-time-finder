# Local Time Finder

## Project files
- `index.html` — page structure
- `styles.css` — all styling
- `app.js` — city/time-zone lookup, live clock, recent searches
- `README.md` — instructions

## Run
Keep all files in the same folder and open `index.html` in a modern browser.
No API, backend, build step, or package installation is required.

## Notes
The app uses the browser's built-in IANA time-zone database for daylight-saving-aware clock calculations.The offline lookup is based on a built-in city/state list, not full address geocoding. For locations in states with multiple time zones, enter a specific city.
