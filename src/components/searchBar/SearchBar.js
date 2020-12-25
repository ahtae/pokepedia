import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Styles.scss';

const SearchBar = ({
  handleSearchClick,
  hasClickedSearch,
  search,
  handleSearchChange,
  possibleWords,
  handlePossibleWordClick,
}) => {
  return (
    <div className="searchBarContainer">
      <div className="searchBarContainer__searchBar">
        <InputBase
          placeholder="Search"
          className="searchBarContainer__searchBar__searchInput"
          onChange={handleSearchChange}
          value={search}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className="searchBarContainer__searchBar__button">
          <button
            className="searchBarContainer__searchBar__button--removeUnderline"
            disabled={!search}
          >
            <SearchIcon onClick={handleSearchClick} />
          </button>
        </div>
        <div className="searchBarContainer__autocompleteContainer">
          {!hasClickedSearch &&
            possibleWords &&
            possibleWords.map((possibleWord) => (
              <div
                key={possibleWord}
                onClick={() => {
                  handlePossibleWordClick(possibleWord);
                }}
                className="searchBarContainer__autocompleteContainer__word"
              >
                {possibleWord}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
