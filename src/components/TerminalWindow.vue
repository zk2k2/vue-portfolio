<template>
  <div class="wrapper">
    <div class="fakeMenu shadow-2xl">
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen flex-col shadow-2xl">
      <p class="line1">
        &#91;&nbsp;&ldquo;Hey there! I'm Zied Kharrat. &rdquo;,<span class="cursor1">_</span>
      </p>
      <p class="line2">
        &#91;&nbsp;&ldquo;I study at INSAT, in Tunisia. &rdquo;,<span class="cursor1">_</span>
      </p>
      <p class="line3">
        &nbsp;&nbsp;&ldquo;I'm a <span>web designer & developer</span> .&rdquo;,<span
          class="cursor2"
          >_</span
        >
      </p>
      <p class="line4">
        &nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span class="cursor3">_</span>
      </p>
      <p class="line4">><span class="cursor4">_</span></p>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #00b2a7;
  padding: 10px;
}

.fakeButtons {
  height: 10px;
  width: 10px;
  border-radius: 50%;

  position: relative;
  top: 6px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;
}

.fakeMinimize {
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
}

.fakeZoom {
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
}

.fakeMenu {
  width: 450px;
  box-sizing: border-box;
  height: 35px;
  background-color: #e3e6e6;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #345862;
  box-sizing: border-box;
  width: 450px;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

p {
  position: relative;

  font-size: 1.25em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.line1 {
  color: #fff;
  -webkit-animation: type 0.5s 1s steps(20, end) forwards;
  -moz-animation: type 0.5s 1s steps(20, end) forwards;
  -o-animation: type 0.5s 1s steps(20, end) forwards;
  animation: type 0.5s 1s steps(20, end) forwards;
}

.cursor1 {
  -webkit-animation: blink 1s 2s 2 forwards;
  -moz-animation: blink 1s 2s 2 forwards;
  -o-animation: blink 1s 2s 2 forwards;
  animation: blink 1s 2s 2 forwards;
}

.line2 {
  color: #fff;
  -webkit-animation: type 0.5s 4.25s steps(20, end) forwards;
  -moz-animation: type 0.5s 4.25s steps(20, end) forwards;
  -o-animation: type 0.5s 4.25s steps(20, end) forwards;
  animation: type 0.5s 4.25s steps(20, end) forwards;
}

.cursor2 {
  -webkit-animation: blink 1s 5.25s 2 forwards;
  -moz-animation: blink 1s 5.25s 2 forwards;
  -o-animation: blink 1s 5.25s 2 forwards;
  animation: blink 1s 5.25s 2 forwards;
}

.line3 {
  color: #fff;
  -webkit-animation: type 0.5s 7.5s steps(20, end) forwards;
  -moz-animation: type 0.5s 7.5s steps(20, end) forwards;
  -o-animation: type 0.5s 7.5s steps(20, end) forwards;
  animation: type 0.5s 7.5s steps(20, end) forwards;
}
.line3 span {
  color: #07dacd;
}

.cursor3 {
  -webkit-animation: blink 1s 8.5s 2 forwards;
  -moz-animation: blink 1s 8.5s 2 forwards;
  -o-animation: blink 1s 8.5s 2 forwards;
  animation: blink 1s 8.5s 2 forwards;
}

.line4 {
  color: #fff;
  -webkit-animation: type 0.5s 10.75s steps(20, end) forwards;
  -moz-animation: type 0.5s 10.75s steps(20, end) forwards;
  -o-animation: type 0.5s 10.75s steps(20, end) forwards;
  animation: type 0.5s 10.75s steps(20, end) forwards;
}

.cursor4 {
  -webkit-animation: blink 1s 11.5s infinite;
  -moz-animation: blink 1s 8.5s infinite;
  -o-animation: blink 1s 8.5s infinite;
  animation: blink 1s 8.5s infinite;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes type {
  to {
    width: 17em;
  }
}

@-moz-keyframes type {
  to {
    width: 17em;
  }
}

@-o-keyframes type {
  to {
    width: 17em;
  }
}

@keyframes type {
  to {
    width: 25em;
  }
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
.wrapper {
  opacity: 0;
  width: fit-content;
  animation: slide-in 0.5s ease-in-out 2s forwards;
}
</style>
