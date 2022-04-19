package com.farid.eshop.controller;

import com.farid.eshop.model.Product;
import com.farid.eshop.service.ProductService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = { "", "/" })
    public Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    @CrossOrigin
    @GetMapping(value = {"/search"})
    public  Iterable<Product> search(@RequestParam("keyword") String keyword){
        return productService.search(keyword);
    }
}
