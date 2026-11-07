/**
 * ====================================================================
 * G E M — Personal Profile Website
 * guns.lol / sidelegendop aesthetic bio page logic
 * ====================================================================
 */

(function () {
  'use strict';

  // --- 1. SVG ICON REGISTRY ---
  // Crisp vector icons for social media and UI controls
  const ICONS = {
    discord: `<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.01c3.931 1.797 8.18 1.797 12.061 0a.075.075 0 0 1 .078.009c.12.098.246.195.373.288a.077.077 0 0 1-.006.127c-.598.35-1.22.648-1.873.891-.041.016-.062.066-.041.107.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.195 1.006.128.832.926z"/></svg>`,
    spotify: `<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
    play: `<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    pause: `<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
    volumeHigh: `<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    volumeLow: `<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    volumeMute: `<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
    video: `<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    videoOff: `<svg viewBox="0 0 24 24"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
    copy: `<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    fullscreen: `<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`,
    fullscreenExit: `<svg viewBox="0 0 24 24"><path d="M4 14h6m0 0v6m0-6L3 21m17-11h-6m0 0V4m0 6l7-7M14 20h6m0 0v-6m0 6l-7-7M4 10h6m0 0V4m0 6L3 3"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    eye: `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    code: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    moon: `<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    badgeCheck: `<svg viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    folder: `<svg viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`,
    file: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    download: `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    share: `<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    music: `<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
  };

  // Safe reference to window.PROFILE_CONFIG
  const CFG = window.PROFILE_CONFIG || {};

  // --- 2. DOM ELEMENT REFERENCES ---
  const DOM = {
    body: document.body,
    entryScreen: document.getElementById('entryScreen'),
    entryTitle: document.getElementById('entryTitle'),
    entrySubtitle: document.getElementById('entrySubtitle'),
    bgVideo: document.getElementById('bgVideo'),
    bgOverlay: document.getElementById('bgOverlay'),
    bgFallbackPoster: document.getElementById('bgFallbackPoster'),
    particlesCanvas: document.getElementById('particlesCanvas'),
    topControlsBar: document.getElementById('topControlsBar'),
    audioWidget: document.getElementById('audioWidget'),
    audioToggleBtn: document.getElementById('audioToggleBtn'),
    audioPlayIcon: document.getElementById('audioPlayIcon'),
    equalizerBars: document.getElementById('equalizerBars'),
    trackTitle: document.getElementById('trackTitle'),
    trackArtist: document.getElementById('trackArtist'),
    volumeMuteBtn: document.getElementById('volumeMuteBtn'),
    volumeIcon: document.getElementById('volumeIcon'),
    volumeSlider: document.getElementById('volumeSlider'),
    videoToggleBtn: document.getElementById('videoToggleBtn'),
    videoIcon: document.getElementById('videoIcon'),
    copyUrlBtn: document.getElementById('copyUrlBtn'),
    copyIcon: document.getElementById('copyIcon'),
    fullscreenBtn: document.getElementById('fullscreenBtn'),
    fullscreenIcon: document.getElementById('fullscreenIcon'),
    mainContainer: document.getElementById('mainContainer'),
    profileCard: document.getElementById('profileCard'),
    sysId: document.getElementById('sysId'),
    clockIcon: document.getElementById('clockIcon'),
    clockDisplay: document.getElementById('clockDisplay'),
    profileAvatar: document.getElementById('profileAvatar'),
    statusIndicatorBadge: document.getElementById('statusIndicatorBadge'),
    profileUsername: document.getElementById('profileUsername'),
    verifiedBadge: document.getElementById('verifiedBadge'),
    profileTagline: document.getElementById('profileTagline'),
    badgesContainer: document.getElementById('badgesContainer'),
    statusBox: document.getElementById('statusBox'),
    statusEmoji: document.getElementById('statusEmoji'),
    statusText: document.getElementById('statusText'),
    gunsTitle: document.getElementById('gunsTitle'),
    presenceStatusBadge: document.getElementById('presenceStatusBadge'),
    activityEmoji: document.getElementById('activityEmoji'),
    activityText: document.getElementById('activityText'),
    profileBio: document.getElementById('profileBio'),
    locationItem: document.getElementById('locationItem'),
    locationIcon: document.getElementById('locationIcon'),
    locationText: document.getElementById('locationText'),
    viewsItem: document.getElementById('viewsItem'),
    viewsIcon: document.getElementById('viewsIcon'),
    viewsText: document.getElementById('viewsText'),
    clockItem: document.getElementById('clockItem'),
    socialLinksGrid: document.getElementById('socialLinksGrid'),
    toastNotification: document.getElementById('toastNotification'),
    toastIcon: document.getElementById('toastIcon'),
    toastMessage: document.getElementById('toastMessage'),
    bgAudio: document.getElementById('bgAudio'),
    cursorDot: document.getElementById('cursorDot'),
    cursorRing: document.getElementById('cursorRing')
  };

  // State
  let isAudioPlaying = false;
  let isVideoPlaying = true;
  let isMuted = false;
  let currentVolume = (CFG.audio && CFG.audio.defaultVolume !== undefined) ? CFG.audio.defaultVolume : 0.35;
  let toastTimeout = null;
  let statusCycleTimer = null;
  let audioFadeInterval = null;

  // --- 3. THEME & INITIAL DOM POPULATION ---
  function initThemeAndContent() {
    // Set theme CSS custom properties if configured
    if (CFG.theme) {
      if (CFG.theme.accentColor) {
        document.documentElement.style.setProperty('--accent-primary', CFG.theme.accentColor);
      }
      if (CFG.theme.accentSecondary) {
        document.documentElement.style.setProperty('--accent-secondary', CFG.theme.accentSecondary);
      }
      if (CFG.theme.glowColor) {
        document.documentElement.style.setProperty('--accent-glow', CFG.theme.glowColor);
      }
      if (CFG.theme.cardBackground) {
        document.documentElement.style.setProperty('--bg-card', CFG.theme.cardBackground);
      }
      if (CFG.theme.cardBorder) {
        document.documentElement.style.setProperty('--card-border', CFG.theme.cardBorder);
      }
    }

    // Set Video Overlay Opacity & Blur
    if (CFG.video && DOM.bgOverlay) {
      if (CFG.video.overlayOpacity !== undefined) {
        DOM.bgOverlay.style.background = `radial-gradient(circle at center, rgba(6, 21, 14, ${CFG.video.overlayOpacity * 0.25}) 0%, rgba(4, 15, 9, ${CFG.video.overlayOpacity}) 100%)`;
      }
      if (CFG.video.blur && DOM.bgVideo) {
        DOM.bgVideo.style.filter = 'blur(6px)';
      }
    }

    // Populate Identity (guns.lol style)
    if (CFG.identity) {
      if (DOM.gunsTitle) {
        DOM.gunsTitle.textContent = CFG.identity.headerTitle || 'MӨVΣ ӨП!';
      }
      if (DOM.profileUsername) DOM.profileUsername.textContent = CFG.identity.username || 'G E M';
      if (DOM.profileTagline) DOM.profileTagline.textContent = CFG.identity.tagline || '';
      const bioTextEl = document.getElementById('bioText');
      if (bioTextEl) {
        const rawBio = (CFG.identity.bio || 'just a human being').replace(/^"|"$/g, '');
        bioTextEl.textContent = rawBio;
      } else if (DOM.profileBio) {
        const rawBio = CFG.identity.bio || 'just a human being';
        DOM.profileBio.textContent = rawBio.startsWith('"') ? rawBio : `"${rawBio}"`;
      }
      if (DOM.profileAvatar && CFG.identity.avatarUrl) {
        DOM.profileAvatar.src = CFG.identity.avatarUrl;
        DOM.profileAvatar.alt = `${CFG.identity.username || 'G E M'} Avatar`;
      }
      // guns.lol Discord Status Presence
      if (DOM.presenceStatusBadge) {
        const pStatus = CFG.identity.presenceStatus || 'dnd';
        DOM.presenceStatusBadge.className = `presence-status-badge ${pStatus}`;
        if (pStatus === 'dnd') {
          DOM.presenceStatusBadge.innerHTML = '<span class="dnd-symbol"></span>';
          DOM.presenceStatusBadge.title = 'Status: Do Not Disturb';
        } else {
          DOM.presenceStatusBadge.innerHTML = '';
          DOM.presenceStatusBadge.title = `Status: ${pStatus}`;
        }
      }
      if (DOM.activityEmoji) {
        DOM.activityEmoji.textContent = CFG.identity.statusEmoji || '🥀';
      }
      if (DOM.activityText) {
        DOM.activityText.textContent = CFG.identity.statusText || '/zeninvault';
      }
      // Verified badge
      if (DOM.verifiedBadge) {
        if (CFG.identity.isVerified) {
          DOM.verifiedBadge.innerHTML = ICONS.badgeCheck;
          DOM.verifiedBadge.title = CFG.identity.verifiedTooltip || 'Verified Profile';
        } else {
          DOM.verifiedBadge.style.display = 'none';
        }
      }
    }

    // Fallback Avatar Handler
    if (DOM.profileAvatar) {
      DOM.profileAvatar.addEventListener('error', function () {
        console.warn('Avatar image could not be loaded. Displaying aesthetic vector fallback.');
        DOM.profileAvatar.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#05120a"/>
            <circle cx="100" cy="100" r="70" fill="#082012" stroke="#10b981" stroke-width="3"/>
            <circle cx="100" cy="85" r="28" fill="#10b981" opacity="0.85"/>
            <path d="M60 150 C60 120, 140 120, 140 150 Z" fill="#34d399" opacity="0.85"/>
          </svg>
        `);
      });
    }

    // Populate Status indicator
    if (CFG.status && DOM.statusIndicatorBadge) {
      const dot = DOM.statusIndicatorBadge.querySelector('.status-dot');
      if (dot) {
        dot.className = 'status-dot';
        if (CFG.status.indicator === 'purple') dot.classList.add('status-purple');
        else if (CFG.status.indicator === 'red') dot.classList.add('status-red');
      }
      if (DOM.statusEmoji) DOM.statusEmoji.textContent = CFG.status.emoji || '🥀';
      if (DOM.statusText && CFG.status.rotatingTexts && CFG.status.rotatingTexts.length > 0) {
        DOM.statusText.textContent = CFG.status.rotatingTexts[0];
      }
    }

    // Populate Badges
    if (CFG.badges && Array.isArray(CFG.badges) && DOM.badgesContainer) {
      DOM.badgesContainer.innerHTML = '';
      CFG.badges.forEach(b => {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'role-badge';
        const iconSvg = ICONS[b.icon] || ICONS.sparkles;
        badgeEl.innerHTML = `<span class="badge-icon">${iconSvg}</span><span>${b.text}</span>`;
        DOM.badgesContainer.appendChild(badgeEl);
      });
    }

    // Populate Metadata (Location & Clock)
    if (CFG.metadata) {
      if (DOM.locationItem && DOM.locationText) {
        if (CFG.metadata.location && CFG.metadata.location.enabled) {
          DOM.locationText.textContent = CFG.metadata.location.text || 'Earth';
          if (DOM.locationIcon) DOM.locationIcon.innerHTML = ICONS.mapPin;
        } else {
          DOM.locationItem.style.display = 'none';
        }
      }
      if (DOM.clockIcon) DOM.clockIcon.innerHTML = ICONS.clock;
    }

    // Populate Views Counter (LocalStorage demo counter)
    initViewsCounter();

    // Populate Socials Grid
    initSocialLinks();

    // Populate Top Controls Icons
    if (DOM.audioPlayIcon) DOM.audioPlayIcon.innerHTML = ICONS.play;
    if (DOM.volumeIcon) DOM.volumeIcon.innerHTML = ICONS.volumeHigh;
    if (DOM.videoIcon) DOM.videoIcon.innerHTML = ICONS.video;
    if (DOM.copyIcon) DOM.copyIcon.innerHTML = ICONS.copy;
    if (DOM.fullscreenIcon) DOM.fullscreenIcon.innerHTML = ICONS.fullscreen;

    // Track info
    if (CFG.audio) {
      if (DOM.trackTitle) DOM.trackTitle.textContent = CFG.audio.trackTitle || 'Audio Track';
      if (DOM.trackArtist) DOM.trackArtist.textContent = CFG.audio.artist || 'G E M';
    }

    // Entry Screen text
    if (CFG.entryScreen) {
      if (DOM.entryTitle && CFG.entryScreen.mainText) {
        DOM.entryTitle.innerHTML = `<span class="letter-glow">${CFG.entryScreen.mainText.charAt(0)}</span>${CFG.entryScreen.mainText.slice(1)}`;
      }
      if (DOM.entrySubtitle && CFG.entryScreen.subText) {
        DOM.entrySubtitle.innerHTML = CFG.entryScreen.subText;
      }
    }

    // Start Live Clock
    startClock();

    // Start Rotating Status Text
    startStatusRotation();
  }

  // --- 4. VIEWS COUNTER (REAL GLOBAL VISITOR COUNTER) ---
  function initViewsCounter() {
    if (!CFG.metadata || !CFG.metadata.viewsCounter || !CFG.metadata.viewsCounter.enabled) {
      if (DOM.viewsItem) DOM.viewsItem.style.display = 'none';
      return;
    }

    if (DOM.viewsIcon) DOM.viewsIcon.innerHTML = ICONS.eye;
    const apiKey = (CFG.metadata.viewsCounter.apiKey) || 'gem_official_profile_views_2026';
    const base = CFG.metadata.viewsCounter.baseCount || 0;
    const label = CFG.metadata.viewsCounter.label || 'views';
    const countEveryVisit = CFG.metadata.viewsCounter.countEveryVisit !== false;

    // Immediately display cached view count so there is zero delay or jump
    let currentCount = 115;
    try {
      const cached = localStorage.getItem('gem_cached_real_views');
      if (cached) currentCount = parseInt(cached, 10);
    } catch (e) {}

    function updateDisplay(count) {
      if (DOM.viewsText) {
        DOM.viewsText.textContent = label ? `${count.toLocaleString()} ${label}` : `${count.toLocaleString()}`;
      }
    }

    updateDisplay(currentCount + base);

    // Endpoint: hit increments view count on every viewer visit
    const sessionHitKey = 'gem_global_view_counted';
    let endpoint = `https://countapi.mileshilliard.com/api/v1/hit/${apiKey}`;
    
    if (!countEveryVisit) {
      try {
        if (sessionStorage.getItem(sessionHitKey)) {
          endpoint = `https://countapi.mileshilliard.com/api/v1/get/${apiKey}`;
        }
      } catch (e) {}
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          const totalViews = data.value + base;
          updateDisplay(totalViews);
          try {
            sessionStorage.setItem(sessionHitKey, 'true');
            localStorage.setItem('gem_cached_real_views', data.value.toString());
          } catch (e) {}
        }
      })
      .catch(err => {
        console.warn('Real global counter API unreachable, using local cache:', err);
        // Fallback: increment locally so viewer visit is always preserved even offline
        try {
          currentCount += 1;
          localStorage.setItem('gem_cached_real_views', currentCount.toString());
          updateDisplay(currentCount + base);
        } catch (e) {}
      });
  }

  // --- 5. SOCIAL LINKS POPULATION ---
  function initSocialLinks() {
    if (!DOM.socialLinksGrid || !CFG.socials || !Array.isArray(CFG.socials)) return;
    DOM.socialLinksGrid.innerHTML = '';

    CFG.socials.forEach(s => {
      const btn = document.createElement('a');
      btn.className = 'social-btn';
      btn.href = s.url || '#';
      btn.setAttribute('aria-label', s.name || 'Social Link');
      btn.setAttribute('data-id', s.id || '');

      // Check whether it should copy handle or open URL
      if (s.copyOnClick) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          copyToClipboard(s.handle || s.url, `${s.name} tag "${s.handle}" copied!`);
        });
      } else {
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
      }

      // Icon SVG
      const iconSvg = ICONS[s.icon] || ICONS.sparkles;

      // Tooltip Element
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip-custom';
      tooltip.textContent = s.tooltip || s.name;

      btn.innerHTML = iconSvg;
      btn.appendChild(tooltip);

      DOM.socialLinksGrid.appendChild(btn);
    });
  }

  // --- 6. LIVE VIEWER TIME CLOCK (REAL-TIME LOCAL CLOCK) ---
  function startClock() {
    if (!DOM.clockDisplay) return;

    function update() {
      try {
        const now = new Date();
        // Displays the actual live current local time of whoever is viewing the page
        const timeStr = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        DOM.clockDisplay.textContent = timeStr;
      } catch (err) {
        const now = new Date();
        const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        DOM.clockDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
      }
    }

    update();
    setInterval(update, 1000);
  }

  // --- 7. ANIMATED STATUS TEXT ROTATION ---
  function startStatusRotation() {
    if (!CFG.status || !CFG.status.rotatingTexts || CFG.status.rotatingTexts.length <= 1) return;
    const list = CFG.status.rotatingTexts;
    const intervalMs = CFG.status.rotationIntervalMs || 4000;
    let idx = 0;

    if (statusCycleTimer) clearInterval(statusCycleTimer);

    statusCycleTimer = setInterval(() => {
      if (!DOM.statusText) return;
      DOM.statusText.classList.add('fade-text');
      setTimeout(() => {
        idx = (idx + 1) % list.length;
        DOM.statusText.textContent = list[idx];
        DOM.statusText.classList.remove('fade-text');
      }, 350);
    }, intervalMs);
  }

  // --- 8. AUDIO SYSTEM ---
  function initAudioSystem() {
    if (!DOM.bgAudio) return;

    // Load saved volume and mute preferences
    const volKey = (CFG.audio && CFG.audio.storageVolumeKey) || 'gem_bg_audio_volume';
    const muteKey = (CFG.audio && CFG.audio.storageMuteKey) || 'gem_bg_audio_muted';

    try {
      const savedVol = localStorage.getItem(volKey);
      if (savedVol !== null) {
        const parsed = parseFloat(savedVol);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
          currentVolume = parsed;
        }
      }
      const savedMute = localStorage.getItem(muteKey);
      if (savedMute === 'true') {
        isMuted = true;
      }
    } catch (e) {}

    // Apply to Slider & Audio
    if (DOM.volumeSlider) {
      DOM.volumeSlider.value = currentVolume;
    }
    DOM.bgAudio.volume = isMuted ? 0 : currentVolume;
    updateVolumeIcon();

    // Volume Slider Event
    if (DOM.volumeSlider) {
      DOM.volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        currentVolume = val;
        if (isMuted && val > 0) isMuted = false;
        DOM.bgAudio.volume = isMuted ? 0 : currentVolume;
        updateVolumeIcon();
        try {
          localStorage.setItem(volKey, currentVolume.toString());
          localStorage.setItem(muteKey, isMuted.toString());
        } catch (err) {}
      });
    }

    // Volume Mute Button Event
    if (DOM.volumeMuteBtn) {
      DOM.volumeMuteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        DOM.bgAudio.volume = isMuted ? 0 : currentVolume;
        updateVolumeIcon();
        showToast(isMuted ? 'Audio muted' : 'Audio unmuted');
        try {
          localStorage.setItem(muteKey, isMuted.toString());
        } catch (err) {}
      });
    }

    // Audio Play/Pause Button Event
    if (DOM.audioToggleBtn) {
      DOM.audioToggleBtn.addEventListener('click', toggleAudioPlayback);
    }

    // Audio Event Listeners for State Sync
    DOM.bgAudio.addEventListener('play', () => {
      isAudioPlaying = true;
      if (DOM.audioPlayIcon) DOM.audioPlayIcon.innerHTML = ICONS.pause;
      if (DOM.equalizerBars) DOM.equalizerBars.classList.add('playing');
    });

    DOM.bgAudio.addEventListener('pause', () => {
      isAudioPlaying = false;
      if (DOM.audioPlayIcon) DOM.audioPlayIcon.innerHTML = ICONS.play;
      if (DOM.equalizerBars) DOM.equalizerBars.classList.remove('playing');
    });

    // Handle missing or broken audio file gracefully
    DOM.bgAudio.addEventListener('error', (e) => {
      console.warn('Background audio could not be played. Activating fallback ambient synthesizer.');
      initFallbackSynth();
    });
  }

  function toggleAudioPlayback() {
    if (!DOM.bgAudio) return;
    if (DOM.bgAudio.paused) {
      DOM.bgAudio.play().then(() => {
        showToast('Now Playing');
      }).catch(err => {
        console.warn('Playback blocked by browser policy:', err);
      });
    } else {
      DOM.bgAudio.pause();
      showToast('Music Paused');
    }
  }

  function smoothFadeInAudio(targetVolume, durationMs) {
    if (!DOM.bgAudio || isMuted) return;
    DOM.bgAudio.volume = 0;
    DOM.bgAudio.play().catch(e => console.log('Autoplay deferred:', e));

    const steps = 30;
    const stepDuration = durationMs / steps;
    const volIncrement = targetVolume / steps;
    let stepCount = 0;

    if (audioFadeInterval) clearInterval(audioFadeInterval);

    audioFadeInterval = setInterval(() => {
      stepCount++;
      const nextVol = Math.min(targetVolume, volIncrement * stepCount);
      DOM.bgAudio.volume = nextVol;
      if (stepCount >= steps) {
        clearInterval(audioFadeInterval);
        DOM.bgAudio.volume = targetVolume;
      }
    }, stepDuration);
  }

  function updateVolumeIcon() {
    if (!DOM.volumeIcon) return;
    if (isMuted || DOM.bgAudio.volume === 0) {
      DOM.volumeIcon.innerHTML = ICONS.volumeMute;
    } else if (DOM.bgAudio.volume < 0.5) {
      DOM.volumeIcon.innerHTML = ICONS.volumeLow;
    } else {
      DOM.volumeIcon.innerHTML = ICONS.volumeHigh;
    }
  }

  // Graceful Web Audio API Fallback Synthesizer if MP3 is missing
  let fallbackAudioCtx = null;
  function initFallbackSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      fallbackAudioCtx = new AudioContext();

      // Peaceful soothing ambient chord generator
      const chords = [
        [146.83, 220.00, 277.18, 329.63], // Dmaj9
        [196.00, 246.94, 293.66, 369.99], // Gmaj9
        [123.47, 185.00, 220.00, 277.18], // Bm9
        [110.00, 164.81, 220.00, 293.66]  // Aadd9 / D/A
      ];
      let chordIdx = 0;

      function playPadChord() {
        if (!fallbackAudioCtx || fallbackAudioCtx.state === 'suspended') return;
        const now = fallbackAudioCtx.currentTime;
        const chord = chords[chordIdx];
        chordIdx = (chordIdx + 1) % chords.length;

        chord.forEach(freq => {
          const osc = fallbackAudioCtx.createOscillator();
          const gain = fallbackAudioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.exponentialRampToValueAtTime(0.04 * (isMuted ? 0 : currentVolume), now + 1.5);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 4.5);

          osc.connect(gain);
          gain.connect(fallbackAudioCtx.destination);

          osc.start(now);
          osc.stop(now + 4.6);
        });
      }

      setInterval(playPadChord, 4600);
      playPadChord();
    } catch (e) {
      console.warn('Web Audio Fallback not available:', e);
    }
  }

  // --- 9. BACKGROUND VIDEO CONTROLS & MOBILE ADAPTATION ---
  function initVideoControls() {
    if (!DOM.bgVideo) return;

    // Apply video configuration
    if (CFG.video) {
      DOM.bgVideo.playbackRate = CFG.video.playbackRate || 1.0;
      DOM.bgVideo.muted = CFG.video.mutedByDefault !== false;
    }

    // Adaptive Mobile vs Desktop Video Source Selector
    function adaptVideoForScreen() {
      if (!DOM.bgVideo || !CFG.video) return;
      const isMobilePortrait = window.innerWidth <= 768 && window.innerHeight > window.innerWidth;
      const targetUrl = (isMobilePortrait && CFG.video.mobileUrl) ? CFG.video.mobileUrl : (CFG.video.url || 'assets/background.mp4');

      const currentSrc = DOM.bgVideo.currentSrc || DOM.bgVideo.src;
      // If source needs update
      if (!currentSrc || !currentSrc.includes(targetUrl.replace(/^assets\//, ''))) {
        const wasPaused = DOM.bgVideo.paused;
        DOM.bgVideo.src = targetUrl;
        DOM.bgVideo.load();
        DOM.bgVideo.play().catch(e => {
          console.log('Video autoplay deferred by mobile browser:', e);
        });
      }
    }

    // Run on init and listen for window resize / orientation rotation
    adaptVideoForScreen();
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(adaptVideoForScreen, 250);
    });
    window.addEventListener('orientationchange', () => {
      setTimeout(adaptVideoForScreen, 200);
    });

    // Touch unlock for mobile browsers (iOS Safari / Android Low Power Mode)
    function onFirstMobileTouch() {
      if (DOM.bgVideo && DOM.bgVideo.paused && isVideoPlaying) {
        DOM.bgVideo.play().catch(e => console.log('Mobile touch play deferred:', e));
      }
      window.removeEventListener('touchstart', onFirstMobileTouch);
    }
    window.addEventListener('touchstart', onFirstMobileTouch, { passive: true });

    // Video toggle button
    if (DOM.videoToggleBtn) {
      DOM.videoToggleBtn.addEventListener('click', () => {
        if (DOM.bgVideo.paused) {
          DOM.bgVideo.play();
          isVideoPlaying = true;
          if (DOM.videoIcon) DOM.videoIcon.innerHTML = ICONS.video;
          showToast('Background Video Playing');
        } else {
          DOM.bgVideo.pause();
          isVideoPlaying = false;
          if (DOM.videoIcon) DOM.videoIcon.innerHTML = ICONS.videoOff;
          showToast('Background Video Paused');
        }
      });
    }

    // Handle video load error gracefully
    DOM.bgVideo.addEventListener('error', () => {
      console.warn('Background video failed to load or is not found. Showing aesthetic fallback background.');
      if (DOM.bgFallbackPoster) {
        DOM.bgFallbackPoster.style.display = 'block';
      }
    });

    // Attempt video autoplay
    DOM.bgVideo.play().catch(e => {
      console.log('Video autoplay deferred by browser permission:', e);
    });
  }

  // --- 10. ENTRY SCREEN LOGIC ---
  function initEntryScreen() {
    if (!DOM.entryScreen) return;

    // Check if session storage already has entry confirmed
    const remember = CFG.entryScreen && CFG.entryScreen.rememberPerSession;
    try {
      if (remember && sessionStorage.getItem('gem_profile_entered') === 'true') {
        DOM.entryScreen.style.display = 'none';
        DOM.body.classList.remove('loading-state');
        return;
      }
    } catch (e) {}

    function triggerEntry() {
      if (DOM.entryScreen.classList.contains('fade-out')) return;
      DOM.entryScreen.classList.add('fade-out');

      try {
        sessionStorage.setItem('gem_profile_entered', 'true');
      } catch (e) {}

      // Start music playback
      if (CFG.audio && CFG.audio.autoPlayOnEntry !== false) {
        if (CFG.audio.smoothFadeIn) {
          smoothFadeInAudio(currentVolume, CFG.audio.fadeInDurationMs || 1500);
        } else {
          DOM.bgAudio.volume = currentVolume;
          DOM.bgAudio.play().catch(e => console.log('Audio autoplay prevented:', e));
        }
      }

      // Ensure video is playing
      if (DOM.bgVideo && DOM.bgVideo.paused) {
        DOM.bgVideo.play().catch(e => console.log('Video autoplay prevented:', e));
      }

      // Show welcome toast
      setTimeout(() => {
        DOM.body.classList.remove('loading-state');
        showToast('Welcome to G E M');
      }, 500);
    }

    DOM.entryScreen.addEventListener('click', triggerEntry);

    // Keyboard trigger (Enter or Space)
    window.addEventListener('keydown', (e) => {
      if ((e.code === 'Space' || e.code === 'Enter') && !DOM.entryScreen.classList.contains('fade-out')) {
        e.preventDefault();
        triggerEntry();
      }
    });
  }

  // --- 11. QUICK UTILITIES (COPY URL & FULLSCREEN) ---
  function initUtilities() {
    // Copy Profile URL
    if (DOM.copyUrlBtn) {
      DOM.copyUrlBtn.addEventListener('click', () => {
        copyToClipboard(window.location.href, 'Profile URL copied to clipboard!');
      });
    }

    // Fullscreen Toggle
    if (DOM.fullscreenBtn) {
      DOM.fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().then(() => {
            if (DOM.fullscreenIcon) DOM.fullscreenIcon.innerHTML = ICONS.fullscreenExit;
            showToast('Entered Fullscreen');
          }).catch(err => {
            showToast('Fullscreen not supported');
          });
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
              if (DOM.fullscreenIcon) DOM.fullscreenIcon.innerHTML = ICONS.fullscreen;
              showToast('Exited Fullscreen');
            });
          }
        }
      });

      document.addEventListener('fullscreenchange', () => {
        if (DOM.fullscreenIcon) {
          DOM.fullscreenIcon.innerHTML = document.fullscreenElement ? ICONS.fullscreenExit : ICONS.fullscreen;
        }
      });
    }
  }

  // Copy helper with navigator.clipboard and execCommand fallback
  function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage || 'Copied to clipboard!');
      }).catch(() => {
        execCommandFallback(text, successMessage);
      });
    } else {
      execCommandFallback(text, successMessage);
    }
  }

  function execCommandFallback(text, successMessage) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMessage || 'Copied!');
    } catch (err) {
      showToast('Could not copy automatically');
    }
    document.body.removeChild(ta);
  }

  // Toast Notification
  function showToast(message, iconKey) {
    if (!DOM.toastNotification || !DOM.toastMessage) return;
    DOM.toastMessage.textContent = message;
    if (DOM.toastIcon) {
      DOM.toastIcon.innerHTML = (iconKey && ICONS[iconKey]) ? ICONS[iconKey] : ICONS.check;
    }

    DOM.toastNotification.classList.add('show');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      DOM.toastNotification.classList.remove('show');
    }, 2800);
  }

  // --- 12. 3D CARD PERSPECTIVE TILT ---
  function initCardTilt() {
    if (!DOM.profileCard || !CFG.effects || !CFG.effects.cardTilt || !CFG.effects.cardTilt.enabled) return;

    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const maxTilt = CFG.effects.cardTilt.maxDegrees || 7;

    document.addEventListener('mousemove', (e) => {
      const rect = DOM.profileCard.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2;
      const cardY = rect.top + rect.height / 2;

      // Mouse distance from center of card
      const deltaX = (e.clientX - cardX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - cardY) / (window.innerHeight / 2);

      const tiltY = Math.max(-maxTilt, Math.min(maxTilt, deltaX * maxTilt));
      const tiltX = Math.max(-maxTilt, Math.min(maxTilt, -deltaY * maxTilt));

      DOM.profileCard.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
    });

    // Reset when mouse leaves window
    document.addEventListener('mouseleave', () => {
      DOM.profileCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // --- 13. CUSTOM CURSOR EFFECT ---
  function initCustomCursor() {
    if (!DOM.cursorDot || !DOM.cursorRing || !CFG.effects || !CFG.effects.customCursor || !CFG.effects.customCursor.enabled) {
      if (document.getElementById('customCursor')) {
        document.getElementById('customCursor').style.display = 'none';
      }
      return;
    }

    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      if (document.getElementById('customCursor')) {
        document.getElementById('customCursor').style.display = 'none';
      }
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      DOM.cursorDot.style.left = `${mouseX}px`;
      DOM.cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth Lerp animation for outer ring
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      DOM.cursorRing.style.left = `${ringX}px`;
      DOM.cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Enlarge cursor on interactive element hover
    const interactiveSelectors = 'a, button, input[type="range"], .entry-screen, .role-badge, .profile-card';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => DOM.cursorRing.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => DOM.cursorRing.classList.remove('cursor-hover'));
    });
  }

  // --- 14. HTML5 CANVAS FLOATING PARTICLES ---
  function initParticles() {
    if (!DOM.particlesCanvas || !CFG.effects || !CFG.effects.particles || !CFG.effects.particles.enabled) return;

    const canvas = DOM.particlesCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const pConfig = CFG.effects.particles;
    const count = pConfig.count || 45;
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (pConfig.maxSize - pConfig.minSize) + pConfig.minSize,
        speedY: -(Math.random() * (pConfig.maxSpeed || 0.6) + 0.15),
        speedX: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        color: Math.random() > 0.4 ? (pConfig.color || '#a855f7') : (pConfig.secondaryColor || '#38bdf8')
      });
    }

    let isTabVisible = true;
    document.addEventListener('visibilitychange', () => {
      isTabVisible = !document.hidden;
    });

    function animateParticles() {
      if (isTabVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y += p.speedY;
          p.x += p.speedX;
          p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

          // Wrap boundaries
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(0.85, p.alpha));
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      }
      requestAnimationFrame(animateParticles);
    }

    requestAnimationFrame(animateParticles);
  }

  // --- 15. INITIALIZATION ON DOM READY ---
  function init() {
    initThemeAndContent();
    initAudioSystem();
    initVideoControls();
    initEntryScreen();
    initUtilities();
    initCardTilt();
    initCustomCursor();
    initParticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
