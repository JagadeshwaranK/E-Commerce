# E-Commerce Storefront

A React storefront prototype for browsing a locally defined product catalog. It includes category browsing, search, a client-side cart, sign-up and login screens, and a demo checkout flow.

> [!IMPORTANT]
> This is a frontend-only prototype, not a commerce service. Account credentials are stored in browser `localStorage`, the cart exists only in app memory, and checkout does not collect payment details or create a real order. Use test data only.

## Features

- Browse products by category and search by product name
- Adjust product quantities and add items to a client-side cart
- Review and remove cart items
- Enter delivery details and complete a clearly labeled demo checkout
- Navigate the storefront with React Router

## Tech stack

- React 19 with Create React App (`react-scripts`)
- React Router 6
- React Bootstrap and Bootstrap 5
- Local JavaScript product catalog and static image assets

## Run locally

Requirements: Node.js and npm.

```bash
npm ci
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
```

Run the test runner with:

```bash
npm test
```

## Project structure

```text
.
├── public/
│   └── images/                  # Product and storefront images
└── src/
    ├── components/
    │   ├── ProductCategory.js   # Shared category and search results UI
    │   ├── AddToCart.js         # Cart view
    │   ├── Checkout.js          # Demo checkout flow
    │   └── ...                  # Navigation, account, and page components
    ├── data/products.js         # In-memory product catalog
    ├── App.js                   # Routes and cart state
    └── index.js                 # React entry point
```

## Prototype limitations

- There is no backend, API, database, inventory management, or order persistence.
- Login is a local UI demonstration, not authentication. Passwords saved in `localStorage` are not protected.
- Checkout is for interface demonstration only; it does not process payments.
- Cart contents reset when the page is reloaded.

Do not use real credentials, payment information, or customer data. A production store would need a secured backend, proper authentication, server-side order handling, and a compliant payment provider.

## Contributing

Keep the prototype's limitations explicit, avoid adding real credential or payment collection to client-side code, and include tests for behavior changes.
