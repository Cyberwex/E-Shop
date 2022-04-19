package com.farid.eshop.service;

import com.farid.eshop.model.Product;
import org.springframework.validation.annotation.Validated;

import java.util.List;


@Validated
public interface ProductService {

    Iterable<Product> getAllProducts();

    Iterable<Product> search(String keyword);

    Product getProduct(long id);

    Product save(Product product);
}
