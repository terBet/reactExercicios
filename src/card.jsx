import React from "react";
import './card.css'

function Card(){
    return(
        <div>
            {/* card */}
          <div class="card">
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
            </div>
              <a href="#" class="btn btn-primary w-100">GO SOMEWHERE</a>
          </div>
        </div>
    )
}

export default Card