async function switchToHttps() {
  const tabs = await browser.tabs.query({currentWindow: true, active: true})
  const currentTab = tabs[0]
  const tabId = currentTab.id
  const url = currentTab.url
  if (!url.includes('http://')) {
    return
  }

  const newUrl = url.replace('http://', 'https://')
  browser.tabs.update(tabId, {
    url: newUrl,
  })
}

browser.browserAction.onClicked.addListener(switchToHttps)
