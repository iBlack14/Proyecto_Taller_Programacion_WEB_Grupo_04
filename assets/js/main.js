document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".hero_6");
    const counters = document.querySelectorAll(".hero_6 .h6_contadores span");

    if (!section) return;

    function animateCounters() {

        counters.forEach(counter => {

            const target = Number(counter.dataset.count);
            let current = 0;
            const duration = 1000;  //Duracion de la animacion
            const startTime = performance.now();

            function update(now) {

                const progress = Math.min((now - startTime) / duration, 1);

                current = Math.floor(progress * target);

                counter.textContent = `+${current}`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = `+${target}`;
                }
            }

            requestAnimationFrame(update);
        });
    }

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.4
    });

    observer.observe(section);

});