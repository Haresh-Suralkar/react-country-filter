# React: Country Filter

**Application Demo:**  
![](https://hrcdn.net/s3_pub/istreet-assets/qilbsKltcR6vtc-6zMHAXw/f.gif)

The application has 2 components:

1. The Search view, which has the input box where the user can type to filter countries.

2. The CountryList view, which renders the list of countries that are filtered.


The entire list of countries to be displayed is stored in a variable named response inside the file `src/response.js`.


The app implements the following functionalities:

- The initial view renders an empty input box with all countries appearing in the same order as in the `response` variable.

- On typing a character, each country containing the set of typed characters is filtered and displayed.

- The filtering done over the country list is case insensitive.

- When there is no character typed in the search box, it shows all countries.


Note:

- Get the list of countries to be displayed from the `response.js` file.

- The order in which each country appears should follow the same order in the `response.js` file, even after filtering.



The following data-testid attributes are required in the component for the tests to pass:

- The countries filter field `<input>` tag should have the data-testid attribute `filterInput`.

- The countries wrapper `<ul>` tag should have the data-testid attribute `countryList`.


Please note that the component has the above data-testid attributes for test cases. It is advised not to change them.


## Environment 

- React Version: 16.13.1
- Default Port: 8000


**Read Only Files**
- `src/App.test.js`


**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

