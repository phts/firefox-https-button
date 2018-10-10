function setTabUrl(tabId, url) {
  browser.tabs.update(tabId, {
    url,
  })
}

async function toggleHttps() {
  const tabs = await browser.tabs.query({currentWindow: true, active: true})
  const currentTab = tabs[0]
  const tabId = currentTab.id
  const url = currentTab.url

  if (url.startsWith('http://')) {
    const newUrl = url.replace('http://', 'https://')
    setTabUrl(tabId, newUrl)
  } else if (url.startsWith('https://')) {
    const newUrl = url.replace('https://', 'http://')
    setTabUrl(tabId, newUrl)
  }
}

browser.browserAction.onClicked.addListener(toggleHttps)
