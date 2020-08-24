class AppBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
      
        <nav class="teal lighten-2" role="navigation">
        <div class="nav-wrapper container-nav "><a id="logo-container" href="#" class="brand-logo">thisRecipes</a>
          <ul class="right hide-on-med-and-down">
            
            <li><a class = "" href="#home">Home</a></li>
            <li><a class = "" href="#search">Recipe</a></li>
            <li><a class = "" href="#send-recipes">Send Recipe</a></li>
            
            
          </ul>
    
          <ul id="nav-mobile" class="sidenav">
          <li><a class = "text-color" href="#home">Home</a></li>
          <li><a class = "text-color" href="#search">Recipe</a></li>
          <li><a class = "text-color" href="#send-recipes">Send Recipe</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" class="  waves-effect waves-light  sidenav-trigger "><i class="material-icons">menu</i></a>
        </div>
      </nav> `;
    }
}

customElements.define("app-bar", AppBar);