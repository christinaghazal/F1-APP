

export const createFooter = () => {
    const footerElement = document.createElement('footer'); 
    footerElement.innerHTML = ` <div class="icons">
                          <i class="fa fa-twitter"></i>
                          <i class="fa fa-instagram"></i>
                          </div>
          <p>Created By Christina Ghazal <i class="fa fa-copyright"></i> 2023 All rights reserved.</p> `; 

          document.body.appendChild(footerElement); 
}



     
             
