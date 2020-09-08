<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ navbar_shrink: navbar_shrink }" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top" v-smooth-scroll>eccioa</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about" v-smooth-scroll>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#projects" v-smooth-scroll>Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#contact" v-smooth-scroll>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            navbar_shrink: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                this.navbar_shrink = true;
            }else{
                this.navbar_shrink = false;
            }
        });
    },
}
</script>


<style>
#mainNav {
  border-color: rgba(34, 34, 34, 0);
  background-color: transparent;
  -webkit-transition: all .35s;
  transition: all .35s;
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px;
}

#mainNav .navbar-brand {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px;
  margin-left: 10px;
}

#mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {
  color: #97b5da;
}

#mainNav .navbar-toggler {
  margin: 5px;
  font-size: 20px;
  padding: 8px 10px;
  color: rgba(255, 255, 255, 0.7);
  border-color: rgba(255, 255, 255, 0.7);
}

#mainNav .navbar-nav > li > a {
  font-size: 11px;
  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
  letter-spacing: 2px;
  text-transform: uppercase;
}

#mainNav .navbar-nav > li > a.active {
  color: #fff !important;
  background-color: transparent;
}

#mainNav .navbar-nav > li > a.active:hover {
  background-color: transparent;
}

#mainNav .navbar-nav > li > a,
#mainNav .navbar-nav > li > a:focus {
  color: rgba(255, 255, 255, 0.7);;
}

#mainNav .navbar-nav > li > a:hover,
#mainNav .navbar-nav > li > a:focus:hover {
  color: #97b5da;
}


#mainNav.navbar_shrink {
  border-color: rgba(34, 34, 34, 0.1);
  background-color: #4b6cac;
}

@media (min-width: 992px) {
  #mainNav {
    border-color: transparent;
    background-color: transparent;
  }
  #mainNav .navbar-brand {
    color: fade(white, 70%);
  }
  #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {
    color: white;
  }
  #mainNav .navbar-nav > li > a,
  #mainNav .navbar-nav > li > a:focus {
    color: rgba(255, 255, 255, 0.7);
  }
  #mainNav .navbar-nav > li > a:hover,
  #mainNav .navbar-nav > li > a:focus:hover {
    color: white;
  }
  #mainNav.navbar_shrink {
    border-color: rgba(34, 34, 34, 0.1);
    background-color: #4b6cac;
  }
  #mainNav.navbar_shrink .navbar-brand {
    color: fade(white, 70%);
  }
  #mainNav.navbar_shrink .navbar-brand:hover, #mainNav.navbar_shrink .navbar-brand:focus {
    color: #fff;
  }
  #mainNav.navbar_shrink .navbar-nav > li > a,
  #mainNav.navbar_shrink .navbar-nav > li > a:focus {
    color: fade(white, 70%);
  }
  #mainNav.navbar_shrink .navbar-nav > li > a:hover,
  #mainNav.navbar_shrink .navbar-nav > li > a:focus:hover {
    color: #fff;
  }
}
</style>