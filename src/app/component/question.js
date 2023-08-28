export default function Question() {
  return (
    <div class="w-[55rem] h-[33rem] divide-y-2 divide-black shadow rounded-xl border-2 border-black bg-yellow-200">
        <div class="bg-blue-200 rounded-t-lg">
            <p class="ps-8 pb-2 pt-4">Question 1 of 10</p>
            <div class="font-bold text-2xl font-display text-black pb-4 ps-8">Q1 Which is NOT one of The Blockchain Trillema?</div>
        </div>
        <div class="text-xl lg:p-12 flex flex-col space-y-4">
            <button class="text-black items-center shadow-[5px_5px_black] inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out hover:text-white transform transition hover:shadow-none border-2 duration-200 hover:bg-red-900 py-3 rounded-xl w-full"><div class="absolute inset-y-0 left-0 flex py-1.5 pl-1.5"><kbd class="inline-flex items-center rounded-lg border-0 bg-black p-4 font-sans text-s text-white">A</kbd></div> Security</button>
            <button class="text-black items-center shadow-[5px_5px_black] inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out hover:text-white transform transition hover:shadow-none border-2 duration-200 hover:bg-red-900 py-3 rounded-xl w-full"><div class="absolute inset-y-0 left-0 flex py-1.5 pl-1.5"><kbd class="inline-flex items-center rounded-lg border-0 bg-black p-4 font-sans text-s text-white">B</kbd></div> Scalability</button>
            <button class="text-black items-center shadow-[5px_5px_black] inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out hover:text-white transform transition hover:shadow-none border-2 duration-200 hover:bg-red-900 py-3 rounded-xl w-full"><div class="absolute inset-y-0 left-0 flex py-1.5 pl-1.5"><kbd class="inline-flex items-center rounded-lg border-0 bg-black p-4 font-sans text-s text-white">C</kbd></div> Automation</button>
            <button class="text-black items-center shadow-[5px_5px_black] inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out hover:text-white transform transition hover:shadow-none border-2 duration-200 hover:bg-red-900 py-3 rounded-xl w-full"><div class="absolute inset-y-0 left-0 flex py-1.5 pl-1.5"><kbd class="inline-flex items-center rounded-lg border-0 bg-black p-4 font-sans text-s text-white">D</kbd></div> Decentralization</button>
        </div>
     </div>
  );
};