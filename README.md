# BLINK

> *A quiet confirmation of presence.*

Blink is a minimal, monolithic digital artifact designed to record moments of existence. It rejects the noise of modern social platforms—no likes, no shares, no analytics, no cloud synchronization. Just you, a button, and the timeline of your presence.

## Philosophy

In an era of attention economy and algorithmic feeds, Blink offers a void. A black screen. A simple tool to acknowledge that you are here, right now. It is not a journal. It is not a status update. It is a digital heartbeat.

## Features

- **The Button**: A single point of interaction. "I exist".
- **The Record**: Chronological, local, private.
- **The Void**: Pure black interface (`#000000`) with neutral typography (`#888888`).
- **Privacy**: Data lives **only** on your device's `localStorage`. Clearing your browser cache clears your existence (from this app).
- **Calm**: No notifications. No badges. No sounds.

## Technical Overview

Built with a focus on minimalism and performance.

- **Stack**: Vite + React
- **Styling**: Vanilla CSS (No large frameworks)
- **State**: React Hooks + LocalStorage
- **Deployment**: Static Web App / PWA ready

## Installation

```bash
git clone git@github.com:Floyce/BLINK.git
cd BLINK
npm install
npm run dev
```

## Usage

1. Open the app.
2. Tap **"I exist"**.
3. (Optional) Enter a brief note or "phrase" to anchor the moment.
4. Return later to see the confirmation of your past selves.

## Data Persistence

**Where is it saving?**
Blink saves everything strictly to your browser's **Local Storage**. 
- It does **not** send data to any server.
- It does **not** use cookies for tracking.
- If you use Blink in Incognito/Private mode, your entries will vanish when the window closes.
- If you clear your browser data, the entries are lost forever.

## License

Unlicense. Do what you want.
