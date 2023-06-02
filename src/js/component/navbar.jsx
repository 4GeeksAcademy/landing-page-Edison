import React from "react";

let Navbar = (props) =>{

    const navItems = props.items.map(item => (
        <li class="nav-item">
          <a class="nav-link" href={item.url}>
            {item.label}
          </a>
        </li>
      ));

    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{props.logo}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">{navItems}</ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;