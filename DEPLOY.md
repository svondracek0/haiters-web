# Deployment Guide - haiters.cz

Since you already own `haiters.cz`, here is how to connect it.

## Prerequisite: Push to GitHub
1. Create a new repository on GitHub (e.g., `haiters-web`).
2. Run these commands in your terminal (I have already initialized Git for you):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/haiters-web.git
   git branch -M main
   git push -u origin main
   ```

## Option A: Vercel (Recommended)

1.  **Import Project**: Go to Vercel dashboard, "Add New", select your GitHub repo.
2.  **Deploy**: Click "Deploy".
3.  **Add Domain**:
    *   Go to the project **Settings** > **Domains**.
    *   Type `haiters.cz` and click **Add**.
4.  **Update DNS (at your registrar)**:
    *   Vercel will show you an **A Record** (IP address) and a **CNAME Record**.
    *   Log in to where you bought the domain (e.g., Wedos, GoDaddy).
    *   **Delete** any existing default A/CNAME records.
    *   **Add** the records Vercel gave you.
    
    *Example (Standard Vercel configuration):*
    *   **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
    *   **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`

## Option B: Netlify

1.  **Import Project**: Go to Netlify, "Add new site", select GitHub repo.
2.  **Deploy**: Click "Deploy site".
3.  **Add Domain**:
    *   Go to **Domain Management** > **Add custom domain**.
    *   Enter `haiters.cz`.
4.  **Update DNS**:
    *   Netlify will ask you to create a **CNAME** record pointing to your Netlify subdomain (e.g., `haiters.netlify.app`).
    *   Or use Netlify DNS (change nameservers).

## Option C: Traditional Hosting (FTP/cPanel)

If you have "classic" web hosting (like Wedos NoLimit):
1.  Run `npm run build` on your computer.
2.  The files will be in the `dist` folder.
3.  Upload the **contents** of the `dist` folder (index.html, assets, etc.) to the `www` or `public_html` folder on your server via FTP.
