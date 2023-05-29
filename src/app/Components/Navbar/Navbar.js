import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.navDiv1}>
        <span className={Styles.logo}>EDYODA</span> <br />
        <span className={Styles.logoText}>
          <i>Stories</i>
        </span>
      </div>

      <div className={Styles.navDiv2}>
        <div>
          <div className={Styles.explore}>
            <span className={Styles.dropdownText}>Explore categories</span>
            <img
              className={Styles.dropdownIcon}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
              alt="dropdown icon"
            />
          </div>
        </div>

        <div className={Styles.subNav}>
          <div className={Styles.navPara}>
            <p>
              EdYoda is a learning and knowledge <br /> sharing platform for
              techies
            </p>
          </div>

          <div className={Styles.navBtn}>
            <button>Go To Main Website</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
