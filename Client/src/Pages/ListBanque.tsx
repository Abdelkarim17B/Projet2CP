import React, { useEffect,useRef, useState } from "react";
import banks from "../data/banks.json"
import {GoSearch} from "react-icons/go"

interface Bank {
    id: number;
    Nom: string;
    Choix: boolean;
    ServiceEnligne: boolean;
    Nationnalité: string;
    SiteWeb : string;
    TarifsCompte : number;  
}

const ListeBanque: React.FC= () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Bank[]>([]);
    const [filteredBanks, setFilteredBanks] = useState<Bank[]>(banks); 
    const [tarifCompteFilter, setTarifCompteFilter] = useState<number | undefined>(undefined);
    
    //USE STATE FOR CHOIX FILTER 
    const [choixFilter, setChoixFilter] = useState<boolean | null>(null);
    //USE STATE FOR TYPE FILTER 
    const [typeFilter, setTypeFilter] = useState<boolean | null>(null);
    //USE STATE FOR NATIOANALITY FILTER 
    const [NationalitéFilter , setNationalitéFilter] = useState<{    
        algerian: false,
        french: false,
        others: false } | null>(null);

    //Maj de la liste des banques en cas ou maj de la BD
    useEffect(() => {
        setFilteredBanks(banks);
    }, [banks]);

    //Maj de la listes des banques
    useEffect(() => { 
        const filtered = banks.filter( 
        (bank) =>
            bank.Nom.toLowerCase().includes(searchQuery.toLowerCase())&&(tarifCompteFilter === undefined || bank.TarifsCompte <= tarifCompteFilter)&&(choixFilter === null || bank.Choix === choixFilter)&&(typeFilter ==null || typeFilter == bank.ServiceEnligne)&&(NationalitéFilter == null || (bank.Nationnalité == "Algerian" && NationalitéFilter.algerian ) || (bank.Nationnalité == "French" && NationalitéFilter.french) || (bank.Nationnalité == "Other" && NationalitéFilter.others))
        );
        setFilteredBanks(filtered);
    }, [searchQuery,filteredBanks,tarifCompteFilter,choixFilter,typeFilter,NationalitéFilter]);

    //MAJ des suggestions
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchQuery(value);
        const matching = filteredBanks.filter(
        (bank) =>
            bank.Nom.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(matching.slice(0, 7)); // show only the top 7 matches
        if(value.length == 0){
          setSuggestions([])
        }
        event.target.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
              setSuggestions([]);
          }
      });
    };
    //Maj du contenue de la bar de recherche en cas ou Click suggestion
    const handleSuggestionClick = (suggestion: Bank) => {
        setSearchQuery(suggestion.Nom);
        setSuggestions([]);
    };
    // Handler for interest rate filter change
    const handleInterestRateFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setTarifCompteFilter(value);
    };

    //Handel Choix on click
    const handleChoixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setChoixFilter(value === "true" ? true : value === "false" ? false : null);
    };

    //TYPE FILTER 
    //Handel Type on click
    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTypeFilter(value === "true" ? true : value === "false" ? false : null);
    };

    //Nationalité FILTER
    //Handel Nationalité on click
    const handleNationalitéChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setNationalitéFilter(prevState => ({
        ...prevState,
        algerian: false,
        french: false,
        others: false,
        [value.toLowerCase()]: event.target.checked,
      }));
    };

    const resetFilters = () => {
      setSearchQuery("");
      setSuggestions([]);
      setFilteredBanks(banks);
      setTarifCompteFilter(undefined);
      setChoixFilter(null);
      setTypeFilter(null);
      setNationalitéFilter(null);
    };

  return (
    <React.Fragment>
      <div className="bg-Gray33">
        {/*The text*/}
        <div className="flex justify-center items-center w-[1200px] h-[170px] mx-auto mb-24">
          <p className="text-center text-[72px]">Choisissez la meilleur banque selon notre classement fiable</p>
        </div>
        <div className="flex items-start mb-48">
          <div className="pr-16 pl-6">
              <div className="flex intems-start mb-[56px]">
                <p className="text-[32px] text-gray-100 pr-16">Filtre</p>              
                {/*Reset Choises */}
                <button onClick={resetFilters} className="text-[20px]">Reset filters</button>
              {/* Champ Choix */}
              </div>
              <label className="text-[32px]">Choix:</label>
              <div className="pl-6 mt-5">
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="true" checked={choixFilter === true} onChange={handleChoixChange} />
                Islamique
                <br></br>
              </label>
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="false" checked={choixFilter === false} onChange={handleChoixChange}/>
                Non Islamique
              </label>
              </div>
              {/* Champ Type */}
              <br></br>
              <label className="text-[32px]">Type:</label>
              <div className="pl-6 mt-5">
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="true" checked={typeFilter === true} onChange={handleTypeChange} />
                True
              </label>
              <br></br>
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="false" checked={typeFilter === false} onChange={handleTypeChange}/>
                False
              </label>
              </div>
              {/* Champ Nationalité */}
              <br></br>
              <label className="text-[32px]">Nationalité :</label>
              <div className="pl-6 mt-5">
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="Algerian" checked={NationalitéFilter?.algerian} onChange={handleNationalitéChange} />
                Algérienne
                <br></br>
              </label>
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="French" checked={NationalitéFilter?.french} onChange={handleNationalitéChange}/>
                Française
                <br></br>
              </label>
              <label className="text-[20px]">
                <input className="peer relative appearance-none w-5 h-5 border rounded-sm bg-white focus:outline-none checked:bg-Red66 mr-2" type="checkbox" value="Others" checked={NationalitéFilter?.others} onChange={handleNationalitéChange}/>
                Autre
              </label>
              </div>
              <br></br>
              {/*Tarif Compte*/}
            
              <label className="text-[32px]">Tarifs de compte </label>
              <br></br>
              <input className="w-48"id="tarifsCompte-filter" type="range" min={750} max={2000} step={5} value={tarifCompteFilter ?? ""} onChange={handleInterestRateFilterChange}/>
              <h2>{tarifCompteFilter}</h2>
              <br></br>
          </div>

          <div className="">
            {/*Search Bar*/}
            <div className="mb-16">
              <div className="bg-white w-[488px] h-[52px] flex items-center ">
                <div className="pl-4">
                    <GoSearch size='30px' className="text-Gray33"/>
                </div>
                <div className="pl-8">
                    <input type="text" placeholder="Search" value={searchQuery} id="search" onChange={handleSearchChange} className="bg-gray-200 w-[300px] outline-none"></input>
                </div>
              </div>
              {suggestions.length > 0 && (
                <ul className="absolute bg-white rounded-lg shadow-md mt-1">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)} className="px-4 py-2 hover:bg-Gray33 cursor-pointer w-48">
                      {suggestion.Nom}
                    </li>
                  ))}
                </ul>
              )}
            </div>
              {/*The list*/}
              <div>
                {filteredBanks.length !== 0 ? (
                <table className="min-w-full w-[1234px] bg-white">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Nom
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Service Enligne
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Nationalité
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        SiteWeb
                      </th>
                      <th className="px-6 py-3 text-left text-[20px] font-medium text-gray-500 tracking-wider border-b-2 pt-8 pb-8 border-Gray33">
                        Tarif Compte
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredBanks.map((bank) => (
                      <tr key={bank.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[21px] font-medium text-gray-900">{bank.Nom}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[21px] text-gray-500">
                            {bank.Choix ? "Islamique" : "Non-Islamique"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[21px] text-gray-500">
                            {bank.ServiceEnligne ? "OUI" : "NON"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[21px] text-gray-500">{bank.Nationnalité}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[21px] text-gray-500">{bank.SiteWeb}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-[21px] text-gray-500">{bank.TarifsCompte}</div>
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
      </div>
    </React.Fragment>
  );
};

export default ListeBanque;

