onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const dear = 'Hi, baby'
    const titles = ('Eng có quà từ em nèeeeeee 🥰, eng mở thử xiêm có gì nhá').split('')
    const titleElement = document.querySelector('.title')

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
  }, 1500);

  setTimeout(() => {
    const a = document.querySelector('.btn-open')
    a.classList.remove('hide')
  }, 5000)
};