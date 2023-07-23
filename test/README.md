# Purpose

Whenever `events.json` and `events-archive.json` are modified, one should locally test the changes to ensure the 
page is served correctly. 

Events are retrieved from the JSON files by sending a GET request (a fetch) so to test the changes locally, one must set up a server with CORS enabled.

## Steps to Start the Server

```
npm install
node server.js
```

## Steps to Test Changes

Edit either `index.html` or `events-archive.json` to call `fetchEvents` to `http://localhost:3001/events` or `http://localhost:3001/events-archive`

**Ensure you change the call back to an empty string i..e fetchEvents("") BEFORE PUBLISHING SITE**
