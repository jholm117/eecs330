const ingredients = {
	"chickenThighs": {
		name: "Chicken Thighs (Bone-in)",
		units: "pounds",
	},
	"ginger": {
		name: "Ginger",
		units: "tablespoons",
	},
	"soy": {
		name: "Soy Sauce",
		units: "tablespoons",
	},
	"broccoli": {
		name: "Broccoli",
		units: "crowns",
	},
	"garlic":{
		name: "Garlic",
		units: "cloves",
	},	
} 
const recipes = {
	"gingerSoyChicken" : {
		name: "Ginger Soy Chicken",
		id: "gingerSoyChicken",
		imgSrc: "images/chicken.jpg",
		cookTime: "30 minutes",
		calories: "600 calories",
		tags: ["","Asian","Cheap"],
		ingreds: [
			{ item: ingredients.chickenThighs, amount: 4 },
			{ item: ingredients.ginger, amount: 4 },
			{ item: ingredients.soy, amount: 4 },
		],
	},
	"garlicRoastedBroccoli" : {
		name: "Garlic Roasted Broccoli",
		id: "garlicRoastedBroccoli",
		imgSrc: "images/garlicRoastedBroccoli.jpg",
		cookTime: "20 minutes",
		calories: "150 calories",
		tags: ["","Vegetarian"],
		ingreds: [
			{ item: ingredients.garlic, amount: 2 },
			{ item: ingredients.broccoli, amount: 4 },
		],
	},
	"squashTaco" : {
		name: "Roasted Butternut Squash Tacos",
		id: "squashTaco",
		imgSrc: "images/squashTaco.jpg",
		cookTime: "50 minutes",
		calories: "400 calories",
		tags: ["","Mexican","Vegetarian","Cheap"],
		ingreds: [
			// { item: ingredients.chickenThighs, amount: 4 },
		],
	},
	"shrimpSoup" : {
		name: "Shrimp Tomato Soup",
		id: "shrimpSoup",
		imgSrc: "images/shrimpSoup.jpg",
		cookTime: "50 minutes",
		calories: "520 calories",
		tags: ["","Fusion"],
		ingreds: [
			{ item: ingredients.chickenThighs, amount: 4 },
		],
	},
	"porkChop" : {
		name: "Cinnamon Chipotle Pork Chops",
		id: "porkChop",
		imgSrc: "images/porkChop.jpg",
		cookTime: "25 minutes",
		calories: "800 calories",
		tags: ["","Mexican","Fusion"],
		ingreds: [
			{ item: ingredients.chickenThighs, amount: 4 },
		],
	},
}


export default recipes