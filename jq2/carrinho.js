	/* 
	var update function ()
	{
		var carrinho = $(this);

		var itens = carrinho.find(".item-total:visible");

		var total = 0;
		for (var i = 0; i < itens.length; i++) 
		{
			var item = $(itens[i]);
			// parseFloat soma de elementos e números
			var valor = parseFloat(item.text());
			total = total + valor;
		}
		
		carrinho.find(".total").text(total);
		carrinho.find(".quantidade").text(itens.length);
	};
	*/

	// add advertise on carrinhos
	/*
	$(".carrinho").each (function(){
		$(this).find("tr").each(function(i){
			if (i % 3 == 0) {
				var terceiraLinha = $(this);
			};
		});
	});
	*/

	var advertise = function () 
	{
		var ads = ["O que acha de comprar uma motocicleta?",
					"O que acha de comprar uma lancha?",
					"O que acha de comprar uma bicicleta?",
					"O que acha de comprar um carro?"
					];
		// multiplar número entre zero e um
		var position = Math.floor(ads.length * Math.random()); 
		var texto = ads[position];
		// var tr = $("<tr class='propaganda'><td colspan='6'>" + texto + "</td></tr>");
		// append: dentro do elemento insira algo
		var tr = $("<tr>").addClass("propaganda").append($("<td>"));
		// adicionar atributo (attr) ao elemento
		tr.find("td").attr("colspan", 6).text(texto);
		return tr;
	};

	var updated = function ()
	{
		var carrinhos = $(".carrinho");
		carrinhos.each(function()
		{
			var carrinho = $(this);

			var itens = carrinho.find(".item-total:visible");

			var total = 0;
			for (var i = 0; i < itens.length; i++) 
			{
				var item = $(itens[i]);
				// parseFloat soma de elementos e números
				var valor = parseFloat(item.text());
				total = total + valor;
			}
			
			carrinho.find(".total").text(total);
			carrinho.find(".quantidade").text(itens.length);	
		});			
	};

	var removeItem = function(event)
	{
		event.preventDefault();

		var self = $(this);
		// closest = selector (navega na árvore do elemento)
		self.closest("tr").hide();

		updated();

		/* 
		var atual = parseInt($("#quantidade").text());
		var qntNova = atual - 1;
		$("#quantidade").text(qntNova);

		var precoAtual = parseFloat($("#total").text());
		// closest (subi até achar o que quero) find (desci até encontrar o individuo) especificar características (selecionadores)
		var preco = parseFloat(self.closest("tr").find(".item-total").text());
		var precoFinal = precoAtual - preco;

		$("#total").text(precoFinal);
		*/
	};

	var undo = function()
	{
		var carrinho = $(this).closest(".carrinho");
		carrinho.find("tr:visible").removeClass("recuperado");

		var trs = carrinho.find("tr:hidden");
		// addClass or removeClass trabalha com manipulação de CSS
		trs.addClass("recuperado").show();
		updated();
	};

	var destacar = function ()
	{
		$(this).addClass("hovering");
	}

	var apagar = function ()
	{
		$(this).removeClass("hovering");
	}

	var loadfinish = function() 
	{	
		updated();
		$(".undo").click(undo);
		$(".remover").click(removeItem);
		// para cada carrinho execute a function
		$(".carrinho").each(function()
			{
				$(this).find("tr:nth-child(2n)").each(function()
				{
					// insira a tr após o 3 item da tabela
					advertise().insertAfter($(this));
				});
			});
		// configurar eventos
		/*
		$("tr").on("mouseenter", destacar);
		$("tr").on("mouseleave", apagar);
		*/
		// quanto mais elemtnos dentro do $ mais atrelado fica, CUIDADO, atenção a manutenção
		$(".carrinho tbody tr").hover(destacar, apagar);
	};
	$(loadfinish);