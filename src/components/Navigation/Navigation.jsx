import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>

      <ul className="">
        <li><button>Home</button></li>
        <li><button>About</button></li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;