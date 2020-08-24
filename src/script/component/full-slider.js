

class Slider extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
       
            this.innerHTML =`
            <div class="carousel right" id="slider-bar">
            <a class="carousel-item"><img id="slider1" src=""></a>
            <a class="carousel-item"><img id="slider2" src=""></a>
            <a class="carousel-item"><img id="slider3" src=""></a>
            <a class="carousel-item"><img id="slider4" src=""></a>
            <a class="carousel-item"><img id="slider5" src=""></a>
          </div> `
            
           }
      
    }
   


customElements.define("full-slider", Slider);