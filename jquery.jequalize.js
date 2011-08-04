jQuery.fn.jequalize = function(x) {
	function equalize(e)
	{
		var h = 0;
		e.each(function()
		{
			oh = $(this).outerHeight();
			if (oh > h) { h = oh; }
		});
		e.height(h);
	}

	if (x == undefined)
	{
		equalize($(this));
		return this;
	}
	
	for(i = 0; i < $(this).length; i+=x)
	{
		equalize($(this).slice(i, i + x))
	}
	return this;
};