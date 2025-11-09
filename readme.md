## 📂 G-Switcher: Account Chooser Enforcer

This Chrome extension solves the common problem of **Google apps automatically routing logged-in users to their primary account** (`/u/0/`) instead of presenting the account selection screen.

By installing this extension, navigating to any supported Google domain (like `mail.google.com` or `drive.google.com`) will reliably **force the Google Account Chooser**, allowing you to select which profile you want to access every time.

---

### 🚀 Features

- **Forces Account Selection:** Interrupts the default Google app redirection across multiple services, ensuring the multi-account selector page is always displayed.
- **Broad Compatibility:** Supports the following popular Google applications:
  - **Drive** (`drive.google.com`)
  - **Gmail / Mail** (`mail.google.com` / `gmail.com`)
  - **Sheets** (`sheets.google.com`)
  - **Docs** (`docs.google.com`)
  - **Photos** (`photos.google.com`)
  - **Chat** (`chat.google.com`)
  - **Meet** (`meet.google.com`)
- **Simple & Lightweight:** Runs entirely in the background using a **Service Worker** and has no visual interface (no popup or toolbar icon needed).
- **Minimal Permissions:** Only requires the `webNavigation` permission to monitor when you visit the supported domains.

---

### ⚙️ How It Works

The extension uses the `webNavigation` API to listen for any attempt to navigate to a supported Google homepage.

When a match is detected on any of the supported domains, the extension redirects the browser to the specific Google URL designed to show the **Account Chooser**, using the originally requested URL as the `continue` parameter.

> **Example:** Navigating to `https://drive.google.com/` is redirected to:
> `https://accounts.google.com/AccountChooser?continue=https://drive.google.com/`
> This ensures the user is prompted to select their profile before proceeding to the service.

---

### 🛠️ Installation (Developer Mode)

The extension is live on the Chrome Web Store: **[Drive Account Chooser](https://chromewebstore.google.com/detail/drive-account-chooser/ddbagfifdmgfeddnhimdloclojjgfpbb)**.

If you want to install it manually for development or testing, follow these steps:

1.  **Download Files:** Ensure you have the required files (`manifest.json`, `service_worker.js`, and the `icons/` folder) in one root directory.
2.  **Open Extensions:** Navigate to `chrome://extensions/` in your Chrome browser.
3.  **Enable Developer Mode:** Toggle the "**Developer mode**" switch on (usually in the upper right corner).
4.  **Load Unpacked:** Click the "**Load unpacked**" button.
5.  **Select Folder:** Choose the root folder containing your extension files.

The extension will now be installed and running in your browser.

---

### 📦 Packaging and Publishing

If you're ready to distribute your extension, you can package it for manual distribution or submit it to the Chrome Web Store.

#### 1. Packaging the Extension (Manual Distribution)

This creates a single `.crx` file for easy installation by others without needing "Load unpacked."

- **Open Extensions:** Navigate to `chrome://extensions/`.
- **Enable Developer Mode:** Ensure the "Developer mode" toggle is **ON**.
- **Pack Extension:** Click the "**Pack extension...**" button.
- **Select Root Directory:** Use the browser to select the root folder containing your `manifest.json` file.
- **Confirm:** Leave the private key file field blank (unless repacking an existing version) and click "**Pack extension**."

> **Note:** This generates a `.crx` file (the installable package) and a **`.pem` file** (your private key). **Keep the `.pem` file safe** as you will need it to update your extension later.

#### 2. Publishing to the Chrome Web Store (Public Distribution)

To list your extension publicly:

1.  **Set Up Developer Account:** Sign in to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) and complete the one-time registration.
2.  **Prepare Assets:** Create the required promotional images (e.g., a Store Image with dimensions **1280x800**).
3.  **Create ZIP File:** Select all files in your root extension folder and compress them into a single `.zip` archive.
4.  **Upload:** In the Developer Dashboard, click "**Add new item**" and upload the `.zip` file.
5.  **Complete Listing:** Fill out the mandatory store information (detailed description, category, language, and public contact email).
6.  **Submit:** Click "**Submit for review**."

---

### 📝 License

IDGAF man
