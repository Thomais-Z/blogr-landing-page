const productBtn = document.querySelector('.product-btn');
const productsDropdown = document.querySelector('.dropdown-products');
const arrowProducts = document.querySelector('.icon-arrow-products');

const companyBtn = document.querySelector('.company-btn');
const companyDropdown = document.querySelector('.dropdown-company');
const arrowCompany = document.querySelector('.icon-arrow-company');

const connectBtn = document.querySelector('.connect-btn');
const connectDropdown = document.querySelector('.dropdown-connect');
const arrowConnect = document.querySelector('.icon-arrow-connect');

const btnHamburger = document.querySelector('.icon-hamburger');
const btnClose = document.querySelector('.icon-close');
const mobileNav = document.querySelector('.nav-btns-container');

productBtn.addEventListener('click', function (e) {
  e.preventDefault();
  productsDropdown.classList.toggle('hidden');
  if (productsDropdown.classList.contains('hidden'))
    arrowProducts.style.transform = 'rotate(0deg)';
  if (!productsDropdown.classList.contains('hidden'))
    arrowProducts.style.transform = 'rotate(180deg)';
});

companyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  companyDropdown.classList.toggle('hidden');
  if (companyDropdown.classList.contains('hidden'))
    arrowCompany.style.transform = 'rotate(0deg)';
  if (!companyDropdown.classList.contains('hidden'))
    arrowCompany.style.transform = 'rotate(180deg)';
});

connectBtn.addEventListener('click', function (e) {
  e.preventDefault();
  connectDropdown.classList.toggle('hidden');
  if (connectDropdown.classList.contains('hidden'))
    arrowConnect.style.transform = 'rotate(0deg)';
  if (!connectDropdown.classList.contains('hidden'))
    arrowConnect.style.transform = 'rotate(180deg)';
});

btnHamburger.addEventListener('click', function () {
  mobileNav.classList.toggle('hidden-nav');
  btnHamburger.classList.toggle('hidden');
  btnClose.classList.toggle('hidden');
});

btnClose.addEventListener('click', function () {
  btnClose.classList.toggle('hidden');
  btnHamburger.classList.toggle('hidden');
  mobileNav.classList.toggle('hidden-nav');
});
