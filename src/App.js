// // .................................. https://themes.muffingroup.com/be/leasing2/  .................................................//


import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";

 import React, { useEffect } from 'react';
import Header from "./Beleasing/Header";
import Footer from "./Beleasing/Footer";
import Home from "./Beleasing/Home";
import About from "./Beleasing/About";
import Contact from "./Beleasing/Contact";
import Sedan from "./Beleasing/Sedan";
import Hatchback from "./Beleasing/Hatchback";
import Combi from "./Beleasing/Combi";
import Suv from "./Beleasing/Suv";
import Allcars from "./Beleasing/Allcars";
import Bmw from "./Beleasing/Cars/Bmw";
import Ford from "./Beleasing/Cars/Ford";
import './App.css'
import Lamborghini from "./Beleasing/Cars/Lamborghini";
import Mconubia from "./Beleasing/Cars/Mconubia";
import Bmwproin from "./Beleasing/Cars/Bmwproin";
import Audi from "./Beleasing/Cars/Audi";
import Metiam from "./Beleasing/Cars/Metiam";
import Bmwcubilia from "./Beleasing/Cars/Bmwcubilia";
import Mattis from "./Beleasing/Cars/Mattis";


 function App(){

  useEffect(() => {
    document.title = 'Luxury Cars ';
  }, []);

   return(
     <>
       <Router>
         <Header />
           <Switch>
             <Route exact path="/"> 
               <Home  />
             </Route>
             <Route  path="/about" > 
               <About/>
             </Route>
             <Route  path="/contact" > 
               <Contact/>
             </Route>
             <Route  path="/sedan" > 
               <Sedan/>
             </Route>
             <Route  path="/hatchback" > 
               <Hatchback />
             </Route>
             <Route  path="/combi"> 
               <Combi />
             </Route>
             <Route  path="/suv"> 
               <Suv />
             </Route>  
             <Route  path="/all-cars"> 
               <Allcars />
             </Route>
             <Route  path="/bmw-commodo-ipsum"> 
               <Bmw />
             </Route>
             <Route  path="/ford-enim-nibh-litora"> 
               <Ford />
             </Route>
             <Route  path="/lamborghini-rutrum-libero"> 
               <Lamborghini />
             </Route>
             <Route  path="/mercedes-conubia-blandit-sem-neque"> 
               <Mconubia />
             </Route>
             <Route  path="/bmw-proin-commodo-interdum"> 
               <Bmwproin />
             </Route>
             <Route  path="/mercedes-mattis-arcu-maximus"> 
               <Mattis />
             </Route>
             <Route  path="/audi-litora-nec-amet" > 
               <Audi />
             </Route>
             <Route  path="/mercedes-etiam-quam" > 
               <Metiam />
             </Route>
             <Route  path="/bmw-cubilia" > 
               <Bmwcubilia />
             </Route>
           </Switch> 
         <Footer />
       </Router>
     </>
    )
  }
export default App;


