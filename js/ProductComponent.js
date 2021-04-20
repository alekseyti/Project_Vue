Vue.component('products', {
   props: ['products'],
   template: `<div class="products">
                <product v-for="item of products" 
                :key="item.id_product" 
                :product="item"></product>
               </div>`
});
Vue.component('product', {
    props: ['product'],
    template: `

            <figure class="product" >
  
                    
                    <img :src="'img/' + product.id_product + '.png'">
                    <figcaption>
                        {{product.product_name}}
                    </figcaption>
                    <div class="price">
                        {{product.price}}
                    </div>
                    <button class="button price__button_width" @click="$parent.$emit('add-product', product)">BUY NOW</button>
                </figure>

            `
})