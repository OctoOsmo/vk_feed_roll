function clearFeed() {
    let element = document.getElementById('page_wall_posts');
    const count = element.childElementCount;
    for (let i = 1; i < count - 20; i++) {
        element.childNodes[1].remove();
    }
}

clearFeed();