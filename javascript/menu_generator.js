					document.writeln("<section class ='row col-centered'><section class ='col-lg-4 col-md-4 col-sm-6 col-centered col-lg-offset-2 col-md-offset-2'><div class='row'><div class='col-lg-12 col-md-12 col-sm-12 menu_heading'><h1>Menu</h1></div></div><div class='row'><div class='col-lg-12'><img src='images/menu/chicken_wings.jpg' class='pull-left image-margin img-responsive'/></div></div></section><section class ='col-lg-6 col-md-4 col-sm-6 col-centered'>");
					
					let foods = JSON.parse(food);
						 var i = 0;
						
						document.writeln("<table class='table table-hover table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Starter</th></tr></thead>");
							for(i = 0;i<foods.starter.length;i++)
							{	
								document.writeln("<tbody><tr><td>" + foods.starter[i].Name + "<br><hr><span>" +foods.starter[i].details + "</span></td><td align='right'>" + foods.starter[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section></section>");
				
				
				
						document.writeln("<section class ='row col-centered'><section class ='col-lg-6 col-md-6 col-sm-6 col-centered'><table class='table table-hover pull-left table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Main Courses</th></tr></thead>");
							for(i = 0;i<foods.MainCourse.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.MainCourse[i].Name + "<br><hr><span>" +foods.MainCourse[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.MainCourse[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section><section class ='col-lg-4 col-md-4 col-sm-4 col-centered'><img src='images/menu/chicken_sashlick.jpg' class='pull-right image-margin img-responsive'/></section></section>");
				
				
				document.writeln("<section class ='row col-centered'><section class ='col-lg-4 col-md-4 col-sm-6 col-centered col-lg-offset-2 col-md-offset-2'><img src='images/menu/tortilla_wrap.jpg' class='image-margin img-responsive'/></section><section class ='col-lg-4 col-md-4 col-sm-6 col-centered'>");
		
						document.writeln("<table class='table table-hover table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Wrap</th></tr></thead>");
							for(i = 0;i<foods.Bombay_Wrap.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Bombay_Wrap[i].Name + "<br><hr><span>" +foods.Bombay_Wrap[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.Bombay_Wrap[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section></section>");
				
					
				
				document.writeln("<section class ='row'><section class ='col-lg-4 col-md-4 col-sm-6 col-md-offset-2 col-centered col-lg-offset-2'><table class='table table-hover pull-left table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Meal Deals</th></tr></thead>");
							for(i = 0;i<foods.Meal_Deals.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Meal_Deals[i].Name + "<br><hr><span>" +foods.Meal_Deals[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.Meal_Deals[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section><section class ='col-lg-4 col-md-4 col-sm-6 col-centered'><img src='images/menu/strauberry_juice.jpg' class='pull-right image-margin img-responsive'/></section></section>");
				
				
				// document.writeln("<section class ='row'><section class ='col-lg-4 col-lg-offsett-2 col-centered'><img src='images/menu/fried_chips.jpg' class='pull-right image-margin img-responsive'/></section><section class ='col-lg-6 col-centered'>");
				document.writeln("<section class ='row col-centered'><section class ='col-lg-4 col-md-4 col-sm-6 col-centered col-lg-offset-2 col-md-offset-2'><div class='row'><div class='col-lg-12'></div></div><div class='row'><div class='col-lg-12'><img src='images/menu/fried_chips.jpg' class='pull-left image-margin img-responsive'/></div></div></section><section class ='col-lg-6 col-md-4 col-sm-6 col-centered'>");
				
						document.writeln("<table class='table table-hover pull-left table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Chip Box</th></tr></thead>");
							for(i = 0;i<foods.Chip_Box.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Chip_Box[i].Name + "<br><hr><span>" +foods.Chip_Box[i].details + "</span></td>");
								document.writeln("<td align='right'>"+ foods.Chip_Box[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section></section>");
				
			
								
					
				
				document.writeln("<section class ='row'><section class ='col-lg-6 col-md-6 col-sm-6 col-centered'><table class='table table-hover pull-left table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Drinks</th></tr></thead>");
							for(i = 0;i<foods.Drinks.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Drinks[i].Name + "</td>");
								document.writeln("<td align='right'>" + foods.Drinks[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section><section class ='col-lg-4 col-md-4 col-sm-6 col-centered'><img src='images/menu/orange_juice.jpg' class='pull-right image-margin img-responsive'/></section></section>");
				
				
				document.writeln("<section class ='row'><section class ='col-lg-4 col-md-4 col-sm-6 col-centered col-lg-offset-2 col-md-offset-2'><img src='images/menu/mixed_salad.jpg' class='pull-right image-margin img-responsive'/></section><section class ='col-lg-6 col-md-4 col-sm-6 col-centered'>");
						document.writeln("<table class='table table-hover pull-left table-responsive'><thead><tr><th align='center' colspan=2 style='font-size:20px;'>Extras</th></tr></thead>");
							for(i = 0;i<foods.Extras.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Extras[i].Name + "</td>");
								document.writeln("<td align='right'>" + foods.Extras[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table></section></section>");
			
				
				