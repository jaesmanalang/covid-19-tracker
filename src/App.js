import React, { Component } from 'react';
import CountryList from './components/country-list/CountryList';
import { ReactComponent as Loader } from './loader.svg';
import Search from './components/search/Search';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      countries: [],
      stats: [],
      searchField: '',
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await fetch('https://api.covid19api.com/countries');
      const countries = await res.json();
      this.setState({ countries });
      this.state.countries.forEach(async country => {
        try {
          const response = await fetch(
            `https://api.covid19api.com/total/country/${country.Slug}`,
          );
          const data = await response.json();
          if (data.length) {
            this.setState(prevState => ({
              stats: prevState.stats.concat({
                ...data[data.length - 1],
                CountryCode: country.ISO2,
              }),
            }));
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loading: false });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { stats, searchField } = this.state;
    const filteredCountries = stats.filter(country =>
      country.Country.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="container">
        <h1 className="app-title">Covid-19 Cases World Wide</h1>
        <Search
          placeholder="Search country..."
          handleChange={this.handleChange}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <CountryList stats={filteredCountries} />
        )}
      </div>
    );
  }
}

export default App;
