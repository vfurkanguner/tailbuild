export default function beautifyHTML(codeStr: any) {
  if (!codeStr) {
    return "";
  }
  const process = (str: string) => {
    let div = document.createElement("div");
    div.innerHTML = str.trim();
    return format(div, 0).innerHTML.trim();
  };

  const format = (node: HTMLDivElement | any, level: number) => {
    let indentBefore = new Array(level++ + 1).join("  "),
      indentAfter = new Array(level - 1).join("  "),
      textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode("\n" + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      format(node.children[i], level);

      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode("\n" + indentAfter);
        node.appendChild(textNode);
      }
    }
    return node;
  };
  return process(codeStr);
}
