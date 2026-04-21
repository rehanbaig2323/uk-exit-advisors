import { advisorsData } from './advisors';
import { routes } from './routes';
import { services } from './services';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string[];
  relatedRoutes: string[];
  relatedServices: string[];
  relatedLocations: string[];
  lastUpdated: string;
};

export type GuideSection = {
  title: string;
  body: string;
};

export type RouteGuide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string[];
  sections: GuideSection[];
  faqs: Array<{ question: string; answer: string }>;
  compareWith: string[];
  relatedAdvisors: string[];
  lastUpdated: string;
};

const lastUpdated = 'April 2026';

const sectorAliasTerms: Record<string, string[]> = {
  technology: ['technology', 'software', 'tmt', 'digital platforms', 'fintech'],
  healthcare: ['healthcare', 'medical'],
  manufacturing: ['manufacturing', 'industrial'],
  'professional-services': ['professional services', 'business services', 'financial and professional services', 'business and professional services', 'corporate services'],
  construction: ['construction', 'property and construction'],
  media: ['media', 'broadcast', 'content'],
};

const sectorPages: ContentPage[] = [
  {
    slug: 'technology',
    title: 'Technology exit advisors in the UK',
    h1: 'Technology exit advisors',
    description: 'Compare UK firms with visible technology, software, SaaS and digital-platform exit work.',
    intro: [
      'Technology exits are rarely judged only on headline revenue. Buyers and advisers look at product maturity, recurring revenue quality, customer concentration, retention, security, founder dependency and how much of the value sits in the platform rather than the people. That makes technology one of the most process-sensitive sectors in the directory. A credible adviser needs to understand both the commercial story and the practical risk points that can make a buyer slow down or change price late in the process.',
      'The strongest public matches here are firms that have demonstrable work in technology, software, SaaS, digital platforms or adjacent growth businesses. GP Bullhound stands out for technology M&A and growth capital. Arrowpoint Advisory and Cavendish bring mainstream mid-market sell-side depth. Bishopsgate and Moore Kingston Smith add founder-led and EOT experience, which matters when the business is a tech-enabled professional firm or a software services group rather than a pure product company. Burges Salmon also shows that technology work is often interdisciplinary, especially where legal structuring or ownership rollovers matter.',
      'Owners in technology often face a different set of questions from owners in slower-moving sectors. They need help deciding whether to sell early, wait for scale, raise capital first or prepare for a more competitive process later. That is why the best adviser is not just the one with a tech logo page. It is the one that can explain how buyers will underwrite growth, how diligence will treat customer churn and how the deal should be structured if part of the value depends on future performance.',
      'A strong technology adviser should also be able to explain the difference between strategic buyers and financial sponsors. Strategic buyers may care about product fit, channel access and data advantages. Sponsors may care more about growth rates, EBITDA conversion and management depth. A founder planning an exit should compare those routes against their appetite for diligence, disclosure and a longer negotiation. The better firms can pressure-test all of that before the business is over-exposed to the market.',
      'This page is designed to help owners move from a broad sector search to a smaller shortlist. Start with the profiles below, then compare recent work, senior involvement and the exact subsectors a firm has handled. The public evidence should show whether the team has genuine experience with software, digital platforms or adjacent growth businesses, not just a generic claim that it “works with technology companies”.',
      'If you are comparing a technology exit with another route such as a trade sale, MBO or partial exit, the route guide pages are the next step. They explain how the deal path affects timing, control and certainty, while the location pages help you find advisers who are genuinely active in the UK cities that matter most to your business.',
    ],
    relatedRoutes: ['trade-sale', 'mbo', 'partial-exit'],
    relatedServices: ['corporate-finance-ma', 'legal'],
    relatedLocations: ['london'],
    lastUpdated,
  },
  {
    slug: 'healthcare',
    title: 'Healthcare exit advisors in the UK',
    h1: 'Healthcare exit advisors',
    description: 'Specialist UK firms with public healthcare, medical and care-sector exit work.',
    intro: [
      'Healthcare owners need advisers who understand that the buyer is not just acquiring earnings. They are also acquiring regulatory exposure, clinical or service delivery risk, staffing resilience, reputation and the continuity of care. In some cases the business is a regulated practice; in others it is a services company with strong recurring relationships but a high duty of care. Those differences matter, because the right exit process depends on what a buyer will actually scrutinise.',
      'The strongest public matches in this directory are not all pure healthcare boutiques. Brabners, Hawsons Corporate Finance, Shaw & Co, Bishopsgate Corporate Finance, Arrowpoint Advisory and Burges Salmon all show relevant healthcare, medical or adjacent services work. That is useful because healthcare exits often sit at the intersection of legal, tax, valuation and corporate finance rather than one narrow discipline. The best adviser team can help the owner understand which issues are commercial, which are compliance-led and which simply need tidying before a buyer sees them.',
      'For owners of medical, care, diagnostics, specialist services or healthcare-adjacent businesses, sector experience is most valuable when it is specific. A team that has handled hospitals, practices, care services or healthcare suppliers will understand how clients are won, how contracts renew, how people risk flows through the P&L and which representations tend to matter in diligence. It is not enough for a firm to be generally good at M&A; it should be able to show it has worked through the real issues that decide whether a healthcare deal gets done cleanly.',
      'Another reason healthcare pages are useful is that many owners are exploring more than one exit route. A trade sale may be the obvious option, but a management buyout or staged succession can be more attractive when the team is stable and the founder wants continuity. The adviser shortlist should therefore be judged against the outcome the owner actually wants, not against a generic “sell the business” brief.',
      'When comparing firms, look for evidence of deal process discipline, comfort with regulated or sensitive information, and the ability to keep the timetable tight without creating unnecessary alarm. The public profile should make clear whether the firm is working on mainstream healthcare M&A, professional-medical practices or healthcare-adjacent services, because those are not the same thing.',
      'The profiles below are the useful starting point. Once you have compared them, move on to the route pages to see whether a trade sale, MBO or succession plan fits the business model and the owner’s timing.',
    ],
    relatedRoutes: ['trade-sale', 'mbo', 'succession'],
    relatedServices: ['corporate-finance-ma', 'legal', 'tax'],
    relatedLocations: ['london', 'bristol'],
    lastUpdated,
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing exit advisors in the UK',
    h1: 'Manufacturing exit advisors',
    description: 'UK advisers with visible manufacturing, industrial and engineering exit experience.',
    intro: [
      'Manufacturing exits tend to be judged on operational resilience as much as financial performance. Buyers want to understand capacity, supply chain exposure, customer concentration, plant or equipment investment, margins by product line and whether the business depends too heavily on a single founder or technical lead. That makes manufacturing one of the clearest examples of where sector understanding changes the quality of the advice.',
      'RVE Corporate Finance, Hawsons Corporate Finance, Shaw & Co, Bishopsgate Corporate Finance and Arrowpoint Advisory all show relevant manufacturing or industrial work. That gives owners a choice between firms that are more transaction-led and firms that bring deeper tax, legal or founder-led restructuring support. In manufacturing, that mix matters because the sale process often needs to explain both the business model and the operational reality behind it.',
      'A strong manufacturing adviser should be able to talk clearly about working capital, capex cycles, customer contracts, plant utilisation and the way diligence will assess operational concentration. If the business has a lot of tangible assets, the adviser should also be able to coordinate valuations and legal diligence without turning the process into a technical mess. Owners should be wary of anyone who makes the process sound like a generic service-business sale when the underlying issues are clearly industrial.',
      'This sector also creates a lot of route-choice questions. Some manufacturers sell best through a trade sale because of synergy value. Others are better suited to an MBO or EOT where continuity matters and the management team already understands the plants, orders and workforce. A decent adviser should help the owner compare these outcomes early, not just react once a buyer has emerged.',
      'If the business has regional operations or a long trading history, the owner should also ask whether the adviser has handled businesses of similar complexity. The right team will show real evidence of manufacturing exit work, not just a list of unrelated M&A mandates. That evidence is what makes the page useful and what helps a human visitor decide who to contact.',
      'Use the profiles below to compare the current shortlist, then move into the route pages if you want to weigh trade sale, MBO or EOT-style alternatives against the operational realities of the business.',
    ],
    relatedRoutes: ['trade-sale', 'mbo', 'eot'],
    relatedServices: ['corporate-finance-ma', 'legal', 'tax'],
    relatedLocations: ['london', 'bristol'],
    lastUpdated,
  },
  {
    slug: 'professional-services',
    title: 'Professional services exit advisors in the UK',
    h1: 'Professional services exit advisors',
    description: 'Advisers with public experience in professional services, business services and partner-led firms.',
    intro: [
      'Professional services businesses often look simple from the outside and complicated from the inside. The value usually depends on client relationships, recurring work, partner retention, staff depth, contract renewal and how much revenue follows the founder rather than the firm. That creates a very specific exit problem: the buyer is not only purchasing earnings but also confidence that the firm can keep delivering once ownership changes.',
      'The strongest matches on this page are Moore Kingston Smith, Brabners, RVE Corporate Finance, Shaw & Co, Bishopsgate Corporate Finance and Arrowpoint Advisory. They show a useful mix of corporate finance, legal, tax and EOT capability, which is important in partner-led or founder-led professional firms. In this category, ownership often changes more smoothly when the adviser understands governance, client sensitivity and the need to keep the team calm while the transaction is being prepared.',
      'Professional services businesses can exit through multiple routes. A trade sale may maximise price, but an EOT or MBO can be more attractive when continuity matters or when the partners want a managed handover. Some firms are also used to partial exits or staged liquidity events, especially when the founder wants to remain involved for a period. A strong adviser should be able to help the owner think through those options before the process becomes public.',
      'The right shortlist should show more than generic “services” experience. Owners should look for evidence that the adviser has worked with accountancy firms, legal practices, consultancies, recruiters, agencies or similar relationship-led businesses. Those models behave differently from asset-heavy or product-led sectors, and the diligence questions are different too.',
      'A credible adviser should also be able to explain how people risk affects price. In professional services, the buyer wants to know whether clients are loyal to the firm, the brand, the local team or a few individuals. That is why a good exit process usually includes a careful narrative about client retention, team depth and governance rather than just EBITDA.',
      'Use this page to compare firms with the kind of experience your business actually needs, then move into the relevant route guide to see whether trade sale, EOT or MBO is likely to be the cleaner fit.',
    ],
    relatedRoutes: ['trade-sale', 'eot', 'mbo'],
    relatedServices: ['corporate-finance-ma', 'legal', 'tax'],
    relatedLocations: ['london'],
    lastUpdated,
  },
  {
    slug: 'construction',
    title: 'Construction exit advisors in the UK',
    h1: 'Construction exit advisors',
    description: 'UK firms with public construction and property-related exit work.',
    intro: [
      'Construction businesses create a different kind of exit question. Buyers focus on project pipeline, margin discipline, subcontractor reliance, working capital, contract risk, quality of forecasting and whether the business is tied too closely to a few key relationships. The best adviser for a construction exit understands that the headline figures do not tell the whole story; the timing of jobs, the quality of orders and the balance between commercial and operational risk all matter.',
      'RVE Corporate Finance and Shaw & Co are the strongest visible matches for this page. Both show relevant construction or property-linked sector exposure, which is useful because owners in this space often need a practical, deal-led adviser rather than a generalist who only knows service businesses. If the company also has legal, tax or restructuring issues, the owner may need a team around the transaction rather than one single adviser.',
      'Construction exits are often more sensitive to working capital and performance drift than owners expect. A clean process needs a buyer to understand the stage of completion on live projects, the quality of contract terms and the likelihood of margin leakage. It also needs the seller to present the business in a way that does not overstate backlog or understate exposure. That is where the right adviser adds leverage: by making sure the numbers are explainable before a bidder starts asking questions.',
      'In this sector, route choice can be especially important. A trade sale may make sense if there is buyer synergy or a consolidation angle. A management buyout may be cleaner if the existing leadership team already runs the contracts and relationships. Owners should compare the likely pressure on due diligence, the amount of personal guarantee exposure and the time it will take to unwind founder involvement.',
      'When comparing firms, look for evidence of actual construction, contracting, building services or property-related transactions. The page exists to separate real market evidence from generic claims, so the profiles below are the right starting point if you want to speak to advisers who have worked in the sector before.',
      'After that, use the route guides to compare trade sale and MBO options against the practical realities of the business.',
    ],
    relatedRoutes: ['trade-sale', 'mbo'],
    relatedServices: ['corporate-finance-ma', 'legal', 'valuation'],
    relatedLocations: ['bristol'],
    lastUpdated,
  },
  {
    slug: 'media',
    title: 'Media exit advisors in the UK',
    h1: 'Media exit advisors',
    description: 'Advisers with public media, publishing, content and agency-side exit experience.',
    intro: [
      'Media businesses often trade on a mix of brand, relationships, creative capability and recurring commercial performance. That can make exit planning more subtle than a simple earnings multiple. Buyers may care about client retention, talent concentration, audience quality, contracted revenue, ownership of intellectual property and whether the business is led by a founder whose influence is hard to replace. A good adviser needs to be alive to all of that.',
      'The strongest visible matches here are Moore Kingston Smith, Arrowpoint Advisory and GP Bullhound. They give the page a useful spread of corporate finance, advisory and growth-capital expertise, which is helpful because media businesses do not all exit the same way. Some sell as marketing or communications assets, others as digital products or creator-led businesses, and the commercial story needs to reflect that reality.',
      'Media owners often face an awkward balance between growth and certainty. A buyer may value a business for its creative reputation or its access to an audience, but diligence will still come back to contract renewals, margin quality and how much of the business depends on the founder or a small number of senior people. That means the adviser should be able to explain both the upside and the fragility in a straightforward way.',
      'Route choice matters as well. A trade sale can work well when strategic value is strong. A partial exit may be better if the founder wants liquidity while keeping a stake in future growth. In some cases an MBO or succession plan is more realistic if the business is highly relationship-led and the team can carry the work forward internally.',
      'When comparing firms, look for public evidence of media, digital or agency-side transactions, not just a broad claim to work with “creative businesses”. The adviser should be able to discuss the business model in a way that makes sense to an owner, a buyer and a lender.',
      'The profiles below are the useful starting point for that comparison. Then use the route pages to test whether the business is better suited to a trade sale, MBO or partial exit.',
    ],
    relatedRoutes: ['trade-sale', 'partial-exit', 'mbo'],
    relatedServices: ['corporate-finance-ma', 'legal'],
    relatedLocations: ['london'],
    lastUpdated,
  },
];

