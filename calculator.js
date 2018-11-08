{
    function createButton(text, container) {
        var button = document.createElement('button');
        button.textContent = text;
        container.appendChild(button);
        return container;
    }
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    keys.map(function (textList) {
        var div = document.createElement('div');
        textList.map(function (text) {
            createButton(text, div);
        });
        document.body.appendChild(div);
    });
}
