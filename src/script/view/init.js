$(document).ready(()=> {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.collapsible').collapsible();
    $('.modal').modal();

      setInterval(()=> {
        $('.carousel').carousel('next');
      },2000)

      $( "#SendRecipe" ).click( ()=> {
        let yourName = $("#nameSend").val();
        let yourEmail = $("#email").val();
        if (yourName == "" || yourEmail == "") {
          $("#show-name").text(`Sorry`);
          $("#show-email").text(`It is expected to fill out the form correctly , fill the form!`);
        }else{
          $("#show-name").text(`Thank you ${yourName}`);
          $("#nameSend").val("");
          $("#email").val("");
        $("#show-email").text(`we will immediately send you a message in the email ${yourEmail} to confirm. `);
        }
        
      });



});

const myArray = ["hello", "reviewer hehe", "welcome to","ThisRecipes__"];
let text = 0;
let sentence = 0;

   const clear = () => {
       document.getElementById("Hello").innerHTML = "&nbsp";
   }
 const typing = () => {
       let alphabet = myArray[sentence];
       if (alphabet === undefined) {}
       else{
        if(text<alphabet.length){
            document.getElementById("Hello").innerHTML += alphabet.charAt(text);
            text++;
            setTimeout(typing,200);
        }else{  
            text = 0;
            sentence++;
            let cek = myArray[sentence];
            if (cek !== undefined) {
                setTimeout(clear,800);
            }
            setTimeout(typing,1000);
        }
       }
   }
 typing();

