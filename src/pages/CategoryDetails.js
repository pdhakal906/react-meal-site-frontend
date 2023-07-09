import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMealsCategoryDetailsQuery } from '../features/mealApi';

const CategoryDetails = () => {
  const nav = useNavigate();
  const { category } = useParams();
  const { data, isLoading, isError, error } = useMealsCategoryDetailsQuery(category)

  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div className='bg-white text-[#2D2013]'>
      <h1 className='text-2xl text-center font-extrabold'>Dishes for {category}</h1>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1  gap-5 p-5'
      >
        {data.meals.map((meals) => {
          return (

            <div key={meals.idMeal} onClick={() => nav(`/mealdetails/${meals.idMeal}`)} className='shadow-2xl p-5 space-y-5'>

              <img className='h-[300px] w-[300px]' src={meals.strMealThumb} alt="" />
              <h1 className='text-2xl'>{meals.strMeal}</h1>
            </div>
          )
        })}

      </div>


    </div>
  )

}

export default CategoryDetails
