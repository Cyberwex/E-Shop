package com.farid.eshop.service;
import com.farid.eshop.model.OrderProduct;
import org.springframework.validation.annotation.Validated;


@Validated
public interface OrderProductService {

    OrderProduct create(OrderProduct orderProduct);
}