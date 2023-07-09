import React from 'react'
import { useParams } from 'react-router'
import { useMealDetailsQuery } from '../features/mealApi';

const DetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMealDetailsQuery(id);
  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (!data) {
    return null;
  }

  const ingredients = [];
  const measures = [];


  for (let i = 1; i <= Object.keys(data.meals[0]).length; i++) {
    let ingridentKey = `strIngredient${i}`;
    let measureKey = `strMeasure${i}`;

    if (data.meals[0][ingridentKey] && data.meals[0][measureKey]) {
      ingredients.push(data.meals[0][ingridentKey]);
      measures.push(data.meals[0][measureKey]);

    } else {
      break;
    }
  }


  function getYoutubeId(url) {
    var regExp = /v=([^&]+)/;
    var match = url.match(regExp);
    if (match) {
      var youtubeId = match[1];
      return youtubeId;
    } else {
      return "";
    }
  }

  getYoutubeId('https://www.youtube.com/watch?v=4aZr5hZXP_s')

  return (
    <div>
      <div className='sm:grid-cols-1 md:grid-cols-1 grid grid-cols-2'>
        <div className='h-[350px] w-[400px] mt-5 p-5'>
          <h1 className='text-[20px] mb-5'>{data.meals[0].strMeal}</h1>
          <img className='h-[250px] mb-1' src={data.meals[0].strMealThumb} alt="" />
          {/* <h1>{tags[0]} {tags[1]}</h1> */}
        </div>

        <div className='grid grid-cols-2 gap-30 mt-24 p-5'>
          <div>
            <h1>Ingridents:</h1>

            {ingredients.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
          <div>
            <h1>Measure</h1>

            {measures.map((measure, index) => {
              return <p key={index}>{measure}</p>
            })}
          </div>
        </div>

      </div>

      <div className='p-5 mt-5'>
        <h1 className='text-[20px] mb-2'>Instructions:</h1>
        <p className='text-justify'>{data.meals[0].strInstructions}</p>
      </div>

      <div className='flex justify-center p-5 mt-5'>

        <iframe width="560" height="315"
          src={`https://www.youtube.com/embed/${getYoutubeId(data.meals[0].strYoutube)}`}
          title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      </div>

    </div>
  )
}

export default DetailsPage
