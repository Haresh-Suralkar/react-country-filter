import React from 'react';

function CountryList(props) {
  return (
    <section>
        <ul className="card country-list" data-testid="countryList">{
          props.countries.filter((v) => {
            if (props.searchTerm == "") {
              return v
            } else if (v.toLowerCase().includes(props.searchTerm.toLowerCase())) {
              return v
            }
          }).map((v, k) => {
            return <li key={k} className="pa-10 pl-20">{v}</li>
          })
        }</ul>
    </section>
  );
}

export default CountryList;
