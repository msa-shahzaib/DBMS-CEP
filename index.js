let login = document.getElementsByClassName('login')[0]

login.addEventListener('click', function() {
    window.location.href = 'login/index.html'
})

let signup = document.getElementsByClassName('signup')[0]
signup.addEventListener('click', function(){
    window.location.href = 'signup/index.html'
})

document.addEventListener('DOMContentLoaded', () => {
    const contactHeader = document.querySelector('.contact-header');
    const contactForm = document.querySelector('.contact-form');
    const contactImages = document.querySelector('.contact-images');

    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(contactHeader);
    observer.observe(contactForm);
    observer.observe(contactImages);
});
