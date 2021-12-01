const elems: HTMLElement[] = [];

function tabListen() {
  const alcoholDensityTable = document.querySelector(".alcohol-density-table");
  elems.push(alcoholDensityTable as HTMLElement);

  const convertDensityTable = document.querySelector(".convert-density-table");
  elems.push(convertDensityTable as HTMLElement);

  const alcoholTabBtn = document.querySelector(".alcohol-tab-btn") as HTMLButtonElement;
  const convertDensityTabBtn = document.querySelector(".convert-density-btn") as HTMLButtonElement;

  alcoholTabBtn.onclick = () => {
    switchTab(alcoholDensityTable);
  };

  convertDensityTabBtn.onclick = () => {
    switchTab(convertDensityTable);
  };

  switchTab(alcoholDensityTable);
}

function switchTab(tab: Element) {
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.display = elems[i].isEqualNode(tab) ? "flex" : "none";
  }
}

export { tabListen };