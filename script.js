// ========================================
// ZYVORA — Luxury Perfume E-Commerce
// Main JavaScript
// ========================================

// ---- Translations ----
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_products: "Produits",
        nav_about: "À Propos",
        nav_contact: "Contact",
        hero_subtitle: "L'Art du Parfum",
        hero_desc: "Des fragrances d'exception, façonnées pour sublimer chaque instant",
        hero_cta: "Découvrir",
        products_subtitle: "Collection",
        products_title: "Nos Parfums",
        about_subtitle: "Notre Histoire",
        about_title: "L'Excellence du Parfum",
        about_text1: "Chez ZYVORA, chaque flacon est une œuvre d'art. Nous sélectionnons les matières premières les plus nobles pour créer des fragrances uniques qui racontent votre histoire.",
        about_text2: "Notre engagement envers l'excellence se reflète dans chaque détail — des notes de tête envoûtantes à l'emballage luxueux qui accompagne chaque commande.",
        about_stat1: "Fragrances",
        about_stat2: "Authentique",
        about_stat3: "Clients",
        contact_subtitle: "Contact",
        contact_title: "Restons en Contact",
        contact_whatsapp: "WhatsApp",
        footer_text: "© 2025 ZYVORA. Tous droits réservés.",
        cart_title: "Panier",
        cart_empty: "Votre panier est vide",
        cart_total: "Total",
        cart_checkout: "Commander via WhatsApp",
        add_to_cart: "Ajouter au Panier",
        toast_added: "ajouté au panier",
        currency: "MAD"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_products: "المنتجات",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_subtitle: "فن العطور",
        hero_desc: "عطور استثنائية، صُممت لتزيد كل لحظة جمالاً",
        hero_cta: "اكتشف",
        products_subtitle: "المجموعة",
        products_title: "عطورنا",
        about_subtitle: "قصتنا",
        about_title: "التميز في العطر",
        about_text1: "في زيفورا، كل قارورة هي قطعة فنية. نختار أجود المواد الأولية لن crear عطور فريدة تروي قصتك.",
        about_text2: "التزامنا بالتميز يظهر في كل تفصيل — من النوتات العليا الآسرة إلى التغليف الفاخر الذي يرافق كل طلب.",
        about_stat1: "عطر",
        about_stat2: "أصلي",
        about_stat3: "عميل",
        contact_subtitle: "اتصل بنا",
        contact_title: "ابقَ على اتصال",
        contact_whatsapp: "واتساب",
        footer_text: "© 2025 زيفورا. جميع الحقوق محفوظة.",
        cart_title: "سلة التسوق",
        cart_empty: "سلتك فارغة",
        cart_total: "المجموع",
        cart_checkout: "اطلب عبر واتساب",
        add_to_cart: "أضف إلى السلة",
        toast_added: "تمت الإضافة إلى السلة",
        currency: "درهم"
    }
};

// ---- Products Data ----
const products = [
    {
        id: 1,
        name_fr: "Ambre Boisé",
        name_ar: "العنبر الخشبي",
        price: 150,
        image: "https://i.ibb.co/HfVGyntn/Chat-GPT-Image-May-19-2026-07-00-14-PM.png",
        note_fr: "Bois de santal · Musc · Ambre",
        note_ar: "خشب الصندل · المسك · عنبر"
    },
    {
        id: 2,
        name_fr: "Noir Éternel",
        name_ar: "أسود أبدي",
        price: 520,
        image: "http://static.photos/black/640x360/23",
        note_fr: "Musc · Vétiver · Cuir",
        note_ar: "مسك · فيتيفير · جلد"
    },
    {
        id: 3,
        name_fr: "Fleur de Sahara",
        name_ar: "زهرة الصحراء",
        price: 380,
        image: "http://static.photos/nature/640x360/45",
        note_fr: "Rose · Jasmin · Santal",
        note_ar: "ورد · ياسمين · صندل"
    },
    {
        id: 4,
        name_fr: "Ambre Divin",
        name_ar: "عنبر إلهي",
        price: 490,
        image: "http://static.photos/red/640x360/67",
        note_fr: "Ambre · Vanille · Patchouli",
        note_ar: "عنبر · فانيلا · باتشولي"
    },
    {
        id: 5,
        name_fr: "Soif d'Or",
        name_ar: "ظما الذهب",
        price: 560,
        image: "http://static.photos/office/640x360/89",
        note_fr: "Oud · Safran · Rose",
        note_ar: "عود · زعفران · ورد"
    },
    {
        id: 6,
        name_fr: "Nuit de Marrakech",
        name_ar: "ليلة مراكش",
        price: 420,
        image: "http://static.photos/vintage/640x360/31",
        note_fr: "Encens · Musc · Bois de Cèdre",
        note_ar: "بخور · مسك · خشب الأرز"
    }
];

// ---- State ----
let currentLang = "fr";
let cart = [];

// ---- DOM Ready ----
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    renderProducts();
    setupEvents();
    setupScrollAnimations();
    handleNavbar();
});

