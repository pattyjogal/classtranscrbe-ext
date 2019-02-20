// On page load, change the video to be the last
// watched one.
$(document).ready(() => {
    console.log('begin')
    let index = chrome.storage.local.get('ct_last_watched_index', function(index) {
                // We got the index successfuly.
                // We load it, and click on it.
                console.log(index);
                index = index['ct_last_watched_index'];
                console.log($('.vjs-playlist-item-list'))
                $('.vjs-playlist-item-list').children().eq(index).click();
            }
        );
});
// Add a listener for when a video is played
var videos = document.querySelectorAll('video');

Array.from(videos).forEach(video => {
    video.addEventListener('play', e => {
        console.log("PLAY");
        let index = $('.vjs-playlist-item.vjs-selected').index();
        chrome.storage.local.set({
            'ct_last_watched_index': index
        });
    })
})

// Enable autoplay as well
$('video').on('ended', function () {$('.vjs-up-next').click()})
