function opentab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-content-item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-nav-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName + '-content').style.display = "block";
  evt.currentTarget.className += " active";
}

window.addEventListener('DOMContentLoaded', e => {
  [...document.querySelectorAll('.tab-nav-item')].forEach(el => el.addEventListener('click', e => {
    opentab(e, e.target.id)
  }))
});
