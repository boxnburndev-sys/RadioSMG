(function setFavicon() {
  const faviconUrl = "https://kogeka.be/wp-content/uploads/2020/06/icon_smg.png";
  document.querySelectorAll('link[rel~="icon"], link[rel="shortcut icon"]').forEach(el => el.remove());
  const shortcut = document.createElement("link");
  shortcut.rel = "shortcut icon";
  shortcut.href = faviconUrl;
  document.head.appendChild(shortcut);
  ["16x16","32x32","48x48","96x96"].forEach(size => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = faviconUrl;
    link.sizes = size;
    document.head.appendChild(link);
  });
  const apple = document.createElement("link");
  apple.rel = "apple-touch-icon";
  apple.href = faviconUrl;
  document.head.appendChild(apple);
})();
