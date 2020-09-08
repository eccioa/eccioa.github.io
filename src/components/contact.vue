<template>
    <section class="contact bg-primary" id="contact">
        <div class="container">
            <ul class="list-inline list-social">
                <li class="list-inline-item social-twitter">
                    <a href="#" onclick="copy('eccioa@gmail.com')">
                        <i class="far fa-envelope"></i>
                    </a>
                </li>
                <li class="list-inline-item social-facebook">
                    <a href="https://www.facebook.com/profile.php?id=100001037221656">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>


<style>

section.contact {
  text-align: center;
}

section.contact h2 {
  margin-top: 0;
  margin-bottom: 25px;
}

section.contact h2 i {
  color: #dd4b39;
}

section.contact ul.list-social {
  margin-bottom: 0;
}

section.contact ul.list-social li a {
  font-size: 40px;
  line-height: 80px;
  display: block;
  width: 80px;
  height: 80px;
  color: white;
  border-radius: 100%;
}

section.contact ul.list-social li.social-twitter a {
  background-color: #1da1f2;
}

section.contact ul.list-social li.social-twitter a:hover {
  background-color: #0d95e8;
}

section.contact ul.list-social li.social-facebook a {
  background-color: #3b5998;
}

section.contact ul.list-social li.social-facebook a:hover {
  background-color: #344e86;
}

section.contact ul.list-social li.social-google-plus a {
  background-color: #dd4b39;
}

section.contact ul.list-social li.social-google-plus a:hover {
  background-color: #d73925;
}

</style>