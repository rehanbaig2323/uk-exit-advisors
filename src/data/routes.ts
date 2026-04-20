export const routes = [
  {
    slug: 'trade-sale',
    name: 'Trade Sale',
    summary: 'Sell to a strategic buyer, consolidator or competitor.',
    description:
      'A trade sale is a sale of the company to an external buyer, usually a competitor, consolidator, financial sponsor or trade acquirer. It suits owners who want to maximise price, widen the buyer pool and accept a more formal sale process. In straightforward cases it may complete in 4-9 months, but complex businesses, cross-border buyers or heavily negotiated warranties can take longer. Advisory fees usually combine a retainer and a success element, with legal and tax support layered in separately. The main risks are losing confidentiality too early, narrowing the buyer list too soon, overestimating value and letting diligence slow momentum. Owners usually get the best outcome when they prepare the business, define a clear process and keep negotiations disciplined.',
    compareWith: ['EOT', 'MBO'],
  },
  {
    slug: 'eot',
    name: 'EOT',
    summary: 'Transition ownership to an employee ownership trust.',
    description:
      'An employee ownership trust, or EOT, transfers control of the company to a trust for the benefit of employees. It suits founders who want to preserve culture, reward staff and step back without selling to an external buyer. The structure is often used when the business has stable cash flow and a management team that can continue running it after completion. Transactions often take 3-9 months depending on tax structuring, governance work and the amount of diligence required. Adviser costs vary by complexity, but owners should expect tax, legal and corporate finance input rather than a single simple fee. Key risks include weak cash flow, unrealistic valuation expectations and misunderstanding the ongoing governance role after completion.',
    compareWith: ['Trade Sale', 'Succession'],
  },
  {
    slug: 'mbo',
    name: 'MBO',
    summary: 'Sell to the existing management team.',
    description:
      'A management buyout is the sale of a business to the people already running it. It suits owners who have a capable management team in place and want a buyer who already understands the business. Because the buyers know the company, the process can be quicker than a broad market sale, but financing still needs to be assembled and documented properly. A simple MBO may complete in a few months, while more structured deals can take longer if external funding, vendor terms or shareholder negotiations are involved. Adviser fees are usually a mix of advisory, legal and valuation work. The biggest risks are undercapitalising the deal, creating tension between founders and management, and leaving too little room for a clean handover.',
    compareWith: ['Trade Sale', 'Partial Exit'],
  },
  {
    slug: 'succession',
    name: 'Succession',
    summary: 'Pass the business to family, management or employees over time.',
    description: 
      'Succession is the planned transfer of ownership and control over time, often to family members, management, employees or a mixture of all three. It suits owners who are not ready for a rapid sale and want to think carefully about timing, tax, governance and family alignment. The process can run for years because it often involves grooming a successor, reshaping governance and phasing out the founder’s day-to-day role. Adviser costs vary widely because succession may involve tax, legal, corporate finance and wealth planning support. The main risks are delaying decisions, assuming the next generation is ready when they are not, and failing to separate ownership questions from management questions.',
    compareWith: ['EOT', 'MBO'],
  },
  {
    slug: 'partial-exit',
    name: 'Partial Exit',
    summary: 'Take some cash out while keeping a stake in future growth.',
    description:
      'A partial exit is when the owner sells part of the business and keeps a stake for the future. It suits founders who want to de-risk personally, bring in a partner, accelerate growth or stage their retirement over time. These deals can be structured as a minority investment, a preferred share transaction or a phased sale, so timescales vary with the complexity of the shareholder and funding structure. Adviser fees are usually driven by the amount of structuring, negotiation and valuation work required. The main risks are misaligned expectations over control, dividend policy and future exit rights. Owners should be clear about how much control they want to keep, what happens if the partnership changes and how the next liquidity event will work.',
    compareWith: ['Trade Sale', 'MBO'],
  },
];
