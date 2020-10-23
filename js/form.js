
const form = document.getElementById("new_entry")
const item_name = document.getElementById("item_input")
const time_hour = document.getElementById("time_hour_input")
const time_mins = document.getElementById("time_min_input")



$(".time_input").keyup(function () {
    if (this.value.length >= $(this).attr('maxLength')) {
      var $next = $(this).closest(".form-group").next().find('.time_input');
      $next.focus()
    }
})




//preventing form from submitting by default
form.addEventListener('submit', e => {
	e.preventDefault();
    if (checkInputs()){
        reset_inputs()

    }
});


//function to check inputs
function checkInputs(){
    var itemValue = item_name.value.trim()
    const hourValue = time_hour.value.trim()
    const minsValue = time_mins.value.trim()
    console.log(hourValue)
    console.log(isNaN(parseInt(minsValue)))
    if (itemValue == ""){
        itemValue = item_name.placeholder
    }
    var validated = true
    if(itemValue == ""){
        validated = false
        setErrorFor(item_name)
    }
    else{
        setSuccessFor(item_name)
    }
    if(isNaN(parseInt(hourValue))){
        validated = false
        setErrorFor(time_hour)
        
    }
    else{
        setSuccessFor(time_hour)    
        
    }

    if(isNaN(parseInt(minsValue))){
        validated = false
        setErrorFor(time_mins)
    }
    else{
        setSuccessFor(time_mins)
    }
    if (validated){
        submit_form(itemValue, hourValue, minsValue)
        return true
    }
    else {
        invalid_pointer()
    }
    
}


//function for setting Error
function setErrorFor(input) {
	const formControl = input;
	const small = formControl.querySelector('small');
    // formControl.className = 'form-control is-invalid';
    $(formControl).addClass("is-invalid")
}
//sets the form control to green for valid
function setSuccessFor(input) {
    const formControl = input;
    $(formControl).removeClass("is-invalid")
    $(formControl).addClass("is-valid")
}


//will add the submitted form to the end of the list
function submit_form(item, hours, mins){
    time = convert_time(hours,mins)
    html = build_html(item, time)
    console.log(item, time)
    console.log(html)
    $(html).insertAfter($("#sortable>li:nth-last-child(2)"))
}

//used to build the html for item
function build_html(item, time){ 

    return `<li class="ui$-state-default list-group-item"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><div class="item" data-editable>${item}</div> <div class = "time">${time.hours}:${time.minutes}</div></li>`
}
//converts hours and minutes strings to an minutes
function convert_time(hours,minutes){
    if (isNaN(parseInt(hours))) {
        hours = 0
    }
    if (isNaN(parseInt(minutes))) {
        minutes = 0
    }
    if (parseInt(minutes) >= 60){
        return {"hours": parseInt(hours) + parseInt(minutes),  
            "minutes": parseInt(minutes) % 60}
    }
    return {"hours":parseInt(hours), 
            "minutes":parseInt(minutes)}
}
//resets the form and hides it
function reset_inputs(){
    $('form').find("input[type=text], textarea").val("")
    $('.form-control').removeClass("is-valid")
    $("#input_row").css("display", "none")
}

//focuses onto next invalid input
function invalid_pointer(){
    input = $('#item_input')
    while ($(input).hasClass('is-valid')){
        input = input.closest(".form-group").next().find('input')
    }
    input.focus()
}