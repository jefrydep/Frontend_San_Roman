import Layout from "../comonents/layout/Layout";

const ServicePage = () => {
  return (
    <>
      <div className="flex-row   h-32 mt-3 mx-6 rounded-3xl bg-white ">
        <h2>Home</h2>
        <h3>homword</h3>
      </div>
      <div className=" flex flex-col  h-full mt-3 mx-6 rounded-3xl bg-white ">
         <table className="mx-10 my-10    ">

        <thead className="">
          <tr className=" border-x-2 mx-10 ">
            <th className="border-y-2  ">Nombre y apellido</th>
            <th className="border-2">Proyecto</th>
            <th className="border-2">Monto</th>
            <th className="border-2">Manzana</th>
            <th className="border-2">Precio</th>
          </tr>
        </thead>
        <tbody className="  ">
          <tr className=" ">
            <td  className="border-2">
              The d Mr. Bones (Next Stop, Pottersville)
            </td >
            <td className="border-2">Malcolm Lockyer</td>
            <td className="border-2">1961</td>
            <td className="border-2">Malcolm Lockyer</td>
            <td className="border-2">1961</td>
          </tr>
          <tr>
            <td className="border-2">Witchy Woman</td>
            <td className="border-2">The Eagles</td>
            <td className="border-2"> 
            <div className="bg-green-700 rounded-xl text-center text-white">activo</div>
            </td>
            <td className="border-2">The Eagles</td>
            <td className="border-2">1972</td>
          </tr>
          <tr>
            <td className="border-2">Shining Star</td>
            <td className="border-2">Earth, Wind, and Fire</td>
            <td className="border-2">1975</td>
            <td className="border-2">Earth, Wind, and Fire</td>
            <td className="border-2">1975</td>
          </tr>
        </tbody>
         </table>
      </div>
    </>
  );
};

export default ServicePage;
