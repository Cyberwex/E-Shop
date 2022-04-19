package com.farid.eshop.repo;
import com.farid.eshop.model.OrderProductPK;
import com.farid.eshop.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends JpaRepository<OrderProduct, OrderProductPK> {
}
