import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center
       px-3 max-w-6xl max-auto">
         <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" 
            className="h-5 cursor-pointer" />
           </div>
           <div>
              <ul className="flex space-x-10">
                <li>Home</li>
                <li>Offers</li>
                <li>Sign In</li>
              </ul>
             </div>               
      </header>
      </div>
  )
}
