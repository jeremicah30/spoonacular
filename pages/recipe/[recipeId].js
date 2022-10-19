const RecipeItem = ({ recipe }) => {
  console.log("hi", recipe.extendedIngredients[0].image);
  return <div>{recipe.extendedIngredients[0].image}</div>;
};
export default RecipeItem;

export const getServerSideProps = async (context) => {
  console.log(context);
  const { recipeId } = context.query;
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.NEXT_APP_API_KEY}`
  );
  const recipe = await res.json();

  return {
    props: {
      recipe,
    },
  };
};
