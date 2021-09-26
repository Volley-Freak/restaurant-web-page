let navMenu = document.querySelector('.main-container');
// let closeMenu = document.querySelector('#close-icon');
navMenu.addEventListener('click', navMenuClick);
// closeMenu.addEventListener('click',navMenuClose);

function navMenuClick(e) {
    let rowMenu = document.querySelector('.menus-row');
    let navMenu = document.getElementById('nav-menu')
    let showIcon = document.getElementById('show-icon');
    let closeIcon = document.querySelector('#close-icon');
    // console.log('hello');
    // console.log(navMenu.innerHTML)
    // console.log(e.target.id);
    let idName=e.target.id;

    if (idName==='show-icon') {
        rowMenu.style.display = 'flex';
        closeIcon.style.display = 'block';
        navMenu.style.display = 'none';
        // navMenu.innerHTML = '<img src="images/close.png" alt="close-menu" class="icon" id="close-icon"></img>'
    }
    else if(idName === 'close-icon'){
        console.log("test");
        rowMenu.style.display = 'none';
        navMenu.style.display='block';
        // navMenu.innerHTML = '<img src="images/nav-menu.png" alt="icon" id="show-icon">'
    }
    console.log(idName);
}