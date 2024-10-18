import React from "react"

function Tasktwo (props)
{
    return(
        <div class="card text-center justify-content-center border-0  ">
            <img src={props.img} alt="img1" class="card-img-top" ></img>
            <div class="card-body ">

            
            <p class="card-title text-start " > <b >{props.name}</b> / {props.category}</p>
            <p class="size text-start">Size : {props.description}</p>
            <p class="price text-start ">Price :<del class="text-danger">1200 </del> {props.price}</p>  
            <p class="card-reviews text-warning text-start">
            <i class="fa-solid fa-star ">
            </i>
            <i class="fa-solid fa-star">
            </i>
            <i class="fa-solid fa-star">
            </i>
            <i class="fa-solid fa-star"></i>
            <span class= "totalreviews text-dark">({props.review} Reviews)</span></p>
                </div>
                <button type="button" class="btn bg-warning border-0 card-footer form-control ">ADD TO CARD</button>

        </div>

        
    )
}
export default(Tasktwo)