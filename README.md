# VYNE Website Starter

## التشغيل
1. ثبّت Node.js LTS.
2. افتح Terminal داخل المجلد وشغّل `npm install`.
3. شغّل `npm run dev`.
4. افتح الرابط المحلي الذي يظهر في Terminal.

## قبل النشر
- أضف ملفات الخطوط الفعلية حسب المسارات في `public/fonts/README.txt`.
- أضف ملف اللوجو الأصلي.
- استبدل مكان الصورة المؤقتة بصور مشاريع معتمدة.
- أضف بيانات التواصل الرسمية.
- اختبر التصميم على الموبايل والكمبيوتر.

هذا هيكل بداية قابل للتشغيل، وليس موقع VYNE النهائي أو قائمة صفحات منصوصًا عليها حرفيًا في دليل الهوية.
## Contact form email delivery

1. Copy `.env.example` to `.env` for local development.
2. Set `VITE_CONTACT_EMAIL` to the inbox that should receive project inquiries.
3. Restart the Vite dev server after changing environment variables.
4. On first use, FormSubmit may send a one-time activation email to that inbox. Confirm it to enable delivery.
5. In Vercel, add the same `VITE_CONTACT_EMAIL` value under Project Settings → Environment Variables, then redeploy.

The contact form uses FormSubmit's AJAX endpoint. The recipient address is public in the frontend bundle, so use a dedicated business inbox. Never put private API keys in `VITE_` variables.

## Adding project films and client logos

Project data lives in `src/data/projects.js`. Add client logo files under `public/`, set the project's `logo` path, and add video objects to `videos`, for example `{ src: "/videos/campaign-film.mp4", poster: "/images/campaign-poster.jpg" }`. Video previews are muted, looped, and play when they approach the viewport; they pause when they leave it. The current archive contains still images only, so video slots remain clearly marked until real footage is added.
