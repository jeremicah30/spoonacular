import Image from "next/image";

const RecipeItem = ({ recipe }) => {
  console.log("hi", recipe);
  return <Image src={recipe.image} width={200} height={200} alt="Brocolli" />;
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
