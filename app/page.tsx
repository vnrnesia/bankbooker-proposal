// app/page.tsx

export default function Home() {
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
                  Коммерческое предложение
                </div>
                <div className="text-md text-slate-500">
                  Defyzer — 14.11.{new Date().getFullYear()}
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
                  href="mailto:onurhasanbozkurt@gmail.com"
                  className="text-slate-500 underline-offset-2 hover:underline"
                >
                  info@defyzer.com
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Для
                </div>
                <div className="font-medium">Students Life</div>
                <p className="text-slate-500">partners@stud-life.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
            </h1>
            <p className="mt-2 max-w-2xl text-md text-slate-700 py-4">
              Разработка корпоративного веб-сайта для Students Life: современная
              цифровая платформа для автоматизации заявок, удобного сервиса и
              масштабирования бизнеса в сфере образования, визовой поддержки,
              перевода студентов, Умры и авиабилетов.
            </p>
          </div>
        </header>

        {/* İçerik alanı */}
        <article className="space-y-10 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur sm:p-10">
          {/* Введение */}
          <section className="space-y-4" id="intro">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Введение
              </h2>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <p className="text-md leading-relaxed text-slate-700">
              Компания <span className="font-semibold">Defyzer</span> предлагает
              комплексную разработку полноценного корпоративного веб-сайта для{" "}
              <span className="font-semibold">Students Life</span> —
              международной консалтинговой компании в сфере образования, визовой
              поддержки, перевода студентов, Умры и авиабилетов.
            </p>

            <p className="text-md leading-relaxed text-slate-700">
              Проект включает полный цикл работ, начиная от архитектуры и
              дизайна, заканчивая интеграцией форм, многими языковыми версиями и
              техническим запуском:
            </p>

            <ul className="space-y-2 text-md text-slate-700">
              <li>• создание структуры и логики сайта;</li>
              <li>
                • адаптация профессионального шаблона (template) под фирменный
                стиль;
              </li>
              <li>
                • разработка фронтенда и бэкенда на современной
                JavaScript-среде;
              </li>
              <li>• реализация всех форм заявок, указанных в ТЗ;</li>
              <li>
                • подключение форм к CRM (оплачивается отдельно) либо интеграция
                через наш собственный API с отправкой заявок в Telegram;
              </li>
              <li>• настройка геолокационной автоматической смены языка;</li>
              <li>• установка сайта, домена, хостинга и SSL.</li>
            </ul>

            <p className="text-md leading-relaxed text-slate-700">
              Цель проекта — предоставить Students Life современную цифровую
              платформу, которая ускоряет внутренние процессы, улучшает
              обработку заявок и помогает клиентам комфортно взаимодействовать с
              услугами компании.
            </p>
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
              <ul className="space-y-1">
                <li>• JavaScript (ES6+)</li>
                <li>• Next.js / React.js — высокопроизводительный frontend</li>
                <li>• Node.js (Nest.js / Express) — backend</li>
                <li>• PostgreSQL / MySQL — база данных</li>
                <li>• REST API / Webhooks</li>
              </ul>
              <ul className="space-y-1">
                <li>• Telegram Bot API / CRM API</li>
                <li>• Nginx — серверная оптимизация</li>
                <li>• Адаптивная верстка (mobile-first)</li>
                <li>• Оптимизация скоростей и безопасности</li>
              </ul>
            </div>
          </section>

          {/* Многоязычность и формы */}
          <section className="space-y-6" id="multilang-forms">
            {/* 3.1 Многоязычность */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                3.1. Многоязычность (автоматическая геолокация)
              </h3>
              <p className="text-md text-slate-700">
                Сайт автоматически определяет страну пользователя по IP и
                перенаправляет на соответствующую языковую версию:
              </p>
              <ul className="space-y-1 text-md text-slate-700">
                <li>
                  • Турция → <span className="font-mono">domain.com/tr</span>
                </li>
                <li>
                  • Россия → <span className="font-mono">domain.com/ru</span>
                </li>
                <li>
                  • Европа → <span className="font-mono">domain.com/en</span>
                </li>
                <li>
                  • Туркменистан →{" "}
                  <span className="font-mono">domain.com/tm</span>
                </li>
              </ul>
              <p className="text-md text-slate-700">
                Пользователь также может вручную переключить язык в меню.
              </p>
            </div>

            {/* Формы заявок */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                Формы заявок (цифровизация 6 направлений)
              </h3>
              <p className="text-md text-slate-700">
                Все формы из вашего документа будут реализованы полностью,
                включая направления:
              </p>
              <ul className="space-y-1 text-md text-slate-700">
                <li>• Абитуриенты</li>
                <li>• Перевод студентов</li>
                <li>• Школьники в Китай</li>
                <li>• Умра</li>
                <li>• Рабочая виза</li>
                <li>• Авиабилеты</li>
              </ul>
              <p className="text-md text-slate-700">Каждая форма включает:</p>
              <ul className="space-y-1 text-md text-slate-700">
                <li>• валидацию данных;</li>
                <li>
                  • динамические зависимые поля (страна → город, гражданство →
                  велаят);
                </li>
                <li>• генерацию уникального ID заявки;</li>
                <li>• отправку в CRM или Telegram;</li>
                <li>• запись в базу данных (для пакета PREMIUM);</li>
                <li>• защиту от спама.</li>
              </ul>
            </div>

            {/* Интеграция заявок */}
            <div className="space-y-3" id="integration">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                Интеграция заявок
              </h3>

              <div className="rounded-2xl border border-slate-200 p-4">
                <h4 className="text-md font-semibold text-slate-800">
                  Вариант A — Интеграция в CRM (AmoCRM / Bitrix24 / др.)
                </h4>
                <p className="mt-2 text-md text-slate-700">
                  Возможна за отдельную оплату. Обеспечивает полную
                  автоматизацию обработки лидов, передачу всех полей, меток и
                  источника заявок.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <h4 className="text-md font-semibold text-slate-800">
                  Вариант B — Через API в Telegram (входит в пакет)
                </h4>
                <p className="mt-2 text-md text-slate-700">
                  Формы отправляются прямо в приватный Telegram-канал компании.
                </p>

                {/* Placeholder: buraya sizin TG screenshot gelecek */}
                <div className="md:flex pt-4 space-y-4 md:space-y-0 gap-2">
                  <img src="/telegram.png" alt="Lead" className="rounded-md" />
                  <img
                    src="/telegram2.png"
                    alt="Lead"
                    className=" rounded-md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Дизайн и маркетинг */}
          <section className="space-y-6" id="design-marketing">
            {/* Дизайн */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                Дизайн (UI/UX)
              </h3>
              <p className="text-md text-slate-700">
                Students Life может значительно сэкономить время и бюджет, так
                как:
              </p>
              <ul className="space-y-1 text-md text-slate-700">
                <li>✔ Мы используем профессиональный premium-template;</li>
                <li>✔ Протестированный UI;</li>
                <li>✔ Готовые адаптивные компоненты;</li>
                <li>✔ Чистая структура;</li>
                <li>✔ Быстрая адаптация под бренд.</li>
              </ul>
              <p className="text-md text-slate-700">
                Это сокращает сроки выполнения на 30–40%, при этом результат
                остаётся полностью корпоративным и профессиональным.
              </p>

              <p className="mt-3 text-md text-slate-700">
                По желанию интегрируем:
              </p>
              <ul className="space-y-1 text-md text-slate-700">
                <li>• WhatsApp Chat Button</li>
                <li>• Telegram Live Chat</li>
                <li>• Tawk.to / Crisp / Chatra</li>
                <li>• Callback звонок</li>
                <li>• Push-уведомления</li>
              </ul>
            </div>

            {/* Рекомендации по маркетингу */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                Рекомендации по маркетингу (желательно добавить)
              </h3>
              <p className="text-md text-slate-700">
                Для увеличения конверсии мы рекомендуем рассмотреть:
              </p>
              <ul className="space-y-1 text-md text-slate-700">
                <li>• Блок «Сравнение стран и специальностей»</li>
                <li>• Калькулятор стоимости обучения</li>
                <li>• Блог с новостями о вузах и визах</li>
                <li>• Видео-отзывы студентов</li>
                <li>• FAQ с категориями</li>
                <li>• Геолокационные баннеры («Поступление для граждан РФ»)</li>
                <li>• Лид-магниты (PDF-гайды, чек-листы)</li>
              </ul>
            </div>
          </section>

          {/* Хостинг и домен + рабочий процесс */}
          <section className="space-y-6" id="hosting-process">
            {/* Хостинг и домен */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                4. Хостинг и домен
              </h3>
              <p className="text-md text-slate-700">
                Развёртывание сайта, серверная настройка, SSL и подключение
                домена выполняются командой Defyzer бесплатно. Клиент оплачивает
                только ежегодное продление собственного домена, как обычно.
              </p>
            </div>

            {/* ÇALIŞMA SÜRECİ TABLOSU */}
            <div className="space-y-3">
              <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
                Этапы разработки (10 дней)
              </h3>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full text-left text-md text-slate-700">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-4 py-3">Этап</th>
                      <th className="px-4 py-3">Описание</th>
                      <th className="px-4 py-3">Срок</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">1</td>
                      <td className="px-4 py-3">
                        Аналитика + распределение форм
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">1 день</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">2</td>
                      <td className="px-4 py-3">
                        Выбор и утверждение template
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">1 день</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">3</td>
                      <td className="px-4 py-3">Frontend: адаптация шаблона</td>
                      <td className="px-4 py-3 whitespace-nowrap">2 дня</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">4</td>
                      <td className="px-4 py-3">Backend: API, база, логика</td>
                      <td className="px-4 py-3 whitespace-nowrap">3 дня</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">5</td>
                      <td className="px-4 py-3">
                        Интеграция (Telegram или CRM)
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">1 день</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">6</td>
                      <td className="px-4 py-3">
                        Наполнение + языковые версии
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">1 день</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">7</td>
                      <td className="px-4 py-3">Тестирование и оптимизация</td>
                      <td className="px-4 py-3 whitespace-nowrap">1 день</td>
                    </tr>

                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium">8</td>
                      <td className="px-4 py-3">Запуск (домен, SSL, сервер)</td>
                      <td className="px-4 py-3 whitespace-nowrap">1 день</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-slate-600">
                Общий срок: 10 дней <br />
                <span className="text-xs italic">
                  (возможны небольшие корректировки по объёму контента)
                </span>
              </p>
            </div>
          </section>

          {/* Пакеты и стоимость */}
          <section className="space-y-4" id="packages">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                6. Пакеты и стоимость (в рублях)
              </h2>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* STANDARD */}
              <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  🔵 Пакет 1 — Standard
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  90.000 RUB
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Для быстрого старта
                </p>
                <ul className="mt-3 space-y-1 text-md text-slate-700">
                  <li>• Полный JS-сайт на template</li>
                  <li>• 6 форм заявок</li>
                  <li>• Интеграция через Telegram API</li>
                  <li>• Уведомления менеджерам</li>
                  <li>• Автоязыки (RU/TR) по геолокации</li>
                  <li>• SSL + установка домена</li>
                  <li>• Базовый SEO</li>
                  <li>• Стартовая оптимизация скорости</li>
                </ul>
                <div className="mt-3 border-t border-slate-200 pt-3 text-xs text-slate-600">
                  <div className="font-semibold">Дополнительно:</div>
                  <div>• CRM интеграция: +20.000 RUB</div>
                  <div>• Доп. язык: +8.000 RUB / язык</div>
                </div>
              </div>

              {/* BUSINESS */}
              <div className="flex flex-col rounded-2xl border border-violet-200 bg-violet-50/70 p-4 shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                  🟣 Пакет 2 — Business
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  130.000 RUB
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Оптимальный баланс скорости и функциональности
                </p>
                <ul className="mt-3 space-y-1 text-md text-slate-700">
                  <li>• Всё из STANDARD +</li>
                  <li>• Полная интеграция CRM (AmoCRM / Bitrix24)</li>
                  <li>• Telegram + Email уведомления</li>
                  <li>• Автогеолокация 3 языков (RU/TR/EN)</li>
                  <li>• Продвинутый backend API</li>
                  <li>• Повышенная безопасность</li>
                  <li>• Частичная админ-панель</li>
                  <li>• Скорость Google Score 85+</li>
                </ul>
              </div>

              {/* PREMIUM */}
              <div className="flex flex-col rounded-2xl border border-amber-200 bg-amber-50/70 p-4 shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                  🟡 Пакет 3 — Premium
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  190.000 RUB
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Полная автоматизация + поддержка
                </p>
                <ul className="mt-3 space-y-1 text-md text-slate-700">
                  <li>• Всё из BUSINESS</li>
                  <li>• 4 языка с геолокацией</li>
                  <li>
                    • Полная админ-панель (заявки, статусы, экспорт Excel/PDF)
                  </li>
                  <li>• Сохранение заявок в базу</li>
                  <li>• Усиленная анти-спам защита</li>
                  <li>• Интерактивные блоки (анимации)</li>
                  <li>• WhatsApp Business API</li>
                  <li>• 1 год технической поддержки — бесплатно</li>
                  <li>• Приоритетные обновления</li>
                  <li>• Оптимизация сервера и базы</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Оплата */}
          <section className="space-y-3" id="payment">
            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
              7. Оплата
            </h3>
            <ul className="space-y-1 text-md text-slate-700">
              <li>• 40% — старт работ;</li>
              <li>• 40% — после завершения разработки;</li>
              <li>• 20% — при публикации сайта.</li>
            </ul>
          </section>

          {/* SEO и маркетинг (доп. услуги) */}
          <section className="space-y-3" id="seo-marketing">
            <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-slate-500">
              SEO и маркетинг (доп. услуги)
            </h3>
            <ul className="space-y-1 text-md text-slate-700">
              <li>• SEO-аудит</li>
              <li>• Написание SEO-контента</li>
              <li>• Google Business настройка</li>
              <li>• Meta Ads / Google Ads</li>
              <li>• Email-маркетинг</li>
              <li>• Аналитика конверсий</li>
              <li>• Маркетинговые PDF-гайды</li>
            </ul>
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
              Defyzer предоставляет Students Life современную платформу, где:
            </p>
            <ul className="space-y-1 text-md text-slate-700">
              <li>• формы обрабатываются автоматически;</li>
              <li>• сайт работает быстро и стабильно;</li>
              <li>• интеграции надёжны и прозрачны;</li>
              <li>• языки выбираются автоматически по геолокации;</li>
              <li>• CRM / Telegram работают без ошибок;</li>
              <li>• Premium включает год бесплатной поддержки.</li>
            </ul>
            <p className="text-md leading-relaxed text-slate-700">
              Мы готовы приступить к работе сразу после выбора пакета и
              согласования финального ТЗ.
            </p>
          </section>
        </article>
        <div className="rounded-3xl mt-4 overflow-hidden">
          <img src="/team.jpg" alt="Team" className="w-full" />
        </div>
      </div>
    </main>
  );
}
