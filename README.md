# Dalfilo Creative Hub

Static web app for the Dalfilo ADV creative production pipeline.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

## Current scope

- Production pipeline snapshot from the ADV Google Sheet
- Row-level visual upload saved in browser local storage
- Status, owner and notes editing
- Visual library
- Format scorecard and production analytics
- JSON and CSV export

## Next step

Connect Google Sheets / Drive as a shared backend so status and visuals are synchronized across the team.

## Important: data safety (no backend, browser-only storage)

All data (visuals, notes, performance, imports) lives only in this one browser's local storage — there is no server and no automatic backup. To avoid ever losing data:

- Keep Creative Hub open in **one browser tab/window at a time**. If you open a second tab and make changes in both, the app now detects the conflict and blocks the older tab's save with a warning instead of silently overwriting the newer data — but it's still best to avoid the situation entirely.
- Export a **JSON backup** (the "JSON" button) periodically, especially after a big upload session.
- If the app ever shows a warning that a save was blocked or storage is full, follow the on-screen instructions (reload the page, or export a backup and free up space) before continuing.
- A small **"Spazio usato" indicator** in the bottom-left of the sidebar shows an estimate of how much of the browser's storage is used, so you can see if you're getting close to the limit before it becomes a problem. It turns orange around 70% and red above 90% of a conservative 5 MB estimate (actual browser limits are often higher, but this keeps the warning conservative).
