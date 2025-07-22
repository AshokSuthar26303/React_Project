import React from 'react'

const Search = ({search , setSearch , filter ,setFilter,country,setCountry}) => {
 
    const handleinputchange = (e)=>{
        e.preventDefault();
        setSearch(e.target.value)
    }

const handlefilterchange=(e)=>{
    e.preventDefault();
    setFilter(e.target.value);
}


const sortcountry = (value) =>{
    const  sorting = [ ...country].sort((a,b)=>{
        return value === "asc" 
        ? a.name.commom.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.commom);
    })
    setCountry(sorting);
}
 
    return (
    <>
        <section className="section-searchFilter container">
            <input type="text" placeholder='Search here' value={search} onChange={handleinputchange} />


            <div>
                <button onClick={()=>sortcountry("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={()=>sortcountry("desc")}>Dec</button>
            </div>

            <div>
                <select value={filter} onChange={handlefilterchange} className="select-section">
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Ameracas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    </>
  )
}

export default Search