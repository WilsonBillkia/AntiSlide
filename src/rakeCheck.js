
console.log("injectwed"); //show is fired
var idBlock = $('.opContainer .posteruid span:eq(1)'); //jquery gets the element with OP ID
var idExtract = idBlock.text(); // Get the text string for OP ID
console.log(idBlock); // debug - print out the element
var idStringed = String(idExtract); // Make sure the OP ID text is a string (convert it)
console.log(idStringed); // debug 
var numPostsRaw = $('.replyContainer'); // grab all elements from reply posts only
var numPosts = numPostsRaw.length; // get count of those elements
var opHours = $('.dateTime:eq(1)');
var realHours = new Date (opHours.text());
var diff = Math.abs(new Date(realHours) - new Date());
var minutesRaw = diff/1000/60;
var minutes = Math.round(minutesRaw);
console.log(opHours);
console.log(realHours);
console.log(minutes);
var boilerA = "<div class=\"pepe\">Not a habbeding, anon? 1 Post by this ID</div>";
var boilerB = "<div class =\"kermit\">OP posted this "+minutes+" minutes ago.</div>";
if (idStringed.indexOf('/') > -1) { // conditional to remove any non standard / chars from OP ID
  idStringed = idStringed.replace(/\//g, '\\/'); 
  console.log(idStringed);
  var searchy = $(".id_"+idStringed); // get all elements with OP ID as class
} else {
	  var searchy = $(".id_"+idStringed)
};if (idStringed.indexOf('+') > -1) { // conditional to remove any non standard + chars from OP ID
  idStringed = idStringed.replace(/\+/g, '\\+'); 
  console.log(idStringed);
  var searchy = $(".id_"+idStringed);
} else {
	  var searchy = $(".id_"+idStringed) // get all elements with OP ID as class
};
var postsByThisId = searchy.length /2; // check em for total 
console.log(postsByThisId); // divided by 2 to show # of OP Posts
console.log(postsByThisId + " posts by this ID."); // debug
console.log(numPosts + " posts in this thread."); // debug
if (postsByThisId == 1 && numPosts > 25){ // conditional using 2 because mobile and desktop css is rendered.
	  	  $(".thread").prepend(boilerA);
	  	$('.pepe').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
	  	$(".pepe").append(boilerB);
	  	$('.kermit').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
	  	$(".pepe").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}


