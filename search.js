function make_label(label_name, e)
{
	keywords = ["fork", "spoon", "knife"];
	if($.inArray(label_name, keywords) != -1)
	{
		e.preventDefault();
		$("#labels").append("<div id='label'>"+ label_name + "</div>");
		$("input").val('');
	}
}
function remove_label()
{
	$("#labels #label").last().remove();
}

$(function()
{
    $("input").on("keydown", function(e){
		// SPACE = make label
		if(e.keyCode == 32 && $("#input").val() != '')
		{
			make_label( $("#input").val(), e );
		}

		// BACKSPACE = remove label if input empty
		if(e.keyCode == 8 && $("#input").val() == '')
		{
			remove_label();
		}
	});
});
