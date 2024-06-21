import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location.pathname);
  function pathMathRoute(route) {
    if(route === location.pathname) {
        return true;
    }
}
  
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center
       px-3 max-w-6xl max-auto">
         <div className="flex items-center gap-2 font-semibold text-2xl cursor-pointer text-gray-700">
            <img src="/favicon1.ico" alt="logo" 
            className="h-12 cursor-pointer" onClick={() => navigate("/")}/>
             <h2>Edi_CeM24</h2>
           </div>
           <div>
              <ul className="flex space-x-10 cursor-pointer">
                <li className={`py-3 text-sm font-semibold text-yellow-400 border-b-[3px] border-transparent ${pathMathRoute("/") && "text-yellow-800 border-b-green-500"}`} onClick={() => navigate("/")}>Home</li>
                <li className={`py-3 text-sm font-semibold text-yellow-400 border-b-[3px] border-transparent ${pathMathRoute("/offers") && "text-yellow-800 border-b-green-500"}`} onClick={() => navigate("/offers")}>Offers</li>
                <li className={`py-3 text-sm font-semibold text-yellow-400 border-b-[3px] border-transparent ${pathMathRoute("/sign-in") && "text-yellow-800 border-b-green-500"}`} onClick={() => navigate("/sign-in")}>Sign In</li>
              </ul>
             </div>               
      </header>
      </div>
  )
}
