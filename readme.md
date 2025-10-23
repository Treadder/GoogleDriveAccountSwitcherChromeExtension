📂 Google Drive Account Chooser Extension

This Chrome extension solves the common problem of Google Drive automatically routing logged-in users to their primary account (/u/0/my-drive) instead of presenting the account selection screen.

By installing this extension, navigating to drive.google.com will reliably force the Google Account Chooser, allowing you to select which account you want to access every time.

🚀 Features

Forces Account Selection: Interrupts the default Google Drive redirection, ensuring the multi-account selector page is displayed.

Simple & Lightweight: Runs entirely in the background using a Service Worker and has no visual interface (no popup or toolbar icon needed).

Minimal Permissions: Only requires the webNavigation permission to monitor when you visit the Drive root domain.

🛠️ Installation (Developer Mode)

If you want you can install it easily in Developer Mode. (It's live here: 'https://chromewebstore.google.com/detail/drive-account-chooser/ddbagfifdmgfeddnhimdloclojjgfpbb')

Download Files: Ensure you have the following files and folders in one directory:

manifest.json

service_worker.js

icons/ (containing drive-16.png, drive-48.png, drive-128.png)

Open Extensions: Navigate to chrome://extensions/ in your Chrome browser.

Enable Developer Mode: Toggle the "Developer mode" switch on (usually in the upper right corner).

Load Unpacked: Click the "Load unpacked" button.

Select Folder: Choose the folder containing your extension files.

The extension will now be installed and running in your browser.

⚙️ How It Works

The extension uses the webNavigation API to listen for any attempt to navigate to the Drive homepage (https://drive.google.com/). When a match is detected, the extension redirects the browser to the specific Google URL designed to show the account chooser:

[https://accounts.google.com/AccountChooser?continue=https://drive.google.com/](https://accounts.google.com/AccountChooser?continue=https://drive.google.com/)


This ensures the user is prompted to select their profile before proceeding to their cloud storage.

📦 Packaging and Publishing

If you are ready to distribute your extension, either directly to a small group (packaging) or publicly via the Chrome Web Store (publishing), follow the instructions below.

1. Packaging the Extension (Manual Distribution)

This process creates a single .crx file (a proprietary Chrome extension package) for quick installation by others without needing to use the "Load unpacked" method.

Open Extensions: Navigate to chrome://extensions/.

Enable Developer Mode: Ensure the "Developer mode" toggle is ON.

Pack Extension: Click the "Pack extension..." button.

Select Root Directory: Use the browser to select the root folder containing your manifest.json file.

Confirm: Leave the private key file field blank (unless you are repacking an existing version) and click "Pack extension."

This generates a .crx file (the installable package) and a .pem file (your private key). Keep the .pem file safe as you will need it to update your extension later.

2. Publishing to the Chrome Web Store (Public Distribution)

To list your extension publicly, you must submit it to the Web Store.

Set Up Developer Account: If you haven't already, sign in to the Chrome Web Store Developer Dashboard and complete the one-time registration.

Prepare Assets: Create the required promotional images:

Icons: Ensure the icons referenced in manifest.json are finalized.

Store Image: A promotional image with dimensions 1280x800 (PNG or JPEG).

Create ZIP File: Select all files in your root extension folder (manifest.json, service_worker.js, and the icons folder) and compress them into a single .zip archive.

Upload: In the Developer Dashboard, click "Add new item" and upload the .zip file.

Complete Listing: Fill out the mandatory store information (detailed description, category, language, and public contact email).

Submit: Once all fields are complete, click "Submit for review." The review process typically takes a few days.

📝 License

This project is open source and available under the
