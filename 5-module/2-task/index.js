function toggleText() {
  document.getElementsByClassName('toggle-text-button')[0].onclick = function() {
    if (document.getElementById('text').hasAttribute('hidden')) {
      document.getElementById('text').hidden = false;
    }
    else {
      document.getElementById('text').hidden = true;
    }
    
  };
}
