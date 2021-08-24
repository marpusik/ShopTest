window.onload = function () {
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains('menu__arrow')) {
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
                _removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
            }
        }
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active');
        }
        if (targetElement.classList.contains('products__more')) {
            getProducts(targetElement);
            e.preventDefault();
        }
    }
    const headerElement = document.querySelector('.header');
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    };
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
    async function getProducts(button) {
        if (!button.classList.contains('_hold')) {
            button.classList.add('_hold');
            const file = "json/products.json";
            let response = await fetch(file, {
                method: 'GET'
            });
            if (response.ok) {
                let result = await response.json();
                loadProducts(result);
                button.classList.remove('_hold');
                button.remove();
            } else {
                alert("Ошибка");
            }
        }
    }
    function loadProducts(data) {
        const productsItems = document.querySelector('.products__items');
        data.products.forEach(item => {
            const productId = item.id;
            const productUrl = item.url;
            const productImage = item.image;
            const productTitle = item.title;
            const productText = item.text;
            const productPrice = item.price;
            const productOldPrice = item.priceOld;
            const productShareUrl = item.shareUrl;
            const productLikeUrl = item.likeUrl;
            const productLabels = item.labels;
            let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
            let productTemplateEnd = `</article>`;
            let productTemplateLabels = '';
            if (productLabels){
            let productTemplateLabelsStart = `<div class="item-product__labels">`;
            let productTemplateLabelsEnd =
        }
                            <div class="item-product__label item-product__label_sale">-30%</div>
                            <div class="item-product__label item-product__label_new">New</div>
                        </div>
                        <a href="" class="item-product__image _ibg">
                            <img src="img/products/01.jpg" alt="">
                        </a>
                        <div class="item-product__body">
                            <div class="item-product__content">
                                <h5 class="item-product__title">Syltherine</h5>
                                <div class="item-product__text">Stylish cafe chair</div>
                            </div>
                            <div class="item-product__prices">
                                <div class="item-product__price">Rp 2.500.000</div>
                                <div class="item-product__price item-product__price_old">Rp 3.500.000</div>
                            </div>
                            <div class="item-product__actions actions-product">
                                <div class="actions-product__body">
                                    <a href="" class="actions-product__button btn btn_white">Add to cart</a>
                                    <a href="" class="actions-product__link _icon-share">Share</a>
                                    <a href="" class="actions-product__link _icon-favorite">Like</a>
                                </div>
                            </div>
                        </div>
                    </article>

            `
        });
    }
}