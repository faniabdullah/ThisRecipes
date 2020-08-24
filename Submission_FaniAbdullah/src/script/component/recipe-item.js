class RecipeItem extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
        <div class="mycontainer">
        <div class="row" >
            <div class="col s12 m12 l3 " style="padding: 0px; margin: 0px;">
              <ul class="collapsible">
                
                <li class="active">
                  <div class="collapsible-header"><i class="material-icons">filter_drama</i>Categories</div>
                  <div class="collapsible-body">
                      <div class="collection" id="listCategory">
                  
                     </div>
                 </div>
                 </li>

                 <li>
                  <div class="collapsible-header"><i class="material-icons">place</i>Area</div>
                  <div class="collapsible-body">
                      <div class="collection" id="listArea"></div>
                 </div>
                 </li>
                 
              </ul>
            </div>

            <div class="col s12 m12 l9" id="list-meals">
                <div class="row" id="listMeals"></div>
            </div>

        </div>
    </div>
       
        `;
    }
}

customElements.define("recipe-item", RecipeItem);