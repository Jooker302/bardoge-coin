import Image from "next/image";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div
        id="socialbar"
        class="flex justify-center bg-red-500 py-1 px-4 items-center"
      >
        <div className="flex justify-between">
          <a className="m-2" href="https://t.me/pinkbird">
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              style={{ color: "#ffffff", width: "24px", height: "24px" }}
            />
          </a>
          <a className="m-2" href="https://t.me/pinkbird">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              style={{ color: "#ffffff", width: "24px", height: "24px" }}
            />
          </a>
        </div>
      </div>

      <div
        id="mainbar"
        class="flex justify-between bg-orange-500 py-1 px-4 items-center"
      >
        <div>
          <img className="w-32 h-32" src="/main.jpeg" />
        </div>
        <div className="flex justify-center p-4">
          <a className="px-2 md:text-2xl" href="">
            Home
          </a>
          <a className="px-2 md:text-2xl" href="">
            About
          </a>
          <a className="px-2 md:text-2xl" href="">
            Team
          </a>
        </div>
      </div>

      <div id="intro" className="flex justify-between p-4 flex-wrap">
        <div className="md:w-1/2">
          <img className="md:w-96 md:h-96 md:ml-28" src="/main.jpeg" />
        </div>
        <div className="md:w-1/2 px-4 py-2">
          <h2 className="text-5xl font-bold underline">BARDOGE</h2>
          <p className="p-4 pt-8 text-xl">
            Introducing BARDOGE, a memecoin that ingeniously merges the worlds
            of Barbie and Doge, resulting in a captivating and contemporary
            cryptocurrency phenomenon. The coin's logo is a delightful fusion of
            Barbie's iconic outline and Doge's endearing Shiba Inu, embodying
            the essence of both cultural symbols. BARDOGE sets out to combine
            Barbie's sophistication and trendsetting allure with Doge's playful
            and meme-centric charm.
          </p>
          <div className="flex justify-center my-3">
            <button className="px-4 py-2 bg-red-400 rounded-lg">
              About Us
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center py-8 flex-wrap">
        <div class="w-full md:w-1/4 my-6 md:my-0 bg-white shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 mt-4">Launching On</h2>
            <p class="text-gray-600">Bardoge is listed on Arbitrum Chain</p>
          </div>
        </div>

        <div class="w-full md:w-1/4 bg-white my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 mt-4">
              Estimated Launch Date
            </h2>
            <p class="text-gray-600">
              Bardoge is going to launch on August 17, 2023
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/4 bg-white my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 mt-4">Token Symbol</h2>
            <p class="text-gray-600">Bardoge token symbol is $BDOGE</p>
          </div>
        </div>
      </div>
    </>
  );
}
