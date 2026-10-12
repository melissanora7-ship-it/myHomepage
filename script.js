// Abschnitte sanft einblenden, sobald sie ins Bild scrollen
const elemente = document.querySelectorAll(".einblenden");

if ("IntersectionObserver" in window) {
    const beobachter = new IntersectionObserver((eintraege) => {
        eintraege.forEach((eintrag) => {
            if (eintrag.isIntersecting) {
                eintrag.target.classList.add("sichtbar");
                beobachter.unobserve(eintrag.target);
            }
        });
    }, { threshold: 0.12 });

    elemente.forEach((el) => beobachter.observe(el));
} else {
    elemente.forEach((el) => el.classList.add("sichtbar"));
}
