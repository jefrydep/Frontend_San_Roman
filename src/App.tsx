import { Link ,NavLink} from "react-router-dom";

function App() {
  const navItems = [
    {
      id: 1,
      name: "Analitics",
      link:'services'
    },
    {
      id: 2,
      name: "Logistica",
      link:'services'

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
    <div className="bg-[#141517]">
      <aside className="bg-[#1E1F24] fixed left-0 top-0 w-72 h-full p-8 flex flex-col justify-between" >
        <div>
          <div className="mb-8">
            <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
              San Roman
            </h1>
          </div>
          <nav>
            {navItems.map((item) => (
              <ul>
                <li className="flex items-center gap-4 text-gray-400 py-2">
              
                <NavLink  to={item.link}>{item.name} </NavLink>
                  
                </li>
              </ul>
              // <a
                
              //   className="flex items-center gap-4 text-gray-400 py-2"
              // >
              // </a>
            ))}
            {/* <a href="#" className="flex items-center gap-4 text-gray-400 py-2">
               <span className="flex-1 flex items-center justify-between gap-4">
                Social Media

               </span>
            </a> */}
          </nav>
        </div>
      </aside>
      {/* content */}
      <main className="pl-80 " >
        <header className="p-8 flex justify-end">
          <ul className="flex items-center gap-4">
            <li>

            <a className="text-white" href="#"></a>
            </li>
            <li>
              <a href="#" className="flex text-white items-center gap-2">

                <img className="w-8 h-8 object-cover rounded-full ring-2 ring-gray-300" src="https://tse4.mm.bing.net/th?id=OIP.7OfP-ouvEjlPuSLM26F_wQHaFj&pid=Api&P=0" alt="" />
                
                Jefry Palomino</a>


            </li>
          </ul>

        </header>

      </main>
    </div>
  );
}

export default App;
