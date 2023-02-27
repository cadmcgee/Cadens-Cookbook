let openNav = () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle("open")

    let button = document.getElementById("tapBox")
    button.classList.toggle("tapBoxOpen")
    
    let grayboxbutton = document.getElementById("graybox")
    grayboxbutton.classList.toggle("grayboxOpen")
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
            <a href="../index.html" class=navButton>Home</a>
            <a href="/courses/appetizers.html" class=navButton>Appetizers</a>
            <a href="/courses/breakfast.html" class=navButton>Brefeckst</a>
            <a href="/courses/lunch.html" class=navButton>Lunch</a>
            <a href="/courses/dinner.html" class=navButton>Dinner</a>
            <a href="/courses/salads.html" class=navButton>Salads</a>
            <a href="/courses/sides.html" class=navButton>Sides</a>
            <a href="/courses/desserts.html" class=navButton>Desserts</a>
            <a href="/courses/snacks.html" class=navButton>Snacks</a>
        </nav>
        </header>
        `
    }
}

// class Footer extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <footer>
//             <div class="footer-socials">
//                 Different Socials:
//                 <a href="https://linkedin.com/in/ethan-foshee/">LinkedIn</a>
//                 <a href="https://www.instagram.com/foshinithemagician/">Instagram</a>
//                 <a href="https://www.facebook.com/ethan.foshee.90/">Facebook</a>
//                 <a href="https://discord.gg/ZdzznMQ">Discord Server</a>
//             </div>
//         </footer>
//         `
//     }
// }

customElements.define('main-header', Header)
// customElements.define('main-footer', Footer)