import Image from "next/image";
import Link from "next/link";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      {/* <Link href="/recipe/id" as={`/recipe/${recipe.id}`}>
        <a>
          <h1>{recipe.title}</h1>
          <Image src={recipe.image} alt="" width={200} height={200} />
        </a>
      </Link> */}

      <Link href={`/recipe/${recipe.id}`}>
        <a href="">
          <h1>{recipe.title}</h1>
          <Image src={recipe.image} alt="" width={200} height={200} />
        </a>
      </Link>
    </div>
  );
};
export default RecipeItem;
