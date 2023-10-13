<template>
  <div class="main-container flex-col h-screen" id="about">
    <div class="flex page-wrapper">
      <div class="container overflow-hidden ml-8">
        <h1 class="font-bold text-3xl text-black my-3">
          Hey, let's build

          <span class="font-bold text-3xl text-primary" style="position: relative; z-index: 1"
            >your idea.
          </span>
          <div class="wrapper inline-block">
            <svg viewBox="0 0 106 34" xmlns="http://www.w3.org/2000/svg">
              <g class="sparkles">
                <path
                  style="--duration: 2s; --delay: 0s"
                  d="M2.5740361 5.33344622s1.1875777-6.20179466 2.24320232 0c0 0 5.9378885 1.05562462 0 2.11124925 0 0-1.05562463 6.33374774-2.24320233 0-3.5627331-.6597654-3.29882695-1.31953078 0-2.11124925z"
                />
                <path
                  style="--duration: 1.5s; --delay: 0.9s"
                  d="M33.5173993 29.97263826s1.03464615-5.40315215 1.95433162 0c0 0 5.17323078.91968547 0 1.83937095 0 0-.91968547 5.51811283-1.95433162 0-3.10393847-.57480342-2.8740171-1.14960684 0-1.83937095z"
                />
                <path
                  style="--duration: 1.7s; --delay: 0.4s"
                  d="M69.03038108 1.71240809s.73779281-3.852918 1.39360864 0c0 0 3.68896404.65581583 0 1.31163166 0 0-.65581583 3.93489497-1.39360864 0-2.21337842-.4098849-2.04942447-.81976979 0-1.31163166z"
                />
                <path
                  style="--duration: 2.1s; --delay: 1.1s"
                  d="M99.18160965 12.79394657s1.61168639-8.41658446 3.0442965 0c0 0 8.05843194 1.43261013 0 2.86522025 0 0-1.43261011 8.59566072-3.0442965 0-4.83505916-.89538133-4.47690663-1.79076265 0-2.86522025z"
                />
              </g>
            </svg>
          </div>
        </h1>
        <p class="text-xl mt-8 par-1">
          My name is Zied Kharrat, I'm a web developer/designer and a student at the National
          Institute of Applied Science & Technology in Tunisia.
        </p>
        <p class="text-xl mt-8 placeholder-purple-200 par-2">
          Starting off as a graphic designer, I've since been expanding my skills to include
          animating, web design, and web development!
        </p>
        <p class="text-xl mt-8 placeholder-purple-200 par-2">
          Looking for a web developer or graphic designer? feel free to contact me!
        </p>
      </div>
      <div class="image-container">
        <img src="../../public/images/3426525.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50%;
}

.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
img {
  max-width: 50%;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 0.5;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
.main-container {
  justify-content: center !important;
}

.image-container {
  animation: fade-in 0.5s ease-in-out forwards;
}
.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.par-1 {
  opacity: 0;
  animation: slide-in 0.5s ease-in-out forwards;
  animation-delay: 3s;
}

.par-2 {
  opacity: 0;
  animation: slide-in 0.5s ease-in-out forwards;
  animation-delay: 3s;
}

h1 {
  opacity: 0;
  animation: jump-in 0.5s ease-in-out forwards;
  animation-delay: 2.5s;
  font-size: 2.1rem;
}

h1 span {
  font-size: 2.1rem;
}

@keyframes basePulse {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  6% {
    opacity: 0;
    transform: scale(0.75);
  }
  16% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1);
  }
  92% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.75);
  }
}

@keyframes midPulse {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  4% {
    opacity: 0;
    transform: scale(0.75);
  }
  14% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1);
  }
  94% {
    opacity: 0.7;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.75);
  }
}

@keyframes topPulse {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  2% {
    opacity: 0;
    transform: scale(0.75);
  }
  12% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  96% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.75);
  }
}

svg {
  z-index: 1;
  width: 10vw;
  max-width: 24rem;
  height: auto;
}

.logo,
.sparkles {
  animation: logoReveal 7s infinite ease-in-out;
}

.sparkles path {
  fill: #345862;
  transform-origin: 50% 50%;
  transform-box: fill-box;
  animation: sparkle var(--duration) var(--delay) infinite ease-in-out;
  position: absolute;
  position: absolute;
  top: -10px;
  left: -70px;
  z-index: 2;
}

@keyframes sparkle {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  70% {
    transform: scale(-1, 0);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
.wrapper {
  position: relative;
  top: +10px;
  left: -120px;
}
@media screen and (max-width: 768px) {
  .image-container {
    display: none;
  }
}
</style>
