const brandConfig = {
    companyName: "Glorious Gardens Son & Co.",
    legalName: "Glorious Gardens Son & Co. LTD",
    primaryColor: "#2D6A4F",
    secondaryColor: "#4A9B6F",
    accentColor: "#C9A84C",
    phone: "07946 861456",
    email: "info@glorious-gardens-services.co.uk",
    whatsapp: "447946861456",
    location: "Serving Farnborough & Surrounding Areas",
    address: "13 Woodvale Road, Farnborough, GU14 6FL",

    // ============================================================================
    // SOCIAL PROOF CONFIGURATION
    // ============================================================================
    social: {
        facebookPageUrl: "https://www.facebook.com/GloriousGardensSonAndCo",
        googleReviewsUrl: "https://www.google.com/maps/search/Glorious+Gardens+Son+Co+Farnborough",
        checkatradeUrl: "https://www.checkatrade.com/trades/gloriousgardensson",

        // Aggregate rating — 5.0 across Google (36) + Checkatrade (40)
        ratingValue: "5.0",
        reviewCount: "76",

        reviews: [
            {
                name: "Yasemin Mae",
                location: "Farnborough",
                rating: 5,
                date: "March 2026",
                text: "Lorenzo and his team did an amazing job on my garden! They're so understanding and helpful. My garden was a mess before they came and they managed to get rid of all the brambles that were attacking my lawn. Not only did they clear everything up beautifully, they also gave great advice on what to do next. Couldn't recommend them more highly.",
                initials: "YM",
                avatarColor: "#2D6A4F",
                source: "google"
            },
            {
                name: "Fiona Kirk",
                location: "Aldershot",
                rating: 5,
                date: "February 2026",
                text: "Can't recommend them enough, what a lovely family run company! I had them round to landscape my small garden, remove all the old grass and replace with stones. They did an amazing job and even after work was done and payment made they came back to fix a few slabs on my path. Absolutely outstanding customer service.",
                initials: "FK",
                avatarColor: "#C9A84C",
                source: "google"
            },
            {
                name: "Charles Zifa",
                location: "Camberley",
                rating: 5,
                date: "January 2026",
                text: "Their professionalism matches their beautiful work. I had my garden and front hedges done and it looked amazing, the whole yard came back to life. I would highly recommend them if you want your house and yard to look its absolute best. A truly professional family business.",
                initials: "CZ",
                avatarColor: "#6B4226",
                source: "google"
            },
            {
                name: "Sarah Thompson",
                location: "Fleet",
                rating: 5,
                date: "December 2025",
                text: "Glorious Gardens transformed our neglected back garden into something truly beautiful. New patio, fencing and turfing — all completed on time and the team left the site spotless every day. Lorenzo kept us informed throughout. Exceptional quality.",
                initials: "ST",
                avatarColor: "#2D6A4F",
                source: "google"
            },
            {
                name: "David & Karen Hughes",
                location: "Sandhurst",
                rating: 5,
                date: "November 2025",
                text: "We've used Glorious Gardens twice now and won't use anyone else. First time for our back garden makeover, second time for new fencing and jet washing the patio. Always professional, always tidy, always a brilliant result. Family run and it really shows in the care they take.",
                initials: "DH",
                avatarColor: "#C9A84C",
                source: "google"
            },
            {
                name: "Mark Jennings",
                location: "Frimley",
                rating: 5,
                date: "October 2025",
                text: "I used the AI quote tool on the website which gave me an instant price — brilliant idea. The final quote matched almost exactly. The work itself was superb: new artificial lawn, block paving path and garden lighting. My neighbours keep asking who did it!",
                initials: "MJ",
                avatarColor: "#6B4226",
                source: "google"
            }
        ]
    },
    
    // ============================================================================
    // WEBHOOK CONFIGURATION - Make.com / n8n Integration Points
    // ============================================================================
    webhooks: {
        quote: "https://n8n.trade-engine.co.uk/webhook/glorious-gardens-quote",
        quoteFullRedesign: "https://n8n.trade-engine.co.uk/webhook/glorious-gardens-full-redesign",
        email: "https://hook.eu2.make.com/your-email-webhook-url",
        contact: "https://hook.eu2.make.com/your-contact-webhook-url",
        securityToken: "8f3c9a7e41b24d0ab6e5c9f0a2d7e18b9c6a4f7e23d15b9c0e4a6d8f2b1c97e"
    },
    
    // ============================================================================
    // PRICING SYSTEM CONFIGURATION
    // ============================================================================
    pricing: {
        googleSheetsId: "your-google-sheets-id-here",
        overheadMarkup: 1.25,
        regionalModifiers: {
            // London & South East (higher costs)
            "SW": 1.15, "SE": 1.15, "NW": 1.15, "N": 1.15, "E": 1.15,
            "W": 1.15, "EC": 1.15, "WC": 1.15,

            // Home Counties / Hampshire / Surrey (Glorious Gardens territory)
            "GU": 1.10, "RG": 1.10, "KT": 1.10, "SM": 1.10,
            "CR": 1.10, "BR": 1.10, "SL": 1.10, "HP": 1.10,
            "AL": 1.10, "WD": 1.10, "EN": 1.10, "HA": 1.10,
            "UB": 1.10, "TW": 1.10, "SO": 1.05, "PO": 1.05,
            "RH": 1.05, "BN": 1.05,

            // Default for unlisted areas
            "DEFAULT": 1.05
        },
        confidence: {
            excellent: 90,
            good: 75,
            fair: 60,
            low: 50
        }
    }
};

