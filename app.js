function navSlide () {

    const navMenu = document.querySelector('.nav-menu')
    const hamburberBtn = document.querySelector('.hamburger-btn')
    const body = document.querySelector('body')
    let navMenuActive = false


    hamburberBtn.classList.add('fa-bars')
    
    hamburberBtn.addEventListener('click', () => {

        navMenu.classList.toggle('active')
        navMenuActive = !navMenuActive
        
        if (navMenuActive) {

            hamburberBtn.classList.add('fa-times')
            hamburberBtn.classList.remove('fa-bars')
            body.classList.add('active')

        } else {

            hamburberBtn.classList.add('fa-bars')
            hamburberBtn.classList.remove('fa-times')
            body.classList.remove('active')

        }

    })


}

navSlide()