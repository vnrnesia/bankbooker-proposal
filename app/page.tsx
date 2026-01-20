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
                {/* Верхняя мета область */}
                <header className="mb-10 flex flex-col gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-md font-semibold text-white">
                                <img src="/defyzer.jpg" alt="Logo" className="rounded-md" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
                                </div>
                                <div className="text-md text-slate-500">
                                    Defyzer — 19.01.{new Date().getFullYear()}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-md text-slate-600">
                            <div>
                                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                    Подготовлено
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
                                    Клиент
                                </div>
                                <div className="font-medium">Bankbooker</div>
                                <p className="text-slate-500">Международная платёжная платформа</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            Bankbooker - ДОКУМЕНТ ПРЕДЛОЖЕНИЯ
                        </h1>
                        <p className="mt-2 max-w-2xl text-md text-slate-700 py-4">
                            Проект разработки комплексной платформы Личного Кабинета,
                            поддерживающей две разные роли (USER + PARTNER) в одном веб-приложении,
                            с возможностью управления международными валютными операциями.
                        </p>
                    </div>
                </header>

                {/* Область контента */}
                <article className="space-y-10 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur sm:p-10">
                    {/* Введение */}
                    <section className="space-y-4" id="intro">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Краткое описание проекта
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <p className="text-md leading-relaxed text-slate-700">
                            <span className="font-semibold">Defyzer</span> предлагает разработку
                            комплексного адаптивного веб-приложения для VV Platform, которое будет управлять
                            международными валютными платежами (invoice payment) и возвратом валютной выручки
                            (FX revenue return).
                        </p>

                        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                            <h4 className="text-md font-semibold text-blue-800 flex items-center gap-2">
                                <Target className="w-5 h-5" /> Цель проекта
                            </h4>
                            <p className="mt-2 text-md text-slate-700">
                                Современная и масштабируемая веб-платформа, поддерживающая
                                две разные роли пользователей в одном веб-приложении:
                            </p>
                            <ul className="mt-2 space-y-1 text-md text-slate-700">
                                <li>• <strong>USER (Кабинет пользователя):</strong> Создание платёжных/транзакционных запросов, загрузка документов, отслеживание процесса</li>
                                <li>• <strong>PARTNER (Кабинет партнёра):</strong> Управление клиентами/портфелем, видимость доходов/комиссий, отчётность</li>
                            </ul>
                        </div>

                        <p className="text-md leading-relaxed text-slate-700">
                            Веб-приложение будет разработано в соответствии с требованиями,
                            определёнными в документации: структура навигации, стандарты UI/UX и цели производительности.
                        </p>
                    </section>

                    {/* Архитектура единого приложения */}
                    <section className="space-y-4" id="architecture">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Архитектура единого приложения
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                            <h4 className="text-md font-semibold text-slate-800 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5" /> Управление доступом на основе ролей (RBAC)
                            </h4>
                            <p className="mt-2 text-md text-slate-700">
                                Веб-приложение будет разработано на единой кодовой базе. После входа backend возвращает "role":
                            </p>
                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-blue-600">ROLE = USER</div>
                                    <p className="text-sm text-slate-600">Меню и экраны пользователя</p>
                                </div>
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-purple-600">ROLE = PARTNER</div>
                                    <p className="text-sm text-slate-600">Меню партнёра + доп. модули</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Стандарт навигации
                            </h3>
                            <ul className="space-y-1 text-md text-slate-700">
                                <li>• <strong>Burger Menu:</strong> Full-screen overlay, закрытие свайпом вниз + X</li>
                                <li>• <strong>Нижнее меню:</strong> Home / Payments / Documents / Personal Manager / Profile</li>
                            </ul>
                        </div>
                    </section>

                    {/* Технологический стек */}
                    <section className="space-y-4" id="tech-stack">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Технологический стек
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4 text-md text-slate-700 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 p-4">
                                <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2"><Globe className="w-4 h-4" /> Веб-приложение (Responsive)</h4>
                                <ul className="space-y-1">
                                    <li>• Next.js / React — Единая кодовая база</li>
                                    <li>• Clean Architecture</li>
                                    <li>• Redux / Zustand State Management</li>
                                    <li>• Адаптивный дизайн (Desktop / Tablet / Mobile)</li>
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
                                <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2"><Lock className="w-4 h-4" /> Безопасность</h4>
                                <ul className="space-y-1">
                                    <li>• JWT Authentication</li>
                                    <li>• KYC/AML Интеграция (Ручная верификация - подтверждение админом через Bitrix)</li>
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

                        {/* Технические диаграммы */}
                        <div className="space-y-4 mt-6">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" /> Технические диаграммы <span className="text-xs text-amber-500 font-medium">(ЧЕРНОВИК)</span>
                            </h3>

                            <div className="grid gap-6">
                                <div className="rounded-2xl border border-slate-200 p-4">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2"><Building className="w-4 h-4" /> Диаграмма архитектуры</h4>
                                    <img
                                        src="/architecture_diagram.png"
                                        alt="Диаграмма архитектуры системы"
                                        className="w-full max-h-[500px] object-contain rounded-lg border border-slate-100 mb-3"
                                    />
                                    <a
                                        href="/architecture_diagram.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <Maximize2 className="w-4 h-4" /> Увеличить
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-slate-200 p-4">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2"><Landmark className="w-4 h-4" /> Схема базы данных</h4>
                                    <img
                                        src="/database_schema.png"
                                        alt="Схема базы данных"
                                        className="w-full max-h-[500px] object-contain rounded-lg border border-slate-100 mb-3"
                                    />
                                    <a
                                        href="/database_schema.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <Maximize2 className="w-4 h-4" /> Увеличить
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-slate-200 p-4">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Структура слоёв</h4>
                                    <img
                                        src="/layers.png"
                                        alt="Структура слоёв приложения"
                                        className="w-full max-h-[500px] object-contain rounded-lg border border-slate-100 mb-3"
                                    />
                                    <a
                                        href="/layers.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        <Maximize2 className="w-4 h-4" /> Увеличить
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Преимущества веб-приложения */}
                    <section className="space-y-4" id="web-advantages">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Преимущества веб-приложения
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="rounded-2xl border border-green-200 bg-green-50/50 p-4">
                            <h4 className="text-md font-semibold text-green-800 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Почему веб-приложение?
                            </h4>
                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-green-700">✓ Кроссплатформенность</div>
                                    <p className="text-xs text-slate-600 mt-1">Работает на всех устройствах через браузер</p>
                                </div>
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-green-700">✓ Мгновенные обновления</div>
                                    <p className="text-xs text-slate-600 mt-1">Без ожидания одобрения магазина</p>
                                </div>
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-green-700">✓ Единая кодовая база</div>
                                    <p className="text-xs text-slate-600 mt-1">Все платформы из одного кода</p>
                                </div>
                                <div className="rounded-xl bg-white p-3 shadow-sm">
                                    <div className="text-sm font-semibold text-green-700">✓ Адаптивный дизайн</div>
                                    <p className="text-xs text-slate-600 mt-1">Desktop, Tablet, Mobile — единый UX</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Модули */}
                    <section className="space-y-6" id="modules">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Модули проекта
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Core модули */}
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <CircleDot className="w-4 h-4 text-blue-500" /> Core модули (общие для USER + PARTNER)
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Auth & KYC/AML</div>
                                    <p className="text-sm text-slate-600">Регистрация, вход, подтверждение email, данные компании, загрузка документов, KYC stepper</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Invoice Payment</div>
                                    <p className="text-sm text-slate-600">Форма запроса, deal timeline, документы, история статусов</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">FX Revenue Return</div>
                                    <p className="text-sm text-slate-600">Форма запроса и отслеживание возврата валютной выручки</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Deal Tracking</div>
                                    <p className="text-sm text-slate-600">Список операций, фильтрация, детальный timeline</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Documents</div>
                                    <p className="text-sm text-slate-600">Список документов, управление статусами</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800">Support & FAQ</div>
                                    <p className="text-sm text-slate-600">Запросы поддержки, чат с менеджером, база знаний</p>
                                </div>
                            </div>
                        </div>

                        {/* Partner модули */}
                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <CircleDot className="w-4 h-4 text-purple-500" /> Специальные модули Partner
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Clients</div>
                                    <p className="text-sm text-slate-600">Управление клиентским портфелем</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Deals & Orders</div>
                                    <p className="text-sm text-slate-600">Таблица операций с отображением комиссий</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Income Calculator</div>
                                    <p className="text-sm text-slate-600">Инструмент расчёта комиссий/доходов</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Reports & Analytics</div>
                                    <p className="text-sm text-slate-600">Отчётность, аналитика, экспорт</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Payout Settings</div>
                                    <p className="text-sm text-slate-600">Настройки выплат партнёра</p>
                                </div>
                                <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3">
                                    <div className="font-semibold text-purple-800">Partner Tools</div>
                                    <p className="text-sm text-slate-600">Реферальная ссылка, QR код, материалы</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Стандарты UX/UI */}
                    <section className="space-y-4" id="ux-standards">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Стандарты UX/UI
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4 text-md text-slate-700 sm:grid-cols-2">
                            <ul className="space-y-1">
                                <li>• Высота экрана: 85–100vh</li>
                                <li>• H1: макс 2 строки, 60–70 символов</li>
                                <li>• 1 Primary CTA + 1 Secondary CTA</li>
                                <li>• Типография: Damascus + Gotham Pro</li>
                            </ul>
                            <ul className="space-y-1">
                                <li>• Grid: 4–6 колонок responsive</li>
                                <li>• Высота кнопки: 48–56px</li>
                                <li>• Touch target: мин 44×44px</li>
                                <li>• Анимация: Fade/slide 200–300ms</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                            <h4 className="text-md font-semibold text-slate-800 flex items-center gap-2">
                                <Zap className="w-5 h-5" /> Цели производительности
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

                    {/* График проекта */}
                    <section className="space-y-4" id="timeline">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                График проекта
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-slate-200">
                            <table className="min-w-full text-left text-md text-slate-700">
                                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3">Этап</th>
                                        <th className="px-4 py-3">Содержание</th>
                                        <th className="px-4 py-3">Срок</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Фаза 0</td>
                                        <td className="px-4 py-3">Discovery & Технический анализ</td>
                                        <td className="px-4 py-3 whitespace-nowrap">1 неделя</td>
                                    </tr>

                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Фаза 1</td>
                                        <td className="px-4 py-3">UX/UI Дизайн (UI Kit + Экраны)</td>
                                        <td className="px-4 py-3 whitespace-nowrap">1 неделя</td>
                                    </tr>

                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Фаза 2</td>
                                        <td className="px-4 py-3">Core MVP Разработка (общие USER + PARTNER)</td>
                                        <td className="px-4 py-3 whitespace-nowrap">4 недели</td>
                                    </tr>

                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium">Фаза 3</td>
                                        <td className="px-4 py-3">QA, DevOps & Release</td>
                                        <td className="px-4 py-3 whitespace-nowrap">2 недели</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-slate-600">
                            Общий срок: <strong>8 недель</strong> <br />
                            <span className="text-xs italic">
                                (Может быть скорректирован в зависимости от готовности backend и объёма интеграций)
                            </span>
                        </p>

                        {/* Детальный Sprint план */}
                        <div className="mt-6 space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Детальный Sprint план (Пример)
                            </h3>
                            <p className="text-xs text-slate-500 italic">
                                * Дата начала: после подписания контракта
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 0</div>
                                        <div className="text-xs text-slate-500">1 неделя</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">Foundation + Navigation</div>
                                        <p className="text-xs text-slate-600">App skeleton, bottom nav + burger overlay, base UI kit, auth flow основа</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 1</div>
                                        <div className="text-xs text-slate-500">2 недели</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">KYC модуль + Deal Creation</div>
                                        <p className="text-xs text-slate-600">Company details, docs upload, Invoice payment form, FX revenue return form</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 2</div>
                                        <div className="text-xs text-slate-500">4-5 недель</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">Deal Tracking + History</div>
                                        <p className="text-xs text-slate-600">Deal timeline, status history, documents block, manager chat UI</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 3</div>
                                        <div className="text-xs text-slate-500">6-7 недель</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">Support + Partner Tools</div>
                                        <p className="text-xs text-slate-600">Support list + chat, FAQ, Partner modules</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                                    <div className="w-16 text-center">
                                        <div className="text-xs font-bold text-slate-600">Sprint 4</div>
                                        <div className="text-xs text-slate-500">8 неделя</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-800">QA & Release</div>
                                        <p className="text-xs text-slate-600">Test, DevOps setup, production release</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Пакеты и ценообразование */}
                    <section className="space-y-4" id="packages">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Пакеты и цены
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* СТАНДАРТ */}
                            <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 flex items-center gap-1">
                                    <CircleDot className="w-3 h-3" /> Стандарт пакет
                                </div>
                                <div className="mt-2 text-xl font-bold text-slate-900">
                                    4.500 USD
                                </div>
                                <p className="mt-1 text-xs text-slate-600">
                                    MVP - Быстрый старт
                                </p>
                                <ul className="mt-3 space-y-1 text-sm text-slate-700 flex-1">
                                    <li>✓ Product Discovery Workshop (1 неделя)</li>
                                    <li>✓ Wireframe + UX Flow</li>
                                    <li>✓ Простой но чистый UI Kit</li>
                                    <li>✓ Core MVP Backend</li>
                                    <li>✓ User Auth (Login / Register)</li>
                                    <li>✓ Базовое управление Deal / Order</li>
                                    <li>✓ Простая Payment Logic (Mock / Manual)</li>
                                    <li>✓ Admin Panel (Basic)</li>
                                    <li>✓ Техническая документация</li>
                                    <li>✓ 2 недели Bug Fix поддержки</li>
                                </ul>
                                <div className="mt-3 border-t border-slate-200 pt-3 text-xs text-slate-600">
                                    <div className="font-semibold">Не включено:</div>
                                    <div>• Partner система</div>
                                    <div>• Расширенные отчёты</div>
                                    <div>• Автоматическая платёжная инфраструктура</div>
                                </div>
                            </div>

                            {/* РАСШИРЕННЫЙ */}
                            <div className="flex flex-col rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-md ring-2 ring-slate-400">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 flex items-center gap-1">
                                    <CircleDot className="w-3 h-3" /> Расширенный пакет ⭐
                                </div>
                                <div className="mt-2 text-xl font-bold text-slate-900">
                                    7.999 USD
                                </div>
                                <p className="mt-1 text-xs text-slate-600">
                                    MVP + Partner система
                                </p>
                                <ul className="mt-3 space-y-1 text-sm text-slate-700 flex-1">
                                    <li>✓ Стандарт пакет +</li>
                                    <li>✓ Partner / Affiliate система</li>
                                    <li>✓ Client & Partner роли</li>
                                    <li>✓ Deals & Orders расширенный поток</li>
                                    <li>✓ Автоматический Invoice & Платёжная логика</li>
                                    <li>✓ Income Calculator</li>
                                    <li>✓ Dashboard (Доход, операции, пользователи)</li>
                                    <li>✓ Basic Analytics (CSV / Export)</li>
                                    <li>✓ Notification System (Email / In-App)</li>
                                    <li>✓ Staging Deployment</li>
                                    <li>✓ 1 месяц поддержки & улучшений</li>
                                </ul>
                                <div className="mt-3 border-t border-slate-300 pt-3 text-xs text-slate-600">
                                    <div className="font-semibold text-slate-700">РЕКОМЕНДУЕМЫЙ</div>
                                </div>
                            </div>

                            {/* ПРЕМИУМ */}
                            <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md">
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 flex items-center gap-1">
                                    <CircleDot className="w-3 h-3" /> Премиум пакет
                                </div>
                                <div className="mt-2 text-xl font-bold text-slate-900">
                                    11.999 USD
                                </div>
                                <p className="mt-1 text-xs text-slate-600">
                                    Full Scope - Production Ready
                                </p>
                                <ul className="mt-3 space-y-1 text-sm text-slate-700 flex-1">
                                    <li>✓ Расширенный пакет включён</li>
                                    <li>✓ Advanced UX/UI (Design System)</li>
                                    <li>✓ QA тест сценарии</li>
                                    <li>✓ CI/CD Pipeline</li>
                                    <li>✓ DevOps настройка</li>
                                    <li>✓ Оптимизация производительности</li>
                                    <li>✓ Проверки безопасности</li>
                                    <li>✓ Production Release</li>
                                    <li>✓ Monitoring & Logging</li>
                                    <li>✓ Расходы на хостинг</li>
                                    <li>✓ Расходы на сервер</li>
                                    <li>✓ 4 месяца поддержки (не включает произвольные изменения)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Условия оплаты */}
                    <section className="space-y-4" id="payment">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Условия оплаты
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                                План оплаты (Для всех пакетов)
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center">
                                    <div className="text-2xl font-bold text-slate-700">50%</div>
                                    <div className="text-sm text-slate-600">Начало проекта</div>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center">
                                    <div className="text-2xl font-bold text-slate-700">50%</div>
                                    <div className="text-sm text-slate-600">Завершение проекта</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                                Способы оплаты
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1"><Building className="w-4 h-4" /> Оплата на компанию</div>
                                    <p className="text-sm text-slate-600 mt-1">Банковский перевод / Счёт</p>
                                    <p className="text-xs text-amber-600 mt-2 font-medium">* К сумме добавляется 7%</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1"><Diamond className="w-4 h-4" /> USDT</div>
                                    <p className="text-sm text-slate-600 mt-1">Крипто оплата (TRC-20 / ERC-20)</p>
                                    <p className="text-xs text-green-600 mt-2 font-medium">✓ Без доп. комиссии</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 p-3">
                                    <div className="font-semibold text-slate-800 flex items-center gap-1"><Banknote className="w-4 h-4" /> Наличные</div>
                                    <p className="text-sm text-slate-600 mt-1">Лично / Прямая оплата</p>
                                    <p className="text-xs text-green-600 mt-2 font-medium">✓ Без доп. комиссии</p>
                                </div>
                            </div>
                        </div>

                        {/* Таблица цен */}
                        <div className="overflow-x-auto rounded-2xl border border-slate-200">
                            <table className="min-w-full text-left text-md text-slate-700">
                                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3">Пакет</th>
                                        <th className="px-4 py-3">Чистая сумма</th>
                                        <th className="px-4 py-3">Оплата на компанию (+7%)</th>
                                        <th className="px-4 py-3">USDT / Наличные</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium"><CircleDot className="w-3 h-3 inline text-slate-500" /> Стандарт</td>
                                        <td className="px-4 py-3">4.500 USD</td>
                                        <td className="px-4 py-3">4.815 USD</td>
                                        <td className="px-4 py-3">4.500 USD</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-slate-50/30">
                                        <td className="px-4 py-3 font-medium"><CircleDot className="w-3 h-3 inline text-slate-600" /> Расширенный</td>
                                        <td className="px-4 py-3">7.999 USD</td>
                                        <td className="px-4 py-3">9.629 USD</td>
                                        <td className="px-4 py-3">7.999 USD</td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-4 py-3 font-medium"><CircleDot className="w-3 h-3 inline text-slate-500" /> Премиум</td>
                                        <td className="px-4 py-3">11.999 USD</td>
                                        <td className="px-4 py-3">14.979 USD</td>
                                        <td className="px-4 py-3">11.999 USD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Система KYC/AML */}
                    <section className="space-y-4" id="kyc-aml">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Система KYC/AML
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <p className="text-md text-slate-700">
                            Для соответствия законодательным требованиям международной платёжной платформы
                            будет интегрирована ручная система верификации KYC (Know Your Customer) и AML (Anti-Money Laundering).
                            Заявки будут поступать в админ панель Bitrix24 и подтверждаться вручную.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                                <div className="text-lg font-bold text-slate-700 mb-2">1</div>
                                <div className="font-semibold text-slate-800">CIP</div>
                                <p className="text-sm text-slate-600">Customer Identification Program - Базовая верификация данных</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                                <div className="text-lg font-bold text-slate-700 mb-2">2</div>
                                <div className="font-semibold text-slate-800">Document Verification</div>
                                <p className="text-sm text-slate-600">Ручная верификация документов - Bitrix24 admin panel</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                                <div className="text-lg font-bold text-slate-700 mb-2">3</div>
                                <div className="font-semibold text-slate-800">Sanctions Screening</div>
                                <p className="text-sm text-slate-600">Проверка OFAC, UN списков и PEP</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-4">
                            <h4 className="text-md font-semibold text-slate-800 mb-3 flex items-center gap-2"><ClipboardList className="w-5 h-5" /> KYC поток</h4>
                            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Регистрация</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Email верификация</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Данные компании</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Загрузка документов</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Подтверждение админом Bitrix</span>
                                <span className="text-slate-400">→</span>
                                <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">Одобрение</span>
                            </div>
                        </div>
                    </section>

                    {/* Безопасность */}
                    <section className="space-y-4" id="security">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                5-уровневая безопасность
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="space-y-3">
                            <div className="rounded-xl border border-slate-200 p-3 flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold shrink-0">1</div>
                                <div>
                                    <div className="font-semibold text-slate-800">Network Security</div>
                                    <p className="text-sm text-slate-600">CloudFlare DDoS защита, WAF, Rate limiting</p>
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
                                    <p className="text-sm text-slate-600">JWT tokens, опция MFA, RBAC, Audit logging</p>
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

                    {/* Количество экранов */}
                    <section className="space-y-4" id="screens">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Количество экранов
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
                                <div className="text-4xl font-bold text-slate-700">12</div>
                                <div className="text-md font-semibold text-slate-800 mt-1">Кабинет пользователя</div>
                                <p className="text-sm text-slate-600">Auth, KYC, Dashboard, Payments, Documents, Support</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
                                <div className="text-4xl font-bold text-slate-700">26</div>
                                <div className="text-md font-semibold text-slate-800 mt-1">Кабинет партнёра</div>
                                <p className="text-sm text-slate-600">+ Clients, Analytics, Calculator, Reports, Tools</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-center">
                            <div className="text-5xl font-bold text-slate-700">38</div>
                            <div className="text-md font-semibold text-slate-800 mt-1">Всего Production экранов</div>
                        </div>
                    </section>

                    {/* Допущения */}
                    <section className="space-y-3" id="assumptions">
                        <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Допущения и исключения
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3">
                                <div className="font-semibold text-slate-800 mb-2">✓ Допущения</div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• API сервисы предоставляются клиентом (или оцениваются отдельно)</li>
                                    <li>• Роль пользователя возвращается backend после логина</li>
                                    <li>• Требования к мультиязычности будут уточнены</li>
                                    <li>• Уточнится, является ли "Manager chat" real-time</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3">
                                <div className="font-semibold text-slate-800 mb-2">✗ Исключения</div>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Admin / backoffice панель</li>
                                    <li>• Расширенная BI & кастомная отчётность</li>
                                    <li>• Внешние KYC сервисные интеграции</li>
                                    <li>• Лицензии / сервисные расходы 3rd-party</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Заключение */}
                    <section className="space-y-3" id="conclusion">
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-slate-200" />
                            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Заключение
                            </h2>
                            <span className="h-px flex-1 bg-slate-200" />
                        </div>
                        <p className="text-md leading-relaxed text-slate-700">
                            <span className="font-semibold">Defyzer</span> предлагает разработать продукт,
                            объединяющий две роли (USER + PARTNER) в одном адаптивном веб-приложении;
                            включающий KYC/AML верификацию, invoice payment и FX revenue return процессы,
                            управление документами, отслеживание операций и специальные модули партнёра,
                            с использованием современных технологий и стандартов DevOps.
                        </p>
                        <ul className="space-y-1 text-md text-slate-700">
                            <li>✓ Навигация, система дизайна и цели производительности (LCP/CLS/TTI) будут применяться как критерии приёмки проекта</li>
                            <li>✓ Единая кодовая база, адаптивный дизайн для Desktop / Tablet / Mobile</li>
                            <li>✓ Масштабируемая архитектура, корпоративные стандарты безопасности</li>
                            <li>✓ Конкурентное ценообразование в соответствии с российским рынком</li>
                        </ul>
                        <p className="text-md leading-relaxed text-slate-700">
                            Мы готовы начать проект сразу после выбора пакета и подписания контракта.
                        </p>
                    </section>

                    {/* Контакты */}
                    <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center">
                        <h3 className="text-lg font-semibold text-slate-800">
                            Есть вопросы?
                        </h3>
                        <p className="mt-2 text-md text-slate-600">
                            Свяжитесь с нами, чтобы обсудить ваш проект.
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
