let currentLang = localStorage.getItem("preferredLang") || 'ar';

const translations = {
  ar: {
    home: "الرئيسية",
    resources: "الموارد",
    tracking: "التتبع",
    helplines: "الدعم",
    learnMore: "اكتشف الموارد",
    mainTitle: "الإمارات بلا تدخين ومخدرات",
    introDesc: "منصة شاملة توعوية لمساعدة الشباب على الإقلاع باستخدام أدوات رقمية حديثة.",
    quickLinks: "روابط رسمية سريعة",
    resourceLibrary: "مكتبة الموارد المستقبلية",
    resourceDesc: "فيديوهات، مقالات، وإنفوغرافيات عالية التقنية لمساعدتك على الإقلاع.",
    resourceLinks: "روابط التوعية",
    videoSection: "فيديوهات توعوية",
    supportTitle: "الدعم والمساعدة",
    supportDesc: "اتصل بمختصين أو اطلب المساعدة مباشرة عند الحاجة.",
    contactWays: "طرق التواصل",
    hotline: "الخط الساخن الوطني لمكافحة المخدرات:",
    whatsapp: "دعم واتساب مباشر:",
    clinic: "عيادات الإقلاع الأقرب لك:",
    emergencyHelp: "مساعدة طارئة",
    emergencyNote: "إذا كنت في خطر أو تواجه حالة طارئة، يُرجى الاتصال فورًا بـ",
    back: "« الصفحة السابقة",
    next: "الصفحة التالية »",
    resourcesTitle: "موارد التوعية",
    trackingTitle: "تتبع تقدمك",
    trackingDesc: "استخدم هذه الصفحة لتسجيل إنجازاتك اليومية وتحفيز نفسك على الاستمرار.",
    journalTitle: "سجل الإقلاع",
    dayLabel: "اليوم:",
    noteLabel: "ملاحظات:",
    saveBtn: "حفظ التقدم",
    historyTitle: "سجل الأيام السابقة",
    noData: "لا توجد بيانات محفوظة بعد."
  },
  en: {
    home: "Home",
    resources: "Resources",
    tracking: "Progress",
    helplines: "Support",
    learnMore: "Explore Resources",
    mainTitle: "UAE Free of Smoking and Drugs",
    introDesc: "A comprehensive digital platform to help youth quit through modern tools.",
    quickLinks: "Quick Official Links",
    resourceLibrary: "Futuristic Resource Library",
    resourceDesc: "High-tech videos, articles, and infographics to support quitting.",
    resourceLinks: "Awareness Links",
    videoSection: "Awareness Videos",
    supportTitle: "Support and Help",
    supportDesc: "Contact specialists or request help when needed.",
    contactWays: "Contact Methods",
    hotline: "National Drug Hotline:",
    whatsapp: "Direct WhatsApp Support:",
    clinic: "Nearest Quit Clinics:",
    emergencyHelp: "Emergency Help",
    emergencyNote: "If you are in danger or facing an emergency, call",
    back: "« Back",
    next: "Next »",
    resourcesTitle: "Resources",
    trackingTitle: "Track Your Progress",
    trackingDesc: "Use this page to log your daily victories and stay motivated.",
    journalTitle: "Quit Journal",
    dayLabel: "Day:",
    noteLabel: "Notes:",
    saveBtn: "Save Progress",
    historyTitle: "Previous Records",
    noData: "No saved data yet."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
});

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem("preferredLang", currentLang);
  applyLanguage();
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const pageKey = document.title === "موارد التوعية" || document.title === "Resources" ? "resourcesTitle"
                  : document.title === "تتبع التقدم" || document.title === "Progress" ? "trackingTitle"
                  : document.title === "منصة الإقلاع" || document.title === "Quit Platform" ? "mainTitle"
                  : document.title === "الدعم والمساعدة" || document.title === "Support" ? "supportTitle"
                  : "";

  if (pageKey) {
    document.title = translations[currentLang][pageKey];
  }
}
