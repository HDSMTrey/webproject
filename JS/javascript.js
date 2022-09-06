//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}
//document.cookie="digg=dog";
//alert(document.cookie);
document.getElementById("logintext").innerHTML="ggg";

autoSlideShow2();

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}	
let allComments = [{name: "Ian", comment: "Recommended, good one"},
{name: "Aman", comment: "I don't like this movie"},
{name: "John", comment: "Love it"},
];
let topLaptop2 = [{id: 0, title: "17 Acer Nitro 5 144Hz Gaming Laptop", Price: "$2225", image_url: "MEDIA/movie0.jpg"},
				 {id: 1, title: "17.3 ASUS ROG Strix G17 360Hz Gaming Laptop ", Price: "$3245", image_url: "Media/laptop0.png"},
				 {id: 2, title: "15.6 Acer Nitro 5 144Hz Gaming Laptop", Price: "$1499", image_url: "Media/laptop1.png"},
			     {id: 3, title: "17.3 ASUS TUF Gaming A17 144Hz Gaming Laptop", Price: "$2999", image_url: "Media/laptop3.png"},
			     {id: 4, title: " 13 ASUS ROG Flow X13 120Hz Gaming Laptop Supernova Edition\'s List", Price: "$2835", image_url: "Media/laptop4.png"},
				];
loadComments();

let currentVotes = {like: 20, dislike: 5};
				let voteStatus = {like: false, dislike: false};
				//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

//Authentication
//Data: assume we have a list of existing users stored in an array "allAccounts"
let allAccounts = [{user: "admin", pass: "1234"}];	
function displayMyLaptop() {
	//Get the selected movie "option value"
	let selectedLaptopIndex = document.getElementById("myLaptopList").value;
	document.getElementById("selectedLaptopTitle").innerHTML = topLaptop[selectedLaptopIndex].title;
	
	document.getElementById("selectedLaptopPrice").innerHTML = topLaptop[selectedLaptopIndex].Price;
	document.getElementById("selectedLaptopURL").src = topLaptop[selectedLaptopIndex].image_url;
	}
function createAccount() {
	//Get entered data
	let enteredUser = document.getElementById("signup_user").value;
	let enteredPass = document.getElementById("signup_password").value;
	
	//Loop through all users and check if this user exists or not?
	let existing = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user) {
			alert("SORRY! THIS USER ALREADY EXIST!");			
			existing = true;
			break;//quit
		} 
	}
	//Until the end, no existing user
	if (existing == false) {
		//Add a new user
		allAccounts.push({user: enteredUser, pass: enteredPass});	
		alert("CONGRATS! YOUR ACCOUNT IS CREATED");	
}

}
function AddItemToList() {
	//Get entered item data
	let newItemTitle = document.getElementById("my-movie-title").value;
	let newItemPrice = document.getElementById("my-movie-Price").value;
	let newItemUrl = document.getElementById("my-movie-image-url").value;
	let newId = topLaptop.length;
	//Validate input before adding new item
	if ((newItemTitle == "") || (newItemPrice == "") || (newItemUrl == "")) {
	alert("ERROR. DATA IS INCOMPLETE!");
	} else {
	//Add a new item
	topLaptop.push({id: newId, title: newItemTitle, Price: parseInt(newItemPrice), image_url: newItemUrl});
	//document.write(allAccounts[1].user + "," + allAccounts[1].pass);
	alert("NEW ITEM ADDED SUCCESSFULLY!");
	//Reload the drop-down list
	//Remove all current options
	document.getElementById("myLaptopList").options.length = 0;
	
	document.getElementById("my-movie-image-url").value = "";
	document.getElementById("my-movie-title").value = "";
	document.getElementById("my-movie-Price").value = "";
	//Load updated options
	loadLaptop();
	//Empty the inputs
	
	
	

	}
	}
	
function validateAccount() {
	//Get entered data
	let enteredUser = document.getElementById("login_username").value;
	let enteredPass = document.getElementById("login_password").value;
	
	//Loop through all users and check if any matching?
	let valid = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user && enteredPass == allAccounts[i].pass) {
			
			document.getElementById("logintext").innerHTML=enteredUser + " is logged in";
			alert("CONGRATS! YOU ARE LOGED IN!");			
			valid = true;
			
			break;//quit
		} 
	}
	//Until the end, no user matching.
	if (valid == false) {
		alert("SORRY! WRONG ACCOUNT");	
	}	
}	


