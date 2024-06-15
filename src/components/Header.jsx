import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  //console.log(location.pathname);
  function pathMathRoute(route) {
    if(route === location.pathname) {
        return true;
    }
}
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center
       px-3 max-w-6xl max-auto">
         <div>
            <img src="/favicon1.ico" alt="logo" 
            className="h-16 cursor-pointer" />
           </div>
           <div>
              <ul className="flex space-x-10 cursor-pointer">
                <li className={`py-3 text-sm font-semibold text-yellow-400 border-b-[3px] border-transparent ${pathMathRoute("/") && "text-yellow-800 border-b-green-500"}`}>Home</li>
                <li className={`py-3 text-sm font-semibold text-yellow-400 border-b-[3px] border-transparent ${pathMathRoute("/offers") && "text-yellow-800 border-b-green-500"}`}>Offers</li>
                <li className={`py-3 text-sm font-semibold text-yellow-400 border-b-[3px] border-transparent ${pathMathRoute("/sign-in") && "text-yellow-800 border-b-green-500"}`}>Sign In</li>
              </ul>
             </div>               
      </header>
      </div>
  )
}
