$(document).ready(function(){
	$("#success").hide();
	$("#recipeSubmission").hide();
	$("#donationCode").hide();
	$('.form-check-inline :checkbox[required]').change(function(){
		let boexs=$('.form-check-inline :checkbox[required]');
		if($("#inlineRadio1").is(':checked')) {
			boxes.removeAttr('required');
		} else {
			boxes.attr('required', 'required');
		}
	});
	$("#inlineRadio1").click(function(){
		if($("#inlineRadio1").prop("checked") === true){
			$("#donationCode").show();
			$("#inlineRadio2").removeAttr("required");
			$("#inputRecipe").removeAttr("required");
		}
		else{
			$("#donationCode").hide();
			$("inlineRadio2").attr("required","required");
			$("inputRecipe").attr("required","required");
		}
	});
	$("#inlineRadio2").click(function(){
		if($("#inlineRadio2").prop("checked") === true){
			$("#recipeSubmission").show();
			$("#inlineRadio1").removeAttr("required");
			$("#inputDonation").removeAttr("required");
		}
		else{
			$("#recipeSubmission").hide();
			$("inlineRadio1").attr("required","required");
			$("inputDonation").attr("required","required");
		}
	});
	$("#registerForm").submit(function(e){
		e.preventDefault();
		$("#registerForm").hide();
		$("#success").show();
	});
	$(".navbar-brand").click(function(e){
		e.preventDefault();
		let id=$(this).attr('href');
		$("html,body").animate({
			scrollTop: 0
		}, 'slow');
	});
	$("a.nav-link").each(function(){
		$(this).click(function(e){
			e.preventDefault();
			let id=$(this).attr('href');
			$("html,body").animate({
				scrollTop: $(id).offset().top-80
			}, 'slow');
		});
	});
});
