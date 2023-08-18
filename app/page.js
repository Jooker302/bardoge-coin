import Image from "next/image";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div
        id="socialbar"
        class="flex justify-center bg-[#DE7596] py-1 px-4 items-center"
      >
        <div className="flex justify-between">
          <a
            className="m-2"
            href="https://twitter.com/Bardoge313?t=5Z9gymFBFHN_UjcFMVdZGQ&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="text-white hover:text-[#BFE963]"
              style={{  width: "24px", height: "24px" }}
            />
          </a>
          <a className="m-2" href="https://t.me/bardoge">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="text-white hover:text-[#BFE963]"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>
      </div>

      <div
        id="mainbar"
        class="flex justify-between py-1 px-4 items-center"
      >
        <div>
          <img className="w-32 h-32 rounded-full" src="/main.jpeg" />
        </div>
        <div className="flex justify-center p-4">
          {/* <a className="px-2 md:text-2xl hover:text-[#DE7596]" href="">
            Home
          </a>
          <a className="px-2 md:text-2xl hover:text-[#DE7596]" href="">
            About
          </a> */}
          <a className="px-2 md:text-2xl hover:text-[#DE7596]" href="#team">
            Team
          </a>
        </div>
      </div>

      <div id="intro" className="flex justify-between p-4 flex-wrap">
        <div className="md:w-1/2">
          <img className="md:w-96 md:h-96 md:ml-28" src="/main.jpeg" />
        </div>
        <div className="md:w-1/2 px-4 py-2">
          <h2 className="text-white text-5xl font-bold underline mt-4 md:mt-0">BARDOGE</h2>
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
            <a href="#about" className="px-4 py-2 cursor-pointer bg-[#DE7596] text-white hover:bg-[#D1668A] rounded-lg">
              About Us
            </a>
          </div>
        </div>
      </div>

      <div id="boxes" class="md:mt-10 mt-6 flex justify-center py-8 flex-wrap">
        <div class="w-full md:w-1/4 my-6 md:my-0 bg-[#BFE963] shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4">Token Supply</h2>
            <p class="font-semibold">Bardoge has a supply of 500000</p>
          </div>
        </div>

        <div class="w-full md:w-1/4 bg-[#BFE963] my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4">
               FairLaunch Date
            </h2>
            <p class="font-semibold">
              Bardoge is going to fairlaunch on August 23, 2023
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/4 bg-[#BFE963] my-6 md:my-0 shadow-md rounded-lg md:mx-4">
          <div class="relative">
            <img
              src="/main.jpeg"
              alt="Image 2"
              class="absolute top-0 w-12 h-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
          </div>
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2 mt-4">Token Symbol</h2>
            <p class=" font-semibold">Bardoge token symbol is $BDOGE</p>
          </div>
        </div>
      </div>

      <div id="banner" className="py-10 md:pb-14 flex items-center justify-center">
        <img
          src="/cover.jpeg"
          alt="Pulsating Image"
          className="animated-image"
        />
      </div>

      <div id="about" className="p-6 flex justify-center flex-wrap">
        <div className="bg-[#DE7596] rounded-lg flex justify-center flex-col items-center shadow-md m-2 p-4 md:w-2/5">
          <p className="text-3xl font-bold">About </p>
          <p className="p-1">
            The coin's community, fondly known as "BARDOGE Pals," fosters a
            welcoming and all-encompassing environment where enthusiasts of all
            backgrounds unite to revel in this delightful amalgamation of style
            and digital currency. Embrace the BARDOGE trend and be a part of
            this extraordinary fusion of elegance and online subculture!
          </p>
        </div>
        <div className="bg-[#DE7596] rounded-lg flex justify-start flex-col items-center p-4 md:w-2/5 shadow-md m-2">
          <p className="text-3xl font-bold">Coin Launch on </p>
          <p className="p-1 italic font-bold">Bardoge is listed on Arbitrum Chain.</p>
          <p>
            Arbitrum is a layer 2 scaling solution for Ethereum, designed to
            improve scalability and reduce transaction fees. It aims to enhance
            the Ethereum ecosystem by enabling faster and more cost-efficient
            smart contract execution
          </p>
        </div>
      </div>

      <section class="py-12 px-4 text-center" id="team">
        <h2 class="text-3xl font-semibold mb-8">Meet Our Partners</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class=" rounded-lg shadow-md p-6 bg-[#DE7596]">
            <a href="https://dx.app">
            <img
              src="dxsale.png"
              alt="Team Member 1"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            </a>
            <h3 class="text-lg font-semibold mb-2">DxSale</h3>
            {/* <p class="text-gray-600">Lead Designer</p> */}
          </div>

          <div class="bg-[#DE7596] rounded-lg shadow-md p-6 ">
            <img
              src="https://th.bing.com/th/id/OIP.1wTTp6-XPR-g6PS8D8ZAqAHaDt?pid=ImgDet&rs=1"
              alt="Team Member 2"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">BNB Chain</h3>
            {/* <p class="text-gray-600">Senior Developer</p> */}
          </div>

          <div class="bg-[#DE7596] rounded-lg shadow-md p-6">
            <img
              src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1"
              alt="Team Member 3"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Chain Link</h3>
            {/* <p class="text-gray-600">Marketing Manager</p> */}
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          <div class="bg-[#DE7596] rounded-lg shadow-md p-6">
            <img
              src="https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png"
              alt="Team Member 1"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">ARB</h3>
            {/* <p class="text-gray-600">Lead Designer</p> */}
          </div>

          <div class="bg-[#DE7596] rounded-lg shadow-md p-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="Team Member 2"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Coinbase</h3>
            {/* <p class="text-gray-600">Senior Developer</p> */}
          </div>

          <div class="bg-[#DE7596] rounded-lg shadow-md p-6">
            <img
              src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0"
              alt="Team Member 3"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">1inch</h3>
            {/* <p class="text-gray-600">Marketing Manager</p> */}
          </div>
        </div>
      </section>


      <div id="footer" className="p-4 py-16 bg-[#BFE963] flex justify-center flex-col items-center">
        <p className="text-3xl font-bold">Social Accounts</p>
        <div className="flex justify-between mt-6">
          <a
            className="m-2"
            href="https://twitter.com/Bardoge313?t=5Z9gymFBFHN_UjcFMVdZGQ&s=09"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#DE7596]"
              
            />
          </a>
          <a className="m-2" href="https://t.me/bardoge">
            <FontAwesomeIcon
              icon={faTelegram}
              size="lg"
              className="w-8 h-8 text-white hover:text-[#DE7596]"
             
            />
          </a>
        </div>
      </div>

      <div
        id="endbar"
        class="flex justify-center bg-[#DE7596] py-1 px-4 items-center"
      >
        <p className="font-bold">Listed on Arbitrum Chain</p>
      </div>


    </>
  );
}