const locationPages: ContentPage[] = [
  {
    slug: 'london',
    title: 'London exit advisors',
    h1: 'London exit advisors',
    description: 'Compare UK exit advisers headquartered in London and active in the capital.',
    intro: [
      'London remains the deepest market in the directory because the city concentrates specialist corporate finance, legal, tax and wealth-planning talent. That matters for exit planning: owners can compare a broader range of advisers, but they also need to be more selective because “London-based” does not automatically mean “right for my deal”. The useful comparison is between firms with a real public track record in the route, sector and deal size that matter to the owner.',
      'The London shortlist here includes Moore Kingston Smith, Postlethwaite Solicitors, Bishopsgate Corporate Finance, Saffery, Cavendish Corporate Finance, Arrowpoint Advisory, GP Bullhound and Cazenove Capital. That mix is useful because it spans corporate finance, legal, tax, technology, employee ownership and wealth planning. For owners who are still deciding how to exit, a London page is often the fastest way to compare specialist depth without losing sight of the broader decision.',
      'Location pages are not just about postcode convenience. They help owners understand which advisers are genuinely close to the market they operate in, which teams have repeated exposure to London-based buyers and investors, and which firms are likely to have the senior people you actually want to speak to. If the business is in a regulated, founder-led or high-growth sector, a London adviser may be the best fit simply because the process and buyer set are more complex.',
      'The page is also useful when the business itself is elsewhere but the deal team will be based in London. Buyers, sponsors, lawyers and tax advisers often cluster there, so owners in other regions still use London firms when the transaction is mid-market or cross-border.',
      'Use the profiles below to compare the active London firms, then move to the route guides if you want to compare trade sale, EOT, MBO or succession planning in more detail. If a page does not yet exist for a city you care about, that usually means the current directory does not yet have enough strong public matches to make it worth indexing.',
      'This page is intentionally curated. It is better to have a strong London hub with real evidence than to create a thin city page with names that do not add much value.',
    ],
    relatedRoutes: ['trade-sale', 'eot', 'mbo', 'succession'],
    relatedServices: ['corporate-finance-ma', 'legal', 'tax'],
    relatedLocations: ['bristol'],
    lastUpdated,
  },
  {
    slug: 'bristol',
    title: 'Bristol exit advisors',
    h1: 'Bristol exit advisors',
    description: 'Compare Bristol-based advisers with visible exit work in the South West.',
    intro: [
      'Bristol is a useful location page because the city has a smaller but credible cluster of specialist advisers that cover corporate finance, legal and advisory work. In this directory, the strongest Bristol matches are Shaw & Co and Burges Salmon. That is enough to make the page useful because the two firms are different in style and are relevant to different types of exit: one is more advisory-led, while the other brings a heavyweight legal and corporate platform.',
      'A location page only works if the listed firms are good enough to compare. Bristol clears that bar because owners can use the page to understand not just who is nearby but which firm is likely to fit a trade sale, MBO or more structured ownership change. That helps businesses in the South West compare local advisory depth against the possibility of instructing a London team instead.',
      'For many Bristol-based owners, the practical question is whether local proximity matters more than sector fit. The answer depends on the deal. If the company is relatively straightforward and the owner values direct access to senior advisers, Bristol firms may be ideal. If the transaction is larger, more technical or likely to involve a broader buyer pool, the owner may still want to compare the Bristol option against a London-led process.',
      'The location page therefore serves two jobs. It gives a fast shortlist, and it also helps owners understand when a nearby firm is enough and when the wider market should be opened up. That distinction is especially useful where the business has regional roots but national buyers.',
      'Use the advisor profiles below to compare the firms that actually matter, then use the route pages to decide whether the likely outcome is trade sale or MBO. For a city page, the value is in the quality of the shortlist, not the number of cards on the screen.',
    ],
    relatedRoutes: ['trade-sale', 'mbo'],
    relatedServices: ['corporate-finance-ma', 'legal'],
    relatedLocations: ['london'],
    lastUpdated,
  },
];

