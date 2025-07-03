require('../models/database');
const Category = require('../models/Category')

exports.homepage = async(req, res) => {

  try {

    const limitNumber = 10;
    const categories = await Category.find({}).limit(limitNumber);

    res.render('index', { title : 'Cooking-Blog - Home', categories });
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured"})
  }

}





// async function insertDymmyCategoryData(){
//   try {
//     await Category.insertMany([
//       // {
//       //   "name": "Thai",
//       //   "image": "thai-food.jpg"
//       // },
//       // {
//       //   "name": "American",
//       //   "image": "american-food.jpg"
//       // }, 
//       // {
//       //   "name": "Chinese",
//       //   "image": "chinese-food.jpg"
//       // },
//       // {
//       //   "name": "Mexican",
//       //   "image": "mexican-food.jpg"
//       // }, 
//       // {
//       //   "name": "Indian",
//       //   "image": "indian-food.jpg"
//       // },
//       // {
//       //   "name": "Spanish",
//       //   "image": "spanish-food.jpg"
//       // }
//     ]);
//   } catch (error) {
//     console.log('err', + error);
//   }
// }

// insertDymmyCategoryData();