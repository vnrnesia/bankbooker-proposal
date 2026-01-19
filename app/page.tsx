// app/vv-platform/page.tsx
import {
    Target, ShieldCheck, Lock, Rocket, BarChart3, Building,
    Smartphone, Cog, Calendar, AlertTriangle, Coins, Search,
    CreditCard, Landmark, CircleDot, Diamond, Banknote,
    ClipboardList, Zap, Timer, MessageCircle, Globe, MapPin, Maximize2
} from 'lucide-react';

export default function VVPlatformProposal() {
    return (
        <main className="min-h-screen px-4 py-10">
            <div className="mx-auto max-w-4xl">
                {/* Üst meta alanı */}
                <header className="mb-10 flex flex-col gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-md font-semibold text-white">
                                <img src="/defyzer.jpg" alt="Logo" className="rounded-md" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    TİCARİ TEKLİF
                                </div>
                                <div className="text-md text-slate-500">
                                    Defyzer — 19.01.{new Date().getFullYear()}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-md text-slate-600">
                            <div>
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                    Hazırlayan
                                </div>
                                <div className="font-medium">Defyzer</div>
                                <a
                                    href="mailto:info@defyzer.com"
                                    className="text-slate-500 underline-offset-2 hover:underline"
                                >
                                    info@defyzer.com
                                </a>
                            </div>

                            <div>
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                    Müşteri
                                </div>
                                <div className="font-medium">Bankbooker</div>
                                <p className="text-slate-500">Uluslararası Ödeme Platformu</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            Bankbooker - TEKLİF DOKÜMANI
                        </h1>
                        <p className="mt-2 max-w-2xl text-md text-slate-700 py-4">
                            Tek mobil uygulama içinde iki farklı rolü (USER + PARTNER) destekleyen,
                            uluslararası döviz işlemleri ve operasyonlarının yönetilebileceği
                            kapsamlı bir Kişisel Kabin platformu geliştirme projesi.
                        </p>
                    </div>
                </header>

                {/* İçerik alanı */}
                <article className="space-y-10 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur sm:p-10">
                    {/* Giriş */}
                    <section className="space-y-4" id="intro">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Proje Özeti
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <p className="text-md leading-relaxed text-slate-700">
                            <span className="font-semibold">Defyzer</span>, VV Platform için
                            uluslararası döviz ödeme işlemlerini (invoice payment) ve döviz gelir
                            iadesini (FX revenue return) yönetebilecek kapsamlı bir mobil uygulama
                            geliştirmeyi teklif etmektedir.
                        </p>

                        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                            <h4 className="text-md font-semibold text-blue-800 flex items-center gap-2">
                                <Target className="w-5 h-5" /> Proje Hedefi
                            </h4>
                            <p className="mt-2 text-md text-slate-700">
                                Tek uygulama içinde iki farklı kullanıcı rolünü destekleyen,
                                modern ve ölçeklenebilir bir platform:
                            </p>
                            <ul className="mt-2 space-y-1 text-md text-slate-700">
                                <li>• <strong>USER (Kullanıcı Kabini):</strong> Ödeme/işlem talebi oluşturma, doküman yükleme, süreç takibi</li>
                                <li>• <strong>PARTNER (Partner Kabini):</strong> Müşteri/portföy yönetimi, gelir/komisyon görünürlüğü, raporlama</li>
                            </ul>
                        </div>

                        <p className="text-md leading-relaxed text-slate-700">
                            Uygulama; navigasyon yapısı, UI/UX standartları ve performans hedefleri
                            dokümanlarda tanımlanan gereksinimlere uygun şekilde tasarlanacaktır.
                        </p>
                    </section>

                    {/* Tek Uygulama Yapısı */}
                    <section className="space-y-4" id="architecture">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Tek Uygulama Mimarisi
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                            <h4 className="text-md font-semibold text-slate-800 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5" /> Rol Bazlı Erişim Kontrolü (RBAC)
                            </h4>
                            <p className="mt-2 text-md text-slate-700">
                                Uygulama tek codebase ile geliştirilecek. Login sonrası backend "role" döndürür:
                            </p>
                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-blue-600">ROLE = USER</div>
                                    <p className="text-sm text-slate-600">Kullanıcı menüsü ve ekranları</p>
                                </div>
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-purple-600">ROLE = PARTNER</div>
                                    <p className="text-sm text-slate-600">Partner menüsü + ek modüller</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Navigasyon Standardı
                            </h3>
                            <ul className="space-y-1 text-md text-slate-700">
                                <li>• <strong>Burger Menü:</strong> Full-screen overlay, swipe down + X ile kapanış</li>
                                <li>• <strong>Alt Menü:</strong> Home / Payments / Documents / Personal Manager / Profile</li>
                            </ul>
                        </div>
                    </section>

                    {/* Teknoloji Stack */}
                    <section className="space-y-4" id="tech-stack">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Teknoloji Stack
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4 text-md text-slate-700 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2"><Smartphone className="w-4 h-4" /> Mobil Uygulama</h4>
                                <ul className="space-y-1">
                                    <li>• React Native — Tek codebase</li>
                                    <li>• Clean Architecture</li>
                                    <li>• Redux / Zustand State Management</li>
                                    <li>• iOS + Android</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2"><Cog className="w-4 h-4" /> Backend</h4>
                                <ul className="space-y-1">
                                    <li>• Node.js (NestJS)</li>
                                    <li>• PostgreSQL Database</li>
                                    <li>• Redis Cache</li>
                                    <li>• Yandex Cloud</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2"><Lock className="w-4 h-4" /> Güvenlik</h4>
                                <ul className="space-y-1">
                                    <li>• JWT Authentication</li>
                                    <li>• KYC/AML Entegrasyonu (Manuel doğrulama - Bitrix üzerinden admin onayı)</li>
                                    <li>• iDenfy Document Verification</li>
                                    <li>• OFAC/UN Sanctions Screening</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2"><Rocket className="w-4 h-4" /> DevOps</h4>
                                <ul className="space-y-1">
                                    <li>• Docker + Kubernetes</li>
                                    <li>• GitHub Actions CI/CD</li>
                                    <li>• Sentry Monitoring</li>
                                    <li>• CloudFlare CDN</li>
                                </ul>
                            </div>
                        </div>

                        {/* Teknik Diyagramlar //vercel deploy fix */}
                        <div className="space-y-4 mt-6">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" /> Teknk Diyagramlar <span className="text-xs text-amber-500 font-medium">(TASLAK)</span>
                            </h3>

                            <div className="grid gap-6">
                                <div className="rounded-2xl border border-slate-200 p-4">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2"><Building className="w-4 h-4" /> Mimari Diyagram</h4>
                                    <img
                                        src="/architecture_diagram.png"
                                        alt="Sistem Mimarisi Diyagramı"
                                        className="w-full max-h-[500px] object-contain rounded-lg border border-slate-100 mb-3"
                                    />
                                    <a
                                        href="/architecture_diagram.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <Maximize2 className="w-4 h-4" /> Büyük Görüntüle
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-slate-200 p-4">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2"><Landmark className="w-4 h-4" /> Veritabanı Şeması</h4>
                                    <img
                                        src="/database_schema.png"
                                        alt="Veritabanı Şeması"
                                        className="w-full max-h-[500px] object-contain rounded-lg border border-slate-100 mb-3"
                                    />
                                    <a
                                        href="/database_schema.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <Maximize2 className="w-4 h-4" /> Büyük Görüntüle
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-slate-200 p-4">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Katman Yapısı</h4>
                                    <img
                                        src="/layers.png"
                                        alt="Uygulama Katman Yapısı"
                                        className="w-full max-h-[500px] object-contain rounded-lg border border-slate-100 mb-3"
                                    />
                                    <a
                                        href="/layers.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <Maximize2 className="w-4 h-4" /> Büyük Görüntüle
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Modüller */}
                    <section className="space-y-6" id="modules">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Proje Modülleri
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Core Modüller */}
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <CircleDot className="w-4 h-4 text-blue-500" /> Core Modüller (USER + PARTNER Ortak)
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Auth & KYC/AML</div>
                                    <p className="text-sm text-slate-600">Kayıt, giriş, email doğrulama, şirket bilgileri, doküman yükleme, KYC stepper</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Invoice Payment</div>
                                    <p className="text-sm text-slate-600">Talep formu, deal timeline, dokümanlar, status history</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">FX Revenue Return</div>
                                    <p className="text-sm text-slate-600">Döviz geliri iadesi talep formu ve takibi</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Deal Tracking</div>
                                    <p className="text-sm text-slate-600">İşlem listesi, filtreleme, detay timeline</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Documents</div>
                                    <p className="text-sm text-slate-600">Doküman listesi, durum yönetimi</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Support & FAQ</div>
                                    <p className="text-sm text-slate-600">Destek talepleri, manager chat, bilgi bankası</p>
                                </div>
                            </div>
                        </div>

                        {/* Partner Modüller */}
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <CircleDot className="w-4 h-4 text-purple-500" /> Partner Özel Modüller
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Clients</div>
                                    <p className="text-sm text-slate-600">Müşteri portföy yönetimi</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Deals & Orders</div>
                                    <p className="text-sm text-slate-600">Komisyon görünümlü işlem tablosu</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Income Calculator</div>
                                    <p className="text-sm text-slate-600">Komisyon/gelir hesaplama aracı</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Reports & Analytics</div>
                                    <p className="text-sm text-slate-600">Raporlama, analitik, export</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Payout Settings</div>
                                    <p className="text-sm text-slate-600">Partner ödeme ayarları</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Partner Tools</div>
                                    <p className="text-sm text-slate-600">Referral link, QR kod, materyaller</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* UX/UI Standartları */}
                    <section className="space-y-4" id="ux-standards">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                UX/UI Standartları
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4 text-md text-slate-700 sm:grid-cols-2">
                            <ul className="space-y-1">
                                <li>• Ekran yüksekliği: 85–100vh</li>
                                <li>• H1: max 2 satır, 60–70 karakter</li>
                                <li>• 1 Primary CTA + 1 Secondary CTA</li>
                                <li>• Tipografi: Damascus + Gotham Pro</li>
                            </ul>
                            <ul className="space-y-1">
                                <li>• Grid: 4–6 kolon responsive</li>
                                <li>• Buton yüksekliği: 48–56px</li>
                                <li>• Touch target: min 44×44px</li>
                                <li>• Animasyon: Fade/slide 200–300ms</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                            <h4 className="text-md font-semibold text-slate-800 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Performans Hedefleri
                            </h4>
                            <div className="mt-2 grid gap-2 sm:grid-cols-3">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-700">&lt; 2.5s</div>
                                    <div className="text-sm text-slate-600">LCP</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-700">&lt; 0.1</div>
                                    <div className="text-sm text-slate-600">CLS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-700">&lt; 4s</div>
                                    <div className="text-sm text-slate-600">TTI</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Proje Zaman Planı */}
                    <section className="space-y-4" id="timeline">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Proje Zaman Planı
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-slate-200">
                            <table className="min-w-full text-left text-md text-slate-700">
                                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3">Aşama</th>
                                        <th className="px-4 py-3">İçerik</th>
                                        <th className="px-4 py-3">Süre</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Faz 0</td>
                                        <td className="px-4 py-3">Discovery & Teknik Analiz</td>
                                        <td className="px-4 py-3 whitespace-nowrap">1 Hafta</td>
                                    </tr>

                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Faz 1</td>
                                        <td className="px-4 py-3">UX/UI Tasarım (UI Kit + Ekranlar)</td>
                                        <td className="px-4 py-3 whitespace-nowrap">1-2 Hafta</td>
                                    </tr>

                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Faz 2</td>
                                        <td className="px-4 py-3">Core MVP Geliştirme (USER + PARTNER ortak)</td>
                                        <td className="px-4 py-3 whitespace-nowrap">4-5 Hafta</td>
                                    </tr>

                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Faz 3</td>
                                        <td className="px-4 py-3">QA, DevOps & Release</td>
                                        <td className="px-4 py-3 whitespace-nowrap">1-2 Hafta</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-slate-600">
                            Toplam Süre: <strong>8-10 Hafta</strong> <br />
                            <span className="text-xs italic">
                                (Backend hazırlık durumu ve entegrasyon kapsamına göre güncellenebilir)
                            </span>
                        </p>

                        {/* Detaylı Sprint Planı */}
                        <div className="mt-6 space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Detaylı Sprint Planı (Örnek Takvim)
                            </h3>
                            <p className="text-xs text-slate-500 italic">
                                * Başlangıç tarihi: Sözleşme imzası sonrası
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 0</div>
                                        <div className="text-xs text-slate-500">1 Hafta</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">Foundation + Navigation</div>
                                        <p className="text-xs text-slate-600">App skeleton, bottom nav + burger overlay, base UI kit, auth flow temel</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 1</div>
                                        <div className="text-xs text-slate-500">2-3 Hafta</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">KYC Modülü + Deal Creation</div>
                                        <p className="text-xs text-slate-600">Company details, docs upload, Invoice payment form, FX revenue return form</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 2</div>
                                        <div className="text-xs text-slate-500">4-6 Hafta</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">Deal Tracking + History</div>
                                        <p className="text-xs text-slate-600">Deal timeline, status history, documents block, manager chat UI</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 3</div>
                                        <div className="text-xs text-slate-500">7-8 Hafta</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">Support + Partner Tools</div>
                                        <p className="text-xs text-slate-600">Support list + chat, FAQ, Partner modules</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 4</div>
                                        <div className="text-xs text-slate-500">9-10 Hafta</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">QA & Release</div>
                                        <p className="text-xs text-slate-600">Test, DevOps setup, production release</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Paketler ve Fiyatlandırma */}
                    <section className="space-y-4" id="packages">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Paketler ve Fiyatlandırma
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 mb-4">
                            <p className="text-sm text-slate-700">
                                <strong><BarChart3 className="w-4 h-4 inline" /> Fiyatlandırma Referansı:</strong> Rusya freelance IT piyasası
                                (özellikle regional şehirler - Kazan, Novosibirsk vb.) baz alınmıştır.
                                Ortalama 25-30 USD/saat bandı esas alınmıştır.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* STANDART */}
                            <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 flex items-center gap-1">
                                    <CircleDot className="w-3 h-3" /> Standart Paket
                                </div>
                                <div className="mt-2 text-lg font-semibold text-slate-900">
                                    20.000 USD
                                </div>
                                <p className="mt-1 text-xs text-slate-600">
                                    MVP - Hızlı Başlangıç
                                </p>
                                <ul className="mt-3 space-y-1 text-md text-slate-700 flex-1">
                                    <li>✓ Discovery & Analiz</li>
                                    <li>✓ UX/UI Tasarım</li>
                                    <li>✓ Core MVP Geliştirme</li>
                                    <li>✓ Auth + KYC Modülü</li>
                                    <li>✓ Invoice Payment</li>
                                    <li>✓ FX Revenue Return</li>
                                    <li>✓ Deal Tracking</li>
                                    <li>✓ Documents & Support</li>
                                </ul>
                                <div className="mt-3 border-t border-slate-200 pt-3 text-xs text-slate-600">
                                    <div className="font-semibold">İçermez:</div>
                                    <div>• Partner Extensions</div>
                                    <div>• QA/DevOps Release</div>
                                </div>
                            </div>

                            {/* GELİŞMİŞ */}
                            <div className="flex flex-col rounded-2xl border border-violet-200 bg-violet-50/70 p-4 shadow-md ring-2 ring-violet-300">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 flex items-center gap-1">
                                    <CircleDot className="w-3 h-3" /> Gelişmiş Paket ⭐
                                </div>
                                <div className="mt-2 text-lg font-semibold text-slate-900">
                                    28.000 USD
                                </div>
                                <p className="mt-1 text-xs text-slate-600">
                                    MVP + Partner Başlangıç
                                </p>
                                <ul className="mt-3 space-y-1 text-md text-slate-700 flex-1">
                                    <li>✓ Standart Paket dahil</li>
                                    <li>✓ Partner Extensions</li>
                                    <li>✓ Clients Modülü</li>
                                    <li>✓ Deals & Orders</li>
                                    <li>✓ Income Calculator</li>
                                    <li>✓ Reports & Analytics</li>
                                    <li>✓ Payout Settings</li>
                                    <li>✓ Partner Tools</li>
                                </ul>
                                <div className="mt-3 border-t border-violet-200 pt-3 text-xs text-slate-600">
                                    <div className="font-semibold text-violet-600">ÖNERİLEN</div>
                                </div>
                            </div>

                            {/* PREMIUM */}
                            <div className="flex flex-col rounded-2xl border border-amber-200 bg-amber-50/70 p-4 shadow-md">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 flex items-center gap-1">
                                    <CircleDot className="w-3 h-3" /> Premium Paket
                                </div>
                                <div className="mt-2 text-lg font-semibold text-slate-900">
                                    32.000 USD
                                </div>
                                <p className="mt-1 text-xs text-slate-600">
                                    Full Scope - Production Ready
                                </p>
                                <ul className="mt-3 space-y-1 text-md text-slate-700 flex-1">
                                    <li>✓ Gelişmiş Paket dahil</li>
                                    <li>✓ QA & Test Suite</li>
                                    <li>✓ DevOps Kurulumu</li>
                                    <li>✓ CI/CD Pipeline</li>
                                    <li>✓ Performans Optimizasyonu</li>
                                    <li>✓ Production Release</li>
                                    <li>✓ App Store Yayını</li>
                                    <li>✓ 3 Ay Ücretsiz Destek</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Ödeme Yöntemleri */}
                    <section className="space-y-4" id="payment">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Ödeme Koşulları
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Ödeme Planı (Tüm Paketler İçin)
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center">
                                    <div className="text-2xl font-bold text-slate-700">%50</div>
                                    <div className="text-sm text-slate-600">Proje Başlangıcı</div>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center">
                                    <div className="text-2xl font-bold text-slate-700">%50</div>
                                    <div className="text-sm text-slate-600">Proje Sonu</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Ödeme Yöntemleri
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1"><Building className="w-4 h-4" /> Şirkete Ödeme</div>
                                    <p className="text-sm text-slate-600 mt-1">Banka transferi / Fatura</p>
                                    <p className="text-xs text-amber-600 mt-2 font-medium">* Toplam tutara %7 eklenir</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1"><Diamond className="w-4 h-4" /> USDT</div>
                                    <p className="text-sm text-slate-600 mt-1">Kripto ödeme (TRC-20 / ERC-20)</p>
                                    <p className="text-xs text-green-600 mt-2 font-medium">✓ Ek ücret yok</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1"><Banknote className="w-4 h-4" /> Nakit</div>
                                    <p className="text-sm text-slate-600 mt-1">Elden / Doğrudan ödeme</p>
                                    <p className="text-xs text-green-600 mt-2 font-medium">✓ Ek ücret yok</p>
                                </div>
                            </div>
                        </div>

                        {/* Fiyat Tablosu */}
                        <div className="overflow-x-auto rounded-2xl border border-slate-200">
                            <table className="min-w-full text-left text-md text-slate-700">
                                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3">Paket</th>
                                        <th className="px-4 py-3">Net Tutar</th>
                                        <th className="px-4 py-3">Şirket Ödemesi (+%7)</th>
                                        <th className="px-4 py-3">USDT / Nakit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium"><CircleDot className="w-3 h-3 inline text-sky-500" /> Standart</td>
                                        <td className="px-4 py-3">20.000 USD</td>
                                        <td className="px-4 py-3">21.400 USD</td>
                                        <td className="px-4 py-3">20.000 USD</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-violet-50/30">
                                        <td className="px-4 py-3 font-medium"><CircleDot className="w-3 h-3 inline text-violet-500" /> Gelişmiş</td>
                                        <td className="px-4 py-3">28.000 USD</td>
                                        <td className="px-4 py-3">29.960 USD</td>
                                        <td className="px-4 py-3">28.000 USD</td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium"><CircleDot className="w-3 h-3 inline text-amber-500" /> Premium</td>
                                        <td className="px-4 py-3">32.000 USD</td>
                                        <td className="px-4 py-3">34.240 USD</td>
                                        <td className="px-4 py-3">32.000 USD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* KYC/AML Sistemi */}
                    <section className="space-y-4" id="kyc-aml">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                KYC/AML Sistemi
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <p className="text-md text-slate-700">
                            Uluslararası ödeme platformu olarak yasal zorunlulukları karşılamak için
                            manuel KYC (Know Your Customer) ve AML (Anti-Money Laundering) doğrulama sistemi entegre edilecektir.
                            Talepler Bitrix24 üzerinden admin paneline düşecek ve manuel olarak onaylanacaktır.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                                <div className="text-lg font-bold text-slate-700 mb-2">1</div>
                                <div className="font-semibold text-slate-800">CIP</div>
                                <p className="text-sm text-slate-600">Customer Identification Program - Temel bilgi doğrulama</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                                <div className="text-lg font-bold text-slate-700 mb-2">2</div>
                                <div className="font-semibold text-slate-800">Document Verification</div>
                                <p className="text-sm text-slate-600">Manuel doküman doğrulama - Bitrix24 admin panel</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                                <div className="text-lg font-bold text-slate-700 mb-2">3</div>
                                <div className="font-semibold text-slate-800">Sanctions Screening</div>
                                <p className="text-sm text-slate-600">OFAC, UN listeleri ve PEP kontrolü</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-4">
                            <h4 className="text-md font-semibold text-slate-800 mb-3 flex items-center gap-2"><ClipboardList className="w-5 h-5" /> KYC Akışı</h4>
                            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Kayıt</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Email Doğrulama</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Şirket Bilgileri</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Doküman Yükleme</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Bitrix Admin Onayı</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Onay</span>
                            </div>
                        </div>
                    </section>

                    {/* Güvenlik */}
                    <section className="space-y-4" id="security">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                5 Katmanlı Güvenlik
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="space-y-3">
                            <div className="rounded-xl border border-slate-200 p-3 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">1</div>
                                <div>
                                    <div className="font-semibold text-slate-800">Network Security</div>
                                    <p className="text-sm text-slate-600">CloudFlare DDoS koruması, WAF, Rate limiting</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-3 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">2</div>
                                <div>
                                    <div className="font-semibold text-slate-800">Encryption (In Transit)</div>
                                    <p className="text-sm text-slate-600">HTTPS/TLS 1.3, AES-256, Certificate pinning</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-3 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">3</div>
                                <div>
                                    <div className="font-semibold text-slate-800">Data Protection (At Rest)</div>
                                    <p className="text-sm text-slate-600">Database encryption, Tokenization, bcrypt password hashing</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-3 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">4</div>
                                <div>
                                    <div className="font-semibold text-slate-800">Access Control</div>
                                    <p className="text-sm text-slate-600">JWT tokens, MFA opsiyonu, RBAC, Audit logging</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-3 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">5</div>
                                <div>
                                    <div className="font-semibold text-slate-800">Monitoring & Incident Response</div>
                                    <p className="text-sm text-slate-600">Sentry, 24/7 alerting, Response SLA</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ekran Sayıları */}
                    <section className="space-y-4" id="screens">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Ekran Sayıları
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4 text-center">
                                <div className="text-4xl font-bold text-blue-600">12</div>
                                <div className="text-md font-semibold text-slate-800 mt-1">Kullanıcı Kabini</div>
                                <p className="text-sm text-slate-600">Auth, KYC, Dashboard, Payments, Documents, Support</p>
                            </div>
                            <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-4 text-center">
                                <div className="text-4xl font-bold text-purple-600">26</div>
                                <div className="text-md font-semibold text-slate-800 mt-1">Partner Kabini</div>
                                <p className="text-sm text-slate-600">+ Clients, Analytics, Calculator, Reports, Tools</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 p-4 text-center">
                            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">38</div>
                            <div className="text-md font-semibold text-slate-800 mt-1">Toplam Production Ekran</div>
                        </div>
                    </section>

                    {/* Varsayımlar */}
                    <section className="space-y-3" id="assumptions">
                        <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Varsayımlar ve Hariç Kapsam
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-3">
                                <div className="font-semibold text-blue-800 mb-2">✓ Varsayımlar</div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• API servisleri müşteri tarafından sağlanır (veya ayrıca fiyatlanır)</li>
                                    <li>• Kullanıcı rolü login sonrası backend'den döner</li>
                                    <li>• Çoklu dil gereksinimi netleştirilecektir</li>
                                    <li>• "Manager chat" özelliği real-time olup olmadığı netleştirilecektir</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-red-200 bg-red-50/50 p-3">
                                <div className="font-semibold text-red-800 mb-2">✗ Hariç Kapsam</div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Admin / backoffice panel</li>
                                    <li>• Gelişmiş BI & özel raporlama</li>
                                    <li>• Harici KYC servis entegrasyonları</li>
                                    <li>• 3rd-party lisans / servis ücretleri</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sonuç */}
                    <section className="space-y-3" id="conclusion">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Sonuç
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>
                        <p className="text-md leading-relaxed text-slate-700">
                            <span className="font-semibold">Defyzer</span>, iki rolü (USER + PARTNER)
                            tek mobil uygulama içinde birleştiren; KYC/AML doğrulama, invoice payment
                            ve FX revenue return süreçleri, doküman yönetimi, işlem takibi ve partner
                            özel modüllerini kapsayan bir ürünü, modern teknoloji ve DevOps
                            standartlarıyla uçtan uca teslim etmeyi teklif eder.
                        </p>
                        <ul className="space-y-1 text-md text-slate-700">
                            <li>✓ Navigasyon, tasarım sistemi ve performans hedefleri (LCP/CLS/TTI) proje kabul kriterleri olarak uygulanacaktır</li>
                            <li>✓ Tek codebase, iOS + Android + Web desteği</li>
                            <li>✓ Ölçeklenebilir mimari, kurumsal güvenlik standartları</li>
                            <li>✓ Rusya piyasa benchmark'ına uygun, rekabetçi fiyatlandırma</li>
                        </ul>
                        <p className="text-md leading-relaxed text-slate-700">
                            Paket seçimi ve sözleşme imzası sonrası projeye hemen başlamaya hazırız.
                        </p>
                    </section>

                    {/* İletişim */}
                    <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6 text-center">
                        <h3 className="text-lg font-semibold text-slate-800">
                            Sorularınız mı var?
                        </h3>
                        <p className="mt-2 text-md text-slate-600">
                            Projeniz hakkında konuşmak için bizimle iletişime geçin.
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:info@defyzer.com"
                                className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
                            >
                                info@defyzer.com
                            </a>
                            <a
                                href="https://t.me/defyzer"
                                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-slate-700 hover:bg-slate-50 transition"
                            >
                                Telegram
                            </a>
                        </div>
                    </section>
                </article>

                <div className="rounded-3xl mt-4 overflow-hidden">
                    <img src="/team.jpg" alt="Team" className="w-full" />
                </div>
            </div>
        </main>
    );
}
