const RecipesModel = require('../Models/RecepieModel');

//Get All Recpies
const getAllRecepies = async (req, res) => {
  try {
    const recepies = await RecipesModel.find();
    res.status(200).json(recepies);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

//Create a new Recpie
const CreateRecepie = async (req, res) => {
  try {
    const {
      name,
      ingredients,
      instructions,
      imageUrl,
      cookingTime,
      userOwner,
    } = req.body;

    // Check for missing fields
    if (
      !name ||
      !ingredients ||
      !instructions ||
      !imageUrl ||
      !cookingTime ||
      !userOwner
    ) {
      return res.status(400).json({ status: false, message: 'Missing fields' });
    }

    // Create a new recipe
    const newRecipe = await RecipesModel.create({
      name,
      ingredients,
      instructions,
      imageUrl,
      cookingTime,
      userOwner,
    });

    // Return the created recipe
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//Update the recepie
const updateRecepie = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update recipe.' });
  }
};

module.exports = { getAllRecepies, CreateRecepie, updateRecepie };
