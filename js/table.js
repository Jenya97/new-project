document.addEventListener('DOMContentLoaded', function () {
    const wrapper1 = document.querySelector('.wrapper1');
    const wrapper2 = document.querySelector('.wrapper2');

    function syncScroll(event) {
        if (event.target === wrapper1) {
            wrapper2.scrollLeft = wrapper1.scrollLeft;
        } else {
            wrapper1.scrollLeft = wrapper2.scrollLeft;
        }
    }

    wrapper1.addEventListener('scroll', syncScroll);
    wrapper2.addEventListener('scroll', syncScroll);
});
