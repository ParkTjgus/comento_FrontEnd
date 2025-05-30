class CalcButton extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute("type");
    const label = this.getAttribute("label");

    const style = {
      number: "background: #FCE7F3; border: 2px solid #FBCFE8; color: #EC4899;",
      operator:
        "background: #FECACA; border: 2px solid #FCA5A5; color: #EF4444",
      equal: "background: #FCA5A5; border: 2px solid #EF4444; color: white;",
      clear: "background: white; border: 2px solid #FBCFE8; color: #FBCFE8;",
    };

    this.innerHTML = `
                <button style="
                    width: 64px; height: 64px; border-radius: 100%; 
                    font-size: 24px; font-weight: bold; box-shadow: 0 4px 8px 0 lightgray;
                    ${style[type] || ""}" class="btn">${label}</button>
            `;
  }
}

customElements.define("calc-button", CalcButton);
