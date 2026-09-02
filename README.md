# SDS — Start Dev Server 🚀

Start your development server and auto-open the local URL in your browser with a single click or keyboard shortcut. Run or stop your project's dev server without manually typing commands or hunting for `localhost` links.
[website](https://sds.shaniweb.com)
---

## ✨ Features

* **⚡ One-Click Start & Stop:** Toggle your dev server directly from the bottom status bar.
  
* **⌨️ Keyboard Shortcut:** Start/Stop instantly using `Ctrl+Shift+S` (Windows/Linux) or `Cmd+Shift+S` (macOS).
  
* **🌐 Automatic Browser Launch:** Reads the terminal stream using Shell Integration and immediately opens `http://localhost:<port>` or `http://127.0.0.1:<port>` in your default browser.
  
* **📦 Smart Package Manager Detection:** Automatically detects and uses **Bun**, **pnpm**, **Yarn**, or **npm** based on project.
  
* **🎨 Dynamic Status Bar States:**
  * **Ready to start:** `$(play) SDS` (Warning accent)
  * **Starting & listening:** `$(loading~spin) SDS` (Animated spinner)
  * **Running with URL tooltip:** `$(debug-pause) SDS` (Active accent with hover preview `Dev Server: http://localhost:...`)
    
* **⚙️ Configurable Timeout:** Customize URL detection wait time via VS Code Settings.
  
* **🛡️ Safe & Silent:** Clean background execution without annoying toast notification spam or terminal focus stealing.

---

## 🚀 How to Use SDS

### 1. Install Extension
Install **SDS - Start Dev Server** from the Extensions marketplace in VS Code, Cursor, or Antigravity.

### 2. Open Your Project
Open any web project containing a `package.json` with a `dev` script (e.g. Next.js, Vite, React, Vue, Svelte, Nuxt, Astro).

### 3. Start Dev Server
Trigger the server via either:
* Clicking the **`$(play) SDS`** button in the bottom status bar.
* Pressing **`Ctrl+Shift+S`** (`Cmd+Shift+S` on macOS).
* Running **`SDS - Start Dev Server`** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).

SDS will start your server in a dedicated terminal, capture the local port, update the status bar, and open your app in the browser automatically!

---

## ⌨️ Keybindings

| Command | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Start / Stop Dev Server** | `Ctrl + Shift + S` | `Cmd + Shift + S` |

---

## ⚙️ Configuration Settings

Customize SDS behavior through VS Code Settings (`Ctrl+,` / `Cmd+,`) under **SDS - Settings**:

| Setting | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sds.timeout` | `number` | `20000` | Timeout in milliseconds (10,000 – 60,000 ms) to wait for the dev server URL before giving up. |

---

## 🧩 Compatibility

SDS is built on the VS Code Extension API & Terminal Shell Integration, designed for:
* **Visual Studio Code**
* **Cursor**
* **Antigravity**
* **Windsurf** and other VS Code-compatible IDEs

---

## 👤 Author

* **Shani Tiwari** → [Twitter](https://x.com/shanidevelops)

---

### License
Copyright (c) 2026 Shani Tiwari. All rights reserved.
