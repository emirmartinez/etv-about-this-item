function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var description = [
  `Throw it all the way back to the first movie in the iconic epic space opera franchise with this Star Wars Short-Sleeve Graphic T-Shirt. Made with a blend of soft fabrics for comfortable wear, this Star Wars shirt features the iconic image from the A New Hope movie poster — Luke Skywalker pointing a blaster straight ahead surrounded by Princess Leia, Darth Vader, the Death Star, Han Solo, Obi-Wan and more imagery from the first film. Complete with a stylish monochromatic design for a cool look you'll love to wear, this A New Hope shirt is a must-have addition to any super fan's collection of Star Wars memorabilia.`,
  `From a '90s movie night to a leisurely weekend morning, rep your favorite Spielberg classic with this men's Jurassic Park Short-Sleeve Graphic T-Shirt. This heather charcoal graphic tee features a solid backdrop decorated with a vibrant print of the Jurassic Park logo in red, black and yellow, instantly bringing a bold, authentic look to your everyday wardrobe. It's cut from a soft, breathable fabric for comfortable wear, and the crewneck design pairs with just about any bottoms for versatile styling. Wear it with jeans and sneakers, or throw it on underneath a button-down flannel. Either way, you'll take on any occasion in fun style.`,
  `Pay tribute to Steve Rogers in the Captain America Logo Short-Sleeve Graphic T-Shirt from Marvel. Made from a breathable fabric, this men's graphic tee keeps you cool and kicking wherever you go. Fashioned in a heather gray hue, it features the Captain's iconic logo in gray to help you flaunt your Marvel fandom. Whether you pair it with athletic shorts on a leisurely day at home or with skinny jeans and a leather jacket for lunch with friends, it's sure to bring cool superhero vibes to your day.`,
  `Put your timeless style and comic book fandom on display with this men's Marvel Graphic T-Shirt. Designed with a heathered graphite color scheme, this short-sleeve graphic tee features a circular image with red "Marvel" text and a collage of iconic Marvel heroes including Hulk, Captain America, Daredevil, Black Panther, Iron Man and many more. The authentic old-school imagery lends a classic vibe you're sure to appreciate, and the crew-neck design pairs with a variety of bottoms. Plus, the cotton-blend fabric provides softness and breathability, helping you stay cool and comfortable throughout your day — whether you're hanging out with friends or relaxing at home.`,
  `For a versatile wardrobe option that helps you show off your favorite superhero, look no further than this men's Superman Graphic T-Shirt from DC Comics. Featuring a textured navy background decorated with Superman's iconic yellow and red "S" insignia, this Superman T-shirt combines simple style with authentic comic book flair for a timeless look. The simple pullover design works for standalone wear or layering, making this shirt an easy option for casual weekends or nights on the town. Wear it underneath a flannel with chinos, or throw it on with denim shorts. Either way, the soft, breathable fabric will help you rep the iconic hero in cool, comfortable style.`,
  `From running errands on an off-duty day to meeting old friends in the local pub for a round of drinks on the wEEKend, fill your day with superhero flair with the Marvel Avengers Short-Sleeve Graphic T-Shirt. Designed to keep you comfortable in whatever you're doing, thanks to its cotton-blend construction, this men's short-sleeve T-shirt features a classic crewneck design that makes it a great pick for a variety of bottoms. Featuring the Avengers "A" logo decorated with comic-inspired Avengers prints on a heathered gray background, you can pair it with dark-wash jeans on a regular day or layer it under a button-down shirt with chinos for a casual and laid-back look.`,
  `If the phrases "Bears, beets, Battlestar Galactica", "That's what she said" and "The Dundies" make you chuckle, then this The Office Dunder Mifflin Logo T-Shirt is a must-have addition to your graphic tee collection. Made with a cotton blend for softness and durability, this The Office T-shirt features the iconic "Dunder Mifflin Inc. Paper Company" logo in a distressed white print on a rich, heathered blue fabric for a perfectly simplistic and thematic design. When you're having a day that calls for repping your favorite fictional paper company with beloved characters like the Nard Dog, Big Tuna, Michael Scarn and Pam-a-lam-a-ding-dong, this Dunder Mifflin T-shirt will be your new favorite go-to.`,
  `Make sure you're always ready to do the Kessel Run as quickly as possible by wearing this Star Wars Millennium Falcon Short-Sleeve Graphic T-Shirt. Made with 100% cotton for ultimate softness and durability, this Star Wars graphic T-shirt features a topside view of the Falcon against a multicolored stripe background in retro-style colors for a vintage feel. Complete with "Star Wars" above the print in a retro font, this Millennium Falcon T-shirt is perfect for wearing when you binge-watch all the movies or head out to catch the latest film in theaters.`,
  `If you know that the saying "All you need is love" is false, and what you do need are the four basic human necessities of air, water, food and shelter, then this The Office Short-Sleeve Graphic T-Shirt is the perfect pick for your casual wardrobe. This graphic tee features a cool, line-style print of Dwight's hair and glasses above the word "False" in a bold font for a look that's worthy of any trip to Schrute Farms or your local dojo. With a monochromatic gray design for a look that's easy to pair with any of your bottoms, this Dwight Schrute shirt is the perfect pick for keeping secrets from your computer — or when you're 99% sure you see the real Ben Franklin.`,
  `Show off your inclination towards space missions in the Short-Sleeve Graphic T-Shirt from NASA. Crafted from a breathable fabric, this men's short-sleeve T-shirt feels soft to the touch and lets you breathe freely wherever your day takes you. Fashioned in a heather gray color, it features a retro-inspired print of a NASA Space Shuttle, bringing authentic vibes to your day. Simply pair it with jeans and sneakers for a laid-back look you won't need any science in decoding.`
]

