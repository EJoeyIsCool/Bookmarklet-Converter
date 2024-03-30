document.addEventListener('DOMContentLoaded', function() {
  document.body.innerHTML = document.body.innerHTML.replace(/%([0-9A-Fa-f]{2})/g, function(match, p1) {
    return String.fromCharCode(parseInt(p1, 16));
  });
});
