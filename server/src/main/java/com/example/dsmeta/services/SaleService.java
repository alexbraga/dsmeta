package com.example.dsmeta.services;

import com.example.dsmeta.entities.Sale;
import com.example.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class SaleService {
    @Autowired
    private SaleRepository repository;

    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
        LocalDate min = minDate.isEmpty() ? LocalDate.parse("2021-06-27") : LocalDate.parse(minDate);
        LocalDate max = maxDate.isEmpty() ? today : LocalDate.parse(maxDate);

        return repository.findSales(min, max, pageable);
    }
}
