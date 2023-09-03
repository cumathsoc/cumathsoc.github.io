const getVideos = async() => {
  let url = 'http://68.233.123.145/verify?id=100996883';
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  }).then(data => {
    if (data.length == 0 || !("list" in data)) {
      return;
    }
    videos.list = data.list;
    updatePage(videos.list);
    return;
  }).catch(err => {
    console.error('Fetch error');
  });
};

const switchVideo = (index, scroll) => {
  let video = videos.list[index];
  document.getElementById('video-title').innerHTML = video.title;
  document.getElementById('video-desc').innerHTML = video.desc;
  document.getElementById('video-iframe').src = 'https://www.youtube-nocookie.com/embed/' + video.videoId + "?origin='cumathsoc.ca'";
  if (scroll) {
    document.getElementById('display-video').scrollIntoView(true);
  }
};

const getListFmt = (list) => {
  return list.map((item, index, list) => {
    return "<p class = 'video-item' onclick=switchVideo(" + index + ',true)>' + item.title + '</p>'; //onclick and pass videoid
  }).join('');
};

const updatePage = (list) => {
  console.log(list);
  document.getElementById('latest-video-title').innerHTML = list[0].title;
  switchVideo(0, false);
  document.getElementById('list-videos').innerHTML = getListFmt(list);
};
