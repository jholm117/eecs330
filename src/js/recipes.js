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
	"squash": {
		name: "Butternut Squash",
		units: "",
	},
	"taco": {
		name: "Taco Shell",
		units: "",
	},
	"shrimp": {
		name: "Shrimp",
		units: "pounds",
	},
	"tomato": {
		name: "Tomato",
		units: "",
	},
	"porkChop": {
		name: "Pork Chop",
		units: "pounds",
	},
	"cinnamon": {
		name: "Cinnamon",
		units: "tablespoons",
	},
	"chipotle": {
		name: "Chipotle Peppers",
		units: "",
	},
	"beef": {
		name: "Ground Beef",
		units: "pounds",
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
			{item: ingredients.squash, amount: 1},
			{item: ingredients.taco, amount: 2},
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
			{ item: ingredients.shrimp, amount: 1},
			{ item: ingredients.tomato, amount: 1},
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
			{ item: ingredients.porkChop, amount: 2},
			{ item: ingredients.cinnamon, amount: 2},
			{ item: ingredients.chipotle, amount: 1},
		],
	},
	"tacoSalad" : {
		name: "Taco Salad",
		id: "tacoSalad",
		imgSrc: "images/tacoSalad.jpg",
		cookTime: "30 minutes",
		calories: "450 calories",
		tags: ["", "Mexican", "Cheap"],
		ingreds: [
			{ item: ingredients.taco, amount: 2},
			{ item: ingredients.beef, amount: 1},
		],
	},
	"spaghettiMeatballs" : {
		name: "Spaghetti and Meatballs",
		id: "spaghettiMeatballs",
		imgSrc: "images/spaghettiMeatballs.jpg",
		cookTime: "30 minutes",
		calories: "660 calories",
		tags: [""],

	},
	"grilledChicken" : {
		name: "Grilled Chicken Breast",
		id: "grilledChicken",
		imgSrc: "images/grilledChicken.jpg",
		cookTime: "20 minutes",
		calories: "240 calories",
		tags: ["", "Cheap", "Healthy"]},
	"vegeLoMein" : {
		name: "Vegetable Lo Mein",
		id: "vegeLoMein",
		imgSrc: "images/vegeLoMein.jpg",
		cookTime: "15 minutes",
		calories: "170 calories",
		tags: ["", "Vegetarian", "Asian"]},
	"teriyakiBeef" : {
		name: "Teriyaki Beef",
		id: "teriyakiBeef",
		imgSrc: "images/teriyakiBeef.jpg",
		cookTime: "25 minutes",
		calories: "520 calories",
		tags: ["", "Asian"]},
	"chickenNoodleSoup" : {
		name: "Chicken Noodle Soup",
		id: "chickenNoodleSoup",
		imgSrc: "images/chickenNoodleSoup.jpg",
		cookTime: "30 minutes",
		calories: "160 calories",
		tags: ["", "Healthy", "Cheap"]},
	"whiteRice" : {
		name: "White Rice",
		id: "whiteRice",
		imgSrc: "images/whiteRice.jpg",
		cookTime: "20 minutes",
		calories: "125 calories",
		tags: ["", "Vegetarian", "Cheap", "Healthy"]},
	"chickenStirFry" : {
		name: "Chicken Stir Fry",
		id: "chickenStirFry",
		imgSrc: "images/chickenStirFry.jpg",
		cookTime: "25 minutes",
		calories: "470 caories",
		tags: ["", "Asian", "Healthy"]},
}


export default recipes