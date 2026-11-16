/* Crisp Suite: shared catalog data (used by index.html and payment.html).
   EDIT THIS FILE to change prices, links, payment details or contact info. */
window.CRISP = (() => {
  const HUB = "https://handlevault-official.github.io/";
  const C = {
    brand: "Crisp Suite",
    defaultPrice: 499,                                  // PHP. Used by every app that has no own "price"
    contact: { email: "handlevault.digital@proton.me" }, // EDIT: where customers send proof of payment
    deliveryNote: "After we confirm your payment, we send your access details to your email.",
    gumroadStore: "https://vaultkeeper117.gumroad.com",
    kofi: "https://ko-fi.com/handlevaultofficial",
    showLive: true,                                     // false = hide the "Live preview" buttons
    payments: [
      { id: "gcash", label: "GCash", emoji: "\uD83D\uDCF1", number: "09288212987", name: "HandleVault Official" },
      { id: "maya", label: "Maya E-Wallet", emoji: "\uD83D\uDCB3", number: "09691573522", name: "" },
      { id: "mayabank", label: "Maya Bank", emoji: "\uD83C\uDFE6", number: "4834421477292702", name: "" }
    ],
    categories: [["all", "All"], ["love", "Love & Events"], ["create", "Create"], ["business", "Business"], ["health", "Health"], ["food", "Food"], ["learn", "Learn"], ["community", "Community"], ["fun", "Fun"]],
    pass: { name: "Crisp Suite Studio Hub (All-Access Pass)", tagline: "One pass for the whole Crisp Suite ecosystem.", url: "https://vaultkeeper117.gumroad.com/l/ztzxpg" },
    apps: [
      { slug: "crisp-gate-invite", name: "Crisp Gate Invite (Love & Budget Gate)", cat: "love", emoji: "\uD83D\uDC8C", icon: "icons/crisp-gate-invite.svg", featured: true, tagline: "Interactive Q&A-gated digital invitation for weddings, dates and events, with guest verification, bill-share screening and a click-to-open envelope.", url: HUB + "crisp-gate-invite/" },
      { slug: "pixel-art-studio", name: "Pixel Art Studio", cat: "create", emoji: "\uD83C\uDFA8", icon: "icons/pixel-art-studio.svg", tagline: "Digital pixel art creation and grid drawing studio.", url: HUB + "crisp-pixel/" },
      { slug: "moonlit-beads-blueprint", name: "Moonlit Beads Blueprint", cat: "create", emoji: "\uD83D\uDCFF", icon: "icons/moonlit-beads-blueprint.svg", tagline: "Jewelry design, bead pattern planning and crafting blueprints.", url: HUB + "crisp-moonlit-beads-blueprint-studio/" },
      { slug: "resume-cv-studio", name: "Resume & CV Studio", cat: "business", emoji: "\uD83D\uDCC4", icon: "icons/resume-cv-studio.svg", tagline: "Professional resume and CV builder with clean document formatting.", url: HUB + "crisp-resume-CV-studio/" },
      { slug: "invoice-studio", name: "Invoice Studio", cat: "business", emoji: "\uD83E\uDDFE", icon: "icons/invoice-studio.svg", tagline: "Business billing, receipts and freelance invoice management.", url: HUB + "crisp-invoice-studio/" },
      { slug: "gitvoice-clinical-dashboard", name: "GitVoice Clinical Dashboard", cat: "health", emoji: "\uD83E\uDE7A", icon: "icons/gitvoice-clinical-dashboard.svg", tagline: "Voice documentation, clinical analytics and a healthcare dashboard. A drafting aid, not medical advice.", url: HUB + "gitvoice-clinical-dashboard/" },
      { slug: "kusina-ai", name: "Kusina AI", cat: "food", emoji: "\uD83C\uDF73", tagline: "AI kitchen helper for home cooks and small food businesses.", url: HUB + "kusina-ai/" },
      { slug: "crisp-creator-studio", name: "Crisp Creator Studio", cat: "create", emoji: "\u2728", tagline: "Everyday tools for content creators in one studio.", url: HUB + "crisp-creator-studio/" },
      { slug: "crisp-math-studio", name: "Crisp Math Studio", cat: "learn", emoji: "\u2797", tagline: "Practice and explore math with clean interactive tools.", url: HUB + "crisp-math-studio/" },
      { slug: "crisp-science-studio", name: "Crisp Science Studio", cat: "learn", emoji: "\uD83D\uDD2C", tagline: "Hands-on science learning tools for students.", url: HUB + "crisp-science-studio/" },
      { slug: "crisp-study-studio", name: "Crisp Study Studio", cat: "learn", emoji: "\uD83D\uDCDA", tagline: "Study planning and revision tools for students.", url: HUB + "crisp-study-studio/" },
      { slug: "crisp-music-studio", name: "Crisp Music Studio", cat: "create", emoji: "\uD83C\uDFB5", tagline: "Make and play with music right in your browser.", url: HUB + "crisp-music-studio/" },
      { slug: "crisp-farm-voice-studio", name: "Crisp Farm Voice Studio", cat: "community", emoji: "\uD83C\uDF3E", tagline: "Voice-first tools for farmers and rural communities.", url: HUB + "crisp-farm-voice-studio/" },
      { slug: "crisp-senior-studio", name: "Crisp Senior Studio", cat: "community", emoji: "\uD83E\uDDD3", tagline: "Simple, large-text tools designed for seniors.", url: HUB + "crisp-senior-studio/" },
      { slug: "crisp-kids-studio", name: "Crisp Kids Studio", cat: "learn", emoji: "\uD83E\uDDD2", tagline: "Playful learning activities for kids.", url: HUB + "crisp-kids-studio/" },
      { slug: "crisp-game-studio", name: "Crisp Game Studio", cat: "fun", emoji: "\uD83C\uDFAE", tagline: "Build and play simple games in your browser.", url: HUB + "crisp-game-studio/" },
      { slug: "crisp-expense-studio", name: "Crisp Expense Studio", cat: "business", emoji: "\uD83D\uDCB0", tagline: "Track expenses and keep your budget clear.", url: HUB + "crisp-expense-studio/" }
    ],
    assets: [
      { name: "Universal Product Template (Pixel Art Pack)", emoji: "\uD83E\uDDE9", tagline: "Pixel art pack and reusable product template.", url: "https://vaultkeeper117.gumroad.com/l/xwzxwp" },
      { name: "Free WebM Sample Alert (Resub #3)", emoji: "\uD83C\uDF81", tagline: "Try an animated stream alert for free.", url: "https://vaultkeeper117.gumroad.com/l/copzec", free: true },
      { name: "Standard MP4 Animated Alert File", emoji: "\uD83C\uDFAC", tagline: "Animated pixel-art alert in standard MP4.", url: "https://vaultkeeper117.gumroad.com/l/dkmedq" },
      { name: "WebM Animated Alert File", emoji: "\uD83D\uDCFA", tagline: "Animated pixel-art alert in WebM.", url: "https://vaultkeeper117.gumroad.com/l/fanvlu" },
      { name: "YouTube-MP4 Animated Alert File", emoji: "\u25B6\uFE0F", tagline: "Animated alert prepared for YouTube-friendly MP4.", url: "https://vaultkeeper117.gumroad.com/l/aihkjh" },
      { name: "Pixel Art Ninja Cat (Static Images & 512px Discord Avatars)", emoji: "\uD83D\uDC31", tagline: "Static art set with 512px Discord avatars.", url: "https://vaultkeeper117.gumroad.com/l/lhhxej" },
      { name: "Calm Aesthetic Wallpaper Bundle", emoji: "\uD83C\uDF19", tagline: "Phone wallpapers with a calm, moonlit feel.", url: "https://vaultkeeper117.gumroad.com/l/echfl" }
    ]
  };
  C.priceOf = (app) => (typeof app.price === "number" ? app.price : C.defaultPrice);
  C.peso = (n) => new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(n);
  C.findApp = (slug) => C.apps.find((a) => a.slug === slug) || null;
  C.payUrl = (app) => "payment.html?app=" + encodeURIComponent(app.slug) + "&price=" + encodeURIComponent(C.priceOf(app));
  C.fmtNumber = (n) => (/^09\d{9}$/.test(n) ? n.replace(/^(\d{4})(\d{3})(\d{4})$/, "$1 $2 $3") : n.replace(/(\d{4})(?=\d)/g, "$1 "));
  C.orderRef = (slug) => { const d = new Date(), p = (x) => String(x).padStart(2, "0"), r = Math.random().toString(36).slice(2, 6).toUpperCase(); return "CS-" + slug.split("-").map((w) => w[0]).join("").toUpperCase().slice(0, 4) + "-" + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + "-" + r; };
  return C;
})();
if (typeof module !== "undefined") module.exports = window.CRISP;