function loadRSS() {
	//Use CORS API website as proxy
	let proxy = 'https://cors-anywhere.herokuapp.com/';
  
	//Declare the URL where we fetch RSS file
	let url = "https://www.nasa.gov/rss/dyn/educationnews.rss";
	//NASA RSS: https://www.nasa.gov/content/nasa-rss-feeds
	//     NASA education news: https://www.nasa.gov/rss/dyn/educationnews.rss
	//CNN RSS: https://edition.cnn.com/services/rss/
	//    CNN RSS top stories: http://rss.cnn.com/rss/edition.rss
	//BBC RSS: http://feeds.bbci.co.uk/news/rss.xml
  
	//Create an XMLHttpRequest Object to request XML file (data) through HTTP protocol
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send();

	//declare Laptop 
	//Data: assume we have a list of top 5 Laptop
let topLaptop = [
	{id: 0, title: "The 17 Acer Nitro 5 144Hz Gaming Laptop", Price: "$2225",
	image_url: "MEDIA/laptop0.png"},
	{id: 1, title: "17.3 ASUS ROG Strix G17 360Hz Gaming Laptop ", Price: "$3245", image_url:
	"MEDIA/laptop1.png"},
	{id: 2, title: "15.6 Acer Nitro 5 144Hz Gaming Laptop", Price: "$1499", image_url:
	"MEDIA/laptop2.png"},
	{id: 3, title: "17.3 ASUS TUF Gaming A17 144Hz Gaming Laptop", Price: "$2999", image_url:
	"MEDIA/laptop3.png"},
	{id: 4, title: " 13 ASUS ROG Flow X13 120Hz Gaming Laptop Supernova Edition\'s List", Price: "$2835", image_url:
	"MEDIA/laptop4.png"},
	];



  
	//Process RSS file when it has been loaded successfully		
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		//Load XML file as "XML" format and parse/process it by calling function parseRSS()
		let rss = this.responseXML;
		parseRSS(rss);	}
	};
  }
  

  //movie slideshow test

  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
document.getElementById("Laptopize").style.width="200px";
document.getElementById("Laptopize2").style.width="200px";
document.getElementById("Laptopize3").style.width="200px";
document.getElementById("Laptopize4").style.width="200px";
//---------------------------------
  function parseRSS(rss) {
	//Load all "items" inside the RSS document, each item is a news
	let items = rss.getElementsByTagName("item");			
	let rssContent = "";//varible "rssContent" is used to store rss content in HTML format
  
	//Loop through all "items" (news) and extract child node content: "title", "link", "description" and "pubdate"
	for (let i = 0; i< items.length; i++) {
	  let nodes = items[i].children;
	  //Extract "title", "link", "description" and "pubdate" of each "node"
	  let title, pubdate, description, link;
	  for (let j = 0; j < nodes.length; j++) {
		if (nodes[j].tagName == "title") {
		  title = nodes[j].childNodes[0].nodeValue;
		} else if (nodes[j].tagName == "link") {
		  link = nodes[j].childNodes[0].nodeValue;
		} else if (nodes[j].tagName == "description") {
		  description = nodes[j].childNodes[0].nodeValue;
		} else if (nodes[j].tagName == "pubDate") {
		  pubdate = nodes[j].childNodes[0].nodeValue;
		}
	  }
  
	  //Format the extracted information above in HTML format and append it to the "rssContent" variable
	  //each item (news) is wrapped inside a <div>
	  rssContent += `<div style="background-color: gray; margin: 2px;">																
													  <h3>${title}</h3>
													  <p style="font-style: italic;">${pubdate}</p>
													  <p>${description}</p>
													  <p><a href="${link}">Read more</a></p>
											  </div>`;							
	}
  
	//Display the "rssContent" on the webpage
	document.getElementById("rssFeed").innerHTML = rssContent;
  }
  /*Default Setting Function*/
/*Highlight the demo-1 button and show demo-1 area, hide all other demo areas*/
//alert("HELLO");

