import React from "react";
import Image from "next/image";
import Omellete from "../../public/images/image-omelette.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className=" container bg-white p-8 mx-auto max-w-[700px] md:my-12 my-0 rounded-3xl">
        <Image
          className="mx-auto rounded-2xl"
          width={650}
          height={650}
          src={Omellete}
          alt="Omellete Image"
        />
        <h1 className="text-4xl my-8 font-semibold">Simple Omellete Recipe</h1>
        <p className="text-base text-[--wenge-brown]">
          An easy and quick dish, perfeect for any meal. This classic omellete
          combines beaten eggs cooked for perfection, optionally filled with
          your choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-[#fff7fc] rounded-2xl px-5 py-4 my-8">
          <h2 className="text-[--dark-raspberry] font-bold mb-2">
            Preperation Time
          </h2>
          <ul className="ml-5 space-y-1.5 text-sm font-light text-[--wenge-brown]">
            <li>
              <span className="font-semibold">Total:</span> Approximately 10
              minutes
            </li>
            <li>
              <span className="font-semibold">Preparation:</span> 5 minutes
            </li>
            <li>
              <span className="font-semibold">Cooking:</span> 5 minutes
            </li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold text-[--nutmeg] pb-5">Ingredients</h1>
        <ul className="space-y-1.5 pl-5 text-sm text-[--wenge-brown]">
          <li>2-3 large eggs</li>
          <li>Salt, to tase</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings, cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <div className="mt-8">
          <div className="border-t-2"></div>
          <div className="my-7">
            <h1 className="text-3xl font-bold text-[--nutmeg] pb-5">
              Instruction
            </h1>
            <ol className="text-[--wenge-brown] space-y-2.5 text-sm ml-2">
              <div className="flex">
                <span className="numbers">1.</span>
                <li>
                  <span className="font-semibold">Beat the eggs:</span> In a
                  bowl, beat the eggs with a pinch of salt and pepper until they
                  are well mixed. You can add a tablespoon of watre or milk for
                  a fluffier texture.
                </li>
              </div>

              <div className="flex">
                <span className="numbers">2.</span>
                <li>
                  <span className="font-semibold">Heat the pan: </span>
                  Place a non-stick frying pan over a medium heat and add butter
                  or oil.
                </li>
              </div>

              <div className="flex">
                <span className="numbers">3.</span>
                <li>
                  <span className="font-semibold">Cook the omellete:</span> Once
                  the butter is melted and bubbling, pour in the eggs. Tilt the
                  pan to ensure the eggs evenly coat the surface.
                </li>
              </div>

              <div className="flex">
                <span className="numbers">4.</span>
                <li>
                  <span className="font-semibold">
                    Add Fillings(optional):{" "}
                  </span>
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omellete.
                </li>
              </div>

              <div className="flex">
                <span className="numbers">5.</span>
                <li>
                  <span className="font-semibold"> Fold and serve: </span>
                  As the omellete continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide in onto a plate.
                </li>
              </div>

              <div className="flex">
                <span className="numbers">6.</span>
                <li>
                  <span className="font-semibold">Enjoy: </span>
                  Serve hot, with additional salt and pepper if needed.
                </li>
              </div>
            </ol>
          </div>
          <div className="border-t-2"></div>
        </div>

        <h1 className="text-3xl font-bold text-[--nutmeg] py-7">Nurition</h1>
        <p className="text-base text-[--wenge-brown] pb-6">
          The table below shows nutiritional values per serving without the
          additional fillings.
        </p>
        <table className="w-full ">
          <thead>
            <tr></tr>
            <tr></tr>
          </thead>
          <tbody>
            <tr className="border-b-2 m-5 ">
              <td className="text-base text-[--wenge-brown] border-space">
                Calories
              </td>
              <td className="font-semibold text-[--dark-raspberry] border-space">
                277kcal
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="text-base text-[--wenge-brown] border-space">
                Carbs
              </td>
              <td className="font-semibold text-[--dark-raspberry] border-space">
                0g
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="text-base text-[--wenge-brown] border-space">
                Protien
              </td>
              <td className="font-semibold text-[--dark-raspberry] border-space">
                20g
              </td>
            </tr>
            <tr>
              <td className="text-base text-[--wenge-brown] border-space">
                Fat
              </td>
              <td className="font-semibold text-[--dark-raspberry] border-space">
                22g
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hero;
