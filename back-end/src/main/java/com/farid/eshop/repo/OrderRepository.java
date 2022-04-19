package com.farid.eshop.repo;

import com.farid.eshop.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}