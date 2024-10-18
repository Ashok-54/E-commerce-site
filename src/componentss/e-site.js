import React,{useState} from "react";
import Tasktwo from "./site";
import Products from './products.json'

function Cards()
{

const[search,setsearch] = useState('')
const[data,setdata] = useState(Products)
const filterresult=(catitem)=>{
    const result =Products.filter((curdata)=>{
        return curdata.category===catitem
    })
    setdata(result)
}
    return(
    <>
    <div class="container  ">
        <div class ="row p-3 justify-content-between">
            <div class="col-md-3 mt-3">
    <input class="form-control " onChange={(a) => setsearch (a.target.value)} type="text" placeholder="Search here..." >
 </input>
 </div>
 <div class=" col-md-3 text-end mt-3 mt sm-0">
<button className="btn btn-primary dropdown-toggle " data-bs-toggle="dropdown" type="button" >Category</button>
    <div className="dropdown-menu">

 <button class="btn btn-primary dropdown-item"onClick={()=> setdata(Products) } ><i class="fa-sharp fa-solid fa-cart-shopping"></i> &nbsp;ALL</button>
 <div className="dropdown-divider"></div>
 <button class="btn btn-warning dropdown-item"onClick={()=> filterresult('T-Shirts') }><i class="fa-solid fa-shirt "></i> &nbsp;T-Shirts</button>
 <button class="btn btn-warning dropdown-item"onClick={()=> filterresult('Trousers') }>Trousers</button>
 <button class="btn btn-warning dropdown-item"onClick={()=> filterresult('Watches') }><i class="fa-solid fa-watch"></i> &nbsp;Watches</button>
 <button class="btn btn-warning dropdown-item"onClick={()=> filterresult('Footwear') }><i class="fa-solid fa-boot-heeled">&nbsp;</i>Footwear</button>
 <button class="btn btn-warning dropdown-item"onClick={()=> filterresult('Shirts') }><i class="fa-solid fa-shirt-long-sleeve">&nbsp;</i>Shirts</button>
 </div>
</div>
</div>
</div>
    <div class="container">
        <div class="row">
            {
                data.filter((product)=>{
                    return search === '' ? product : product.name.toLowerCase().includes(search)
                }).map (product =>
                {
                    return(
                        <div class="col-md-3 p-3 " >
                            <Tasktwo
                            img={product.img}
                            price = {product.price}
                            
                            category={product.category}
                            name={product.name}
                            description={product.description}
                            review={product.review}
                            />
                        </div>
                    )
                }

                )
            }
        </div>
    </div>
    </>
    )
    
}
export default(Cards)