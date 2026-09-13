export type ProjectTab = {
    key: string;
    label: string;
    html?: string;
    tags?: string[];
    concepts?: { title: string; body: string }[];
};

export type Project = {
    id: string;
    num: string;
    category: string;
    title: string;
    description: string;
    impact: { value: string; label: string }[];
    diagram: { nodes: string[]; caption: string };
    tabs: ProjectTab[];
    roleNote: string;
    extras?: boolean;
};

export const projects: Project[] = [
    /* ───────────────────────── PROJECT 1 ───────────────────────── */
    {
        id: 'cad',
        num: '01',
        category: 'Engineering Automation · Legacy System Integration',
        title: 'CAD / Kitchen Hood Drawing Generator',
        description:
            'A Django-based engineering automation system that integrates with an existing PHP CRM and automatically generates manufacturing-ready CAD drawings from project specifications.',
        impact: [
            { value: '~80%', label: 'reduction in manual drafting effort' },
            { value: '1hr → <5s', label: 'drawing generation time' },
        ],
        diagram: {
            caption:
                'CRM job data flows into Django, which prefills, generates, and outputs a DXF drawing',
            nodes: [
                'PHP CRM',
                'Django Application (REST API)',
                'Fetch Job Specifications',
                'Pre-filled Drawing Form',
                'Drawing Generation Engine',
                'DXF File',
                'AutoCAD',
            ],
        },
        tabs: [
            {
                key: 'problem',
                label: 'Business Problem',
                html: `<p>Engineers previously had to manually enter project and hood specifications into the drawing workflow, even though the existing PHP CRM already held the required project and customer information.</p><p>The goal was to eliminate that duplicate data entry and automate CAD drawing generation from information that already existed in the CRM.</p>`,
            },
            {
                key: 'workflow',
                label: 'Existing Workflow',
                html: `<p>Before this system, sales entered project information into the PHP CRM, and an engineer separately re-entered the same specifications by hand into the drawing tool — a duplicate, error-prone step for every job.</p>`,
            },
            {
                key: 'solution',
                label: 'Solution',
                html: `<p>A Django application that reads a job ID or job name from the CRM, retrieves the relevant specifications over a REST API, and pre-fills a drawing form the engineer can review and adjust before generation.</p>`,
            },
            {
                key: 'architecture',
                label: 'Architecture',
                html: `<p>The CRM remains the system of record for project and customer data. Django is a specialized service layer that sits alongside it, purpose-built for CAD generation rather than general business data management.</p>`,
            },
            {
                key: 'dataflow',
                label: 'Data Flow',
                html: `<p>Sales enters project information → stored in the PHP CRM → engineer clicks &ldquo;Generate Drawing&rdquo; → Django receives the job ID → Django retrieves project information → the drawing form is automatically populated → engineer reviews and modifies data → Django generates a DXF file → engineer downloads the manufacturing drawing.</p>`,
            },
            {
                key: 'responsibilities',
                label: 'My Responsibilities',
                html: `<p>I worked on the Django integration layer, the REST API connection to the PHP CRM, the drawing-configuration logic, and the DXF generation engine — including automated dimensions, plan/elevation/section views, drawing schedules, and custom components.</p>`,
            },
            {
                key: 'tech',
                label: 'Technologies',
                tags: [
                    'Django',
                    'Python',
                    'REST API',
                    'PHP CRM Integration',
                    'ezdxf',
                    'JSON-based configuration',
                ],
            },
            {
                key: 'challenges',
                label: 'Engineering Challenges',
                html: `<p>The main challenge was engineering-specific drawing logic — generating correct dimensions, views, and schedules automatically from structured job data, rather than from a human drafting each one by hand.</p>`,
            },
            {
                key: 'decisions',
                label: 'Key Decisions',
                html: `<p><b class="text-text">Why Django wasn&rsquo;t built as a replacement for the CRM:</b> the CRM remained the source of truth, and Django specialized in CAD generation only. This separation avoided duplicating CRM functionality and let the drawing-generation logic evolve independently of the CRM.</p>`,
            },
            {
                key: 'outcome',
                label: 'Outcome',
                html: `<p>Manual drafting effort dropped by roughly 80%, and drawing generation time went from about an hour to under five seconds per job.</p>`,
            },
        ],
        roleNote:
            'The platform supported the full CRM-to-drawing workflow. I worked on the Django integration and drawing-generation logic that sits within it.',
    },

    /* ───────────────────────── PROJECT 2 ───────────────────────── */
    {
        id: 'game',
        num: '02',
        category: 'Backend Automation · Webhooks · Async Processing',
        title: 'Game Key Purchase Automation',
        description:
            'An automated digital-product fulfillment workflow connecting marketplace webhooks, Microsoft APIs, background workers, and the fulfillment process.',
        impact: [{ value: '70%+', label: 'reduction in manual operational work' }],
        diagram: {
            caption:
                'A marketplace webhook triggers validation, an async purchase task, and fulfillment',
            nodes: [
                'Eneba (Webhook)',
                'Django Backend',
                'Validate Purchase',
                'Microsoft API',
                'Purchase', 
                'Key Extraction',
                'Validation',
                'Fulfillment',
            ],
        },
        tabs: [
            {
                key: 'problem',
                label: 'Business Problem',
                html: `<p>Fulfilling digital game-key purchases by hand — watching for marketplace orders, purchasing keys through Microsoft&rsquo;s systems, and delivering them — didn&rsquo;t scale and was easy to get wrong under load.</p>`,
            },
            {
                key: 'workflow',
                label: 'Existing Workflow',
                html: `<p>Marketplace events had to be watched and acted on manually, with purchase and retrieval steps handled as separate, disconnected actions rather than a single traceable process.</p>`,
            },
            {
                key: 'solution',
                label: 'Solution',
                html: `<p>A webhook-driven backend: marketplace events land on a Django/GraphQL endpoint, get validated, and are handed to a Celery task that talks to the Microsoft API to purchase and retrieve the key before fulfillment.</p>`,
            },
            {
                key: 'architecture',
                label: 'Architecture',
                html: `<p>Webhook receipt and validation are kept in the request/response path; the slower, failure-prone work of talking to an external API is pushed into a Celery background task backed by Redis.</p>`,
            },
            {
                key: 'dataflow',
                label: 'Data Flow',
                html: `<p>Marketplace webhook → Django/GraphQL backend → validate purchase → Celery task → Microsoft API → purchase / key retrieval → validation → fulfillment.</p>`,
            },
            {
                key: 'responsibilities',
                label: 'My Responsibilities',
                html: `<p>I worked on the webhook handling, the Celery task pipeline, the Microsoft API integration, retry and backoff handling, and structured logging across the workflow.</p>`,
            },
            {
                key: 'tech',
                label: 'Technologies',
                tags: [
                    'Python',
                    'Django',
                    'GraphQL',
                    'Django ORM',
                    'MySQL',
                    'Celery',
                    'Redis',
                    'Webhooks',
                    'Microsoft API',
                    'Structured logging',
                ],
            },
            {
                key: 'challenges',
                label: 'Engineering Challenges',
                html: `<p>External API calls fail intermittently. The workflow needed to retry sensibly — without hammering the external service, and without leaving a purchase half-completed.</p>`,
                concepts: [
                    { title: 'Webhook-driven architecture', body: 'External marketplace events trigger backend processing.' },
                    { title: 'Asynchronous processing', body: 'Long-running or failure-prone operations are moved into background workers.' },
                    { title: 'Retry handling', body: 'Temporary external API failures can be retried rather than immediately failing the entire workflow.' },
                    { title: 'Exponential backoff', body: 'Retries are spaced progressively to avoid hammering external services.' },
                    { title: 'Structured logging', body: 'Important workflow events and failures can be traced systematically.' },
                ],
            },
            {
                key: 'decisions',
                label: 'Key Decisions',
                html: `<p>Separating validation (fast, synchronous) from fulfillment (slower, external, retryable) kept the webhook endpoint responsive while making failures recoverable rather than silent.</p>`,
            },
            {
                key: 'outcome',
                label: 'Outcome',
                html: `<p>Manual operational work on fulfillment dropped by more than 70%.</p>`,
            },
        ],
        roleNote:
            'The platform supported end-to-end webhook-to-fulfillment automation. I worked on the backend processing, async task pipeline, and external API integration.',
    },

    /* ───────────────────────── PROJECT 3 ───────────────────────── */
    {
        id: 'marine',
        num: '03',
        category: 'Data Platform · Maritime Analytics · Regulatory Compliance',
        title: 'Marine Emission &amp; Compliance Management Platform',
        description:
            'A data-driven maritime platform used by shipping-industry organizations to process vessel and voyage data, calculate emissions, evaluate regulatory compliance, and visualize fleet and vessel performance.',
        impact: [],
        diagram: {
            caption:
                'Excel voyage data is classified in Azure, stored in MongoDB, then split into emission and compliance calculations feeding a fleet/vessel/voyage dashboard',
            nodes: [
                'Shipping Operations',
                'Reporting Tool (Excel)',
                'Azure Logic App — Processing & Classification',
                'MongoDB',
                'Emission Calculations',
                'Compliance Calculations (EU · UK · IMO)',
                'Backend / APIs',
                'Analytics Dashboard (Fleet / Vessel / Voyage)',
            ],
        },
        tabs: [
            {
                key: 'problem',
                label: 'Business Problem',
                html: `<p>Shipping organizations need to track vessel and voyage-level data, calculate emissions, and evaluate compliance against several overlapping regulatory frameworks — by hand, this is slow and hard to keep consistent across a fleet.</p>`,
            },
            {
                key: 'workflow',
                label: 'Existing Workflow',
                html: `<p>The platform receives vessel operational data from a reporting tool in Excel format — vessel information, voyage information, machinery information, fuel consumption, and other operational measurements.</p>`,
            },
            {
                key: 'solution',
                label: 'Solution',
                html: `<p>Incoming Excel data is processed and classified by an Azure Logic App before being stored in MongoDB. From there, the platform runs emission calculations and compliance calculations across vessels and voyages, and surfaces the results in a dashboard.</p>`,
            },
            {
                key: 'architecture',
                label: 'Architecture',
                html: `<p>Data ingestion, calculation, and presentation are kept as distinct stages: Azure handles processing/classification, MongoDB holds the classified data, and separate calculation paths feed emissions and each compliance module before reaching the dashboard APIs.</p>`,
            },
            {
                key: 'dataflow',
                label: 'Data Flow',
                html: `<p>Shipping operations → reporting tool → Excel data → Azure Logic App (processing / classification) → MongoDB → emission calculations and compliance calculations (EU, UK, IMO) → backend / APIs → analytics dashboard (fleet, vessel, voyage level).</p>`,
            },
            {
                key: 'responsibilities',
                label: 'My Responsibilities',
                html: `<p>I worked on backend processing and API layers connecting MongoDB to the calculation logic and the dashboard, and on supporting features including the reporting-tool generator, compliance data export, and multi-tenant access control.</p>`,
            },
            {
                key: 'tech',
                label: 'Technologies',
                tags: [
                    'Python',
                    'Django',
                    'MongoDB',
                    'Azure Logic Apps',
                    'REST APIs',
                    'Multi-tenant architecture',
                    'RBAC',
                ],
            },
            {
                key: 'challenges',
                label: 'Engineering Challenges',
                html: `<p>Supporting multiple regulatory frameworks (EU ETS, FuelEU, EU MRV, UK MRV, IMO/DCS, CII, UK ETS) as separate calculation and reporting modules, while keeping a single consistent data model underneath, across a multi-tenant hierarchy of companies, fleets, vessels, and users.</p>`,
            },
            {
                key: 'decisions',
                label: 'Key Decisions',
                html: `<p>Modeling compliance frameworks as independent calculation/reporting modules — rather than one combined calculation — kept each regulation&rsquo;s logic isolated and easier to reason about and extend.</p>`,
            },
            {
                key: 'outcome',
                label: 'Outcome',
                html: `<p>A working platform giving shipping organizations fleet-, vessel-, and voyage-level visibility into emissions and compliance status across multiple regulatory frameworks, with company-level multi-tenant access control.</p>`,
            },
        ],
        roleNote:
            'The platform supported ingestion, emission and compliance calculation, and fleet analytics end to end. I worked on backend processing, APIs, and several platform features described below — not the entire system in isolation.',
        extras: true,
    },
    /* ───────────────────────── PROJECT 4 ───────────────────────── */
    {
        id: 'pristine',
        num: '04',
        category: 'Backend Engineering · Multi-Tenant Architecture · Farm Analytics',
        title: 'Pristine DMS',
        description:
            'A FastAPI-based poultry farm management and analytics platform that tracks flock growth, feed, water, environment, operations, and profitability while supporting multiple customer organizations through a database-per-tenant architecture.',
        impact: [
            { value: '2–5s → 200–500ms', label: 'dashboard widget response time' },
            { value: '15–25 → 3–5', label: 'dashboard queries' },
            { value: '85–95%', label: 'cache hit rate' },
            { value: '~75–90%', label: 'faster widgets overall' },
        ],
        diagram: {
            caption:
                'A tenant request is authenticated via JWT, routed by middleware to the correct customer database, optimized through pooling and caching, and returned as an analytics response',
            nodes: [
                'User Login',
                'JWT Issued (with tenant context)',
                'Authenticated API Request',
                'Authentication Middleware',
                'Database Routing Middleware',
                'Resolve Customer / Database',
                'Dynamic Tenant Connection',
                'Tenant MySQL (pooled, indexed)',
                'Optimized Query + Cache',
                'Analytics Response',
            ],
        },
        tabs: [
            {
                key: 'problem',
                label: 'Business Problem',
                html: `<p>Poultry farming operations generate daily data across farm units, flock cycles, bird weights, feed consumption, water consumption, mortality and culling, harvesting, environmental conditions, sensor readings, target growth values, and profitability.</p><p>Operators needed a single centralized dashboard that turned those operational inputs into a clear picture of farm performance. The system also needed to evolve from one deployment per customer into a single master platform capable of serving multiple customer organizations without mixing their operational data.</p>`,
            },
            {
                key: 'domain',
                label: 'Domain Model',
                html: `<p>The platform is built around a small set of operational entities that describe a poultry operation from placement through harvest.</p>
<pre class="mt-4 overflow-x-auto rounded border border-line bg-surface-2 p-4 font-mono text-[0.78rem] leading-[1.7] text-text-muted">Farm Unit
    │
    ▼
Cycle / Batch
    │
    ├── Weight       (daily bird weight vs. target)
    ├── Feed         (consumption + cost)
    ├── Water        (daily consumption)
    ├── Operations   (deaths, culling, harvest, livability)
    ├── Environment  (temperature, humidity)
    ├── Sensors      (IoT-related measurements)
    ├── Target       (expected weight curve by breed)
    └── Harvest      (end-of-cycle sales)</pre>
<p class="mt-4">A <b class="text-text">Farm Unit</b> represents the physical farm, house, or floor and its bird capacity. A <b class="text-text">Cycle</b> is one flock raised from placement through harvest. <b class="text-text">Target</b> is the expected daily weight curve for the breed, compared against <b class="text-text">actual recorded weight</b>. Feed, water, and operations are daily inputs; environment and sensors capture on-site conditions; harvest closes the cycle with sales information.</p>`,
            },
            {
                key: 'solution',
                label: 'Solution',
                html: `<p>A FastAPI backend that ingests daily operational data, stores it in per-tenant MySQL databases, and exposes a dashboard of analytics — target vs. actual weight, cumulative performance, livability, FCR, temperature vs. humidity, price per bird, cost per weight, and profit.</p><p>The application evolved from a separate deployment and database per customer into a single master platform that routes each authenticated request to the correct customer database using context carried in the JWT.</p>`,
            },
            {
                key: 'architecture',
                label: 'Architecture',
                html: `<p><b class="text-text">From single-tenant to multi-tenant.</b> Originally, the application ran as a separate deployment with its own database for each customer.</p>
<pre class="mt-4 overflow-x-auto rounded border border-line bg-surface-2 p-4 font-mono text-[0.75rem] leading-[1.7] text-text-muted">BEFORE

Customer A                 Customer B
   │                          │
Application A              Application B
   │                          │
Database A                 Database B</pre>
<p class="mt-4">This was replaced with a master platform that keeps a customer registry in a control-plane database and connects dynamically to one database per tenant.</p>
<pre class="mt-4 overflow-x-auto rounded border border-line bg-surface-2 p-4 font-mono text-[0.75rem] leading-[1.7] text-text-muted">AFTER

                MASTER DATABASE
                     │
              Customer Registry
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
  Customer DB A           Customer DB B
         │                       │
  Farm / Cycle / Data     Farm / Cycle / Data</pre>
<p class="mt-4">The master database acts as a control plane. It stores the customers, users, master admins, and the tenant database information needed to identify which database a request belongs to. Each tenant database holds only that customer's business data — farm units, cycles, targets, feed, water, operations, harvest, environment, sensors — isolated at the database level.</p>`,
            },
            {
                key: 'dataflow',
                label: 'Data Flow',
                html: `<p>How a tenant request finds the correct database:</p>
<pre class="overflow-x-auto rounded border border-line bg-surface-2 p-4 font-mono text-[0.78rem] leading-[1.8] text-text-muted">User Login
    ↓
JWT Created
    ↓
JWT Contains Tenant Context
    ↓
Authenticated API Request
    ↓
Authentication Middleware
    ↓
Database Routing Middleware
    ↓
Identify Customer / Database
    ↓
Dynamic Database Connection
    ↓
Tenant Database
    ↓
Query
    ↓
Response</pre>
<p class="mt-4">The JWT carries context including login type, customer ID, and database name. The database routing middleware reads that context and attaches the resolved customer information to the request so downstream handlers operate against the correct tenant database.</p>`,
            },
            {
                key: 'responsibilities',
                label: 'My Work',
                html: `<ul><li>Worked on the FastAPI backend and API layer.</li><li>Worked with Tortoise ORM and MySQL.</li><li>Worked on authentication and JWT-based request handling.</li><li>Worked on multi-tenant database routing.</li><li>Worked with dynamic database connections.</li><li>Worked on dashboard and backend query optimization.</li><li>Worked with SQLAlchemy for optimized database access.</li><li>Worked on database indexing and performance improvements.</li><li>Worked with Docker Compose and environment setup.</li><li>Worked on data synchronization and backup workflows.</li><li>Worked with sensor-related backend data.</li></ul>`,
            },
            {
                key: 'tech',
                label: 'Technologies',
                tags: [
                    'Python',
                    'FastAPI',
                    'MySQL',
                    'AWS RDS',
                    'Tortoise ORM',
                    'SQLAlchemy',
                    'Aerich',
                    'JWT',
                    'Docker Compose',
                    'AWS S3',
                    'Connection Pooling',
                    'Caching',
                    'Database Indexing',
                    'Query Optimization',
                ],
            },
            {
                key: 'challenges',
                label: 'Engineering Challenges',
                html: `<p><b class="text-text">Supporting multiple organizations was not simply a matter of adding a <code class="text-text">company_id</code> column to every table.</b></p><p>The application had evolved from separate customer deployments into a centralized master platform. The solution combined a master database, a database-per-tenant model, and dynamic database routing so that tenant selection became part of the request lifecycle — handled once by middleware — rather than something every individual endpoint had to implement manually.</p><p>Alongside that, dashboard performance became a real bottleneck. Slow widgets, sequential queries, N+1 problems, and repeated database access had to be addressed through batch queries, JOINs, indexes, connection pooling, and caching.</p>`,
                concepts: [
                    { title: 'Database-per-tenant isolation', body: "Each customer's operational data lives in its own database, not in a shared schema." },
                    { title: 'Master / control-plane database', body: 'Holds customers, users, master admins, and tenant database routing information.' },
                    { title: 'Dynamic database routing', body: 'Middleware resolves the correct tenant connection from JWT context on every request.' },
                    { title: 'Two database access paths', body: 'Tortoise ORM for dynamic tenant connections, and SQLAlchemy for optimized queries with connection pooling and cached engine management.' },
                    { title: 'Dashboard query optimization', body: 'Batch queries, JOINs, indexing, pooling, and caching to reduce round trips.' },
                    { title: 'Sensor / operational data', body: 'Weight, feed, water, and temperature readings flow through the backend into analytics.' },
                ],
            },
            {
                key: 'decisions',
                label: 'Key Decisions',
                html: `<p><b class="text-text">Why database-per-tenant?</b> The architecture isolated each customer's operational data in its own database while keeping a master database for customer and tenant management. This allowed the application to determine which database a request should operate against based on authenticated tenant context. For this product's requirements, database-per-tenant was the chosen isolation model.</p>
<div class="mt-5 rounded border border-line bg-surface-2 p-4">
<p class="mb-3 font-mono text-[0.74rem] text-redline">// performance optimizations implemented</p>
<pre class="overflow-x-auto font-mono text-[0.78rem] leading-[1.8] text-text-muted">Slow / Sequential Dashboard
        ↓
Multiple Queries · N+1 Problems · Repeated DB Access
        ↓
Optimization
        ↓
Batch Queries · JOINs · Indexes · Connection Pooling · Caching
        ↓
Fewer Database Round Trips</pre>
</div>
<div class="mt-5 rounded border border-line bg-surface-2 p-4">
<p class="mb-3 font-mono text-[0.74rem] text-redline">// composite indexes for hot query paths</p>
<pre class="overflow-x-auto font-mono text-[0.78rem] leading-[1.8] text-text-muted">cycle
(company_code_id, active_status)

inputoperation
(cycle_id, company_id, date)

sensor_data
(farm_unit_code, type_sensor, date_sensor)</pre>
<p class="mt-3 text-[0.88rem] text-text-muted">These indexes reduce the amount of data the database needs to scan for common dashboard and operational queries.</p>
</div>
<div class="mt-5 rounded border border-line bg-surface-2 p-4">
<p class="mb-3 font-mono text-[0.74rem] text-redline">// connection pooling — reuse instead of recreate</p>
<pre class="overflow-x-auto font-mono text-[0.78rem] leading-[1.8] text-text-muted">Without Pooling              With Connection Pool

Request                      Request  Request  Request
  ↓                             │        │        │
Create DB Connection            └────────┴────────┘
  ↓                                      ↓
Query                            Reuse Connections
  ↓
Close Connection</pre>
</div>
<div class="mt-5 rounded border border-line bg-surface-2 p-4">
<p class="mb-3 font-mono text-[0.74rem] text-redline">// caching</p>
<p class="text-[0.9rem] text-text-muted">The optimized dashboard included a 5-minute TTL cache to avoid repeatedly executing expensive or repetitive database queries. Caching was applied to the dashboard's heavy read paths, not to every endpoint.</p>
</div>
<div class="mt-5 rounded border border-line bg-surface-2 p-4">
<p class="mb-3 font-mono text-[0.74rem] text-redline">// data synchronization &amp; backups</p>
<pre class="overflow-x-auto font-mono text-[0.78rem] leading-[1.8] text-text-muted">Local MySQL
     │
     ▼
Database Dump
     │
     ├──────────────► Cloud MySQL
     │
     └──────────────► AWS S3 Backup</pre>
<p class="mt-3 text-[0.88rem] text-text-muted">Synchronization scripts dumped local MySQL data, restored it between local and cloud environments, uploaded the dump to AWS S3, and removed the local dump after upload. Sensor synchronization was also handled. Scheduled jobs (Windows Task Scheduler) drove the recurring sync.</p>
</div>
<div class="mt-5 rounded border border-line bg-surface-2 p-4">
<p class="mb-3 font-mono text-[0.74rem] text-redline">// migrations</p>
<pre class="overflow-x-auto font-mono text-[0.78rem] leading-[1.8] text-text-muted">Model Changes
     ↓
Aerich Migration  (init · init-db · migrate · upgrade · downgrade)
     ↓
Migration History
     ↓
Database Upgrade</pre>
</div>`,
            },
            {
                key: 'outcome',
                label: 'Outcome',
                html: `<p>The project documentation reports the following improvements from the dashboard and database optimizations.</p>
<div class="mt-4 grid gap-3 sm:grid-cols-2">
<div class="rounded border border-line bg-surface-2 p-4">
<p class="font-mono text-[0.72rem] text-text-faint">Dashboard widget response time</p>
<p class="mt-1 font-serif text-[1.2rem] text-trace">2–5s → 200–500ms</p>
</div>
<div class="rounded border border-line bg-surface-2 p-4">
<p class="font-mono text-[0.72rem] text-text-faint">Dashboard queries</p>
<p class="mt-1 font-serif text-[1.2rem] text-trace">15–25 → 3–5</p>
</div>
<div class="rounded border border-line bg-surface-2 p-4">
<p class="font-mono text-[0.72rem] text-text-faint">Cache hit rate</p>
<p class="mt-1 font-serif text-[1.2rem] text-trace">85–95%</p>
</div>
<div class="rounded border border-line bg-surface-2 p-4">
<p class="font-mono text-[0.72rem] text-text-faint">Overall widget improvement</p>
<p class="mt-1 font-serif text-[1.2rem] text-trace">~75–90% faster</p>
</div>
</div>
<div class="mt-6">
<span class="mb-2 inline-block rounded border border-dashed border-redline-dim px-2 py-0.5 font-mono text-[0.68rem] text-redline">Illustrative visualization — sample data only</span>
<div class="rounded border border-line bg-surface-2 p-5">
<p class="mb-3 font-mono text-[0.78rem] text-text-faint">Target vs. Actual Weight · Cumulative Performance · Livability · FCR</p>
<div class="flex h-[90px] items-end gap-1.5">
<div class="flex-1 rounded-t-sm" style="height:42%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:55%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:68%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:74%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:82%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:88%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:91%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
<div class="flex-1 rounded-t-sm" style="height:95%;background:linear-gradient(to top,#2E4A44,#6FE4C6)"></div>
</div>
</div>
</div>
<p class="mt-6 text-[0.95rem] text-text-muted"><b class="text-text">Takeaway.</b> This project gave me practical experience with the problems that appear when a backend grows beyond simple CRUD: tenant isolation, dynamic database routing, authentication context, connection management, query optimization, caching, indexing, synchronization, and performance-sensitive dashboards.</p>`,
            },
        ],
        roleNote:
            'The platform supported multi-tenant farm operations, analytics, and performance-optimized dashboards. I worked on the FastAPI backend, multi-tenant database routing, authentication, query optimization, and infrastructure setup — not the entire system in isolation.',
    },
];