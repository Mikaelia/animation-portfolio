//TODO: wasn't I supposed to remove the header from this calculation?
export function calculateVHPercentage() {
  const viewportHeight = window.innerHeight;
  const totalPageHeight = document.documentElement.scrollHeight;
  return viewportHeight / totalPageHeight;
}
