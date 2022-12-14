package com.example.dsmeta.services;

import com.example.dsmeta.entities.Sale;
import com.example.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;

@Service
public class SmsService {
    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    @Autowired
    private SaleRepository saleRepository;

    public void sendSms(Long saleId) {
        Twilio.init(twilioSid, twilioKey);

        PhoneNumber to = new PhoneNumber(twilioPhoneTo);
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        Sale sale = saleRepository.findById(saleId).get();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM, yyyy");
        String date = sale.getDate().format(formatter);
        String msg = "Seller " + sale.getSellerName() + " was recognized for his/her efforts on " + date + ".\n" +
                     "\nTotal sold: " + "$" + sale.getAmount();

        Message message = Message.creator(to, from, msg).create();

        System.out.println(message.getSid());
    }
}
