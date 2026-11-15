/**
 * Zippy Softwares - Production JavaScript Core Engine
 * 3D Particle Mesh Canvas, Interactive 3D Card Tilt, Hero Slider, Video Player, Modals
 */

document.addEventListener('DOMContentLoaded', () => {
    init3DCanvas();
    initTilt3D();
    initHeroSlider();
    initVideoMockup();
    initModals();
    initMobileMenu();
    initContactForm();
    initWhatsAppLeadTracker();

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// =========================================================================
// 1. INTERACTIVE 3D NEURAL CYBER PARTICLE MESH CANVAS
// =========================================================================
function init3DCanvas() {
    const canvas = document.getElementById('hero3DCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    let height = canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : 650;

    window.addEventListener('resize', () => {
        if (!canvas) return;
        width = canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
        height = canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : 650;
    });

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 32 : 70;
    const particles = [];
    const colors = [
        'rgba(2, 132, 199, ',   // Cyan
        'rgba(37, 99, 235, ',   // Royal Blue
        'rgba(56, 189, 248, ',  // Sky
        'rgba(99, 102, 241, '   // Indigo
    ];

    for (let i = 0; i < count; i++) {
        particles.push({
            x: (Math.random() - 0.5) * width * 1.2,
            y: (Math.random() - 0.5) * height * 1.2,
            z: (Math.random() - 0.5) * 600,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            vz: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 2.2 + 1.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.3
        });
    }

    const mouse = { x: 0, y: 0, active: false };

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left - width / 2;
        mouse.y = e.clientY - rect.top - height / 2;
        mouse.active = true;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.active = false;
    });

    canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.touches[0].clientX - rect.left - width / 2;
            mouse.y = e.touches[0].clientY - rect.top - height / 2;
            mouse.active = true;
        }
    }, { passive: true });

    canvas.addEventListener('touchend', () => {
        mouse.active = false;
    });

    const fov = 380;
    let angleY = 0;
    let angleX = 0;

    function render() {
        ctx.clearRect(0, 0, width, height);

        angleY += 0.0018;
        const targetAngleX = mouse.active ? (mouse.y / height) * 0.35 : 0;
        const targetAngleY = mouse.active ? (mouse.x / width) * 0.35 : 0;
        angleX += (targetAngleX - angleX) * 0.05;

        const cosY = Math.cos(angleY + targetAngleY);
        const sinY = Math.sin(angleY + targetAngleY);
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);

        const projected = [];

        for (let i = 0; i < count; i++) {
            const p = particles[i];

            p.x += p.vx;
            p.y += p.vy;
            p.z += p.vz;

            const boundX = width * 0.65;
            const boundY = height * 0.65;
            const boundZ = 300;
            if (p.x < -boundX) p.x = boundX;
            if (p.x > boundX) p.x = -boundX;
            if (p.y < -boundY) p.y = boundY;
            if (p.y > boundY) p.y = -boundY;
            if (p.z < -boundZ) p.z = boundZ;
            if (p.z > boundZ) p.z = -boundZ;

            // 3D rotation transform
            const x1 = p.x * cosY - p.z * sinY;
            const z1 = p.z * cosY + p.x * sinY;
            const y2 = p.y * cosX - z1 * sinX;
            const z2 = z1 * cosX + p.y * sinX + 380;

            if (z2 <= 20) continue;

            const scale = fov / z2;
            const projX = x1 * scale + width / 2;
            const projY = y2 * scale + height / 2;

            const effectiveAlpha = Math.min(1, Math.max(0.1, p.alpha * scale * 1.1));
            projected.push({
                x: projX,
                y: projY,
                scale,
                alpha: effectiveAlpha,
                color: p.color,
                radius: p.radius * scale
            });

            ctx.beginPath();
            ctx.arc(projX, projY, Math.max(1, p.radius * scale * 1.3), 0, Math.PI * 2);
            ctx.fillStyle = p.color + effectiveAlpha + ')';
            ctx.shadowBlur = 8 * scale;
            ctx.shadowColor = 'rgba(2, 132, 199, 0.6)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        const maxDistance = isMobile ? 85 : 130;
        const projLen = projected.length;
        for (let i = 0; i < projLen; i++) {
            for (let j = i + 1; j < projLen; j++) {
                const dx = projected[i].x - projected[j].x;
                const dy = projected[i].y - projected[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const lineAlpha = (1 - dist / maxDistance) * 0.22 * projected[i].scale;
                    ctx.beginPath();
                    ctx.moveTo(projected[i].x, projected[i].y);
                    ctx.lineTo(projected[j].x, projected[j].y);
                    ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
                    ctx.lineWidth = Math.max(0.5, 0.9 * projected[i].scale);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(render);
    }

    render();
}

// =========================================================================
// 2. INTERACTIVE 3D PERSPECTIVE CARD TILT & RADIAL GLARE
// =========================================================================
function initTilt3D() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        const maxTilt = parseFloat(card.getAttribute('data-max-tilt') || '8');
        const scale = parseFloat(card.getAttribute('data-scale') || '1.02');
        const glare = card.querySelector('.tilt-glare');

        function handleMove(clientX, clientY) {
            const rect = card.getBoundingClientRect();
            const x = (clientX - rect.left) / rect.width - 0.5;
            const y = (clientY - rect.top) / rect.height - 0.5;

            const rotX = -y * maxTilt * 2;
            const rotY = x * maxTilt * 2;

            card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
            card.style.transition = 'transform 0.08s ease-out';

            if (glare) {
                const glareX = ((x + 0.5) * 100).toFixed(1);
                const glareY = ((y + 0.5) * 100).toFixed(1);
                glare.style.opacity = '0.22';
                glare.style.background = `radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.85), transparent 70%)`;
            }
        }

        card.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
            if (glare) glare.style.opacity = '0';
        });

        card.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        card.addEventListener('touchend', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
            if (glare) glare.style.opacity = '0';
        });
    });
}

