function decodeBookmarklet(bookmarklet) {
  return decodeURIComponent(bookmarklet);
}

function convertBookmarklet() {
  const bookmarkletInput = document.getElementById('bookmarkletInput').value;
  const decodedBookmarklet = decodeBookmarklet(bookmarkletInput);
  document.getElementById('decodedBookmarklet').textContent = decodedBookmarklet;
}

document.getElementById('convertBtn').addEventListener('click', convertBookmarklet);
