var times = 0, i = 0;

for (i = 0; i <= 100; i++) {
  setTimeout(function () {
    document.querySelector('.number').innerHTML = times;
    times++;
    if (times === 100) {
      document.querySelector('.progress-circle-outer').classList.remove('animate');
    }
  }, i * 100)
};