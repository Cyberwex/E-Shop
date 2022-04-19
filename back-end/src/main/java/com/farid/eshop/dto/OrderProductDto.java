package com.farid.eshop.dto;

import com.farid.eshop.model.Product;

public class OrderProductDto {

    private Product product;
    private Integer quantity;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
