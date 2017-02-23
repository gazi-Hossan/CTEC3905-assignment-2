				document.writeln("<section class ='row'>");
					document.writeln("<section class ='col-lg-6 col-lg-offset-3'>");
					let foods = JSON.parse(food);
						 var i = 0;
						 
						 
						document.writeln("<table class='table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Starter</th></tr></thead>");
							for(i = 0;i<foods.starter.length;i++)
							{	
								document.writeln("<tbody><tr><td>" + foods.starter[i].Name + "<br><hr><span>" +foods.starter[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.starter[i].price+"</td></tr></tbody>");
								
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
					
				document.writeln("<section class ='row'>");	
					document.writeln("<section class ='col-lg-6'>");
						document.writeln("<table class=' table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Main Course</th></tr></thead>");
							for(i = 0;i<foods.MainCourse.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.MainCourse[i].Name + "<br><hr><span>" +foods.MainCourse[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.MainCourse[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");	
				document.writeln("</section>");
				
				document.writeln("<section class ='row'>");	
					document.writeln("<section class ='col-lg-6 col-lg-offset-3'>");
						document.writeln("<table class=' table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Wrap</th></tr></thead>");
							for(i = 0;i<foods.Bombay_Wrap.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Bombay_Wrap[i].Name + "<br><hr><span>" +foods.Bombay_Wrap[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.Bombay_Wrap[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
				
				document.writeln("<section class ='row'>");		
					document.writeln("<section class ='col-lg-6'>");
						document.writeln("<table class=' table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Meal Deals</th></tr></thead>");
							for(i = 0;i<foods.Meal_Deals.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Meal_Deals[i].Name + "<br><hr><span>" +foods.Meal_Deals[i].details + "</span></td>");
								document.writeln("<td align='right'>" + foods.Meal_Deals[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
											
				document.writeln("<section class ='row'>");		
					document.writeln("<section class ='col-lg-6 col-lg-offset-3'>");
						document.writeln("<table class=' table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Chip Box</th></tr></thead>");
							for(i = 0;i<foods.Chip_Box.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Chip_Box[i].Name + "<br><hr><span>" +foods.Chip_Box[i].details + "</span></td>");
								document.writeln("<td align='right'>"+ foods.Chip_Box[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
				
				document.writeln("<section class ='row'>");	
					document.writeln("<section class ='col-lg-6'>");
						document.writeln("<table class=' table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Drinks</th></tr></thead>");
							for(i = 0;i<foods.Drinks.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Drinks[i].Name + "</td>");
								document.writeln("<td align='right'>" + foods.Drinks[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
				
				document.writeln("<section class ='row'>");
					document.writeln("<section class ='col-lg-6 col-lg-offset-3'>");
						document.writeln("<table class=' table table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2 style='font-size:20px;'>Extras</th></tr></thead>");
							for(i = 0;i<foods.Extras.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Extras[i].Name + "</td>");
								document.writeln("<td align='right'>" + foods.Extras[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");