export default async function Card() {
    const data = await getData();
    return (
        <div class="w-[55rem] h-[33rem] shadow rounded-xl p-4 lg:p-12 border-2 border-black bg-yellow-500">
            <div class>
              <h1 class="font-bold text-3xl font-display text-black">{card.title}</h1>
              <p class="xl:text-xl tracking-tight text-black mt-3">{card.content}</p>
            </div>
          </div>
    );
};

async function getData() {
  const response = await fetch('https://api.github.com/users/learnwebcode')
 
  if (!response.ok) {
    console.log('Failed to fetch data')
  }
 
  return response.json()
}
