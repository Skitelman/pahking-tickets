import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { licensePlate: '' }
  }

  render () {
    return (
      <div className="search-bar-instructions">
        <h2>
          Search for tickets by License Plate
        </h2>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter License Plate"
              onKeyPress={(event) => this.onInputEnter(event)} />
          </div>
      </div>
    );
  }

  sanitizeInput(input) {
    return input.replace(/\W+/gi, "").toUpperCase();
  }

  onInputEnter(event) {
    if (event.key === 'Enter' ) {
      this.props.resetSelectedTicket();
      const plate = this.sanitizeInput(event.target.value);
      this.setState({licensePlate: plate});
      this.props.onSearchEnter(plate);
    };
  }
};

export default SearchBar;
