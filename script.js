document.querySelectorAll('.categories li').forEach(category => {
    category.addEventListener('click', () => {
        alert(`${category.innerText} kategorisine yönlendiriliyorsunuz.`);
    });
});


document.querySelectorAll('.card-info').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});


const searchInput = document.querySelector('header input');
const searchContainer = document.createElement('div');
searchContainer.className = 'search-suggestions';
document.querySelector('.input-area').appendChild(searchContainer);

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchContainer.innerHTML = '';
    if (query) {
        ['Kadın', 'Erkek', 'Anne & Çocuk', 'Ev & Yaşam', 'Elektronik'].filter(item => item.toLowerCase().includes(query))
            .forEach(match => {
                const suggestion = document.createElement('div');
                suggestion.innerText = match;
                suggestion.addEventListener('click', () => {
                    searchInput.value = match;
                    searchContainer.innerHTML = '';
                });
                searchContainer.appendChild(suggestion);
            });
    }
});



let cartCount = 0;
const cartIcon = document.querySelector('.fa-cart-shopping');
cartIcon.addEventListener('click', () => {
    cartCount += 1;
    cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Sepetim (${cartCount})`;
});



const specialOffers = ['Kadın Giyim', 'Elektronik Ürünler', 'Ev Dekorasyonu', 'Kozmetik Ürünleri'];
let offerIndex = 0;

setInterval(() => {
    const specialSpan = document.querySelector('.brands div span');
    specialSpan.innerText = specialOffers[offerIndex];
    offerIndex = (offerIndex + 1) % specialOffers.length;
}, 3000);
