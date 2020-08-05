function openTap(evt, tab) {
    var i, tabindex, tabcontents;
    
    tabindex = document.getElementsByClassName('tabindex')
    for (i = 0; i < tabindex.length; i++) {
        tabindex[i].className = tabindex[i].className.replace(' active', '');
    }
    tabcontents = document.getElementsByClassName('tabcontents');
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = 'none';
    }

    document.getElementById(tab).style.display = 'block';
    evt.currentTarget.className += ' active';

}