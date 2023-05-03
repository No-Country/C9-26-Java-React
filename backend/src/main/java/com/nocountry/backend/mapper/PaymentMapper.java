package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.PaymentDetailsDto;
import com.nocountry.backend.dto.PaymentListDto;
import com.nocountry.backend.model.Payment;
<<<<<<< HEAD
import com.nocountry.backend.utils.MapperUtil;
=======
import com.nocountry.backend.util.MapperUtil;
>>>>>>> backend-develop

@Component
public class PaymentMapper {

    public PaymentDetailsDto convertToDetailsDto(Payment payment) {
        return MapperUtil.map(payment, PaymentDetailsDto.class);
    }

    public Payment convertToEntity(PaymentDetailsDto paymentDetailsDto) {
        return MapperUtil.map(paymentDetailsDto, Payment.class);
    }

    public List<PaymentDetailsDto> convertToDetailsDtoList(List<Payment> paymentList) {
        return MapperUtil.mapList(paymentList, PaymentDetailsDto.class);
    }

    public List<PaymentListDto> convertToDtoList(List<Payment> paymentList) {
        return MapperUtil.mapList(paymentList, PaymentListDto.class);
    }

    public List<Payment> convertToEntityList(List<PaymentListDto> paymentListDto) {
        return MapperUtil.mapList(paymentListDto, Payment.class);
    }
}
