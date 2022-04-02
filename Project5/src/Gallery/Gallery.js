import'./Gallery.css';

function Gallery() {
    return(
        <div class="container">
            <section class="row m-5">
                <article class="col-sm-6">
                    <h4 class="text-center">July 3rd, 2021</h4>
                    <div class="filler bg-secondary" />
                </article>
                <article class="col-sm-6">
                    <h4 class="text-center"> October 31st, 2021</h4>
                    <div class="filler bg-secondary" />
                </article>
            </section>
            <section class="row m-5">
                <article class="col-sm-6">
                    <h4 class="text-center">December 25th, 2021</h4>
                    <div class="filler bg-secondary" />
                </article>
                <article class="col-sm-6">
                    <h4 class="text-center">January 1st, 2021</h4>
                    <div class="filler bg-secondary" />
                </article>
            </section>
        </div>
    );
}

export default Gallery;