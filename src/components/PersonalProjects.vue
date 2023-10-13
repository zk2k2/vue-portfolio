<template>
  <div class="main-container h-screen" id="projects">
    <div class="h-24"></div>

    <div class="flex justify-center pt-8">
      <h1 class="font-bold text-2xl my-2 text-secondary m-4">Personal Projects</h1>
    </div>

    <div id="animation-carousel" class="relative w-full" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="overflow-hidden duration-200 ease-linear" data-carousel-item>
          <div class="item-container p-12 ml-6">
            <div class="item-header flex justify-between w-full">
              <div class="text-container">
                <h1 class="font-bold text-xl text-primary mx-4 my-1">Optimate</h1>
                <a href="https://optimate1.netlify.app/"
                  ><p class="text-lg mx-4 my-1 text-secondary">Web application</p></a
                >
                <p class="text-md mx-4 my-1 text-gray-400">Mar. 2023 - Apr. 2023</p>
              </div>
              <div class="logo-container">
                <img src="../../public/images/optimate-logo.png" class="h-16" alt="" />
              </div>
            </div>

            <p class="text-lg mx-4 my-5">
              Optimate is an innovative web application, powered by React, that packs a punch in the
              productivity department. It combines a robust task manager, a versatile timer, and a
              helpful mini chat-bot, all seamlessly integrated. Whether you're a professional
              seeking streamlined project management, a student looking to stay organized, or simply
              want a virtual assistant to boost your efficiency, Optimate has you covered. This
              all-in-one solution lets you create, edit, and categorize tasks, utilize customizable
              timers to enhance focus and productivity, and access a friendly chat-bot for quick
              tips and assistance. Say goodbye to scattered apps and hello to a more productive you
              with Optimate. <br />
              You can visit it
              <a href="https://optimate1.netlify.app/" class="text-primary underline">here</a>.
            </p>

            <p class="text-lg mx-4 my-5"><b>Skills:</b> React, Bootstrap, Vite, HTML, CSS3</p>
          </div>
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item></div>
        <!-- Item 3 -->
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        disabled
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/0 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-primary dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        disabled
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-primary dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>
