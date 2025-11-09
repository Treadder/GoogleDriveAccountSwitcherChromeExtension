chrome.webNavigation.onBeforeNavigate.addListener((details) => {

    // Only act on the main frame navigation (not iframes)
    if (details.frameId !== 0) {
        return; 
    }

    const url = new URL(details.url);
    const hostname = url.hostname;
    
    const googleDomainRegex = /^(drive|mail|sheets|docs|photos|chat|meet)\.google\.com$|^gmail\.com$/

    if (googleDomainRegex.test(hostname)) {

        if (url.pathname === "/" && url.search === "") {
                       
            let continueUrl;

            if (hostname === "gmail.com") {
                continueUrl = "https://mail.google.com/";
            } else {
                continueUrl = `https://${hostname}/`;
            }

            const chooserUrl = `https://accounts.google.com/AccountChooser?continue=${encodeURIComponent(continueUrl)}`;

            chrome.tabs.update(details.tabId, { url: chooserUrl });
        }
    }
}, { 
    url: [
        { hostSuffix: "google.com" },
        { hostSuffix: "gmail.com" } 
    ] 
});