// ---- Render Products ----
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    const t = translations[currentLang];

    grid.innerHTML = products.map((product, idx) => `
        <div class="product-card bg-cream-50 group" style="animation-delay: ${idx * 100}ms">
            <div class="relative overflow-hidden product-image-wrapper">
                <img src="${product.image}" alt="${currentLang === 'fr' ? product.name_fr : product.name_ar}" 
                     class="product-image w-full h-72 md:h-80 object-cover" loading="lazy">
                <div class="product-overlay absolute inset-0 bg-noir-900/30 flex items-center justify-center">
                    <button onclick="addToCart(${product.id})" 
                            class="add-to-cart-btn bg-gold-500 text-noir-900 px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors">
                        ${t.add_to_cart}
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-lg tracking-[0.1em] mb-1">
                    ${currentLang === 'fr' ? product.name_fr : product.name_ar}
                </h3>
                <p class="text-noir-400 text-sm font-cairo mb-3">
                    ${currentLang === 'fr' ? product.note_fr : product.note_ar}
                </p>
                <p class="text-gold-600 font-bold tracking-wide price-tag">${product.price} ${t.currency}</p>
            </div>
        </div>
    `).join("");
}

// ---- Cart Functions ----
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`${currentLang === 'fr' ? product.name_fr : product.name_ar} ${translations[currentLang].toast_added}`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById("cartCount");
    const itemsEl = document.getElementById("cartItems");
    const emptyEl = document.getElementById("cartEmpty");
    const footerEl = document.getElementById("cartFooter");
    const totalEl = document.getElementById("cartTotal");
    const t = translations[currentLang];

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Count badge
    if (totalItems > 0) {
        countEl.textContent = totalItems;
        countEl.classList.remove("hidden");
    } else {
        countEl.classList.add("hidden");
    }

    // Cart items
    if (cart.length === 0) {
        itemsEl.classList.add("hidden");
        emptyEl.classList.remove("hidden");
        footerEl.classList.add("hidden");
    } else {
        itemsEl.classList.remove("hidden");
        emptyEl.classList.add("hidden");
        footerEl.classList.remove("hidden");

        itemsEl.innerHTML = cart.map(item => `
            <div class="cart-item flex gap-4 items-start pb-6 border-b border-gold-700/15">
                <img src="${item.image}" alt="${currentLang === 'fr' ? item.name_fr : item.name_ar}" class="w-16 h-20 object-cover flex-shrink-0">
                <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2">
                        <h4 class="text-cream-100 text-sm">${currentLang === 'fr' ? item.name_fr : item.name_ar}</h4>
                        <button onclick="removeFromCart(${item.id})" class="remove-btn text-cream-300/40 hover:text-gold-500 flex-shrink-0">
                            <i data-lucide="x" class="w-4 h-4"></i>
                        </button>
                    </div>
                    <p class="text-gold-400 text-sm font-bold mt-1">${item.price} ${t.currency}</p>
                    <div class="flex items-center gap-3 mt-3">
                        <button onclick="changeQty(${item.id}, -1)" class="qty-btn text-cream-300/60">
                            <i data-lucide="minus" class="w-3 h-3"></i>
                        </button>
                        <span class="text-cream-100 text-sm min-w-[20px] text-center">${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)" class="qty-btn text-cream-300/60">
                            <i data-lucide="plus" class="w-3 h-3"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join("");

        totalEl.textContent = `${totalPrice} ${t.currency}`;
    }

    lucide.createIcons();
}

// ---- Cart Open/Close ----
function openCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => {
        overlay.classList.remove("opacity-0");
        overlay.classList.add("opacity-100");
    });
    sidebar.classList.add("open");
    sidebar.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden";
}

function closeCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    sidebar.classList.remove("open");
    sidebar.style.transform = currentLang === "ar" ? "translateX(-100%)" : "translateX(100%)";
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 300);
    document.body.style.overflow = "";
}

// ---- Toast ----
function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    toastMsg.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ---- Language Switch ----
function switchLanguage() {
    currentLang = currentLang === "fr" ? "ar" : "fr";
    const html = document.documentElement;
    const langBtn = document.getElementById("langSwitch");

    if (currentLang === "ar") {
        html.setAttribute("lang", "ar");
        html.setAttribute("dir", "rtl");
        langBtn.textContent = "FR";
    } else {
        html.setAttribute("lang", "fr");
        html.setAttribute("dir", "ltr");
        langBtn.textContent = "AR";
    }

    // Update all i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Re-render products
    renderProducts();
    updateCartUI();
    lucide.createIcons();
}

// ---- Scroll Animations ----
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Add stagger delay for multiple elements
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    // Observe fade-up elements with stagger
    document.querySelectorAll(".fade-up").forEach((el, idx) => {
        el.dataset.delay = idx * 200;
        observer.observe(el);
    });

    // Observe other animations
    document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up").forEach(el => {
        observer.observe(el);
    });
}

// ---- Navbar Scroll ----
function handleNavbar() {
    const navbar = document.getElementById("navbar");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        lastScroll = scrollY;
    }, { passive: true });
}

// ---- Setup Events ----
function setupEvents() {
    // Cart
    document.getElementById("cartBtn").addEventListener("click", openCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);
    document.getElementById("cartOverlay").addEventListener("click", closeCart);

    // Language
    document.getElementById("langSwitch").addEventListener("click", switchLanguage);

    // Mobile Menu
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    // Close mobile menu on link click
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });

    // Close mobile menu on scroll
    window.addEventListener("scroll", () => {
        mobileMenu.classList.remove("open");
    }, { passive: true });

    // Escape key closes cart
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCart();
        }
    });
}