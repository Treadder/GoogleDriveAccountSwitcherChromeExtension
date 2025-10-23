// Listener that fires before a navigation happens.
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const url = new URL(details.url);

    // 1. Target drive.google.com only.
    if (url.hostname === "drive.google.com") {
        
        // 2. Check if the user is navigating to the root domain with no path or search parameters.
        if (url.pathname === "/" && url.search === "") {
            
            // 3. This is the known Google URL pattern that forces the Account Chooser prompt
            // before redirecting to the destination (drive.google.com).
            const chooserUrl = "https://accounts.google.com/AccountChooser?continue=https://drive.google.com/";
            
            // 4. Redirect the current tab to the chooser page.
            chrome.tabs.update(details.tabId, { url: chooserUrl });
        }
    }
}, { url: [{ hostEquals: "drive.google.com" }] });

