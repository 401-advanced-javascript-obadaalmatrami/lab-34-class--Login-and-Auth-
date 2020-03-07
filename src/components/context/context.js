import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 3,
      currentPageAdd: this.currentPageAdd,
      totalPageAdd: this.totalPageAdd
    };
  }

  currentPageAdd = () => {
    this.setState({ currentPage: (this.state.currentPage += 1) });
  };

  totalPageAdd = () => {
    this.setState({ totalPages: (this.state.totalPages += 1) });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
export default SettingsProvider;