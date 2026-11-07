/**
 * ====================================================================
 * G E M — Personal Profile Website Configuration
 * Exact guns.lol / sidelegendop aesthetic profile page
 * ====================================================================
 * Customize your entire website from this single file.
 */

window.PROFILE_CONFIG = {
  // ------------------------------------------------------------------
  // 1. IDENTITY & guns.lol PROFILE CARD SETTINGS
  // ------------------------------------------------------------------
  identity: {
    // Top guns.lol stylish title header (e.g. "MӨVΣ ӨП!" or "G E M")
    headerTitle: "MӨVΣ ӨП!",
    // Primary display username
    username: "G E M",
    // Secondary sub-handle (e.g. "dontlovesomeone")
    handle: "dontlovesomeone",
    // guns.lol Discord activity status text beneath username
    statusText: "gravine // ambient",
    // Discord activity emoji
    statusEmoji: "🍃",
    // Discord status presence icon: "online" (peaceful green), "idle" (amber), "dnd" (red)
    presenceStatus: "online",
    // Personal bio
    bio: "just a human being",
    // Avatar image path (inside assets/ folder)
    avatarUrl: "assets/avatar.jpg",
    // Fallback avatar if avatar.jpg fails to load
    avatarFallback: "assets/avatar.png",
    // Show verified checkmark badge next to username
    isVerified: true,
    verifiedTooltip: "Verified Identity"
  },

  // ------------------------------------------------------------------
  // 2. BADGES & ROLES
  // ------------------------------------------------------------------
  badges: [
    { text: "Peaceful", icon: "sparkles" },
    { text: "Serenity", icon: "moon" },
    { text: "Ambient", icon: "code" }
  ],

  // ------------------------------------------------------------------
  // 3. REAL GLOBAL VIEW COUNTER & VIEWER CLOCK
  // ------------------------------------------------------------------
  metadata: {
    // Clean location (optional)
    location: {
      enabled: false,
      text: "Tokyo, Japan",
      icon: "map-pin"
    },
    // Live Viewer Clock: ticks live according to whoever is currently viewing
    clock: {
      enabled: true,
      autoLocalTime: true,
      showSeconds: true,
      format12Hour: true
    },
    // Real Global Visitor Counter (live cloud API - tracks real viewers worldwide)
    viewsCounter: {
      enabled: true,
      apiKey: "gem_official_profile_views_2026",
      baseCount: 0, // Set an initial number if you want to add to the real count
      countEveryVisit: true, // Count every visit and refresh from viewers to maximize real view count
      label: "views", // Guns.lol displays e.g. "115 views" next to the eye icon
      tooltip: "Real Global Visitor Count"
    }
  },

  // ------------------------------------------------------------------
  // 4. ENTRY SCREEN ("CLICK TO ENTER")
  // ------------------------------------------------------------------
  entryScreen: {
    enabled: true,
    mainText: "CLICK TO ENTER",
    subText: "🎧 best experienced with sound",
    rememberPerSession: true
  },

  // ------------------------------------------------------------------
  // 5. BACKGROUND VIDEO SETTINGS
  // ------------------------------------------------------------------
  // Place your own MP4 video in assets/background.mp4.
  // The system automatically scales, centers, and crops it seamlessly for both PC and phones.
  video: {
    url: "assets/background.mp4",
    fallbackImage: "assets/avatar.png",
    mutedByDefault: true,
    overlayOpacity: 0.32,
    blur: false,
    playbackRate: 1.0
  },

  // ------------------------------------------------------------------
  // 6. BACKGROUND MUSIC SETTINGS
  // ------------------------------------------------------------------
  // High-quality peaceful ambient soundtrack running in a continuous serene loop
  audio: {
    url: "assets/background-music.mp3",
    trackTitle: "gravine (ambient loop)",
    artist: "G E M",
    defaultVolume: 0.35,
    autoPlayOnEntry: true,
    smoothFadeIn: true,
    fadeInDurationMs: 1800,
    storageVolumeKey: "gem_bg_audio_volume",
    storageMuteKey: "gem_bg_audio_muted"
  },

  // ------------------------------------------------------------------
  // 7. SOCIAL MEDIA LINKS (guns.lol style icon row)
  // ------------------------------------------------------------------
  socials: [
    {
      id: "discord",
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/users/ozoii.",
      handle: "ozoii.",
      tooltip: "Discord: ozoii. (Click to copy)",
      copyOnClick: true // Clicking Discord copies your handle to clipboard
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/gwen_tauro/?hl=en",
      handle: "@gwen_tauro",
      tooltip: "Instagram: @gwen_tauro",
      copyOnClick: false
    },
    {
      id: "github",
      name: "GitHub",
      icon: "github",
      url: "https://github.com/2416033gemson",
      handle: "2416033gemson",
      tooltip: "GitHub: 2416033gemson",
      copyOnClick: false
    },
    {
      id: "spotify",
      name: "Spotify",
      icon: "spotify",
      url: "https://open.spotify.com/user/31ek46higmnx3vmvumtyswpoirka?si=24ade29feb5e4154",
      handle: "Spotify",
      tooltip: "Listen on Spotify",
      copyOnClick: false
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "youtube",
      url: "https://www.youtube.com/channel/UCkhmGiS8bLmoatwjLBaIs4A",
      handle: "YouTube",
      tooltip: "YouTube Channel",
      copyOnClick: false
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: "telegram",
      url: "https://t.me/XMAXZ9",
      handle: "@XMAXZ9",
      tooltip: "Telegram: @XMAXZ9",
      copyOnClick: false
    }
  ],

  // ------------------------------------------------------------------
  // 8. THEME & COLORS (Serene Luminous Light Green & Mint Glass Aesthetic)
  // ------------------------------------------------------------------
  theme: {
    accentColor: "#4ade80",       // Vibrant Light Mint / Spring Green
    accentSecondary: "#86efac",   // Soft Pastel Celadon / Sage
    glowColor: "rgba(74, 222, 128, 0.45)",
    cardBackground: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(12, 38, 24, 0.28) 40%, rgba(6, 20, 13, 0.38) 100%)",
    cardBorder: "rgba(255, 255, 255, 0.25)"
  },

  // ------------------------------------------------------------------
  // 9. VISUAL EFFECTS (Luminous Light Green Floating Fireflies)
  // ------------------------------------------------------------------
  effects: {
    particles: {
      enabled: true,
      count: 65,
      color: "rgba(74, 222, 128, 0.85)",        // Bright light green firefly
      secondaryColor: "rgba(134, 239, 172, 0.75)", // Soft pastel mint glow
      maxSpeed: 0.35,                            // Slow, serene floating drift
      minSize: 1.2,
      maxSize: 4.0
    },
    cardTilt: {
      enabled: true,
      maxDegrees: 6
    },
    customCursor: {
      enabled: true
    },
    clickRipple: {
      enabled: true
    }
  },

  // ------------------------------------------------------------------
  // 10. QUICK CONTROLS BAR
  // ------------------------------------------------------------------
  controls: {
    showAudioWidget: true,
    showVideoMute: true,
    showCopyUrl: true,
    showFullscreen: true
  }
};
