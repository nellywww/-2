const bouquets = [
    { 
        id: 1, 
        title: "Красные розы", 
        description: "Букет из 35 красных роз", 
        price: 1200, 
        img: "https://i.pinimg.com/736x/52/2d/8d/522d8dd32eb479bc2fc865345320911e.jpg", 
        vendor_code: "R001" 
    },
    { 
        id: 2, 
        title: "Тюльпаны", 
        description: "Букет из 39 тюльпанов", 
        price: 900, 
        img: "https://i.pinimg.com/736x/c2/18/35/c21835a8ceec813fd7a667493040dd6c.jpg", 
        vendor_code: "T002" 
    },
    { 
        id: 3, 
        title: "Лилии", 
        description: "Букет из 15 лилий", 
        price: 1500, 
        img: "https://i.pinimg.com/736x/6b/07/ac/6b07ac8dfa1476f9da438b1fe20b7a5a.jpg", 
        vendor_code: "L003" 
    },
    { 
        id: 4, 
        title: "Орхидеи", 
        description: "Букет из 5 орхидей", 
        price: 2000, 
        img: "https://i.pinimg.com/736x/f6/e4/54/f6e45463922b386c9efaac9934152445.jpg", 
        vendor_code: "O004" 
    },
    { 
        id: 5, 
        title: 
        "Герберы", 
        description: "Букет из 15 гербер", 
        price: 1100, 
        img: "https://i.pinimg.com/1200x/10/5e/4a/105e4a5eead054aa84ce1c2ae564f273.jpg", 
        vendor_code: "G005" 
    },
    { 
        id: 6, 
        title: "Сирень", 
        description: "Букет из сирени", 
        price: 950, 
        img: "https://i.pinimg.com/736x/95/5e/f6/955ef6fa4c94493900aff995ea51d295.jpg", 
        vendor_code: "S006" 
    }
];

const singles = [
    { 
        id: 7, 
        title: "Роза", 
        description: "Одиночная роза (любой цвет)", 
        price: 150, img: "https://i.pinimg.com/736x/08/24/6a/08246a9a81ed576547f94a8b35f33a1e.jpg", 
        vendor_code: "R007" },
    { id: 8, 
        title: "Тюльпан", 
        description: "Один яркий тюльпан", 
        price: 80, 
        img: "https://i.pinimg.com/736x/28/e9/54/28e954e66b3b8e980bd56537874efa84.jpg", 
        vendor_code: "T008" 
    },
    { 
        id: 9, 
        title: "Лилия", 
        description: "Одиночная лилия", 
        price: 200, 
        img: "https://i.pinimg.com/1200x/2f/b2/78/2fb2783c1657b7619897dc6da930812b.jpg", 
        vendor_code: "L009" 
    },
    { 
        id: 10, 
        title: "Орхидея", 
        description: "Одна орхидея", 
        price: 300, 
        img: "https://i.pinimg.com/736x/2c/94/d1/2c94d1630913dd8f7ad3112fec12f3f2.jpg", 
        vendor_code: "O010" 
    },
    { 
        id: 11, 
        title: "Гербера", 
        description: "Одиночная гербера", 
        price: 120, 
        img: "https://i.pinimg.com/736x/ec/14/fc/ec14fc8b113125f15fd73dcac8137646.jpg", 
        vendor_code: "G011" 
    },
    { 
        id: 12, 
        title: "Сирень", 
        description: "Одиночная сирень", 
        price: 100, 
        img: "https://i.pinimg.com/1200x/0b/70/a9/0b70a9cb2ea8832e7159b5c00dfad8d2.jpg", 
        vendor_code: "S012" }
];

// Создание карточек
const container = document.getElementById("catalog-container");
container.innerHTML = "";

const cart = []; 

function createCards(title, items) {
    const header = document.createElement("h2");
    header.textContent = title;
    header.classList.add("w-100", "text-center", "mt-4");
    container.appendChild(header);

    items.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("d-flex", "flex-column", "m-2", "p-2", "border", "bg-body");
        li.style.width = "220px";

        li.innerHTML = `
            <img src="${product.img}" alt="${product.title}" style="width:100%; border-radius:8px;">
            <h5 class="mt-2 text-center">${product.title}</h5>
            <p class="text-center">${product.description}<br>Цена: ${product.price} ₽</p>
            <input type="hidden" value="${product.vendor_code}">
            <button class="btn btn-success mt-auto add-to-cart">В корзину</button>
        `;

        li.querySelector(".add-to-cart").addEventListener("click", () => {
            cart.push(product);
            updateCart();
        });

        container.appendChild(li);
    });
}

// Создание категорий
createCards("Букеты", bouquets);
createCards("Одиночные цветы", singles);

// Корзина
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("total-sum");
const sendBtn = document.getElementById("send-order");

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${item.title} — ${item.price} ₽`;
        cartList.appendChild(li);

        total += item.price;
    });

    cartTotal.textContent = `Итого: ${total} ₽`;
}