var fitStyle = ['100% cotton construction for breathable comfort', 
'Short sleeves are ideal for layering and warm-weather wear', 
'Pairs with a variety of bottoms for versatile wear', 
'Can be layered under hoodies or jackets in cool weather',
'Cut from a soft, breathable fabric for all-day comfort',
'Crewneck design pairs with a variety of bottoms for versatile wear',
'Breathable fabric keeps you cool and comfy all day',
'Monochromatic gray design pairs well with a variety of casual ensembles'
]

var color = ['black', 'white', 'green', 'grey', 'orange', 'space-gray', 'red', 'rainbow']

var typeofMaterial = ['50% Cotton, 50% Polyester', '100 % Cotton']

var week = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

var name = ['John', 'Steve', 'Amy', "Maria", 'Brian', 'Richie', 'Alice', 'Tony']

// var details = {
//   'Fit & style': [fitStyle[getRandomInt(8)], fitStyle[getRandomInt(8)], fitStyle[getRandomInt(8)]],
//   'Description': description[getRandomInt(10)],
//   'Sizing': 'Men',
//   'Material': typeofMaterial[getRandomInt(2)],
//   'Length': 'At hip',
//   'Features': 'Short sleeve, Pullover',
//   'Neckline': 'Crew',
//   'Item Style': 'Graphic tees',
//   'Garment sleeve style': 'Basic sleeve',
//   'Product color name': color[getRandomInt(8)],
//   'Care and Cleaning': 'Machine wash & Tumble dry',
//   'TCIN': getRandomInt(900000000),
//   'UPC': getRandomInt(1000000000000),
//   'Item Number (DPCI)': getRandomInt(1000000000000000),
//   "Shipping options": `Get it by ${week[getRandomInt(7)]}, May ${getRandomInt(31)} with free 2-day shipping`,
//   'Shipping details': `Estimated ship dimensions: ${getRandomInt(15)}inches length x ${getRandomInt(10)} inches width x ${getRandomInt(3)} inches height
//   Estimated ship weight: ${getRandomInt(3)} pounds`,
//   'Return details': `This item can be returned to any Target store or Target.com.
//   This item must be returned within 90 days of the in-store purchase, ship date, or online order pickup. See return policy for details.
//   See the return policy for complete information.`,
//   'Q&A': [{
//     Question: 'What does it come with?',
//     username: name[getRandomInt(8)],
//     date: getRandomInt(10),
//     answers: [{ answer: 'Single shirt' }]
//   },{
//     Question: 'Does it come with a warranty?',
//     username: name[getRandomInt(8)],
//     date: getRandomInt(10),
//     answers: [{ answer: 'Yes, 30 day warranty' }]
//   }]
// }

const dataGenerator = () => {
  let data = []
  let count = 0;
  while (count < 10) {
   var obj = {
    'Fit & style': [fitStyle[getRandomInt(8)], fitStyle[getRandomInt(8)], fitStyle[getRandomInt(8)]],
    'Description': description[getRandomInt(10)],
    'Sizing': 'Men',
    'Material': typeofMaterial[getRandomInt(2)],
    'Length': 'At hip',
    'Features': 'Short sleeve, Pullover',
    'Neckline': 'Crew',
    'Item Style': 'Graphic tees',
    'Garment sleeve style': 'Basic sleeve',
    'Product color name': color[getRandomInt(8)],
    'Care and Cleaning': 'Machine wash & Tumble dry',
    'TCIN': getRandomInt(900000000),
    'UPC': getRandomInt(1000000000000),
    'Item Number (DPCI)': getRandomInt(1000000000000000),
    "Shipping options": `Get it by ${week[getRandomInt(7)]}, May ${getRandomInt(31)} with free 2-day shipping`,
    'Shipping details': `Estimated ship dimensions: ${getRandomInt(15)}inches length x ${getRandomInt(10)} inches width x ${getRandomInt(3)} inches height
    Estimated ship weight: ${getRandomInt(3)} pounds`,
    'Return details': `This item can be returned to any Target store or Target.com.
    This item must be returned within 90 days of the in-store purchase, ship date, or online order pickup. See return policy for details.
    See the return policy for complete information.`,
    'Q&A': [{
      Question: 'What does it come with?',
      username: name[getRandomInt(8)],
      date: getRandomInt(10),
      answers: [{ answer: 'Single shirt' }]
    },{
      Question: 'Does it come with a warranty?',
      username: name[getRandomInt(8)],
      date: getRandomInt(10),
      answers: [{ answer: 'Yes, 30 day warranty' }]
    }]
  }
    data.push(obj)
    count++
  }
  return data
}


module.exports.dataGenerator = dataGenerator

console.log(dataGenerator())