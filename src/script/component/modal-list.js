class ModalList extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
        <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>ThisRecipes</h4>
          <p>Find and share everyday cooking inspiration on here. 
            Discover recipes, cooks, videos, and how-tos based on the food you love.</p>
          <p>
            You can send recipes to us.
            How to?
          </p>
        <ol>
          <li>
            Subscribe us on Instagram and YouTube
          </li>
          <li>send your recipe here by filling out the form in the footer, then we will confirm by email</li>
          <li>
            Then you will benefit, if your product has advertisements
          </li>
          <li>
          We reserve the right to advertise your recipe
          </li>
        </ol>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>


      <div id="modal2" class="modal">
        <div class="modal-content">
          <h4 id="show-name"></h4>
          <p id="show-email"></p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
       `;
    }
}

customElements.define("modal-list", ModalList);