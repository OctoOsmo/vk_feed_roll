function rem() {
    let el = document.getElementById('page_wall_posts');
    const count = el.childElementCount;
    for (let i = 0; i < count - 20; i++) {
        el.childNodes[0].remove();
    }
    return document.getElementById('page_wall_posts').childElementCount;
}

rem();