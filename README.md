# دعم اللغة العربية لـ Deepseek Chat 🚀

سكريبت مخصص لمستخدمي اللغة العربية لتحسين تجربة الدردشة على [Deepseek Chat](https://chat.deepseek.com/) مع دعم كامل للكتابة من اليمين لليسار (RTL) وتحسينات مرئية مُتقدمة.

![After Installation Screenshot](https://raw.githubusercontent.com/nvkq/deepseek-arab/main/screenshots/after.png)

## ✨ المميزات الرئيسية
- **🎯 توجيه تلقائي** للعناصر والنصوص (RTL Support)
- **📖 خطوط عربية واضحة** مع دعم التشكيل والمسافات البينية
- **⚙️ توافق تام** مع واجهة الموقع الأصلية
- **📱 تجربة مُحسنة** على جميع الأجهزة
- **💻 الحفاظ على تنسيق الأكواد البرمجية**

## 📥 طريقة التثبيت
1. **Install Tampermonkey Extension**:  
   [![Chrome](https://img.shields.io/badge/Chrome-Tampermonkey-blue?logo=google-chrome)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   [![Firefox](https://img.shields.io/badge/Firefox-Tampermonkey-orange?logo=firefox)](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. **Install Script**:  
   [![Install](https://img.shields.io/badge/INSTALL_SCRIPT-SUCCESS-brightgreen)](https://greasyfork.org/ar/scripts/533637-deepseek-arabic-support)

3. **Refresh Page** on [Deepseek Chat](https://chat.deepseek.com/)

## 📸 لقطات الشاشة
Before Installation | After Installation
---|---
![Before Screenshot](https://raw.githubusercontent.com/nvkq/deepseek-arab/main/screenshots/before.png) | ![After Screenshot](https://raw.githubusercontent.com/nvkq/deepseek-arab/main/screenshots/after.png)

## ⚙️ إعدادات مخصصة
```css
/* تغيير حجم الخط */
body { 
  font-size: 18px !important;
}

/* تغيير لون النصوص */
.message-content { 
  color: #2d3748 !important;
}
```

## 📊 Technical Details
| Category        | Details                          |
|-----------------|----------------------------------|
| Version         | ![Version](https://img.shields.io/badge/version-1.2.0-blue) |
| Installs        | ![Installs](https://img.shields.io/greasyfork/dt/533637?label=installs) |
| Compatibility   | Tampermonkey, Violentmonkey      |
| Last Updated    | ![Last Commit](https://img.shields.io/github/last-commit/nvkq/deepseek-arab) |

## 🌍 Supported Platforms
![Chrome](https://img.shields.io/badge/Google_Chrome-4285F4?logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Mozilla_Firefox-FF7139?logo=firefox-browser&logoColor=white)
![Edge](https://img.shields.io/badge/Microsoft_Edge-0078D7?logo=microsoft-edge&logoColor=white)

## 📜 الترخيص
مرخص تحت [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.ar.html)  
[![License](https://img.shields.io/badge/License-GPL_v3-red)](https://www.gnu.org/licenses/gpl-3.0)

---

## ❓ الأسئلة الشائعة
**Q: هل يعمل على الهواتف الذكية؟**  
ج: نعم، يدعم جميع الأجهزة الحديثة.

**Q: كيف أبلغ عن مشكلة؟**  
ج: عبر [صفحة المشاكل](https://github.com/nvkq/deepseek-arab/issues)

---

## 💡 دعم المشروع
- ⭐ Star the repository on [GitHub](https://github.com/nvkq/deepseek-arab)
- 🐞 Report issues [here](https://github.com/nvkq/deepseek-arab/issues)
- ✨ Suggest improvements [here](https://github.com/nvkq/deepseek-arab/discussions)

---

## 🔧 البنية التقنية
```mermaid
graph TD
  A[User] --> B{Install Script}
  B --> C[Apply CSS Modifications]
  C --> D[Load Arabic Fonts]
  D --> E[Enhanced Experience]
```

## 🛠️ Roadmap
- [x] RTL Support
- [x] Font Optimization
- [ ] Dynamic Settings Panel
- [ ] Dark Mode Support
```
