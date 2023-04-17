import React, { useEffect, useState } from "react";
import banks from "../data/banks.json"

interface Bank {
    id: number;
    Nom: string;
    Choix: boolean;
    ServiceEnligne: boolean;
    Nationnalité: string;
    SiteWeb : string;
    TarifsCompte : number;  
}

const SearcBarAndList: React.FC= () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Bank[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<Bank[]>(banks); 
  const [tarifCompteFilter, setTarifCompteFilter] = useState<number | undefined>(undefined);
  const [choixFilter, setChoixFilter] = useState<boolean | null>(null);

  //Maj de la liste des banques en cas ou maj de la BD
  useEffect(() => {
    setFilteredBanks(banks);
  }, [banks]);

  //Maj de la listes des banques
  useEffect(() => { 
    const filtered = banks.filter( 
      (bank) =>
        bank.Nom.toLowerCase().includes(searchQuery.toLowerCase())&&(tarifCompteFilter === undefined || bank.TarifsCompte >= tarifCompteFilter)&&(choixFilter === null || bank.Choix === choixFilter)
    );
    setFilteredBanks(filtered);
  }, [searchQuery,filteredBanks,tarifCompteFilter,choixFilter]);

  //MAJ des suggestions
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    const matching = filteredBanks.filter(
      (bank) =>
        bank.Nom.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matching.slice(0, 5)); // show only the top 5 matches
    if(value.length == 0){
      setSuggestions([])
    }
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
  
  const handleChoixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setChoixFilter(value === "true" ? true : value === "false" ? false : null);
  };

  return (
    <React.Fragment>
          <div className="flex items-center">
            <div>
            <div>
            <label>Choix:</label>
            <label>
              <input
                type="radio"
                value="true"
                checked={choixFilter === true}
                onChange={(e) => setChoixFilter(e.target.value === "true")}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                value="false"
                checked={choixFilter === false}
                onChange={(e) => setChoixFilter(e.target.value === "true")}
              />
              False
            </label>
          </div>
          <label htmlFor="filter">Tarifs de compte : </label>
          <input
            id="tarifsCompte-filter"
            type="range"
            min={750}
            max={2000}
            step={50}
            value={tarifCompteFilter ?? ""}
            onChange={handleInterestRateFilterChange}
          />
          <h2>{tarifCompteFilter}</h2>
        </div>
        <div>
        <label>Search:</label>
        <input id="search" type="text" value={searchQuery} onChange={handleSearchChange} />
        {suggestions.length > 0 && ( //si il contient des elements
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.Nom}
              </li>
            ))}
          </ul>
        )}
        <ul>
          {filteredBanks.length != 0 && ( filteredBanks.map((bank) => (
            <li key={bank.id}>
              <p>**-------------------**</p>
              <h1> {bank.Nom} {bank.Choix ? 'islamique' : 'non islamique'}  {bank.ServiceEnligne ? 'OUI' : 'NON'} {bank.Nationnalité} {bank.SiteWeb} {bank.TarifsCompte} </h1>
            </li>
          )))}
        </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearcBarAndList;