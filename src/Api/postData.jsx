import axios from "axios";

const Api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
})

// get method for fetch data 
export const getdata = ()=>{
    return Api.get("/all?fields=name,population,region,capital,flags")
} 


//for individeual country details
export const getindividualdata=(name)=>{
        return Api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}