/**
 * ═══════════════════════════════════════════════════════════════
 *  MANOJ KIRANA STORE — script.js
 *  Modular vanilla JS: Theme · i18n · Navigation · Animations
 * ═══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────
   1. TRANSLATIONS DATABASE
──────────────────────────────────────────── */
const TRANSLATIONS = {

  en: {
    /* Utility Bar */
    utilityText:   "Welcome to Manoj Kirana Store — Gungunia's trusted grocery shop since 2013",
    utilityHours:  "Open Daily: 8AM – 8PM",

    /* Nav */
    brandName:     "Manoj Kirana Store",
    brandSub:      "Gungunia, Odisha",
    navAbout:      "About",
    navProducts:   "Products",
    navWhy:        "Why Us",
    navReviews:    "Reviews",
    navContact:    "Contact",
    callNow:       "Call Now",
    selectLang:    "Select Language",

    /* Buttons */
    whatsappOrder:    "WhatsApp Order",
    getDirections:    "Get Directions",
    wholesaleEnquiry: "Enquire About Wholesale",

    /* Status */
    openNow:   "Open Now",
    closedNow: "Closed Now",
    ratingBadge: "5.0 Rating on Google",

    /* Hero */
    heroLine1:  "Your Trusted Grocery Store",
    heroLine2:  "in Gungunia — Since 2013",
    heroSub:    "🌾 Fresh Groceries · 🏠 Daily Essentials · 📦 Wholesale Available · 😊 Friendly Service",
    statYears:  "Years Serving",
    statRating: "Google Rating",
    statHoursNum:   "8AM–8PM",
    statHoursLabel: "Open Daily",

    /* Hero Cards */
    cardFresh:     "Fresh Groceries",
    cardWholesale: "Wholesale Available",
    cardWhatsapp:  "Order on WhatsApp",

    /* About */
    aboutTag:   "Our Story",
    aboutTitle: "A Trusted Name in Gungunia",
    aboutDesc:  "Serving every family in Gungunia with fresh groceries and honest prices for over 11 years.",
    aboutStory: "Since 2013, Manoj Kirana Store has been the heartbeat of Gungunia's daily life. Owner Manoj Mund started this humble shop with a simple promise — fresh groceries, everyday essentials, and honest service to every family in our community. What began as a small kirana has grown into a beloved local institution. Whether you need rice for dinner, oil for cooking, or supplies in bulk — we are here for you, open every single day from 8 AM to 8 PM. We proudly serve wholesale buyers too, making us the go-to store for families and small businesses alike.",
    ownerLabel: "Owner & Founder",

    hlEst:        "Established",
    hlRating:     "Google Rating",
    hlWholesaleNum: "✓",
    hlWholesale:  "Wholesale Available",
    hlOpen:       "Open Every Day",
    hlFamilyNum:  "👨‍👩‍👧",
    hlFamily:     "Family-Run Shop",
    hlPriceNum:   "₹",
    hlPrice:      "Affordable Prices",

    /* Products */
    productsTag:   "What We Offer",
    productsTitle: "Our Product Categories",
    productsDesc:  "Everything your household needs — fresh, affordable, and always in stock.",
    prodBadge:     "Popular",

    prod1Name: "Rice & Atta",
    prod1Desc: "Premium quality rice & wheat flour for daily cooking",
    prod2Name: "Pulses & Grains",
    prod2Desc: "All varieties of dal, lentils & whole grains",
    prod3Name: "Cooking Oils",
    prod3Desc: "Mustard, sunflower, refined & groundnut oils",
    prod4Name: "Snacks & Biscuits",
    prod4Desc: "Popular brands of namkeen, chips & biscuits",
    prod5Name: "Beverages",
    prod5Desc: "Tea, coffee, cold drinks & packaged juices",
    prod6Name: "Soaps & Household",
    prod6Desc: "Detergents, soaps, shampoos & cleaning items",
    prod7Name: "General Daily Items",
    prod7Desc: "Masalas, salt, sugar & all daily essentials",
    prod8Name: "Wholesale Grocery",
    prod8Desc: "Bulk purchase available for businesses & homes",

    /* Why Us */
    whyTag:   "Why Choose Us",
    whyTitle: "The Manoj Kirana Difference",
    whyDesc:  "We've earned the trust of Gungunia's families through consistent quality and service.",

    why1Title: "Serving Since 2013",
    why1Desc:  "Over 11 years of trusted service to Gungunia's community.",
    why2Title: "5.0 Google Rating",
    why2Desc:  "Perfect 5-star rating based on customer reviews.",
    why3Title: "Affordable Prices",
    why3Desc:  "Fair and transparent pricing on every product.",
    why4Title: "Trusted Local Shop",
    why4Desc:  "A family-run store that feels like home to every customer.",
    why5Title: "Open Daily 8AM–8PM",
    why5Desc:  "We are open every day of the year, no holidays.",
    why6Title: "Wholesale Available",
    why6Desc:  "Bulk orders welcomed for homes and small businesses.",

    /* Reviews */
    reviewsTag:   "Customer Reviews",
    reviewsTitle: "What Our Customers Say",
    reviewsCount: "Based on 7 Google Reviews",
    viewOnGoogle: "View on Google Maps",

    review1Name: "Google Reviewer",
    review1Text: "Very good so nice. All grocery are available here.",
    review2Name: "Local Customer",
    review2Text: "Manoj bhai always has everything we need. Fair prices and very helpful service — highly recommended!",
    review3Name: "Regular Customer",
    review3Text: "Best kirana store in Gungunia. Very reasonable prices and fresh stock every day. We have been coming here for years.",

    /* Contact */
    contactTag:   "Find Us",
    contactTitle: "Contact & Location",
    contactDesc:  "Visit us in Gungunia, call, or order on WhatsApp — we are always ready to serve you.",
    labelAddress: "Address",
    labelPhone:   "Phone",
    labelHours:   "Business Hours",
    hoursLine1:   "Monday – Sunday",
    hoursLine2:   "8:00 AM – 8:00 PM",

    /* Footer */
    footerDesc:   "Your trusted local grocery store in Gungunia, Odisha. Fresh groceries, daily essentials and wholesale — since 2013.",
    footerHours:  "Open Daily: 8:00 AM – 8:00 PM",
    footerCopy:   "© 2026 Manoj Kirana Store. All Rights Reserved.",
    footerMadeIn: "Made with ♥ in Gungunia, Odisha",
  },

  /* ─────────────────── ODIA ─────────────────── */
  or: {
    utilityText:   "ମନୋଜ କିରାଣା ଷ୍ଟୋରରେ ସ୍ୱାଗତ — ୨୦୧୩ ଠାରୁ ଗୁଙ୍ଗୁନିଆର ବିଶ୍ୱସ୍ତ ଦୋକାନ",
    utilityHours:  "ସବୁଦିନ ଖୋଲା: ସକାଳ ୮ – ରାତ୍ରି ୮",

    brandName:   "ମନୋଜ କିରାଣା ଷ୍ଟୋର",
    brandSub:    "ଗୁଙ୍ଗୁନିଆ, ଓଡ଼ିଶା",
    navAbout:    "ଆମ ବିଷୟରେ",
    navProducts: "ସାମଗ୍ରୀ",
    navWhy:      "ଆମ ବିଶେଷତ୍ୱ",
    navReviews:  "ସମୀକ୍ଷା",
    navContact:  "ଯୋଗାଯୋଗ",
    callNow:     "ଏବେ କଲ କରନ୍ତୁ",
    selectLang:  "ଭାଷା ବାଛନ୍ତୁ",

    whatsappOrder:    "ହ୍ୱାଟସ୍‌ଆପ ଅର୍ଡ଼ର",
    getDirections:    "ଦିଗ ଖୋଜନ୍ତୁ",
    wholesaleEnquiry: "ଥୋକ ବିଷୟରେ ଜାଣନ୍ତୁ",

    openNow:     "ଖୋଲା ଅଛି",
    closedNow:   "ବନ୍ଦ ଅଛି",
    ratingBadge: "ଗୁଗଲ ରେ ୫.୦ ରେଟିଂ",

    heroLine1:  "ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ କିରାଣା ଦୋକାନ",
    heroLine2:  "ଗୁଙ୍ଗୁନିଆ — ୨୦୧୩ ଠାରୁ",
    heroSub:    "🌾 ସତେଜ ଖାଦ୍ୟ ସାମଗ୍ରୀ · 🏠 ଦୈନନ୍ଦିନ ଜରୁରୀ · 📦 ଥୋକ ଉପଲବ୍ଧ · 😊 ଆନ୍ତରିକ ସେବା",
    statYears:  "ବର୍ଷ ସେବା",
    statRating: "ଗୁଗଲ ରେଟିଂ",
    statHoursNum:   "ସ.୮–ରା.୮",
    statHoursLabel: "ସବୁଦିନ ଖୋଲା",

    cardFresh:     "ସତେଜ ଖାଦ୍ୟ",
    cardWholesale: "ଥୋକ ଉପଲବ୍ଧ",
    cardWhatsapp:  "ହ୍ୱାଟସ୍‌ଆପ ଅର୍ଡ଼ର",

    aboutTag:   "ଆମ କଥା",
    aboutTitle: "ଗୁଙ୍ଗୁନିଆର ଏକ ବିଶ୍ୱସ୍ତ ନାମ",
    aboutDesc:  "୧୧ ବର୍ଷରୁ ଅଧିକ ସମୟ ଧରି ଗୁଙ୍ଗୁନିଆର ପ୍ରତ୍ୟେକ ପରିବାରକୁ ସତେଜ ଖାଦ୍ୟ ଓ ଉଚିତ ଦାମ ସହ ସେବା।",
    aboutStory: "୨୦୧୩ ଠାରୁ, ମନୋଜ କିରାଣା ଷ୍ଟୋର ଗୁଙ୍ଗୁନିଆର ଦୈନନ୍ଦିନ ଜୀବନର ଏକ ଅଂଶ ହୋଇ ଆସୁଛି। ମାଲିକ ମନୋଜ ମୁଣ୍ଡ ଏକ ସରଳ ପ୍ରତିଶ୍ରୁତି ସହ ଏହି ଦୋକାନ ଆରମ୍ଭ କଲେ — ସୁଲଭ ମୂଲ୍ୟରେ ସତେଜ ଖାଦ୍ୟ ଓ ଆନ୍ତରିକ ସେବା। ଛୋଟ ଏକ କିରାଣା ଦୋକାନ ଭାବରେ ଆରମ୍ଭ ହୋଇ, ଆଜି ଏହା ଗୁଙ୍ଗୁନିଆର ସବୁ ପରିବାରର ପ୍ରିୟ ସ୍ଥାନ। ଆପଣ ଚାଉଳ, ତେଲ ବା ଥୋକ ସାମଗ୍ରୀ — ଯାହା ଦରକାର, ଆମେ ସବୁଦିନ ସକାଳ ୮ ଟାରୁ ରାତ୍ରି ୮ ଟା ପର୍ଯ୍ୟନ୍ତ ଖୋଲା ଅଛୁ।",
    ownerLabel: "ମାଲିକ ଓ ପ୍ରତିଷ୍ଠାତା",

    hlEst:        "ପ୍ରତିଷ୍ଠା ବର୍ଷ",
    hlRating:     "ଗୁଗଲ ରେଟିଂ",
    hlWholesaleNum: "✓",
    hlWholesale:  "ଥୋକ ଉପଲବ୍ଧ",
    hlOpen:       "ସବୁଦିନ ଖୋଲା",
    hlFamilyNum:  "👨‍👩‍👧",
    hlFamily:     "ପାରିବାରିକ ଦୋକାନ",
    hlPriceNum:   "₹",
    hlPrice:      "ଉଚିତ ଦାମ",

    productsTag:   "ଆମ ସାମଗ୍ରୀ",
    productsTitle: "ଆମ ଉତ୍ପାଦ ବିଭାଗ",
    productsDesc:  "ଆପଣଙ୍କ ଘର ପାଇଁ ସବୁ ଜିନିଷ — ସତେଜ, ସସ୍ତା ଓ ସବୁବେଳେ ଉପଲବ୍ଧ।",
    prodBadge:     "ଲୋକପ୍ରିୟ",

    prod1Name: "ଚାଉଳ ଓ ଆଟା",
    prod1Desc: "ଦୈନନ୍ଦିନ ରୋଷେଇ ପାଇଁ ଉଚ୍ଚ ମାନର ଚାଉଳ ଓ ଗହମ ଆଟା",
    prod2Name: "ଡାଲି ଓ ଶସ୍ୟ",
    prod2Desc: "ସବୁ ପ୍ରକାର ଡାଲି, ଛୋଲ ଓ ଧାନ୍ୟ",
    prod3Name: "ରୋଷେଇ ତେଲ",
    prod3Desc: "ସରିଷା, ସୂର୍ଯ୍ୟମୁଖୀ ଓ ଅନ୍ୟ ତେଲ",
    prod4Name: "ସ୍ନାକ୍ସ ଓ ବିସ୍କୁଟ",
    prod4Desc: "ଲୋକପ୍ରିୟ ବ୍ରାଣ୍ଡ ଚିପ୍ସ ଓ ବିସ୍କୁଟ",
    prod5Name: "ପାନୀୟ",
    prod5Desc: "ଚା, କଫି, କୋଲ୍ଡ ଡ୍ରିଙ୍କ ଓ ଜୁସ",
    prod6Name: "ସାବୁନ ଓ ଘରୋଇ",
    prod6Desc: "ଡିଟର୍ଜେଣ୍ଟ, ସାବୁନ ଓ ସଫେଇ ସାମଗ୍ରୀ",
    prod7Name: "ଦୈନନ୍ଦିନ ଜିନିଷ",
    prod7Desc: "ମସଲା, ଲୁଣ, ଚିନି ଓ ଅନ୍ୟ ଜରୁରୀ ଜିନିଷ",
    prod8Name: "ଥୋକ ଖାଦ୍ୟ ସାମଗ୍ରୀ",
    prod8Desc: "ଘର ଓ ବ୍ୟବସାୟ ପାଇଁ ଥୋକ ସାମଗ୍ରୀ ଉପଲବ୍ଧ",

    whyTag:   "ଆମକୁ କାହିଁକି ବାଛନ୍ତୁ",
    whyTitle: "ମନୋଜ କିରାଣା ଷ୍ଟୋରର ବିଶେଷତ୍ୱ",
    whyDesc:  "ନିରନ୍ତର ଗୁଣ ଓ ସେବା ମାଧ୍ୟମରେ ଗୁଙ୍ଗୁନିଆ ପରିବାରଙ୍କ ବିଶ୍ୱାସ ଅର୍ଜନ।",

    why1Title: "୨୦୧୩ ଠାରୁ ସେବା",
    why1Desc:  "ଗୁଙ୍ଗୁନିଆ ସମୁଦାୟକୁ ୧୧ ବର୍ଷ ଧରି ବିଶ୍ୱସ୍ତ ସେବା।",
    why2Title: "ଗୁଗଲ ୫.୦ ରେଟିଂ",
    why2Desc:  "ଗ୍ରାହକ ସମୀକ୍ଷା ଆଧାରରେ ସମ୍ପୂର୍ଣ ୫ ତାରା।",
    why3Title: "ଉଚିତ ଦାମ",
    why3Desc:  "ପ୍ରତ୍ୟେକ ଜିନିଷରେ ନ୍ୟାୟ ଓ ସ୍ୱଚ୍ଛ ମୂଲ୍ୟ।",
    why4Title: "ବିଶ୍ୱସ୍ତ ଦୋକାନ",
    why4Desc:  "ପ୍ରତ୍ୟେକ ଗ୍ରାହକଙ୍କ ପାଇଁ ଘର ଭଳି ଅନୁଭବ।",
    why5Title: "ସ.୮–ରା.୮ ଖୋଲା",
    why5Desc:  "ଆମେ ବର୍ଷ ଦ୍ୱାଦଶ ମାସ ପ୍ରତ୍ୟେକ ଦିନ ଖୋଲା।",
    why6Title: "ଥୋକ ଉପଲବ୍ଧ",
    why6Desc:  "ଘର ଓ ଛୋଟ ବ୍ୟବସାୟ ପାଇଁ ଥୋକ ଅର୍ଡ଼ର ଗ୍ରହଣ।",

    reviewsTag:   "ଗ୍ରାହକ ସମୀକ୍ଷା",
    reviewsTitle: "ଆମ ଗ୍ରାହକ କ'ଣ କହୁଛନ୍ତି",
    reviewsCount: "7 ଗୁଗଲ ସମୀକ୍ଷା ଉପରେ ଆଧାରିତ",
    viewOnGoogle: "ଗୁଗଲ ମ୍ୟାପ ରେ ଦେଖନ୍ତୁ",

    review1Name: "ଗୁଗଲ ସମୀକ୍ଷକ",
    review1Text: "ବହୁତ ଭଲ। ଏଠି ସବୁ ପ୍ରକାର ଖାଦ୍ୟ ସାମଗ୍ରୀ ମିଳୁଛି।",
    review2Name: "ସ୍ଥାନୀୟ ଗ୍ରାହକ",
    review2Text: "ମନୋଜ ଭାଇ ପାଖରେ ସବୁ ଜିନିଷ ମିଳୁଛି। ଉଚିତ ଦାମ ଓ ଆନ୍ତରିକ ସେବା। ଅତ୍ୟନ୍ତ ସୁପାରିଶ!",
    review3Name: "ନିୟମିତ ଗ୍ରାହକ",
    review3Text: "ଗୁଙ୍ଗୁନିଆର ସବୁଠୁ ଭଲ ଦୋକାନ। ପ୍ରତିଦିନ ସତେଜ ଜିନିଷ ଓ ବହୁତ ଯୁକ୍ତିଯୁକ୍ତ ଦାମ।",

    contactTag:   "ଆମକୁ ଖୋଜନ୍ତୁ",
    contactTitle: "ଯୋଗାଯୋଗ ଓ ଅବସ୍ଥାନ",
    contactDesc:  "ଗୁଙ୍ଗୁନିଆ ଆସନ୍ତୁ, ଫୋନ ବା ହ୍ୱାଟସ୍‌ଆପ ଅର୍ଡ଼ର — ଆମେ ସର୍ବଦା ସେବା ପ୍ରସ୍ତୁତ।",
    labelAddress: "ଠିକଣା",
    labelPhone:   "ଫୋନ",
    labelHours:   "ଦୋକାନ ସମୟ",
    hoursLine1:   "ସୋମ – ରବିବାର",
    hoursLine2:   "ସକାଳ ୮:୦୦ – ରାତ୍ରି ୮:୦୦",

    footerDesc:   "ଗୁଙ୍ଗୁନିଆ, ଓଡ଼ିଶାର ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ କିରାଣା ଦୋକାନ। ୨୦୧୩ ଠାରୁ ସତେଜ ଜିନିଷ ଓ ଥୋକ ବ୍ୟବସ୍ଥା।",
    footerHours:  "ସବୁଦିନ ଖୋଲା: ସ.୮:୦୦ – ରା.୮:୦୦",
    footerCopy:   "© ୨୦୨୬ ମନୋଜ କିରାଣା ଷ୍ଟୋର। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
    footerMadeIn: "ଗୁଙ୍ଗୁନିଆ, ଓଡ଼ିଶାରେ ♥ ସହ ତିଆରି",
  },

  /* ─────────────────── HINDI ─────────────────── */
  hi: {
    utilityText:   "मनोज किराना स्टोर में आपका स्वागत है — 2013 से गुंगुनिया का विश्वसनीय किराना",
    utilityHours:  "रोज़ खुला: सुबह 8 – रात 8",

    brandName:   "मनोज किराना स्टोर",
    brandSub:    "गुंगुनिया, ओडिशा",
    navAbout:    "हमारे बारे में",
    navProducts: "सामान",
    navWhy:      "क्यों चुनें",
    navReviews:  "समीक्षा",
    navContact:  "संपर्क",
    callNow:     "अभी कॉल करें",
    selectLang:  "भाषा चुनें",

    whatsappOrder:    "WhatsApp ऑर्डर",
    getDirections:    "रास्ता देखें",
    wholesaleEnquiry: "थोक के बारे में पूछें",

    openNow:     "अभी खुला है",
    closedNow:   "अभी बंद है",
    ratingBadge: "Google पर 5.0 रेटिंग",

    heroLine1:  "आपका विश्वसनीय किराना स्टोर",
    heroLine2:  "गुंगुनिया में — 2013 से",
    heroSub:    "🌾 ताज़ा किराना · 🏠 रोज़मर्रा की ज़रूरतें · 📦 थोक उपलब्ध · 😊 मैत्रीपूर्ण सेवा",
    statYears:  "साल की सेवा",
    statRating: "Google रेटिंग",
    statHoursNum:   "सु.8–रा.8",
    statHoursLabel: "रोज़ खुला",

    cardFresh:     "ताज़ा किराना",
    cardWholesale: "थोक उपलब्ध",
    cardWhatsapp:  "WhatsApp ऑर्डर",

    aboutTag:   "हमारी कहानी",
    aboutTitle: "गुंगुनिया में एक विश्वसनीय नाम",
    aboutDesc:  "11 साल से अधिक समय से गुंगुनिया के हर परिवार को ताज़ा किराना और उचित कीमत पर सेवा।",
    aboutStory: "2013 से, मनोज किराना स्टोर गुंगुनिया की रोज़मर्रा की ज़िंदगी का हिस्सा बन गया है। मालिक मनोज मुंड ने एक सरल वादे के साथ यह दुकान शुरू की — ताज़ा किराना, रोज़ की ज़रूरतें और हर परिवार को ईमानदार सेवा। एक छोटे किराने की दुकान से शुरू होकर, यह आज गुंगुनिया का प्रिय स्थान बन गई है। चाहे चावल हो, तेल हो या थोक सामान — हम हर दिन सुबह 8 से रात 8 बजे तक आपके लिए हाज़िर हैं।",
    ownerLabel: "मालिक और संस्थापक",

    hlEst:        "स्थापना वर्ष",
    hlRating:     "Google रेटिंग",
    hlWholesaleNum: "✓",
    hlWholesale:  "थोक उपलब्ध",
    hlOpen:       "हर दिन खुला",
    hlFamilyNum:  "👨‍👩‍👧",
    hlFamily:     "पारिवारिक दुकान",
    hlPriceNum:   "₹",
    hlPrice:      "किफ़ायती कीमतें",

    productsTag:   "हम क्या बेचते हैं",
    productsTitle: "हमारी उत्पाद श्रेणियाँ",
    productsDesc:  "आपके घर की हर ज़रूरत — ताज़ा, किफ़ायती और हमेशा उपलब्ध।",
    prodBadge:     "लोकप्रिय",

    prod1Name: "चावल और आटा",
    prod1Desc: "रोज़ाना खाना पकाने के लिए उच्च गुणवत्ता का चावल और गेहूँ का आटा",
    prod2Name: "दालें और अनाज",
    prod2Desc: "सभी प्रकार की दाल, मसूर और साबुत अनाज",
    prod3Name: "खाना पकाने का तेल",
    prod3Desc: "सरसों, सूरजमुखी, रिफाइंड और मूंगफली का तेल",
    prod4Name: "स्नैक्स और बिस्किट",
    prod4Desc: "लोकप्रिय ब्रांड के नमकीन, चिप्स और बिस्किट",
    prod5Name: "पेय पदार्थ",
    prod5Desc: "चाय, कॉफी, कोल्ड ड्रिंक और जूस",
    prod6Name: "साबुन और घरेलू",
    prod6Desc: "डिटर्जेंट, साबुन, शैम्पू और सफाई सामग्री",
    prod7Name: "रोज़मर्रा का सामान",
    prod7Desc: "मसाले, नमक, चीनी और सभी दैनिक ज़रूरतें",
    prod8Name: "थोक किराना",
    prod8Desc: "घरों और व्यवसायों के लिए थोक खरीदारी उपलब्ध",

    whyTag:   "हमें क्यों चुनें",
    whyTitle: "मनोज किराना का फ़र्क",
    whyDesc:  "लगातार गुणवत्ता और सेवा से गुंगुनिया के परिवारों का विश्वास जीता।",

    why1Title: "2013 से सेवा में",
    why1Desc:  "गुंगुनिया समुदाय को 11 साल से भरोसेमंद सेवा।",
    why2Title: "Google 5.0 रेटिंग",
    why2Desc:  "ग्राहक समीक्षाओं के आधार पर पूर्ण 5 सितारे।",
    why3Title: "किफ़ायती कीमतें",
    why3Desc:  "हर उत्पाद पर उचित और पारदर्शी मूल्य।",
    why4Title: "विश्वसनीय दुकान",
    why4Desc:  "हर ग्राहक को घर जैसा एहसास देने वाली पारिवारिक दुकान।",
    why5Title: "रोज़ सुबह 8 – रात 8",
    why5Desc:  "हम साल के हर दिन बिना छुट्टी के खुले रहते हैं।",
    why6Title: "थोक उपलब्ध",
    why6Desc:  "घरों और छोटे व्यवसायों के लिए थोक ऑर्डर।",

    reviewsTag:   "ग्राहक समीक्षाएँ",
    reviewsTitle: "हमारे ग्राहक क्या कहते हैं",
    reviewsCount: "7 Google समीक्षाओं पर आधारित",
    viewOnGoogle: "Google Maps पर देखें",

    review1Name: "Google समीक्षक",
    review1Text: "बहुत अच्छा। यहाँ सभी प्रकार का किराना उपलब्ध है।",
    review2Name: "स्थानीय ग्राहक",
    review2Text: "मनोज भाई के यहाँ हमेशा सब कुछ मिलता है। उचित दाम और बहुत मददगार सेवा — पूरी तरह से अनुशंसित!",
    review3Name: "नियमित ग्राहक",
    review3Text: "गुंगुनिया का सबसे अच्छा किराना। हर दिन ताज़ा सामान और बहुत वाजिब कीमत। हम वर्षों से यहाँ आ रहे हैं।",

    contactTag:   "हमें खोजें",
    contactTitle: "संपर्क और स्थान",
    contactDesc:  "गुंगुनिया आएं, कॉल करें, या WhatsApp ऑर्डर करें — हम हमेशा आपकी सेवा के लिए तैयार हैं।",
    labelAddress: "पता",
    labelPhone:   "फ़ोन",
    labelHours:   "दुकान का समय",
    hoursLine1:   "सोमवार – रविवार",
    hoursLine2:   "सुबह 8:00 – रात 8:00",

    footerDesc:   "गुंगुनिया, ओडिशा का आपका विश्वसनीय किराना स्टोर। 2013 से ताज़ा किराना और थोक सुविधा।",
    footerHours:  "रोज़ खुला: सुबह 8:00 – रात 8:00",
    footerCopy:   "© 2026 मनोज किराना स्टोर। सर्वाधिकार सुरक्षित।",
    footerMadeIn: "गुंगुनिया, ओडिशा में ♥ के साथ बनाया",
  },
};

