import Image from "next/image";
import Profile from "../../../public/profile.png"
import Link from "next/link";

export default function Deck() {
    return (
        <div class="w-[18rem] h-[36rem] hover:shadow rounded divide-black divide-y-2 border-2 border-black bg-white">
            <div class="">
                <Image src={Profile} width={500} height={500} alt="Picture of the author" />
            </div>
            <div class="p-4">
                <h1 class="font-bold text-xl font-display text-black">Blockchain Trillema</h1>
                <p class="xl:text-l tracking-tight text-black mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>            
                <p class="xl:text-l tracking-tight text-black mt-3">40 Cards </p>
                <p class="xl:text-l tracking-tight text-black mt-3">120 Entrolled </p>
                <p class="xl:text-l tracking-tight text-black mt-3">Intermediate </p>
                <button class="bg-lila-500 border-2 border-black rounded-lg w-24 h-10 parent-center"><Link href="">Learn</Link></button>
            </div>
        </div>
    );
  };