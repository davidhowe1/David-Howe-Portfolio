
const heroText = document.querySelector('.hero-text-banner .text-container')
const heroButtons = document.querySelector('.hero-button-container')

window.addEventListener('load', () => {
    heroText.classList.add('animated')
    setTimeout(()=> {
        heroButtons.classList.add('animated')
    }, 500 )
})

const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuCloseButton = document.querySelector('.close-menu span h1')
const mobileMenuOpenButton = document.querySelector('.burger-menu')
const darkenedBackground = document.querySelector('.darkened-background')

mobileMenuOpenButton.addEventListener('click', () => {
    showMobileMenu()
})

function showMobileMenu() {
    mobileMenu.classList.add('visible')
    darkenedBackground.classList.add('visible')
    setTimeout(fadeInLinks, 350)
}

mobileMenuCloseButton.addEventListener('click', () => {
    hideMobileMenu()
})

darkenedBackground.addEventListener('click', () => {
    hideMobileMenu()
})

function hideMobileMenu() {
    mobileMenu.classList.remove('visible')
    darkenedBackground.classList.remove('visible')
    fadeOutLinks()
}

const menuItems = document.querySelectorAll('.mobile-menu ul li')

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        hideMobileMenu()
    })
}

const menuItemsArr = [...menuItems]

function fadeInLinks() {
    for (let i = 0; i < menuItemsArr.length; i++) {
        setTimeout(function() {
            menuItemsArr[i].classList.add('visible')
        }, 100 * i)
    }
}

function fadeOutLinks() {
    for (let i = 0; i < menuItemsArr.length; i++) {
        menuItemsArr[i].classList.remove('visible')
    }
}

/* Theme toggle script */

const darkModeToggleButton = document.querySelector('#switch')
const darkModeToggleButtonFooter = document.querySelector('#switch2')
const pageThemeToggleButtons = [darkModeToggleButton, darkModeToggleButtonFooter]

for (let i = 0; i < pageThemeToggleButtons.length; i++) {
    pageThemeToggleButtons[i].addEventListener('click', () => {
        togglePageTheme()
    })
}

const pageTheme = document.querySelector('#theme-link')

function togglePageTheme() {
    if ( pageTheme.getAttribute("href") == "styles-light.css" ) {
        setDarkThemeAsDefault()
    } else {
        setLightThemeAsDefault()
    }
}

let toggleThemeTextMobile = document.querySelector('.toggle-lighting-mode-mobile p')
let toggleThemeTextDesktop = document.querySelector('.toggle-lighting-mode p')

function setDarkThemeAsDefault() {
    pageTheme.href = "styles-dark.css"
    localStorage.setItem('Theme', "styles-dark.css")
    toggleThemeTextMobile.textContent = 'Light Mode'
    toggleThemeTextDesktop.textContent = 'Light Mode'
}

function setLightThemeAsDefault() {
    pageTheme.href = "styles-light.css"
    localStorage.setItem('Theme', "styles-light.css")
    toggleThemeTextMobile.textContent = 'Dark Mode'
    toggleThemeTextDesktop.textContent = 'Dark Mode'
}

if ( localStorage.getItem('Theme') === 'styles-dark.css' ) { 
    setDarkThemeAsDefault()
    darkModeToggleButton.checked = true
    darkModeToggleButtonFooter.checked = true
} else {
    setLightThemeAsDefault()
    darkModeToggleButton.checked = false
    darkModeToggleButtonFooter.checked = false
}

const pageSections = document.querySelectorAll('.section')

for (let i = 0; i < pageSections.length; i++) {
    let options = {
        rootMargin: "0px 0px -400px 0px",
        threshold: 0
    }
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if ( entry.isIntersecting ) {
                pageSections[i].classList.add('active')
            } else {
                pageSections[i].classList.remove('active')
            }
        })
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(pageSections[i])
}

const isTouchDevice = ('ontouchstart' in document.documentElement)
const portfolioImages = document.querySelectorAll('.project')

if ( isTouchDevice == true ) {

    for ( let i = 0; i < portfolioImages.length; i++) {

        let options = {
            rootMargin: "0px 0px -500px 0px",
            threshold: 0
        }

        const callback = (entries, observer ) => {
            entries.forEach(entry => {
                if ( entry.isIntersecting ) {
                    portfolioImages[i].classList.add('active')
                } else { 
                    portfolioImages[i].classList.remove('active')
                }
            })
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(portfolioImages[i])
    }
}

const githubLink = document.querySelector('footer .links')
const footerEmailLink = document.querySelector('footer .email-wrapper')

function revealFooterLinksOnHover(element) {
    element.addEventListener('mouseover', () => {
        element.classList.add('active')
    })
    
    element.addEventListener('mouseout', () => {
        element.classList.remove('active')
    })
}

revealFooterLinksOnHover(githubLink)
revealFooterLinksOnHover(footerEmailLink)