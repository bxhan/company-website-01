// JavaScript Document


				
				$(function(){
					$(".pcdnav").find("li").click(function(){
								if($(this).next(".xl").hasClass('xlxlhide')){
										var xlH2 = $(this).next(".xl").find(".xlxl").length;
										$(this).next(".xl").animate({"height":(xlH2*37)+"px"},600);
     									$(this).next(".xl").removeClass('xlxlhide');
										$(this).find("a").addClass("active");
								} else{
										$(this).next(".xl").animate({"height":"0px"},600);
										$(this).next(".xl").addClass('xlxlhide');
										$(this).find("a").removeClass("active");
								}
 					  });
				})