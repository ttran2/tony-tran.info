const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      console.log(entry);
      entry.target.classList.replace('fade-out', 'fade-in');
      console.log(entry);
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace('fade-in', 'fade-out');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach(el => observer.observe(el));