// =========================================================================
// 3. TOP HERO UI/UX INTERACTIVE SERVICE SLIDER
// =========================================================================
function initHeroSlider() {
    const sliderContainer = document.getElementById('heroServiceSlider');
    if (!sliderContainer) return;

    const slides = sliderContainer.querySelectorAll('.hero-slide-item');
    const tabs = sliderContainer.querySelectorAll('.slider-category-tab');
    if (!slides.length) return;

    let currentIndex = 0;
    let isPaused = false;
    let intervalId = null;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, idx) => {
            if (idx === currentIndex) {
                slide.classList.remove('hidden');
                slide.classList.add('flex');
            } else {
                slide.classList.add('hidden');
                slide.classList.remove('flex');
            }
        });

        tabs.forEach((tab, idx) => {
            if (idx === currentIndex) {
                tab.classList.add('bg-blue-600', 'text-white', 'shadow-md');
                tab.classList.remove('bg-white', 'text-slate-700');
            } else {
                tab.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
                tab.classList.add('bg-white', 'text-slate-700');
            }
        });
    }

    tabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => {
            showSlide(idx);
        });
    });

    const prevBtn = sliderContainer.querySelector('.slider-prev-btn');
    const nextBtn = sliderContainer.querySelector('.slider-next-btn');

    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    function startAutoSlide() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
            if (!isPaused) {
                showSlide(currentIndex + 1);
            }
        }, 5000);
    }

    sliderContainer.addEventListener('mouseenter', () => isPaused = true);
    sliderContainer.addEventListener('mouseleave', () => isPaused = false);

    showSlide(0);
    startAutoSlide();
}

