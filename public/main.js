// author: xuanhoadev11

const topMenu = document.getElementById('xh-top-list-menu')
const toggleMenuIcon = document.getElementById('xh-menu-toggle-icon')

document.addEventListener('click', (e) => {
    // click to toggleMenuIcon
    if(toggleMenuIcon.contains(e.target)){
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('xh-topmenu-expanded');
    }else{
    // click out side toggleMenuIcon
        if(topMenu.classList.contains('xh-topmenu-expanded')){
            topMenu.classList.remove('xh-topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
})