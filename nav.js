document.write('<nav class="navbar navbar-expand-md navbar-dark">\
    <a href="index.html" class="navbar-brand">Chris Raymond-Bertrand</a>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">\
        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>\
    </button>\
    <div class="collapse navbar-collapse" id="navbarCollapse">\
        <ul class="navbar-nav ml-auto">\
            <li class="nav-item active">\
                <a href="index.html" class="nav-link">Home</a>\
            </li>\
			<li class="nav-item active">\
                <a href="directory.html" class="nav-link">Directory</a>\
            </li>\
            <li class="nav-item">\
                <a href="about.html" class="nav-link">About me</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="about.html">Contact</a>\
            </li>\
            <li class="nav-item dropdown">\
                <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                    Language\
                </a>\
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="languageDropdown">\
                    <a class="dropdown-item" href="#">\
                        <img src="icons/usa.png" alt="English" class="flag-icon">\
                        English\
                    </a>\
                    <a class="dropdown-item" href="#">\
                        <img src="icons/fra.png" alt="French" class="flag-icon">\
                        French\
                    </a>\
                </div>\
            </li>\
        </ul>\
    </div>\
</nav>\
');