let allButtons = document.getElementsByClassName("demo-button");//Return an array storing all buttons
let allDemoAreas = document.getElementsByClassName("demo-box");//Return an array storing all demo boxes
let demoAreaColor = ["#58D68D", "#8E44AD", "#5D6D7E", "#28B463"];
for (let i=0; i < allButtons.length; i++) {
	allButtons[i].style.backgroundColor = "white";
	allDemoAreas[i].style.display = "none";
}
function showDemo(index) {
	//Set all buttons to white color
	for (let i=0; i < allButtons.length; i++) {
		allButtons[i].style.backgroundColor = "white";
		allDemoAreas[i].style.display = "none";
	}
	
	//Set the background color of the demo-button-1 to orange
	allButtons[index].style.background = "#FF9633";
	allDemoAreas[index].style.display = "block";
	allDemoAreas[index].style.backgroundColor = demoAreaColor[index];
}

function myFunction() {
	
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//Data: assume we have a list of top 5 Laptop
let topLaptop = [{id: 0, title: "The 17 Acer Nitro 5 144Hz Gaming Laptop", Price: "$2225", image_url: "MEDIA/laptop0.png"},
				 {id: 1, title: "17.3 ASUS ROG Strix G17 360Hz Gaming Laptop ", Price: "$3245", image_url: "MEDIA/laptop1.png"},
				 {id: 2, title: "15.6 Acer Nitro 5 144Hz Gaming Laptop", Price: "$1499", image_url: "MEDIA/laptop2.png"},
			     {id: 3, title: "17.3 ASUS TUF Gaming A17 144Hz Gaming Laptop", Price: "$2999", image_url: "MEDIA/laptop3.png"},
			     {id: 4, title: " 13 ASUS ROG Flow X13 120Hz Gaming Laptop Supernova Edition\'s List", Price: "$2835", image_url: "MEDIA/laptop4.png"},
				];


				// ex1 two slideshows

				let manualIndex=0;


function nextLaptop() {
	if (manualIndex<topLaptop.length-1){
		manualIndex++;
	}
	else {
		manualIndex=0;
	}
	document.getElementById("manual-slide-title").innerHTML=topLaptop[manualIndex].title;
	document.getElementById("manual-slide-image").src=topLaptop[manualIndex].image_url;


}
function previousLaptop() {
	//increase the index by 1
if (manualIndex>0){
		manualIndex--;
	}
	else {
		manualIndex=topLaptop.length-1;
	}
	document.getElementById("manual-slide-title").innerHTML=topLaptop[manualIndex].title;
	document.getElementById("manual-slide-image").src=topLaptop[manualIndex].image_url;



	
}

//auto slideshow
let autoIndex=0;
function autoSlideShow(){
	//change the autoindex
	//change the title and url
	//wait 2secs 

	if (autoIndex<topLaptop.length-1){
		autoIndex++;
	}
	else 
	{
		autoIndex=0;
	}
	document.getElementById("auto-slide-title").innerHTML=topLaptop[autoIndex].title;
	document.getElementById("auto-slide-image").src=topLaptop[autoIndex].image_url;
	setTimeout(autoSlideShow, 1000);


}
function autoSlideShow2(){
	//change the autoindex
	//change the title and url
	//wait 2secs 
	
	//document.getElementById("filtert").innerHTML=topLaptop[autoIndex].title;
	const para = document.createElement("li");
	const trip = document.createElement("a");
	trip.setAttribute('href',"#");
	para.appendChild(trip);
trip.innerHTML="dog";

// Append to another element:
document.getElementById("myUL").appendChild(trip);


}


//exc
autoSlideShow();
//ex

//populate the select

function loadLaptop(){
//find the select element
//loop through the Laptop in the list
let Laptopelect=document.getElementById("myLaptopList");
for (var i=0;0<topLaptop.length;i++){
	//extract title
	//creat option
	let optionNode= document.createElement("option");
	//assign the option content
	optionNode.value=topLaptop[i].id.toString();
	optionNode.textContent=topLaptop[i].title.toString();
	//append this option to the select element
	Laptopelect.appendChild(optionNode);


}

}
loadLaptop();
//event change select


function changeColour(){
	dog=document.getElementById("colours").value;
	if (dog==='red'){
	document.getElementById("fish").style.backgroundColor="red";}
	dog=document.getElementById("colours").value;
	if (dog==='green'){
	document.getElementById("fish").style.backgroundColor="green";}
	dog=document.getElementById("colours").value;
	if (dog==='blue'){
	document.getElementById("fish").style.backgroundColor="blue";}
	dog=document.getElementById("colours").value;
	if (dog==='yellow'){
	document.getElementById("fish").style.backgroundColor="yellow";}
	dog=document.getElementById("colours").value;
	if (dog==='orange'){
	document.getElementById("fish").style.backgroundColor="orange";}


}
function changeFont(){
	
	dog2=document.getElementById("fsizes").value;
	if (dog2==='small'){ 
	document.getElementById("fish").style.fontSize="small";}

	dog2=document.getElementById("fsizes").value;
	if (dog2==='medium'){
	document.getElementById("fish").style.fontSize="medium";}
	dog2=document.getElementById("fsizes").value;
	if (dog2==='large'){
	document.getElementById("fish").style.fontSize="x-large";}
	


}
// new stuff
//Click Like button
function like() {
	//Check current status of "like" button (has been clicked or not)
	if (voteStatus.like == false) {
	//Increase a "Like": Increase the like number by 1
	document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
	//Change the background color of Like button to GREEN
	document.getElementById("likeButton").style.backgroundColor = "green";
	//Change the current status of "like" button: has been clicked
	voteStatus.like = true;//
	//Check "dislike" status - if dislike has been voted, down it by one & change status to False &
	//change background color to white
	if (voteStatus.dislike == true) {
	document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
	voteStatus.dislike = false;//
	document.getElementById("dislikeButton").style.backgroundColor = "white";
	}
	} else {
	//Keep the current number of like
	document.getElementById("likeNumber").innerHTML = currentVotes.like;
	//Change the background color of Like button to WHITE
	document.getElementById("likeButton").style.backgroundColor = "white";
	//Change the current status of "like" button
	voteStatus.like = false;//has been clicked
	}
	}
	//Click Dislike button
function dislike() {
	//Check current status of "dislike" button (has been clicked or not)
	if (voteStatus.dislike == false) {
	//Increase a "disLike" by 1
	document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
	//Change the background color of Like button to GREEN
	document.getElementById("dislikeButton").style.backgroundColor = "green";
	//Change the current status of "dislike" button
	voteStatus.dislike = true;//has been clicked
	//Check "like" status - if like has been voted, down it by one & change status to False & change
	//background color to white
	if (voteStatus.like == true) {
	document.getElementById("likeNumber").innerHTML = currentVotes.like;
	voteStatus.like = false;//
	document.getElementById("likeButton").style.backgroundColor = "white";
	}
	} else {
	//Keep the current number of of "dislike"
	document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
	//Change the background color of disLike button to WHITE
	document.getElementById("dislikeButton").style.backgroundColor = "white";
	//Change the current status of "dislike" button
	voteStatus.dislike = false;//has been clicked
	}
	} 

	//
	function loadComments() {
	
	
		//Loop through all comments in the array "allComments"
		for (var i=0; i < allComments.length; i++) {
		let name = allComments[i].name;
		let comment = allComments[i].comment;
		//
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)
		let parrent_node = document.getElementById("comment-list");//Get the id of parent node "commentlist"
		parrent_node.appendChild(node);//Append the above child HTML node to the parent node
		}
		}

		function addComment() {
	
			//Get entered value/data by user
			let enteredCommentName = document.getElementById("comment_name").value;
			let enteredCommentText = document.getElementById("comment_text").value;
			//Add this new comment to the array
			allComments.push({name: enteredCommentName, comment: enteredCommentText});
			alert("Thank you for your comment!");
			//Display this new comment on HTML page
			//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
			let node = document.createElement("P");
		//Create a new TextNode
		let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
		//Append the content (created TextNode) to the HTML Node (child)
		node.appendChild(textnode);
		//Get the id of parent node "comment-list"
		let parrent_node = document.getElementById("comment-list");
		//Append the above child HTML node to the parent node
		parrent_node.appendChild(node);
		//Clear comment box
		document.getElementById("comment_name").value = "";
		document.getElementById("comment_text").value = "";
			} 


			///new----------------------------------

			var shoppingCart = (function() {
				// =============================
				// Private methods and propeties
				// =============================
				cart = [];
				
				// Constructor
				function Item(name, Price, count) {
				  this.name = name;
				  this.Price = Price;
				  this.count = count;
				}
				
				// Save cart
				function saveCart() {
				  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
				}
				
				  // Load cart
				function loadCart() {
				  cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
				}
				if (sessionStorage.getItem("shoppingCart") != null) {
				  loadCart();
				}
				
			  
				// =============================
				// Public methods and propeties
				// =============================
				var obj = {};
				
				// Add to cart
				obj.addItemToCart = function(name, Price, count) {
				  for(var item in cart) {
					if(cart[item].name === name) {
					  cart[item].count ++;
					  saveCart();
					  return;
					}
				  }
				  var item = new Item(name, Price, count);
				  cart.push(item);
				  saveCart();
				}
				// Set count from item
				obj.setCountForItem = function(name, count) {
				  for(var i in cart) {
					if (cart[i].name === name) {
					  cart[i].count = count;
					  break;
					}
				  }
				};
				// Remove item from cart
				obj.removeItemFromCart = function(name) {
					for(var item in cart) {
					  if(cart[item].name === name) {
						cart[item].count --;
						if(cart[item].count === 0) {
						  cart.splice(item, 1);
						}
						break;
					  }
				  }
				  saveCart();
				}
			  
				// Remove all items from cart
				obj.removeItemFromCartAll = function(name) {
				  for(var item in cart) {
					if(cart[item].name === name) {
					  cart.splice(item, 1);
					  break;
					}
				  }
				  saveCart();
				}
			  
				// Clear cart
				obj.clearCart = function() {
				  cart = [];
				  saveCart();
				}
			  
				// Count cart 
				obj.totalCount = function() {
				  var totalCount = 0;
				  for(var item in cart) {
					totalCount += cart[item].count;
				  }
				  return totalCount;
				}
			  
				// Total cart
				obj.totalCart = function() {
				  var totalCart = 0;
				  for(var item in cart) {
					totalCart += cart[item].Price * cart[item].count;
				  }
				  return Number(totalCart.toFixed(2));
				}
			  
				// List cart
				obj.listCart = function() {
				  var cartCopy = [];
				  for(i in cart) {
					item = cart[i];
					itemCopy = {};
					for(p in item) {
					  itemCopy[p] = item[p];
			  
					}
					itemCopy.total = Number(item.Price * item.count).toFixed(2);
					cartCopy.push(itemCopy)
				  }
				  return cartCopy;
				}
			  
				// cart : Array
				// Item : Object/Class
				// addItemToCart : Function
				// removeItemFromCart : Function
				// removeItemFromCartAll : Function
				// clearCart : Function
				// countCart : Function
				// totalCart : Function
				// listCart : Function
				// saveCart : Function
				// loadCart : Function
				return obj;
			  })();
			  
			  
			  // *****************************************
			  // Triggers / Events
			  // ***************************************** 
			  // Add item
			  $('.add-to-cart').click(function(event) {
				event.preventDefault();
				var name = $(this).data('name');
				var Price = Number($(this).data('Price'));
				shoppingCart.addItemToCart(name, Price, 1);
				displayCart();
			  });
			  
			  // Clear items
			  $('.clear-cart').click(function() {
				shoppingCart.clearCart();
				displayCart();
			  });
			  
			  
			  function displayCart() {
				var cartArray = shoppingCart.listCart();
				var output = "";
				for(var i in cartArray) {
				  output += "<tr>"
					+ "<td>" + cartArray[i].name + "</td>" 
					+ "<td>(" + cartArray[i].Price + ")</td>"
					+ "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
					+ "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
					+ "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
					+ "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
					+ " = " 
					+ "<td>" + cartArray[i].total + "</td>" 
					+  "</tr>";
				}
				$('.show-cart').html(output);
				$('.total-cart').html(shoppingCart.totalCart());
				$('.total-count').html(shoppingCart.totalCount());
			  }
			  
			  // Delete item button
			  
			  $('.show-cart').on("click", ".delete-item", function(event) {
				var name = $(this).data('name')
				shoppingCart.removeItemFromCartAll(name);
				displayCart();
			  })
			  
			  
			  // -1
			  $('.show-cart').on("click", ".minus-item", function(event) {
				var name = $(this).data('name')
				shoppingCart.removeItemFromCart(name);
				displayCart();
			  })
			  // +1
			  $('.show-cart').on("click", ".plus-item", function(event) {
				var name = $(this).data('name')
				shoppingCart.addItemToCart(name);
				displayCart();
			  })
			  
			  // Item count input
			  $('.show-cart').on("change", ".item-count", function(event) {
				 var name = $(this).data('name');
				 var count = Number($(this).val());
				shoppingCart.setCountForItem(name, count);
				displayCart();
			  });
			  
			  displayCart();
			  