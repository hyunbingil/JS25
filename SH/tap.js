function openTab(evt, tabName) {
    var i, tabinex, tabcontents;
    tabinex = document.getElementsByClassName('tabinex');
    for (i = 0; i < tabinex.length; i++) {
        tabinex[i].className = tabinex[i].className.replace(" active", "");
        console.log(tabinex[i])
    }

    tabcontents = document.getElementsByClassName('tabcontents');
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = 'None';
    }

    // tabName = evt.currentTarget(tabName).display
    // document.getElementsById(tabName).style.display = 'block';
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += ' active'
    // evt.currentTarget.className = 'tabindex active'

}