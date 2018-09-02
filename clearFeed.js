function rem() {
    let el = document.getElementById('page_wall_posts');
    const count = el.childElementCount;
    for (let i = 1; i < count - 20; i++) {
        el.childNodes[1].remove();
    }
    // return document.getElementById('page_wall_posts').childElementCount;
}

rem();