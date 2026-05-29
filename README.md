# The Ultimate Business Growth Braintrust

Landing page for Donald Seils' strategic advisory service featuring frameworks from 11 world-class business experts.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## 📋 Setup Checklist

### 1. Domain Configuration
- [ ] Add your domain to Vercel project
- [ ] Update DNS settings to point to Vercel

### 2. Calendly Integration
- [ ] Create Calendly event for "Expert Diagnosis Webinar" (Thursdays 12:00 PM MT)
- [ ] Create Calendly event for "Board Meeting Intensive" with $1,500 payment
- [ ] Get Calendly embed URLs
- [ ] Replace `YOUR_CALENDLY_WEBINAR_LINK_HERE` in `app/page.tsx` (line 342)
- [ ] Replace `YOUR_CALENDLY_INTENSIVE_LINK_HERE` in `app/page.tsx` (line 585)

### 3. Stripe Integration
- [ ] Verify Stripe account is active
- [ ] Connect Stripe to Calendly for payment collection
- [ ] Test booking flow with $1,500 payment

### 4. Photos
- [ ] Add your professional headshot to `public/donald-seils.jpg`
- [ ] Update image reference in `app/page.tsx` (line 476)
- [ ] Optional: Add expert photos to `public/experts/` folder

### 5. Email Configuration
- [ ] Verify dseils.ds@gmail.com receives booking confirmations
- [ ] Set up email autoresponder for inquiries (optional)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Booking:** Calendly
- **Payments:** Stripe (via Calendly)
- **Hosting:** Vercel
- **Domain:** (Your domain)

## 📁 Project Structure

```
growth-braintrust/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Site metadata & layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── sales-copy.md         # Full sales copy (3,200+ words)
└── README.md            # This file
```

## 🎨 Design Features

- Dark theme (slate/amber color palette)
- Fully responsive mobile design
- Smooth animations and transitions
- Professional typography
- Calendly embedded booking
- SEO optimized

## 📦 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🔗 Important URLs to Update

1. Calendly webinar embed (line 342)
2. Calendly intensive embed (line 585)
3. Your headshot image (line 476)

## 💰 Pricing

- **Free Webinar:** Every Thursday 12:00 PM MT
- **Board Meeting Intensive:** $1,500 (90 minutes)
- **Limited:** 3 sessions per week

## 📧 Contact

Donald Seils  
dseils.ds@gmail.com  
Front Range Mobile Marketing Solutions

---

**Next Steps After Deployment:**

1. Test webinar registration flow
2. Test intensive booking + payment
3. Create Alignable content calendar
4. Generate VSL video for hero section
5. Drive traffic via Alignable + weekly webinars
