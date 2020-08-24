class FooterThis extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
        <footer  class="page-footer teal">
        <div class="container">
          <div class="row">
            <div class="col l6 s12" id="send-recipes">
              <h5 class="white-text">ThisRecipes</h5>
              <p class="grey-text text-lighten-4">
                Fill in the form below to send the recipe</p>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="nameSend" type="text" class="validate">
                    <label for="nameSend">Your Name</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">email</i>
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s12">
                    <a id="SendRecipe" class="btn waves-effect waves-light white teal-text modal-trigger" href="#modal2"  name="action">Submit
                      <i class="material-icons right">send</i>
                      
                    </a>
                  </div>
                  
                </div>
                
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Subscribe & Follow us</h5>
              <ul >
                <li>
                  <a class="grey-text text-lighten-3" target="blank" href="https://www.youtube.com/channel/UCMf_uLtY745SBvZGSNdFb3Q" >This Recipes<i class="material-icons left">subscriptions</i></a>
                </li>
                
                <li style="clear: both; margin-top: 10px;">
                 
                    <a class="grey-text text-lighten-3" target="blank" href="https://www.youtube.com/channel/UCMf_uLtY745SBvZGSNdFb3Q" >emailMe@ThisRecipes.com<i class="material-icons left">contact_mail</i></a>
                  
                </li>
                <li style="clear: both; margin-top: 10px;">
                 
                  <a class="grey-text text-lighten-3" target="blank"  > <a class="grey-text text-lighten-3" target="blank" href="https://www.instagram.com/fabduul/" >Twitter /
                  </a>
                  <a class="grey-text text-lighten-3" target="blank" href="https://www.instagram.com/fabduul/" > Instagram / </a>
                  <a class="grey-text text-lighten-3" target="blank" href="https://www.instagram.com/fabduul/" > Facebook .</a>
                    
                    
                    <i class="material-icons left">more</i></a>
                
              </li>
                
               
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2020 Copyright Fani Abdullah Dicoding Academy
          <a class="grey-text text-lighten-4 right" target="blank" href="https://www.instagram.com/fabduul/">@fabduul</a>
          </div>
        </div>
      </footer >
       
        `;
    }
}

customElements.define("footer-this", FooterThis);