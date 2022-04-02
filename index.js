const { chromium } = require('playwright')

;(async()=>{
  const browser = await chromium.launch()
  const page = await browser.newPage()
  // const content = await page.textContent('Pablo')
  
  await page.goto('https://radonz.com/')
  // await page.screenshot({ path: 'screenshot.png' })

  // const content = await page.textContent('[href="/proyects"]');   // por atributo
  const content = await page.textContent('p');                 // por etiqueta html
  // const content = await page.textContent('.claseAcoger');      // por clase
  // Accedemos con $('.claseAcoger')[X].textContent en la consola para ver el texto de sus hijos
  
  
  console.log(content)
  // console.log(content.includes('radonz'))
  await browser.close()
})()

// idealista, fotocasa, pisos.com, milanuncios