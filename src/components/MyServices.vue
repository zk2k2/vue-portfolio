<template>
  <div class="main-container flex-col justify-center h-screen" id="services">
    <div class="h-24"></div>
    <div class="h-fit">
      <div class="flex justify-center">
        <h1 class="font-bold text-2xl my-2 text-secondary m-2">Services</h1>
      </div>

      <div class="flex justify-center text-lg my-8 w-100 h-100 p-6">
        <p>
          Always eager to learn, I’m constantly expanding my skills. I have previously worked with
          the following technologies in web development:
        </p>
      </div>
      <div class="logos-container w-100 h-100 my-14">
        <div class="flex justify-around m-5">
          <div class="logo-item">
            <img
              src="../../public/images/html-logo.png"
              alt=""
              class="shimmer-effect logo-item h-14"
            />
            <p class="text-center my-2">HTML5</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/css-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">CSS3</p>
          </div>

          <div class="logo-item">
            <img
              src="../../public/images/js-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">JavaScript</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/java-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Java</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/php-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">PHP</p>
          </div>

          <div class="logo-item">
            <img
              src="../../public/images/python-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Python</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/ts-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">TypeScript</p>
          </div>

          <div class="logo-item">
            <img
              src="../../public/images/angular-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Angular</p>
          </div>
        </div>
        <div class="flex justify-around m-7">
          <div class="logo-item">
            <img
              src="../../public/images/react-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">React</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/spring-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Spring</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/postgresql-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">PostgreSQL</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/mysql-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">MySQL</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/bootstrap-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Bootstrap</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/tailwind-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Tailwind</p>
          </div>
        </div>
        <div class="flex justify-center text-lg my-8 w-100 h-100">
          <p class="text-center">
            I have also worked with the following technologies in web and graphic design:
          </p>
        </div>
        <div class="flex justify-around m-7">
          <div class="logo-item flex-col justify-center">
            <div class="flex justify-center">
              <img
                src="../../public/images/ps-logo.png"
                alt=""
                class="h-14 shimmer-effect logo-item"
              />
            </div>
            <p class="text-center my-2">Adobe Photoshop</p>
          </div>
          <div class="logo-item">
            <img
              src="../../public/images/figma-logo.png"
              alt=""
              class="h-14 shimmer-effect logo-item"
            />
            <p class="text-center my-2">Figma</p>
          </div>

          <div class="logo-item flex-col justify-center">
            <div class="flex justify-center">
              <img
                src="../../public/images/adobe-animate-logo.png"
                alt=""
                class="h-14 shimmer-effect logo-item"
              />
            </div>
            <p class="text-center my-2">Adobe Animate</p>
          </div>
          <div class="logo-item">
            <div class="logo-item flex-col justify-center">
              <div class="flex justify-center">
                <img
                  src="../../public/images/ai-logo.png"
                  alt=""
                  class="h-14 shimmer-effect logo-item"
                />
              </div>
              <p class="text-center my-2">Adobe Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#services h1 {
  position: relative;
  top: 0;
}
.shimmer-effect {
  color: grey;
  display: inline-block;
  background-repeat: no-repeat;
}

.shimmer-effect:hover {
  -webkit-mask: linear-gradient(120deg, #000 25%, #0005, #000 75%) right/250% 100%;
  animation: shimmer 1s forwards;
}

@keyframes shimmer {
  100% {
    -webkit-mask-position: left;
  }
}

@keyframes jump-in {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
/* 
.logo-item {
  animation: jump-in 0.5s ease-in-out forwards;
  animation-delay: 0.5s;
} */
</style>
