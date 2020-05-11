
areaCircle();
squareRoot();

function areaCircle() {
    let area_form = document.getElementById("getarea");
    let html = "";
    let the_area = 0;

    area_form.addEventListener("submit", function(event){
        let rad =  document.getElementById("radius").value;
        // console.log(rad);
      

        if (rad.length < 1) {
            event.preventDefault();
            alert("Please enter a radius!");
            return;
        } 
        else {
            event.preventDefault();
            // Use of isNaN() 
            rad = !isNaN(rad) ? parseInt(rad) : +rad || false;

            if (rad === false) {
                alert("Radius must be numeric!");
                return;
            }

            the_area = Math.PI * ( rad * rad );
            console.log(the_area);
            html += "<p>The area is <em>"+ the_area + "</em> square units.</p>"
            // alert("The area is "+ the_area + " square units. ");
            // alert(html);
            document.getElementById("result").innerHTML = html;
        }
    }, false);
}


function squareRoot(){
    let root_form = document.getElementById("getroot");
    let ht = "";
    let the_sqroot = 0;

    root_form.addEventListener("submit", function(event){
        event.preventDefault();
        let rot =  document.getElementById("root").value;
        console.log(rot);
        
        the_sqroot = Math.sqrt(rot); 
        console.log(the_sqroot);
        ht += "<p>The Square Root of " + rot + " is <em>"+ the_sqroot + "</em></p>"
        // alert("The area is "+ the_area + " square units. ");
        // alert(html);
        document.getElementById("result2").innerHTML = ht;
})
}
