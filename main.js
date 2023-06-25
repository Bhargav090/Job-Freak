document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link');
    const divs = document.querySelectorAll('.s_div2 > div');

    divs.forEach((div) => {
        if (div.id === 'homee') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);

            divs.forEach((div) => {
                if (div.id === targetId) {
                    div.style.display = 'block';
                } else {
                    div.style.display = 'none';
                }
            });
        });
    });
});