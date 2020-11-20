namespace L05_Hexenkessel_Client {
  export interface Item {
    name: string;
    price: number;
  }

  export interface Data {
    [category: string]: Item[];
  }

  export function generateContent(_data: Data): void {
    for (let category in _data) {
      let items: Item[] = _data[category];

      let group: HTMLElement | null = null;
      switch (category) {
        case "Zutaten":
          group = createMultiple(items, category);
          break;

        default:
          break;
      }

      let fieldset: HTMLFieldSetElement | null = document.querySelector(
        "fieldset#" + category
      );
      if (fieldset && group) fieldset.appendChild(group);
    }
  }

  function createMultiple(
    _items: Item[],
    _category: string
  ): HTMLElement | null {
    let group: HTMLDivElement = document.createElement("div");
    group.id = "groupStyle";

    for (let item of _items) {
      let checkbox: HTMLInputElement = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.setAttribute("price", item.price.toFixed(2));
      checkbox.value = item.name;
      checkbox.name = _category;
      checkbox.id = item.name;

      let label: HTMLLabelElement = document.createElement("label");
      label.textContent = item.name;
      label.htmlFor = item.name;

      group.appendChild(checkbox);
      group.appendChild(label);

      let numberAmount: HTMLInputElement = document.createElement("input");
      numberAmount.type = "number";
      numberAmount.value = "1";
      numberAmount.name = item.name + "Menge";
      numberAmount.id = item.name + "Menge";
      numberAmount.min = "1";
      group.appendChild(numberAmount);

      let breakIt: HTMLElement = document.createElement("br");
      group.appendChild(breakIt);
    }
    return group;
  }
}
