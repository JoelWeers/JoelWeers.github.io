
function Navbar() {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-lightsticky-top">
                <a class="navbar-brand" href="#">Joels blog</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Contact Me!</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Coming Soon!</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="jumbotron jumbotron-fluid bg-secondary">
                <div class="container text-center">
                    <h1 class="display-4">Joel</h1>
                    <p class="lead">This is and example blog for Joel Weers!</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;