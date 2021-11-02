function showhide() {
    var d = new Date();
    var s = document.getElementsByClassName(d.getDay());
    for (var i = 0; i < s.length; i++) {
      s[i].style.display = 'block';
    }
  }
  
  showhide();