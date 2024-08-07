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
      let response = await fetch('https://catalegdades.caib.cat/resource/j2yj-e83g.json')
      let data = await response.json()

      data = data.map(element => {
        let newElement = {}
        if (element.geocoded_column) {
          newElement = {
            ...element,
            latitude: element.geocoded_column.coordinates[0],
            longitude: element.geocoded_column.coordinates[1]
          }
        } else {
          newElement = {
            ...element
          }
        }

        return newElement
      })

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/solicitud`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    })
  }
}

customElements.define('button-component', Button)