function applyBranding() {
    const setElement = (id, text, attr = null, attrValue = null) => {
        const el = document.getElementById(id);
        if (el) {
            if (text) el.textContent = text;
            if (attr && attrValue) el.setAttribute(attr, attrValue);
        }
    };
    
    setElement('companyName', brandConfig.companyName);
    setElement('footerCompanyName', brandConfig.companyName);
    setElement('copyrightCompanyName', brandConfig.companyName);
    setElement('footerCopyright', brandConfig.companyName);
    
    setElement('contactPhone', brandConfig.phone, 'href', `tel:${brandConfig.phone}`);
    setElement('footerPhone', brandConfig.phone);
    setElement('phoneLink', brandConfig.phone, 'href', `tel:${brandConfig.phone}`);
    
    setElement('contactEmail', brandConfig.email, 'href', `mailto:${brandConfig.email}`);
    setElement('footerEmail', brandConfig.email);
    setElement('emailLink', brandConfig.email, 'href', `mailto:${brandConfig.email}`);
    
    const locationLink = `${brandConfig.location} — <a href="areas-we-cover.html" class="hover:text-primary transition">Areas We Cover</a>`;
    const contactLocationEl = document.getElementById('contactLocation');
    if (contactLocationEl) contactLocationEl.innerHTML = locationLink;
    const footerLocationEl = document.getElementById('footerLocation');
    if (footerLocationEl) footerLocationEl.innerHTML = locationLink;
    setElement('addressLine1', '13 Woodvale Road');
    setElement('addressLine2', 'Farnborough, Hampshire');
    setElement('addressPostcode', 'GU14 6FL');
    setElement('serviceArea', 'Farnborough & Surrounding Areas');
    
    const whatsappMessage = encodeURIComponent("Hi, I'd like a quote for my garden");
    const whatsappUrl = `https://wa.me/${brandConfig.whatsapp}?text=${whatsappMessage}`;
    setElement('whatsappLink', null, 'href', whatsappUrl);

    document.querySelectorAll('[data-fb-page]').forEach(el => {
        el.href = brandConfig.social.facebookPageUrl;
    });
    document.querySelectorAll('[data-google-reviews]').forEach(el => {
        el.href = brandConfig.social.googleReviewsUrl;
    });

    document.querySelectorAll('[data-review-count]').forEach(el => {
        el.textContent = brandConfig.social.reviewCount;
    });
    document.querySelectorAll('[data-rating-value]').forEach(el => {
        el.textContent = brandConfig.social.ratingValue;
    });

    renderReviews();
    loadFacebookPlugin();
}

function renderReviews() {
    const container = document.getElementById('reviewCardsContainer');
    if (!container || !brandConfig.social.reviews) return;

    const sourceIcon = (source) => source === 'facebook'
        ? `<svg class="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
        : `<svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`;

    const stars = (n) => Array(n).fill(`<svg class="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('');

    container.innerHTML = brandConfig.social.reviews.map(r => `
        <div class="review-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                         style="background-color:${r.avatarColor}">${r.initials}</div>
                    <div>
                        <p class="font-semibold text-gray-900 text-sm leading-tight">${r.name}</p>
                        <p class="text-gray-400 text-xs">${r.location}</p>
                    </div>
                </div>
                <div class="flex-shrink-0 opacity-80">${sourceIcon(r.source)}</div>
            </div>
            <div class="flex items-center gap-0.5 mb-3">${stars(r.rating)}</div>
            <p class="text-gray-600 text-sm leading-relaxed flex-grow">"${r.text}"</p>
            <p class="text-gray-300 text-xs mt-3">${r.date}</p>
        </div>
    `).join('');
}

function loadFacebookPlugin() {
    const fbContainer = document.getElementById('facebookPagePlugin');
    if (!fbContainer) return;

    const basePageUrl = brandConfig.social.facebookPageUrl.replace(/\/(reviews|posts|about|photos).*$/, '');
    const pageUrl = encodeURIComponent(basePageUrl);
    fbContainer.innerHTML = `
        <iframe
            src="https://www.facebook.com/plugins/page.php?href=${pageUrl}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="340" height="500"
            style="border:none;overflow:hidden;border-radius:12px;width:100%;max-width:340px"
            scrolling="no" frameborder="0" allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy">
        </iframe>`;
}

window.brandConfig = brandConfig;

console.log('✅ Glorious Gardens config loaded! Webhook URL:', brandConfig?.webhooks?.quote);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBranding);
} else {
    applyBranding();
}
