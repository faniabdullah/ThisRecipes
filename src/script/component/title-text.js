class TitleText extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
        <div class="mycontainer">
        <div class="titleText">

        <p class="flow-text">Find and share everyday cooking inspiration on here. Discover recipes, cooks, videos, and how-tos based on the food you love.</p>
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><i class="material-icons left">more</i>Learn More</a>
       
        <div class="line teal"></div>
       
        </div>
        
      
        </div>
        `;
    }
}

customElements.define("title-text", TitleText);