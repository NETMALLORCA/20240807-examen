class Button extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }
        </style>

        <button class="send-button">Enviar</button>
        `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      try {
        // Fetch the JSON data
        let response = await fetch('https://catalegdades.caib.cat/resource/j2yj-e83g.json')
        const data = await response.json()

        // Extract latitude and longitude from the data
        const geocodedColumn = data[0]?.geocoded_column
        if (geocodedColumn && geocodedColumn.type === 'Point') {
          const [latitud, longitud] = geocodedColumn.coordinates

          // Prepare the payload
          const payload = { latitud, longitud }

          console.log(payload)

          // Send the data to your API
          response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/solicitud`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })

          if (response.ok) {
            console.log('Datos enviados correctamente')
          } else {
            console.error('Error al enviar los datos')
          }
        } else {
          console.error('No se encontraron coordenadas en los datos')
        }
      } catch (error) {
        console.error('Error al procesar la solicitud:', error)
      }
    })
  }
}

customElements.define('button-component', Button)
