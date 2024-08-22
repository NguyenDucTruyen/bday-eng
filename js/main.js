
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I hí, engiu của em 21 tuổi rồi nèeee, chúc engiu tuổi 21 thiệt là vui vẻ , hạnh phúc và luôn yêu đời nhá 🥰💖').split('')
    const titleElement = document.getElementById('text');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 50); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};