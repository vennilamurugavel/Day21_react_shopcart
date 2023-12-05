import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
function App() {
  let [cart,setCart]=useState(0)
 let product=[
  {
    name:"Ring",
    price:2
  },
  {
    name:"Stud",
    price:5
  },
  {
    name:"Bangle",
    price:6
  },
  {
    name:"Payal",
    price:9
  }
 ]
 return <>
  <Navbar cart={cart} setCart={setCart}/>
  <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
<section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {
        product.map((e,i)=>{
        return <Card cart={cart} setCart={setCart} product={e} key={i}/>

        })
      }

                </div>
                </div>
                </section>
       </>
  
}

export default App