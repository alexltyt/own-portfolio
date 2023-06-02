import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a quidem dicta eveniet modi officia omnis hic at. Est consectetur iure voluptatem totam debitis. Cum nisi, labore et soluta numquam reprehenderit praesentium similique, facilis excepturi quis, in optio eligendi veniam. Sunt, iusto iste ipsa id officiis maxime asperiores deserunt minima.
            </p>
            <br/>
            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perferendis optio qui est facere adipisci officia eaque cum harum inventore, nulla dolores doloribus obcaecati ex asperiores corporis quis deleniti tempora a ullam assumenda commodi repellendus suscipit minima? Provident nam, quos laborum, quidem officiis animi culpa dolores repudiandae nisi a rerum.
            </p>
        </div>
    </div>
  )
}

export default About