const routeGuideContent: Record<string, RouteGuide> = {
  'trade-sale': {
    slug: 'trade-sale',
    title: 'Trade sale guide',
    h1: 'Trade sale',
    description: 'How a trade sale works, when it fits and which advisers matter most.',
    intro: [
      'A trade sale is the classic external exit: the company is sold to a strategic buyer, competitor, consolidator or financial sponsor. It is usually the right route when the owner wants to maximise value through competition, widen the buyer pool and reach an outcome that can be cleanly explained to shareholders, staff and counterparties. It is also the route most likely to benefit from strong process discipline, because the business is being judged by several parties at once rather than one familiar counterparty.',
      'The trade-sale process is rarely just about finding a buyer. It is about making the business saleable in the way buyers expect. That means preparing the numbers, the story, the legal position and the management team so diligence does not derail the process. A good corporate finance adviser keeps momentum and creates the competitive tension that tends to support price, while legal and tax advisers make sure the transaction structure does not introduce problems late in the process.',
    ],
    sections: [
      { title: 'How the route works', body: 'Most trade sales begin with preparation, then move into buyer mapping, marketing or selective outreach, initial bids, heads of terms, diligence and completion. The process is often staged so the seller can test value before going fully public. A good adviser manages information carefully so the owner does not over-disclose too early.' },
      { title: 'When it is suitable', body: 'Trade sale is usually suitable when the owner wants the strongest pricing tension, the business has a clear buyer story and the founder is comfortable selling to an outside party. It often suits businesses with strategic appeal, strong recurring revenue or capabilities that a buyer can bolt on to an existing platform.' },
      { title: 'Typical timeline', body: 'Straightforward cases can complete in roughly four to nine months, but more complex processes can run longer if there are multiple bidders, cross-border buyers, regulatory checks, earn-outs or heavy warranty negotiation. The real timetable is driven by how prepared the company is before it goes to market.' },
      { title: 'Key risks', body: 'The biggest risks are confidentiality leaks, overestimating value, weak management depth, slow diligence and letting one buyer dominate the process too early. The seller also needs to keep trading performance stable while the deal is being negotiated, because drift can change the price late in the process.' },
      { title: 'What advisers you need', body: 'Most owners need a corporate finance lead, a lawyer and usually tax support. Depending on the business, valuation, debt advisory or wealth planning may also be useful. The best teams coordinate the work rather than forcing the owner to manage each adviser separately.' },
      { title: 'What to compare', body: 'Compare sector experience, senior involvement, buyer access, process discipline and the quality of recent transactions. The right team should be able to explain what creates value, where diligence can go wrong and how they will keep the process moving.' },
    ],
    faqs: [
      { question: 'Is a trade sale always the highest-value route?', answer: 'Not always. It often offers the broadest buyer pool, but value depends on the business, the timing and how much strategic demand exists for what the company does.' },
      { question: 'How much should owners prepare before going to market?', answer: 'Enough to give buyers a credible, tidy story on numbers, contracts, management depth and legal structure. Preparation usually improves certainty as well as price.' },
      { question: 'What makes a strong trade-sale adviser?', answer: 'Clear process management, relevant sector evidence, senior attention and the ability to keep buyers competing without losing control of the timetable.' },
    ],
    compareWith: ['EOT', 'MBO'],
    relatedAdvisors: ['moore-kingston-smith', 'bishopsgate-corporate-finance', 'cavendish-corporate-finance', 'arrowpoint-advisory', 'gp-bullhound'],
    lastUpdated,
  },
  eot: {
    slug: 'eot',
    title: 'Employee ownership trust guide',
    h1: 'EOT',
    description: 'How an EOT works, when employee ownership fits and what advisers are needed.',
    intro: [
      'An employee ownership trust transfers control of the business to a trust for the benefit of employees. It is usually considered when the owner wants continuity, independence and a succession outcome that does not involve selling to an external buyer. The route can work particularly well for profitable businesses with stable cash flow, a capable management team and a strong cultural case for remaining independent.',
      'The EOT process has more moving parts than many founders expect. There is the sale itself, but also trust design, governance, tax structuring, funding, employee communication and the owner’s future role. That is why the best EOT advice is usually multidisciplinary. Corporate finance shapes the valuation and deal structure, lawyers handle the trust and completion mechanics, and tax advisers make sure the structure is understood before the transaction is agreed.',
    ],
    sections: [
      { title: 'How the route works', body: 'The owner sells a controlling stake to the trust, which then holds the shares for employees. The business typically repays the consideration over time from future profits, so the structure needs enough cash flow and a realistic repayment profile.' },
      { title: 'When it is suitable', body: 'EOT is often suitable where the owner wants to preserve culture, reward staff and step back gradually rather than sell to an outside buyer. It is usually strongest where the company has recurring profitability, a stable team and a sensible board or management structure already in place.' },
      { title: 'Typical timeline', body: 'Many EOTs take around three to nine months, depending on tax planning, trust setup, valuation and the amount of governance work required. More complex ownership histories or shareholder groups can push that longer.' },
      { title: 'Key risks', body: 'The main risks are weak cash flow, unrealistic valuation expectations, misunderstandings about governance after completion and treating the route as a simple tax play rather than an ownership change with ongoing obligations.' },
      { title: 'What advisers you need', body: 'Most owners need tax, legal and corporate finance support. A trustee or employee-ownership specialist may also be important where the trust design and ongoing governance need careful work.' },
      { title: 'What to compare', body: 'Compare completed EOT experience, governance knowledge, explanation quality, tax coordination and the practical support offered after completion. The best adviser should be able to show how the business will work once the founder is less involved.' },
    ],
    faqs: [
      { question: 'Is an EOT only about tax relief?', answer: 'No. Tax can be relevant, but the more important question is whether the business and its owner actually want employee ownership and can support it financially.' },
      { question: 'Do employees become direct shareholders?', answer: 'Usually no. The trust owns the shares on their behalf, which is why governance and trustee design matter.' },
      { question: 'What kind of business fits EOT best?', answer: 'Typically a profitable, stable business with enough cash generation to fund the transition and a management team that can continue the business.' },
    ],
    compareWith: ['Trade Sale', 'Succession'],
    relatedAdvisors: ['moore-kingston-smith', 'postlethwaite-solicitors', 'rve-corporate-finance', 'hawsons-corporate-finance', 'saffery'],
    lastUpdated,
  },
  mbo: {
    slug: 'mbo',
    title: 'Management buyout guide',
    h1: 'MBO',
    description: 'How a management buyout works and what owners should compare before starting one.',
    intro: [
      'A management buyout is the sale of the business to the team already running it. It often suits owners who want continuity, know the management team is capable and would rather sell to people who already understand the business than open a wider market process. In the right situation, that can make the exit quicker and smoother than a broad auction, but it still needs careful structuring and a realistic funding plan.',
      'The challenge in an MBO is that the buyers usually do not have unlimited cash. They may need funding, vendor support or a phased transaction structure. That means the owner must think not only about price but also about certainty, governance, control and what happens if the management team cannot raise the money on the original timetable. The adviser’s job is to keep the deal realistic without losing the logic of the exit.',
    ],
    sections: [
      { title: 'How the route works', body: 'The existing management team negotiates to buy the company, often with external debt, equity or vendor financing. The process may be negotiated privately rather than marketed widely, which can shorten the timetable but reduces the competitive tension that a trade sale can create.' },
      { title: 'When it is suitable', body: 'MBO is often suitable when there is a strong leadership bench, the founder wants continuity and the business is too sensitive or relationship-led for a public sale process. It can also be useful where the team already has the trust of customers and staff.' },
      { title: 'Typical timeline', body: 'Simple MBOs can complete in a few months, but more structured transactions can take longer if the financing package is complex, shareholders need separate treatment or the parties are negotiating a staged exit.' },
      { title: 'Key risks', body: 'The most common risks are undercapitalising the deal, creating tension between founders and management, overreliance on a few key people and leaving too little room for a clean handover if the process drags on.' },
      { title: 'What advisers you need', body: 'Owners usually need corporate finance, legal and often tax support. Valuation input can be valuable if the number is likely to be debated, and debt advisory may matter if the financing structure is not straightforward.' },
      { title: 'What to compare', body: 'Compare financing capability, deal structuring skill, sensitivity to management dynamics and the adviser’s ability to keep founder and management aligned through the process.' },
    ],
    faqs: [
      { question: 'Is an MBO cheaper than a trade sale?', answer: 'It can be, but that depends on the financing and how much external support is required. Lower complexity does not automatically mean lower cost.' },
      { question: 'Can the founder stay involved after completion?', answer: 'Yes, often for a transition period, but that should be agreed clearly so everyone understands decision rights and timelines.' },
      { question: 'What is the biggest MBO failure point?', answer: 'Usually financing or misaligned expectations between the seller and the management team.' },
    ],
    compareWith: ['Trade Sale', 'Partial Exit'],
    relatedAdvisors: ['moore-kingston-smith', 'bishopsgate-corporate-finance', 'shaw-co', 'saffery', 'arrowpoint-advisory'],
    lastUpdated,
  },
  succession: {
    slug: 'succession',
    title: 'Business succession guide',
    h1: 'Succession',
    description: 'How to think about family, management or employee succession over time.',
    intro: [
      'Succession is not a single transaction. It is the planned transfer of ownership and control over time, often to family members, management, employees or a mix of all three. That makes it more flexible than a trade sale, but also easier to delay or handle badly. Good succession planning is usually about reducing uncertainty early, then sequencing the ownership, management and personal-wealth questions in a sensible order.',
      'Many owners underestimate how long succession takes. If the next generation, management team or employee group is not ready, the process can stretch over years. That is why succession planning often involves tax, legal, corporate finance and wealth advice together. The most useful advisers help the owner separate the emotional side of the handover from the mechanics of ownership, governance and timing.',
    ],
    sections: [
      { title: 'How the route works', body: 'Succession can involve staged share transfers, governance changes, trusts, family arrangements or a gradual management handover. The exact shape depends on who is taking over and how much control the founder wants to retain during the transition.' },
      { title: 'When it is suitable', body: 'It is suitable when the owner wants continuity, the business needs time to transition or the next generation or management team is not yet ready for a full handover. It is also common where the owner wants a more personal or family-led outcome than a sale to a third party.' },
      { title: 'Typical timeline', body: 'Succession often runs for years rather than months because the business, the ownership and the governance may all change in stages. That is not a failure of the process; it is often the point of it.' },
      { title: 'Key risks', body: 'The main risks are delay, weak successor readiness, family conflict, blurred management responsibilities and failing to separate ownership from operational control.' },
      { title: 'What advisers you need', body: 'Owners usually need legal, tax, corporate finance and often wealth-planning support. Where the business may move toward employee ownership, trustee or EOT advice can become important too.' },
      { title: 'What to compare', body: 'Compare governance experience, communication quality, tax awareness and whether the adviser understands the human side of the transition as well as the technical side.' },
    ],
    faqs: [
      { question: 'Is succession the same as an exit?', answer: 'It can be, but it is usually a more gradual form of exit or control transfer rather than a one-day sale.' },
      { question: 'When should owners start succession planning?', answer: 'Earlier than they think. The best outcomes usually come from planning before the founder is forced to make a rushed decision.' },
      { question: 'Does succession always involve family?', answer: 'No. It can also mean management or employee succession, or a combination of routes.' },
    ],
    compareWith: ['EOT', 'MBO'],
    relatedAdvisors: ['postlethwaite-solicitors', 'saffery', 'moore-kingston-smith'],
    lastUpdated,
  },
  'partial-exit': {
    slug: 'partial-exit',
    title: 'Partial exit guide',
    h1: 'Partial exit',
    description: 'How a partial exit works when the owner wants liquidity but not a full sale.',
    intro: [
      'A partial exit is a useful option when the owner wants to de-risk personally, bring in a partner or investor, or stage the eventual sale over time. Instead of selling everything, the founder sells part of the business and keeps a stake in the upside. That can make sense when the business still has growth ahead, when the owner wants future participation or when a full exit would be premature.',
      'These deals can be structured in several ways: minority investment, preferred equity, a phased sale or a combination of cash and rollover. That flexibility is attractive, but it also means the owner needs a clear view of control, dividends, governance and future exit rights. Without that clarity, a partial exit can create as many problems as it solves.',
    ],
    sections: [
      { title: 'How the route works', body: 'The owner sells a minority or majority stake and retains the rest, often alongside a new partner, investor or management group. The exact deal mechanics determine how much control is kept, how distributions work and when the next liquidity event happens.' },
      { title: 'When it is suitable', body: 'Partial exit works well when the founder wants some cash out now but believes the company can still grow materially. It can also be useful where the seller wants to test a new partner relationship before a full transaction.' },
      { title: 'Typical timeline', body: 'Timelines vary because the structure can be highly negotiated. Straightforward minority deals may move quickly, while transactions with governance changes, rollover equity or bespoke rights can take considerably longer.' },
      { title: 'Key risks', body: 'The biggest risks are misaligned expectations about control, dividend policy, reinvestment, drag/tag rights and the timing of the next exit. Partial exits can be difficult if the parties do not agree on the endgame.' },
      { title: 'What advisers you need', body: 'Corporate finance, legal and tax support are usually central. Valuation can matter a lot because the value of the part sold and the stake retained both need to make sense in the same structure.' },
      { title: 'What to compare', body: 'Compare structuring skill, negotiation discipline, comfort with equity complexity and whether the adviser understands how the retained stake will behave over time.' },
    ],
    faqs: [
      { question: 'Is a partial exit a good compromise?', answer: 'Often yes, if the owner wants liquidity now and believes the remaining stake is worth keeping. It only works if the governance is clear.' },
      { question: 'Do partial exits always involve investors?', answer: 'No. They can also be staged sales to management, family or other shareholders.' },
      { question: 'What is the main thing to negotiate?', answer: 'Control, future rights and the path to the next liquidity event.' },
    ],
    compareWith: ['Trade Sale', 'MBO'],
    relatedAdvisors: ['gp-bullhound', 'arrowpoint-advisory', 'cazenove-capital'],
    lastUpdated,
  },
};

