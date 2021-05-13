$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})



// Unneccesary stagger animation of the section elements
TweenMax.staggerFrom("section", .65, {top: "+=60px", opacity: 0, ease:Strong.easeOut}, 0.1);

