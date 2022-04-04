import React, { useState, useEffect } from "react";
import Select from 'react-select'

import fetchAPIData from "../../api/api";
import Card from "../Card/Card";
import styles from './Home.module.css'

const Home = () => {
  let [fetchedData, setFetchedData] = useState([])
  let [search, setSearch] = useState("")
  let [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchAPIData(search)
      .then(data => {
          let characterArray = data.data.results.map((item) => {
            return({
              value: item.name, 
              label: item.name,
              description: item.description,
              thumbnail: item.thumbnail,
            })
          })
          setFetchedData(characterArray)
      })
      .catch((err) => {console.log(err.message)})
  }, [search])
  

  
  return (
    <div className={styles.app}>
      <div className={styles.appSearch}>
        <Select
          value={null}
          onChange={setSelectedOption}
          onInputChange={(e) => {
            setSearch(e);
        }}
          options={fetchedData}
          placeholder="Search and select ..."
        />
      </div>
        <div className={styles.appCard}>
            {selectedOption &&<Card page="/" results={selectedOption} />}
        </div>
    </div>

  );
}

export default Home;
