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
            case '/sub-sites/jim':
                content = `
                    <h2>🐋 Jim Visser — Private Studio</h2>
                    <p style="margin:8px 0 14px">Jim's personal studio: images, web pages and downloads, all in one place.</p>
                    <p style="margin-bottom:14px"><a href="clients/jim.html" target="_blank" style="font-weight:600">↗ Open Jim's studio in a new tab</a></p>
                    <iframe src="clients/jim.html" style="width:100%;height:70vh;border:1px solid #2c3e50;border-radius:12px;background:#070b14"></iframe>
                `;
                break;
            case '/sub-sites/jim-images':
                content = `
                    <h2>🖼️ Jim — Hydra Image Demo</h2>
                    <p style="margin:8px 0 14px">Five custom pictures generated across the Hydra GPU network, lettered for Jim.</p>
                    <p style="margin-bottom:14px"><a href="clients/jim_image_demo.html" target="_blank" style="font-weight:600">↗ Open the image demo in a new tab</a></p>
                    <iframe src="clients/jim_image_demo.html" style="width:100%;height:70vh;border:1px solid #2c3e50;border-radius:12px;background:#070b14"></iframe>
                `;
                break;
            case '/sub-sites/gpu-market':
                content = `
                    <h2>🖥️ Jim — GPU Deal Board</h2>
                    <p style="margin:8px 0 14px">Daily Facebook Marketplace GPU watch for Jim: new finds, price drops, and a "not interested" that sticks (localStorage).</p>
                    <p style="margin-bottom:14px"><a href="clients/jim_gpu_board.html" target="_blank" style="font-weight:600">↗ Open the GPU board in a new tab</a></p>
                    <iframe src="clients/jim_gpu_board.html" style="width:100%;height:70vh;border:1px solid #2c3e50;border-radius:12px;background:#060a13"></iframe>
                `;
                break;
            case '/sub-sites/hydra-mcp':
                content = `
                    <h2>🛰️ Hydra — MCP Server Guide</h2>
                    <p style="margin:8px 0 14px">One server, eleven tools: what the Hydra MCP server can do, what it can't, and how to reach it.</p>
                    <p style="margin-bottom:14px"><a href="projects/hydra_mcp_guide.html" target="_blank" style="font-weight:600">↗ Open the guide in a new tab</a></p>
                    <iframe src="projects/hydra_mcp_guide.html" style="width:100%;height:70vh;border:1px solid #2c3e50;border-radius:12px;background:#070b14"></iframe>
                `;
                break;
            case '/sub-sites/hydra-services':
                content = `
                    <h2>💧 Hydra — Services v2 Proposal</h2>
                    <p style="margin:8px 0 14px">Service Containers: any code can be a service — authored by the network's Hermes, improved by failure.</p>
                    <p style="margin-bottom:14px"><a href="projects/hydra_services_proposal.html" target="_blank" style="font-weight:600">↗ Open the proposal in a new tab</a></p>
                    <iframe src="projects/hydra_services_proposal.html" style="width:100%;height:70vh;border:1px solid #2c3e50;border-radius:12px;background:#070b14"></iframe>
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
