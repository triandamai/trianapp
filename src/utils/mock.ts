const data = [
  {
    type: "p",
    body:
      "Accepting crypto payments, like Bitcoin and Ethereum, in your app opens the door to more customers in a very fast growing niche. Coinbase Commerce is like the Stripe Payments API for crypto. It provides a simple API where you can create charges, invoices, etc. But unlike credit cards, which are processed by a central authority, crypto payments are distributed to a global network of miners where they are confirmed on the blockchain. The confirmation process takes time and presents a variety of unique challenges for developers.",
  },
  {
    type: "p",
    body:
      "The following tutorial demonstrates how to accept crypto payments with Coinbase Commerce, using Firebase Cloud Functions as your backend server.",
  },
  {
    type: "h1",
    bdy: "Crypto Payment Flow",
  },
  {
    type: "p",
    body:
      "Crypto payments are push-based, which means Coinbase needs to constantly listen to the payment network for changes. The API sends webhooks whenever an important event happens with a charge.",
  },
  {
    type: "ul",
    body: [
      "Your server creates a charge with an amount for the user to pay. Expires after 1 hour.",
      "The user pays, which puts the charge in pending status (handle via webhook).",
      "Some time later, up to 10 minutes, charge is confirmed or failed (handle via webhook).",
    ],
  },
  {
    type: "h1",
    bdy: "Initial stup",
  },
  {
    type: "p",
    body:
      "💡 Although not required, it is a good idea to have a personal Coinbase Account with ETH or BTC available for small test payments. Currently, Coinbase has no sandbox 🙄, so you need to make real payments to test your integration.",
  },
  {
    type: "img",
    body:
      "https://fireship.io/lessons/crypto-payments-web-firebase/img/coinbase-api-keys.png",
    filename: "Coinbase API keys",
  },
  {
    type: "terminal",
    body:
      "firebase init functions cd functions npm install coinbase-commerce-node cors # If using TypeScript use these types npm install @types/coinbase-commerce-node --save-dev",
  },
];
