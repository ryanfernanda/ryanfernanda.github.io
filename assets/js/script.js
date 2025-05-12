// Modal functions
function openModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
    }, 10);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}
        
function closeModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    modal.classList.remove('opacity-100');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
}
        
// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            const projectId = overlay.id.replace('-modal', '');
            closeModal(projectId);
        }
    });
});
        
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function showContactModal(type, content) {
    const introText = type === 'Phone'
        ? 'You can call me through this number—'
        : 'Send your mail through this address—';
    document.getElementById('modalIntro').innerText = introText;
    document.getElementById('modalContent').innerText = content;
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.innerText = 'Copy to Clipboard';
    copyBtn.classList.remove('copied');
    const modal = document.getElementById('contactModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}
    
function closeContactModal() {
    document.getElementById('contactModal').classList.remove('flex');
    document.getElementById('contactModal').classList.add('hidden');
}
      
function copyToClipboard() {
    const btn = document.getElementById('copyBtn');
    const text = document.getElementById('modalContent').innerText;
    navigator.clipboard.writeText(text).then(() => {
        // Ubah tampilan tombol
        btn.classList.add('copied');
        btn.innerText = 'Copied';
        // Kembalikan tampilan awal setelah 2 detik
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerText = 'Copy to Clipboard';
        }, 20000);
    });
}

window.addEventListener('load', function () {
    if (window.location.hash) {
        // Hapus hash dari URL tanpa reload
        history.replaceState(null, null, window.location.pathname);
        // Scroll ke atas setelah halaman benar-benar dimuat
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
});