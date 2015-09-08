( function(global, $){ /*instant invocked function expression*/

    // new object creation
    var Greetr = function(firstName, LastName, language){
    	return new Greetr.init(firstName, LastName, language);
    }
    // define supported languages
    var supportedLangs = ['en', 'es'];

   // normal greetings
    var greeting = {
     'en' : 'Hello',
     'es' : 'Holla'
    };
    // formal greetings
    var formalGreetings = {
    	'en': 'Greetings',
    	'es' : 'salodos'
    };
    // logged messages
    var loggedMsg = {
    	'en' : 'Logged in',
    	'ep' : 'Inicio session'
    };

   // my methods binded to the prototype
   Greetr.prototype = {

	   	fullName: function(){
	   		return this.firstName + ' ' + this.LastName;
	   	},

	   	validate: function(){
          if(supportedLangs.indexOf(this.language) === -1){
          	throw "Invalide language";
          }
	   	},

	   	greeting: function(){
	   		return greeting[this.language] + ', ' + this.firstName + '!';
	   	},

	   	formalGreeting: function(){
	   		return formalGreetings[this.language] + ', ' + this.fullName();
	   	},

	   	greet: function(formal){
	   		var msg;
	   		if(formal){
	   			msg = this.formalGreeting(); 
	   		}

	   		else{
	   			msg = this.greeting();
	   		}
	   		if(console){
	   			console.log(msg);
	   		}

	   		return this;
	   	},

	   	log: function(){
	   		if(console){
	   			console.log(loggedMsg[this.language] + ': ' + this.fullName() );
	   		}

	   		return this;
	   	},

	   	setLang: function(lang){
	   		this.language = lang;
	   		this.validate();
	   		return this;
	   	},

	   	htmlGreeting: function(selector, formal){

	   		if(!$){
	   			throw "jquery not loaded";
	   		}

	   		if(!selector){
               throw "No jquery selector";
	   		}
	   		 var msg;

	   		 if(formal){
	   		 	msg = this.formalGreeting();
	   		 }
	   		 else{
	   		 	msg = this.greeting();
	   		 }

	   		 $(selector).html(msg);
	   		 return this;

	   	}
   };

  // the object construtor with default value
   Greetr.init = function(firstName, LastName, language){
   	// set default values here
   	 var self = this;
     self.firstName = firstName || '';
     self.LastName = LastName || '';
     self.language = language || 'en';
   }

   // trick not to use the new keyword
   Greetr.init.prototype = Greetr.prototype;
   //attach our Greetr to the global as well as provide a short hand of using G$
   global.Greetr = global.G$ = Greetr;

}(window, $) );