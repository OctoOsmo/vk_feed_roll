let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });


changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            // {code: 'let el = document.getElementById(\'page_wall_posts\');const count = el.childElementCount;for (let i = 0; i < count - 20; i++) {el.childNodes[0].remove();} console.log(document.getElementById(\'page_wall_posts\').childElementCount);'});
            {file: 'clearFeed.js'});
    });
};

