export default async (request, context) => {
    const url = new URL(request.url);
    const path = url.pathname;

    // Only process /blog/* requests
    if (!path.startsWith('/blog/') || path === '/blog/') {
        return context.next();
    }

    const slug = path.split('/')[2];

    // Blog data (simplified for meta tags)
    const blogPosts = [
        {
            slug: 'opus-4-6-и-защо-е-толкова-добър',
            title: 'Opus 4.6 и защо е толкова добър',
            excerpt: 'Claude Opus 4.6 постави нов стандарт в AI индустрията. Разбираме какво го прави толкова специален и как може да помогне на вашия бизнес.',
            image: '/images/blog/blog_opus.png'
        },
        {
            slug: 'openclaw-личният-ai-асистент',
            title: 'OpenClaw: Вашият личен, автономен AI асистент',
            excerpt: 'OpenClaw (известен още като Moltbot) е мощен софтуерен AI агент, работещ локално на вашето устройство, с акцент върху сигурността и автономността.',
            image: '/images/blog/blog_openclaw.png'
        },
        {
            slug: 'ai-личен-асистент-за-брокери',
            title: 'AI Личен Асистент за Брокери на Недвижими Имоти',
            excerpt: 'Как AI личните асистенти спестяват време и пари на брокерите. Автоматизация на комуникацията, планиране на огледи и управление на клиенти.',
            image: '/images/blog/blog_broker.png'
        },
        {
            slug: 'как-ai-агентите-променят-бъдещето',
            title: 'Как AI Агентите променят бъдещето',
            excerpt: 'AI агентите са новата работна сила. Те работят 24/7, не боледуват и струват в пъти по-малко от реален служител.',
            image: '/images/blog/blog_agents.png'
        },
        {
            slug: 'cold-outreach-system-3',
            title: 'Защо Lead Gen & Client Outreach System 3 променя правилата',
            excerpt: 'Персонализираният Cold Outreach вече не е това, което беше. Новата система генерира 10 пъти повече качествени лийдове.',
            image: '/images/blog/blog_outreach.png'
        },
        {
            slug: 'ai-трансформация-на-почистваща-фирма',
            title: 'AI Трансформация на Почистваща Фирма',
            excerpt: 'Как почистваща фирма увеличи приходите си с 200% чрез AI автоматизация на процесите.',
            image: '/images/blog/blog_cleaning.png'
        },
        {
            slug: 'ai-в-правен-екип',
            title: 'AI в Правен Екип',
            excerpt: 'Как правните екипи използват AI за анализ на договори, правни изследвания и автоматизация на рутинни задачи.',
            image: '/images/blog/blog_legal.png'
        },
        {
            slug: 'ai-телефонни-агенти',
            title: 'Защо AI Телефонните Агенти вече звучат по-добре от истински служители',
            excerpt: 'AI телефонните агенти са на следващото ниво. Те звучат естествено, разбират контекст и не правят грешки.',
            image: '/images/blog/blog_phone.png'
        },
        {
            slug: 'chatgpt-5-за-бизнес',
            title: 'ChatGPT-5 за бизнес: Пълно ръководство и изкуството на prompting',
            excerpt: 'Научете как да използвате ChatGPT-5 максимално ефективно за вашия бизнес с нашето практическо ръководство.',
            image: '/images/blog/blog_chatgpt.png'
        },
        {
            slug: 'как-да-използвам-ai-в-бизнеса-си',
            title: 'Как да използвам AI в бизнеса си: практическо ръководство',
            excerpt: 'Практическо ръководство за собственици на бизнес, които искат да внедрят AI, но не знаят откъде да започнат.',
            image: '/images/blog/blog_strategy.png'
        }
    ];

    const post = blogPosts.find(p => p.slug === slug);

    const response = await context.next();
    const page = await response.text();

    if (!post) {
        return new Response(page, response);
    }

    const siteUrl = 'https://adaptica-ai.com';
    const postUrl = `${siteUrl}/blog/${post.slug}`;
    const imageUrl = post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`;

    const ogTags = `
    <meta property="og:title" content="${post.title}" />
    <meta property="og:description" content="${post.excerpt}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${postUrl}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${post.title}" />
    <meta name="twitter:description" content="${post.excerpt}" />
    <meta name="twitter:image" content="${imageUrl}" />
  `;

    // Inject tags into the head
    const updatedPage = page.replace('</head>', `${ogTags}</head>`);

    return new Response(updatedPage, response);
};
