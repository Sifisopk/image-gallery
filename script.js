


document.getElementById('exploreBtn').addEventListener('click', async function() {
    const moreImages = [
        'img/pic11.jpg', 'img/pic12.jpg', 'img/pic13.jpg', 
        'img/pic14.jpg', 'img/pic15.jpg', 'img/pic16.jpg',
        'img/pic17.jpg', 'img/pic18.jpg','img/pic19.avif','img/pic20.avif','img/pic21.avif','img/pic22.jpg','img/pic23.avif','img/pic24.jpg','img/pic25.avif','img/pic26.jpg','img/pic27.avif','img/pic28.jpg'
    ];
    
    const gallery = document.getElementById('imageGallery');
    this.disabled = true;
    this.textContent = 'Loading...';
    
    // Load images sequentially to prevent layout jumps
    for (const imgSrc of moreImages) {
        await new Promise(resolve => {
            const block = document.createElement('div');
            block.className = 'm-block';
            
            const img = new Image();
            img.onload = () => {
                gallery.appendChild(block);
                resolve();
            };
            img.src = imgSrc;
            img.alt = '';
            
            // Keep your hover effects
            img.addEventListener('mouseover', () => img.style.transform = 'scale(1.05)');
            img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
            
            block.appendChild(img);
        });
    }
    
    // Update button when done
    this.textContent = 'All images loaded!';
    this.style.cursor = 'not-allowed';
});