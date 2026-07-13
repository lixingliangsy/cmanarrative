export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "CMANarrative",
  slug: "cmanarrative",
  tagline: "Turn comps into a pricing story sellers believe.",
  description: "Paste 3-5 recent comparable sales and your subject address to get a plain-English CMA narrative: how the price was set and why it's right.",
  toolTitle: "Build a CMA narrative",
  resultLabel: "Your CMA narrative",
  ctaLabel: "Build narrative",
  features: [
  "Price rationale",
  "Comp-by-comp read",
  "Seller-friendly framing",
  "Listing-price hint"
],
  inputs: [
  {
    "key": "subject",
    "label": "Subject property",
    "type": "textarea",
    "placeholder": "e.g. 12 Oak St - 3 bed, 2 bath, 1800 sqft, updated"
  },
  {
    "key": "comps",
    "label": "Comparable sales (3-5)",
    "type": "textarea",
    "placeholder": "e.g. 10 Oak St $410k; 14 Pine $398k; 8 Elm $425k"
  },
  {
    "key": "market",
    "label": "Market",
    "type": "input",
    "placeholder": "e.g. Denver, CO"
  },
  {
    "key": "strategy",
    "label": "Pricing strategy",
    "type": "select",
    "options": [
      "List at market",
      "List slightly high",
      "Aggressive / fast sale"
    ]
  }
] as InputField[],
  systemPrompt: "You are a listing agent preparing a CMA narrative. Given a subject property, 3-5 comparable sales, a market, and a pricing strategy, write a plain-English narrative: a one-line price conclusion, a short comp-by-comp read (how each supports the price), seller-friendly framing of any trade-offs, and a listing-price hint aligned to the strategy. Be honest and specific. In demo mode, return a realistic sample following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "4 narratives/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const sub = (inputs['subject'] || 'your subject property').trim()
  const comps = (inputs['comps'] || '').trim()
  const mk = (inputs['market'] || 'your market').trim()
  const st = inputs['strategy'] || 'List at market'
  let out = 'CMA NARRATIVE (' + mk + ' | ' + st + ')\n\n'
  out += 'SUBJECT: ' + sub + '\n\n'
  out += 'PRICE CONCLUSION\nRecent solds support a list price around the middle of the comp range.\n\n'
  out += 'WHAT THE COMPS SHOW\n'
  out += '- Nearby homes closed within a tight band, signaling stable demand\n'
  if (comps) out += '- Your comps: ' + comps + '\n'
  out += '\nSELLER NOTE\n' + (st === 'Aggressive / fast sale' ? 'A sharper price can spark a quick, competitive sale.' : 'Pricing at market keeps you strong without leaving room for lowballing.') + '\n\n'
  out += '\n--- (Mock demo. Paste the subject + comps for a tailored narrative.)'
  return out
}
}
