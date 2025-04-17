document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing navigation menu...');
    
    const menu = document.getElementById('nav-menu');
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-menu');
    const overlay = document.getElementById('menu-overlay');

    console.log('Menu elements found:', {
        menu: menu,
        menuButton: menuButton,
        closeButton: closeButton,
        overlay: overlay
    });

    // Add click event listener to menu button
    menuButton.addEventListener('click', function(e) {
        console.log('Menu button clicked');
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = menu.classList.contains('-translate-x-full');
        console.log('Menu is currently:', isOpen ? 'closed' : 'open');
        
        if (isOpen) {
            console.log('Opening menu...');
            menu.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            menuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
            document.body.style.overflow = 'hidden';
        } else {
            console.log('Closing menu...');
            menu.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            menuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            document.body.style.overflow = '';
        }
        
        console.log('Menu classes after toggle:', menu.classList.toString());
    });

    // Add click event listener to close button
    closeButton.addEventListener('click', function(e) {
        console.log('Close button clicked');
        e.preventDefault();
        e.stopPropagation();
        
        menu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        menuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        document.body.style.overflow = '';
        
        console.log('Menu closed via close button');
    });

    // Add click event listener to overlay
    overlay.addEventListener('click', function(e) {
        console.log('Overlay clicked');
        e.preventDefault();
        e.stopPropagation();
        
        menu.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        menuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        document.body.style.overflow = '';
        
        console.log('Menu closed via overlay');
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !menu.classList.contains('-translate-x-full')) {
            console.log('Escape key pressed, closing menu');
            
            menu.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            menuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            document.body.style.overflow = '';
            
            console.log('Menu closed via Escape key');
        }
    });

    // Prevent menu clicks from closing the menu
    menu.addEventListener('click', function(e) {
        console.log('Clicked inside menu, stopping propagation');
        e.stopPropagation();
    });

    console.log('Navigation menu initialization complete');
});
