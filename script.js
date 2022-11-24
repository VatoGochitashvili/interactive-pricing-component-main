'strict mode';

const views = document.querySelector('.views').querySelector('span');
const slider = document.querySelector('.slider');
const price = document.querySelector('#price').querySelector('h2');
const term = document.querySelector('#price').querySelector('p');
const checkbox = document.querySelector('#checkbox');
let number = 16;

// Changing price and views while sliding the slider
slider.addEventListener('input', function () {
  if (this.value == 3) {
    views.textContent = `$100k`;
    number = 16;
  }
  if (this.value == 1) {
    views.textContent = `$10k`;
    number = 8;
  }
  if (this.value == 2) {
    views.textContent = `$50k`;
    number = 12;
  }
  if (this.value == 4) {
    views.textContent = `$250k`;
    number = 20;
  }
  if (this.value == 5) {
    views.textContent = `$500k`;
    number = 24;
  }

  if (!checkbox.checked) price.textContent = `$${number.toFixed(2)}`;
  else price.textContent = `$${(number * 12 * 0.75).toFixed(2)}`;

  fillSlider();
});

// Change price while choosing Billing Period
checkbox.addEventListener('click', function () {
  if (!checkbox.checked) {
    price.textContent = `$${number.toFixed(2)}`;
    term.textContent = '/ month';
  } else {
    price.textContent = `$${(number * 12 * 0.75).toFixed(2)}`;
    term.textContent = '/ year';
  }
});

// fill input range while dragging slider
const fillSlider = () => {
  let filler = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  console.log(filler);
  slider.style.background = `linear-gradient(to right,
    var(--Full_Slider_Bar) 0%,
      var(--Full_Slider_Bar) ${filler}%,
      var(--Empty_Slider_Bar) ${filler}%,
      var(--Empty_Slider_Bar) 100%
      )`;
};

fillSlider();
