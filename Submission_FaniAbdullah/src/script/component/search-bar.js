class Searcbar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
      
        <nav class="serchbar white lighten-3">
            <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" placeholder="Search Here .. " type="search" required>
          <label class="label-icon black-text" for="search"><i class="material-icons black-text">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
   
  </nav>
  <div class="mycontainer"> 
  <p>Example Search : Chicken , Beef  , Pasta , Arrabiata</p>
  <div> 
 
       `;
    }
}

customElements.define("search-bar", Searcbar);