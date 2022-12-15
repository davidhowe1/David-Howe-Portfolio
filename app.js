
const loadingScreen = document.getElementById('loading-screen')

function fadeOutLoadingScreen() {
    loadingScreen.style.display = 'none'
}

window.addEventListener('load', () => {
    loadingScreen.classList.add('hidden')
    setTimeout(fadeOutLoadingScreen, 550)
})

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

// Fade in sections on scroll with observer

const pageSections = document.querySelectorAll('.section')

for (let i = 0; i < pageSections.length; i++) {
    let options = {
        rootMargin: "0px 0px -250px 0px",
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

function ready() {

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
};

// projects generation

const projects = [

    {
        image: 'images/laurasima-2.png',
        title: 'Photography Portfolio',
        description: 'Photography portfolio featuring a minimalist grid display and mobile/tablet reposive design. When thumbnails are clicked a larger image is opened with a description. Home page features a full screen spread with an infinite scrolling image carousel.',
        tag1: 'JavaScript',
        tag2: 'HTML5',
        tag3: 'CSS3',
        tag4: 'PHP',
        liveLink: 'https://laurasima.co.uk',
        gitHubLink: 'https://github.com/davidhowe1/Laurasima-Photography-Portfolio-'
    },

    // {
    //     image: 'images/slf-mastery-preview.png',
    //     title: 'Coaching Website',
    //     description: 'Website designed to tell the story of Usman Ali, explain his methodology and provide access to his courses and professional services. The website is fully mobile/tablet responsive and features a pop up contact form, drop down menu and element animations on scroll.',
    //     tag1: 'JavaScript',
    //     tag2: 'HTML5',
    //     tag3: 'CSS3',
    //     tag4: '',
    //     liveLink: 'http://www.slf-mastery.co.uk/',
    //     gitHubLink: 'https://github.com/davidhowe1/slfmastery'
    // },

    {
        image: 'images/fika-preview.png',
        title: 'eCommerce Website',
        description: 'Merchandise site with dynamically rendered product cards, shopping cart (toggle on mobile), incrementing buttons on cart items, total calculation and local storage to store cart items if the page is reloaded or closed.',
        tag1: 'JavaScript',
        tag2: 'HTML5',
        tag3: 'CSS3',
        tag4: '',
        liveLink: 'http://www.fikamerch.co.uk/',
        gitHubLink: 'https://github.com/davidhowe1/FIKA-merchandise-shop'
    },

    {
        image: 'images/music-player.png',
        title: 'Music Player App',
        description: 'A music playing app that allows you to play/pause audio, skip songs and select from a library of music. With this project my aim was to familiarize myself with hooks, functions, components, changing state and the basic structure of a React app.',
        tag1: 'React',
        tag2: 'HTML5',
        tag3: 'CSS3',
        tag4: '',
        liveLink: 'https://davidhowe1.github.io/ReactMusicPlayer/',
        gitHubLink: 'https://github.com/davidhowe1/ReactMusicPlayer'
    },

    {
        image: 'images/property-screener-2.png',
        title: 'Property Screening Tool',
        description: 'A front-end Javascript CRUD application to manipulate property data in Liverpool. Users can filter their search using the side panel or search bar, save and remove properties they like and sort rendered properties by ascending attributes.',
        tag1: 'JavaScript',
        tag2: 'HTML5',
        tag3: 'CSS3',
        tag4: '',
        liveLink: 'https://davidhowe1.github.io/Liverpool-Property-Screener/',
        gitHubLink: 'https://github.com/davidhowe1/Liverpool-Property-Screener'  
    },
]

htmlCode = '';

projects.forEach(function(projects) {
    htmlCode = 
    htmlCode + 

    `
    <div class="project">
        <div class="project-content-wrapper">

            <div class="project-image-container">
                <img src="${projects.image}" alt="">
            </div>

            <div class="project-description">
                
                <div class="project-description-text-wrapper">
                    <div class="project-title">
                        <h1>${projects.title}</h1>
                    </div>

                    <div class="project-text-body">
                        <p>${projects.description}
                        </p>
                    </div>

                    <div class="technologies-used">
                        <div class="tag">${projects.tag1}</div>
                        <div class="tag">${projects.tag2}</div>
                        <div class="tag">${projects.tag3}</div>
                        <div class="tag">${projects.tag4}</div>
                    </div>
                </div>

                <div class="project-button-links">
                    <a target="_blank" class="button" href="${projects.liveLink}">View Site</a>
                    <a target="_blank" class="button" href="${projects.gitHubLink}">View Code</a>
                </div>
            </div>

        </div>
    </div>
    `
});

const projectsContainer = document.querySelector('.main-projects-wrapper');
projectsContainer.insertAdjacentHTML("afterbegin", htmlCode);
ready()