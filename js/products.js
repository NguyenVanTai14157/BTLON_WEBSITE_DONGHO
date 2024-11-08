    // Mảng products
    var products = [
        {
            id: 1,
            img: "../img/SANPHAMTRUNGBAI/anh1.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh1.webp",
            title: "Đồng hồ Omega Speedmaster",
            price: "150,000,000 VND",
            price_sale: "140,000,000 VND",
            power: "Automatic",
            brush_rotation: "42mm",
            speed: "Chronograph",
            noise_level: "30m Water Resistant",
            brand: "omega", quantity: 0
        },
        {
            id: 2,
            img: "../img/SANPHAMTRUNGBAI/anh2.jpg",
            imgindex: "../img/SANPHAMTRUNGBAI/anh2.jpg",
            title: "Đồng hồ Rolex Submariner",
            price: "250,000,000 VND",
            price_sale: "240,000,000 VND",
            power: "Automatic",
            brush_rotation: "40mm",
            speed: "Diver",
            noise_level: "300m Water Resistant",
            brand: "rolex", quantity: 0
        },
        {
            id: 3,
            img: "../img/SANPHAMTRUNGBAI/anh3.jpg",
            imgindex: "../img/SANPHAMTRUNGBAI/anh3.jpg",
            title: "Đồng hồ Patek Philippe Nautilus",
            price: "500,000,000 VND",
            price_sale: "480,000,000 VND",
            power: "Automatic",
            brush_rotation: "40mm",
            speed: "Luxury",
            noise_level: "120m Water Resistant",
            brand: "patek philippe", quantity: 0
        },
        {
            id: 4,
            img: "../img/SANPHAMTRUNGBAI/anh4.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh4.webp",
            title: "Đồng hồ TAG Heuer Carrera",
            price: "90,000,000 VND",
            price_sale: "85,000,000 VND",
            power: "Automatic",
            brush_rotation: "44mm",
            speed: "Chronograph",
            noise_level: "100m Water Resistant",
            brand: "tag heuer", quantity: 0
        },
        {
            id: 5,
            img: "../img/SANPHAMTRUNGBAI/dong-ho-cartier-santos-de-cartier-39-8mm-crwssa0037-sao-chep-4.jpg",
            imgindex: "../img/SANPHAMTRUNGBAI/dong-ho-cartier-santos-de-cartier-39-8mm-crwssa0037-sao-chep-4.jpg",
            title: "Đồng hồ Cartier Santos",
            price: "120,000,000 VND",
            price_sale: "115,000,000 VND",
            power: "Quartz",
            brush_rotation: "35mm",
            speed: "Dress",
            noise_level: "100m Water Resistant",
            brand: "cartier", quantity: 0
        },
        {
            id: 6,
            img: "../img/SANPHAMTRUNGBAI/anh6.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh6.webp",
            title: "Đồng hồ Seiko Presage",
            price: "20,000,000 VND",
            price_sale: "18,500,000 VND",
            power: "Automatic",
            brush_rotation: "40mm",
            speed: "Dress",
            noise_level: "50m Water Resistant",
            brand: "seiko", quantity: 0
        },
        {
            id: 7,
            img: "../img/SANPHAMTRUNGBAI/anh7.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh7.webp",
            title: "Đồng hồ Audemars Piguet Royal Oak",
            price: "1,000,000,000 VND",
            price_sale: "950,000,000 VND",
            power: "Automatic",
            brush_rotation: "41mm",
            speed: "Luxury",
            noise_level: "50m Water Resistant",
            brand: "audemars piguet", quantity: 0
        },
        {
            id: 8,
            img: "../img/SANPHAMTRUNGBAI/anh8.jpg",
            imgindex: "../img/SANPHAMTRUNGBAI/anh8.jpg",
            title: "Đồng hồ Breitling Navitimer",
            price: "150,000,000 VND",
            price_sale: "145,000,000 VND",
            power: "Automatic",
            brush_rotation: "43mm",
            speed: "Chronograph",
            noise_level: "30m Water Resistant",
            brand: "breitling", quantity: 0
        },
        {
            id: 9,
            img: "../img/SANPHAMTRUNGBAI/anh9.jpg",
            imgindex: "../img/SANPHAMTRUNGBAI/anh9.jpg",
            title: "Đồng hồ Hublot Big Bang",
            price: "350,000,000 VND",
            price_sale: "330,000,000 VND",
            power: "Automatic",
            brush_rotation: "44mm",
            speed: "Sport",
            noise_level: "100m Water Resistant",
            brand: "hublot", quantity: 0
        },
        {
            id: 10,
            img: "../img/SANPHAMTRUNGBAI/anh10.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh10.webp",
            title: "Đồng hồ Longines Master",
            price: "50,000,000 VND",
            price_sale: "48,000,000 VND",
            power: "Automatic",
            brush_rotation: "40mm",
            speed: "Dress",
            noise_level: "30m Water Resistant",
            brand: "longines", quantity: 0
        },
        {
            id: 11,
            img: "../img/SANPHAMTRUNGBAI/anh11.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh11.webp",
            title: "Đồng hồ IWC Portugieser",
            price: "250,000,000 VND",
            price_sale: "240,000,000 VND",
            power: "Automatic",
            brush_rotation: "41mm",
            speed: "Dress",
            noise_level: "30m Water Resistant",
            brand: "iwc", quantity: 0
        },
        {
            id: 12,
            img: "../img/SANPHAMTRUNGBAI/anh12.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh12.webp",
            title: "Đồng hồ Bvlgari Octo",
            price: "300,000,000 VND",
            price_sale: "290,000,000 VND",
            power: "Automatic",
            brush_rotation: "41mm",
            speed: "Luxury",
            noise_level: "100m Water Resistant",
            brand: "bvlgari", quantity: 0
        },
        {
            id: 13,
            img: "../img/SANPHAMTRUNGBAI/anh13.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh13.webp",
            title: "Đồng hồ Zenith Defy",
            price: "200,000,000 VND",
            price_sale: "190,000,000 VND",
            power: "Automatic",
            brush_rotation: "42mm",
            speed: "Chronograph",
            noise_level: "100m Water Resistant",
            brand: "zenith", quantity: 0
        },
        {
            id: 14,
            img: "../img/SANPHAMTRUNGBAI/anh14.avif",
            imgindex: "../img/SANPHAMTRUNGBAI/anh14.avif",
            title: "Đồng hồ Tissot Le Locle",
            price: "15,000,000 VND",
            price_sale: "14,000,000 VND",
            power: "Automatic",
            brush_rotation: "39mm",
            speed: "Dress",
            noise_level: "30m Water Resistant",
            brand: "tissot", quantity: 0
        },
        {
            id: 15,
            img: "../img/SANPHAMTRUNGBAI/anh15.webp",
            imgindex: "../img/SANPHAMTRUNGBAI/anh15.webp",
            title: "Đồng hồ Casio G-Shock",
            price: "5,000,000 VND",
            price_sale: "4,500,000 VND",
            power: "Quartz",
            brush_rotation: "45mm",
            speed: "Sport",
            noise_level: "200m Water Resistant",
            brand: "casio", quantity: 0
        },
        {
            id: 16,
            img: "../img/SANPHAMTRUNGBAI/anh16.jpg",
            imgindex: "../img/SANPHAMTRUNGBAI/anh16.jpg",
            title: "Đồng hồ Hamilton Khaki Field",
            price: "18,000,000 VND",
            price_sale: "17,000,000 VND",
            power: "Automatic",
            brush_rotation: "42mm",
            speed: "Field",
            noise_level: "100m Water Resistant",
            brand: "hamilton", quantity: 0
        },
        {
            id: 17,
            img: "../img/SANPHAMTRUNGBAI/anh17.png",
            imgindex: "../img/SANPHAMTRUNGBAI/anh17.png",
            title: "Đồng hồ Omega Seamaster",
            price: "200,000,000 VND",
            price_sale: "190,000,000 VND",
            power: "Automatic",
            brush_rotation: "41mm",
            speed: "Diver",
            noise_level: "300m Water Resistant",
            brand: "omega", quantity: 0
        }
    ];
    




    document.addEventListener("DOMContentLoaded", function () {
        updateCartItemCount();
        var container = document.getElementById("product-container");
        var productsPerPage = 8;
        var productsDisplayed = 0;

        // Function to display products
        function displayProducts(startIndex) {
            for (var i = startIndex; i < Math.min(products.length, startIndex + productsPerPage); i++) {
                var product = products[i];
                var productHTML = `
                    <div class="col-3 mt-2">
                        <div class="container cotSanPham">
                            <div class="khungAnh">
                                <a href="product_detail.html?id=${product.id}"><img src="${product.imgindex}" alt="${product.title}"></a>
                                <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                            </div>
                            <div class="khungAnh-content">
                                <a href="product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                                <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += productHTML;
            }
            // Update the number of products displayed
            productsDisplayed += productsPerPage;

            // Hide "Xem thêm" button if all products are displayed
            if (productsDisplayed >= products.length) {
                loadMoreButton.style.display = "none";
            }
        }

        // Call the function to display initial products
        displayProducts(0);

        // Function to handle "Xem thêm" button click
        var loadMoreButton = document.getElementById("load-more-button");
        loadMoreButton.addEventListener("click", function () {
            displayProducts(productsDisplayed);
        });

        var productId = getUrlParameter('id');
        var product = products.find(p => p.id === parseInt(productId));

        if (product) {
            var productDetailsContainer = document.getElementById('product-details-container');
            var productHTML = `
                <div>
                    <img src="${product.imgindex}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>Giá: ${product.price}</p>
                    <p>Giá khuyến mãi: ${product.price_sale}</p>
                </div>
            `;
            productDetailsContainer.innerHTML = productHTML;
        } else {
            // Handle the case when product is not found
            var productDetailsContainer = document.getElementById('product-details-container');
            productDetailsContainer.innerHTML = "<p>Sản phẩm không tồn tại.</p>";
        }

    });

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }



    // Lưu thông tin giỏ hàng vào Local Storage
        function addToCart(productId) {
            var product = products.find(p => p.id === productId);
            if (product) {
                // Lấy danh sách sản phẩm từ localStorage
                var cart = JSON.parse(localStorage.getItem('cart')) || [];
                
                // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
                var existingProduct = cart.find(item => item.id === productId);
                if (existingProduct) {
                    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
                    existingProduct.quantity += 1;
                } else {
                    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào giỏ hàng với số lượng là 1
                    product.quantity = 1;
                    cart.push(product);
                }
                
                // Lưu danh sách sản phẩm vào localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Cập nhật số lượng sản phẩm trong giỏ hàng
                updateCartItemCount();
                
                alert("Sản phẩm đã được thêm vào giỏ hàng.");
            } else {
                alert("Sản phẩm không tồn tại.");
            }
        }

        function updateCartItemCount() {
            // Lấy danh sách sản phẩm từ localStorage
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Cập nhật số lượng sản phẩm trong giỏ hàng
            var cartItemCount = cart.length;

            // Hiển thị số lượng sản phẩm trên biểu tượng giỏ hàng
            var cartItemCountElement = document.getElementById("cart-item-count");
            cartItemCountElement.textContent = cartItemCount;
        }



    function displayProductsByBrand(brandName) {
        // Lọc các sản phẩm theo nhãn hiệu
        var filteredProducts = products.filter(product => product.brand === brandName);

        // Hiển thị các sản phẩm tương ứng
        displayProducts(filteredProducts);
    }

    function displayProducts(products) {
        // Xóa các sản phẩm hiện có trước khi hiển thị sản phẩm mới
        var container = document.getElementById("product-container");
        container.innerHTML = '';

        // Hiển thị các sản phẩm mới
        products.forEach(product => {
            var productHTML = ` 
                <div class="col-3 mt-2">
                    <div class="container cotSanPham">
                        <div class="khungAnh">
                            <a href="product_detail.html?id=${product.id}"><img src="${product.imgindex}" alt="${product.title}"></a>
                            <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                        </div>
                        <div class="khungAnh-content">
                            <a href="product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                            <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        // Lọc sản phẩm khuyến mãi
        var hotSaleProducts = products.filter(product => product.price_sale);

        // Hiển thị danh sách sản phẩm khuyến mãi
        displayHotSaleProducts(hotSaleProducts);
    });

    function displayHotSaleProducts(products) {
        var khuyenMaiHotContainer = document.querySelector('.khuyenmaihot');

        products.forEach(function(product) {
            // Tạo phần tử HTML cho mỗi sản phẩm
            var productHTML = `
            <div class="col-3 mt-2">
            <div class="container cotSanPham">
                <div class="khungAnh">
                    <a href="product_detail.html?id=${product.id}"><img src="${product.img}" alt="${product.title}"></a>
                    <a class="themvaogiohang btn" href="#" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</a>
                </div>
                <div class="khungAnh-content">
                    <a href="product_detail.html?id=${product.id}"><h3 class="title">${product.title}</h3></a>
                    <p class="temp1"><img src="../img/anhChiTietSP/image.png" alt=""> <span>GIÁ SỐC CUỐI TUẦN</span></p>
                    <span class="price">${product.price_sale} <del class="price_sale">${product.price}</del></span>
                </div>
            </div>
        </div>
            `;

            // Thêm sản phẩm vào phần khuyenmaihot
            khuyenMaiHotContainer.innerHTML += productHTML;
        });
    }
    let toggle = true;

    function switchImages() {
        const imagesSet1 = ["../img/GIOITHIEU/gioithieu1.jpg", "../img/GIOITHIEU/gioithieu2.jpg", "../img/GIOITHIEU/gioithieu3.jpg"];
        const imagesSet2 = ["../img/GIOITHIEU/gioithieu4.jpg", "../img/GIOITHIEU/gioithieu5.jpg", "../img/GIOITHIEU/gioithieu6.jpg"];

        // Chuyển đổi ảnh giữa hai bộ ảnh
        const currentSet = toggle ? imagesSet1 : imagesSet2;

        // Đổi ảnh cho mỗi phần tử ảnh
        document.getElementById("img1").src = currentSet[0];
        document.getElementById("img2").src = currentSet[1];
        document.getElementById("img3").src = currentSet[2];

        // Đổi trạng thái để lần tiếp theo dùng bộ ảnh còn lại
        toggle = !toggle;
    }

    // Tự động chuyển đổi ảnh mỗi 1.5 giây
    setInterval(switchImages, 1500);

    // Giỏ hàng
    








