var how_did_we_do_page;
function show_hide_card_1() {
    if(how_did_we_do_page==1) {
        document.getElementById("card-1").style.display="block";
        return how_did_we_do_page=0;
    }

    else {
        document.getElementById("card-1").style.display="none";
        return how_did_we_do_page=1;
    }
}


var thank_you_page;
function show_hide_card_2() {
    if(thank_you_page==1) {
        document.getElementById("card-2").style.display="block";
        return thank_you_page=0;
    }

    else {
        document.getElementById("card-2").style.display="none";
        return thank_you_page=1;
    }
}