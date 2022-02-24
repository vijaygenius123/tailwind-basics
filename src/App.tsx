import React from 'react';

import Header from './Components/Header'

function App() {
    return (
       <div>
           <div>
               <nav>
                   <div>
                       <h1>
                           <a href="">Tailwind</a>
                       </h1>
                   </div>
                   <ul>
                       <li>
                           <a href="">Home</a>
                       </li>
                       <li>
                           <a href="">About</a>
                       </li>
                       <li>
                           <a href="">Contact</a>
                       </li>
                   </ul>
               </nav>
           </div>

           <main>
               <div>
                   <a href="">Log In</a>
                   <a href="">Sign up</a>
               </div>


               <header>
                   <h2>Recipes</h2>
                   <h3>For Tailwind</h3>
               </header>

               <div>
                   <h4>Latest Recipes</h4>

                   <div>
                       <div>
                           <img src="" alt=""/>
                           <div>
                               <span>Simple Web Site</span>
                               <span>By Tailwind</span>
                           </div>
                       </div>
                   </div>
               </div>

           </main>
       </div>
    );
}

export default App;
