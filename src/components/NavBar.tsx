const NavBar = () => {
  return (
    <nav className="flex justify-evenly py-10 items-center">
      <div>
        <h1 className="uppercase">marketim</h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About us</li>
          </a>
          <a href="#">
            <li>Download</li>
          </a>
          <a href="#">
            <li>Features</li>
          </a>
          <a href="#">
            <li>Pricing</li>
          </a>
        </ul>
      </div>
      <div className="space-x-4 items-center">
        <button>Log in</button>
        <button className="border-2 border-gray-400 rounded-md py-2 px-5">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
