import RecipeItem from "./RecipeItem";

const Recipes = ({ recipes }) => {
  console.log(recipes);
  const recipeRes = recipes.results;
  return (
    <div>
      {recipeRes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
export default Recipes;
