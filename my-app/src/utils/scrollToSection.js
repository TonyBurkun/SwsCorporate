export const scrollToSection = (hash) => {

    if (hash && hash.length) {
        setTimeout(() => {
            const el = document.getElementById(hash);
            el.scrollIntoView({block: "start", behavior: "smooth"});
        }, 200)
    } else {
        console.warn('There is no hash');
    }
};