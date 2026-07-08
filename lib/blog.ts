import { IBlogPost } from '@/types';

export const BLOG_POSTS: IBlogPost[] = [
    {
        title: '.NET Web APIs: How to Handle 10k Requests/Sec Without Your Server Catching Fire',
        slug: 'building-scalable-net-web-apis-best-practices',
        date: 'July 5, 2026',
        readTime: '6 min read',
        description: 'Writing an API controller is easy. Keeping it alive when production traffic hits is where the real fun begins. Let’s talk thread starvation, global exception handlers, and database connection pools.',
        content: `
            <p>Let’s be honest: writing an API is easy. You scaffold a controller, query a database, and return a JSON payload. It works beautifully on your local machine. But then, production traffic hits, the API latency spikes, database connections exhaust, and your server starts breathing fire.</p>
            
            <p>Here is a battle-tested guide to structuring and optimizing your ASP.NET Core Web APIs so they can scale to 10k+ concurrent requests without breaking a sweat.</p>

            <h3>1. The Silent Killer: Thread Pool Starvation</h3>
            <p>Many developers think that <code>async/await</code> makes their code run "faster". It doesn't. What it actually does is improve <strong>throughput</strong> by freeing up threads while waiting for I/O operations (like database queries or external API calls).</p>
            <p>If you mix synchronous code (like calling <code>.Result</code> or <code>.Wait()</code> on a Task) with asynchronous code, you block the executing thread. Under high load, this causes the thread pool to starve, and your API will freeze. Rule of thumb: <strong>Go async all the way down.</strong></p>

            <h3>2. Write Clean, Self-Healing Code with Global Exceptions</h3>
            <p>Wrapping every single controller endpoint in a massive try-catch block is a recipe for messy code. Instead, let your controllers focus solely on handling request routing, and delegate exception logging to a middleware:</p>
            
            <pre><code>// In your Global Exception Middleware
public async Task InvokeAsync(HttpContext context)
{
    try
    {
        await _next(context);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "API Error: {Message}", ex.Message);
        await HandleExceptionAsync(context, ex);
    }
}</code></pre>

            <h3>3. Stop Over-Fetching Data</h3>
            <p>Database queries are almost always the biggest bottleneck. If your client only needs a user's name and email, don't execute a <code>SELECT *</code> that pulls back 40 columns including their hashed password and full profile history. Use Entity Framework projections (<code>.Select()</code>) to query only what you need.</p>
        `,
        tags: ['.NET', 'Backend', 'C#', 'Performance'],
        thumbnail: '/blog/net-api.jpg',
    },
    {
        title: 'Confessions of an Angular Dev: Why I Flirted with Next.js (And Stayed)',
        slug: 'why-i-switched-from-angular-to-nextjs',
        date: 'June 20, 2026',
        readTime: '5 min read',
        description: 'I used to be an Angular purist. Give me modules, Dependency Injection, and RxJS or give me death. Then, I built a project in Next.js. Here is an honest, zero-fluff comparison.',
        content: `
            <p>For years, I was an Angular zealot. I loved the opinionated framework layout, the robust Dependency Injection system, and the sheer power of RxJS for state management. When colleagues suggested React, I laughed and muttered about their lack of a standard folder structure.</p>
            
            <p>Then, I had to build a fast, SEO-optimized portfolio and marketing site. Attempting this with Angular Universal was a headache. So, I took a weekend to try Next.js. Here is what happened.</p>

            <h3>The Magic of Next.js Routing and SSR</h3>
            <p>In Angular, configuring Server-Side Rendering (SSR) and pre-rendering felt like retrofitting a rocket engine onto a bicycle. Next.js, on the other hand, was built for it. The file-system based router means you just drop a file into <code>app/blog/page.tsx</code> and—boom—you have a fully optimized, statically pre-rendered route ready to index on Google.</p>

            <h3>Angular is a Fortress; Next.js is a Playground</h3>
            <p>Angular enforces rules. It protects big teams from writing bad code by locking everything down. Next.js gives you freedom. While freedom can lead to messy spaghetti code if you aren't careful, it also unlocks a level of developer velocity that Angular simply cannot match for lightweight to medium-scale web applications.</p>

            <h3>The Verdict</h3>
            <p>If you're building a massive corporate dashboard with 50+ developers, stay with Angular. If you are building a modern SaaS, a content platform, or an interactive portfolio, Next.js will make you fall in love with web development all over again.</p>
        `,
        tags: ['Angular', 'Next.js', 'Frontend', 'Web Dev'],
        thumbnail: '/blog/angular-nextjs.jpg',
    },
    {
        title: 'Building a Second Brain: Vector Search & Bedrock Without Going Broke',
        slug: 'integrating-openai-and-aws-bedrock-for-intelligent-search',
        date: 'May 12, 2026',
        readTime: '8 min read',
        description: 'A vanilla LLM is basically a fast-talking intern who hallucinates facts when they don\'t know the answer. Let\'s fix that by building a RAG system using OpenAI embeddings and AWS Bedrock.',
        content: `
            <p>If you ask a standard ChatGPT model about your private business documents or codebase, it will either refuse to answer or make up a highly convincing lie. Training or fine-tuning your own model is incredibly expensive and time-consuming.</p>
            
            <p>The solution? <strong>Retrieval-Augmented Generation (RAG)</strong>. Think of RAG as giving the LLM an open-book exam where you provide the exact pages it needs to read before answering.</p>

            <h3>Step 1: Chunking and Embedding (The Setup)</h3>
            <p>First, we split our long documents into smaller chunks (about 500-1000 characters each). We then send these chunks to OpenAI's embedding API. The API converts text into a list of numbers representing its "semantic meaning". We store these numbers (vectors) in a vector database like pgvector.</p>

            <h3>Step 2: Vector Search (The Retrieval)</h3>
            <p>When a user asks a question, we convert their question into a vector and search our vector database for the closest matching chunks. In milliseconds, we find the exact text fragments containing the answers.</p>

            <h3>Step 3: Anthropic Claude on AWS Bedrock (The Generation)</h3>
            <p>We send those relevant chunks along with the user's question to Claude on AWS Bedrock. The model synthesizes the answer using only the provided facts. The result? Fast, highly accurate answers without leakage of sensitive user data.</p>
        `,
        tags: ['AI', 'AWS', 'OpenAI', 'RAG'],
        thumbnail: '/blog/ai-search.jpg',
    }
];