// =========================================================================
// 4. AI AUTOMATION VIDEO MOCKUP CONTROLS
// =========================================================================
function initVideoMockup() {
    const video = document.getElementById('aiVideoPlayer');
    const muteBtn = document.getElementById('aiVideoMuteBtn');
    if (!video || !muteBtn) return;

    muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
            muteBtn.innerHTML = `
                <i data-lucide="volume-x" class="w-3.5 h-3.5 text-rose-400"></i>
                <span>Unmute 🔊</span>
            `;
        } else {
            muteBtn.innerHTML = `
                <i data-lucide="volume-2" class="w-3.5 h-3.5 text-cyan-400 animate-pulse"></i>
                <span>Sound On</span>
            `;
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

// =========================================================================
// 5. LIGHTBOX IMAGE ZOOM & MODALS
// =========================================================================
function initModals() {
    const imageModal = document.getElementById('lightboxModal');
    const imageModalImg = document.getElementById('lightboxModalImg');

    window.openImageZoom = function(src) {
        if (!imageModal || !imageModalImg) return;
        imageModalImg.src = src;
        imageModal.classList.remove('hidden');
        imageModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeImageZoom = function() {
        if (!imageModal) return;
        imageModal.classList.add('hidden');
        imageModal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    const hiringModal = document.getElementById('hiringModal');
    window.openHiringModal = function() {
        if (!hiringModal) return;
        hiringModal.classList.remove('hidden');
        hiringModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    window.closeHiringModal = function() {
        if (!hiringModal) return;
        hiringModal.classList.add('hidden');
        hiringModal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    const projectModal = document.getElementById('projectModal');
    window.openProjectModal = function(id) {
        if (!projectModal) return;
        const projectData = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA[id];
        if (projectData) {
            const titleEl = document.getElementById('modalProjectTitle');
            const catEl = document.getElementById('modalProjectCategory');
            const descEl = document.getElementById('modalProjectDesc');
            const indEl = document.getElementById('modalProjectIndustry');
            const techEl = document.getElementById('modalProjectTech');
            const delEl = document.getElementById('modalProjectDeliverables');

            if (titleEl) titleEl.innerText = projectData.title;
            if (catEl) catEl.innerText = projectData.category;
            if (descEl) descEl.innerText = projectData.description;
            if (indEl) indEl.innerText = projectData.industry;

            if (techEl && projectData.technologies) {
                techEl.innerHTML = projectData.technologies.map(t => `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono">${t}</span>`).join('');
            }
            if (delEl && projectData.deliverables) {
                delEl.innerHTML = projectData.deliverables.map(d => `<li class="flex items-start gap-2 text-xs text-slate-700"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 mt-0.5"></i><span>${d}</span></li>`).join('');
            }
        }
        projectModal.classList.remove('hidden');
        projectModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    window.closeProjectModal = function() {
        if (!projectModal) return;
        projectModal.classList.add('hidden');
        projectModal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    // Close on ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImageZoom();
            closeHiringModal();
            closeProjectModal();
        }
    });
}

// =========================================================================
// 6. MOBILE HAMBURGER MENU
// =========================================================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeBtn = document.getElementById('closeMobileDrawer');

    if (!menuBtn || !mobileDrawer) return;

    menuBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
}

// =========================================================================
// 7. CONTACT FORM AJAX SUBMISSION
// =========================================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Transmitting Inquiry...</span>`;
        }

        const formData = new FormData(form);
        try {
            const res = await fetch('/api/contact.php', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.status === 'success') {
                alert('Thank you! Your project inquiry has been received. Our senior architect will contact you within 2-4 hours.');
                form.reset();
                if (data.whatsapp_url) {
                    window.open(data.whatsapp_url, '_blank');
                }
            } else {
                alert('Notice: ' + (data.message || 'Please check the required fields.'));
            }
        } catch (err) {
            alert('Your request was received. Connecting to our WhatsApp desk...');
            const msg = "Hello Zippy Softwares, I submitted a contact request for my project.";
            window.open("https://wa.me/916302690251?text=" + encodeURIComponent(msg), '_blank');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        }
    });
}

// =========================================================================
// 8. AUTOMATIC WHATSAPP LEAD CAPTURE TRACKER
// =========================================================================
function initWhatsAppLeadTracker() {
    document.addEventListener('click', (e) => {
        const waLink = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
        if (waLink) {
            const href = waLink.getAttribute('href') || '';
            const queryString = href.includes('?') ? href.split('?')[1] : '';
            const urlParams = new URLSearchParams(queryString);
            const text = urlParams.get('text') || '';

            let service = 'General WhatsApp Inquiry';
            if (text.includes('Web Development') || window.location.pathname.includes('web-development')) {
                service = 'Web Development & Portals';
            } else if (text.includes('App Development') || window.location.pathname.includes('app-development')) {
                service = 'Custom Software & App Development';
            } else if (text.includes('AI Automation') || text.includes('AI Agent') || window.location.pathname.includes('ai-automation')) {
                service = 'AI Automation & Agents';
            } else if (text.includes('portfolio') || text.includes('case study') || window.location.pathname.includes('portfolio')) {
                service = 'Portfolio Case Study Architecture';
            }

            const leadData = {
                name: 'WhatsApp Website Visitor',
                phone: 'Initiated WhatsApp Chat (+91 63026 90251)',
                service: service,
                source: 'WhatsApp Click on ' + (window.location.pathname.replace(/^\//, '') || 'Homepage'),
                message: text || 'Clicked instant WhatsApp inquiry button on website'
            };

            // Transmit lead silently to the backend admin database
            try {
                if (navigator.sendBeacon) {
                    const blob = new Blob([JSON.stringify(leadData)], { type: 'application/json' });
                    navigator.sendBeacon('/api/track_lead.php', blob);
                } else {
                    fetch('/api/track_lead.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(leadData),
                        keepalive: true
                    }).catch(() => {});
                }
            } catch (err) {
                // Non-blocking
            }
        }
    }, true);
}
