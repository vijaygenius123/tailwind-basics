import React from 'react';

import Header from './Components/Header'

function App() {
    return (
       <div className="text-gray-400">
           <div>
               <nav>
                   <div>
                       <h1 className="font-bold uppercase p-4">
                           <a href="">Tailwind</a>
                       </h1>
                   </div>
                   <ul>
                       <li className="text-gray-700 font-bold">
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

           <main className="px-16 py-6">
               <div>
                   <a href="">Log In</a>
                   <a href="">Sign up</a>
               </div>


               <header>
                   <h2 className="text-6xl text-gray-700 font-semibold">Recipes</h2>
                   <h3 className="text-2xl font-semibold">For Tailwind</h3>
               </header>

               <div>
                   <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

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
