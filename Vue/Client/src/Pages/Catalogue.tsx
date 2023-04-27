import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import {Bank} from "../Model/Bank"


function Catalogue(){
    const [banks, setBank] = useState<Bank[]>([]);
    useEffect(() => {
      const banksFetch = async () => {
        const data = await (
          await fetch("http://localhost:3000/catalogue/")
        ).json();
        setBank(() => data);
      };
      banksFetch();
    }, []);
    

    return(
        <div className="w-full flex flex-col justify-center items-center gap-[10vh] bg-[#F0EFF2] py-[20vh]">
        <h1 className="max-w-[83vw] font-bold text-BlueDark text-[4.5rem] text-center">Choisissez la meilleur banque selon notre classement fiable</h1>
        <div>
              {/*The list*/}
              <div>
                {banks.length !== 0 ? (
                <table className="w-[82vw] bg-white">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Nom
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        adresse
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Téléphone
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Fax
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        E-Mail
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Siteweb
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white max-w-[91vw]">
                    {banks.map(bank => (
                      <tr key={bank.id_banque}>
                        <td className="px-6 py-4 ">
                          <div className="text-[1rem] w-[5vw] font-medium text-gray-900 flex ">
                            <Link to={bank.id_banque.toString()}>
                              <img src={bank.logo} alt="" />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">{bank.adresse}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{bank.num_tel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{bank.num_fax}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{bank.adresse_mail}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900 o">{bank.site_web}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500 text-[48px]">No banks found.</p>
              )}
            </div>
          </div>
        </div>
    )

};

export default Catalogue;
