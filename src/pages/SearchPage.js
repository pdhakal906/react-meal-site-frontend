import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMealSearchQuery } from '../features/mealApi'

const SearchPage = () => {
  const nav = useNavigate();
  const { query } = useParams();
  const { data, isLoading, isError, error } = useMealSearchQuery(query);

  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }



  if (data?.meals == null) {
    return <h1 className='text-red-600 text-2xl w-[50%] mx-auto mt-11'>Not found try searching again using another query</h1>
  }


  return (
    <div>
      <h1 className='text-2xl'>Search results for: {query}</h1>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1'>
        {data?.meals.map((meals) => {
          return <div key={meals.idMeal} onClick={() => nav(`/mealdetails/${meals.idMeal}`)} className='shadow-2xl p-5 space-y-5'>

            <img className='h-[300px] w-[300px]' src={meals.strMealThumb} alt="" />
            <h1 className='text-2xl'>{meals.strMeal}</h1>
          </div>
        })}
      </div>
    </div>

  )
}

export default SearchPage
