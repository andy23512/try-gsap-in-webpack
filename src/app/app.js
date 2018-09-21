import TweenMax from '../../node_modules/gsap/TweenMax.js';
import '../../node_modules/gsap/ScrollToPlugin.js';

window.onload = function () {
  TweenMax.to(window, 1, {
    scrollTo: {
      y: 500
    }
  })
}