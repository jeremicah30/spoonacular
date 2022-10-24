import RecipeList from "./RecipeList";

const Featured = ({ recipes }) => {
  return (
    <>
      <div className="featured text-center">
        <div className="upper mb-3">
          <h1 className="featured--title font-bold text-4xl">
            Featured Recipes
          </h1>
          <p className="text-xl mb-10">
            Here are the featured Products of the week that you can cook with
            our recipe
          </p>
        </div>
        <RecipeList recipes={recipes} />
      </div>
    </>
  );
};
export default Featured;

//Fetch api
export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_APP_API_KEY}`
  );
  const recipes = await res.json();
  console.log(recipes);

  return {
    props: {
      recipes,
    },
  };
};