/* ─────────────────────────────────────────
   2. STATE
──────────────────────────────────────────── */
const State = {
  theme: 'light',
  lang:  'en',
};

/* ─────────────────────────────────────────
   3. THEME SYSTEM
──────────────────────────────────────────── */
const Theme = {
  STORAGE_KEY: 'mkStore_theme',

  /** Detect OS preference */
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  /** Load saved preference or fall back to system */
  load() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved || this.getSystemTheme();
  },

  /** Apply theme to <html> + update toggle button ARIA */
  apply(theme) {
    State.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    localStorage.setItem(this.STORAGE_KEY, theme);
  },

  toggle() {
    this.apply(State.theme === 'dark' ? 'light' : 'dark');
  },

  /** Watch OS-level changes */
  watchSystem() {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.apply(e.matches ? 'dark' : 'light');
        }
      });
  },
};

/* ─────────────────────────────────────────
   4. LANGUAGE / i18n SYSTEM
──────────────────────────────────────────── */
const I18n = {
  STORAGE_KEY: 'mkStore_lang',

  /** Supported language codes */
  SUPPORTED: ['en', 'or', 'hi'],

  /** Detect browser language and map to supported */
  detectLang() {
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    const map = { or: 'or', od: 'or', hi: 'hi' };
    return map[browser] || 'en';
  },

  load() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return this.SUPPORTED.includes(saved) ? saved : this.detectLang();
  },

  /** Apply language: set data-lang, update font, render all i18n nodes */
  apply(lang) {
    if (!this.SUPPORTED.includes(lang)) lang = 'en';
    State.lang = lang;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(this.STORAGE_KEY, lang);

    // Render all translatable elements
    this.render(lang);

    // Update all lang button states
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isActive = btn.dataset.langBtn === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Update page title
    const titles = {
      en: 'Manoj Kirana Store – Grocery Store in Gungunia, Odisha',
      or: 'ମନୋଜ କିରାଣା ଷ୍ଟୋର – ଗୁଙ୍ଗୁନିଆ, ଓଡ଼ିଶା',
      hi: 'मनोज किराना स्टोर – गुंगुनिया, ओडिशा',
    };
    document.title = titles[lang] || titles.en;
  },

  /** Fill every [data-i18n] element with its translation */
  render(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(t, key)) {
        el.textContent = t[key];
      }
    });
  },

  /** Convenience getter */
  t(key) {
    const t = TRANSLATIONS[State.lang] || TRANSLATIONS.en;
    return t[key] || TRANSLATIONS.en[key] || key;
  },
};

