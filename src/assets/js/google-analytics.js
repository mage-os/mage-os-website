window.addEventListener('load', () => {
  window.requestIdleCallback(() => {
    const element = document.createElement('script')
    element.src = 'https://www.googletagmanager.com/gtag/js?id=G-4155R50NC3'
    element.async = true
    element.onload = function () {
      window.dataLayer = window.dataLayer || []

      function gtag(){
        dataLayer.push(arguments)
      }

      gtag('js', new Date())
      gtag('config', 'G-4155R50NC3')
    }

    document.body.appendChild(element)
  })
})
