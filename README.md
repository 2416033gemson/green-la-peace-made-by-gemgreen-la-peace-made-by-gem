# G E M — Personal Profile Website

> A modern, premium, cinematic personal profile website inspired by **guns.lol** and **sidelegendop** with a peaceful, calm, soothing luminous light green aesthetic, looping ambient audio soundtrack, cinematic video background, glassmorphism UI card, and interactive desktop effects.

![License](https://img.shields.io/badge/License-MIT-lightgreen.svg)
![Theme](https://img.shields.io/badge/Theme-Serene%20Light%20Green-lightgreen.svg)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero-lightgreen.svg)

---

## 🌟 Highlights & Features

- **Cinematic Looping Ambient Video Background:** High-definition looping video background (`assets/background.mp4` for desktop and `assets/background-mobile.mp4` for mobile) featuring soothing light green bokeh particles and luminous mint light rays, with a soft vignette overlay, optional backdrop blur, and automatic fallback image.
- **"CLICK TO ENTER" Entry Screen:** Smooth cinematic overlay that fades out on user click and starts background audio (complying with modern browser autoplay policies). Remembers your session so refreshing during the same tab session doesn't block you.
- **Peaceful Ambient Music System:** Fully functional background music player with **gravine (ambient loop)** (`assets/background-music.mp3`) running continuously in a seamless, relaxing loop with play/pause, volume slider, mute/unmute toggle, track info, and dynamic equalizer visualization. Graceful Web Audio API synth fallback if the audio file is missing.
- **Glassmorphism Profile Card:** Center card with 3D perspective mouse tilt, rotating glowing dash avatar ring, live online status indicator, verified badge, and clean personal bio.
- **Social Media Hub:** Dedicated buttons with crisp SVGs and hover tooltips for **Discord**, **Instagram**, **GitHub**, **YouTube**, **Telegram**, and **Spotify**.
- **Interactive Utilities:** One-click "Copy Profile URL" with toast notifications, Fullscreen toggle, and Background Video playback/mute toggle.
- **Real Global Views Counter:** Live cloud visitor counter tracking actual visits worldwide.
- **Visual Effects:** Lightweight HTML5 Canvas glowing light green firefly particles, custom desktop glowing cursor with smooth lerp interpolation (automatically disabled on touchscreen/mobile devices), and CRT scanlines.
- **100% Centralized Customization:** Edit everything through `config.js` without touching HTML or CSS.
- **Zero Build Step:** Pure Vanilla HTML5, CSS3, and JavaScript. Runs offline via `file://` or any web server, and deploys to **GitHub Pages** in seconds.

---

## 📂 Project Structure

```text
GEM-Profile/
│
├── index.html           # Main semantic HTML structure & metadata
├── style.css            # Peaceful light green glassmorphism styling & animations
├── script.js            # Ambient player, adaptive video, cursor, particles, utilities
├── config.js            # Central customization file
├── README.md            # Complete documentation & deployment guide
│
└── assets/
    ├── background.mp4        # 16:9 widescreen video (PC / Laptop / Tablet)
    ├── background-mobile.mp4 # 9:16 vertical video (Smartphones / Portrait view)
    ├── background-music.mp3  # Calming ambient loop soundtrack (gravine)
    ├── avatar.jpg / .png     # Profile avatar
    └── favicon.png           # Browser tab icon
```

---

## 🚀 Quick Start (Run Locally)

### Option 1: Direct File Opening
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Local HTTP Server (Recommended)
If you have Python installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## ⚙️ Customization Guide (`config.js`)

All website settings are centralized in `config.js`. Open `config.js` in any text editor:

### 1. Changing Profile Information
```javascript
identity: {
  username: "G E M",
  handle: "dontlovesomeone",
  statusText: "gravine // ambient",
  statusEmoji: "🍃",
  presenceStatus: "online", // serene luminous light green badge
  bio: "just a human being",
  avatarUrl: "assets/avatar.jpg",
  isVerified: true
}
```

### 2. Changing Background Video (PC & Mobile Adaptive)
The website includes an **adaptive dual-video engine**:
- **Desktop/PC/Tablet:** Plays `assets/background.mp4` (16:9 widescreen ratio).
- **Mobile Phones (Portrait):** Automatically switches to `assets/background-mobile.mp4` (9:16 vertical ratio) for flawless full-screen coverage with zero distortion, stretching, or letterboxing.

Update `config.js`:
```javascript
video: {
  url: "assets/background.mp4",
  fallbackImage: "assets/avatar.png",
  mutedByDefault: true,
  overlayOpacity: 0.62,
  blur: false
}
```

### 3. Changing Background Music
1. Place your MP3 audio into `assets/` (e.g. `assets/background-music.mp3`).
2. Update `config.js`:
```javascript
audio: {
  url: "assets/background-music.mp3",
  trackTitle: "gravine (ambient loop)",
  artist: "G E M",
  defaultVolume: 0.35,
  autoPlayOnEntry: true,
  smoothFadeIn: true
}
```

### 4. Updating Social Media Links
Configured with your personal handles and links in `config.js`:
```javascript
socials: [
  { id: "discord", name: "Discord", icon: "discord", handle: "ozoii.", copyOnClick: true },
  { id: "telegram", name: "Telegram", icon: "telegram", url: "https://t.me/XMAXZ9" },
  { id: "github", name: "GitHub", icon: "github", url: "https://github.com/2416033gemson" },
  { id: "spotify", name: "Spotify", icon: "spotify", url: "https://open.spotify.com/user/31ek46higmnx3vmvumtyswpoirka?si=24ade29feb5e4154" },
  { id: "youtube", name: "YouTube", icon: "youtube", url: "https://www.youtube.com/channel/UCkhmGiS8bLmoatwjLBaIs4A" },
  { id: "instagram", name: "Instagram", icon: "instagram", url: "https://www.instagram.com/gwen_tauro/?hl=en" }
]
```

### 5. Modifying Theme Colors & Accents
The site is pre-configured with a **Serene Luminous Light Green Aesthetic** (`#4ade80` and `#86efac`), with gentle celadon and mint glow accents. You can fine-tune or swap themes anytime in `config.js`:
```javascript
theme: {
  accentColor: "#4ade80",       // Vibrant, soothing Light Green / Mint
  accentSecondary: "#86efac",   // Soft Pastel Mint / Celadon
  glowColor: "rgba(74, 222, 128, 0.45)",
  cardBackground: "rgba(14, 38, 26, 0.76)",
  cardBorder: "rgba(74, 222, 128, 0.32)"
}
```

### 6. Real Global Views Counter
The view counter connects to a live cloud counter that accurately tracks and increments views from viewers worldwide:
```javascript
viewsCounter: {
  enabled: true,
  apiKey: "gem_official_profile_views_2026",
  baseCount: 0,          // Set an initial baseline if you wish
  countEveryVisit: true, // Counts every viewer visit and reload to capture all views
  label: "views"         // Displays e.g. "115 views" next to the eye icon
}
```

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

1. **Create a GitHub Repository:**
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `gem-profile` or `username.github.io`).
   - Set visibility to **Public**.

2. **Upload Your Files:**
   - Push or upload all files (`index.html`, `style.css`, `script.js`, `config.js`, and the `assets/` folder) to the repository root.

3. **Enable GitHub Pages:**
   - Go to your repository **Settings** tab.
   - Click **Pages** in the left sidebar.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and `/ (root)`.
   - Click **Save**.

4. **Access Your Live Website:**
   - Your website will be live at:
     `https://<your-username>.github.io/<repository-name>/`

---

## 🛡️ Fallback Systems & Resilience

- **Missing Video Fallback:** If `assets/background.mp4` is missing, damaged, or unsupported, the website automatically falls back to an aesthetic cosmic gradient mesh without showing a broken media player.
- **Missing Audio Fallback:** If `assets/background-music.mp3` fails to load, a procedural ambient pad synthesizer built with the Web Audio API automatically engages, preventing console errors and keeping music active.
- **Missing Avatar Fallback:** If `assets/avatar.png` is deleted or missing, the avatar image tag automatically swaps to an aesthetic vector avatar with matching light green accents.
- **Touchscreen Detection:** On mobile and tablet devices, the custom desktop cursor and 3D card tilt are automatically disabled to guarantee native fluid touch scrolling.
- **Reduced Motion:** Fully complies with `prefers-reduced-motion` accessibility standards.

---

## 📄 License
This project is open-source under the **MIT License**. Free to customize and share.
