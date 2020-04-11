export default function addSrcTag(src, cb) {
  const script = document.createElement('script')
  script.src = src
  document.head.appendChild(script)
  script.onload = () => cb()
}
