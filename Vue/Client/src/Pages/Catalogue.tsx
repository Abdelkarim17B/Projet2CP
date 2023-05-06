import { useEffect, useState, } from "react";
import { Link , useLoaderData } from "react-router-dom";
import {Bank} from "../Model/Bank"


function Catalogue(){
    const banks = useLoaderData() as Bank[];
    return(
        <div className="w-full flex flex-col justify-center items-center gap-[10vh] bg-[#F0EFF2] py-[20vh]">
        <h1 className="font-bold max-w-[82vw] lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">Choisissez la meilleur banque selon notre classement fiable</h1>
        <div>
              {/*The list*/}
              <div>
                {banks.length !== 0 ? (
                <table className="max-w-[82vw] bg-white">
                  <thead>
                    <tr>
                      <th className="lg:px-6 px-2 py-3 text-left lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[17%] font-medium text-gray-500 border-b-2 pt-8 pb-8 border-Gray33">
                        Nom
                      </th>
                      <th className="lg:px-6 px-2 py-3 text-left lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[17%] font-medium text-gray-500 border-b-2 pt-8 pb-8 border-Gray33">
                        adresse
                      </th>
                      <th className="lg:px-6  px-2 y-3 text-left lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[17%] font-medium text-gray-500 border-b-2 pt-8 pb-8 border-Gray33">
                        Téléphone
                      </th>
                      <th className="lg:px-6 px-2 py-3 text-left lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[17%] font-medium text-gray-500 border-b-2 pt-8 pb-8 border-Gray33">
                        Fax
                      </th>
                      <th className="lg:px-6 px-2 py-3 text-left lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[17%] font-medium text-gray-500 border-b-2 pt-8 pb-8 border-Gray33">
                        E-Mail
                      </th>
                      <th className="lg:px-6 px-2 py-3 text-left lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[17%] font-medium text-gray-500 border-b-2 pt-8 pb-8 border-Gray33">
                        Siteweb
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white max-w-[82vw]">
                    {banks.map(bank => (
                      <tr key={bank.id_banque}>
                        <td className="lg:px-6 px-2 py-8">
                        <Link to={bank.id_banque.toString()}>
                          <div className="text-[1rem] max-w-[18vw] max-h-[5vh] pr-4 font-medium text-gray-900 flex"> 
                              <img className="hidden md:block max-h-[5vh]" src={bank.logo}/>
                              <h3 className="md:hidden lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[13vw] whitespace-normal break-words font-medium text-gray-900">{bank.nom_banque}</h3>
                          </div>
                        </Link>
                        </td>
                        <td className="lg:px-6 px-2 py-4">
                          <h3 className="lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[13vw] whitespace-normal break-words font-medium text-gray-900">{bank.adresse}</h3>
                        </td>
                        <td className="lg:px-6  px-2 py-4 ">
                          <h3 className="lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[13vw] whitespace-normal break-words font-medium text-gray-900">{bank.num_tel}</h3>
                        </td>
                        <td className="lg:px-6 px-2 py-4">
                          <h3 className="lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[13vw] whitespace-normal break-words font-medium text-gray-900">{bank.num_fax}</h3>
                        </td>
                        <td className="lg:px-6 px-2 py-4">
                          <h3 className="lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[13vw] whitespace-normal break-words font-medium text-gray-900">{bank.adresse_mail}</h3>
                        </td>
                        <td className="lg:px-6 px-2 py-4">
                          <h3 className="lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] max-w-[13vw] whitespace-normal break-words font-medium text-gray-900">{bank.site_web}</h3>
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

