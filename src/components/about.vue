<template>
    <section class="about bg-primary text-center" id="about">
        <div class="container h-100">
            <!-- <div class="row">
                <div class="col-md-8 mx-auto">
                    <h2 class="section-heading">Discover what all the buzz is about!</h2>
                    <p>Our app is available on any mobile device! Download now to get started!</p>
                    <div class="badges">
                        <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""></a>
                        <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""></a>
                    </div>
                </div>
            </div> -->
            <div class="row h-100">
                <div class="col h-100">
                    <img src="https://i.imgur.com/6y3G6mx.jpg" height="150" width="150" id="profile_picture">
                    <h3>Yu-Chih Hung</h3>
                    <p class="BS">B.S. student at NTHU CS</p>
                </div>
                <div class="col-lg-8 h-100">
                    <h2>About</h2>
                    <hr class="light"><br>
                    <div class="row h-100">
                        <div class="col-8 mx-auto my-auto">
                            <p class="lead">Currently pursuing a B.S. degree in Computer Science at <a href="https://www.nthu.edu.tw/">National Tsing Hua University</a>. Enjoy programming, painting and playing games. Dream to sleep more.
                        </p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

#profile_picture {
    margin: 0 auto 30px;
    border-radius: 75px;
}

section.about {
  min-height: 100vh;
  color: #fff;
  position: relative;
  padding: 150px 0;
}

section.about h2 {
  font-size: 50px;
  margin-top: 0;
}

section.about .badges .badge-link {
  display: block;
  margin-bottom: 25px;
}

section.about .badges .badge-link:last-child {
  margin-bottom: 0;
}

section.about .badges .badge-link img {
  height: 60px;
}

@media (min-width: 768px) {
  section.about .badges .badge-link {
    display: inline-block;
    margin-bottom: 0;
  }
}

@media (min-width: 768px) {
  section.about h2 {
    font-size: 70px;
  }
}

</style>