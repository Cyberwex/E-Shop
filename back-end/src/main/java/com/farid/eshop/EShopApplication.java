package com.farid.eshop;


import com.farid.eshop.model.Product;
import com.farid.eshop.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EShopApplication {

    public static void main(String[] args) {
        SpringApplication.run(EShopApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductService productService) {
        return args -> {
            productService.save(new Product(1L, "TV Set", 300.00, "https://www.benchmark.rs/assets/img/article/large/fb52b40f2d77fb2ac588c3b06b5663a0.jpg"));
            productService.save(new Product(2L, "Game Console", 200.00, "https://ixbt.online/gametech/sadm_images/00jin/2013/july/12/111.jpg?w=948"));
            productService.save(new Product(3L, "Sofa", 100.00, "https://cdn.xxl.thumbs.canstockphoto.ru/%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0%D0%B4-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%BA%D0%BB%D0%B8%D0%BF%D0%B0%D1%80%D1%82_csp2688072.jpg"));
            productService.save(new Product(4L, "Icecream", 5.00, "https://cutecursors.com/images/packs/184.png"));
            productService.save(new Product(5L, "Beer", 3.00, "https://invac.com.tr/wp-content/uploads/2021/03/yd_stybelbeer_israel-200x100.png"));
            productService.save(new Product(6L, "Phone", 500.00, "https://media.pocketnow.com/styles/xxlarge/public/2019/10/phone-cables.jpg?itok=r_NLPzJz"));
            productService.save(new Product(7L, "Watch", 30.00, "https://media.pocketnow.com/styles/large/public/2020/07/samsung_galaxy_watch_3_winfuture.jpg?itok=xhQ3n8wr"));
        };
    }
}