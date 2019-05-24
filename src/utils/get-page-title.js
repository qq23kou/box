import defaultSettings from '@/settings'

const title = defaultSettings.title || '⇐To Be Continued'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
