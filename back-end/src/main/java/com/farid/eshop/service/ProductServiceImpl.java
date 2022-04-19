package com.farid.eshop.service;

import com.farid.eshop.model.Product;
import com.farid.eshop.repo.ProductRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProduct(long id) {
        return productRepository.findById(id).orElseThrow();
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Iterable<Product> search(String keyword) {
        if(keyword!=null){
            return productRepository.findAll(keyword);
        }
        return productRepository.findAll();
    }
}

