var Person = Backbone.Model.extend({
	defaults: {
		name: 'Dimon', 
		fam: 'Zhurin',
		fallowers: 'друзей 30',
		age: 'возраст  19',
		grop: 'Рост 195',
		job: 'web developer',
		jo: 'ибо'
	
		
	}
	});
	
	var PersonView = Backbone.View.extend({
		template: _.template('<strong> <br> <%= name %>  <%= fam %> <br> </strong> <br> ( <%= fallowers %>)<br> ( <%= age %>) <br> <%= grop %> <br> - <%= job %>'),
		template2: _.template('<%= jo %> Я крутой  потому что мне <br> <%= age %> лет и зовут меня <strong><%= name %>  <%= fam %></strong>'),
		initialize: function () {
			tagName: 'li',
			this.render();
		},
		render: function ()	{
			//this.$el.html(this.model.get('name') + '(' + this.model.get('age') + ') - ' + this.model.get('job'));
		this.$el.html( this.template(this.model.toJSON() )+this.template2(this.model.toJSON()));
		//this.$el.html( this.template ( $(document.body).append(personView.el({age:40,job:'web developer',fam:'Zhurin',fallowers:30,grop:1,95}  ) ) );
		}
	});
	var person = new Person;
	var personView = new PersonView({model: person});