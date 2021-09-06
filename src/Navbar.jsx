import {Link} from "react-router-dom";

function Navbar() {

  // useEffect(()=>{

  //   let allBtns = document.querySelectorAll(".nav-link");
  
  //   console.log(allBtns.length);
  
  //   for(let i = 0 ; i < allBtns.length ; i++){
  //     allBtns[i].addEventListener("click",(e)=>{
  //     for(let j = 0 ; j < allBtns.length ; j++){
  //       allBtns[j].classList.remove("active")
  //     }  
  
  //     e.currentTarget.classList.add("active");
  //     })
  //   }
  // },[])

  let allNavItems = document.querySelectorAll(".nav-link");
  console.log(allNavItems);

  for(let i=0;i<allNavItems.length;i++) {

    allNavItems[i].addEventListener("click",  (e) => {
      
      console.log("clicked");
      for(let j=0;j<allNavItems.length;j++)
        allNavItems[j].classList.remove("active");

      e.currentTarget.classList.add("active");
    });
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Movies Rentals
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/customers">
                Customers
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/rentals">
                Rentals
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