/* ─────────────────────────────────────────
   5. STORE STATUS (OPEN/CLOSED)
──────────────────────────────────────────── */
const StoreStatus = {
  OPEN_HOUR:  8,   // 8:00 AM
  CLOSE_HOUR: 20,  // 8:00 PM

  isOpen() {
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    return mins >= this.OPEN_HOUR * 60 && mins < this.CLOSE_HOUR * 60;
  },

  update() {
    const open    = this.isOpen();
    const dotEl   = document.getElementById('statusDot');
    const textEl  = document.getElementById('statusText');
    const badgeEl = document.getElementById('statusBadge');

    if (!dotEl || !textEl) return;

    if (open) {
      dotEl.classList.remove('badge__dot--closed');
      textEl.dataset.i18n = 'openNow';
      textEl.textContent = I18n.t('openNow');
      badgeEl && badgeEl.removeAttribute('style');
    } else {
      dotEl.classList.add('badge__dot--closed');
      textEl.dataset.i18n = 'closedNow';
      textEl.textContent = I18n.t('closedNow');
      badgeEl && (badgeEl.style.background = 'rgba(239,68,68,.25)');
    }
  },
};

/* ─────────────────────────────────────────
   6. NAVIGATION
──────────────────────────────────────────── */
const Nav = {
  header:       null,
  hamburger:    null,
  mobileMenu:   null,
  menuClose:    null,
  menuBackdrop: null,
  navLinks:     null,
  isOpen:       false,

  init() {
    this.header       = document.getElementById('header');
    this.hamburger    = document.getElementById('hamburger');
    this.mobileMenu   = document.getElementById('mobileMenu');
    this.menuClose    = document.getElementById('menuClose');
    this.menuBackdrop = document.getElementById('menuBackdrop');
    this.navLinks     = document.querySelectorAll('.nav__link');

    this.hamburger?.addEventListener('click', () => this.open());
    this.menuClose?.addEventListener('click',    () => this.close());
    this.menuBackdrop?.addEventListener('click', () => this.close());

    // Close menu when a mobile link is clicked
    document.querySelectorAll('.mobile-menu__link').forEach((link) => {
      link.addEventListener('click', () => this.close());
    });

    // Keyboard: Escape closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });

    // Scroll: add shadow class + active nav link
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  },

  open() {
    this.isOpen = true;
    this.mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    this.hamburger.classList.add('open');
    this.hamburger.setAttribute('aria-expanded', 'true');
    // Focus close button for accessibility
    setTimeout(() => this.menuClose?.focus(), 50);
  },

  close() {
    this.isOpen = false;
    this.mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    this.hamburger.classList.remove('open');
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.hamburger.focus();
  },

  onScroll() {
    const scrolled = window.scrollY > 10;
    this.header?.classList.toggle('scrolled', scrolled);
    this.updateActiveLink();
  },

  /** Highlight nav link matching visible section */
  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 100) {
        current = sec.id;
      }
    });
    this.navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${current}`);
    });
  },
};

/* ─────────────────────────────────────────
   7. SCROLL PROGRESS BAR
──────────────────────────────────────────── */
const ScrollProgress = {
  bar: null,

  init() {
    this.bar = document.getElementById('scrollProgress');
    if (!this.bar) return;
    window.addEventListener('scroll', () => this.update(), { passive: true });
  },

  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.bar.style.width = `${Math.min(pct, 100)}%`;
    this.bar.setAttribute('aria-valuenow', Math.round(pct));
  },
};

/* ─────────────────────────────────────────
   8. SCROLL REVEAL ANIMATIONS
──────────────────────────────────────────── */
const RevealAnimations = {
  observer: null,

  init() {
    // Skip if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const options = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
      this.observer.observe(el);
    });
  },
};

/* ─────────────────────────────────────────
   9. BACK TO TOP BUTTON
──────────────────────────────────────────── */
const BackToTop = {
  btn: null,
  SHOW_AT: 400,

  init() {
    this.btn = document.getElementById('backToTop');
    if (!this.btn) return;

    window.addEventListener('scroll', () => this.toggle(), { passive: true });
    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  toggle() {
    const show = window.scrollY > this.SHOW_AT;
    this.btn.classList.toggle('visible', show);
    this.btn.hidden = !show;
  },
};

/* ─────────────────────────────────────────
   10. SMOOTH SCROLL (Polyfill for Safari)
──────────────────────────────────────────── */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const headerH = document.getElementById('header')?.offsetHeight || 64;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  },
};

/* ─────────────────────────────────────────
   11. LANGUAGE BUTTON WIRING
──────────────────────────────────────────── */
const LangButtons = {
  init() {
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.langBtn;
        I18n.apply(lang);
        StoreStatus.update(); // Re-render status text in new language
      });
    });
  },
};

/* ─────────────────────────────────────────
   12. THEME TOGGLE WIRING
──────────────────────────────────────────── */
const ThemeButton = {
  init() {
    const btn = document.getElementById('themeToggle');
    btn?.addEventListener('click', () => Theme.toggle());
  },
};

/* ─────────────────────────────────────────
   13. FLOATING WHATSAPP (show after scroll)
──────────────────────────────────────────── */
const FloatingWA = {
  fab: null,
  init() {
    this.fab = document.getElementById('fabWa');
    if (!this.fab) return;
    // Always visible on mobile; smooth reveal on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.fab.style.opacity = '1';
        this.fab.style.transform = 'scale(1)';
      }
    }, { passive: true });
  },
};

/* ─────────────────────────────────────────
   14. PERFORMANCE: Lazy iframe map
──────────────────────────────────────────── */
const LazyMap = {
  init() {
    const mapContainer = document.querySelector('.map-container');
    if (!mapContainer) return;

    const iframe = mapContainer.querySelector('iframe');
    if (!iframe) return;

    // Use IntersectionObserver to load map only when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const src = iframe.getAttribute('src');
          if (!iframe.getAttribute('data-loaded')) {
            iframe.setAttribute('src', src); // trigger load
            iframe.setAttribute('data-loaded', 'true');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px' });

    observer.observe(mapContainer);
  },
};

/* ─────────────────────────────────────────
   15. MAIN INIT
──────────────────────────────────────────── */
function init() {
  /* 1. Theme — runs first to prevent flash */
  Theme.apply(Theme.load());
  Theme.watchSystem();
  ThemeButton.init();

  /* 2. Language */
  I18n.apply(I18n.load());
  LangButtons.init();

  /* 3. Store open/closed badge */
  StoreStatus.update();

  /* 4. Navigation */
  Nav.init();

  /* 5. Scroll utilities */
  ScrollProgress.init();
  BackToTop.init();
  SmoothScroll.init();

  /* 6. Animations */
  RevealAnimations.init();

  /* 7. Misc */
  FloatingWA.init();
  LazyMap.init();
}

/* ─────────────────────────────────────────
   16. ANTI-FLASH INLINE SCRIPT (runs first)
   Injected below; keeping it here for docs.
   <script>
     (function(){
       var t=localStorage.getItem('mkStore_theme');
       if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}
       document.documentElement.setAttribute('data-theme',t);
     })();
   </script>
──────────────────────────────────────────── */

/* DOM ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}