import type { Advisor } from '@/lib/schema';

type ServicePageSection = {
  title: string;
  body: string;
};

type ServicePageContent = {
  intro: string[];
  sections: ServicePageSection[];
  comparePoints: string[];
  relatedRoutes: string[];
  matchTerms: string[];
};

const servicePageContent: Record<string, ServicePageContent> = {
  'corporate-finance-ma': {
    intro: [
      'Corporate finance and M&A advisers sit at the centre of a sale process. They help an owner decide whether to go discreetly to a small number of buyers, run a wider auction or prepare the company for a later transaction. That means shaping the story, mapping the buyer universe, testing value and keeping momentum when diligence starts to slow things down. The best advisers do much more than introduce names: they make the process easier to run, more competitive and less distracting for management.',
      'Owners usually need this advice once they are serious about exit timing and want an opinion that is independent of any single bidder. Corporate finance support is especially useful where the business is strong but the owners need help turning performance into a sale-ready narrative. It can also be valuable earlier in the journey, when the objective is to tidy up reporting, define a clean deal structure and understand what a buyer is likely to ask for.',
    ],
    sections: [
      {
        title: 'What this adviser type does',
        body: 'Corporate finance advisers handle the process architecture: buyer research, teaser and information pack preparation, management presentations, bid comparisons, negotiation support and coordination with lawyers, tax advisers and lenders. They are the practical layer between the founder, the board and the market.',
      },
      {
        title: 'When a business owner needs them',
        body: 'They are most helpful when the owner wants to test the market, compare multiple offer types or avoid being overly dependent on one suitor. If the business has several possible outcomes - trade sale, private equity, MBO or partial exit - this is usually the adviser to bring in first.',
      },
      {
        title: 'How they fit into an exit process',
        body: 'Corporate finance teams usually lead the process before heads of terms, then stay involved through diligence and signing so the deal does not drift. They help keep value, timing and certainty in balance, while making sure legal and tax work is aligned to the chosen route rather than forcing the transaction backwards later.',
      },
      {
        title: 'What to compare between firms',
        body: 'Compare sector fit, deal size, process discipline, independence, senior coverage and the quality of recent transactions. For owners, the key question is simple: will this team protect momentum and create competitive pressure without overcomplicating the process?',
      },
    ],
    comparePoints: ['sector experience', 'deal size handled', 'buyer access', 'senior partner involvement', 'process discipline'],
    relatedRoutes: ['trade-sale', 'mbo', 'partial-exit', 'eot'],
    matchTerms: ['corporate finance', 'm&a', 'm and a', 'deal advisory'],
  },
  legal: {
    intro: [
      'Legal advisers make the deal real. Once the commercial shape of an exit is agreed, the legal team turns it into a working transaction: drafting the sale documents, tightening warranties, checking ownership rights, handling governance changes and making sure the buyer gets the protections it expects. Good legal advice reduces friction, because it anticipates the issues that can slow down a deal before they become a negotiation problem.',
      'Business owners usually need a strong legal adviser when the transaction has more than one moving part: multiple shareholders, employee ownership, deferred consideration, tax-sensitive structuring, regulatory issues or a complicated management handover. Legal input is not just for the end of the process. The best firms help frame the deal early so the commercial agreement can actually be completed on sensible terms.',
    ],
    sections: [
      {
        title: 'What this adviser type does',
        body: 'Legal advisers draft and negotiate sale agreements, disclosure letters, ancillary documents, shareholder approvals, governance papers and completion deliverables. They also protect the seller from avoidable risk by narrowing ambiguous wording and aligning documents with the commercial deal.',
      },
      {
        title: 'When a business owner needs them',
        body: 'Any time ownership is changing, legal input is needed. It becomes especially important where the founder has personal guarantees, family shareholders, earn-outs, employment issues or intellectual property that needs to be assigned cleanly.',
      },
      {
        title: 'How they fit into an exit process',
        body: 'Legal advisers usually come in alongside corporate finance and tax support, then take the lead as heads of terms harden into binding documents. Their job is to keep the timetable realistic while making sure nothing important is left to informal agreement.',
      },
      {
        title: 'What to compare between firms',
        body: 'Compare sector experience, responsiveness, partner involvement, ability to coordinate with other advisers and whether the team can handle both the corporate work and the wider ownership changes. For many owners, practical transaction management matters more than legal jargon.',
      },
    ],
    comparePoints: ['transaction speed', 'partner-led advice', 'shareholder complexity', 'employee ownership experience', 'coordination with tax and finance teams'],
    relatedRoutes: ['trade-sale', 'eot', 'mbo', 'succession'],
    matchTerms: ['legal', 'law', 'corporate lawyer', 'solicitor'],
  },
  tax: {
    intro: [
      'Tax advisers help owners understand what the transaction means after completion, not just on signing day. They review the structure, the availability of reliefs, the treatment of loan notes or deferred consideration, the tax position of management and shareholders, and any steps that should happen before the deal goes live. In a well-run exit, tax advice changes the shape of the transaction long before completion.',
      'Owners need tax advice whenever the exit could be structured in more than one way or where timing affects the outcome. That includes employee ownership transactions, partial exits, family succession, share reorganisations and sales involving different classes of shareholder. A good tax adviser does not just chase efficiency; they help the owner avoid a structure that looks attractive on paper but creates a bigger problem later.',
    ],
    sections: [
      {
        title: 'What this adviser type does',
        body: 'Tax advisers model the likely outcomes, identify reliefs, review the share structure and help separate personal, company and post-completion tax questions. They are often involved in pre-sale planning, not just deal completion.',
      },
      {
        title: 'When a business owner needs them',
        body: 'They are valuable as soon as the owner starts asking what the business is worth net of tax, what should happen before market exposure and how proceeds will be extracted. The earlier they join, the more optionality they tend to preserve.',
      },
      {
        title: 'How they fit into an exit process',
        body: 'Tax advisers sit beside corporate finance and legal teams to make sure the deal structure, shareholder paperwork and completion mechanics all line up. They are especially important where there are multiple sellers, trusts, employee ownership steps or a desire to stage the exit over time.',
      },
      {
        title: 'What to compare between firms',
        body: 'Compare technical strength, clarity of explanation, experience with your chosen exit route and willingness to work early rather than only at the end. The right adviser should make the trade-offs understandable, not more opaque.',
      },
    ],
    comparePoints: ['pre-sale planning', 'reliefs and exemptions', 'shareholder structuring', 'employee ownership knowledge', 'clarity on net proceeds'],
    relatedRoutes: ['eot', 'succession', 'partial-exit', 'trade-sale'],
    matchTerms: ['tax', 'tax advisor', 'tax adviser'],
  },
  valuation: {
    intro: [
      'Valuation advisers provide the reality check. They help owners and boards understand what the business is worth, whether a price is defensible and how the value changes depending on the route to exit. In practice that can mean preparing a standalone valuation, challenging a buyer proposal, testing a fairness position for shareholders or supporting a transaction where the number itself is under negotiation.',
      'An owner usually needs valuation advice when price is sensitive, when different shareholder groups need a defensible number or when the business is going into a process where value expectations need to be aligned before the market sees it. A sensible valuation reduces avoidable arguments later and helps the owner judge whether a deal is worth pursuing at all.',
    ],
    sections: [
      {
        title: 'What this adviser type does',
        body: 'Valuation advisers assess enterprise value, equity value, minority discounts, fairness and pricing assumptions. They often support internal planning, negotiations and tax-sensitive transactions where the number needs to stand up to scrutiny.',
      },
      {
        title: 'When a business owner needs them',
        body: 'They are important before a formal sale process, when the owner wants to set expectations with management or family shareholders, and whenever the proposed price is likely to be challenged. In a mixed ownership situation, valuation can save a lot of conflict.',
      },
      {
        title: 'How they fit into an exit process',
        body: 'Valuers often work early, before marketing, then come back when bids are received or when tax and legal teams need a defendable figure for the agreed structure. Their work helps keep the commercial process honest.',
      },
      {
        title: 'What to compare between firms',
        body: 'Compare methodology, sector knowledge, independence, ability to explain assumptions clearly and experience with the specific transaction type. The best valuation work is rigorous but practical enough to help the deal move forward.',
      },
    ],
    comparePoints: ['methodology', 'sector knowledge', 'independence', 'report clarity', 'transaction support'],
    relatedRoutes: ['trade-sale', 'mbo', 'partial-exit'],
    matchTerms: ['valuation', 'valuer', 'independent valuation'],
  },
  'wealth-planning': {
    intro: [
      'Wealth planning advisers focus on the owner after the exit, but they should often be involved before completion. A major liquidity event changes a family balance sheet, investment strategy, lifestyle planning and often the next generation’s expectations. Good wealth planning makes the proceeds useful, not just large. It helps an owner understand how much can be spent, gifted, reinvested or protected without creating avoidable tax or governance problems.',
      'Owners usually need wealth planning once the deal is real enough that the likely proceeds can be modelled. That is particularly true where the owner is thinking about retirement, family succession, philanthropy, property, trusts or how to manage proceeds alongside an ongoing stake in the company. The earlier the conversation starts, the easier it is to coordinate the personal plan with the deal structure.',
    ],
    sections: [
      {
        title: 'What this adviser type does',
        body: 'Wealth planners look at cash flow, portfolio strategy, pensions, trusts, gifting, family governance and post-exit risk management. Their role is to turn a one-off liquidity event into a sustainable long-term plan.',
      },
      {
        title: 'When a business owner needs them',
        body: 'They matter when the owner expects a meaningful change in personal wealth, wants to fund retirement or wants to involve family members in a structured way. They are also valuable when proceeds may be received in stages rather than all at once.',
      },
      {
        title: 'How they fit into an exit process',
        body: 'Wealth planning should sit alongside tax and legal advice so the ownership transaction and the personal plan do not work against each other. The best outcomes come when the post-completion plan is designed before the deal is signed.',
      },
      {
        title: 'What to compare between firms',
        body: 'Compare independence, fee transparency, tax coordination, investment philosophy and experience with business owners rather than salaried executives. Owners need advisers who understand concentrated wealth and life after the company.',
      },
    ],
    comparePoints: ['independence', 'tax coordination', 'retirement planning', 'family governance', 'fee transparency'],
    relatedRoutes: ['succession', 'partial-exit', 'eot'],
    matchTerms: ['wealth planning', 'wealth planner', 'financial planning'],
  },
  'trustee-employee-ownership': {
    intro: [
      'Trustee and employee ownership advisers help when the owner wants the business to remain independent and transfer control for the benefit of employees. In an EOT or related structure, the technical challenge is not only valuing the company and completing the sale, but also setting up governance that works after the founder steps back. That means trustee arrangements, trust documentation, employee communication and a realistic repayment structure.',
      'Owners usually need this advice when culture, legacy and continuity matter as much as price. Employee ownership can be a strong option for profitable businesses with capable management and a desire to preserve the company’s identity. The best advisers help the owner work through eligibility, governance, tax, funding and the practical realities of running a business under trust ownership.',
    ],
    sections: [
      {
        title: 'What this adviser type does',
        body: 'These advisers design the trust structure, coordinate trustee appointments, review governance and help the business make the transition from founder-led ownership to employee-benefit stewardship.',
      },
      {
        title: 'When a business owner needs them',
        body: 'They are needed when the owner is seriously considering an EOT, wants to protect company culture or is exploring a route that rewards staff without a third-party sale. They are especially important where the governance model will be new to the board.',
      },
      {
        title: 'How they fit into an exit process',
        body: 'Employee ownership advisers work with tax, legal and corporate finance teams to make the trust transfer practical and compliant. They help the owner move from a sale concept to a repeatable post-completion operating model.',
      },
      {
        title: 'What to compare between firms',
        body: 'Compare EOT experience, trustee knowledge, governance design, ability to communicate with employees and understanding of the ongoing support the business will need after completion. This is a long-term stewardship decision, not just a transaction.',
      },
    ],
    comparePoints: ['EOT transaction experience', 'trustee/governance knowledge', 'employee communication', 'tax coordination', 'post-completion support'],
    relatedRoutes: ['eot', 'succession'],
    matchTerms: ['trustee', 'employee ownership', 'eot specialist', 'employee ownership trust'],
  },
};

function normalizeText(value: string) {
  return value.toLowerCase();
}

export function getServicePageContent(slug: string) {
  return servicePageContent[slug];
}

export function matchesService(advisor: Advisor, slug: string) {
  const content = servicePageContent[slug];
  if (!content) return false;

  const haystack = normalizeText([
    advisor.name,
    advisor.location,
    advisor.shortDescription,
    advisor.longDescription,
    advisor.services.join(' '),
    advisor.advisorTypes.join(' '),
  ].join(' '));

  return content.matchTerms.some((term) => haystack.includes(normalizeText(term)));
}
