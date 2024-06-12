
document.addEventListener("DOMContentLoaded", function() {
    console.log('hello world');
    let cat1 = document.getElementById('cat-1')
    let cat2 = document.getElementById('cat-2')
    let catHead = document.getElementById('footer-cat')

    cat1.addEventListener('mouseover', function() {
        catHead.style.display = 'block';
    });

    cat2.addEventListener('mouseover', function() {
        catHead.style.display = 'block';
    });

    cat1.addEventListener('mouseout', function() {
        catHead.style.display = 'none';
    });

    cat2.addEventListener('mouseout', function() {
        catHead.style.display = 'none';
    });
})