let dropdownToggler = document.getElementById('dropdown-toggler');
let navItems = document.getElementsByClassName('nav-item');
let navItemsDisplayed = false;

function navItemsDisplayer () {
    if (navItemsDisplayed === false) {
        for (let item of navItems) {
            item.style.display = "block";
            navItemsDisplayed = true;
            dropdownToggler.setAttribute("src", 'assets/cross.png');
            dropdownToggler.style.transform = "rotate(180deg)";
            dropdownToggler.setAttribute("class", 'dropdown-rotate');
        }
    }

    else {
        for (let item of navItems) {
            item.style.display = "none";
            navItemsDisplayed = false;
            dropdownToggler.setAttribute("src", 'assets/dropdown.png');
            dropdownToggler.removeAttribute("class", 'dropdown-rotate');
        }
    }
}

dropdownToggler.addEventListener('click', navItemsDisplayer );
