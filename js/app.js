document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.page-nav-toggle');
    const nav = document.querySelector('.page-nav-list');

    const mobile = nav.cloneNode(true);
    document.body.appendChild(mobile);

    document.body.appendChild(btn);

    mobile.classList.remove('page-nav-list');
    mobile.classList.add('mobile-nav-list');

    btn.addEventListener('click', function () {
        document.body.classList.toggle('show-menu');
    })


});
