const scrollRevealOpt = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

// header container

ScrollReveal().reveal(".header__container h1", scrollRevealOpt);

ScrollReveal().reveal(".header__container h3", {
  ...scrollRevealOpt,
  delay: 1000,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOpt,
  delay: 2000,
});

// about Container

ScrollReveal().reveal(".about__Container .sec__header", scrollRevealOpt);
ScrollReveal().reveal(".about_Container .sec__subheader", {
  ...scrollRevealOpt,
  delay: 500,
});
ScrollReveal().reveal(".about__Container .about__flex", {
  ...scrollRevealOpt,
  delay: 1000,
});
ScrollReveal().reveal(".about__Container .btn", {
  ...scrollRevealOpt,
  delay: 1500,
});

// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOpt,
  interval: 500,
});

ScrollReveal().reveal(".discover__content", {
  ...scrollRevealOpt,
  interval: 300,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 500,
});

// journal container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOpt,
  interval: 500,
});