function normalizeText(value: string) {
  return value.toLowerCase();
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => normalizeText(text).includes(normalizeText(term)));
}

function uniqueByHref<T extends { href: string }>(items: (T | null)[]) {
  const seen = new Set<string>();
  return items.filter((item): item is T => {
    if (!item || seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

export function slugifyText(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getSectorPage(slug: string) {
  return sectorPages.find((page) => page.slug === slug);
}

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function getRouteGuide(slug: string) {
  return routeGuideContent[slug];
}

export function getSupportedSectorPages() {
  return sectorPages;
}

export function getSupportedLocationPages() {
  return locationPages;
}

export function getRouteLocationPages() {
  return [
    { slug: 'trade-sale/london', routeSlug: 'trade-sale', locationSlug: 'london', title: 'Trade sale advisors in London', h1: 'Trade sale advisors in London', description: 'London-based advisers with visible trade-sale work.', lastUpdated, intro: ['London has the deepest trade-sale market in the directory. It is where founders most often compare corporate finance, legal and tax teams against a wider buyer pool, and where the strongest public track records tend to sit.'], relatedRoutes: ['trade-sale'], relatedServices: ['corporate-finance-ma', 'legal'], relatedLocations: ['london'] },
    { slug: 'eot/london', routeSlug: 'eot', locationSlug: 'london', title: 'EOT advisors in London', h1: 'EOT advisors in London', description: 'London-based advisers with visible employee ownership experience.', lastUpdated, intro: ['London has the largest concentration of employee-ownership support in the current directory, which makes it the best place to compare specialist EOT teams.'], relatedRoutes: ['eot'], relatedServices: ['trustee-employee-ownership', 'legal', 'tax'], relatedLocations: ['london'] },
    { slug: 'mbo/london', routeSlug: 'mbo', locationSlug: 'london', title: 'MBO advisors in London', h1: 'MBO advisors in London', description: 'London-based advisers with relevant management-buyout work.', lastUpdated, intro: ['London is the strongest city page for management buyouts in the current dataset, with several firms able to support financing, structuring and negotiation.'], relatedRoutes: ['mbo'], relatedServices: ['corporate-finance-ma', 'legal'], relatedLocations: ['london'] },
    { slug: 'succession/london', routeSlug: 'succession', locationSlug: 'london', title: 'Succession advisors in London', h1: 'Succession advisors in London', description: 'London firms with succession planning experience.', lastUpdated, intro: ['The London succession page is useful when the owner wants to compare legal, tax and advisory support for a staged handover rather than a rapid sale.'], relatedRoutes: ['succession'], relatedServices: ['tax', 'legal', 'wealth-planning'], relatedLocations: ['london'] },
    { slug: 'trade-sale/bristol', routeSlug: 'trade-sale', locationSlug: 'bristol', title: 'Trade sale advisors in Bristol', h1: 'Trade sale advisors in Bristol', description: 'Bristol advisers with public trade-sale work.', lastUpdated, intro: ['Bristol has a smaller but still useful trade-sale shortlist, which makes it worth indexing for owners who want a South West starting point.'], relatedRoutes: ['trade-sale'], relatedServices: ['corporate-finance-ma', 'legal'], relatedLocations: ['bristol'] },
    { slug: 'mbo/bristol', routeSlug: 'mbo', locationSlug: 'bristol', title: 'MBO advisors in Bristol', h1: 'MBO advisors in Bristol', description: 'Bristol advisers with management-buyout experience.', lastUpdated, intro: ['Bristol has enough MBO depth to make a local comparison worthwhile for owners wanting continuity with a management-led exit.'], relatedRoutes: ['mbo'], relatedServices: ['corporate-finance-ma', 'legal'], relatedLocations: ['bristol'] },
  ];
}

export function getServiceLocationPages() {
  return [
    { slug: 'corporate-finance-ma/london', serviceSlug: 'corporate-finance-ma', locationSlug: 'london', title: 'Corporate finance advisors in London', h1: 'Corporate finance advisors in London', description: 'London corporate finance firms with visible exit work.', lastUpdated, intro: ['London is the strongest market for corporate finance advice in the current directory, with a wide spread of deal-led firms to compare.'], relatedRoutes: ['trade-sale', 'mbo', 'partial-exit'], relatedServices: ['corporate-finance-ma'], relatedLocations: ['london'] },
    { slug: 'tax/london', serviceSlug: 'tax', locationSlug: 'london', title: 'Tax advisors in London', h1: 'Tax advisors in London', description: 'London firms with exit-related tax experience.', lastUpdated, intro: ['The London tax page is useful when the owner wants a small but relevant shortlist of firms that can support a deal structure and post-completion planning.'], relatedRoutes: ['eot', 'succession', 'partial-exit'], relatedServices: ['tax'], relatedLocations: ['london'] },
    { slug: 'trustee-employee-ownership/london', serviceSlug: 'trustee-employee-ownership', locationSlug: 'london', title: 'Employee ownership advisors in London', h1: 'Employee ownership advisors in London', description: 'London firms with trustee and EOT capability.', lastUpdated, intro: ['London has the clearest cluster of EOT advisers in the directory, which makes it the right place to compare trustee and employee-ownership support.'], relatedRoutes: ['eot', 'succession'], relatedServices: ['trustee-employee-ownership', 'legal', 'tax'], relatedLocations: ['london'] },
  ];
}

export function getSupportedComboPages() {
  return [...getRouteLocationPages(), ...getServiceLocationPages()];
}

export function getPageCanonical(pathname: string) {
  return new URL(pathname.endsWith('/') ? pathname : `${pathname}/`, 'https://ukexitadvisors.co.uk').toString();
}

export function getMatchingSectorAdvisors(slug: string) {
  const terms = sectorAliasTerms[slug] || [slug.replace(/-/g, ' ')];
  return advisorsData.filter((advisor) => {
    const text = [advisor.sectors.join(' '), advisor.shortDescription, advisor.longDescription].join(' ').toLowerCase();
    return terms.some((term) => text.includes(term.toLowerCase()));
  });
}

export function getMatchingLocationAdvisors(slug: string) {
  const label = getLocationPage(slug)?.slug ?? slug;
  return advisorsData.filter((advisor) => slugifyText(advisor.location) === label);
}

export function getMatchingRouteLocationAdvisors(routeSlug: string, locationSlug: string) {
  const route = routes.find((item) => item.slug === routeSlug);
  const city = getLocationPage(locationSlug)?.h1.replace(' exit advisors', '') ?? locationSlug;
  return advisorsData.filter((advisor) => {
    const routeMatch = advisor.exitRoutes.some((exitRoute) => exitRoute.toLowerCase().includes(routeSlug.replace(/-/g, ' ')) || exitRoute.toLowerCase() === route?.name.toLowerCase());
    const cityMatch = slugifyText(advisor.location) === slugifyText(city);
    return routeMatch && cityMatch;
  });
}

export function getMatchingServiceLocationAdvisors(serviceSlug: string, locationSlug: string) {
  const service = services.find((item) => item.slug === serviceSlug);
  const serviceTerms: Record<string, string[]> = {
    'corporate-finance-ma': ['corporate finance', 'm&a', 'deal advisory'],
    legal: ['legal', 'corporate lawyer', 'solicitor'],
    tax: ['tax'],
    valuation: ['valuation'],
    'wealth-planning': ['wealth planning', 'financial planning'],
    'trustee-employee-ownership': ['eot', 'employee ownership', 'trustee'],
  };
  const city = getLocationPage(locationSlug)?.h1.replace(' exit advisors', '') ?? locationSlug;
  const terms = serviceTerms[serviceSlug] || [service?.name ?? serviceSlug];
  return advisorsData.filter((advisor) => {
    const serviceMatch = includesAny([advisor.advisorTypes.join(' '), advisor.shortDescription, advisor.longDescription].join(' ').toLowerCase(), terms);
    const cityMatch = slugifyText(advisor.location) === slugifyText(city);
    return serviceMatch && cityMatch;
  });
}

export function getBreadcrumbItems(items: BreadcrumbItem[]) {
  return items;
}

export function getSupportedEditorialPages() {
  return [...sectorPages, ...locationPages];
}

export function canShowPage(page: ContentPage) {
  if (page.slug.includes('/')) {
    const [type, location] = page.slug.split('/');
    if (routeGuideContent[type]) return true;
    return Boolean(location);
  }
  const count = page.slug in sectorAliasTerms ? getMatchingSectorAdvisors(page.slug).length : getMatchingLocationAdvisors(page.slug).length;
  return count > 1;
}

export function getAdvisorLinks(advisor: { sectors?: string[]; exitRoutes?: string[]; advisorTypes?: string[]; adviser_types?: string[]; location?: string; hq_city?: string }) {
  const sectorLinks = uniqueByHref((advisor.sectors || [])
    .map((sector) => {
      const slug = Object.entries(sectorAliasTerms).find(([, terms]) => terms.some((term) => normalizeText(sector).includes(normalizeText(term)) || normalizeText(term).includes(normalizeText(sector))))?.[0];
      return slug ? { label: sector, href: `/sectors/${slug}/` } : null;
    })
    .filter(Boolean) as Array<{ label: string; href: string }>);

  const routeLinks = uniqueByHref((advisor.exitRoutes || [])
    .map((route) => routes.find((item) => item.name.toLowerCase() === route.toLowerCase() || item.slug.replace(/-/g, ' ') === route.toLowerCase()))
    .filter(Boolean)
    .map((route) => ({ label: route!.name, href: `/routes/${route!.slug}/` })));

  const serviceTypes = advisor.advisorTypes || [];
  const rawServiceTypes = (advisor as { adviser_types?: string[] }).adviser_types || [];

  const serviceLinks = uniqueByHref((serviceTypes.length ? serviceTypes : rawServiceTypes)
    .flatMap((type) => {
      const lower = type.toLowerCase();
      if (lower.includes('corporate finance') || lower.includes('m&a')) return [{ label: 'Corporate finance', href: '/services/corporate-finance-ma/' }];
      if (lower.includes('legal') || lower.includes('solicitor') || lower.includes('lawyer')) return [{ label: 'Legal', href: '/services/legal/' }];
      if (lower.includes('tax')) return [{ label: 'Tax', href: '/services/tax/' }];
      if (lower.includes('valuation')) return [{ label: 'Valuation', href: '/services/valuation/' }];
      if (lower.includes('wealth')) return [{ label: 'Wealth planning', href: '/services/wealth-planning/' }];
      if (lower.includes('eot') || lower.includes('employee ownership') || lower.includes('trust')) return [{ label: 'Employee ownership', href: '/services/trustee-employee-ownership/' }];
      return [];
    }));

  const locationName = advisor.location || (advisor as { hq_city?: string }).hq_city || '';
  const locationLink = locationName && getLocationPage(slugifyText(locationName))
    ? [{ label: locationName, href: `/locations/${slugifyText(locationName)}/` }]
    : [];

  return {
    sectors: sectorLinks,
    routes: routeLinks,
    services: serviceLinks,
    locations: locationLink,
  };
}
