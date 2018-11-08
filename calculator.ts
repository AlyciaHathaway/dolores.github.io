{
    function createButton(text: string, container: HTMLElement) {
        let button: HTMLButtonElement = document.createElement('button')
        button.textContent = text
        container.appendChild(button)
        return container
    }

    let keys: Array<Array<string>> = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ]

    keys.map((textList: Array<string>)=> {
        let div: HTMLDivElement = document.createElement('div')
        textList.map((text: string)=> {
            createButton(text, div)
        })
        document.body.appendChild(div)
    })

}