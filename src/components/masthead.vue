<template>
    <header class="masthead">
        <div class="container ">
            <div class="row h-100">
                <div class="col-lg-7 mx-auto my-auto">
                    <div class="header-content mx-auto">
                        <h1 class="mb-5">A program a day keeps liver away.</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<style>

header.masthead {
  position: relative;
  width: 100%;
  padding-top: 300px;
  padding-bottom: 100px;
  color: white;
  background-image: url("https://i.imgur.com/BbFBxqe.png");
  background-size: cover;
  background-position: center;
}

header.masthead .header-content {
  max-width: 500px;
  margin-bottom: 100px;
  text-align: center;
}

header.masthead .header-content h1 {
  font-size: 30px;
}

header.masthead .device-container {
  max-width: 325px;
  margin-right: auto;
  margin-left: auto;
}

header.masthead .device-container .screen img {
  border-radius: 3px;
}

@media (min-width: 992px) {
  header.masthead {
    min-height: 100vh;
    /* min-height: 775px; */
    /* padding-top: 300;
    padding-bottom: 100; */
  }
  header.masthead .header-content {
    margin-bottom: 0;
    text-align: left;
  }
  header.masthead .header-content h1 {
    font-size: 50px;
  }
  header.masthead .device-container {
    max-width: 325px;
  }
}

@media (max-width: 992px){
  header.masthead {
    padding-top: 120px;
    padding-bottom: 30px;
    color: white;
    background-image: url("https://i.imgur.com/BbFBxqe.png");
    background-size: cover;
  }
}

</style>