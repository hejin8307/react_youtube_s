import React, {Component} from 'react';
import styles from './search_header.module.css';

class SearchHeader extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.home}>
          <button className={styles.menuBtn}>
            <i className="fas fa-bars"></i>
          </button>
          <img
            className={styles.img}
            src="/images/youtube_logo.png"
            alt="logo"
          />
        </div>
        <form className={styles.searchForm}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
          <button className={styles.searchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <button className={styles.login}>
          <i className="fa-solid fa-circle-user"></i>
          <span className={styles.login_name}>로그인</span>
        </button>
      </header>
    );
  }
}

export default SearchHeader;
