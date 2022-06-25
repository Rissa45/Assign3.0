//**write the code here */
let demo= document.getElementById("display");
let buttons= Array.from(document.getElementsByClassName("btn"));
 buttons.map((buttons) =>{
    buttons.addEventListener("click", (e) =>{
        switch (e.target.innerText){
            case "C":
                demo.innerText= "";
                break;
                case "DEL":
                    if (demo.innerText){
                        demo.innerText= demo.innerText.slice(0, 1);
                    }
                    break;
                    case "=":
                        try{
                            demo.innerText= eval(demo.innerText);
                        } catch{
                            demo.innerText= "Syntax Error";
                        }
                        break;
                        default:
                            demo.innerText+= e.target.innerText;
                                }

    });
    

 });

 