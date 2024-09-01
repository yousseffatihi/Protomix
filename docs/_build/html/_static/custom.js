document.addEventListener("DOMContentLoaded", function () {
    var tocItems = document.querySelectorAll('li.toctree-l1 > a');
    tocItems.forEach(function(item) {
        var parentLi = item.parentNode;
        parentLi.classList.add('current');
    });
});
