package com.farid.eshop.repo;
import com.farid.eshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.name LIKE %:keyword%")
     public Iterable<Product> findAll (String keyword);
}