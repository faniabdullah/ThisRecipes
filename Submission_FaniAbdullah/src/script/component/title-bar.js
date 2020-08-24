class TitleBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
        <div class="mycontainer">
        <h2 id="Hello" style="float:left;"> </h2>
       
        `;
    }
}

customElements.define("title-bar", TitleBar);