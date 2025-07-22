import React, { useEffect, useState, useTransition } from "react";
import { getdata } from "../Api/postData";
import { NavLink } from "react-router-dom";
import Search from "../components/Ui/Search";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getdata();
      // console.log(res.data );
      setCountry(res.data);
    });
  }, []);

  // console.log(search,filter);
  // this is for search a country
  const searchCountry = (oneCountry) => {
    if (search) {
      return oneCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase()); //in include part what user search will be display
    } else {
      return oneCountry;
    }
  };

  //this is for filter means selected country filter from the selection
  const filterselectedCountry = (oneCountry) => {
    if (filter === "all") return oneCountry;
    return oneCountry.region === filter;
  };

  //search functionalty
  const filterscountries = country.filter(
    (oneCountry) =>
      searchCountry(oneCountry) && filterselectedCountry(oneCountry)
  );

  if (isPending) return <h1>Loading...</h1>;
  return (
    <>
      <section className="country section">
        <Search
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          country={country}
          setCountry = {setCountry}
        />

        <ul className="grid grid-four-cols gap-x-10 px-5">
          {filterscountries.map((curcountry, index) => {
            //here fisrt i use country and then when i apply filter on the country and store it in a new variable the i used filtercountries
            const { flags, name, population, region, capital } = curcountry;
            return (
              <li key={index} className="country-card card">
                <div className="container-card bg-white-box">
                  <img className="h-48" src={flags.svg} alt={flags.alt} />

                  <div className="countryInfo">
                    <p className="card-title">
                      {name.common.length > 10
                        ? name.common.slice(0, 10) + "..."
                        : name.common}
                    </p>
                    <p>
                      <span className="card-description">Population:</span>
                      {population.toLocaleString()}
                    </p>
                    <p>
                      <span className="card-description">Region:</span>
                      {region}
                    </p>
                    <p>
                      <span className="card-description">Capital:</span>
                      {capital[0]}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                      <button>Read More</button>
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Country;
