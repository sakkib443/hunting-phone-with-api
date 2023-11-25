

const loadPhone =async (sharchText='iph')=> {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${sharchText}`);
    const data = await (res.json())
    const phones = data.data;
    console.log(phones)
    displayPhones(phones)
}


const displayPhones = (phones) => {

        // step 1
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent ='';

    // show more button handle

    const showMoreBtnHandle = document.getElementById('show-more-btn')
    if (phones.length > 12){
        showMoreBtnHandle.classList.remove('hidden');
    }
    else{
        showMoreBtnHandle.classList.add('hidden')
    }

    
    phones = phones.slice(0,12);
    phones.forEach(phone => {
        console.log(phone)
       
        // strp 2
        const phoneCard = document.createElement('div')
        phoneCard.classList = ` card border-2 p-2 border-black-5  card-compact w-72 bg-base-100 shadow-xl `

        // step 3
        phoneCard.innerHTML = `
        
           <figure><img class="w-6/12" src="${phone.image}" alt="Shoes" /></figure>
           <div class="card-body">
           <h2 class="card-title">${phone.phone_name}</h2>           
           <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
           <button class="btn btn-primary">Buy Now</button>
         </div>
        </div>
        
        `
        // step 4
        phoneContainer.appendChild(phoneCard)

    });
}

// handle sharch function
const handleSharch = () => {
    const sharchInput = document.getElementById('sharch-input')
    const sharchText = sharchInput.value 
    console.log('sakib al hasan is agood boy')
    loadPhone(sharchText)
}

loadPhone()
