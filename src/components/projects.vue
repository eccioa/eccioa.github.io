<template>
    <section class="features" id="projects">
        <div class="container h-100">
            <div class="section-heading text-center">
                <h2>Projects</h2>
                
                <hr>
            </div>
            <div class="row">
                <div class="col my-auto">
                    <div class="container-fluid">

                        <div class="card-columns">
                            <div class="card" style="opacity: 1; transform: scale(1);" v-for="project in allProjects" :key="project.title">
                                <div class="inner">
                                  <component :is="project.tag" :type="project.type" class="card-img-top" :src="project.image" alt="load image failed" loop="" muted="" autoplay="" oncanplay="this.muted=true"></component>
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title">{{project.title}}</h3>
                                    <p class="card-text" v-html="project.description"></p>
                                    <a :href="project.link" class="btn btn-secondary"><i class="fas fa-globe-asia"></i></a>
            
                                    <p class="card-text"><small class="text-muted">{{project.date}}</small></p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
        
      
    </section>
</template>


<script>
export default {
  data() {
    return {
      allProjects: [
        {
          title: "Lost In City",
          tag: "img",
          type: "",
          image: "https://img.itch.zone/aW1nLzQwMjAwMjcucG5n/315x250%23c/ZmGZ5z.png",
          description: "In Lost In City, you use the power of rewinding time to adventure in a post-apocalypse world.",
          link: "https://eccioa.itch.io/lostincity",
          date: "August, 2020"
        },
        {
          title: "Varda",
          tag: "img",
          type: "",
          image: "https://img.itch.zone/aW1nLzM4NzIwMzgucG5n/original/sPlllL.png",
          description: "In Varda, your character attacks automatically with rhythm. Player can only control movement of the character.",
          link: "https://eccioa.itch.io/varda",
          date: "July, 2020"
        },
        {
          title: "The Pearl Game",
          tag: "img",
          type: "",
          image: "https://i.imgur.com/RhVAb4t.png",
          description: "A 2D mobile game for android only. Touch the screen to control the ladle to throw pearls on everything.",
          link: "https://play.google.com/store/apps/details?id=com.eccioa.ThePearlGame",
          date: "March, 2020"
        },
        {
          title: "More Than A Penguin",
          tag: "img",
          type: "",
          image: "https://i.imgur.com/LWh090R.gif",
          description: "A party game built with Unity, in which players can store power and dash to hit other penguins into the water. Won <strong>Best Game Design Award</strong> and <strong>Best Popularity Award</strong> in the 4th Innovation Game Design Contest.",
          link: "https://youtu.be/0UWYn7_W73g",
          date: "January, 2019"
        },
        {
          title: "Maple Story Web Game",
          tag: "img",
          type: "",
          image: "https://i.imgur.com/phHtqhm.gif",
          description: "An RPG game built with phaser and firebase. I'm responsible for the art design and the combat system, which fuses special attacks from fighting games (perform different attacks with combination of button presses).",
          link: "https://ss-final-666.firebaseapp.com/",
          date: "June, 2018"
        },
        {
          title: "NS-SHAFT Web Game",
          tag: "img",
          type: "",
          image: "https://i.imgur.com/QwE9EhZ.gif",
          description: "A web version NS-SHAFT. It's like a reproduce of the PC version.",
          link: "http://eccioa.gitlab.io/Assignment_02",
          date: "May, 2018"
        },
        {
          title: "Web Canvas",
          tag: "img",
          type: "",
          image: "https://i.imgur.com/Fw8kEGL.gif",
          description: "A web painter with basic painting tools and a setting sidebar to customize the stroke. One can also paint on an uploaded image and download it after the work is done.",
          link: "https://eccioa.gitlab.io/AS_01_WebCanvas/",
          date: "March, 2018"
        },
      ]
    }
  }
}
</script>


<style>

section.features .section-heading {
  margin-bottom: 100px;
}

section.features .section-heading h2 {
  margin-top: 0;
}

section.features .section-heading p {
  margin-bottom: 0;
}

section.features .device-container,
section.features .feature-item {
  max-width: 325px;
  margin: 0 auto;
}

section.features .device-container {
  margin-bottom: 100px;
}

@media (min-width: 992px) {
  section.features .device-container {
    margin-bottom: 0;
  }
}

section.features .feature-item {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}

section.features .feature-item h3 {
  font-size: 30px;
}

section.features .feature-item i {
  font-size: 80px;
  display: block;
  margin-bottom: 15px;
  background: -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));
  background: linear-gradient(to left, #7b4397, #dc2430);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card {
  text-align: left;
  border: 0;
  box-shadow: 0 5px 6px 0 rgba(0,0,0,.15);
  transform-origin: top center;
}

</style>