const hambuergerButton = document.querySelector('.js-hamburger')
const navMobile = document.querySelector('.js-navigation')
const sectionContainer = document.querySelector('.js-container')

hambuergerButton.addEventListener('click', (event) => {
  hambuergerButton.classList.toggle('Header-Hamburger--close')
  navMobile.classList.toggle('Wrapper-Navigation--open')
  sectionContainer.classList.toggle('Container--Moved')
})

/**
 * Photo Gallery
 */

window.$('.js-photo-gallery').slick({
  fade: true,
  mobileFirst: true,
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.js-photo-thumbs',
  responsive: [
    {
      breakpoint: 500,
      settings: {
      }
    }
  ]
})

window.$('.js-photo-thumbs').slick({
  mobileFirst: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.js-photo-gallery',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 4
      }
    }
  ]
})

/**
 * Tabs
 */

const tabLink = document.querySelectorAll('.js-tab-link')

const activeTab = currentTab => {
  document.querySelector(`[data-tab="${currentTab}"]`).classList.add('Tab-Link--active')
  document.querySelector(`#${currentTab}`).classList.add('Tab-Content--active')
}

const desactiveTab = currentTab => {
  document.querySelector('.Tab-Content--active').classList.remove('Tab-Content--active')
  document.querySelector('.Tab-Link--active').classList.remove('Tab-Link--active')
}

tabLink.forEach(tab => {
  tab.addEventListener('click', event => {
    const currentTab = tab.dataset.tab

    desactiveTab(currentTab)
    activeTab(currentTab)
  })
})
