"use strict";
var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "Zutaten":
                    group = createMultiple(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Hexenkessel.generateContent = generateContent;
    function createMultiple(_items, _category) {
        let group = document.createElement("div");
        group.id = "groupStyle";
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            let numberAmount = document.createElement("input");
            numberAmount.type = "number";
            numberAmount.value = "1";
            numberAmount.name = item.name + "Menge";
            numberAmount.id = item.name + "Menge";
            numberAmount.min = "1";
            group.appendChild(numberAmount);
            let breakIt = document.createElement("br");
            group.appendChild(breakIt);
        }
        return group;
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
//# sourceMappingURL=GenerateContent.js.map