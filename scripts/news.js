function creat_news_body(e) {
    let html = "<h3>" + e.title + "</h3>";
    if ("presentor" in e && e.presentor.length != 0) {
        html += "<b>Presentor:</b> " + e.presentor + "<br/>";
    }
    if ("date" in e) {
        html += "<b>Time and Date:</b> " + e.date + "<br/>";
    }
    if ("location" in e) {
        html += "<b>Location:</b> " + e.location + "<br />";
    }
    if ("calendar" in e) {
        html += "<span class='add-calendar'><b>Add to Calendar:</b> ";
        html += "<a href='" + e.calendar.google + "'><i class='fa-brands fa-google'></i></a>";
        html += "<a href='" + e.calendar.outlook + "'><i class='fa-brands fa-microsoft'></i></a>";
        html += "<a href='" + e.calendar.apple + "'><i class='fa-brands fa-apple'></i></a>";
        html += "</span><br/>";
    }
    html += e.desc;
    return html;
}

function creat_news_poster(event) {
    let html = "<div class='news-with-poster'>";
    html += "<div class='news-poster'>";
    if ("img" in event) {
      html += "<img src='" + event.img + "'>";
    }
    if ("video" in event) { //vertical video only
      html += "<video autoplay muted loop><source src = '" + event.video + "' type='" + event.media_type + "'>Your browser does not support video</video>";
    }
    html += "</div>";
    html += "<div class='news-with-poster-details'>";
    html += creat_news_body(event);
    html += "</div></div>";
    return html;
}

function creat_news_finished(event) {
  let html = "<div class='news-finished'>";
  html += "<center>";
  html += "<img src='" + event.img + "'>";
  html += "<p class = 'title'>" + event.title + "</p>";
  html += "</center>";
  html += "<p class = 'desc'>" + event.desc + "</p>";
  html += "</div>";
  return html;
}

function creat_news(event) {
    let html = "<div class='news'>";
    html += creat_news_body(event);
    html += "</div>"
    return html;
}

function creat_news_finished_video(event) {
  let html = "<div class='news-finished-video'>";
  html += "<center>";
  html += "<p class = 'title'>" + event.title + "</p>";
  html += "<video autoplay muted loop><source src = '" + event.video + "' type='" + event.media_type + "'>Your browser does not support video</video>";
  html += "</center>";
  html += "</div>";
 
    return html;
}

function setNewsMsgError() { 
    let elem_content = document.getElementById("news-content");
    let html = "<div class = 'alert-danger'>"
            + "<p><b>Error: Failed to retrieve data from the server</b></p>"
            + "<p><a href = 'https://github.com/cumathsoc/cumathsoc.github.io/issues/new?labels=bug&title=[BUG]:Failed to fetch event data&assignee=zakuarbor&body=**Link:**%20[https://cumathsoc.github.io/](https://cumathsoc.github.io/)%0A**Date%20&%20Time:**%0A'>Please notify our staff</p>"
            + "</div>";
    elem_content.innerHTML = html;
}

function populateEvents(events) {
    let html = "";
    for (const event of events) {
        console.log(event.type);
        if (event.type == "news") {
            html += creat_news(event);
        }
        else if (event.type == "news-poster") {
            html += creat_news_poster(event);
        }
        else if (event.type == "news-finished") {
          html += creat_news_finished(event);
        }
        else if (event.type == "news-video") {
          html += creat_news_finished_video(event);
        }
        else if (event.type == "slideshow") {
          html += creat_slideshow(event); //defined in gallery.js
        }
    }
    console.log(html);
    let elem_content = document.getElementById("news-content");
    elem_content.innerHTML = html;
    console.log("test");
}

async function fetchEvents(url) {
    options = {};
    if (url.length == 0) {
        url = "https://raw.githubusercontent.com/cumathsoc/cumathsoc.github.io/main/events.json";
    }
    else {
        options = {"mode": "cors", headers: {
            'Access-Control-Allow-Origin':'*'
          }}
    }
    try {
        await fetch(url, options).then((res) => {
            console.log(res)
            if (!(res.ok)) {
                    setNewsMsgError();
                    return false;
            }
            return res.json();
        }).then((data) => {
            if (!("events" in data)) {
                setNewsMsgError();
                return false;
            }
            populateEvents(data.events);
        });
    } catch (e) {
        setNewsMsgError();
    }
}
