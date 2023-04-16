import { NavLink } from 'react-router-dom';

const Layout = () => {
    const navItems = [
      {
        id: 0,
        name: "Home",
        link:'/'
      },
        {
          id: 1,
          name: "Analitics",
          link:'services'
        },
        {
          id: 2,
          name: "Logistica",
          link:'login'
    
        },
        {
          id: 3,
          name: "Ventas",
          link:'services'
    
        },
        {
          id: 4,
          name: "Usuarios",
          link:'services'
    
        },
        {
          id: 6,
          name: "Creditos",
          link:'services'
    
        },
        {
          id: 7,
          name: "Almacen",
          link:'services'
          
        },
        {
          id: 8,
          name: "Cuotas",
          link:'services'
    
        },
        {
          id: 9,
          name: "Deudas",
          link:'services'
    
        },
      ];
  return (
    <div >
    <aside className="bg-[#1E1F24]   w-72 h-screen p-8 mr-auto flex flex-col justify-between   rounded-br-3xl" >
    {/* <aside className="bg-[#1E1F24] fixed left-0  w-full h-10 p-8  first-letter: flex flex-col justify-between" > */}
      <div>
        <div className="mb-8">
          <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
            San Roman
          </h1>
        </div>
        <nav>
          {navItems.map((item) => (
            <ul key={item.id} >
              <li className="flex items-center gap-4 text-gray-400 py-2">
            
              <NavLink    to={item.link}>{item.name} </NavLink>
                
              </li>
            </ul>
          
          ))}
          {/* <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
             <span className="flex-1 flex items-center justify-between gap-4">
              Social Media

             </span>
          </a> */}
        </nav>
      </div>
    </aside>
    
  </div>
  )
}

export default Layout