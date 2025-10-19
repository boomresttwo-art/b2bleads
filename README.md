# B2B Lead Gen Funnel – Pro V2 (No‑Code Deploy)

This project is ready for **one‑click deploy on Vercel**. You only need a GitHub and Vercel account.

## 1) Put your affiliate link
Open `config.js` in the GitHub web editor and paste your Fiverr affiliate link:
```js
export const AFFILIATE_URL = "https://www.fiverr.com/your-affiliate-link";
```

## 2) Deploy (no code)
- Create a repo on GitHub and upload these files via the web interface
- Go to https://vercel.com/new → Import your repo → Deploy
- Your live URL will look like: `https://b2b-leadgen-funnel.vercel.app`

## 3) Use in Facebook Ads
Use your Vercel URL as your ad destination. The CTA buttons go to `/api/go`, which redirects visitors to your affiliate link and logs the click in Vercel logs.
