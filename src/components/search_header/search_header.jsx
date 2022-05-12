import React, {Component, useRef} from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.home}>
        <button className={styles.menuButton}>
          <i className="fas fa-bars"></i>
        </button>
        <img className={styles.img} src="/images/youtube_logo.png" alt="logo" />
      </div>
      <div className={styles.searchBar}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search"
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} onClick={onClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button className={styles.login}>
        <i className="fa-solid fa-circle-user"></i>
        <span className={styles.login_name}>로그인</span>
      </button>
    </header>
  );
};

export default SearchHeader;
