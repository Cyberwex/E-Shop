package com.farid.eshop.service;

import com.farid.eshop.model.Order;
import org.springframework.validation.annotation.Validated;

@Validated
public interface OrderService {

    Iterable<Order> getAllOrders();

    Order create(Order order);

    void update(Order order);
}