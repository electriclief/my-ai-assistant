// Tree menu navigation
document.addEventListener('DOMContentLoaded', function() {
    const treeItems = document.querySelectorAll('.tree-item');
    const displayPane = document.getElementById('display-pane');
    
    treeItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            treeItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Navigate to the selected path
            const path = this.getAttribute('data-path');
            navigateToPath(path);
        });
    });
    
    function navigateToPath(path) {
        // In a real app, this would load content dynamically
        // For now, we'll just show a placeholder
        let content = '';
        
        switch(path) {
            case '/':
                content = `
                    <h2>Welcome to My AI Assistant</h2>
                    <p>This is a decentralized, self-running digital companion built with Golden Layout. The theme switcher in the header allows you to toggle between light and dark modes.</p>
                `;
                break;
            case '/sub-sites/kate-mc':
                content = `
                    <h2>🎤 Kate McGill</h2>
                    <p>A Welsh singer with a vibrant discography and an adventurous spirit.</p>
                    <div class="image-grid">
                        <div class="image-card">
                            <h3>🐱 Kate Sings to the Sheep</h3>
                            <p>A cute cat with a tiny crown singing into a microphone on a golden Welsh hill with sheep grazing below 🐑🎤</p>
                            <img src="../assets/ToKate__0004.png" alt="Kate Sings to the Sheep">
                        </div>
                        <div class="image-card">
                            <h3>🎤 Your Free AI Assistant Is On Tour!</h3>
                            <p>A vibrant concert poster with a glowing golden mic and cheering crowd 🎤✨</p>
                            <img src="../assets/ToKate__0005.png" alt="AI Assistant On Tour">
                        </div>
                        <div class="image-card">
                            <h3>🐉 Welsh Wizardry + AI Magic</h3>
                            <p>An epic Welsh dragon perched on a cliff with a glowing AI brain and lightning 🐉⚡</p>
                            <img src="../assets/ToKate__0006.png" alt="Welsh Wizardry + AI Magic">
                        </div>
                    </div>
                `;
                break;
            default:
                content = `
                    <h2>${this.textContent}</h2>
                    <p>This section is under construction. Stay tuned!</p>
                `;
        }
        
        displayPane.querySelector('.content-area').innerHTML = content;
    }
});
