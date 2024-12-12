(function() {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
      if (img.hasAttribute('onerror') && /setTimeout\(.*window\.location\.href/.test(img.getAttribute('onerror'))) {
        img.removeAttribute('onerror');
      }
    });
  })();
  